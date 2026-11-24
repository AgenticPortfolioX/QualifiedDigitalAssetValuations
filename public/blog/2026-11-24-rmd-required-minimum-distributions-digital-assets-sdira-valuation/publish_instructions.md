# Publishing Instructions — QDAV
## "The One Valuation Date Nobody Gets to Elect"
**Publish date:** 2026-11-24
**Slug:** `2026-11-24-rmd-required-minimum-distributions-digital-assets-sdira-valuation`
**Category:** QDAV
**Author:** QDAV

---

## 1. Files in this package
| File | Destination |
|---|---|
| `blog_final/final.md` | Post body with YAML frontmatter (title, date, description, category, author) |
| `blog_images/feature_image.png` | 1280x720 16:9 featured image |
| `sdira_compliance_schema/sdira_compliance_schema.json` | JSON-LD `@graph`: Article, FAQPage, LocalBusiness, Service |

## 2. Site placement
- URL: `https://qdav.mba/blog/2026-11-24-rmd-required-minimum-distributions-digital-assets-sdira-valuation/`
- Anchor on the blog index: `https://qdav.mba/#blog`
- Category filter: **QDAV** (brand name, not pillar). Pillar 6 (Self-Directed IRAs & Retirement) is recorded in the strategy file only.
- Reading level target already met; do not shorten the tables — they carry the FAQ-adjacent answers AI assistants quote.

## 3. Rendering checks
1. Confirm the first characters of the rendered document are the H1, with no stray rule or byline above it. The post intentionally omits the `*Published: … | By …*` line; the date and author live in frontmatter and schema.
2. Confirm all seven `###` headings under "Frequently Asked Questions" render as H3, not H4.
3. Confirm tables render with horizontal scroll on mobile — five tables total, widest is four columns.
4. Confirm the closing italic disclaimer renders as a paragraph, not a blockquote.

## 4. Schema deployment
- Inject the full `sdira_compliance_schema.json` inside a single `<script type="application/ld+json">` tag in `<head>`.
- FAQPage `mainEntity` is 1:1 with the seven body questions; do not add or remove questions without editing the body.
- LocalBusiness `@id` (`#localbusiness`) and `@organization` references must remain stable across posts so entity reconciliation works.

## 5. Internal linking (add on publish)
| Anchor text | Target |
|---|---|
| "prohibited transaction" exposure inside a retirement account | `/blog/2026-10-09-prohibited-transactions-self-directed-ira-digital-assets/` |
| annual value attestation | `/blog/2026-09-04-sdira-digital-asset-value-attestation-qualified-appraisal/` (verify exact slug on site) |
| price-evidence hierarchy | `/blog/2026-11-20-price-evidence-hierarchy-valuation-date-principal-market/` |
| Form 1099-DA reporting | `/blog/2026-10-02-form-1099-da-2026-cost-basis-phase-in-identification-relief-qualified-appraisal/` |

## 6. Distribution after publish
- LinkedIn (QDAV company page): lead with the December 31 date discipline; three to five hashtags permitted for QDAV only.
- X (@QDAV121): one post, statute-first, no hashtags.
- No email blast without Gram's approval.

## 7. Post-publish verification
- Fetch the live URL and confirm the H1, the seven FAQ H3s, and the presence of `FAQPage` in the page source.
- Confirm the featured image resolves at the schema `image` path.
- Confirm the post appears under the QDAV category on the index.
