# Publishing Instructions — 2026-11-20

**Title:** The Ladder Was Already in the Regulation: Treasury Regulation Section 20.2031-2's Five Tiers of Price Evidence Applied to a Twenty-Four-Hour Digital Asset Market, the "Principally Dealt In" Instruction That Anticipates the Principal-Market Question, and the Timestamp Convention That Decides Which Number a Qualified Appraisal May Use
**Slug:** `2026-11-20-price-evidence-hierarchy-valuation-date-principal-market`
**Category:** QDAV
**Author:** QDAV
**Date:** 2026-11-20
**Pillar:** 3 — Valuation Methodology

## 1. Files
| File | Destination |
|---|---|
| `blog_final/final.md` | Blog post body — `qdav.mba/#blog` |
| `blog_images/feature_image.png` | Featured image, 1280×720 |
| `sdira_compliance_schema/sdira_compliance_schema.json` | `<head>` of the post page, single `<script type="application/ld+json">` block |

## 2. Rendering notes
- The file begins with YAML frontmatter (5 keys). Do not render the frontmatter block as visible content; map `title`, `date`, `description`, `category`, `author` into the page template and blog card.
- No byline line appears under the H1 — date and author come from frontmatter and the Article schema.
- Four markdown tables must be rendered as HTML tables with header rows; they are the primary GEO-extraction payload.
- `§` characters are used throughout for code sections; confirm the site's HTML entity encoding preserves them.
- Source titles in the body are italicised with asterisks — verify the renderer applies emphasis inside paragraphs.

## 3. Internal links to add (editorial)
| Anchor | Target post |
|---|---|
| "blockage, discounts, and the depth of the order book" | 2026-09-22-digital-asset-valuation-discounts-blockage-dlom |
| "seven statutory tests for a qualified appraiser" | 2026-11-10-qualified-appraiser-seven-tests-section-6695a-appraiser-penalty |
| "intake file" (Part Eight context) | 2026-11-03-digital-asset-appraisal-intake-file-attorneys-cpas |
| "trustee's annual report" | 2026-11-17-trustee-digital-asset-valuation-prudent-investor-rule-power-to-adjust |
| "peak value" cross-reference (optional, Part Three) | 2026-11-13-foreign-digital-asset-accounts-fbar-form-8938-peak-value-valuation |

## 4. Schema deployment
- Insert the entire JSON as one `<script type="application/ld+json">` block.
- `@graph` order: Article, FAQPage, LocalBusiness, Service. `@id` values are stable and must not be rewritten per page.
- FAQPage has 6 questions that match the 6 H3 headings in the body verbatim. Do not add or remove a question from either side without updating both.
- Validate after deployment at `validator.schema.org` and confirm zero errors for Article and FAQPage.

## 5. SEO / social fields
- **Meta description:** use the frontmatter `description` verbatim (2 sentences, under 300 characters used by the template).
- **Canonical:** `https://qdav.mba/#blog/2026-11-20-price-evidence-hierarchy-valuation-date-principal-market`
- **OG title:** The Ladder Was Already in the Regulation
- **OG description:** Treasury Regulation §20.2031-2 already contains the price hierarchy a digital asset appraisal needs — and the instruction that decides which exchange counts.
- **Alt text for featured image:** "Institutional archive interior with steel drawers and a ledger, representing the price-evidence file behind a digital asset appraisal."

## 6. Post-publication checks
1. Post appears under the QDAV category filter (not under a pillar name).
2. All four tables render with correct column counts.
3. FAQ section displays 6 questions; view-source shows 6 `Question` entities.
4. No layout overflow from the long H1 on mobile.
5. Featured image loads from the archive path and is not cropped at 16:9.
