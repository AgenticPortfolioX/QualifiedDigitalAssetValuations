# Publishing Instructions — QDAV
## 2026-11-03 — The Appraisal Intake File: What Attorneys and CPAs Must Assemble Before a Digital Asset Appraisal Can Be Signed

**Slug:** `2026-11-03-digital-asset-appraisal-intake-file-attorneys-cpas`
**Category:** QDAV
**Author:** QDAV
**Publish date:** November 3, 2026

---

## 1. Files in this package

| File | Destination |
|---|---|
| `blog_final/final.md` | Post body, including YAML frontmatter and H1 |
| `blog_images/feature_image.png` | Featured image, 1280×720, 16:9 |
| `sdira_compliance_schema/sdira_compliance_schema.json` | JSON-LD, inject in `<head>` |
| `publish_instructions/publish_instructions.md` | This document |

## 2. Body copy

Paste `final.md` from the opening `---` through the final FAQ answer. The frontmatter block must be the first characters of the file — no leading blank lines and no BOM. The site parser reads five keys: `title`, `date`, `description`, `category`, `author`. `category` must remain **QDAV** (brand name, not the pillar name "Client Education for Attorneys & CPAs") so the post files under the correct section.

Retain the H1 and the italic byline line as written. The `---` line beneath the byline is a horizontal rule, not a second frontmatter delimiter. The post is 4,143 prose words across 12 sections and a six-question FAQ. Four tables are single-column-width dependent; do not reflow them.

## 3. Images

- Featured image: `feature_image.png`, 1280×720, 16:9.
- Alt text: *An organized appraisal workfile on a dark desk beside a hardware wallet and stacked printed ledgers, representing the documentation intake behind a qualified digital asset appraisal.*
- Set as the Open Graph and Twitter card image. The Article schema `image` property points to `https://qdav.mba/blog/2026-11-03-digital-asset-appraisal-intake-file-attorneys-cpas/feature_image.png`, so the file must live at that exact path.

## 4. Schema

Inject the entire `sdira_compliance_schema.json` contents inside a `<script type="application/ld+json">` tag in the page `<head>`. The graph contains four nodes: `Article`, `FAQPage`, `LocalBusiness`, `Service`. Validate with the Rich Results Test after deployment — the FAQPage node produces **six** question entities, matching the six H3 questions in the body exactly (verified programmatically before archival).

## 5. On-page settings

- **Title tag:** Digital Asset Appraisal Intake File: What Attorneys and CPAs Must Collect
- **Meta description:** A qualified appraisal is only as defensible as its intake file. Here is the record set for Form 8283 Section B, Form 706, Form 709, and the annual IRA attestation — organized by valuation date.
- **Canonical:** `https://qdav.mba/blog/2026-11-03-digital-asset-appraisal-intake-file-attorneys-cpas`
- **Primary keyword:** qualified appraisal
- **Secondary keywords:** digital asset appraisal, Form 8283 Section B, fair market value, IRS Section 170

## 6. Internal links to add on publish

| Anchor | Target |
|---|---|
| engagement letters, scope of work, and independence | `/blog/2026-09-25-retaining-digital-asset-appraiser-engagement-letters-privilege` |
| property rights and custody structures | `/blog/2026-10-27-digital-asset-property-rights-custody-appraisal` |
| Form 8971 consistent basis reporting | `/blog/2026-10-06-form-8971-digital-assets-executor-basis-reporting` |
| prohibited transactions in a digital asset SDIRA | `/blog/2026-10-09-prohibited-transactions-self-directed-ira-digital-assets` |

## 7. Post-publish checks

1. Confirm the post renders (frontmatter parsed, no blank leading line).
2. Confirm it appears under the QDAV category filter, not a pillar-named category.
3. Run the Rich Results Test against the live URL; FAQPage should return 6 questions with no errors.
4. Confirm the featured image resolves at the schema `image` path.
