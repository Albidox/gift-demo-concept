# GIFT Autonomous concept preview

Public, unofficial Quadvexa frontend concept for a GIFT management meeting. This is **not** the institution’s official site or a production system.

## Run locally

From this directory in PowerShell:

```powershell
npm ci
npm run dev -- -p 3000
```

Open http://localhost:3000. On Windows, `start-demo.bat` starts the development server after dependencies are installed. `npm run build` produces a static export in `out/`.

## GitHub Pages

The public concept is hosted at https://albidox.github.io/gift-demo-concept/. In the repository's **Settings → Pages**, select **Deploy from a branch**, `gh-pages`, `/ (root)`. The publish script builds with the `/gift-demo-concept` path prefix and pushes only the generated static export to `gh-pages`.

To publish a local update from this checkout:

```powershell
git add -A
git commit -m "Update concept"
git push origin HEAD:main
.\deploy-pages.ps1
```

Wait for the **pages build and deployment** run in the repository's Actions tab to succeed. The script force-updates only the generated `gh-pages` branch; do not edit that branch manually. This is a static site; the admin preview remains browser-local, with no authentication or backend.

The four local routes are `/`, `/programmes`, `/departments/cse` and `/admin`. The admin page creates **fictitious browser-local notices**; use its reset control before the meeting if needed. No accounts, live submissions or server are involved. External links open official GIFT pages and require internet; the demo itself uses local content and images.

Original image sources and review notes are retained in `data/asset-manifest.json`; selected files are in `public/gift/`. Current admissions, accreditation and placement details require confirmation from GIFT. The images remain credited to their public sources; this concept does not grant rights to reuse them elsewhere.

See `DEMO_REPORT.md` for test results, limitations and the presentation sequence. Screenshots are in `output/playwright/`.
