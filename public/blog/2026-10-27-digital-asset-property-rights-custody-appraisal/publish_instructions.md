# Publishing Instructions — QDAV
## 2026-10-27 — What Are You Actually Appraising? Property Rights, Custody Structures, and the Subject-Property Identification That Determines a Digital Asset Valuation

**Slug:** `2026-10-27-digital-asset-property-rights-custody-appraisal`
**Category:** QDAV
**Author:** QDAV
**Publish date:** October 27, 2026

---

## 1. Files in this package

| File | Destination |
|---|---|
| `blog_final/final.md` | Post body, including YAML frontmatter and H1 |
| `blog_images/feature_image.png` | Featured image, 1280×720 |
| `sdira_compliance_schema/sdira_compliance_schema.json` | JSON-LD, inject in `<head>` |

## 2. Body copy

Paste `final.md` from the opening `---` through the closing paragraph. The frontmatter block must be the first characters of the file — no leading blank lines, no BOM. The site's parser reads five keys: `title`, `date`, `description`, `category`, `author`. `category` must remain **QDAV** (brand name, not the pillar name) so the post files under the correct section.

Retain the H1 and the italic byline line as written. The `---` line beneath the byline is a horizontal rule, not another frontmatter delimiter.

## 3. Images

- Featured image: `feature_image.png`, 1280×720, 16:9.
- Alt text: *Appraiser's workfile showing a token, a custodial account, and a staking receipt described as three distinct property interests.*
- Set as the Open Graph and Twitter card image; the Article schema `image` property already points to `https://qdav.mba/blog/2026-10-27-digital-asset-property-rights-custody-appraisal/feature_image.png`, so the file must live at that path.

## 4. Schema

Inject the entire `sdira_compliance_schema.json` contents inside a `<script type="application/ld+json">` tag in the page `<head>`. The graph contains four nodes: `Article`, `FAQPage`, `LocalBusiness`, `Service`. Validate with the Rich Results Test after deployment — the FAQPage node should produce eight question entities.

## 5. On-page settings

- **Title tag:** What Are You Actually Appraising? Property Rights and Digital Asset Valuation
- **Meta description:** Two identical bitcoin balances can be two different assets. Property rights, custody structure, and subject-property identification determine what a digital asset appraisal is actually valuing.
- **Canonical:** `https://qdav.mba/blog/2026-10-27-digital-asset-property-rights-custody-appraisal`
- **Primary keyword:** digital asset appraisal property rights

## 6. Internal links to insert

| Anchor text | Target post |
|---|---|
| USPAP Standards 9 and 10 | 2026-09-29-uspap-standards-9-10-digital-asset-appraisal |
| valuation discounts and lack of marketability | 2026-09-22-digital-asset-valuation-discounts-blockage-dlom |
| prohibited transactions in a digital asset SDIRA | 2026-10-09-prohibited-transactions-self-directed-ira-digital-assets |
| Form 8971 and Schedule A | 2026-10-06-form-8971-digital-assets-executor-basis-reporting |
| Michigan probate inventory | 2026-09-01-michigan-probate-inventory-digital-assets-qualified-appraisal |

Suggested placements: the Standards discussion in section two links to the 09-29 post; the marketability reference in the encumbrances section links to 09-22; the §408(m) discussion links to 10-09; the executor paragraph in the consequences section links to 10-06 and 09-01.

## 7. Post-publish checklist

1. Confirm the post renders with its H1, byline, and all five tables intact.
2. Confirm the featured image resolves at the schema `image` URL.
3. Run the Rich Results Test; confirm Article and FAQPage are eligible.
4. Confirm the post appears under the QDAV category listing and in the `/#blog` feed.
5. Submit the URL in Search Console; request indexing.
6. Add the post to the LinkedIn B2B rotation for the attorney and CPA audience.
