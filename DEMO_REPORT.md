# GIFT Autonomous — Development Report

**Prepared for:** Quadvexa pre-sales discussion  
**Date:** 19 November 2026  
**Status:** Unofficial frontend concept for GitHub Pages; not a production institutional service.

## Delivered

| Route | What is demonstrated |
| --- | --- |
| `/` | Editorial homepage, responsive navigation, original campus photography, programme discovery, sourced institutional story, cautious recognition/career context, student-life gallery and sample notices. |
| `/programmes` | Search, level filters, empty state and expandable source details for all 27 collected programme records. Unverified intake values are deliberately hidden. |
| `/departments/cse` | Department introduction, three publicly referenced lab areas, classroom image and official source link. No invented faculty identities. |
| `/admin` | Explicitly simulated publishing workspace: create, preview, remove and reset fictitious notices. Published samples appear on the homepage in the same browser profile. |

## Asset and content provenance

- The supplied pack contains 41 curated local images and 80 additional discovered image files. All 41 curated image paths in the manifest are present; none were missing in this workspace. Eleven selected original image files were copied into `public/gift/`; nine image elements on the homepage loaded successfully in Edge.
- `data/asset-manifest.json` retains original public URLs, source pages and review caveats. `data/institution-content.json` and `data/programmes.json` retain the supplied source data. This public concept is not a grant of reuse rights; institutional approval is needed for official adoption.
- Three PDF references and other downloaded assets were not migrated. No questionable accreditation grade, placement statistic, current intake number or private data is presented as verified fact.

## Verification

- `npm run build`: passed; all four pages statically prerendered.
- GitHub Pages export uses a `/gift-demo-concept` path prefix and trailing-slash routes; `deploy-pages.ps1` publishes the generated `gh-pages` branch.
- `npx tsc --noEmit`: passed.
- `npm run lint`: passed.
- Playwright with installed Microsoft Edge at 1440×900 desktop and 390×844 mobile: navigation, mobile menu, search/filter (27 total; eight B.Tech; three “computer” B.Tech results), expandable details, CSE labs, local notice publish/public view/reset and empty search state passed.
- Desktop and mobile horizontal overflow: 0 px on tested pages. Homepage images: 9/9 loaded after lazy images entered the viewport. Page console/runtime errors: none observed.
- Axe WCAG 2 A/AA and 2.1 A/AA automated checks: zero reported violations on all four desktop routes and all four mobile routes after contrast and label fixes. Keyboard Tab first reaches the skip link. Automated checks are not a full accessibility audit.
- External requests blocked during an Edge check: local homepage and all 27 finder listings remained usable. Official destination links and mailto naturally require network/email software.

## Screenshots

- `output/playwright/home-desktop-viewport.png` and `home-mobile-viewport.png`: first impression.
- `output/playwright/home-desktop.png` and `home-mobile.png`: full homepage.
- `output/playwright/programmes-desktop.png` and `programmes-mobile.png`: programme finder.
- `output/playwright/cse-desktop.png` and `cse-mobile.png`: CSE preview.
- `output/playwright/admin-desktop.png` and `admin-mobile.png`: sample notice workflow. Screenshot samples were reset afterward.

## Known limits

- No backend, database, actual authentication, role permissions, network submission, admission form, live notices, production SEO or analytics. Browser-local notices are isolated by browser/profile and capped at ten recent samples.
- Programme availability, admissions rules, academic intake, faculty information, accreditation validity and placement outcomes require institutional verification. The public-source dataset is a design reference, not a current offer.
- A synthetic timetable and About route were cut to preserve homepage quality and QA time. Official timetable/CMS links are clearly marked external and are not available offline.
- Some supplied historical photographs have modest resolution. The public concept uses images collected from public GIFT sources; rights and approval should be checked before official adoption.

## Three-minute presentation

1. **0:00–0:50:** Open the homepage at 1440×900. Show campus visual, institutional story, programme entry and student-life imagery.
2. **0:50–1:25:** Switch to 390×844. Open the mobile menu and navigate to Programmes.
3. **1:25–2:05:** Filter B.Tech, search “computer”, expand a listing, then open the CSE department preview.
4. **2:05–2:45:** Open Admin preview; explain it is not secured or connected. Publish a fictitious notice and follow “View public notices” to the homepage.
5. **2:45–3:00:** Reset notices and close by distinguishing the proposal from a production implementation.
