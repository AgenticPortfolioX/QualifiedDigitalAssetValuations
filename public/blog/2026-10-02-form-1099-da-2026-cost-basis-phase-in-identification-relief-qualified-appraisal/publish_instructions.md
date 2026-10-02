---
title: "Publish Instructions — Form 1099-DA and the 2026 Cost-Basis Phase-In"
date: "2026-10-02"
slug: "2026-10-02-form-1099-da-2026-cost-basis-phase-in-identification-relief-qualified-appraisal"
brand: "QDAV"
author: "QDAV"
---

# Publish Instructions — 2026-10-02

**Post title:** Form 1099-DA and the 2026 Cost-Basis Phase-In: What Brokers Now Report, the Notice 2026-20 Identification Relief, the Self-Custody Gap, and Where a Qualified Appraisal Becomes the Taxpayer's Own Record
**Slug:** `2026-10-02-form-1099-da-2026-cost-basis-phase-in-identification-relief-qualified-appraisal`
**Publish date:** 2026-10-02
**Brand / category:** QDAV
**Pillar:** Pillar 1 — Regulatory Compliance
**Word count:** ~5,441 raw / ~4,608 prose-only (within the 3,000–5,000 QDAV range on the prose measure)

## Files in this package

| File | Purpose |
|---|---|
| `blog_final/final.md` | The post. YAML frontmatter (title, date, description, category, author) then the body. |
| `blog_images/feature_image.png` | 1280×720 (16:9) featured image. |
| `sdira_compliance_schema/sdira_compliance_schema.json` | JSON-LD: Article + FAQPage + LocalBusiness + Service (`@graph`). |
| `publish_instructions/publish_instructions.md` | This file. |

## Deployment

This post is published by the **`github-blog-deployment`** skill. It reads the archived folder `blogged/2026-10-02-form-1099-da-2026-cost-basis-phase-in-identification-relief-qualified-appraisal/` and pushes the four files to the QDAV site repository. No manual step is required.

### Manual fallback (if deployment is unavailable)

1. Place `final.md` at the blog content path for slug `2026-10-02-form-1099-da-2026-cost-basis-phase-in-identification-relief-qualified-appraisal`. Do not alter the frontmatter — it must start with `---` as the first three characters and contain exactly five keys (`title`, `date`, `description`, `category`, `author`).
2. Place `feature_image.png` at `https://qdav.mba/blog/2026-10-02-form-1099-da-2026-cost-basis-phase-in-identification-relief-qualified-appraisal/feature_image.png` (the URL referenced in the schema).
3. Inject `sdira_compliance_schema.json` into the page `<head>` as a single `<script type="application/ld+json">` block (the file is one `@graph`).
4. Confirm the post appears under the **QDAV** category filter.

## Pre-publish checklist

- [x] `final.md` begins with `---` as its first three characters
- [x] Frontmatter has exactly five keys; `category: "QDAV"` (brand name, not pillar)
- [x] Date is today's date (2026-10-02)
- [x] Featured image is 1280×720, 16:9
- [x] Schema validates as JSON and contains Article, FAQPage, LocalBusiness, and Service
- [x] No forbidden terms present
- [x] All four subfolders present under the post directory

## Notes

- The schema `image` URL and the `mainEntityOfPage` `@id` follow the pattern established by the 2026-09-25 and 2026-09-29 posts.
- Internal links worth adding on the site if the CMS supports them: cost basis reporting under the new rules (2026-07-28), the Form 1040 digital asset question (2026-08-28), what constitutes a qualified appraisal (2026-06-16), the §6662 defense post (2026-09-08), USPAP Standards 9 and 10 (2026-09-29), charitable substantiation and Form 8283 (2026-09-18), and the SDIRA attestation post (2026-09-04).
- Suggested social distribution: LinkedIn (CPAs and estate attorneys — "the reconciliation problem your 2026 clients are about to bring you"), X (Web3 tax community — the covered/noncovered distinction and the Notice 2026-20 extension).
