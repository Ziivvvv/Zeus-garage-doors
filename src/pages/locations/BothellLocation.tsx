/**
 * pages/locations/BothellLocation.tsx — Zeus Garage Doors
 * Target: "Garage Door Repair Bothell WA" — 1,400+ words
 * Schema: LocalBusiness + Service + FAQPage + BreadcrumbList via SEOHead
 * Strategy: Bothell-Everett Hwy Corridor · Tech Workers & Families · Canyon Park Focus
 */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Shield, Wrench, MapPin, AlertTriangle, CheckCircle, Zap, Home, Wifi } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import FAQAccordion from "@/components/FAQAccordion";
import QuoteForm from "@/components/QuoteForm";

// ─── Content ──────────────────────────────────────────────────────────────────

const DIRECT_ANSWER =
  "Zeus Garage Doors provides same-day garage door repair in Bothell, WA — serving the Bothell-Everett Highway corridor, Canyon Park, Thrasher's Corner, and all neighborhoods across both the King County and Snohomish County sides of Bothell. Spring replacement, smart opener installation, cable repair, and full new door installs. Call 425-555-0199.";

const BOTHELL_FAQS = [
  {
    question: "Do you serve both the King County and Snohomish County sides of Bothell?",
    answer:
      "Yes — Bothell's unique split across two counties is something we're very familiar with. We cover the full city: the Snohomish County side with Thrasher's Corner, Canyon Park Business Park, and the neighborhoods along the Bothell-Everett Highway (SR 527); and the King County side including Downtown Bothell, the Sammamish River corridor, and the neighborhoods toward Kenmore and Lake Forest Park. All of Bothell is in our same-day dispatch zone. No county line surcharges, no split-service issues.",
  },
  {
    question: "We're in Canyon Park near the tech corridor — can you upgrade our builder-grade opener?",
    answer:
      "Absolutely — this is one of our most common Bothell requests. Canyon Park's residential developments near the tech office parks were largely built with standard chain-drive openers that are loud, basic, and not app-connected. We upgrade these to LiftMaster myQ belt-drive or jackshaft systems with full Wi-Fi commissioning, smartphone app pairing, and smart home integration (Alexa, Google Home, Ring). For tech-worker households with variable schedules and multiple users, the myQ ecosystem's per-user access control and real-time activity log are genuinely useful — not just a novelty.",
  },
  {
    question: "How does the Sammamish River valley's dampness affect garage door hardware in Bothell?",
    answer:
      "The Sammamish River and North Creek wetlands create a low-lying, high-humidity microclimate across much of Bothell's residential core. This consistent moisture accelerates corrosion on standard galvanized hardware faster than elevated areas. Homes near the river — particularly in the North Creek and Downtown Bothell corridors — should expect shorter hardware lifespans than national averages suggest. We address this by installing high-cycle oil-tempered torsion springs and galvanized steel cables as standard on all Bothell service calls. Annual spring and cable inspection is the most effective preventive maintenance for Bothell's valley geography.",
  },
  {
    question: "What's the best opener for a Bothell tech-worker household with a busy schedule?",
    answer:
      "For households where multiple people need garage access, have variable schedules, or want remote monitoring, the LiftMaster myQ platform is the right answer. It supports multiple user profiles, real-time open/close alerts pushed to your phone, an activity log for every door event, and auto-close scheduling. You can grant temporary access to contractors or house guests without giving them a physical remote. The LiftMaster 8587W belt-drive or 8500W jackshaft are our top recommendations for Bothell homes — ultra-quiet operation and full myQ integration, installed and commissioned same-day.",
  },
  {
    question: "How does the Bothell-Everett Highway corridor affect your response times to Bothell?",
    answer:
      "SR 527 is our main artery to north Bothell from Kirkland, and we know its traffic patterns well. For calls on the Snohomish County side — Canyon Park, Thrasher's Corner, and the areas near the SR 527/I-405 interchange — travel time from our Kirkland base is typically 20–35 minutes outside of peak hours. For the King County side near Downtown Bothell and the Sammamish River, we're often closer via SR 522. Same-day service is standard for all Bothell calls, and for emergencies — stuck doors, broken springs, snapped cables — we prioritize dispatch to minimize wait time.",
  },
  {
    question: "Do you handle the newer townhomes and multifamily properties in the Bothell North Creek area?",
    answer:
      "Yes. North Creek and the broader Canyon Park residential area have seen significant new construction in recent years, including attached townhomes and small-lot single-family homes with space-constrained garages. These often feature single-car, low-headroom door systems that require specific hardware configurations. We stock parts for low-headroom torsion systems and compact opener profiles. If your new Bothell townhome has a noisy builder-grade chain drive or a door that's already binding in a tight space, we can diagnose and resolve it in a single visit.",
  },
  {
    question: "Do you offer emergency garage door service after hours in Bothell?",
    answer:
      "Yes. While our standard business hours are Sunday–Thursday 6:00 AM–10:00 PM (PT) and Friday 6:00 AM–6:00 PM (PT) (Saturday closed), Zeus Garage Doors provides specialized emergency dispatch outside of regular business hours for urgent repairs in Bothell. If a spring snaps overnight, your door is stuck open, or you have a security concern that cannot wait — call 425-555-0199 and our team will arrange emergency service. After-hours emergency dispatch is available Sunday through Thursday nights only — not Friday nights or Saturday.",
  },
];

const SERVICES = [
  {
    name: "Spring Replacement",
    href: "/services/spring-replacement",
    icon: Wrench,
    desc: "High-cycle torsion spring replacement for Bothell homes. Oil-tempered, galvanized coils specified for the Sammamish River valley's high-humidity environment. Both springs replaced simultaneously.",
  },
  {
    name: "Smart Opener Installation",
    href: "/services/opener-repair",
    icon: Wifi,
    desc: "LiftMaster myQ belt-drive and jackshaft installations with full Wi-Fi commissioning, smartphone app setup, and smart home integration. Perfect for Canyon Park tech-worker households.",
  },
  {
    name: "Off-Track Door Repair",
    href: "/services/off-track-repair",
    icon: AlertTriangle,
    desc: "Emergency same-day realignment for doors off rollers or derailed. Bothell's mix of older and newer homes means we carry parts for both vintage extension-spring track systems and modern torsion setups.",
  },
  {
    name: "Cable Replacement",
    href: "/services/cable-replacement",
    icon: Shield,
    desc: "Galvanized steel lift cable replacement for Bothell's damp valley corridor. Early replacement at the first sign of fraying prevents the more dangerous and costly scenario of a full cable snap.",
  },
  {
    name: "Panel Replacement",
    href: "/services/panel-replacement",
    icon: Home,
    desc: "Damaged section replacement without full door swap. Bothell's neighborhoods cover a wide range of door styles — we carry panel sections for most major residential door brands.",
  },
  {
    name: "New Door Installation",
    href: "/services/new-installation",
    icon: Zap,
    desc: "Complete door and opener installation for Bothell homes, from builder-grade replacement to premium steel, glass, and carriage-style systems. Full packages with LiftMaster opener included.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Canyon Park",
    blurb: "Bothell's tech corridor neighborhood. Smart opener upgrades, spring replacements, and same-day repairs for the Canyon Park residential community near SR 527.",
  },
  {
    name: "Thrasher's Corner",
    blurb: "Heavy-duty hardware upgrades and emergency repairs for the north Bothell area near Thrasher's Corner. Both new and established homes covered same-day.",
  },
  {
    name: "North Creek",
    blurb: "Valley-corridor neighborhood with high humidity exposure. We default to premium galvanized hardware for North Creek service calls to extend hardware life.",
  },
  {
    name: "Downtown Bothell",
    blurb: "Historic and remodeled homes along the Sammamish River. Older systems and custom doors handled with the same same-day standard as newer builds.",
  },
  {
    name: "Maywood",
    blurb: "Established Bothell residential properties. Comprehensive overhauls for aging hardware, opener replacements, and new door installations.",
  },
  {
    name: "Queensborough",
    blurb: "Same-day service for broken cables, rollers, and snapped springs. Queensborough is fully within our Bothell dispatch zone.",
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
  { name: "Bothell, WA", url: "/locations/bothell-wa" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BothellLocation() {
  return (
    <>
      <SEOHead
        title="Garage Door Repair Bothell WA | Zeus Garage Doors"
        description="Same-day garage door repair in Bothell, WA. Canyon Park, North Creek & all neighborhoods. Spring, opener & off-track repairs. Call 425-555-0199."
        canonical="/locations/bothell-wa"
        pageType="location"
        cityName="Bothell"
        serviceName="Garage Door Repair Bothell WA"
        serviceDescription={DIRECT_ANSWER}
        faqs={BOTHELL_FAQS}
        breadcrumbs={BREADCRUMBS}
      />

      <main id="main-content">
        {/* ── HERO ────────────────────────────────────────────────────────── */}
        <section
          className="relative bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28"
          aria-label="Garage door repair in Bothell hero"
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
                  SR 527 Corridor · Tech Workers & Families · Both King & Snohomish County
                </p>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-playfair leading-tight mb-5">
                  Garage Door Repair in Bothell, WA
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

                <div className="flex flex-wrap items-center gap-3 mb-7">
                  <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/40 rounded-full px-4 py-2">
                    <MapPin size={14} className="text-gold flex-shrink-0" />
                    <span className="text-gold text-xs font-bold uppercase tracking-wide">
                      Kirkland-Based · Serving All of Bothell (King & Snohomish)
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-red-500/15 border border-red-400/30 rounded-full px-4 py-2">
                    <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse flex-shrink-0" aria-hidden="true" />
                    <span className="text-red-300 text-xs font-bold uppercase tracking-wide">
                      Night Emergency Service — Sun–Thur
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:+14255550199"
                    className="bg-gold hover:bg-gold-dark text-navy font-bold px-7 py-4 rounded-xl text-lg transition-colors shadow-lg"
                    aria-label="Call Zeus Garage Doors in Bothell"
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
                  Get Your Bothell Quote
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
        <section className="py-16 lg:py-20 bg-offwhite" aria-labelledby="intro-bothell">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 items-start">

              <FadeIn className="lg:col-span-2 space-y-5">
                <h2
                  id="intro-bothell"
                  className="text-3xl lg:text-4xl font-bold text-navy font-playfair"
                >
                  Garage Door Experts for Bothell's Tech Corridor and Family Neighborhoods
                </h2>

                <p className="text-charcoal leading-relaxed text-lg">
                  Bothell occupies a unique position in the Eastside's geography: a rapidly growing city that straddles two counties, serves a diverse mix of tech-industry professionals and established families, and stretches along one of the region's busiest residential corridors — the <strong>Bothell-Everett Highway (SR 527)</strong>. From the office campuses and newer residential developments in <strong>Canyon Park</strong> to the historic charm of <strong>Downtown Bothell</strong> along the Sammamish River, the city's housing stock covers a wide range of age, style, and garage door configuration.
                </p>

                <p className="text-charcoal leading-relaxed">
                  Zeus Garage Doors is Kirkland-based, which puts us directly on the SR 527 and I-405 interchange route to Bothell. We serve the full city: the Snohomish County side including Canyon Park, Thrasher's Corner, and the SR 527 corridor; and the King County side including Downtown Bothell, North Creek, and the neighborhoods toward Kenmore. For Bothell homeowners, that means one call, one company, no coverage gaps between county lines.
                </p>

                <p className="text-charcoal leading-relaxed">
                  Our full range of residential garage door services is available same-day in Bothell: <a href="/services/spring-replacement" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">torsion spring replacement</a>, <a href="/services/opener-repair" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">smart opener installation</a>, <a href="/services/cable-replacement" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">cable replacement</a>, <a href="/services/off-track-repair" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">off-track door repair</a>, panel replacement, weatherstrip service, and complete new door installations. All pricing is confirmed on-site after a full assessment — never over the phone.
                </p>

                <p className="text-charcoal leading-relaxed">
                  One of the most common Bothell calls we receive is from Canyon Park residents frustrated with loud builder-grade chain-drive openers. New construction in the tech corridor is almost universally equipped with standard chain-drive units: functional, but loud enough to wake the house, and lacking the smart home integration that tech-savvy homeowners want. We upgrade these to LiftMaster myQ belt-drive or jackshaft systems — same-day, with full app commissioning, so you leave work knowing the door was left closed, and can open it remotely if a delivery arrives early.
                </p>

                {/* Local Environment Box */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 mt-4">
                  <h3 className="text-navy font-bold text-xl font-playfair mb-3">
                    How Bothell's Valley Environment Affects Garage Door Hardware
                  </h3>
                  <div className="space-y-3 text-charcoal/80 leading-relaxed">
                    <p>
                      The <strong>Sammamish River valley</strong> and <strong>North Creek wetlands</strong> create a low-lying, persistently damp microclimate across much of Bothell's residential core. Unlike hillside communities where moisture drains and dries between rain events, Bothell's valley-floor neighborhoods maintain higher ambient humidity for longer after each storm.
                    </p>
                    <p>
                      This affects garage door hardware in a specific, predictable way: torsion spring coils develop surface rust faster than on elevated or drier properties, accelerating the metal fatigue that precedes spring failure. Lift cables — particularly at the drum attachment point where water collects — develop micro-fraying and corrosion that standard inspection can miss until a strand count is done. Track hardware and fasteners loosen as mounting bolts corrode.
                    </p>
                    <p>
                      For all Bothell service calls, we default to <strong>high-cycle oil-tempered torsion springs</strong> and <strong>galvanized steel lift cables</strong>. For homes in the lowest-elevation sections of the Sammamish River and North Creek corridors, we recommend annual spring and cable inspection as a preventive measure, not an emergency response.
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
                    Serving Bothell, WA
                  </h3>
                  <p className="text-white/60 text-sm mb-4">
                    Same-day service · Sun–Fri
                  </p>
                  <a
                    href="tel:+14255550199"
                    className="block w-full text-center bg-gold hover:bg-gold-dark text-navy font-bold py-3 rounded-xl transition-colors mb-3"
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
                    Why Bothell Homeowners Trust Zeus
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Covers both King & Snohomish County Bothell",
                      "Smart opener specialists — full myQ commissioning",
                      "Kirkland-based — direct SR 527 dispatch",
                      "Licensed Washington state contractor",
                      "Full liability insurance on every job",
                      "In-person assessment — never phone quotes",
                      "85%+ of calls resolved in a single visit",
                      "Satisfaction guaranteed — we make it right",
                      "No upselling, no manufactured urgency",
                      "🎁 10% off for first-time customers",
                      "🎖️ 12.5% off — veterans & seniors",
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
                    <li>Sunday – Thursday: 6:00 AM – 10:00 PM (PT)</li>
                    <li>Friday: 6:00 AM – 6:00 PM (PT)</li>
                    <li className="text-charcoal/50">Saturday: Closed</li>
                  <li className="text-red-500/70 text-xs font-medium pt-1">
                    * Night emergency dispatch available Sun–Thur after hours. Not available Fri night or Sat.
                  </li>
                  </ul>
                </div>

                {/* Special Offers */}
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-300/60 rounded-2xl p-5">
                  <p className="text-navy font-bold text-sm mb-3 flex items-center gap-2">
                    <span aria-hidden="true">🏷️</span> Special Offers
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2.5">
                      <span className="text-xl leading-none flex-shrink-0" aria-hidden="true">🎁</span>
                      <p className="text-charcoal text-sm leading-snug">
                        <strong className="text-navy text-base">10% Off</strong>{" "}
                        for first-time customers
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-xl leading-none flex-shrink-0" aria-hidden="true">🎖️</span>
                      <p className="text-charcoal text-sm leading-snug">
                        <strong className="text-navy text-base">12.5% Off</strong>{" "}
                        for veterans &amp; seniors
                      </p>
                    </div>
                    <p className="text-charcoal/60 text-xs leading-relaxed pt-2 border-t border-amber-200/60">
                      Zeus honors those who served. Mention discount at booking.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── SERVICES ────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-white" aria-labelledby="services-bothell">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-12">
              <h2
                id="services-bothell"
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair"
              >
                Garage Door Services in Bothell, WA
              </h2>
              <p className="text-charcoal/60 mt-4 text-lg max-w-xl mx-auto">
                Smart opener upgrades, spring replacements, and emergency repairs — all available same-day across all of Bothell.
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service, i) => (
                <FadeIn key={service.href + service.name} delay={i * 0.06}>
                  <Link
                    to={service.href}
                    className="group block bg-offwhite rounded-2xl p-7 border border-transparent hover:border-forest hover:shadow-lg transition-all h-full"
                    aria-label={`${service.name} in Bothell, WA`}
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

        {/* ── TECH CORRIDOR POSITIONING ───────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-offwhite" aria-labelledby="tech-bothell">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <FadeIn>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  Built for Bothell's Lifestyle
                </p>
                <h2
                  id="tech-bothell"
                  className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-5"
                >
                  Smart Opener Service for Canyon Park's Tech Community
                </h2>
                <div className="space-y-4 text-charcoal leading-relaxed">
                  <p>
                    Canyon Park is one of the most technology-forward residential communities in Snohomish County. Many residents work in software, aerospace, or biotech — industries where remote monitoring and automation are baseline expectations. A garage door opener that doesn't connect to a smartphone feels out of place in a neighborhood where every other system in the house is networked.
                  </p>
                  <p>
                    Zeus installs and fully commissions the <strong>LiftMaster myQ ecosystem</strong> — including Wi-Fi setup, smartphone app pairing on your device, auto-close scheduling, and integration with Alexa, Google Home, or Ring. We also configure the per-user access settings so each family member or frequent visitor has their own access profile. For Canyon Park households, the myQ activity log — which shows every door open and close event with a timestamp — provides the kind of visibility that busy tech-worker schedules demand.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "LiftMaster myQ smart openers — full app and ecosystem commissioning",
                      "Belt-drive models for quiet operation in attached garages",
                      "Jackshaft wall-mount options for high-ceiling or storage-loft garages",
                      "Per-user access profiles for multi-person households",
                      "Auto-close scheduling and real-time open/close alerts",
                      "Same-day installation — we arrive with the hardware",
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
                    Bothell Coverage
                  </p>
                  <h3 className="font-playfair font-bold text-2xl mb-5">
                    Kirkland → Bothell<br />
                    <span className="text-gold">via SR 527 & I-405</span>
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    We've served homes across Canyon Park, Thrasher's Corner, North Creek, Downtown Bothell, and the neighborhoods on both the King County and Snohomish County sides. Same stocked truck, same licensed technician, same same-day standard.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Response", value: "Same Day" },
                      { label: "One-Visit Fix Rate", value: "85%+" },
                      { label: "Satisfaction Guarantee", value: "✓" },
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
        <section className="py-16 lg:py-20 bg-white" aria-labelledby="neighborhoods-bothell">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="mb-10">
              <h2
                id="neighborhoods-bothell"
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-4"
              >
                Garage Door Repair in Every Bothell Neighborhood
              </h2>
              <p className="text-charcoal/70 text-lg max-w-2xl">
                Canyon Park to Downtown Bothell — across both King and Snohomish counties — same licensed technician, same same-day standard.
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
                      Garage Door Repair — {hood.name}, Bothell
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
        <section className="py-12 bg-navy" aria-label="About Zeus serving Bothell">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  Who We Are
                </p>
                <h2 className="text-2xl lg:text-3xl font-bold text-white font-playfair mb-4">
                  Kirkland-Based. Bothell-Ready.
                </h2>
                <p className="text-white/70 leading-relaxed text-base mb-4">
                  Zeus Garage Doors is a locally owned business based in Kirkland, WA. We are not a franchise — there is no national call center, no subcontractor pool. When you call us, you reach our team directly. Bothell is one of our most active service areas, and our trucks are stocked for both the older housing stock near Downtown Bothell and the newer builds in the Canyon Park tech corridor.
                </p>
                <p className="text-white/70 leading-relaxed text-base">
                  Whether you're a tech professional in Canyon Park who needs a quiet, app-connected opener installed before your next early-morning meeting, or an established Bothell family whose torsion spring snapped on a Sunday morning — same-day service, same honest pricing, same professional standard.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <FAQAccordion
          items={BOTHELL_FAQS}
          title="Garage Door Repair in Bothell — Frequently Asked Questions"
          subtitle="Straight answers for Bothell homeowners about smart openers, valley-corridor hardware, and same-day service."
          injectSchema={false}
        />

        {/* ── BOTTOM QUOTE FORM ───────────────────────────────────────────── */}
        <section
          className="py-16 lg:py-20 bg-offwhite"
          aria-labelledby="bottom-quote-bothell"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <FadeIn>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  Ready to Get Started?
                </p>
                <h2
                  id="bottom-quote-bothell"
                  className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-4"
                >
                  Request Your Free Bothell Estimate
                </h2>
                <p className="text-charcoal/70 text-lg mb-6">
                  Fill out the form and our team will call you back promptly during business hours. For urgent service, call directly at{" "}
                  <a href="tel:+14255550199" className="text-forest font-semibold hover:underline">
                    425-555-0199
                  </a>.
                </p>
                <ul className="space-y-3">
                  {[
                    "Serves all of Bothell — King & Snohomish County",
                    "Smart opener specialists — full myQ commissioning",
                    "Licensed & insured WA contractor",
                    "Flat-rate pricing — confirmed on-site",
                    "85%+ one-visit fix rate — stocked truck, every call",
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
          className="bg-gold py-16 lg:py-20"
          aria-labelledby="cta-bothell"
        >
          <div className="max-w-3xl mx-auto px-4 text-center">
            <FadeIn>
              <h2
                id="cta-bothell"
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-4"
              >
                Need Garage Door Repair in Bothell?
              </h2>
              <p className="text-navy text-lg mb-8">
                Zeus Garage Doors serves all of Bothell — Canyon Park, Thrasher's Corner, Downtown Bothell, and every neighborhood on both sides of the county line. Smart openers, spring replacements, and same-day professional service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+14255550199"
                  className="bg-navy text-white hover:bg-navy/90 font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
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
