# Publishing Instructions — QDAV
## 2026-10-30 — Donating Digital Assets to a Private Foundation: The Section 170(e)(1)(B)(ii) Basis Reduction That Erases the Fair Market Value Deduction

**Slug:** `2026-10-30-private-foundation-crypto-donation-basis-reduction-4942-4943-appraisal`
**Category:** QDAV
**Author:** QDAV
**Publish date:** October 30, 2026

---

## 1. Files in this package

| File | Destination |
|---|---|
| `blog_final/final.md` | Post body, including YAML frontmatter and H1 |
| `blog_images/feature_image.png` | Featured image, 1280×720, 16:9 |
| `sdira_compliance_schema/sdira_compliance_schema.json` | JSON-LD, inject in `<head>` |
| `publish_instructions/publish_instructions.md` | This document |

## 2. Body copy

Paste `final.md` from the opening `---` through the closing italic line. The frontmatter block must be the first characters of the file — no leading blank lines and no BOM. The site parser reads five keys: `title`, `date`, `description`, `category`, `author`. `category` must remain **QDAV** (brand name, not the pillar name "Charitable Contributions") so the post files under the correct section.

Retain the H1 and the italic byline line as written. The `---` line beneath the byline is a horizontal rule, not a second frontmatter delimiter. The post is 4,440 prose words across 13 sections and a six-question FAQ; do not reflow the tables, which are single-column-width dependent.

## 3. Images

- Featured image: `feature_image.png`, 1280×720, 16:9.
- Alt text: *A foundation's grantmaking ledger beside a single token held in independent custody, with the contribution-date valuation and the annual distribution valuation shown as two separate figures.*
- Set as the Open Graph and Twitter card image. The Article schema `image` property points to `https://qdav.mba/blog/2026-10-30-private-foundation-crypto-donation-basis-reduction-4942-4943-appraisal/feature_image.png`, so the file must live at that exact path.

## 4. Schema

Inject the entire `sdira_compliance_schema.json` contents inside a `<script type="application/ld+json">` tag in the page `<head>`. The graph contains four nodes: `Article`, `FAQPage`, `LocalBusiness`, `Service`. Validate with the Rich Results Test after deployment — the FAQPage node should produce **six** question entities, matching the six H3 questions in the body exactly.

## 5. On-page settings

- **Title tag:** Donating Crypto to a Private Foundation: Why the Deduction Is Basis, Not Fair Market Value
- **Meta description:** A crypto gift to a private foundation deducts cost basis, not fair market value, under Section 170(e)(1)(B)(ii). Here is the arithmetic through the 2026 floor and 2/37 limitation, and the single appraisal that Sections 4942 and 4943 both depend on.
- **Canonical:** `https://qdav.mba/blog/2026-10-30-private-foundation-crypto-donation-basis-reduction-4942-4943-appraisal`
- **Primary keyword:** donate crypto to private foundation
- **Secondary:** private foundation cryptocurrency, crypto charitable deduction, qualified appreciated stock, section 4942 minimum distribution, excess business holdings digital assets

## 6. Internal links to insert

| Anchor text | Target post |
|---|---|
| valuation at contribution, Form 8283 substantiation, and Form 8282 disposition reporting | 2026-09-18 — Digital Assets in Donor-Advised Funds and Charitable Remainder Trusts |
| the Section 170(e)(1)(A) basis limitation and the one-year holding period | 2026-10-23 — Charitable Lead Trusts and Digital Assets |
| subject-property identification and custody structures | 2026-10-27 — What Are You Actually Appraising? |
| Section 6662 valuation misstatement exposure | 2026-09-08 — IRS Section 6662 Valuation Misstatement Defense |
| USPAP Standards 9 and 10 | 2026-09-29 — USPAP Standards 9 and 10 for Digital Asset Appraisal |
| valuation discounts, blockage, and the discount for lack of marketability | 2026-09-22 — Valuation Discounts for Digital Assets |
| Form 1099-DA and cost-basis reconstruction | 2026-10-02 — Form 1099-DA and the 2026 Cost-Basis Phase-In |

## 7. Outbound citations to add as inline links

- IRC §170 — https://www.law.cornell.edu/uscode/text/26/170
- IRC §4942 — https://uscode.house.gov/us/usc/119-136/t26/s4942/
- IRC §4943 and IRS guidance — https://www.irs.gov/charities-non-profits/irc-section-4943-taxes-on-excess-business-holdings
- IRC §4944 — https://www.law.cornell.edu/uscode/text/26/4944
- IRC §4940 — https://www.law.cornell.edu/uscode/text/26/4940
- IRS, Tax on net investment income — https://www.irs.gov/charities-non-profits/private-foundations/tax-on-net-investment-income
- 26 CFR §53.4943-6 — https://www.law.cornell.edu/cfr/text/26/53.4943-6

## 8. Post-publish checks

1. Frontmatter parsed: post renders with the H1 and byline, and appears under the QDAV section.
2. Both tables render with correct column counts (five-column vehicle table, two-column arithmetic and workfile tables, four-column consumer table).
3. Rich Results Test reports Article and FAQPage with no errors and six questions.
4. The `feature_image.png` URL in the schema resolves.
5. Submit the URL for indexing in Google Search Console and Bing Webmaster Tools.
