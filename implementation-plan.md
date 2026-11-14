# Implementation Plan: Phone Update, Google Analytics & Confirmation Funnel

**Status Board: Antigravity Orchestrator (Gemini 3.8 Flash)**
- **Current Task**: Updating phone number to 248-313-8955, implementing Google Analytics 4 tracking + ad conversion events, creating dedicated customer funnel confirmation URL (`#confirmation`), and deploying live.
- **Assigned Agent**: Antigravity Full-Stack & Growth Architect
- **Current Completion Status**: 100% Complete & Live

---

## Step-by-Step Checklist

- [x] **Phase 1: Customer Funnel Confirmation URL & Page**
  - [x] Create dedicated `src/pages/ConfirmationPage.tsx` with clear submission confirmation, next steps, and instant GA4 conversion event firing.
  - [x] Add `#confirmation` route to `src/App.tsx`.
  - [x] Update `src/pages/QuoteWorkflow.tsx` to redirect / set view to `confirmation` upon successful Formspree submission, giving a permanent URL: `https://qdav.mba/#confirmation`.
  - [x] Add `https://qdav.mba/#confirmation` to `public/sitemap.xml`.

- [x] **Phase 2: Comprehensive Phone Number Update (248-313-8955)**
  - [x] Update `index.html` (Schema.org `"telephone": "+1-248-313-8955"`).
  - [x] Update `src/components/AppraisalAgent.tsx` (call links, text, and FAQ answers).
  - [x] Update `src/pages/HomePage.tsx` (footer phone link).
  - [x] Update `src/pages/AboutPage.tsx` (contact section phone).
  - [x] Update `src/pages/QuoteWorkflow.tsx` (placeholder and text).
  - [x] Update `src/pages/TermsOfServicePage.tsx` (SMS consent HELP/STOP numbers).
  - [x] Update `public/llms.txt` and `public/llms-full.txt`.
  - [x] Update all blog markdown and schema files in `public/blog/`.

- [x] **Phase 3: Google Analytics 4 (GA4) & Advertising Conversion Tracking**
  - [x] Create `src/utils/analytics.ts` for standardized GA4 event dispatching (`page_view`, `generate_lead`, `conversion`, `form_start`, `click_to_call`, `click_to_email`).
  - [x] Inject Google Tag (`gtag.js`) into `index.html` with support for `VITE_GA_MEASUREMENT_ID` and fallback configuration.
  - [x] Track SPA hash-based route changes automatically.
  - [x] Fire `generate_lead` and advertising `conversion` events when customers submit the appraisal quote or load `#confirmation`.

- [x] **Phase 4: Build Verification, Browser Testing & Live Deployment**
  - [x] Run `npm run build` to verify clean build without TypeScript errors.
  - [x] Verify rendered DOM and confirmation page.
  - [x] Commit and push changes to GitHub `origin/main` for automatic GitHub Pages deployment.
