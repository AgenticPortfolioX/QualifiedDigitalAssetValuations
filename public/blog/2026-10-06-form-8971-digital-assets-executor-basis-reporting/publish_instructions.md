---
title: "Publish Instructions — Form 8971 and Schedule A for Digital Assets"
date: "2026-10-06"
slug: "2026-10-06-form-8971-digital-assets-executor-basis-reporting"
brand: "QDAV"
author: "QDAV"
---

# Publish Instructions — 2026-10-06

**Post title:** Form 8971 and Schedule A for Digital Assets: The Executor's Basis-Reporting Duty Under IRC Section 6035, the Consistent-Basis Rule of Section 1014(f), the Section 6662 Penalties That Reach Heirs, and Where a Qualified Appraisal Becomes the Value Everyone Must Use
**Slug:** `2026-10-06-form-8971-digital-assets-executor-basis-reporting`
**Publish date:** 2026-10-06
**Brand / category:** QDAV
**Pillar:** Pillar 7 — Estate Administration & Fiduciary Duties

## Files in this package

| File | Purpose |
|---|---|
| `blog_final/final.md` | The post. YAML frontmatter (title, date, description, category, author) then the body. |
| `blog_images/feature_image.png` | 1280×720 (16:9) featured image. |
| `sdira_compliance_schema/sdira_compliance_schema.json` | JSON-LD: Article + FAQPage + LocalBusiness + Service (`@graph`). |
| `publish_instructions/publish_instructions.md` | This file. |

## Deployment

This post is published by the **`github-blog-deployment`** skill (it supersedes the retired `qdav-github-deployment` skill). It reads the archived folder `blogged/2026-10-06-form-8971-digital-assets-executor-basis-reporting/` and pushes the four files to the QDAV site repository. No manual step is required.

### Manual fallback (if deployment is unavailable)

1. Place `final.md` at the blog content path for slug `2026-10-06-form-8971-digital-assets-executor-basis-reporting`. Do not alter the frontmatter — it must start with `---` as the first three characters and contain exactly five keys (`title`, `date`, `description`, `category`, `author`).
2. Place `feature_image.png` at `https://qdav.mba/blog/2026-10-06-form-8971-digital-assets-executor-basis-reporting/feature_image.png` (the URL referenced in the schema).
3. Inject `sdira_compliance_schema.json` into the page `<head>` as a single `<script type="application/ld+json">` block (the file is one `@graph`).
4. Confirm the post appears under the **QDAV** category filter.

## Pre-publish checklist

- [x] `final.md` begins with `---` as its first three characters
- [x] Frontmatter has exactly five keys; `category: "QDAV"` (brand name, not pillar)
- [x] Date is today's date (2026-10-06)
- [x] Featured image is 1280×720, 16:9
- [x] Schema validates as JSON and contains Article, FAQPage, LocalBusiness, and Service
- [x] No forbidden terms present (no "to the moon", "HODL", "Fencing", "Lumber", "Restoration")
- [x] All four subfolders present under the post directory

## Notes

- Internal links worth adding on the site if the CMS supports them (plain text in the draft, per brand convention): the Michigan probate inventory post (2026-09-01) for the inventory standard, the alternate valuation date post (2026-09-15) for the IRC §2032 election referenced in item four, the §6662 valuation misstatement post (2026-09-08) for substantial/gross overstatement thresholds, the Form 1040 digital asset question post (2026-08-28), the qualified-appraiser credentials post (2026-08-25), and the Form 1099-DA cost-basis phase-in post (2026-10-02).
- Internal-link targets should point at the site's blog index until per-post URLs are confirmed; the schema's `mainEntityOfPage` follows the established pattern.
- Suggested social distribution: LinkedIn (estate attorneys and CPAs — "the Schedule A your executor files is the basis ceiling your client's heirs cannot exceed"), X (Web3 tax community — the liquidation trap and why selling before distribution forfeits the step-up).
