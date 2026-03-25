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
  logo: "https://zeusgaragedoorswa.com/logo.png",
  image: "https://zeusgaragedoorswa.com/hero-bg.jpg",
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
  sameAs: [
    "https://www.yelp.com/biz/zeus-garage-doors",
    "https://www.facebook.com/zeusgaragedoorswa",
    "https://www.angi.com/companylist/us/wa/kirkland/zeus-garage-doors",
  ],
};

// ─────────────────────────────────────────────
// SCHEMA BUILDERS
// ─────────────────────────────────────────────

function buildLocalBusinessSchema(cityName?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BUSINESS.url}/#organization`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: BUSINESS.url,
    logo: BUSINESS.logo,
    image: BUSINESS.image,
    description: BUSINESS.description,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    currenciesAccepted: BUSINESS.currenciesAccepted,
    paymentAccepted: BUSINESS.paymentAccepted,
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName || BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    geo: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: BUSINESS.geo.latitude,
        longitude: BUSINESS.geo.longitude,
      },
      geoRadius: BUSINESS.geo.radius,
    },
    areaServed: BUSINESS.areaServed.map((city) => ({
      "@type": "City",
      name: city,
    })),
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
    sameAs: BUSINESS.sameAs,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "80",
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Garage Door Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Garage Door Spring Replacement",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Garage Door Opener Repair",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Garage Door Cable Replacement",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "New Garage Door Installation",
          },
        },
      ],
    },
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
}: SEOHeadProps) {
  const canonicalUrl = canonical
    ? `https://zeusgaragedoorswa.com${canonical}`
    : "https://zeusgaragedoorswa.com";

  const finalOgImage =
    ogImage ||
    "https://zeusgaragedoorswa.com/images/zeus-garage-doors-og.webp";

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
      robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
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
  }, [title, description, canonicalUrl, pageType, cityName, faqsKey, breadcrumbsKey]);

  return null; // All injection is done via useEffect into document.head
}
