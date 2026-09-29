---
title: "Publish Instructions — USPAP Standards 9 and 10 and Digital Asset Appraisals"
date: "2026-09-29"
slug: "2026-09-29-uspap-standards-9-10-digital-asset-appraisal"
brand: "QDAV"
author: "QDAV"
---

# Publish Instructions — 2026-09-29

**Post title:** USPAP Standards 9 and 10: How the Business and Intangible Asset Standards Govern a Digital Asset Appraisal
**Slug:** `2026-09-29-uspap-standards-9-10-digital-asset-appraisal`
**Publish date:** 2026-09-29
**Brand / category:** QDAV
**Pillar:** Pillar 9 — Appraiser Standards & Professional Practice
**Word count:** ~5,815

## Files in this package

| File | Purpose |
|---|---|
| `blog_final/final.md` | The post. YAML frontmatter (title, date, description, category, author) then the body. |
| `blog_images/feature_image.png` | 1280×720 (16:9) featured image. |
| `sdira_compliance_schema/sdira_compliance_schema.json` | JSON-LD: Article + FAQPage + LocalBusiness + Service (`@graph`). |
| `publish_instructions/publish_instructions.md` | This file. |

## Deployment

This post is published by the **`github-blog-deployment`** skill. It reads the archived folder `blogged/2026-09-29-uspap-standards-9-10-digital-asset-appraisal/` and pushes the four files to the QDAV site repository. No manual step is required.

### Manual fallback (if deployment is unavailable)

1. Place `final.md` at the blog content path for slug `2026-09-29-uspap-standards-9-10-digital-asset-appraisal`. Do not alter the frontmatter — it must start with `---` as the first three characters and contain exactly five keys (`title`, `date`, `description`, `category`, `author`).
2. Place `feature_image.png` at `https://qdav.mba/blog/2026-09-29-uspap-standards-9-10-digital-asset-appraisal/feature_image.png` (the URL referenced in the schema).
3. Inject `sdira_compliance_schema.json` into the page `<head>` as a single `<script type="application/ld+json">` block (the file is one `@graph`).
4. Confirm the post appears under the **QDAV** category filter.

## Pre-publish checklist

- [x] `final.md` begins with `---` as its first three characters
- [x] Frontmatter has exactly five keys; `category: "QDAV"` (brand name, not pillar)
- [x] Date is today's date (2026-09-29)
- [x] Featured image is 1280×720, 16:9
- [x] Schema validates as JSON and contains Article, FAQPage, LocalBusiness, and Service
- [x] No forbidden terms present
- [x] All four subfolders present under the post directory

## Notes

- The schema `image` URL and the `mainEntityOfPage` `@id` follow the pattern established by the 2026-09-25 post.
- Internal links worth adding on the site if the CMS supports them: the AO-41 post (2026-06-09), appraiser credentials (2026-08-25), engagement letters and privilege (2026-09-25), the §6662 defense post (2026-09-08), and the SDIRA attestation post (2026-09-04).
- Suggested social distribution: LinkedIn (attorney/CPA audience — "the standards question most practitioners never ask"), X (Web3 tax community — the restricted-report trap).
