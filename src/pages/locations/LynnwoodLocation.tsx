/**
 * pages/locations/LynnwoodLocation.tsx — Zeus Garage Doors
 * Target: "Garage Door Repair Lynnwood WA" — 1,400+ words
 * Schema: LocalBusiness + Service + FAQPage + BreadcrumbList via SEOHead
 * Strategy: I-5/I-405 Hub · Commercial Accessibility · Quick Response for Busy Commuters
 */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Shield, Wrench, MapPin, AlertTriangle, CheckCircle, Zap, Home, Navigation } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import FAQAccordion from "@/components/FAQAccordion";
import QuoteForm from "@/components/QuoteForm";

// ─── Content ──────────────────────────────────────────────────────────────────

const DIRECT_ANSWER =
  "Zeus Garage Doors provides same-day garage door repair in Lynnwood, WA — the I-5/I-405 hub of South Snohomish County. Spring replacement, opener repair, cable service, and new door installation for Alderwood, Meadowdale, Martha Lake, and all Lynnwood neighborhoods. Fast response for busy commuters. Call 425-555-0199.";

const LYNNWOOD_FAQS = [
  {
    question: "How does Lynnwood's I-5/I-405 position help with your response times?",
    answer:
      "Lynnwood sits at one of the best-connected intersections in Snohomish County — where I-5 and I-405 meet, with SR 99 and SR 104 adding further access. This means our Kirkland-based technicians can reach nearly any Lynnwood neighborhood via multiple routes, which is particularly valuable during peak commute hours when one corridor is congested. The Alderwood Mall area, Meadowdale, and Perrinville are all within a typical 25–40 minute dispatch window from Kirkland. We factor in current traffic when we give you an ETA — we don't promise optimistic travel times we can't deliver.",
  },
  {
    question: "My Lynnwood home was built in the 1970s — can you convert from extension springs to torsion?",
    answer:
      "Yes — this is one of our most common Lynnwood service requests. Many homes in Lynnwood's established neighborhoods like Meadowdale and Cedar Valley were built with horizontal extension spring systems above the door tracks. These systems are functional but less safe than modern torsion setups: extension spring cables can snap under tension if a spring breaks, and the hardware is harder to adjust and balance accurately. Converting to a torsion spring system improves safety, allows precise weight calibration, and is more durable in Snohomish County's damp climate. We do full extension-to-torsion conversions same-day as a combined job with opener replacement or as a standalone service.",
  },
  {
    question: "Do you serve Meadowdale and Picnic Point, or just the central Alderwood area?",
    answer:
      "We cover all of Lynnwood and its surrounding neighborhoods: Alderwood Manor, Meadowdale, Martha Lake, Perrinville, Cedar Valley, Picnic Point, and the areas along I-5 between Lynnwood and Mountlake Terrace. Meadowdale and Picnic Point, while closer to the Puget Sound shoreline, are both within our primary same-day service zone. Picnic Point's proximity to Puget Sound means higher marine air exposure — we use stainless-core cables and heavily galvanized springs as standard for waterfront-adjacent properties in that area.",
  },
  {
    question: "What's causing my garage door to stick or bind during Lynnwood's rainy season?",
    answer:
      "In Lynnwood's wet months — roughly October through April — three things commonly cause door binding: (1) neoprene bottom seals absorb moisture and swell, compressing against the garage floor and creating drag; (2) wooden panel sections absorb humidity and expand, reducing clearance in the track; (3) torsion spring tension, calibrated for the door's dry-weather weight, is effectively 'light' relative to the swollen, heavier door and may no longer hold it at mid-point balance. All three are diagnosable and fixable in a single visit. If your door runs fine in summer but slows or reverses in fall, call for a seasonal inspection before the problem progresses.",
  },
  {
    question: "Can you upgrade to a quieter opener for my Lynnwood home where the garage is under a bedroom?",
    answer:
      "Absolutely — this is a very common request for attached garages in Lynnwood's townhomes and two-story homes. Chain-drive openers transmit vibration directly through the ceiling into the room above. We offer two quiet alternatives: belt-drive openers, which use a rubber belt instead of chain and reduce operational noise by 50–70%; and jackshaft wall-mount openers like the LiftMaster 8500W, which mount beside the door on the wall and eliminate overhead rail and trolley vibration entirely. Both options include smart myQ connectivity. Belt-drive is the more economical choice; jackshaft is the best option for very low noise requirements or high-ceiling garages.",
  },
  {
    question: "Do you work on commercial properties and mixed-use buildings along the I-5 corridor in Lynnwood?",
    answer:
      "Our primary focus is residential garage doors, but we do service small commercial overhead doors in the Lynnwood area — particularly for mixed-use buildings, small offices with attached bays, and light commercial properties. If you have a commercial overhead door that needs spring, cable, or opener service, call us at 425-555-0199 and describe the application. We'll let you know upfront if it's within our scope or if we need to refer you to a commercial specialist.",
  },
];

const SERVICES = [
  {
    name: "Spring Replacement",
    href: "/services/spring-replacement",
    icon: Wrench,
    desc: "Torsion and extension spring replacement for all Lynnwood homes. High-cycle oil-tempered springs for Snohomish County's wet climate. Extension-to-torsion conversion available same-day.",
  },
  {
    name: "Opener Repair & Upgrade",
    href: "/services/opener-repair",
    icon: Zap,
    desc: "Chain-drive to belt-drive and jackshaft upgrades for quieter operation. LiftMaster myQ smart openers with full Wi-Fi commissioning — ideal for homes with bedrooms above the garage.",
  },
  {
    name: "Off-Track Door Repair",
    href: "/services/off-track-repair",
    icon: AlertTriangle,
    desc: "Emergency same-day realignment for doors that have jumped rollers. Lynnwood's mix of older and newer track systems means we stock parts for both extension-spring and torsion configurations.",
  },
  {
    name: "Cable Replacement",
    href: "/services/cable-replacement",
    icon: Shield,
    desc: "Galvanized and stainless-core cable replacement for Lynnwood's rainy-season corrosion exposure. Picnic Point and Meadowdale coastal properties receive marine-grade hardware as standard.",
  },
  {
    name: "Panel Replacement",
    href: "/services/panel-replacement",
    icon: Home,
    desc: "Section replacement for dented or damaged panels. Available for most major residential door brands across Lynnwood's range of housing styles — from mid-century to current construction.",
  },
  {
    name: "New Door Installation",
    href: "/services/new-installation",
    icon: Navigation,
    desc: "Complete door and opener packages for Lynnwood homes. Insulated steel, carriage-style, and contemporary options — all available same-day or next-day with full installation and commissioning.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Alderwood Manor",
    blurb: "Central Lynnwood near the Alderwood Mall corridor. Fast response times and full parts inventory for busy Alderwood households.",
  },
  {
    name: "Meadowdale",
    blurb: "Established mid-century residential neighborhood. Extension spring conversions, opener upgrades, and full system replacements for older Meadowdale door systems.",
  },
  {
    name: "Martha Lake",
    blurb: "Larger residential lots with multi-car garages. We carry heavy-duty hardware for oversized doors common in Martha Lake's suburban properties.",
  },
  {
    name: "Perrinville",
    blurb: "Tightly-spaced neighborhoods where quiet belt-drive or jackshaft openers are the preferred upgrade. Same-day service for all Perrinville residential calls.",
  },
  {
    name: "Cedar Valley",
    blurb: "Established residential area with older door systems. Safety inspections, hardware upgrades, and opener replacements for Cedar Valley's mid-century housing stock.",
  },
  {
    name: "Picnic Point",
    blurb: "Coastal proximity increases marine air exposure. Premium rust-resistant hardware is standard — not optional — for Picnic Point service calls.",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

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

const BREADCRUMBS = [
  { name: "Home", url: "/" },
  { name: "Service Areas", url: "/locations" },
  { name: "Lynnwood, WA", url: "/locations/lynnwood-wa" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LynnwoodLocation() {
  return (
    <>
      <SEOHead
        title="Garage Door Repair Lynnwood WA | I-5/I-405 Hub | Zeus Garage Doors"
        description="Same-day garage door repair in Lynnwood, WA — fast response via I-5 & I-405. Spring replacement, opener upgrades, cable service for Alderwood, Meadowdale & Martha Lake. Serving all of South Snohomish County. Call 425-555-0199."
        canonical="/locations/lynnwood-wa"
        pageType="location"
        cityName="Lynnwood"
        serviceName="Garage Door Repair Lynnwood WA"
        serviceDescription={DIRECT_ANSWER}
        faqs={LYNNWOOD_FAQS}
        breadcrumbs={BREADCRUMBS}
      />

      <main id="main-content">
        {/* ── HERO ────────────────────────────────────────────────────────── */}
        <section
          className="relative bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28"
          aria-label="Garage door repair in Lynnwood hero"
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy/90"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(43 90% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(43 90% 50%) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/50">
                {BREADCRUMBS.map((crumb, i) => (
                  <li key={crumb.url} className="flex items-center gap-2">
                    {i > 0 && <span aria-hidden="true">›</span>}
                    {i === BREADCRUMBS.length - 1 ? (
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

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  I-5 / I-405 Hub · South Snohomish County · Fast Commuter Response
                </p>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-playfair leading-tight mb-5">
                  Garage Door Repair in Lynnwood, WA
                </h1>

                <div
                  className="bg-white/10 border border-white/20 rounded-2xl px-6 py-5 mb-7 backdrop-blur-sm"
                  role="note"
                  aria-label="Quick answer"
                >
                  <p className="text-gold text-xs font-bold uppercase tracking-wide mb-2">
                    Quick Answer
                  </p>
                  <p className="text-white leading-relaxed text-base">
                    {DIRECT_ANSWER}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/40 rounded-full px-4 py-2 mb-7">
                  <MapPin size={14} className="text-gold flex-shrink-0" />
                  <span className="text-gold text-xs font-bold uppercase tracking-wide">
                    Kirkland-Based · Multi-Route Access via I-5 & I-405
                  </span>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:+14255550199"
                    className="bg-forest hover:bg-forest-dark text-white font-bold px-7 py-4 rounded-xl text-lg transition-colors shadow-lg"
                    aria-label="Call Zeus Garage Doors in Lynnwood"
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

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-white rounded-2xl shadow-2xl p-7"
              >
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-1">
                  Free Estimate — No Obligation
                </p>
                <h2 className="font-playfair text-xl font-bold text-navy mb-1">
                  Get Your Lynnwood Quote
                </h2>
                <p className="text-charcoal/60 text-sm mb-5">
                  We'll call you back promptly during business hours (Sun–Fri).
                </p>
                <QuoteForm />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── INTRO ───────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-offwhite" aria-labelledby="intro-lynnwood">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 items-start">

              <FadeIn className="lg:col-span-2 space-y-5">
                <h2
                  id="intro-lynnwood"
                  className="text-3xl lg:text-4xl font-bold text-navy font-playfair"
                >
                  Lynnwood's Crossroads Location Is Our Dispatch Advantage
                </h2>

                <p className="text-charcoal leading-relaxed text-lg">
                  Lynnwood sits at the convergence of <strong>I-5 and I-405</strong> — the two most significant highway corridors in Snohomish County. For a garage door company based in Kirkland, this is a meaningful advantage: our technicians can reach virtually any Lynnwood neighborhood via multiple routes. When I-5 is congested northbound, I-405 to SR 525 provides an alternative. When the interchange itself is backed up, SR 99 gives us a surface-street path. We know these routes and use them to minimize your wait.
                </p>

                <p className="text-charcoal leading-relaxed">
                  Lynnwood is a working city. Its residents are commuters, families, and professionals who depend on their garage doors every morning and every evening. When a torsion spring snaps at 7 AM in <strong>Alderwood Manor</strong>, or a door goes off track at 6 PM in <strong>Meadowdale</strong>, it's not a minor inconvenience — it disrupts the day for everyone in the household. Zeus is built to respond to that reality: same-day service is our standard, not a premium, and our 85% one-visit fix rate means the issue is resolved on the first call, not scheduled for a return visit with parts.
                </p>

                <p className="text-charcoal leading-relaxed">
                  We serve all of Lynnwood and surrounding South Snohomish County: <a href="/services/spring-replacement" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">spring replacement</a>, <a href="/services/opener-repair" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">opener repair and smart upgrades</a>, <a href="/services/cable-replacement" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">cable replacement</a>, <a href="/services/off-track-repair" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">off-track repair</a>, panel replacement, weatherstrip service, and new door installation. All of it available same-day. Pricing confirmed on-site — never over the phone.
                </p>

                <p className="text-charcoal leading-relaxed">
                  Lynnwood's housing stock spans several decades — from mid-century homes in Meadowdale and Cedar Valley to newer townhomes near the Alderwood Mall corridor and current construction along the light rail extension. We are equipped for all of it. Older Lynnwood homes often have extension spring systems that are due for conversion to torsion; newer builds sometimes come with compact low-headroom configurations that require specific hardware. Our trucks are stocked for both scenarios.
                </p>

                {/* Local Environment Box */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 mt-4">
                  <h3 className="text-navy font-bold text-xl font-playfair mb-3">
                    Snohomish County Weather and Your Garage Door
                  </h3>
                  <div className="space-y-3 text-charcoal/80 leading-relaxed">
                    <p>
                      Lynnwood's climate is defined by long, wet winters and mild summers. The consistent rainfall — Lynnwood averages over 40 inches per year — creates a damp environment that affects garage door hardware in measurable ways. Standard galvanized springs and cables degrade faster here than manufacturer ratings, which are often based on drier test environments.
                    </p>
                    <p>
                      Bottom seals are particularly vulnerable: neoprene compresses and flattens over time, losing its ability to seal against the floor. Once a bottom seal fails, water enters the garage during every rain event, and condensation builds up inside, accelerating corrosion on all metal hardware. Annual bottom seal inspection — before October — is the most cost-effective maintenance a Lynnwood homeowner can do.
                    </p>
                    <p>
                      For Lynnwood homes near the Puget Sound shoreline (Picnic Point, parts of Meadowdale), marine air adds an additional corrosion vector. We use <strong>stainless-core lift cables</strong> and <strong>heavily galvanized torsion springs</strong> as standard for coastal-proximity properties — not as an upgrade.
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Sidebar */}
              <FadeIn delay={0.1} className="space-y-5">
                <div className="bg-navy rounded-2xl p-6 text-white">
                  <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                    Zeus Garage Doors
                  </p>
                  <h3 className="font-bold text-lg font-playfair mb-1">
                    Serving Lynnwood & South Snohomish
                  </h3>
                  <p className="text-white/60 text-sm mb-4">
                    Same-day service · Sun–Fri
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

                <div className="bg-white rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-navy font-bold text-base mb-4">
                    Why Lynnwood Homeowners Trust Zeus
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Multi-route I-5/I-405 access for fast dispatch",
                      "Serving Alderwood, Meadowdale & Martha Lake",
                      "Extension spring → torsion conversions same-day",
                      "Quiet belt-drive & jackshaft opener upgrades",
                      "Licensed Washington state contractor",
                      "Full liability insurance on every job",
                      "85%+ of calls resolved in a single visit",
                      "100% Customer Satisfaction — guaranteed",
                      "No upselling, no manufactured urgency",
                    ].map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-charcoal">
                        <span className="text-forest mt-0.5" aria-hidden="true">✓</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gold/10 border border-gold/30 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={16} className="text-gold flex-shrink-0" />
                    <p className="text-navy font-bold text-sm">Business Hours</p>
                  </div>
                  <ul className="text-charcoal/70 text-sm space-y-1">
                    <li>Sunday – Thursday: 6:00 AM – 10:00 PM</li>
                    <li>Friday: 6:00 AM – 6:00 PM</li>
                    <li className="text-charcoal/50">Saturday: Closed</li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── SERVICES ────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-white" aria-labelledby="services-lynnwood">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-12">
              <h2
                id="services-lynnwood"
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair"
              >
                Garage Door Services in Lynnwood, WA
              </h2>
              <p className="text-charcoal/60 mt-4 text-lg max-w-xl mx-auto">
                Springs, quiet opener upgrades, cable service, and full installations — all available same-day across all Lynnwood neighborhoods.
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service, i) => (
                <FadeIn key={service.href + service.name} delay={i * 0.06}>
                  <Link
                    to={service.href}
                    className="group block bg-offwhite rounded-2xl p-7 border border-transparent hover:border-forest hover:shadow-lg transition-all h-full"
                    aria-label={`${service.name} in Lynnwood, WA`}
                  >
                    <service.icon
                      size={22}
                      className="text-forest mb-3"
                      aria-hidden="true"
                    />
                    <h3 className="text-navy font-bold text-lg font-playfair mb-2 group-hover:text-forest transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-charcoal/70 text-sm leading-relaxed mb-4">
                      {service.desc}
                    </p>
                    <span className="text-forest text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Learn More →
                    </span>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMMUTER POSITIONING ────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-offwhite" aria-labelledby="commuter-lynnwood">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <FadeIn>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  Built for Lynnwood's Pace
                </p>
                <h2
                  id="commuter-lynnwood"
                  className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-5"
                >
                  Same-Day Service Built for Lynnwood's Commuter Lifestyle
                </h2>
                <div className="space-y-4 text-charcoal leading-relaxed">
                  <p>
                    Lynnwood homeowners run on tight schedules. The I-5 corridor means many residents commute to Seattle, Bellevue, or Everett daily — and a garage door failure in the morning is a genuine disruption to the entire day. Zeus is available Sunday through Thursday until 10:00 PM, and Friday until 6:00 PM. If your door fails in the evening after a long commute, we're still available to address it.
                  </p>
                  <p>
                    Our 85% one-visit fix rate isn't just a marketing number — it's the direct result of how we stock our trucks. Before a Lynnwood dispatch, we review what's most likely needed based on the described problem and the address profile, and ensure our technician has the right springs, cables, opener parts, and hardware on the vehicle. Calling us back for a second visit because we didn't have the parts is a failure we take seriously.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Available 6 AM – 10 PM Sunday through Thursday",
                      "Available 6 AM – 6 PM Friday",
                      "85%+ one-visit fix rate — stocked for your specific call",
                      "Multiple I-5 and I-405 access routes for fast dispatch",
                      "Quiet belt-drive and jackshaft upgrades for noise-sensitive homes",
                      "Extension spring conversions for older Lynnwood housing stock",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle
                          size={18}
                          className="text-forest flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="bg-navy rounded-2xl p-8 text-white">
                  <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                    Lynnwood Coverage
                  </p>
                  <h3 className="font-playfair font-bold text-2xl mb-5">
                    Kirkland → Lynnwood<br />
                    <span className="text-gold">via I-405 N or I-5 N</span>
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    Alderwood, Meadowdale, Martha Lake, Perrinville, Cedar Valley, and Picnic Point — all within our same-day Lynnwood dispatch zone. We know the routes and we plan around traffic.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Response", value: "Same Day" },
                      { label: "One-Visit Fix Rate", value: "85%+" },
                      { label: "Customer Satisfaction", value: "100%" },
                      { label: "Days Available", value: "Sun–Fri" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-white/10 rounded-xl p-4 text-center"
                      >
                        <p className="text-gold font-bold text-xl font-playfair">
                          {stat.value}
                        </p>
                        <p className="text-white/60 text-xs mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* ── NEIGHBORHOODS ───────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-white" aria-labelledby="neighborhoods-lynnwood">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="mb-10">
              <h2
                id="neighborhoods-lynnwood"
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-4"
              >
                Garage Door Repair in Every Lynnwood Neighborhood
              </h2>
              <p className="text-charcoal/70 text-lg max-w-2xl">
                Alderwood to Picnic Point — same licensed technician, same same-day standard, same fully stocked truck.
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {NEIGHBORHOODS.map((hood, i) => (
                <FadeIn key={hood.name} delay={i * 0.05}>
                  <div
                    className="bg-offwhite rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow"
                    itemScope
                    itemType="https://schema.org/Place"
                  >
                    <h3
                      itemProp="name"
                      className="text-navy font-bold text-base mb-2"
                    >
                      Garage Door Repair — {hood.name}, Lynnwood
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

        {/* ── ABOUT / TRUST ───────────────────────────────────────────────── */}
        <section className="py-12 bg-navy" aria-label="About Zeus serving Lynnwood">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  Who We Are
                </p>
                <h2 className="text-2xl lg:text-3xl font-bold text-white font-playfair mb-4">
                  Kirkland-Based. Lynnwood-Ready.
                </h2>
                <p className="text-white/70 leading-relaxed text-base mb-4">
                  Zeus Garage Doors is a locally owned business based in Kirkland, WA. Lynnwood is one of our northernmost service areas, and we've built our dispatch model to serve it well: multi-route highway access, a fully stocked truck, and technicians who know Snohomish County housing stock. We are not a franchise, and there is no national call center routing your job.
                </p>
                <p className="text-white/70 leading-relaxed text-base">
                  Lynnwood deserves a garage door company that takes the commuter schedule as seriously as the homeowner does. Same-day, every call. Honest pricing, every job. That's the Zeus standard — in Lynnwood and everywhere we serve.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <FAQAccordion
          items={LYNNWOOD_FAQS}
          title="Garage Door Repair in Lynnwood — Frequently Asked Questions"
          subtitle="Straight answers for Lynnwood homeowners about response times, hardware for wet climates, and quiet opener upgrades."
          injectSchema={false}
        />

        {/* ── BOTTOM QUOTE FORM ───────────────────────────────────────────── */}
        <section
          className="py-16 lg:py-20 bg-offwhite"
          aria-labelledby="bottom-quote-lynnwood"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <FadeIn>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  Ready to Get Started?
                </p>
                <h2
                  id="bottom-quote-lynnwood"
                  className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-4"
                >
                  Request Your Free Lynnwood Estimate
                </h2>
                <p className="text-charcoal/70 text-lg mb-6">
                  Fill out the form and our team will call you back promptly during business hours. For urgent service, call directly at{" "}
                  <a href="tel:+14255550199" className="text-forest font-semibold hover:underline">
                    425-555-0199
                  </a>.
                </p>
                <ul className="space-y-3">
                  {[
                    "Multi-route access via I-5 & I-405 for fast response",
                    "Serving all Lynnwood neighborhoods same-day",
                    "Licensed & insured WA contractor",
                    "Flat-rate pricing — confirmed on-site",
                    "85%+ one-visit fix rate — stocked for your call",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-charcoal text-sm">
                      <CheckCircle size={16} className="text-forest flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
                  <QuoteForm />
                </div>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* ── FINAL CTA ───────────────────────────────────────────────────── */}
        <section
          className="bg-forest py-16 lg:py-20"
          aria-labelledby="cta-lynnwood"
        >
          <div className="max-w-3xl mx-auto px-4 text-center">
            <FadeIn>
              <h2
                id="cta-lynnwood"
                className="text-3xl lg:text-4xl font-bold text-white font-playfair mb-4"
              >
                Need Garage Door Repair in Lynnwood?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Zeus Garage Doors reaches Lynnwood fast via I-5 and I-405 — serving Alderwood, Meadowdale, Martha Lake, and every Lynnwood neighborhood. Same-day standard, honest pricing, professional results.
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
