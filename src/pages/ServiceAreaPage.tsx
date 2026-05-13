/**
 * pages/ServiceAreaPage.tsx — Zeus Garage Doors
 * Route: /service-area
 * Shows all 9 service cities with cards, coverage info, and emergency dispatch details.
 */

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const CITIES = [
  {
    name: "Kirkland, WA",
    slug: "kirkland-wa",
    description: "Our home base — fastest response times, same-day availability for most calls.",
    badge: "HOME BASE",
  },
  {
    name: "Bellevue, WA",
    slug: "bellevue-wa",
    description: "Full service coverage across Bellevue, including Eastgate, Newport Hills, and Crossroads neighborhoods.",
  },
  {
    name: "Seattle, WA",
    slug: "seattle-wa",
    description: "Serving North Seattle, Capitol Hill, Ballard, and other neighborhoods — cross-lake service available.",
  },
  {
    name: "Redmond, WA",
    slug: "redmond-wa",
    description: "Redmond's tech corridor and surrounding residential areas — quick turnaround for busy homeowners.",
  },
  {
    name: "Mercer Island, WA",
    slug: "mercer-island-wa",
    description: "Island-wide garage door service including spring, opener, and cable repair for Mercer Island homes.",
  },
  {
    name: "Lynnwood, WA",
    slug: "lynnwood-wa",
    description: "South Snohomish County coverage — Lynnwood and adjacent communities served by our north route.",
  },
  {
    name: "Bothell, WA",
    slug: "bothell-wa",
    description: "Canyon Park, Kenmore border, and greater Bothell — full service for all garage door needs.",
  },
  {
    name: "Woodinville, WA",
    slug: "woodinville-wa",
    description: "Wine country and rural-residential properties around Woodinville — we handle oversized and custom doors.",
  },
  {
    name: "Kenmore, WA",
    slug: "kenmore-wa",
    description: "Lake Washington shoreline communities and Kenmore neighborhoods — fast local dispatch.",
  },
];

const FAQS = [
  {
    question: "Do you charge extra for locations outside Kirkland?",
    answer:
      "No travel surcharges for any of our 9 service cities. Flat-rate pricing is assessed on-site after we inspect your door.",
  },
  {
    question: "How quickly can you arrive in Bellevue or Seattle?",
    answer:
      "Most Eastside cities see arrival within 1–2 hours for same-day calls. Seattle can vary depending on bridge traffic — we'll give you a realistic ETA when you call.",
  },
  {
    question: "Is emergency repair available in all service cities?",
    answer:
      "Yes — emergency dispatch is available Sunday through Thursday nights in all 9 service cities. We do not offer Friday night or Saturday night emergency calls.",
  },
  {
    question: "Do you serve areas beyond these 9 cities?",
    answer:
      "These 9 cities are our primary service area. For locations just outside this list, call us at 425-448-6443 and we'll let you know if we can reach you.",
  },
];

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────

export default function ServiceAreaPage() {
  return (
    <>
      <SEOHead
        title="Garage Door Repair Service Area | Zeus Garage Doors — Kirkland WA"
        description="Zeus Garage Doors serves Kirkland, Bellevue, Seattle, Redmond, Mercer Island, Lynnwood, Bothell, Woodinville, and Kenmore. Same-day service across the Eastside WA and South Snohomish County."
        canonical="/service-area"
        pageType="about"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Service Area", url: "/service-area" },
        ]}
      />

      <main id="main-content">

        {/* ── HERO */}
        <section className="bg-navy pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/50">
                <li className="flex items-center gap-2">
                  <Link to="/" className="hover:text-white transition-colors">Home</Link>
                </li>
                <li className="flex items-center gap-2">
                  <span aria-hidden="true">›</span>
                  <span className="text-white/90">Service Area</span>
                </li>
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl lg:text-5xl font-bold text-white font-playfair leading-tight mb-4">
                Garage Door Repair Service Area — Eastside WA &amp; South Snohomish County
              </h1>
              <p className="text-white/70 text-xl leading-relaxed">
                Zeus Garage Doors operates out of Kirkland and serves 9 cities within a 50-mile radius. Same-day availability, flat-rate pricing, no travel surcharges.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── CITY CARDS */}
        <section className="py-16 lg:py-20 bg-offwhite">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-2xl lg:text-3xl font-bold text-navy font-playfair mb-3">
                Cities We Serve
              </h2>
              <p className="text-charcoal text-lg mb-10 max-w-2xl">
                Click any city below to see local pricing, common repairs, and what our customers say in that area.
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CITIES.map((city, i) => (
                <FadeIn key={city.slug} delay={i * 0.05}>
                  <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-all flex flex-col h-full">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-navy font-bold text-lg font-playfair leading-snug">
                        {city.name}
                      </h3>
                      {city.badge && (
                        <span className="bg-gold/20 text-gold text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide whitespace-nowrap ml-2">
                          {city.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-charcoal text-sm leading-relaxed flex-1 mb-5">
                      {city.description}
                    </p>
                    <Link
                      to={`/locations/${city.slug}`}
                      className="inline-flex items-center justify-center bg-navy text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-navy/90 transition-colors"
                    >
                      View {city.name.split(",")[0]} Page →
                    </Link>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── COVERAGE SECTION */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-2xl lg:text-3xl font-bold text-navy font-playfair mb-6">
                Our Coverage Area
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <FadeIn delay={0.05}>
                <div className="space-y-4 text-charcoal leading-relaxed">
                  <p>
                    Zeus Garage Doors operates within a <strong className="text-navy">50-mile radius of our Kirkland home base</strong>. This covers all of the Eastside — Bellevue, Redmond, Mercer Island, Woodinville, Bothell, and Kenmore — plus South Snohomish County communities like Lynnwood, and extends west across Lake Washington to Seattle.
                  </p>
                  <p>
                    Every city on our service list receives the same flat-rate pricing structure. We never add hidden travel fees because we consider all of these communities our local market.
                  </p>
                  <p>
                    If you're in a city not on this list, call us at{" "}
                    <a href="tel:+14254486443" className="text-forest font-semibold hover:underline">
                      425-448-6443
                    </a>{" "}
                    — if you're within range, we'll make it work.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="bg-offwhite rounded-2xl p-6 border border-slate-200">
                  <h3 className="text-navy font-bold font-playfair text-xl mb-4">Coverage at a Glance</h3>
                  <ul className="space-y-2.5">
                    {[
                      { label: "Service Radius", value: "50 miles from Kirkland" },
                      { label: "Counties Covered", value: "King County, South Snohomish County" },
                      { label: "Cities Served", value: "9 primary service cities" },
                      { label: "Same-Day Availability", value: "Most calls within 1–2 hrs" },
                      { label: "Travel Surcharge", value: "None — flat-rate pricing" },
                    ].map((item) => (
                      <li key={item.label} className="flex items-start gap-3">
                        <span className="text-gold font-bold text-lg leading-tight">✓</span>
                        <span className="text-charcoal text-sm">
                          <strong className="text-navy">{item.label}:</strong> {item.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── EMERGENCY DISPATCH CALLOUT */}
        <section className="py-16 bg-navy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <div className="bg-white/10 rounded-2xl p-8 lg:p-10 border border-white/20">
                <span className="bg-gold/20 text-gold text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Emergency Dispatch
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-white font-playfair mt-4 mb-4">
                  Night Emergency Service — Sunday Through Thursday
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-2">
                  Garage door emergencies don't wait for business hours. Zeus offers night emergency dispatch for all 9 service cities — <strong className="text-white">Sunday, Monday, Tuesday, Wednesday, and Thursday evenings.</strong>
                </p>
                <p className="text-white/60 text-sm mb-8">
                  Note: Emergency night service is not available Friday or Saturday evenings. For non-urgent weekend needs, we'll schedule you first thing the following business day.
                </p>
                <a
                  href="tel:+14254486443"
                  className="inline-flex items-center justify-center bg-gold text-navy font-bold px-8 py-4 rounded-xl text-lg hover:bg-gold/90 transition-colors"
                >
                  Call Now: 425-448-6443
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── FAQ */}
        <section className="py-16 bg-offwhite">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-2xl lg:text-3xl font-bold text-navy font-playfair mb-8">
                Frequently Asked Questions
              </h2>
            </FadeIn>
            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <details className="bg-white rounded-2xl border border-slate-200 group">
                    <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none font-semibold text-navy text-base">
                      {faq.question}
                      <span className="text-gold font-bold text-xl ml-4 group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <div className="px-6 pb-5 text-charcoal leading-relaxed text-sm">
                      {faq.answer}
                    </div>
                  </details>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h2 className="text-2xl lg:text-3xl font-bold text-navy font-playfair mb-4">
                Ready to Book a Repair?
              </h2>
              <p className="text-charcoal text-lg mb-8">
                Call us or request a quote online. Same-day service available across all 9 cities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+14254486443"
                  className="inline-flex items-center justify-center bg-navy text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-navy/90 transition-colors"
                >
                  Call 425-448-6443
                </a>
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center border-2 border-navy text-navy font-bold px-8 py-4 rounded-xl text-lg hover:bg-navy hover:text-white transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
    </>
  );
}
