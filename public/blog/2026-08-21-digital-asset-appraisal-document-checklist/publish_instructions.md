# Publishing Instructions — 2026-08-21

**Post:** How to Gather the Right Documents for a Digital Asset Appraisal: A Checklist for Attorneys, CPAs, and Their Clients
**Slug:** 2026-08-21-digital-asset-appraisal-document-checklist
**Brand:** QDAV | **Pillar:** 10 — Client Education for Attorneys & CPAs
**Target URL:** https://qdav.mba/#blog (post route: /blog/2026-08-21-digital-asset-appraisal-document-checklist)

## Files (flat in blogged/)
- `final.md` — the post (4,443 words, YAML frontmatter with 5 keys; category="QDAV")
- `feature_image.png` — 16:9 (1280x720) featured image
- `sdira_compliance_schema.json` — JSON-LD @graph (Article + FAQPage + LocalBusiness + Service)
- `publish_instructions.md` — this file

## Steps
1. **Validate** `final.md` starts with `---` (head -c 3). Frontmatter keys: title, date, description, category, author. Do not add or remove keys.
2. **Image:** use `feature_image.png` as the og:image / card image. Alt text: "Digital asset appraisal document checklist for attorneys, CPAs, and their clients".
3. **Schema:** embed `sdira_compliance_schema.json` as a `<script type="application/ld+json">` block in the post head. Update the `image` URL to match the deployed asset path if the site uses a different route.
4. **Meta description:** use the frontmatter description verbatim (1–2 sentences).
5. **Internal links:** the post references qdav.mba services (estate, gift, donation, SDIRA, audit defense). Add internal links to those service pages where the site supports them.
6. **Category:** post must appear under the QDAV blog category (frontmatter `category: "QDAV"`). Do NOT use a pillar name.
7. **Publish date:** 2026-08-21 (today). Do not backdate or future-date.
8. **Verify after deploy:** confirm the post renders, the category filter shows it, and the FAQ schema validates (https://validator.schema.org or Rich Results Test).

## SEO notes
- Primary keywords: digital asset appraisal documents, crypto appraisal checklist, work with a qualified appraiser, appraisal for estate attorney, CPA digital asset valuation.
- 8 FAQ questions in schema target featured snippets and AI citation.
- E-E-A-T: USPAP Record Keeping Rule, IRS CCA 202302012, §170(f)(11), Form 8283 cited in-body.

## Social
- **LinkedIn:** B2B angle — "attorneys and CPAs: what to gather before referring a client for a digital asset appraisal." Tag QDAV company page.
- **X:** professional Web3-tax angle; no hashtags/emojis per brand style; normal caps.
