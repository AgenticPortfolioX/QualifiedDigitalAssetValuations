# Publishing Instructions — 2026-11-27

**Brand:** QDAV (Qualified Digital Asset Valuations)
**Title:** The Notice That Arrives Before Any Examination: How the Automated Underreporter Program Turns a Proceeds-Only Form 1099-DA Into a CP2000 Proposal, Why the Thirty-Day Window Is Administrative Rather Than Statutory, and the Valuation Record That Decides the Ninety-Day Letter
**Slug:** `2026-11-27-cp2000-automated-underreporter-form-1099-da-digital-asset-valuation`
**Publish date:** 2026-11-27
**Author:** QDAV
**Category:** QDAV
**Pillar:** IRS Audit Defense

---

## 1. Files

| File | Location |
|---|---|
| Post body (Markdown with YAML frontmatter) | `blog_final/final.md` |
| Featured image (1280×720 PNG) | `blog_images/feature_image.png` |
| JSON-LD structured data | `sdira_compliance_schema/sdira_compliance_schema.json` |

## 2. Frontmatter verification

The published file must begin with `---` as its first three characters, followed by exactly five keys: `title`, `date`, `description`, `category`, `author`. `category` must read `"QDAV"` — not the pillar name — or the post will not appear under the QDAV section filter.

## 3. Render notes

- No byline line follows the H1. Date and author live in frontmatter and schema. Do not insert a `*Published: … | By …*` line directly above a `---`; it parses as a setext H2 and pollutes the document outline.
- Twelve H2 sections plus seven H3 FAQ entries. Two Markdown tables (statutory penalty frame; response-file timeline). Both must render as tables, not preformatted text.
- Italic case names (*Paschall v. Commissioner*, *Walquist v. Commissioner*, *Chai v. Commissioner*) require the asterisks to survive the Markdown renderer.

## 4. Image handling

Upload `feature_image.png` as the featured/hero image. Alt text:

> A formal printed legal notice on a dark walnut desk beside a fountain pen and archival folder, lit by a warm desk lamp.

## 5. Schema deployment

Inject the `@graph` from `sdira_compliance_schema.json` into the `<head>` as a single `<script type="application/ld+json">` block. The graph contains four nodes: `Article`, `FAQPage`, `LocalBusiness`, `Service`.

- The `FAQPage` `mainEntity` array contains **seven** questions, matching the seven H3 headings under "Frequently Asked Questions" in the body, in the same order and with identical wording. If body copy is edited later, edit the schema in the same commit or the FAQ rich result becomes ineligible.
- `image` and `mainEntityOfPage` point at the canonical URL pattern `https://qdav.mba/blog/2026-11-27-cp2000-automated-underreporter-form-1099-da-digital-asset-valuation/`.

## 6. Canonical and indexation

- Canonical URL: `https://qdav.mba/blog/2026-11-27-cp2000-automated-underreporter-form-1099-da-digital-asset-valuation/`
- Blog index anchor: `https://qdav.mba/#blog`
- After deploy, submit the URL for indexing and confirm the Rich Results Test parses all four schema nodes without errors or warnings on the FAQPage.

## 7. Internal links to add on deploy

| Anchor text | Target |
|---|---|
| Form 1099-DA cost-basis phase-in and identification relief | `/blog/2026-10-02-form-1099-da-2026-cost-basis-phase-in-identification-relief-qualified-appraisal/` |
| Inside an IRS examination of a digital asset valuation | `/blog/2026-10-13-irs-examination-digital-asset-valuation-idr-burden-of-proof-appeals/` |
| Section 6662 valuation misstatement defense | `/blog/2026-09-08-irs-6662-valuation-misstatement-digital-assets-defense/` |
| Form 8971 and executor basis reporting | `/blog/2026-10-06-form-8971-digital-assets-executor-basis-reporting/` |
| Airdrops, staking rewards, hard forks, and mining income | `/blog/2026-10-16-airdrop-staking-rewards-hard-fork-mining-income-valuation/` |
| The price-evidence hierarchy and valuation date | `/blog/2026-11-20-price-evidence-hierarchy-valuation-date-principal-market/` |

Suggested placements: the 1099-DA phase-in link in Part Two; the examination link in Part One or Part Four; the §6662 link in Part Eight; the Form 8971 link in Part Five; the airdrop/staking link in Part Five; the price-evidence link in Part Six.

## 8. Post-deploy checks

1. Post renders with H1, 12 H2s, and 7 FAQ H3s.
2. Both tables render as tables.
3. Featured image displays at 16:9.
4. Rich Results Test returns Article and FAQPage as valid.
5. Post appears under the QDAV category filter on the blog index.
6. Canonical resolves without redirect.
