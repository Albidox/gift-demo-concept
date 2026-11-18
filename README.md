# GIFT Autonomous concept preview

Public, unofficial Quadvexa frontend concept for a GIFT management meeting. This is **not** the institution’s official site or a production system.

## Run locally

From this directory in PowerShell:

```powershell
npm ci
npm run dev -- -p 3000
```

Open http://localhost:3000. On Windows, `start-demo.bat` starts the development server in this directory after dependencies are installed. For the tested production build, run `npm run build` and `npm run start -- -p 3000`.

The four local routes are `/`, `/programmes`, `/departments/cse` and `/admin`. The admin page creates **fictitious browser-local notices**; use its reset control before the meeting if needed. No accounts, live submissions or server are involved. External links open official GIFT pages and require internet; the demo itself uses local content and images.

Original image sources and review notes are retained in `data/asset-manifest.json`; selected files are in `public/gift/`. Current admissions, accreditation and placement details require confirmation from GIFT. The images remain credited to their public sources; this concept does not grant rights to reuse them elsewhere.

See `DEMO_REPORT.md` for test results, limitations and the presentation sequence. Screenshots are in `output/playwright/`.
