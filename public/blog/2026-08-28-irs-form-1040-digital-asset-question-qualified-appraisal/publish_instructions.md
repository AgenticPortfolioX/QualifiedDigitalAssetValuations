# Publishing Instructions

**Post:** The IRS Digital Asset Question on Form 1040: What It Asks, Who Must Answer, and When a Qualified Appraisal Becomes Necessary
**Date:** 2026-08-28
**Pillar:** 1 — Regulatory Compliance
**Author:** QDAV
**Slug:** `2026-08-28-irs-form-1040-digital-asset-question-qualified-appraisal`

## Files to Publish

| File | Source path |
|------|-------------|
| Post body | `blog_final/final.md` |
| Featured image | `blog_images/feature_image.png` (1280x720, 16:9) |
| Schema JSON-LD | `sdira_compliance_schema/sdira_compliance_schema.json` |

## Steps

1. **Copy `final.md`** into the blog content system (category: QDAV). The frontmatter already contains the 5 required keys — do not modify.
2. **Validate the frontmatter** on the deployed post: title, date (2026-08-28), description, category ("QDAV" — brand name, not pillar name), author ("QDAV").
3. **Upload `feature_image.png`** as the post's hero image. Suggested alt text: "IRS Form 1040 digital asset question compliance guide."
4. **Inject the JSON-LD schema** from `sdira_compliance_schema.json` into the page `<head>` (or via the site's schema field). It contains Article + FAQPage + LocalBusiness + Service in a single @graph. The `image` field references `https://qdav.mba/assets/images/2026-08-28-irs-form-1040-digital-asset-question-qualified-appraisal/feature_image.png` — update if the site uses a different asset path.
5. **Publish URL:** `https://qdav.mba/#blog` (blog section). If the site uses permalinks, use `/blog/2026-08-28-irs-form-1040-digital-asset-question-qualified-appraisal`.
6. **Meta description** (from frontmatter) is the snippet text — keep as-is for SERP consistency.

## Social / Promotion

- **LinkedIn (B2B):** Target estate attorneys, CPAs, trust officers, tax professionals. Angle: "Every 1040 filer must now answer the IRS digital asset question. Here's when that checkbox turns into a valuation obligation — gifts, donations, estates, lost basis, and 1099-DA mismatches."
- **X (Web3 tax community):** Angle: the transfer-fee trap — moving crypto between your own wallets can force a "Yes" answer.
- **Google Business:** No post needed; optionally share link.

## Related Posts to Interlink (if the site supports it)

- 2026-06-16 — What Constitutes a Qualified Appraisal for Digital Assets (statutory requirements)
- 2026-07-24 — IRS Form 709 and Digital Asset Gift Tax Valuation
- 2026-07-28 — IRS Cost Basis Reporting for Digital Assets Under the New 2026 Rules
- 2026-07-17 — IRS Audit Defense for Digital Asset Valuations
- 2026-08-25 — How to Verify a Qualified Appraiser for Digital Assets

## Notes

- Category field MUST remain "QDAV" — using the pillar name breaks the blog's category filter.
- The blogged archive copy in `QDAV/blogged/2026-08-28-irs-form-1040-digital-asset-question-qualified-appraisal/` is the canonical delivery bundle for GitHub auto-deployment (deferred — deployment skill unavailable this run).
