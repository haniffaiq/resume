# Portfolio content plan

Source inputs:
- Current portfolio repo copy in this branch.
- Uploaded CV PDF: `/home/ubuntu/.hermes/cache/documents/doc_9124d2278026_Hanif Faiq-resume updated.pdf`.

This document is the source of truth for the next portfolio/CV copy implementation cards. Keep implementation changes aligned to this plan unless Hanif confirms a different factual source.

## Positioning

Use a concise positioning line that emphasizes DevOps + Backend + Automation + Data instead of spreading the headline across every possible role.

Recommended headline:

> DevOps Engineer and Backend Developer focused on automation, scalable systems, and data-driven operations.

Recommended short summary:

> IT professional with 5+ years of experience across DevOps, backend engineering, automation, and data systems. I build reliable cloud and application platforms using AWS, GCP, Docker, CI/CD, Python, PostgreSQL, and monitoring stacks, with recent work scaling WhatsApp automation to 500K+ messages/month and delivering real-time telecom incident detection.

Recommended role tags:
- DevOps
- Backend
- Automation
- Data

Avoid over-positioning as a frontend-first profile. Frontend work can remain visible in project details and full-stack examples, but the top-level narrative should lead with DevOps, backend, automation, and data.

## Copy corrections from the uploaded CV

Apply these typo/style fixes when updating portfolio and CV copy:

| Current/incorrect copy | Correct copy | Notes |
| --- | --- | --- |
| `Google Loocker` | `Google Looker` | Prodigi Insurance data visualization bullet. |
| `Gradana` | `Grafana` | FINNET dashboard project title. |
| `Bnadung` | `Bandung` | Milk pH Monitor project location. |
| `Milk Ph Monitor` | `Milk pH Monitor` | Use lowercase `p` and uppercase `H`. |
| `Python,PostgreSQL` | `Python, PostgreSQL` | Add missing space in summary/skills copy. |
| `RDS.Configured`, `CodePipeline.Implemented`, etc. | Split into separate sentences with spaces. | Elev8 PDF text has multiple joined sentences. |
| `multi- container` | `multi-container` | Elev8 deployment copy. |

Also keep capitalization consistent:
- `RESTful APIs` or `REST APIs`; do not mix typo variants.
- `Grafana Cloud`, `Prometheus`, `BigQuery`, `PostgreSQL`, `React.js`, `Node.js`, `Google Cloud`, and `Zoho CRM`.

## Date mismatch to verify

Telkom Indonesia has conflicting dates:
- Uploaded CV PDF: `Jul 2020 - Aug 2020`.
- Current repo `src/components/Experience.tsx`: `Jan 2019 - Jun 2019`.

Implementation cards should not silently choose one. Mark this as a verification item for Hanif before publishing the final content. If no answer is available, keep a visible TODO in the implementation PR body and avoid rewriting the date beyond what the confirmed source supports.

## Project additions

Add these projects to the visible portfolio project set if they are not already rendered in production UI:

### Mitranesia.id - Franchise Marketplace Platform

- Link: `https://mitranesia.id`
- Year: 2024
- Type: Full-stack web application
- Suggested stack: React.js, Tailwind CSS, Python, PostgreSQL, Docker, AWS
- Suggested copy: Built an end-to-end marketplace for buying and selling local franchise businesses, including dynamic product listings, franchise package comparison, inquiry automation, a Python API backend, PostgreSQL persistence, Docker packaging, and AWS deployment.

### BaliBersih.com - On-demand Cleaning Service Platform

- Link: `https://balibersih.com`
- Year: 2025
- Type: Web platform
- Suggested stack: TypeScript, Tailwind CSS, JavaScript
- Suggested copy: Built a mobile-first service platform for on-demand cleaning in Bali, with instant WhatsApp booking, dynamic pricing display, SEO-oriented service pages, and location-aware content.

## Recommended featured projects

Prioritize projects that support the DevOps + Backend + Automation + Data positioning:

1. Huawei WhatsApp Bot Rebuild and Down Detector System — strongest current DevOps/automation proof, 500K+ messages/month, 100+ groups, telecom monitoring, WhatsApp alerting.
2. Elev8 AWS Infrastructure and CI/CD Automation — AWS, Docker, blue-green deployments, Nginx, monitoring, and release automation.
3. Wine Adore API Refactor and Zoho CRM Integration — 90+ API changes, backend scalability/security, GCP Cloud Functions/Pub/Sub/Scheduler automation.
4. AGIT/Telkomsel Industrial IoT Platform — Python APIs, PostgreSQL, Docker/Podman/Azure, industrial IoT integration.
5. FINNET Grafana Monitoring Dashboard — Grafana Cloud, Dynatrace/Prometheus/BigQuery, Airflow/Python ETL, operational analytics.
6. Mitranesia.id — full-stack marketplace with backend, database, Docker, and AWS deployment.
7. BaliBersih.com — production web platform with mobile-first conversion flow and SEO-oriented implementation.

Older projects such as SmardenBot, Milk pH Monitor, EEG classification, and Habibi Garden Telegram/IoT work can remain in an archive or secondary section to show history, but they should not crowd out recent DevOps/backend automation proof.

## Suggested implementation scope

Create implementation cards in small, reviewable chunks:

1. Hero/About/meta copy refresh
   - Update headline, subtitle, summary, page title, and meta/OG descriptions.
   - Keep narrative focused on DevOps, backend, automation, and data.

2. Experience copy cleanup
   - Fix joined sentences and terminology.
   - Apply Looker/Grafana/PostgreSQL/style corrections.
   - Pause or flag Telkom date until verified.

3. Project section refresh
   - Ensure visible rendered projects include Mitranesia and BaliBersih.
   - Promote the recommended featured projects.
   - Move older/less relevant projects lower or into an archive/secondary grouping.

4. CV parity follow-up
   - Once portfolio copy is updated, mirror confirmed typo/date/project corrections back into the CV source if a source-editable CV file exists or Hanif provides one.

## Acceptance checklist for implementation cards

Each implementation PR should include evidence that:

- [ ] Copy follows the DevOps + Backend + Automation + Data positioning.
- [ ] `Looker`, `Grafana`, `Bandung`, `pH`, `Python, PostgreSQL`, and other typography fixes are applied where relevant.
- [ ] Telkom Indonesia date mismatch is either confirmed by Hanif or explicitly left unchanged with a PR note.
- [ ] Mitranesia and BaliBersih are added or confirmed already present in the rendered project data.
- [ ] Featured/recommended project ordering supports the target positioning.
- [ ] No unrelated code or dependency changes are included.
- [ ] `git diff --check` passes.
- [ ] `npm run build` passes when code or build-relevant content changes; for docs-only cards, document if build was intentionally skipped.
- [ ] PR body links this content plan and lists any unresolved factual verification items.
