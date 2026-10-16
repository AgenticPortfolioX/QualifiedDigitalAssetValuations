---
title: "Publish Instructions — Airdrops, Staking Rewards, Hard Forks, and Mining Income"
date: "2026-10-16"
slug: "2026-10-16-airdrop-staking-rewards-hard-fork-mining-income-valuation"
brand: "QDAV"
author: "QDAV"
---

# Publish Instructions — 2026-10-16

**Post title:** Airdrops, Staking Rewards, Hard Forks, and Mining Income: How the IRS Values Digital Assets You Never Bought
**Slug:** `2026-10-16-airdrop-staking-rewards-hard-fork-mining-income-valuation`
**Publish date:** 2026-10-16
**Brand / category:** QDAV
**Pillar:** Pillar 8 — Digital Asset Types & Tax Treatment

## Files in this package

| File | Purpose |
|---|---|
| `blog_final/final.md` | The post. YAML frontmatter (title, date, description, category, author) then the body. |
| `blog_images/feature_image.png` | 1280×720 (16:9) featured image. |
| `sdira_compliance_schema/sdira_compliance_schema.json` | JSON-LD: Article + FAQPage + LocalBusiness + Service (`@graph`). |
| `publish_instructions/publish_instructions.md` | This file. |

## Deployment

This post is published by the **`github-blog-deployment`** skill (it supersedes the retired `qdav-github-deployment` skill). It reads the archived folder `blogged/2026-10-16-airdrop-staking-rewards-hard-fork-mining-income-valuation/` and pushes the four files to the QDAV site repository. No manual step is required.

### Manual fallback (if deployment is unavailable)

1. Place `final.md` at the blog content path for slug `2026-10-16-airdrop-staking-rewards-hard-fork-mining-income-valuation`. Do not alter the frontmatter — it must start with `---` as the first three characters and contain exactly five keys (`title`, `date`, `description`, `category`, `author`).
2. Place `feature_image.png` at `https://qdav.mba/blog/2026-10-16-airdrop-staking-rewards-hard-fork-mining-income-valuation/feature_image.png` (the URL referenced in the schema).
3. Inject `sdira_compliance_schema.json` into the page `<head>` as a single `<script type="application/ld+json">` block (the file is one `@graph`).
4. Confirm the post appears under the **QDAV** category filter.

## Pre-publish checklist

- [x] `final.md` begins with `---` as its first three characters
- [x] Frontmatter has exactly five keys; `category: "QDAV"` (brand name, not pillar)
- [x] Date is today's date (2026-10-16)
- [x] Prose-only length within the QDAV band (4,995 prose words; raw 5,979 with tables)
- [x] Featured image is 1280×720, 16:9
- [x] Schema validates as JSON and contains Article, FAQPage, LocalBusiness, and Service
- [x] No forbidden terms present (no "to the moon", "HODL", "Fencing", "Lumber", "Restoration")
- [x] All four subfolders present under the post directory
- [x] FAQ block contains 8 questions matching the FAQPage schema
- [x] Key phrases present: "USPAP-compliant", "Qualified Appraisal", "Fair Market Value", "IRS Section 170", "defensible data"

## Notes for editorial review

- **Accuracy guardrail 1 — do not attribute a self-employment tax holding to Rev. Rul. 2023-14.** The ruling decides when validation rewards are included in gross income and how they are measured. The self-employment analysis rests on Notice 2014-21, Q&A 9, and the trade-or-business factors at Treas. Reg. section 1.183-2. The post states this expressly.
- **Accuracy guardrail 2 — do not describe a receipt-date valuation as a "Qualified Appraisal."** That term is defined at section 170(f)(11)(E) and Treas. Reg. section 1.170A-17 for charitable-contribution substantiation. The receipt-date deliverable is a USPAP-compliant appraisal of fair market value. The post draws the distinction in a dedicated section; do not let an editor collapse it.
- **Accuracy guardrail 3 — Chief Counsel Advice is not precedent.** The post says so where it relies on CCA 202114020, and the caution applies to CCA 202316008, CCA 202302011, CCA 202302012, and CCA 202444009 as well.
- **Accuracy guardrail 4 — no discount figures.** No maximum discount percentage or "standard" DLOM figure appears anywhere in the post. Discounts are support-dependent. Do not add a number.
- **Internal links worth adding on the site if the CMS supports them** (plain text in the draft, per brand convention): the Form 1099-DA cost-basis phase-in post (2026-10-02) for the information-reporting architecture this post builds on; the examination and burden of proof post (2026-10-13) for the section 7491 allocation referenced here; the digital asset types post (2026-09-11) for the asset-class survey this post takes up at the level of the receipt event; the blockchain discounts post (2026-09-22) for DLOM and blockage mechanics applied to restricted receipt positions; the USPAP Standards 9 and 10 post (2026-09-29) for the Standards Rule 10-2 report structure; the donor-advised funds and charitable remainder trusts post (2026-09-18) for the section 170 deduction mechanics the holding-period trap interacts with; and the cost basis reporting post (2026-07-28) for wallet-level tracking under Revenue Procedure 2024-28. Internal-link targets should point at the site's blog index until per-post URLs are confirmed; the schema's `mainEntityOfPage` follows the established pattern.
- **Suggested social distribution:**
  - LinkedIn (CPAs and estate attorneys): the information asymmetry — the Service has a third-party trail for the disposal and none for the receipt, so the receipt-date fair market value rests entirely on the client's contemporaneous record. That is the line that opens a conversation about engagement.
  - X (Web3 tax community): the four Chief Counsel memoranda. Frozen platform rewards are income in the year credited (CCA 202444009) even though the account was frozen at year end; a proof-of-work to proof-of-stake upgrade is not income at all (CCA 202316008). Almost no practitioner content carries either.
  - Advisor email/newsletter (tax controversy and estate planning firms): the charitable-contribution trap at section 170(e)(1)(A) — a reward token held one year or less is deduction-limited to basis, which means the receipt-date value has to be right rather than low.
