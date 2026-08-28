# Quick reference

## Commands

```bash
npm install
npm run dev
npm run build
```

In Cursor: **Terminal → Run Task…** → `astro-dev` / `astro-build` / `astro-preview`.

## Where things live

| What | Where |
|---|---|
| UI copy (de/ru/en) | `src/lib/messages.ts` |
| Legal prose | `src/lib/legal.ts` |
| Partner / membership URLs | `src/lib/links.ts` |
| Page chrome | `src/views/*.astro` |
| Locale routes | `src/pages/` plus `en/` and `ru/` |
| Courses & jobs | `src/content/` |
| Inquiry API | `src/pages/api/inquiry.ts` |
| Inquiry client | `src/scripts/inquiry.ts` |

New public page: one view, then three thin wrappers (`src/pages/foo.astro`, `en/foo.astro`, `ru/foo.astro`).

## Deploy

- GitHub: https://github.com/suesheng/ulpan-ivrit-de (`master`)
- Vercel project: `ulpan-ivrit-de` (Frankfurt)
- Production: https://www.ulpan-ivrit.de
- Preview alias: https://ulpan-ivrit-de.vercel.app

Push to `master` deploys production. Optional server env on Vercel: `BREVO_API_KEY`, `BREVO_SENDER`.

## DNS (united-domains)

Keep nameservers `ns.udag.de` / `ns.udag.net` / `ns.udag.org`.

- A `@` → `76.76.21.21`
- CNAME `www` → `cname.vercel-dns.com.`
