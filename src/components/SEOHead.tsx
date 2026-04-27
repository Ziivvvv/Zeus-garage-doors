/**
 * SEOHead.tsx — Zeus Garage Doors
 * Full schema injection engine: LocalBusiness, Service, FAQPage, BreadcrumbList
 * Inject on every page. No page ships without this.
 */

import { useEffect } from "react";

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
}

// ─────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────

const BUSINESS = {
  name: "Zeus Garage Doors",
  legalName: "Zeus Garage Doors and Gate Repair LLC",
  url: "https://zeusgaragedoorswa.com",
  telephone: "425-555-0199",
  email: "zeusgaragedoorepair@gmail.com",
  logo: "https://zeusgaragedoorswa.com/zeus-logo-navbar.png",
  image: "https://zeusgaragedoorswa.com/zeus-logo-navbar.png",
  description:
    "Professional garage door repair, spring replacement, and opener installation services in Kirkland, Bellevue, Redmond, and the greater Eastside area.",
  addressRegion: "WA",
  addressCountry: "US",
  postalCode: "98033",
  addressLocality: "Kirkland",
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check",
  geo: {
    latitude: 47.6785,
    longitude: -122.2015,
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
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    description:
      "Expert garage door repair and installation across Washington State. Fast, reliable service from the pros.",
    url: BUSINESS.url,
    telephone: BUSINESS.telephone,
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName || BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      addressCountry: BUSINESS.addressCountry,
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
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BUSINESS.url}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
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

// ─────────────────────────────────────────────
// INJECT SCHEMA INTO DOM
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

export default function SEOHead({
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
}: SEOHeadProps) {
  const canonicalUrl = canonical?.startsWith("https")
    ? canonical
    : canonical
    ? `https://zeusgaragedoorswa.com${canonical}`
    : "https://zeusgaragedoorswa.com";

  const finalOgImage =
    ogImage ||
    "https://zeusgaragedoorswa.com/zeus-logo-navbar.png";

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
      "geo.position": "47.6785;-122.2015",
      ICBM: "47.6785, -122.2015",
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
  }, [title, description, canonicalUrl, pageType, cityName, faqsKey, breadcrumbsKey, noIndex]);

  return null; // All injection is done via useEffect into document.head
}
