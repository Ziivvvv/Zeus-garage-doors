/**
 * SEOHead.tsx — Zeus Garage Doors
 * Full schema injection engine: LocalBusiness, Service, FAQPage, BreadcrumbList
 * Inject on every page. No page ships without this.
 *
 * SSR path: during renderToString (prerender), useEffect doesn't run.
 * We detect typeof window === "undefined" and push data into SeoCollectorContext
 * so prerender.tsx can inject correct per-page <head> tags into the static HTML.
 */

import { useContext, useEffect } from "react";
import { SeoCollectorContext } from "../lib/seo-collector";

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface SEOHeadProps {
  // Core meta
  title: string;
  description: string;
  canonical?: string;

  // Schema data
  pageType: "home" | "service" | "location" | "blog" | "about" | "contact";
  serviceName?: string;
  serviceDescription?: string;
  cityName?: string;
  faqs?: FAQItem[];
  breadcrumbs?: BreadcrumbItem[];

  // Blog-specific
  datePublished?: string;
  dateModified?: string;
  authorName?: string;

  // Open Graph
  ogImage?: string;
  ogType?: "website" | "article";

  // Crawl control
  noIndex?: boolean;

  // Extra schemas to inject alongside the standard ones
  additionalSchemas?: object[];
}

// ─────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────

const BUSINESS = {
  name: "Zeus Garage Doors",
  legalName: "Zeus Garage Doors and Gate Repair LLC",
  url: "https://zeusgaragedoorswa.com",
  telephone: "425-448-6443",
  email: "info@zeusgaragedoorswa.com",
  logo: "https://zeusgaragedoorswa.com/zeus-logo-navbar.png",
  image: "https://zeusgaragedoorswa.com/og-hero.webp",
  description:
    "Professional garage door repair, installation, spring replacement, and opener installation services in Kirkland, Bellevue, Redmond, and the greater Eastside area.",
  addressRegion: "WA",
  addressCountry: "US",
  postalCode: "98034",
  addressLocality: "Kirkland",
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check",
  geo: {
    latitude: 47.71289,
    longitude: -122.17948,
    radius: "50000",
  },
  areaServed: [
    "Kirkland",
    "Bellevue",
    "Redmond",
    "Mercer Island",
    "Lynnwood",
    "Bothell",
    "Woodinville",
    "Kenmore",
  ],
  sameAs: [],
};

// ─────────────────────────────────────────────
// SCHEMA BUILDERS
// ─────────────────────────────────────────────

function buildLocalBusinessSchema(cityName?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${BUSINESS.url}/#organization`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    description: BUSINESS.description,
    url: BUSINESS.url,
    telephone: "+14254486443",
    email: BUSINESS.email,
    logo: {
      "@type": "ImageObject",
      url: BUSINESS.logo,
      width: 200,
      height: 60,
    },
    image: {
      "@type": "ImageObject",
      url: BUSINESS.image,
      width: 1200,
      height: 630,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "12550 120th Ave NE, Unit 732",
      addressLocality: cityName || BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Seattle",       addressRegion: "WA", addressCountry: "US" },
      { "@type": "City", name: "Kirkland",      addressRegion: "WA", addressCountry: "US" },
      { "@type": "City", name: "Bellevue",      addressRegion: "WA", addressCountry: "US" },
      { "@type": "City", name: "Redmond",       addressRegion: "WA", addressCountry: "US" },
      { "@type": "City", name: "Mercer Island", addressRegion: "WA", addressCountry: "US" },
      { "@type": "City", name: "Lynnwood",      addressRegion: "WA", addressCountry: "US" },
      { "@type": "City", name: "Bothell",       addressRegion: "WA", addressCountry: "US" },
      { "@type": "City", name: "Woodinville",   addressRegion: "WA", addressCountry: "US" },
      { "@type": "City", name: "Kenmore",       addressRegion: "WA", addressCountry: "US" },
    ],
    priceRange: BUSINESS.priceRange,
    currenciesAccepted: BUSINESS.currenciesAccepted,
    paymentAccepted: BUSINESS.paymentAccepted,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+14254486443",
      email: BUSINESS.email,
      contactType: "customer service",
      areaServed: "WA",
      availableLanguage: "English",
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "Washington State General Contractor License",
        identifier: "ZEUSGGD740KN",
        recognizedBy: {
          "@type": "GovernmentOrganization",
          name: "Washington State Department of Labor & Industries",
          url: "https://lni.wa.gov",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "bond",
        name: "Contractor Surety Bond",
        identifier: "543530Y",
        recognizedBy: {
          "@type": "Organization",
          name: "Westfield Insurance Co",
        },
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "06:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday"],
        opens: "06:00",
        closes: "18:00",
      },
    ],
  };
}

function buildServiceSchema(
  serviceName: string,
  serviceDescription: string,
  cityName?: string
) {
  const city = cityName || "Kirkland";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${serviceName} in ${city}, WA`,
    description: serviceDescription,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${BUSINESS.url}/#organization`,
      name: BUSINESS.name,
      telephone: BUSINESS.telephone,
    },
    areaServed: {
      "@type": "City",
      name: city,
      addressRegion: "WA",
      addressCountry: "US",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: serviceName,
    },
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: {
        "@type": "ContactPoint",
        telephone: BUSINESS.telephone,
        contactType: "customer service",
        availableLanguage: "English",
      },
    },
    offers: {
      "@type": "Offer",
      warranty: {
        "@type": "WarrantyPromise",
        durationOfWarranty: {
          "@type": "QuantitativeValue",
          value: 5,
          unitCode: "ANN",
        },
        warrantyScope: "https://schema.org/LaborsAndParts",
      },
    },
  };
}

function buildFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BUSINESS.url}/#website`,
    url: BUSINESS.url,
    name: BUSINESS.name,
    description: BUSINESS.description,
    publisher: {
      "@type": "Organization",
      "@id": `${BUSINESS.url}/#organization`,
      name: BUSINESS.name,
      legalName: BUSINESS.legalName,
    },
  };
}

function buildBreadcrumbSchema(breadcrumbs: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${BUSINESS.url}${crumb.url}`,
    })),
  };
}

function buildArticleSchema(props: SEOHeadProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: props.title,
    description: props.description,
    image: props.ogImage || BUSINESS.image,
    datePublished: props.datePublished,
    dateModified: props.dateModified || props.datePublished,
    author: {
      "@type": "Person",
      name: props.authorName || "Zeus Garage Doors Team",
    },
    publisher: {
      "@type": "Organization",
      "@id": `${BUSINESS.url}/#organization`,
      name: BUSINESS.name,
      legalName: BUSINESS.legalName,
      logo: {
        "@type": "ImageObject",
        url: BUSINESS.logo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": props.canonical || BUSINESS.url,
    },
  };
}

// Collects all schemas for a given page — used by both SSR and browser paths
function buildSchemas(props: SEOHeadProps): object[] {
  const {
    pageType,
    serviceName,
    serviceDescription,
    cityName,
    faqs,
    breadcrumbs,
    datePublished,
    additionalSchemas,
  } = props;

  const schemas: object[] = [];

  if (pageType === "home") schemas.push(buildWebSiteSchema());
  schemas.push(buildLocalBusinessSchema(cityName));

  if (
    (pageType === "service" || pageType === "location") &&
    serviceName &&
    serviceDescription
  ) {
    schemas.push(buildServiceSchema(serviceName, serviceDescription, cityName));
  }

  if (faqs && faqs.length > 0) schemas.push(buildFAQSchema(faqs));
  if (breadcrumbs && breadcrumbs.length > 0) schemas.push(buildBreadcrumbSchema(breadcrumbs));
  if (pageType === "blog" && datePublished) schemas.push(buildArticleSchema(props));
  if (additionalSchemas && additionalSchemas.length > 0) schemas.push(...additionalSchemas);

  return schemas;
}

// ─────────────────────────────────────────────
// INJECT SCHEMA INTO DOM (browser only)
// ─────────────────────────────────────────────

function injectSchema(id: string, schema: object) {
  const existing = document.getElementById(id);
  if (existing) existing.remove();

  const script = document.createElement("script");
  script.id = id;
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema, null, 2);
  document.head.appendChild(script);
}

// ─────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────

export default function SEOHead(props: SEOHeadProps) {
  const {
    title,
    description,
    canonical,
    pageType,
    serviceName,
    serviceDescription,
    cityName,
    faqs,
    breadcrumbs,
    datePublished,
    dateModified,
    authorName,
    ogImage,
    ogType = "website",
    noIndex = false,
    additionalSchemas,
  } = props;

  const collector = useContext(SeoCollectorContext);

  const canonicalUrl = canonical?.startsWith("https")
    ? canonical
    : canonical
    ? `https://zeusgaragedoorswa.com${canonical}`
    : "https://zeusgaragedoorswa.com";

  const finalOgImage =
    ogImage ||
    "https://zeusgaragedoorswa.com/og-hero.webp";

  // ── SSR path: collect data for prerender head injection
  // useEffect doesn't run during renderToString — we push data synchronously instead
  if (typeof window === "undefined" && collector) {
    collector.collect({
      title,
      description,
      canonicalUrl,
      ogType,
      ogImage: finalOgImage,
      noIndex,
      cityName,
      schemas: buildSchemas(props),
    });
  }

  // Stable keys prevent re-runs when callers pass inline array literals
  const faqsKey = faqs ? faqs.map((f) => f.question).join("|") : "";
  const breadcrumbsKey = breadcrumbs ? breadcrumbs.map((b) => b.url).join("|") : "";

  useEffect(() => {
    // ── Meta: title
    document.title = title;

    // ── Meta: description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // ── Meta: canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", canonicalUrl);

    // ── Open Graph
    const ogTags: Record<string, string> = {
      "og:title": title,
      "og:description": description,
      "og:url": canonicalUrl,
      "og:type": ogType,
      "og:image": finalOgImage,
      "og:site_name": "Zeus Garage Doors",
      "og:locale": "en_US",
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    // ── Twitter Card
    const twitterTags: Record<string, string> = {
      "twitter:card": "summary_large_image",
      "twitter:title": title,
      "twitter:description": description,
      "twitter:image": finalOgImage,
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    // ── Robots / geo
    const additionalMeta: Record<string, string> = {
      robots: noIndex
        ? "noindex, nofollow"
        : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      "geo.region": "US-WA",
      "geo.placename": cityName || "Kirkland",
      "geo.position": "47.71289;-122.17948",
      ICBM: "47.71289, -122.17948",
    };

    Object.entries(additionalMeta).forEach(([name, content]) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    // ── Schema: WebSite + SearchAction (home page only)
    if (pageType === "home") {
      injectSchema("schema-website", buildWebSiteSchema());
    }

    // ── Schema: LocalBusiness (every page)
    injectSchema("schema-localbusiness", buildLocalBusinessSchema(cityName));

    // ── Schema: Service (service + location pages)
    if (
      (pageType === "service" || pageType === "location") &&
      serviceName &&
      serviceDescription
    ) {
      injectSchema(
        "schema-service",
        buildServiceSchema(serviceName, serviceDescription, cityName)
      );
    }

    // ── Schema: FAQPage
    if (faqs && faqs.length > 0) {
      injectSchema("schema-faq", buildFAQSchema(faqs));
    }

    // ── Schema: BreadcrumbList
    if (breadcrumbs && breadcrumbs.length > 0) {
      injectSchema("schema-breadcrumb", buildBreadcrumbSchema(breadcrumbs));
    }

    // ── Schema: Article (blog only)
    if (pageType === "blog" && datePublished) {
      injectSchema("schema-article", buildArticleSchema({
        title,
        description,
        canonical,
        pageType,
        datePublished,
        dateModified,
        authorName,
        ogImage,
      }));
    }

    // ── Schema: Additional (page-specific, e.g. HowTo)
    if (additionalSchemas && additionalSchemas.length > 0) {
      additionalSchemas.forEach((schema, i) => {
        injectSchema(`schema-additional-${i}`, schema);
      });
    }
  }, [title, description, canonicalUrl, pageType, cityName, faqsKey, breadcrumbsKey, noIndex, additionalSchemas]);

  return null; // All injection is done via useEffect into document.head
}
