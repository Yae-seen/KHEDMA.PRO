export function LastVerified({ date }: { date: string }) {
  return (
    <p className="mt-8 text-xs font-medium text-muted">
      Dernière vérification des informations :{" "}
      <time dateTime={date} className="font-semibold text-ink">
        {date}
      </time>
    </p>
  );
}
