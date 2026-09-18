---
title: "Publishing Instructions — Digital Assets in Donor-Advised Funds and Charitable Remainder Trusts"
date: "2026-09-18"
author: "QDAV"
type: "publish_instructions"
slug: "2026-09-18-digital-assets-donor-advised-funds-charitable-remainder-trusts-qualified-appraisal"
---

# Publishing Instructions — 2026-09-18

**Post title:** Digital Assets in Donor-Advised Funds and Charitable Remainder Trusts: Valuation at Contribution, Form 8283 Substantiation, Form 8282 Disposition Reporting, and the Section 6664(c)(3) Reasonable-Cause Rule
**Publish date:** 2026-09-18
**Category (frontmatter):** QDAV
**Author:** QDAV
**Pillar:** 5 — Charitable Contributions (documented in `strategy/content_strategy/`, not in the frontmatter)

---

## Files to publish

| File | Source path | Destination |
|---|---|---|
| Post body | `blog_posts/2026-09-18-digital-assets-donor-advised-funds-charitable-remainder-trusts-qualified-appraisal/blog_final/final.md` | `/blog/2026-09-18-digital-assets-donor-advised-funds-charitable-remainder-trusts-qualified-appraisal/` |
| Feature image | `.../blog_images/feature_image.png` | `https://qdav.mba/blog/2026-09-18-digital-assets-donor-advised-funds-charitable-remainder-trusts-qualified-appraisal/feature_image.png` |
| Schema | `.../sdira_compliance_schema/sdira_compliance_schema.json` | Injected into the post page `<head>` as JSON-LD |

---

## Step 1 — Route and placement

1. Publish under the QDAV blog route: `https://qdav.mba/#blog-post/2026-09-18-digital-assets-donor-advised-funds-charitable-remainder-trusts-qualified-appraisal`
2. Category filter value: **QDAV**. Do not use the pillar name — the site's category filtering is organised by brand.
3. Slug must match exactly: `2026-09-18-digital-assets-donor-advised-funds-charitable-remainder-trusts-qualified-appraisal`

## Step 2 — Frontmatter handling

The file `final.md` opens with YAML frontmatter. Required fields and expected values:

```
title: "Digital Assets in Donor-Advised Funds and Charitable Remainder Trusts: ..."
date: "2026-09-18"
description: "A practitioner-level analysis of how the charitable vehicle ..."
category: "QDAV"
author: "QDAV"
```

- The opening `---` must be the first three characters of the file (verified with `head -c 3`).
- If the publishing pipeline strips frontmatter, the body begins at the H1 and the `date` must be supplied from the pipeline configuration as `2026-09-18`.
- The `description` field is the meta description and blog-card excerpt. Do not substitute the first paragraph.

## Step 3 — Feature image

- File: `feature_image.png`
- Dimensions: **1280 x 720** (16:9 landscape)
- Place at: `qdav.mba/blog/2026-09-18-digital-assets-donor-advised-funds-charitable-remainder-trusts-qualified-appraisal/feature_image.png`
- Confirm the asset path resolves; the `/assets/images/` path historically 404s on this site.

## Step 4 — Schema injection

1. Insert the contents of `sdira_compliance_schema.json` into the post page `<head>` inside a single `<script type="application/ld+json">` block.
2. The `@graph` contains four nodes: `Article`, `FAQPage`, `LocalBusiness`, `Service`. Do not split or reorder them.
3. Verify the `Article.mainEntityOfPage.@id` and the `Service.provider.@id` both resolve to the live page URL and the `LocalBusiness` node respectively.
4. Validate with the Rich Results Test after deploy; the `FAQPage` node should register eight questions.

## Step 5 — Internal linking

Insert contextual links in the rendered post:

| Anchor text | Target |
|---|---|
| "qualified appraisal requirements for digital assets" | `/6/16/qualified-appraisal-digital-assets-irs-requirements` |
| "Form 8283 compliance" | `/4/24/irs-crypto-appraisal-requirements-guide` |
| "Section 6662 valuation misstatement penalties" | `/9/8/irs-6662-valuation-misstatement-digital-assets-defense` |
| "SDIRA annual value attestation" | `/9/4/sdira-digital-asset-value-attestation-qualified-appraisal` |
| "appraiser credential standards" | `/8/25/qualified-digital-asset-appraiser-credentials` |
| "document checklist for attorneys and CPAs" | `/8/21/digital-asset-appraisal-document-checklist` |

## Step 6 — Post-publish checks

1. Confirm the post renders (a missing or malformed frontmatter block fails silently — the post simply does not appear).
2. Confirm it appears under the **QDAV** category filter.
3. Confirm the FAQ section renders as eight questions and that the FAQPage schema validates.
4. Confirm the feature image loads at the expected URL and is used for the blog card and social preview.
5. Submit the URL for indexing.

## Distribution

- **LinkedIn (QDAV page):** practitioner-facing summary emphasising the Section 6664(c)(3) point — the qualified appraisal is the statutory condition for penalty relief. Target: estate attorneys and CPAs in Metro Detroit.
- **X:** short technical note on the DAF sponsor prompt-liquidation / Form 8282 cross-check.
- **Google Business:** no post required for this item.

## Notes

- Content pillar is recorded in the strategy and calendar files under `strategy/`, not in the frontmatter.
- Legacy root-level `content_calendar/` and `content_strategy/` directories exist at the QDAV root from a retired pipeline convention. This post's entries were written to `strategy/content_calendar/` and `strategy/content_strategy/` only.
- An unarchived Pillar 5 draft from 2026-08-14 exists at `blog_posts/2026-08-14-crypto-nft-donations-section-170-form-8283/`. It is superseded by this post's vehicle-layer angle and should not be archived or deployed without review.

## Related
- [[QDAV/README|QDAV Home]]
