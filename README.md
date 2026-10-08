# Ayoleyi — Data Analytics & Business Intelligence Portfolio

This repository contains my public portfolio website, built with **React, Vite and Tailwind CSS**.

**Site URL:** https://ayoleyi-portfolio.vercel.app/

I use the site to introduce my background in analytics, business intelligence and reporting automation, and to show selected projects with links to code, documentation and available demos.

## What's featured

- **Healthcare Data Warehouse:** SQL Server, reproducible synthetic healthcare data, data validation and Power BI.
- **Jumia Smartphone Market Analysis:** Python scraping, cleaning, pricing/seller comparisons and SQL.
- **Hytale Player & Server Analytics:** simulated player analytics alongside real local-server telemetry, kept separate.
- **PII Privacy & Data Quality:** quality checks and de-identification of synthetic records.
- **AI Document Extraction QA:** JSON Schema and invoice arithmetic/reconciliation checks.
- **Excel Chocolate Sales:** historical sales reporting, KPI views and scenario planning.

I also keep a separate link to my exploratory computational biology work.

## Run locally

Requirements: Node.js compatible with Vite 8 (Node.js 20.19+ or 22.12+) and npm.

```bash
npm ci
npm run dev
```

For a production build:

```bash
npm run check:content
npm run build
```

The build output is in `dist/`. Preview with `npm run preview`.

## Editing content

| File | Responsibility |
| --- | --- |
| `src/components/Hero.jsx` | Intro, professional positioning and contact actions |
| `src/components/Projects.jsx` | Project descriptions, evidence, repository and demo links |
| `src/components/Experience.jsx` | Experience snapshots without exposing private data |
| `src/components/Contact.jsx` | Recruiter contact options |
| `src/App.jsx` | Navigation and page composition |
| `index.html` | Metadata and social previews |
| `scripts/check-content.mjs` | Simple guardrails for known content/link regressions |

The public media files are in `public/images` and `public/videos`.

## Data integrity and scope

- Healthcare, privacy and the Hytale synthetic demonstration use **synthetic data**; they are not real client or population results.
- Hytale's real observed telemetry is from a **controlled local test server**, not a production-wide player population.
- Jumia data is a snapshot of **product listings**, not purchase transactions or market share.
- I describe commercial work without publishing client records or unsupported outcomes.

## Before deploying

1. Run `npm run check:content` and `npm run build`.
2. Open all project links and confirm the external demo is running.
3. Confirm that `https://ayoleyi-portfolio.vercel.app/` is still the correct public production domain.
4. Review content and CV positioning against current applications.
5. Preview the mobile layout and video playback before merging or deploying.

This repo is the website only. The analysis source code lives in the linked project repositories.
