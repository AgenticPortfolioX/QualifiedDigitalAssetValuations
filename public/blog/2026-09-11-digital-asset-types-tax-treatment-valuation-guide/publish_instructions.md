# Publishing Instructions — 2026-09-11 Digital Asset Types and Their Tax Treatment

## Post Metadata

- **Title:** Digital Asset Types and Their Tax Treatment: How Bitcoin, Stablecoins, NFTs, and DeFi Tokens Differ in Valuation, Cost Basis, and IRS Reporting
- **Date:** 2026-09-11
- **Author:** QDAV (Qualified Digital Asset Valuations)
- **Category:** QDAV
- **Pillar:** 8 — Digital Asset Types & Tax Treatment
- **Slug/folder:** 2026-09-11-digital-asset-types-tax-treatment-valuation-guide
- **Word count:** ~4,927 body words (within 3,000–5,000 target)

## Files to Publish

1. `blog_final/final.md` — full article (must remain the first file processed)
2. `blog_images/feature_image.png` — 1280x720 feature image
3. `sdira_compliance_schema/sdira_compliance_schema.json` — JSON-LD (Article + FAQPage + LocalBusiness + Service); deploy to GitHub as `schema.json`
4. `publish_instructions/publish_instructions.md` — this file (reference only; do not publish)

## Steps

1. **Add the post to the QDAV blog** using the existing site pipeline: place `final.md` content in the blog section of https://qdav.mba (#blog) with category "QDAV" so it appears under the QDAV section.
2. **Upload the feature image** to `assets/images/2026-09-11-digital-asset-types-tax-treatment-valuation-guide/feature_image.png` (path matches the schema `image` field).
3. **Inject the JSON-LD schema** into the page `<head>` (or via the site's schema mechanism) — it includes Article, FAQPage (8 questions), LocalBusiness, and Service entities.
4. **Verify on qdav.mba:** post renders with correct title/date/byline, category filter "QDAV" shows the post, image displays, schema validates (https://validator.schema.org).
5. **Cross-check frontmatter:** `final.md` starts with `---`; category is "QDAV" (NOT the pillar name); date is 2026-09-11.

## Content Notes

- This post is the pillar-defining entry for QDAV Pillar 8, which had zero dedicated coverage before this run. It is the cross-asset companion to the single-method deep dives: position it alongside the market approach (2026-07-21), income approach (2026-06-19), and cost approach (2026-07-31) posts, not as a duplicate of them.
- Recommended internal links: 2026-07-31 (cost approach), 2026-07-21 (market approach), 2026-06-19 (income approach), 2026-07-28 (cost basis reporting / wallet tracking), 2026-08-21 (document checklist), 2026-08-25 (appraiser credentials).
- Legal accuracy is the value proposition. Every regulatory statement is tied to a named authority: Notice 2014-21, Rev. Rul. 2019-24, Rev. Rul. 2023-14, Notice 2023-27, IRC Section 1(h), Rev. Proc. 2024-28, and the 2026 Form 1099-DA instructions. The PARITY Act discussion is explicitly labeled a **proposal, not law** — do not edit that qualification out.
- The legal entity name ("Renowned Value Restoration LLC") appears only in the schema `legalName` field; it is intentionally absent from the article body.
- No hashtags, no emojis. American English. Institutional Sage tone.
