---
title: "Publish Instructions — Prohibited Transactions in a Digital Asset Self-Directed IRA"
date: "2026-10-09"
slug: "2026-10-09-prohibited-transactions-self-directed-ira-digital-assets"
brand: "QDAV"
author: "QDAV"
---

# Publish Instructions — 2026-10-09

**Post title:** Prohibited Transactions in a Digital Asset Self-Directed IRA: IRC Section 4975 Disqualified Persons and Excise Taxes, the Section 408(e)(2) Disqualification Trap, Unrelated Business Taxable Income from Staking and Lending, and the Fair Market Value Evidence That Protects the Account
**Slug:** `2026-10-09-prohibited-transactions-self-directed-ira-digital-assets`
**Publish date:** 2026-10-09
**Brand / category:** QDAV
**Pillar:** Pillar 6 — Self-Directed IRAs & Retirement

## Files in this package

| File | Purpose |
|---|---|
| `blog_final/final.md` | The post. YAML frontmatter (title, date, description, category, author) then the body. |
| `blog_images/feature_image.png` | 1280×720 (16:9) featured image. |
| `sdira_compliance_schema/sdira_compliance_schema.json` | JSON-LD: Article + FAQPage + LocalBusiness + Service (`@graph`). |
| `publish_instructions/publish_instructions.md` | This file. |

## Deployment

This post is published by the **`github-blog-deployment`** skill (it supersedes the retired `qdav-github-deployment` skill). It reads the archived folder `blogged/2026-10-09-prohibited-transactions-self-directed-ira-digital-assets/` and pushes the four files to the QDAV site repository. No manual step is required.

### Manual fallback (if deployment is unavailable)

1. Place `final.md` at the blog content path for slug `2026-10-09-prohibited-transactions-self-directed-ira-digital-assets`. Do not alter the frontmatter — it must start with `---` as the first three characters and contain exactly five keys (`title`, `date`, `description`, `category`, `author`).
2. Place `feature_image.png` at `https://qdav.mba/blog/2026-10-09-prohibited-transactions-self-directed-ira-digital-assets/feature_image.png` (the URL referenced in the schema).
3. Inject `sdira_compliance_schema.json` into the page `<head>` as a single `<script type="application/ld+json">` block (the file is one `@graph`).
4. Confirm the post appears under the **QDAV** category filter.

## Pre-publish checklist

- [x] `final.md` begins with `---` as its first three characters
- [x] Frontmatter has exactly five keys; `category: "QDAV"` (brand name, not pillar)
- [x] Date is today's date (2026-10-09)
- [x] Featured image is 1280×720, 16:9
- [x] Schema validates as JSON and contains Article, FAQPage, LocalBusiness, and Service
- [x] No forbidden terms present (no "to the moon", "HODL", "Fencing", "Lumber", "Restoration")
- [x] All four subfolders present under the post directory

## Notes

- Internal links worth adding on the site if the CMS supports them (plain text in the draft, per brand convention): the SDIRA value-attestation post (2026-09-04) for the annual attestation, the §6662 valuation misstatement post (2026-09-08) to distinguish income-tax penalties from the §4975 excise tax, the Form 1099-DA cost-basis phase-in post (2026-10-02), the valuation discounts post (2026-09-22), and the qualified-appraiser credentials post (2026-08-25).
- Internal-link targets should point at the site's blog index until per-post URLs are confirmed; the schema's `mainEntityOfPage` follows the established pattern.
- Suggested social distribution: LinkedIn (CPAs and estate attorneys — "a prohibited transaction can disqualify the entire IRA on January 1; the excise tax is the smaller problem"), X (Web3 tax community — personal private-key control over IRA-held crypto is the single most common disqualifying act, and staking rewards inside an IRA may trigger Form 990-T).
