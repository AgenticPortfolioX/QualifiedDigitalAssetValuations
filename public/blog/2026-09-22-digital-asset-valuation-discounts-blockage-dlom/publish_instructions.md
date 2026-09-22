# Publish Instructions — QDAV Blog Post

**Title:** Valuation Discounts for Digital Assets: Blockage, the Discount for Lack of Marketability, and Restricted Token Positions Under USPAP and the Treasury Regulations
**Slug:** `2026-09-22-digital-asset-valuation-discounts-blockage-dlom`
**Publish date:** 2026-09-22
**Author / Category:** QDAV
**Pillar:** 3 — Valuation Methodology

---

## Files

| File | Source path in this folder |
|---|---|
| Post body (Markdown) | `blog_final/final.md` |
| Featured image (1280×720, 16:9) | `blog_images/feature_image.png` |
| JSON-LD schema (Article + FAQPage + LocalBusiness + Service) | `sdira_compliance_schema/sdira_compliance_schema.json` |
| This instruction set | `publish_instructions/publish_instructions.md` |

## Deployment Target (qdav.mba)

- **Content path:** `blog/<slug>/` — the site expects the post markdown alongside `feature_image.png` in the same slug directory.
- **Post URL (hash route, SPA):** `https://qdav.mba/#blog-post/2026-09-22-digital-asset-valuation-discounts-blockage-dlom`
- **Blog index:** `https://qdav.mba/#blog`
- **Image URL referenced by schema:** `https://qdav.mba/blog/2026-09-22-digital-asset-valuation-discounts-blockage-dlom/feature_image.png`

⚠️ **Image path note:** serve the feature image from `/blog/<slug>/feature_image.png`. The `/assets/images/<slug>/` path returns 404 on this site — do not use it.

## Steps

1. Create the post directory `blog/2026-09-22-digital-asset-valuation-discounts-blockage-dlom/`.
2. Add `final.md` unmodified. The YAML frontmatter block must remain the first three characters of the file — no leading whitespace or blank line. Five keys are required: `title`, `date`, `description`, `category`, `author`. `category` must read `"QDAV"` (the brand name), not a pillar name.
3. Add `feature_image.png` to the same directory. Do not rename it.
4. Register the post in the blog index feed used by `#blog` so the card renders with the frontmatter `description` as the excerpt.
5. Inject the JSON-LD from `sdira_compliance_schema.json` into the page `<head>` as a single `<script type="application/ld+json">` block. The file is one `@graph` containing four nodes: `Article`, `FAQPage` (8 questions), `LocalBusiness`, and `Service`. Do not split the graph.
6. Confirm the rendered post shows the H1, the published date line, all eight FAQ questions, and the QDAV contact footer.

## Pre-Publish Verification

- [ ] `head -c 3 final.md` returns `---`
- [ ] `grep "^category:" final.md` returns `category: "QDAV"`
- [ ] `grep "^date:" final.md` returns `date: "2026-09-22"`
- [ ] Word count 3,000–5,000 (current: 5,401 including Markdown table syntax; body prose ≈5,200)
- [ ] Eight `###` FAQ headings present
- [ ] JSON-LD parses (`python3 -m json.tool`)
- [ ] No forbidden terms present
- [ ] Feature image is 1280×720 PNG

## Post-Publish Verification

- [ ] `https://qdav.mba/#blog-post/2026-09-22-digital-asset-valuation-discounts-blockage-dlom` renders
- [ ] Post appears under the QDAV category on `#blog`
- [ ] Featured image loads at `/blog/2026-09-22-digital-asset-valuation-discounts-blockage-dlom/feature_image.png`
- [ ] FAQ accordion renders all eight questions
- [ ] Rich-results test validates `Article`, `FAQPage`, `LocalBusiness`, and `Service`

## Archive Location

`/home/umbrel/umbrel/app-data/syncthing/data/hermes_deliveries/QDAV/blogged/2026-09-22-digital-asset-valuation-discounts-blockage-dlom/` — four files, flat: `final.md`, `feature_image.png`, `publish_instructions.md`, `sdira_compliance_schema.json`.
