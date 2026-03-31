# 🇬🇭 Know Your Roads Ghana

A free, public website helping Ghanaian citizens track road construction contracts under the **Big Push programme** — Ghana's largest road infrastructure initiative.

**Live site:** [cudjoe682021.github.io/BigPush_Ghana](https://cudjoe682021.github.io/BigPush_Ghana/ghana_roads_tracker.html)

---

## What It Does

Tracks **91 road projects** across all 16 regions of Ghana — 81 RTI-confirmed contracts and 10 additional roads from the Ministry of Roads & Highways (MRH) official list.

For every road project you can see:
- Contractor name and nationality (Ghanaian or international)
- Contract value and awarding agency
- Award date and estimated completion date
- Work type (rehabilitation, construction, upgrading, dualisation)

---

## Features

### Search & Filter
- Search by road name, town, region, or contractor
- Filter by region, work type, agency, or contractor nationality

### Views
- **Table view** — sortable columns with all contract details
- **Card view** — mobile-friendly layout, great for sharing on WhatsApp
- **Timeline / Gantt chart** — visual overview of all projects by award and completion date

### Citizen Reporting (per road)
- **👁️ I Saw This** — report what you observed on site (work in progress, stalled, or completed)
- **💬 Comments** — leave updates or questions about any road project
- **📱 QR Code** — scan and share any road directly from your phone
- **📤 Share** — share any project to WhatsApp or social media

### Contact Directory
- GHA regional offices across all 16 regions
- MRH, DFR, DUR, and PPA agency contacts
- Roads & Transport Minister and Parliamentary Committee

---

## Data Sources

| Source | Description |
|--------|-------------|
| **RTI Data — The Fourth Estate (March 2026)** | 81 sole-sourced contracts awarded Sep 2025 – Jan 2026 |
| **MRH Official Big Push List** | 10 additional roads officially authorized but not yet publicly disclosed |

---

## Tech Stack

- Pure HTML, CSS, and JavaScript — no frameworks, no build tools
- [Chart.js 4.4.0](https://www.chartjs.org/) — bar, doughnut, and Gantt timeline charts
- [qrcode.js 1.5.3](https://github.com/davidshimjs/qrcodejs) — QR code generation
- `localStorage` — citizen reports and comments stored on-device
- Hosted on **GitHub Pages**

---

## Contributing

Found a missing road or incorrect data? Open an issue or submit a pull request.

---

*Built with data from The Fourth Estate RTI investigation and the Ministry of Roads & Highways.*
