---
title: "Publishing Instructions — 2026-11-17 — Trustee Valuation Duty for Digital Assets"
date: "2026-11-17"
slug: "2026-11-17-trustee-digital-asset-valuation-prudent-investor-rule-power-to-adjust"
brand: "QDAV"
---

# Publishing Instructions

## Article

- **Blog:** https://qdav.mba/#blog
- **Title:** Who Values What a Trustee Holds: The Duty to Marshal Digital Assets, the Michigan Prudent Investor Rule's Treatment of a Concentrated Crypto Position, the Principal-and-Income Adjustment Power That Only Functions With a Valuation, and the Fiduciary Accounting That Turns Volatility Into a Surcharge Claim
- **Category:** QDAV
- **Author:** QDAV
- **Publish date:** 2026-11-17
- **Slug:** `2026-11-17-trustee-digital-asset-valuation-prudent-investor-rule-power-to-adjust`

## Files

| File | Destination |
|---|---|
| `blog_final/final.md` | Post body — YAML frontmatter intact, H1 included |
| `blog_images/feature_image.png` | Featured/hero image, 16:9, set as `og:image` and card image |
| `sdira_compliance_schema/sdira_compliance_schema.json` | Injected in `<head>` as `<script type="application/ld+json">` |

## Deployment Checks

1. **Frontmatter intact.** File must begin with `---` on line 1. If the CMS strips YAML, the post will not render.
2. **Category selector.** Confirm the post appears under the QDAV section, not a pillar name.
3. **Schema injection.** Validate at https://validator.schema.org — expect four graph nodes: Article, FAQPage, LocalBusiness, Service. FAQ rich results additionally require the six questions to be visible on the page, which they are.
4. **FAQ parity.** Six H3 questions in the body must match the six FAQPage `mainEntity` entries exactly. Verified programmatically before archival.
5. **Image dimensions.** 1280×720 minimum; keep 16:9. Provide `alt` text: "A leather-bound trust ledger, brass balance scale, and sealed envelope on a walnut desk."
6. **Canonical URL.** `https://qdav.mba/#blog-post/2026-11-17-trustee-digital-asset-valuation-prudent-investor-rule-power-to-adjust` — matches the schema's `mainEntityOfPage`.
7. **Internal links.** Link "Form 8971 and Schedule A for Digital Assets" (2026-10-06) from the fiduciary-administration discussion, and "The Appraisal Intake File" (2026-11-03) from the engagement-scope section. Link "Prohibited Transactions in a Digital Asset Self-Directed IRA" (2026-10-09) from the allocation section.
8. **No byline rule.** The body carries no `*Published: … | By …*` line; date and author live in frontmatter and schema only. Do not add one above a horizontal rule.

## Post-Deployment Verification

- Fetch the live URL and confirm the H1 renders.
- Confirm the page shows six FAQ headings.
- Run the schema validator and confirm zero errors on all four nodes.
- Confirm the featured image loads at 16:9 with no distortion.

## Notes for Editors

- Statutory citations are to Michigan's Estates and Protected Individuals Code (Act 386 of 1998) and the Michigan Uniform Principal and Income Act (Act 159 of 2004). Section numbers are current as of publication; re-verify if the UPI Act is amended.
- The post cites *Estate of Janes* for the diversification analysis. No reported decision addresses digital assets in trust administration; the post says so rather than implying a body of authority exists.
- Contact block: appraisal@qdav.mba / (248) 955-1491.
