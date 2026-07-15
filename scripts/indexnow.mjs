// IndexNow submitter — pings search engines (Bing, Yandex, and the shared
// IndexNow endpoint) with the site's URLs for near-instant (re)indexing.
//
// Prereqs: the site must be LIVE and serve the key file at
//   https://khedma.pro/91f18365b37142a2b97cbc79171e5447.txt
// Usage:  node scripts/indexnow.mjs            (submits all sitemap URLs)
//         node scripts/indexnow.mjs /concours /allemagne   (specific paths)

const HOST = "khedma.pro";
const BASE = `https://${HOST}`;
const KEY = "91f18365b37142a2b97cbc79171e5447";
const KEY_LOCATION = `${BASE}/${KEY}.txt`;

async function sitemapUrls() {
  const res = await fetch(`${BASE}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml → ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

async function main() {
  const args = process.argv.slice(2);
  const urlList = args.length ? args.map((p) => (p.startsWith("http") ? p : BASE + p)) : await sitemapUrls();
  if (!urlList.length) throw new Error("no URLs to submit");

  const body = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList };
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });
  console.log(`IndexNow: submitted ${urlList.length} URLs → HTTP ${res.status} ${res.statusText}`);
  if (!res.ok) console.log(await res.text());
}

main().catch((e) => {
  console.error("IndexNow failed:", e.message);
  process.exit(1);
});
