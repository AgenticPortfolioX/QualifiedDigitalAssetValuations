# Publishing Instructions — QDAV Blog Post, 2026-10-23

**Slug:** `2026-10-23-charitable-lead-trust-digital-assets-170e1a-holding-period-7520-rate`
**Category:** QDAV
**Author:** QDAV
**Publish date:** 2026-10-23

## Files to Publish

| File | Destination |
|---|---|
| `blog_final/final.md` | Blog post body; frontmatter passes through to the CMS |
| `blog_images/feature_image.png` | Featured image, 1280×720 (16:9) |
| `sdira_compliance_schema/sdira_compliance_schema.json` | Injected into `<head>` as JSON-LD |

## Frontmatter

Exactly five keys, verified present: `title`, `date`, `description`, `category`, `author`. The file begins with `---` as its first three characters. Do not add, reorder, or reformat keys — the blog renderer fails silently on malformed frontmatter.

`category` must remain the brand name `QDAV`. It is not the pillar name. The pillar for this post is Pillar 5 — Charitable Contributions, which lives in the strategy file, not in the frontmatter.

## Body

- H1 is the post title, followed by the byline line and a horizontal rule.
- Eleven H2 sections, ending with `## Frequently Asked Questions` and `## The Number Is the Document`.
- Five markdown tables. Table delimiter rows use three or more hyphens per column; the renderer needs them intact.
- One blockquote containing the verbatim text of 26 CFR §1.170A-4(b)(1). Preserve it exactly — it carries the post's central legal claim.
- FAQ uses H3 headings beneath the FAQ H2 so the questions map cleanly to the FAQPage schema.

## Schema

- Valid JSON, verified by parser.
- Four nodes in `@graph`: `Article`, `FAQPage`, `LocalBusiness`, `Service`.
- Eight `Question` entries in the FAQPage, matching the eight H3 questions in the post one to one.
- `datePublished` and `dateModified` are both `2026-10-23`.
- Brand fields (`telephone`, `email`, `address`, `sameAs`, `areaServed`, `openingHoursSpecification`, `legalName`) are carried forward from the 2026-10-20 post's verified schema. Do not retype them.
- Image URL references the publish path for this slug. If the CMS rewrites asset paths, update `image` to match.

## Featured Image

1280×720 PNG, 16:9. Should read as institutional rather than decorative: restrained palette, no text overlay, no crypto iconography that reads as promotional. Suitable alt text: "An institutional trust instrument and a digital asset valuation report on a desk in a professional office."

## Post-Publish Checks

1. Confirm the post appears under the QDAV category listing, not a pillar-named category.
2. Confirm all five tables render with intact columns.
3. Validate the JSON-LD with Google's Rich Results Test — expect Article and FAQPage eligibility with eight questions.
4. Confirm the H1 matches the frontmatter `title` exactly.
5. Spot-check that the blockquoted regulation text renders as a blockquote, not as body copy.

## Notes for the Editor

The post corrects a common practitioner error: the short-term charitable reduction is IRC §170(e)(1)(A), not §170(e)(1)(B), and it does not reach a charitable lead interest. Do not "fix" the section citation to (B) in review. If a reviewer proposes that change, point them to 26 CFR §1.170A-4(b)(1).
