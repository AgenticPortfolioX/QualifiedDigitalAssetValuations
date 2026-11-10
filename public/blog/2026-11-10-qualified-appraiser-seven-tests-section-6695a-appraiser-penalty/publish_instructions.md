# Publishing Instructions — 2026-11-10

**Brand:** QDAV (Qualified Digital Asset Valuations)
**Post slug:** `2026-11-10-qualified-appraiser-seven-tests-section-6695a-appraiser-penalty`
**Publish date:** 2026-11-10
**Category (must be set):** `QDAV`
**Author:** QDAV

## Files

| File | Destination |
|---|---|
| `blog_final/final.md` | Post body. Frontmatter supplies title, date, description, category, author. |
| `blog_images/feature_image.png` | 1280×720 featured image, 16:9 |
| `sdira_compliance_schema/sdira_compliance_schema.json` | JSON-LD, paste into `<head>` as a single `<script type="application/ld+json">` block |

## Steps

1. Create the post at `/blog/2026-11-10-qualified-appraiser-seven-tests-section-6695a-appraiser-penalty/`.
2. Paste the contents of `final.md` starting from the H1. The five frontmatter keys must be written to the CMS fields — `title`, `date` (`2026-11-10`), `description`, `category` (`QDAV`), `author` (`QDAV`). Do not paste the YAML block into the body.
3. Upload `feature_image.png` as the featured/OG image. Set the slug-based image path so the schema's `image` URL resolves: `https://qdav.mba/blog/2026-11-10-qualified-appraiser-seven-tests-section-6695a-appraiser-penalty/feature_image.png`.
4. Paste the JSON-LD file into the page head as one block. Validate at `https://validator.schema.org/` — expect four graph nodes: `Article`, `FAQPage`, `LocalBusiness`, `Service`.
5. Confirm the page renders all six FAQ questions as visible H3s. The FAQPage schema mirrors them one-for-one; if any question is hidden by a collapsed layout, keep it in the DOM (Google requires the content to be present on the page).
6. Add internal links, if the CMS supports inline linking:
   - "USPAP Standards 9 and 10" → `/blog/2026-09-29-uspap-standards-9-10-digital-asset-appraisal/`
   - "appraisal intake file" → `/blog/2026-11-03-digital-asset-appraisal-intake-file-attorneys-cpas/`
   - "IRS examination of a digital asset valuation" → `/blog/2026-10-13-irs-examination-digital-asset-valuation-idr-burden-of-proof-appeals/`
7. Publish, then confirm the post appears under the QDAV category listing and that the pagination shows it as the newest entry.
8. Submit the URL in Google Search Console (URL Inspection → Request Indexing).

## Verification after publish

- `curl -s https://qdav.mba/blog/2026-11-10-qualified-appraiser-seven-tests-section-6695a-appraiser-penalty/ | grep -c "application/ld+json"` → expect ≥ 1
- Confirm the rendered H1 matches the frontmatter title.
- Confirm the featured image returns HTTP 200 at the URL used in the schema.
- Confirm category filter `/blog/category/qdav/` includes the post.

## Notes

- The post is 4,700-ish prose words. Do not truncate the body for the card; use the `description` frontmatter value as the excerpt.
- No hashtags, no emoji, no crypto slang — brand voice is clinical/institutional.
- Social promotion copy is not part of this post's deliverables; the LinkedIn/X cross-post is handled by the separate social job.
