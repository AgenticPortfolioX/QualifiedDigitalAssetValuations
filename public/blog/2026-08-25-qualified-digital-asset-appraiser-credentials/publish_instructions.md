# Publishing Instructions — 2026-08-25-qualified-digital-asset-appraiser-credentials

## Post
- **Title:** How to Verify a Qualified Appraiser for Digital Assets: IRS Credential Standards, USPAP Competency, and Red Flags
- **Slug:** 2026-08-25-qualified-digital-asset-appraiser-credentials
- **Date:** 2026-08-25
- **Category (site):** QDAV
- **Author:** QDAV
- **Pillar (internal):** 9 — Appraiser Standards & Professional Practice
- **Archetype:** Sage — objective, scholarly, deeply authoritative; clinical, professional, institutional tone

## Files (4)
1. `blog_final/final.md` — full post with YAML frontmatter (5 keys: title, date, description, category, author)
2. `blog_images/feature_image.png` — 16:9 (1280x720) featured image
3. `sdira_compliance_schema.json` — JSON-LD schema (Article + FAQPage + LocalBusiness + Service); **deploy to GitHub as `schema.json`**
4. `publish_instructions.md` — this file

## Deployment
- **Repo:** AgenticPortfolioX/QualifiedDigitalAssetValuations
- **Target path:** `public/blog/2026-08-25-qualified-digital-asset-appraiser-credentials/`
- **GitHub filename for schema:** `schema.json` (website builder `sync-blog.ts` expects this name; the blogged folder may store it as `sdira_compliance_schema.json`)
- **No manual registry edits:** the `blog-automation.yml` GitHub Action auto-syncs `blog-posts.json` on push.
- Deployment is handled by the `github-blog-deployment` skill (no-ask policy — post passed Quality Gate).

## Verification
- After deploy: confirm files exist at `public/blog/<slug>/` via GitHub API; confirm GitHub Actions runs (Blog Auto-Sync + Pages deploy) succeed; confirm the live post renders on https://qdav.mba/#blog.

## Social / Distribution Notes
- LinkedIn: crosspost option per `linkedin-blog-crosspost` skill (B2B audience: estate attorneys, CPAs, trust officers).
- X: share with Web3 tax community angle.
- No hashtags or emojis per brand posting conventions; American English.
- Internal links (conceptual): qualified appraisal requirements (2026-06-16), USPAP AO-41 (2026-06-09), IRS audit defense (2026-07-17), appraisal document checklist (2026-08-21).
