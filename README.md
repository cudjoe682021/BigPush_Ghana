# 🇬🇭 RoadWatch Ghana

**"See the Progress. Report the Truth."**

A free, public platform helping Ghanaian citizens track public infrastructure projects — starting with road construction contracts under the **Big Push programme**, Ghana's largest road infrastructure initiative. RoadWatch Ghana grew out of the original *Know Your Roads Ghana* tracker.

**Live site:** [cudjoe682021.github.io/BigPush_Ghana](https://cudjoe682021.github.io/BigPush_Ghana/ghana_roads_tracker.html)

---

## Mission & Vision

**Mission.** RoadWatch Ghana empowers every citizen to monitor public infrastructure projects by providing real-time, verified updates through community reporting, official data, and (in future phases) artificial intelligence.

**Vision.** To become Ghana's largest public platform for tracking government infrastructure projects, increasing transparency, accountability, and citizen participation.

---

## What It Does

Tracks **76 road projects** across Ghana, individually verified against the Ministry of Roads & Highways' own live project database (mrh.gov.gh) — contractor, contract sum, award date, agency, region, and real per-contract kilometre lengths.

For every road project you can see contractor, contract value, awarding agency, award date, estimated completion, real **government-reported construction progress** (where published, tracked month over month), and a live **Road Health Score**.

---

## Features

### Search & Filter / Views
- Search by road name, town, region, or contractor; filter by region, work type, agency, or contractor nationality
- **Table**, **Card**, and **Gantt timeline** views

### Citizen Reporting (per road)
- **👁️ I Saw This** — report what you observed on site (work in progress, stalled, or completed)
- **💬 Comments** — leave updates, with an optional attached **photo or video** (camera capture on mobile, stored via IndexedDB so real video clips fit — not just localStorage-sized thumbnails)
- **🚨 Report an Emergency** — flag collapsed bridges, flooded roads, washed-away culverts, dangerous potholes, or broken traffic lights
- **📱 QR Code** / **📤 Share** — share any project to WhatsApp or social media

### Find Your Road
A one-click **region picker** (with live project counts per region) leads straight into a card-based list — the citizen-facing path (find your road → see status → report) comes immediately after the hero, ahead of any dashboard content. Power-user filters (contractor, work type, agency, notes) are tucked behind a collapsed "Advanced filters" toggle, and the full Table view is still one click away.

### Road Health Score
A transparent 0–100 score per project combining government data confidence, real government-reported progress (where published), community report volume, and comment activity (with a penalty for open emergency reports). Shown on every card, table row, and project detail modal, alongside a distinct 📊 badge showing the real construction-progress percentage and its month-over-month trend when the Ministry has published one.

### Reputation & Gamification
Citizens earn points for status reports (+5), comments (+8, +18 with a photo), and emergency reports (+12), progressing through **Bronze (50) → Silver (250) → Gold (750) → Diamond (2,000) → National Ambassador (10,000)** tiers. Reputation is tracked on-device — see the **Reputation** section for the honest caveat about why there's no cross-device leaderboard yet.

### Public Alerts & Weekly Digest
A live feed of emergency reports and notable status updates, plus a rolling 7-day digest of citizen activity — all generated client-side from your own device's reports.

### The RoadWatch Ecosystem
Roads is live today. Schools, Hospitals, Water, Energy, and Markets & Public Buildings modules are on the roadmap (Phase 5) and will only launch with real, sourced data.

### Contractor Directory
Every contractor awarded a Big Push contract, ranked by total contract value, with region coverage and nationality — an award-history summary, not a performance rating (that data isn't public yet).

### Open Data
Download the full contracts dataset as JSON or CSV, free to reuse with attribution.

### Contact Directory
GHA regional offices, MRH/DFR/DUR/PPA agency contacts, and the Roads & Transport Minister and Parliamentary Committee.

### Data & Analysis Hub
Everything chart/dashboard-heavy — KPI stats, programme context, all charts, the Gantt timeline, flagship projects, the Contractor Directory, and Open Data — lives in one consolidated section after the citizen-facing content, for researchers, journalists, and power users who want to go deeper.

---

## Data Sources

| Source | Description |
|--------|-------------|
| **Ministry of Roads & Highways project database (mrh.gov.gh)** | All 76 contracts, individually verified against each project's own official page — contractor, contract sum, dates, agency, region, and real government-reported progress percentages |

Community reports, reputation points, and alerts are generated by site visitors and stored on their own device — they are not verified government data, and are clearly labelled as such throughout the site.

---

## Tech Stack

- Pure HTML, CSS, and JavaScript — no frameworks, no build tools
- [Chart.js 4.4.0](https://www.chartjs.org/) — bar, doughnut, and Gantt timeline charts
- [qrcode.js 1.5.3](https://github.com/davidshimjs/qrcodejs) — QR code generation
- `localStorage` — citizen reports, reputation, and alerts stored on-device
- `IndexedDB` — photo/video blobs stored on-device (higher quota than localStorage allows)
- Hosted on **GitHub Pages**

This is the Phase 1 web MVP. The longer-term vision (Flutter mobile app, NestJS/PostgreSQL+PostGIS backend, Firebase auth/push, AI-assisted photo verification, government dashboards) requires real cloud infrastructure and is tracked as future phases, not implemented here.

---

## Contributing

Found a missing road or incorrect data? Open an issue or submit a pull request.

---

*Built with data from the Ministry of Roads & Highways' official Big Push project lists.*
