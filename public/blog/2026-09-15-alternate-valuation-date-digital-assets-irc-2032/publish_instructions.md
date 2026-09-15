# Publishing Instructions — 2026-09-15

**Post:** The Alternate Valuation Date for Digital Assets: IRC Section 2032, Dual-Date Appraisal Requirements, and Why Crypto Volatility Changes the Estate Tax Analysis
**Brand:** QDAV (Qualified Digital Asset Valuations)
**Slug:** `2026-09-15-alternate-valuation-date-digital-assets-irc-2032`
**Publish date:** 2026-09-15
**Category (site taxonomy):** QDAV
**Author byline:** QDAV

---

## 1. Files to publish

| File | Source path | Destination |
|---|---|---|
| Blog post body | `blog_posts/2026-09-15-alternate-valuation-date-digital-assets-irc-2032/blog_final/final.md` | Blog content field |
| Featured image | `blog_posts/2026-09-15-alternate-valuation-date-digital-assets-irc-2032/blog_images/feature_image.png` | Post hero image, 1280x720 (16:9) |
| Structured data | `blog_posts/2026-09-15-alternate-valuation-date-digital-assets-irc-2032/sdira_compliance_schema/sdira_compliance_schema.json` | Post `<head>` as a single JSON-LD `application/ld+json` block |

## 2. Frontmatter fields (already embedded in `final.md`)

```
title: "The Alternate Valuation Date for Digital Assets: IRC Section 2032, Dual-Date Appraisal Requirements, and Why Crypto Volatility Changes the Estate Tax Analysis"
date: "2026-09-15"
description: "The Section 2032 alternate valuation date election is the only federal lever an executor has when a digital asset portfolio falls after death. ..."
category: "QDAV"
author: "QDAV"
```

Do not alter the `category` value. It must remain the brand name `QDAV` for the site's category filter to place the post correctly.

## 3. Structured data

Attach `sdira_compliance_schema.json` whole, unmodified, inside `<script type="application/ld+json">`. The file is a single `@context` object with a four-node `@graph`: `Article`, `FAQPage` (8 questions), `LocalBusiness`, and `Service`.

Before publishing, confirm:

- [ ] The JSON parses without error (validate at `https://validator.schema.org`).
- [ ] `Article.datePublished` reads `2026-09-15`.
- [ ] `Article.image` resolves at `https://qdav.mba/assets/images/2026-09-15-alternate-valuation-date-digital-assets-irc-2032/feature_image.png` — upload the featured image to that path.
- [ ] The telephone number in `LocalBusiness` reads `(248) 955-1491`.
- [ ] The `Service.description` digital asset terms are not truncated.

## 4. URL and metadata

- **Canonical URL:** `https://qdav.mba/#blog` anchor for the post, or the site's generated permalink if the blog platform assigns one. Keep `mainEntityOfPage` consistent with whatever the platform emits.
- **Meta title:** use the frontmatter `title` (under 60 characters is not achievable for this headline; retain the full title for topical clarity).
- **Meta description:** use the frontmatter `description` field verbatim.
- **Open Graph image:** the featured image, 1280x720.

## 5. Placement and internal linking

- [ ] Publish under the QDAV blog index.
- [ ] Add an internal link from the 2026-07-24 Form 709 gift tax post to this article (transfer-tax valuation framework).
- [ ] Add an internal link from the 2026-09-08 Section 6662 penalties post to this article (penalty exposure context).
- [ ] Add an internal link from the 2026-06-12 crypto-in-trusts post to this article (trust assets reaching the alternate valuation date).
- [ ] Add an internal link from the 2026-09-01 Michigan probate inventory post to this article (fiduciary inventory context).

## 6. Post-publish verification

- [ ] Confirm the post renders with its H1 and full body (missing frontmatter causes silent render failure).
- [ ] Confirm the post appears under the QDAV category filter.
- [ ] Confirm the featured image displays at correct aspect ratio.
- [ ] Confirm no broken markdown (the article contains two tables — verify both render as tables).
- [ ] Confirm the FAQ block is present in the body and duplicated into `FAQPage` schema.

## 7. Notes

- The article contains two hypothetical numeric illustrations (a $20,000,000 estate and a $40,000,000 marital-deduction estate). These are labeled hypothetical in the text and must not be presented as client engagements or as tax advice.
- The article carries a closing disclaimer paragraph. Do not remove it.
- No pricing claims, no IRS endorsement language, and no superlatives appear in the text. Preserve that standard in any headline or excerpt edit.

## 8. Social syndication (optional, secondary)

If syndicated to LinkedIn or X, lead with the marital-deduction asymmetry in Illustration 2 — the counterintuitive finding that the Section 2032 election can destroy value in a marital-deduction-heavy estate. Do not run the post through any hashtag or emoji treatment; QDAV voice is institutional.
