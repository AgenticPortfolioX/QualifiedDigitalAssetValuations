/**
 * Google Analytics 4 (GA4) & Advertising Conversion Tracking Utility
 * QDAV - Qualified Digital Asset Valuations (https://qdav.mba)
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
    GA_MEASUREMENT_ID?: string;
  }
}

// Fallback measurement ID or environment variable override
export const DEFAULT_GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || "G-QDAVTRACK1";

/**
 * Safely call window.gtag if initialized
 */
export function gtag(...args: any[]) {
  if (typeof window !== "undefined") {
    if (typeof window.gtag === "function") {
      window.gtag(...args);
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push(arguments);
    }
  }
}

/**
 * Track SPA Pageviews on Hash Change
 */
export function trackPageView(pagePath: string, pageTitle?: string) {
  const measurementId = (typeof window !== "undefined" && window.GA_MEASUREMENT_ID) || DEFAULT_GA_ID;
  const path = pagePath.startsWith("#") ? `/${pagePath.replace("#", "")}` : pagePath;

  gtag("event", "page_view", {
    send_to: measurementId,
    page_path: path || "/",
    page_title: pageTitle || document.title,
    page_location: window.location.href
  });
}

/**
 * Track Lead & Form Submissions for Advertising Funnels (Google Ads / Meta / LinkedIn)
 */
export function trackLeadSubmission(data: {
  purpose?: string;
  assetType?: string;
  valuationDate?: string;
}) {
  // Standard GA4 recommended event: generate_lead
  gtag("event", "generate_lead", {
    event_category: "customer_funnel",
    event_label: data.purpose || "appraisal_request",
    asset_type: data.assetType,
    valuation_date: data.valuationDate,
    value: 1.0,
    currency: "USD"
  });

  // Generic conversion event for ad platform conversion tag triggers
  gtag("event", "conversion", {
    send_to: (typeof window !== "undefined" && window.GA_MEASUREMENT_ID) || DEFAULT_GA_ID,
    event_category: "lead",
    event_label: "qdav_quote_submitted",
    value: 1.0,
    currency: "USD"
  });
}

/**
 * Track Custom Conversion / Goal
 */
export function trackConversion(conversionName: string, params: Record<string, any> = {}) {
  gtag("event", "conversion", {
    conversion_name: conversionName,
    ...params
  });
}

/**
 * Track Phone & Email Inquiries
 */
export function trackContactClick(method: "phone" | "email", targetValue: string) {
  gtag("event", "contact", {
    event_category: "engagement",
    event_label: method,
    target: targetValue
  });
}

