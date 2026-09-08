# Publishing Instructions — 2026-09-08 IRS Section 6662 Valuation Misstatement Penalties and Digital Assets

## Post Metadata

- **Title:** IRS Section 6662 Valuation Misstatement Penalties and Digital Assets: Substantial and Gross Overstatement Thresholds, the Reasonable Cause Standard Under Section 6664, and the Qualified Appraisal Defense
- **Date:** 2026-09-08
- **Author:** QDAV (Qualified Digital Asset Valuations)
- **Category:** QDAV
- **Pillar:** 4 — IRS Audit Defense
- **Slug/folder:** 2026-09-08-irs-6662-valuation-misstatement-digital-assets-defense
- **Word count:** ~4,950 (within 3,000–5,000 target)

## Files to Publish

1. `blog_final/final.md` — full article (must remain the first file processed)
2. `blog_images/feature_image.png` — 1280x720 feature image
3. `sdira_compliance_schema/sdira_compliance_schema.json` — JSON-LD (Article + FAQPage + LocalBusiness + Service)
4. `publish_instructions/publish_instructions.md` — this file (reference only; do not publish)

## Steps

1. **Add the post to the QDAV blog** using the existing site pipeline: place `final.md` content in the blog section of https://qdav.mba (#blog) with category "QDAV" so it appears under the QDAV section.
2. **Upload the feature image** to `assets/images/2026-09-08-irs-6662-valuation-misstatement-digital-assets-defense/feature_image.png` (path matches the schema `image` field).
3. **Inject the JSON-LD schema** into the page `<head>` (or via the site's schema mechanism) — it includes Article, FAQPage (8 questions), LocalBusiness, and Service entities.
4. **Verify on qdav.mba:** post renders with correct title/date/byline, category filter "QDAV" shows the post, image displays, schema validates (https://validator.schema.org).
5. **Cross-check frontmatter:** `final.md` starts with `---`; category is "QDAV" (NOT the pillar name); date is 2026-09-08.

## Content Notes

- This post is the technical companion to the 2026-07-17 audit-defense overview. Do not merge or cross-link them as duplicates; position this as the penalty-mechanics deep dive (thresholds, worked calculations, Section 6664(c)(3) charitable trap, Section 6695A).
- Legal accuracy is the value proposition: thresholds (150% substantial / 200% gross / 65% estate-gift / 40% gross estate-gift), $5,000 underpayment floor, and the Section 6664(c)(3) charitable rule are verified against 26 U.S.C.
- No hashtags, no emojis. American English. Institutional Sage tone.
