# Publishing Instructions — QDAV
## The Marital Deduction and Digital Assets: QTIP Elections, Portability, and the Valuation Discipline Section 2056 Demands

**Date:** 2026-10-20
**Slug:** `2026-10-20-marital-deduction-qtip-election-digital-assets-valuation`
**Category:** QDAV
**Author:** QDAV
**Prose length:** 4,888 words (prose only; 5,570 raw including tables and frontmatter)

---

## 1. Files in this package

| File | Destination |
|---|---|
| `blog_final/final.md` | Post body — publish verbatim, frontmatter included |
| `blog_images/feature_image.png` | Featured image, 1280×720, 16:9 |
| `sdira_compliance_schema/sdira_compliance_schema.json` | JSON-LD, inject in `<head>` |
| `publish_instructions/publish_instructions.md` | This file |

---

## 2. Body publication

Publish `final.md` verbatim. The YAML frontmatter must be the first three characters of the file — do not let the CMS strip or reformat it. Required keys, all present:

```
title, date, description, category, author
```

- `date: "2026-10-20"` — publish date
- `category: "QDAV"` — brand category, not the pillar name
- `author: "QDAV"`

Do not convert the tables. There are four markdown tables (deduction paths, QTIP elements, funding formulas, workfile requirements); the renderer must support GitHub-flavoured pipe tables.

Retain the italic dateline immediately under the H1 (`*Published: October 20, 2026 | By QDAV*`).

---

## 3. Featured image

- Path: `blog_images/feature_image.png`
- Dimensions: 1280×720 (16:9)
- Alt text: `Formal estate documents beside a hardware wallet and ledger on a dark desk, representing qualified appraisal of digital assets for the marital deduction`
- Do not crop to square for the card without preserving the centre subject.

---

## 4. Schema injection

Inject `sdira_compliance_schema.json` in the document `<head>` inside a single `<script type="application/ld+json">` block. The file is a `@graph` of four nodes:

1. `Article` — `@id` `https://qdav.mba/#article-2026-10-20`
2. `FAQPage` — `@id` `https://qdav.mba/#faq-2026-10-20`, eight questions
3. `LocalBusiness` — `@id` `https://qdav.mba/#localbusiness`
4. `Service` — `@id` `https://qdav.mba/#service`

The Article, FAQPage, and Service nodes reference the organization and local business by `@id`, so all four must ship together. If the CMS already emits an Organization node, keep both — the `@id` values are distinct.

Validate after injection: Google Rich Results Test, then Schema.org validator. Expected eligible results: Article, FAQ rich result.

---

## 5. URL and canonical

- Live URL: `https://qdav.mba/#blog/2026-10-20-marital-deduction-qtip-election-digital-assets-valuation`
- Canonical: the same URL
- The `mainEntityOfPage` `@id` in the schema assumes `https://qdav.mba/#blog-post/2026-10-20-marital-deduction-qtip-election-digital-assets-valuation`. If the site uses a different route pattern, update that field to match the canonical before publishing.

---

## 6. Internal links to add manually

Where the CMS does not auto-link, add:

| Anchor text | Target post |
|---|---|
| "alternate valuation date" (§ The alternate valuation date) | `2026-09-15-alternate-valuation-date-digital-assets-irc-2032` |
| "Form 8971 and Schedule A" (§ Two-death coordination) | `2026-10-06-form-8971-digital-assets-executor-basis-reporting` |
| "Form 709 gift tax valuation" (§ The appraisal is inside the statute) | `2026-07-24-irs-form-709-gift-tax-digital-assets-crypto-valuation` |
| "qualified appraisal" (§ What makes a digital asset interest QTIP) | `2026-06-16-qualified-appraisal-digital-assets-irs-requirements` |
| "USPAP Standards 9 and 10" (§ What a digital asset appraisal must establish) | `2026-09-29-uspap-standards-9-10-digital-asset-appraisal` |

---

## 7. Metadata

- **Meta title:** The Marital Deduction and Digital Assets: QTIP Elections and Portability
- **Meta description:** How IRC Section 2056 and the QTIP election work when the marital share holds bitcoin, NFTs, or staking positions — and why the deduction survives or fails on one appraisal.
- **OG title:** Same as meta title
- **OG description:** Same as meta description
- **OG image:** `feature_image.png`

---

## 8. Post-publish checks

1. Confirm the post renders under the QDAV category filter (frontmatter `category: "QDAV"`).
2. Confirm the four tables render with intact columns.
3. Confirm the schema validates with no errors.
4. Submit the URL to Google Search Console and IndexNow.
5. Confirm the featured image resolves at `https://qdav.mba/blog/2026-10-20-marital-deduction-qtip-election-digital-assets-valuation/feature_image.png` — the schema `image` field points there.

---

## 9. Distribution

- **LinkedIn (B2B):** lead with the two-death coordination problem, not with crypto. Frame for estate attorneys and CPAs. Link to the post.
- **X:** lead with the Section 2032 dual-decrease trap — the specific failure mode practitioners miss.
- No hashtags, no emoji.
