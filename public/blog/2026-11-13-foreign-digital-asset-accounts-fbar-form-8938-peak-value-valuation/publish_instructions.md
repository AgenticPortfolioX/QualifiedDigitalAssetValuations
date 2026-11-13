# Publishing Instructions — QDAV
## Post: Digital Assets Across the Border (2026-11-13)

**Slug:** `foreign-digital-asset-accounts-fbar-form-8938-peak-value-valuation`
**Publish date:** 2026-11-13
**Category:** QDAV
**Author:** QDAV
**Target URL:** `https://qdav.mba/#blog/2026-11-13-foreign-digital-asset-accounts-fbar-form-8938-peak-value-valuation`

---

## 1. Files to publish

| File | Destination | Notes |
|---|---|---|
| `blog_final/final.md` | Blog post body | YAML frontmatter at byte 0. Do not strip it. |
| `sdira_compliance_schema/sdira_compliance_schema.json` | `<head>` as JSON-LD | Single `<script type="application/ld+json">` block, whole `@graph`. |
| `blog_images/feature_image.png` | Featured image + `og:image` | 1280x720. |

## 2. Frontmatter fields

The site reads five keys. Values must match exactly:

```
title: "Digital Assets Across the Border: FinCEN Notice 2020-2, the FBAR Peak-Value Rule, Form 8938's Threshold Ladder, and the Valuation Evidence Both Regimes Demand"
date: "2026-11-13"
description: "<as written in final.md>"
category: "QDAV"
author: "QDAV"
```

`category` must be `QDAV`. If it reads `Regulatory Compliance`, the post falls out of the brand filter — the pillar belongs in the strategy file, not the frontmatter.

## 3. Rendering checks before publish

1. `head -c 3 final.md` returns `---`. If not, the post will not render and will fail silently.
2. The H1 follows the frontmatter immediately; there is no byline line, so no setext heading is produced.
3. All three tables render as tables. Each row has four cells and a trailing pipe.
4. The eight FAQ H3s render as headings under the "Frequently Asked Questions" H2 and match the eight `Question` entries in the schema.
5. The em dashes and section symbols (§) survive the CMS — if the editor mangles them, replace § with "Section" in prose only, never inside the JSON-LD.

## 4. Metadata

- **Meta title** (<= 60 chars preferred): `Digital Assets Across the Border: FBAR and Form 8938` (53)
- **Meta description:** use the frontmatter `description`.
- **Canonical:** the target URL above. No `?utm` parameters on the canonical.
- **OG image:** `feature_image.png`, alt text: "Cross-border digital asset reporting and valuation evidence."
- **Schema:** paste `sdira_compliance_schema.json` verbatim. Validate at `validator.schema.org` and Google's Rich Results Test after publish — the FAQPage block must report eight questions with no errors.

## 5. Internal links to insert at publish

| Anchor text | Target post |
|---|---|
| Form 1099-DA and the 2026 cost-basis phase-in | `/blog/2026-10-02-form-1099-da-2026-cost-basis-phase-in-identification-relief-qualified-appraisal` |
| What are you actually appraising: property rights and custody structures | `/blog/2026-10-27-digital-asset-property-rights-custody-appraisal` |
| The appraisal intake file for attorneys and CPAs | `/blog/2026-11-03-digital-asset-appraisal-intake-file-attorneys-cpas` |
| Qualified appraiser standards under Section 1.170A-17(b) | `/blog/2026-11-10-qualified-appraiser-seven-tests-section-6695a-appraiser-penalty` |

Place the first two inline in the "Where the account actually sits" section and the last two in "What the file has to contain." Do not add a link block at the end.

## 6. Post-publish verification

1. Load the live URL; confirm the H1 and the first H2 ("Two regimes, one position, no shared answer") render.
2. Confirm the page source contains `"@type": "FAQPage"` and count eight `"@type": "Question"` entries.
3. Confirm `og:image` resolves to a 200 response.
4. Confirm the post appears under the QDAV category listing.
5. Confirm the sitemap includes the URL.

## 7. Notes for the editor

- **Do not** add the byline line under the H1. It parses as a setext H2 and pollutes the outline.
- **Do not** convert the tables to images.
- The post intentionally declines to answer whether crypto is reportable on Form 8938. That is the accuracy position, not an oversight. Do not "fix" it by inserting a definitive answer.
- If FinCEN finalizes the virtual-currency FBAR rule after publication, add an editor's note at the top of the "What Notice 2020-2 actually says" section rather than rewriting the section.
