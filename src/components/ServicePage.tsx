/**
 * ServicePage.tsx — Zeus Garage Doors
 * Template for all /services/* pages
 * - Featured Snippet "Direct Answer" block (40-60 words)
 * - Entity saturation: related components, standards, brands
 * - Service + FAQPage JSON-LD schema via SEOHead
 * - Internal links to city pages
 * - Framer Motion scroll animations
 */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead, { FAQItem } from "./SEOHead";
import FAQAccordion from "./FAQAccordion";

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────

export interface ServicePageProps {
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  serviceName: string;
  /** Optional override for the H1 tag only (serviceName is still used everywhere else) */
  pageH1?: string;
  serviceTagline: string;
  /** CRITICAL: Featured snippet block — 40-60 words, direct answer format */
  directAnswer: string;
  heroImage: {
    src: string;
    alt: string;
    title: string;
  };
  /** Override the H2 for the "What's Included" section */
  whatWeDoHeading?: string;
  whatWeDoItems: string[];
  /** Override the H2 for the "Warning Signs" section */
  warningSignsHeading?: string;
  warningSignsItems: string[];
  /** Override the H2 for the "Why Zeus" section */
  whyZeusHeading?: string;
  whyZeusPoints: {
    icon: string;
    heading: string;
    body: string;
  }[];
  /**
   * Additional editorial content blocks rendered between "Why Zeus" and the
   * Cities section. Each block adds a semantic H2 + body paragraph for word
   * count depth and topical authority.
   */
  contentBlocks?: { heading: string; body: string }[];
  relatedEntities: string[];
  faqs: FAQItem[];
  breadcrumbs: { name: string; url: string }[];
}

// ─────────────────────────────────────────────
// CITIES SERVED
// ─────────────────────────────────────────────

const CITIES = [
  { name: "Kirkland", href: "/locations/kirkland-wa" },
  { name: "Bellevue", href: "/locations/bellevue-wa" },
  { name: "Redmond", href: "/locations/redmond-wa" },
  { name: "Mercer Island", href: "/locations/mercer-island-wa" },
  { name: "Lynnwood", href: "/locations/lynnwood-wa" },
  { name: "Bothell", href: "/locations/bothell-wa" },
  { name: "Woodinville", href: "/locations/woodinville-wa" },
  { name: "Kenmore", href: "/locations/kenmore-wa" },
  { name: "Seattle", href: "/locations/seattle-wa" },
];

// ─────────────────────────────────────────────
// SCROLL ANIMATION WRAPPER
// ─────────────────────────────────────────────

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// BREADCRUMBS
// ─────────────────────────────────────────────

function Breadcrumbs({ items }: { items: { name: string; url: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol
        className="flex flex-wrap items-center gap-2 text-sm text-white/60"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, i) => (
          <li
            key={item.url}
            itemScope
            itemProp="itemListElement"
            itemType="https://schema.org/ListItem"
            className="flex items-center gap-2"
          >
            {i > 0 && (
              <svg className="w-3 h-3 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
            {i === items.length - 1 ? (
              <span className="text-white/90 font-medium" itemProp="name">
                {item.name}
              </span>
            ) : (
              <Link
                to={item.url}
                className="hover:text-white transition-colors"
                itemProp="item"
              >
                <span itemProp="name">{item.name}</span>
              </Link>
            )}
            <meta itemProp="position" content={String(i + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}

// ─────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────

export default function ServicePage({
  metaTitle,
  metaDescription,
  canonical,
  serviceName,
  pageH1,
  serviceTagline,
  directAnswer,
  heroImage,
  whatWeDoHeading,
  whatWeDoItems,
  warningSignsHeading,
  warningSignsItems,
  whyZeusHeading,
  whyZeusPoints,
  contentBlocks,
  relatedEntities,
  faqs,
  breadcrumbs,
}: ServicePageProps) {
  return (
    <>
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        canonical={canonical}
        pageType="service"
        serviceName={serviceName}
        serviceDescription={directAnswer}
        faqs={faqs}
        breadcrumbs={breadcrumbs}
      />

      <main id="main-content">

        {/* ── HERO */}
        <section
          className="relative bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
          aria-label={`${serviceName} hero`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${heroImage.src})` }}
            role="presentation"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy" aria-hidden="true" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                Same-Day Service · Kirkland & Eastside WA
              </p>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-playfair leading-tight mb-5">
                {pageH1 ?? serviceName}
              </h1>

              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                {serviceTagline}
              </p>

              {/* ⭐ FEATURED SNIPPET BLOCK */}
              <div
                className="bg-white/10 border border-white/20 rounded-2xl px-6 py-5 mb-8 backdrop-blur-sm"
                role="note"
                aria-label="Quick answer"
              >
                <p className="text-gold text-xs font-bold uppercase tracking-wide mb-2">
                  Quick Answer
                </p>
                <p className="text-white leading-relaxed text-base">
                  {directAnswer}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+14255550199"
                  className="bg-gold hover:bg-gold-dark text-navy font-bold px-7 py-4 rounded-xl text-lg transition-colors shadow-lg"
                  aria-label={`Call Zeus Garage Doors for ${serviceName}`}
                >
                  📞 Call for Same-Day Service
                </a>
                <Link
                  to="/contact#estimate"
                  className="border-2 border-gold text-gold hover:bg-gold hover:text-navy font-bold px-7 py-4 rounded-xl text-lg transition-all"
                >
                  Get Free Estimate
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── TRUST SIGNALS BAR */}
        <div className="bg-gold py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-navy text-sm font-medium">
              <span>⚡ Same-Day Available</span>
              <span>🔧 Licensed Technicians</span>
              <span>💰 Upfront Pricing</span>
              <span>📍 Local Kirkland Business</span>
              <span>🛡️ Fully Insured</span>
            </div>
          </div>
        </div>

        {/* ── WHAT WE DO + WARNING SIGNS */}
        <section
          className="py-16 lg:py-24 bg-offwhite"
          aria-labelledby="service-details-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

              <FadeIn>
                <h2
                  id="service-details-heading"
                  className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-6"
                >
                  {whatWeDoHeading ?? `What's Included in Our ${serviceName}`}
                </h2>
                <ul className="space-y-3" role="list">
                  {whatWeDoItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-forest flex items-center justify-center" aria-hidden="true">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-charcoal leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <p className="text-slate-500 text-xs font-medium uppercase tracking-wide mb-3">
                    Related Components & Standards
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {relatedEntities.map((entity) => (
                      <span
                        key={entity}
                        className="bg-white border border-slate-200 text-slate-500 text-xs px-3 py-1 rounded-full"
                      >
                        {entity}
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-400 text-xs">
                    Industry standards set by{" "}
                    <a
                      href="https://www.dasma.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 underline hover:text-forest transition-colors"
                    >
                      DASMA
                    </a>
                    {" "}(Door & Access Systems Manufacturers Association). Zeus technicians are licensed with{" "}
                    <a
                      href="https://lni.wa.gov/licensing-permits/contractors/check-a-contractors-license"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 underline hover:text-forest transition-colors"
                    >
                      Washington State L&I
                    </a>.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-navy font-playfair mb-2">
                    {warningSignsHeading ?? "Signs You Need This Service"}
                  </h2>
                  <p className="text-slate-500 text-sm mb-6">
                    If you're experiencing any of these in Seattle, Kirkland, Bellevue, or the Eastside area — call us today.
                  </p>
                  <ul className="space-y-3" role="list">
                    {warningSignsItems.map((sign, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-0.5 shrink-0 text-red-500 text-lg" aria-hidden="true">⚠</span>
                        <span className="text-charcoal leading-relaxed">{sign}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 bg-offwhite rounded-xl p-5">
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-1">
                      Pricing
                    </p>
                    <p className="text-lg font-bold text-navy font-playfair">
                      Custom On-Site Quotes
                    </p>
                    <p className="text-slate-500 text-xs mt-1">
                      Exact quote provided after free in-person assessment
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── WHY ZEUS */}
        <section
          className="py-16 lg:py-20 bg-white"
          aria-labelledby="why-zeus-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-12">
              <h2
                id="why-zeus-heading"
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair"
              >
                {whyZeusHeading ?? "Why Kirkland Homeowners Choose Zeus"}
              </h2>
              <p className="text-charcoal/60 mt-4 text-lg max-w-xl mx-auto">
                Local owner. Same-day service. We come to you, explain everything clearly, and stand behind our price.
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyZeusPoints.map((point, i) => (
                <FadeIn key={i} delay={i * 0.07}>
                  <div className="bg-offwhite rounded-2xl p-7 h-full hover:shadow-lg transition-shadow">
                    <span className="text-3xl mb-4 block" aria-hidden="true">
                      {point.icon}
                    </span>
                    <h3 className="text-navy font-bold text-lg mb-2 font-playfair">
                      {point.heading}
                    </h3>
                    <p className="text-charcoal/70 leading-relaxed">
                      {point.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── ADDITIONAL CONTENT BLOCKS (word count depth + topical authority) */}
        {contentBlocks && contentBlocks.length > 0 && (
          <section className="py-16 lg:py-20 bg-offwhite" aria-label="Additional service information">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              {contentBlocks.map((block, i) => (
                <FadeIn key={i}>
                  <h2 className="text-2xl lg:text-3xl font-bold text-navy font-playfair mb-4">
                    {block.heading}
                  </h2>
                  <p className="text-charcoal leading-relaxed text-base lg:text-lg whitespace-pre-line">
                    {block.body}
                  </p>
                </FadeIn>
              ))}
            </div>
          </section>
        )}

        {/* ── CITIES WE SERVE */}
        <section
          className="py-12 bg-navy"
          aria-labelledby="cities-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="cities-heading"
              className="text-white font-bold text-xl font-playfair mb-6 text-center"
            >
              {serviceName} — Serving the Entire Eastside
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {CITIES.map((city) => (
                <Link
                  key={city.href}
                  to={city.href}
                  className="bg-white/10 hover:bg-gold hover:text-navy border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all"
                >
                  {serviceName} — {city.name}, WA
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ */}
        <FAQAccordion
          items={faqs}
          title={`${serviceName} — FAQ`}
          subtitle={`Common questions from Kirkland and Eastside WA homeowners`}
          injectSchema={false}
        />

        {/* ── FINAL CTA */}
        <section
          className="bg-gold py-16 lg:py-20"
          aria-labelledby="service-cta-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h2
                id="service-cta-heading"
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-4"
              >
                Need {serviceName} Today?
              </h2>
              <p className="text-navy text-lg mb-8">
                Searching for garage door repair near me? Zeus Garage Doors serves Seattle, Kirkland, Bellevue, Redmond, Bothell, Woodinville, Kenmore, Lynnwood, and Mercer Island. Same-day service available — we come to you with flat-rate pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+14255550199"
                  className="bg-navy text-white hover:bg-navy/90 font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
                  aria-label={`Call Zeus Garage Doors for ${serviceName}`}
                >
                  📞 425-555-0199
                </a>
                <Link
                  to="/contact#estimate"
                  className="border-2 border-navy text-navy hover:bg-navy/10 font-bold px-8 py-4 rounded-xl text-lg transition-colors"
                >
                  Request Estimate
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
    </>
  );
}
