-- Khedma Pro backend schema — accounts, a verified job board, saved jobs and
-- application tracking. Apply with the Supabase SQL editor or the CLI:
--   supabase db push   (or paste this into the SQL editor)
-- Row-Level Security is ON everywhere; jobs are publicly readable only once
-- published, and every user sees only their own saved jobs / applications.

-- ---------------------------------------------------------------------------
-- profiles: one row per auth user
-- ---------------------------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text,
  city text,
  created_at timestamptz not null default now()
);
alter table public.profiles enable row level security;

create policy "profiles: read own" on public.profiles
  for select using (auth.uid() = id);
create policy "profiles: upsert own" on public.profiles
  for insert with check (auth.uid() = id);
create policy "profiles: update own" on public.profiles
  for update using (auth.uid() = id);

-- Auto-create a profile when a user signs up.
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data ->> 'full_name')
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------------------------------------------------------------------------
-- jobs: verified job board (admin/service-role writes only)
-- ---------------------------------------------------------------------------
create table if not exists public.jobs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  company text not null,
  city text,
  sector text,
  description text,
  apply_url text,
  source text,
  is_verified boolean not null default true,
  published_at timestamptz,
  created_at timestamptz not null default now()
);
alter table public.jobs enable row level security;

-- Anyone (incl. anon) may read published, verified jobs. No client writes —
-- inserts/updates go through the service-role key (admin script / server action).
create policy "jobs: public read published" on public.jobs
  for select using (published_at is not null and is_verified = true);

create index if not exists jobs_published_idx on public.jobs (published_at desc);
create index if not exists jobs_city_idx on public.jobs (city);
create index if not exists jobs_sector_idx on public.jobs (sector);

-- ---------------------------------------------------------------------------
-- saved_jobs: a user's shortlist
-- ---------------------------------------------------------------------------
create table if not exists public.saved_jobs (
  user_id uuid not null references auth.users (id) on delete cascade,
  job_id uuid not null references public.jobs (id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, job_id)
);
alter table public.saved_jobs enable row level security;

create policy "saved_jobs: manage own" on public.saved_jobs
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ---------------------------------------------------------------------------
-- applications: track where the user applied
-- ---------------------------------------------------------------------------
create type public.application_status as enum ('a_postuler', 'postule', 'entretien', 'refuse', 'accepte');

create table if not exists public.applications (
  user_id uuid not null references auth.users (id) on delete cascade,
  job_id uuid not null references public.jobs (id) on delete cascade,
  status public.application_status not null default 'a_postuler',
  note text,
  updated_at timestamptz not null default now(),
  primary key (user_id, job_id)
);
alter table public.applications enable row level security;

create policy "applications: manage own" on public.applications
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
