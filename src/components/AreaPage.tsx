/**
 * AreaPage.tsx — Zeus Garage Doors
 * Template for all /locations/* pages
 * - 400+ unique words per page (content blocks ensure this)
 * - PNW weather signals (humidity, rust, cold, rain)
 * - Neighborhood anchor links
 * - No duplicate content between city pages
 * - LocalBusiness + Service + FAQPage schema via SEOHead
 */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead, { FAQItem } from "./SEOHead";
import FAQAccordion from "./FAQAccordion";

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────

export interface Neighborhood {
  name: string;
  slug: string;
  /** 1-2 sentence description for local relevance signal */
  blurb: string;
}

export interface AreaPageProps {
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  cityName: string;
  stateName?: string;
  countyName?: string;
  /** CRITICAL: 40-60 word direct answer — featured snippet target */
  directAnswer: string;
  introContent: string;
  localContext: string;
  neighborhoods: Neighborhood[];
  servicesOffered: {
    name: string;
    href: string;
    shortDesc: string;
  }[];
  localTrustSignals?: string[];
  faqs: FAQItem[];
  breadcrumbs: { name: string; url: string }[];
}

// ─────────────────────────────────────────────
// HELPERS
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
// COMPONENT
// ─────────────────────────────────────────────

export default function AreaPage({
  metaTitle,
  metaDescription,
  canonical,
  cityName,
  stateName = "WA",
  countyName,
  directAnswer,
  introContent,
  localContext,
  neighborhoods,
  servicesOffered,
  localTrustSignals,
  faqs,
  breadcrumbs,
}: AreaPageProps) {
  return (
    <>
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        canonical={canonical}
        pageType="location"
        cityName={cityName}
        serviceName={`Garage Door Repair ${cityName} WA`}
        serviceDescription={directAnswer}
        faqs={faqs}
        breadcrumbs={breadcrumbs}
      />

      <main id="main-content">

        {/* ── HERO */}
        <section
          className="relative bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28"
          aria-label={`Garage door repair in ${cityName} hero`}
        >
          <div className="absolute inset-0 opacity-10" aria-hidden="true"
            style={{
              backgroundImage: "url('/images/garage-door-texture-bg.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy"
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/50">
                {breadcrumbs.map((crumb, i) => (
                  <li key={crumb.url} className="flex items-center gap-2">
                    {i > 0 && <span aria-hidden="true">›</span>}
                    {i === breadcrumbs.length - 1 ? (
                      <span className="text-white/90">{crumb.name}</span>
                    ) : (
                      <Link to={crumb.url} className="hover:text-white transition-colors">
                        {crumb.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                Same-Day Service · {cityName}, {stateName}
              </p>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-playfair leading-tight mb-5">
                Garage Door Repair in {cityName}, {stateName}
              </h1>

              {/* ⭐ DIRECT ANSWER BLOCK */}
              <div
                className="bg-white/10 border border-white/20 rounded-2xl px-6 py-5 mb-7 backdrop-blur-sm max-w-2xl"
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
                  className="bg-forest hover:bg-forest-dark text-white font-bold px-7 py-4 rounded-xl text-lg transition-colors shadow-lg"
                  aria-label={`Call Zeus Garage Doors in ${cityName}`}
                >
                  📞 Call for Same-Day Service
                </a>
                <Link
                  to="/contact#estimate"
                  className="border-2 border-gold text-gold hover:bg-gold hover:text-navy font-bold px-7 py-4 rounded-xl text-lg transition-all"
                >
                  Free Estimate
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── TRUST BAR */}
        <section className="bg-white border-b border-slate-200 py-6" aria-label="Quick facts">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { value: "85%",      label: "One-Visit Fix Rate",      sub: "Fully stocked truck every call" },
                { value: "100%",     label: "Customer Satisfaction",   sub: "Guaranteed on every job" },
                { value: "Same Day", label: "Emergency Response",      sub: "Sunday – Friday" },
                { value: "Licensed", label: "& Fully Insured",         sub: "Washington State Contractor" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-navy font-playfair leading-none">
                    {stat.value}
                  </p>
                  <p className="text-xs font-semibold text-charcoal mt-1">{stat.label}</p>
                  <p className="text-xs text-charcoal/50 mt-0.5">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTRO CONTENT */}
        <section
          className="py-16 lg:py-20 bg-offwhite"
          aria-labelledby={`intro-heading-${cityName.toLowerCase()}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 items-start">

              <FadeIn className="lg:col-span-2">
                <h2
                  id={`intro-heading-${cityName.toLowerCase()}`}
                  className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-6"
                >
                  Local Garage Door Experts in {cityName}
                </h2>

                <div
                  className="prose prose-lg prose-slate max-w-none text-charcoal leading-relaxed space-y-4"
                  dangerouslySetInnerHTML={{ __html: introContent }}
                />

                <div className="mt-8 bg-white rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-navy font-bold text-xl font-playfair mb-3">
                    How {cityName}'s Climate Affects Your Garage Door
                  </h3>
                  <div
                    className="text-charcoal/80 leading-relaxed space-y-3"
                    dangerouslySetInnerHTML={{ __html: localContext }}
                  />
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="space-y-5">

                  <div className="bg-navy rounded-2xl p-6 text-white">
                    <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                      Zeus Garage Doors
                    </p>
                    <h3 className="font-bold text-lg font-playfair mb-1">
                      Serving {cityName} & Eastside WA
                    </h3>
                    <p className="text-white/60 text-sm mb-4">
                      Same-day service, Sunday–Friday
                    </p>
                    <a
                      href="tel:+14255550199"
                      className="block w-full text-center bg-forest hover:bg-forest-dark text-white font-bold py-3 rounded-xl transition-colors mb-3"
                    >
                      📞 425-555-0199
                    </a>
                    <a
                      href="sms:+14255550199"
                      className="block w-full text-center bg-gold text-navy hover:bg-gold-dark font-bold py-3 rounded-xl transition-colors"
                    >
                      💬 Text Us
                    </a>
                  </div>

                  {localTrustSignals && (
                    <div className="bg-white rounded-2xl border border-slate-200 p-6">
                      <h3 className="text-navy font-bold text-base mb-4">
                        Why {cityName} Homeowners Trust Us
                      </h3>
                      <ul className="space-y-2">
                        {localTrustSignals.map((signal, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-charcoal">
                            <span className="text-forest mt-0.5" aria-hidden="true">✓</span>
                            {signal}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── SERVICES IN THIS CITY */}
        <section
          className="py-16 lg:py-20 bg-white"
          aria-labelledby={`services-${cityName.toLowerCase()}-heading`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-12">
              <h2
                id={`services-${cityName.toLowerCase()}-heading`}
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair"
              >
                Garage Door Services in {cityName}, {stateName}
              </h2>
              <p className="text-charcoal/60 mt-4 text-lg max-w-xl mx-auto">
                From emergency same-day repair to full installations — we handle it all.
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesOffered.map((service, i) => (
                <FadeIn key={service.href} delay={i * 0.06}>
                  <Link
                    to={service.href}
                    className="group block bg-offwhite rounded-2xl p-7 border border-transparent hover:border-forest hover:shadow-lg transition-all h-full"
                    aria-label={`${service.name} in ${cityName}, WA`}
                  >
                    <h3 className="text-navy font-bold text-lg font-playfair mb-2 group-hover:text-forest transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-charcoal/70 text-sm leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>
                    <div className="flex items-center justify-end">
                      <span className="text-forest text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Learn More →
                      </span>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── NEIGHBORHOODS */}
        <section
          className="py-16 lg:py-20 bg-offwhite"
          aria-labelledby={`neighborhoods-${cityName.toLowerCase()}-heading`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="mb-10">
              <h2
                id={`neighborhoods-${cityName.toLowerCase()}-heading`}
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-4"
              >
                Garage Door Repair in Every {cityName} Neighborhood
              </h2>
              <p className="text-charcoal/70 text-lg max-w-2xl">
                We serve every neighborhood in {cityName} — from {neighborhoods[0]?.name} to {neighborhoods[neighborhoods.length - 1]?.name}. Same-day availability throughout.
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {neighborhoods.map((hood, i) => (
                <FadeIn key={hood.slug} delay={i * 0.05}>
                  <div
                    id={hood.slug}
                    className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow"
                    itemScope
                    itemType="https://schema.org/Place"
                  >
                    <h3
                      itemProp="name"
                      className="text-navy font-bold text-base mb-2"
                    >
                      Garage Door Repair — {hood.name}, {cityName}
                    </h3>
                    <p className="text-charcoal/70 text-sm leading-relaxed">
                      {hood.blurb}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT SECTION */}
        <section className="py-12 bg-navy" aria-label="About Zeus in this city">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  Who We Are
                </p>
                <h2 className="text-2xl lg:text-3xl font-bold text-white font-playfair mb-4">
                  Your Local Garage Door Company in {cityName}
                </h2>
                <p className="text-white/70 leading-relaxed text-base mb-6">
                  Zeus Garage Doors is a locally owned and operated business based in Kirkland, WA. We're not a national chain — we're your neighbors. When you call us, you speak to the owner. When we show up, we explain the problem honestly, give you a fair price, and complete the work that day.
                </p>
                <p className="text-white/70 leading-relaxed text-base">
                  We serve {cityName} homeowners throughout{countyName ? ` ${countyName} County and` : ""} the greater Eastside. Our team is licensed, insured, and committed to honest, same-day service.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── FAQ */}
        <FAQAccordion
          items={faqs}
          title={`Garage Door Repair in ${cityName} — FAQ`}
          subtitle={`Answers to the most common questions from ${cityName} homeowners`}
          injectSchema={false}
        />

        {/* ── FINAL CTA */}
        <section
          className="bg-forest py-16 lg:py-20"
          aria-labelledby={`cta-${cityName.toLowerCase()}`}
        >
          <div className="max-w-3xl mx-auto px-4 text-center">
            <FadeIn>
              <h2
                id={`cta-${cityName.toLowerCase()}`}
                className="text-3xl lg:text-4xl font-bold text-white font-playfair mb-4"
              >
                Need Garage Door Repair in {cityName}?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Zeus Garage Doors is your same-day, local choice for garage door repair, spring replacement, opener service, and more throughout {cityName}, {stateName}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+14255550199"
                  className="bg-white text-forest hover:bg-offwhite font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
                >
                  📞 425-555-0199
                </a>
                <Link
                  to="/contact#estimate"
                  className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4 rounded-xl text-lg transition-colors"
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
