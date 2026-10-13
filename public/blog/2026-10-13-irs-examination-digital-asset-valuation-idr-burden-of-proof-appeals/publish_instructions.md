---
title: "Publish Instructions — Inside an IRS Examination of a Digital Asset Valuation"
date: "2026-10-13"
slug: "2026-10-13-irs-examination-digital-asset-valuation-idr-burden-of-proof-appeals"
brand: "QDAV"
author: "QDAV"
---

# Publish Instructions — 2026-10-13

**Post title:** Inside an IRS Examination of a Digital Asset Valuation: Information Document Requests, the Burden of Proof Under IRC Section 7491, the Thirty-Day Letter, and How a Defensible Appraisal Performs at Appeals
**Slug:** `2026-10-13-irs-examination-digital-asset-valuation-idr-burden-of-proof-appeals`
**Publish date:** 2026-10-13
**Brand / category:** QDAV
**Pillar:** Pillar 4 — IRS Audit Defense

## Files in this package

| File | Purpose |
|---|---|
| `blog_final/final.md` | The post. YAML frontmatter (title, date, description, category, author) then the body. |
| `blog_images/feature_image.png` | 1280×720 (16:9) featured image. |
| `sdira_compliance_schema/sdira_compliance_schema.json` | JSON-LD: Article + FAQPage + LocalBusiness + Service (`@graph`). |
| `publish_instructions/publish_instructions.md` | This file. |

## Deployment

This post is published by the **`github-blog-deployment`** skill (it supersedes the retired `qdav-github-deployment` skill). It reads the archived folder `blogged/2026-10-13-irs-examination-digital-asset-valuation-idr-burden-of-proof-appeals/` and pushes the four files to the QDAV site repository. No manual step is required.

### Manual fallback (if deployment is unavailable)

1. Place `final.md` at the blog content path for slug `2026-10-13-irs-examination-digital-asset-valuation-idr-burden-of-proof-appeals`. Do not alter the frontmatter — it must start with `---` as the first three characters and contain exactly five keys (`title`, `date`, `description`, `category`, `author`).
2. Place `feature_image.png` at `https://qdav.mba/blog/2026-10-13-irs-examination-digital-asset-valuation-idr-burden-of-proof-appeals/feature_image.png` (the URL referenced in the schema).
3. Inject `sdira_compliance_schema.json` into the page `<head>` as a single `<script type="application/ld+json">` block (the file is one `@graph`).
4. Confirm the post appears under the **QDAV** category filter.

## Pre-publish checklist

- [x] `final.md` begins with `---` as its first three characters
- [x] Frontmatter has exactly five keys; `category: "QDAV"` (brand name, not pillar)
- [x] Date is today's date (2026-10-13)
- [x] Prose-only length within the QDAV band (4,983 prose words; raw 6,178 with tables)
- [x] Featured image is 1280×720, 16:9
- [x] Schema validates as JSON and contains Article, FAQPage, LocalBusiness, and Service
- [x] No forbidden terms present (no "to the moon", "HODL", "Fencing", "Lumber", "Restoration")
- [x] All four subfolders present under the post directory
- [x] FAQ block contains 8 questions matching the FAQPage schema

## Notes

- **Internal links worth adding on the site if the CMS supports them** (plain text in the draft, per brand convention): the §6662 valuation misstatement post (2026-09-08) for the penalty thresholds this post deliberately does not re-derive; the retaining-an-appraiser post (2026-09-25) for engagement letters and privilege, which pairs with this post's IDR discussion; the USPAP Standards 9 and 10 post (2026-09-29) for the Standards Rule 10-2 report structure that indexes an IDR response; the valuation discounts post (2026-09-22) for DLOM and blockage mechanics, which this post connects to the §6501(c)(9) adequate-disclosure requirement; and the Form 1099-DA cost-basis phase-in post (2026-10-02), which explains the information-report matching that now drives exam selection.
- Internal-link targets should point at the site's blog index until per-post URLs are confirmed; the schema's `mainEntityOfPage` follows the established pattern.
- **Accuracy note for editorial review:** the SB/SE attachment titled "List of Digital Asset Platforms, Wallets, Services, and Products Used (Individual Taxpayers)" is an examination document observed in practice, not an OMB-approved numbered form, and is not published on irs.gov. The post states this explicitly. Do not let an editor "clean up" that qualifier into a citation of a published form.
- **Suggested social distribution:**
  - LinkedIn (CPAs and estate attorneys): the §7491(c) point — the government carries the burden of production on penalties for individuals, independently of the burden on the value. This is the single most practically useful line for an advisor.
  - X (Web3 tax community): the §1.170A-17 timing window. An appraisal obtained after the exam opens is litigation support, not the contemporaneous Qualified Appraisal the substantiation regime contemplates.
  - Advisor email/newsletter (estate planning and tax controversy firms): the §6501(c)(9) disclosure trap — an undisclosed discount for lack of marketability is what holds the gift-tax assessment period open indefinitely.
