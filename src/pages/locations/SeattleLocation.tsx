/**
 * pages/locations/SeattleLocation.tsx — Zeus Garage Doors
 * Target: "Garage Door Repair Seattle WA" + neighborhood clusters
 * Angle: Seattle's pre-1960 housing stock, alley garages, hillside driveways, marine climate
 * Schema: LocalBusiness + Service + FAQPage + BreadcrumbList via SEOHead
 */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Clock,
  Shield,
  Wrench,
  MapPin,
  AlertTriangle,
  CheckCircle,
  Zap,
  Home,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import FAQAccordion from "@/components/FAQAccordion";
import QuoteForm from "@/components/QuoteForm";

// ─── Content ──────────────────────────────────────────────────────────────────

const DIRECT_ANSWER =
  "Zeus Garage Doors provides same-day garage door repair in Seattle, WA — specializing in older wooden door replacement, alley-garage access, hillside spring calibration, and full smart opener installation. Kirkland-based with a short cross-lake dispatch time, we serve Queen Anne, Capitol Hill, Ballard, Fremont, Magnolia, Green Lake, and every Seattle neighborhood. Call 425-555-0199.";

const SEATTLE_FAQS = [
  {
    question: "Do you repair old wooden garage doors in Seattle?",
    answer:
      "Yes. Seattle's dense pre-1960 housing stock — especially in Ballard, Fremont, Capitol Hill, and Wallingford — is full of original wooden doors that have rotted at the base, warped from decades of moisture, or broken at panel joints. We assess each wooden door individually: minor rot can be repaired and sealed, but severe structural damage or full-panel warping typically means replacement is the more cost-effective path. We carry modern steel and insulated door systems that match the character of older Seattle homes and can be installed same-day in most cases.",
  },
  {
    question: "Can you access alley garages in Capitol Hill, Ballard, and Fremont?",
    answer:
      "Yes — alley-garage access is standard for our Seattle service calls. A large portion of Seattle's residential garages are detached structures accessed from rear alleys, particularly in Capitol Hill, First Hill, Ballard, Fremont, and Wallingford. Our technicians are experienced with tight alley clearances, older detached garage structures with limited headroom, and the specific challenges these spaces present: non-standard door widths, low-clearance track systems, and openers that need wall-mount or jackshaft configurations because ceiling space is insufficient for a trolley rail.",
  },
  {
    question: "How does Seattle's heavy rainfall affect garage door springs and cables?",
    answer:
      "Seattle's consistent rainfall and marine air from Puget Sound create one of the most corrosive environments for garage door hardware on the West Coast. Torsion spring coils develop surface rust and micro-fractures faster than in drier climates. Lift cables — particularly standard galvanized steel — can begin fraying in as little as 18–24 months in West Seattle or Magnolia. We default to high-cycle galvanized torsion springs and stainless-core lift cables on all Seattle service calls. These are the appropriate specification for the climate, not an upgrade we charge extra for.",
  },
  {
    question: "Do you install smart garage door openers in Seattle?",
    answer:
      "Yes. We install and fully commission LiftMaster myQ-enabled openers, Chamberlain smart series, and wall-mount jackshaft models for Seattle homes — including complete Wi-Fi setup, smartphone app pairing, auto-close scheduling, and smart home integration with Amazon Alexa, Google Home, and Ring security systems. For older Seattle garages with limited ceiling headroom — common in Capitol Hill, Fremont, and Ballard — we specifically recommend the LiftMaster 8500W jackshaft wall-mount, which installs beside the door with no ceiling rail required.",
  },
  {
    question: "How does a steep driveway in Queen Anne or Capitol Hill affect my garage door?",
    answer:
      "Steep hillside driveways — especially in Queen Anne, Capitol Hill, and Magnolia — create a gravity-assist effect during door opening that can disguise weakened torsion springs. On a flat driveway, undertensioned springs feel obviously heavy. On a slope, gravity helps open the door so the spring wear is invisible until the door fails to hold on closing — or the spring snaps entirely under the return load. We use the mid-point balance test on all Seattle hillside calls: disconnect the opener, lift the door manually to waist height, release. A properly balanced door holds in place. Drift in either direction means spring service is needed.",
  },
  {
    question: "What are your service hours for Seattle garage door repair?",
    answer:
      "We are available Sunday through Thursday 6:00 AM to 10:00 PM (PT), and Friday 6:00 AM to 6:00 PM (PT). Saturday is our only closed day. Same-day service is our standard for Seattle — not a premium tier. Our Kirkland base puts us 20–30 minutes from most Seattle neighborhoods via SR-520 or I-90, depending on traffic.",
  },
  {
    question: "Do you offer after-hours emergency garage door repair in Seattle?",
    answer:
      "Yes. Zeus Garage Doors provides night emergency dispatch for urgent garage door repairs in Seattle outside of regular business hours. A broken spring, a door stuck open overnight, or a cable snapped and blocking your car are not situations that can wait until morning. Call 425-555-0199 for emergency service. Night emergency dispatch is available Sunday through Thursday nights only — not Friday nights or Saturday.",
  },
];

const SERVICES = [
  {
    name: "Old & Wooden Door Replacement",
    href: "/services/panel-replacement",
    icon: Home,
    desc: "Seattle's pre-1960 housing stock is full of rotted wooden doors and original track systems decades past their service life. We assess and replace — same-day for most Seattle residential calls.",
  },
  {
    name: "Torsion Spring Replacement",
    href: "/services/spring-replacement",
    icon: Wrench,
    desc: "High-cycle galvanized springs calibrated precisely for your door weight — including hillside homes in Queen Anne and Capitol Hill where inclined driveways mask tension loss. Professional service warranty on every installation.",
  },
  {
    name: "Smart Opener Installation",
    href: "/services/opener-repair",
    icon: Zap,
    desc: "LiftMaster myQ, jackshaft wall-mount models, and full smart home commissioning. For Seattle's low-headroom alley garages, the LiftMaster 8500W is our go-to — no ceiling rail required.",
  },
  {
    name: "Emergency Off-Track Repair",
    href: "/services/off-track-repair",
    icon: AlertTriangle,
    desc: "Alley garages stuck open are a direct security risk for Seattle homeowners. We prioritize emergency dispatch — same-day, including evenings Sunday through Thursday.",
  },
  {
    name: "Cable Replacement",
    href: "/services/cable-replacement",
    icon: Shield,
    desc: "Stainless-core lift cables designed for Seattle's marine climate. Puget Sound's salt air and year-round rainfall accelerate standard cable corrosion — we install the right spec from the first visit.",
  },
  {
    name: "New Garage Door Installation",
    href: "/services/new-installation",
    icon: Home,
    desc: "Full new door installations for Seattle's diverse housing stock — from craftsman character homes in Ballard to modern builds in South Lake Union. Steel, wood-look, insulated, and carriage-style options.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Queen Anne",
    blurb:
      "Seattle's steepest hillside neighborhood. Inclined driveways mask spring tension loss — we run the mid-point balance test on every Queen Anne call. Older craftsman homes with original wooden doors are common here.",
  },
  {
    name: "Capitol Hill",
    blurb:
      "Dense pre-1960 housing with a high concentration of alley-accessed detached garages. Low ceiling clearance in many structures requires jackshaft openers. We know Capitol Hill's garage layout well.",
  },
  {
    name: "Ballard",
    blurb:
      "Ballard's original Scandinavian craftsman homes have some of the oldest garage door hardware in Seattle. Rotted wooden panels, seized original tracks, and springs that have never been replaced — we service all of it.",
  },
  {
    name: "Fremont",
    blurb:
      "Eclectic mix of older homes and newer infill construction. Alley garage access is common in the core residential blocks. Tech workers in Fremont frequently request smart opener upgrades alongside repairs.",
  },
  {
    name: "Magnolia",
    blurb:
      "Elevated peninsula with direct Puget Sound exposure — among the highest marine-corrosion environments in Seattle. Stainless-core cables and galvanized springs are standard for Magnolia calls, not an upgrade.",
  },
  {
    name: "Green Lake & Wallingford",
    blurb:
      "Established residential neighborhoods with a mix of older craftsman and mid-century housing stock. Same-day service for spring, cable, opener, and full door replacement for all major door brands.",
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
  { name: "Seattle, WA", url: "/locations/seattle-wa" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SeattleLocation() {
  return (
    <>
      <SEOHead
        title="Garage Door Repair Seattle WA | Zeus Garage Doors"
        description="Expert garage door repair in Seattle, WA. Old homes, alley garages, hillside springs & smart opener installs. Same-day service. Call 425-555-0199."
        canonical="/locations/seattle-wa"
        pageType="location"
        cityName="Seattle"
        serviceName="Garage Door Repair Seattle WA"
        serviceDescription={DIRECT_ANSWER}
        faqs={SEATTLE_FAQS}
        breadcrumbs={BREADCRUMBS}
      />

      <main id="main-content">

        {/* ── HERO ────────────────────────────────────────────────────────── */}
        <section
          className="relative bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28"
          aria-label="Garage door repair in Seattle hero"
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
            {/* Breadcrumb */}
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
              {/* Left — headline + direct answer */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  Old Homes · Alley Garages · Seattle, WA
                </p>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-playfair leading-tight mb-5">
                  Garage Door Repair in Seattle, WA
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
                      Kirkland-Based · 20–30 Min to Seattle
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
                    aria-label="Call Zeus Garage Doors in Seattle"
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

              {/* Right — QuoteForm */}
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
                  Get Your Seattle Quote
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
        <section className="py-16 lg:py-20 bg-offwhite" aria-labelledby="intro-seattle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 items-start">

              <FadeIn className="lg:col-span-2 space-y-5">
                <h2
                  id="intro-seattle"
                  className="text-3xl lg:text-4xl font-bold text-navy font-playfair"
                >
                  Built for Seattle's Unique Garage Door Challenges
                </h2>

                <p className="text-charcoal leading-relaxed text-lg">
                  Seattle's garage door market is unlike any other in the Pacific Northwest. While Bellevue and Redmond are defined by new construction and modern glass systems, Seattle is defined by its history — a dense urban core with a substantial share of homes built before 1960, where original wooden garage doors have been deteriorating under decades of Pacific Northwest rain, where detached garages are tucked behind craftsman bungalows and accessed from narrow rear alleys, and where steep hillside driveways in <strong>Queen Anne</strong>, <strong>Capitol Hill</strong>, and <strong>Magnolia</strong> create unique spring-balance challenges that most out-of-state franchise companies have never encountered.
                </p>

                <p className="text-charcoal leading-relaxed">
                  Zeus Garage Doors is based in Kirkland — a direct cross-lake dispatch to Seattle via SR-520 or I-90, typically 20 to 30 minutes depending on traffic. We serve the full range of Seattle residential garage door needs: <a href="/services/panel-replacement" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">wooden door repair and replacement</a>, <a href="/services/spring-replacement" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">torsion spring replacement</a>, <a href="/services/opener-repair" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">smart opener installation</a>, <a href="/services/cable-replacement" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">corrosion-resistant cable replacement</a>, <a href="/services/off-track-repair" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">emergency off-track repair</a>, and full new door installations. All services available same-day. All pricing confirmed on-site — never over the phone.
                </p>

                <p className="text-charcoal leading-relaxed">
                  What separates a company that genuinely serves Seattle from one that lists it as a service area? It's the knowledge of what makes Seattle garages different. A technician who arrives at a Ballard alley garage in a full-size van and realizes the alley is too narrow isn't prepared for Seattle. A technician who tries to install a standard ceiling-rail trolley opener in a Capitol Hill basement garage with six feet of clearance doesn't know Seattle's housing stock. Our technicians do.
                </p>

                {/* Seattle Environment Box */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 mt-4">
                  <h3 className="text-navy font-bold text-xl font-playfair mb-3">
                    What Makes Seattle Garage Doors Different
                  </h3>
                  <div className="space-y-4 text-charcoal/80 leading-relaxed">
                    <div>
                      <p className="font-semibold text-navy mb-1">The Alley Garage</p>
                      <p>
                        In Capitol Hill, First Hill, Ballard, Fremont, and Wallingford, a large portion of residential garages are detached structures set back from the street and accessed from rear alleys. These structures present distinct service challenges: tight alley clearance, low interior ceilings, older wall construction, and often no electrical outlet near the door — requiring the opener's electrical supply to be run at time of installation. We carry the parts and know the configuration.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-navy mb-1">Pre-1960 Wooden Doors</p>
                      <p>
                        Seattle's older residential neighborhoods are full of original wooden garage doors — many of which have been in place for 40 to 60 years. These doors show characteristic failure patterns: rot at the base from ground moisture wicking, panel cracking at horizontal joints from decades of rain-and-dry cycling, warping that prevents the door from seating fully in the frame, and hardware that has seized or corroded beyond adjustment. We assess every wooden door carefully — some are repairable, many have reached end of life. We'll tell you honestly which is which.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-navy mb-1">Puget Sound Marine Climate</p>
                      <p>
                        Seattle's proximity to Puget Sound means all metal hardware lives in a marine-influenced environment. Torsion spring coils, lift cable strands, track bracket hardware, and hinge pivot points all corrode faster here than in drier inland climates. In Magnolia — which sits directly above the sound — this effect is most pronounced. Our default specification for Seattle calls includes high-cycle galvanized springs and stainless-core lift cables at no additional charge. That's simply the right hardware for this environment.
                      </p>
                    </div>
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
                    Serving Seattle & All of King County
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
                    Why Seattle Homeowners Choose Zeus
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Specialists in pre-1960 homes & alley garages",
                      "Jackshaft openers for low-ceiling Seattle garages",
                      "Hillside balance testing — not just opener disconnect",
                      "Stainless-core cables standard for Seattle's climate",
                      "Licensed Washington state contractor",
                      "Full liability insurance on every job",
                      "In-person assessment — never phone quotes",
                      "85%+ of calls resolved in one visit",
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
        <section className="py-16 lg:py-20 bg-white" aria-labelledby="services-seattle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-12">
              <h2
                id="services-seattle"
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair"
              >
                Garage Door Services in Seattle, WA
              </h2>
              <p className="text-charcoal/60 mt-4 text-lg max-w-xl mx-auto">
                From wooden door replacement in Ballard to smart opener installs in Capitol Hill — every service available same-day across Seattle.
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service, i) => (
                <FadeIn key={service.href + service.name} delay={i * 0.06}>
                  <Link
                    to={service.href}
                    className="group block bg-offwhite rounded-2xl p-7 border border-transparent hover:border-forest hover:shadow-lg transition-all h-full"
                    aria-label={`${service.name} in Seattle, WA`}
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

        {/* ── ALLEY GARAGE + HILLSIDE DEEP DIVE ──────────────────────────── */}
        <section className="py-16 lg:py-20 bg-offwhite" aria-labelledby="seattle-specifics">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <FadeIn>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  Seattle-Specific Expertise
                </p>
                <h2
                  id="seattle-specifics"
                  className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-5"
                >
                  The Two Problems Most Seattle Companies Get Wrong
                </h2>
                <div className="space-y-5 text-charcoal leading-relaxed">
                  <div className="bg-white rounded-2xl border border-slate-200 p-5">
                    <h3 className="text-navy font-bold text-lg font-playfair mb-2">
                      1. Alley Garage Access
                    </h3>
                    <p className="text-sm">
                      A significant number of Seattle's residential garages sit at the end of narrow rear alleys — often eight to twelve feet wide with fences, utility boxes, and parked vehicles on both sides. Many national dispatch companies send full-size service trucks that physically cannot access these alleys. We've built our Seattle operation around alley access: smaller-profile vehicles for tight alleys, experienced technicians who carry tools by hand when needed, and a complete inventory of parts for the low-headroom installations that alley garages require.
                    </p>
                    <p className="text-sm mt-3">
                      Alley garages also often have <strong>non-standard door widths</strong> — 8-foot, 9-foot, and even 7-foot-wide openings are common in Seattle's older housing stock. We stock hardware and springs to match these widths without special-ordering parts that would delay your repair.
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl border border-slate-200 p-5">
                    <h3 className="text-navy font-bold text-lg font-playfair mb-2">
                      2. Hillside Spring Calibration
                    </h3>
                    <p className="text-sm">
                      Queen Anne, Capitol Hill, Magnolia, and Beacon Hill are among the steepest residential hillsides in any major U.S. city. Garage doors on steep driveways require precise torsion spring calibration for both opening <em>and</em> closing loads — not just the upward lift. A spring set to the standard formula for a flat-driveway installation will be undertensioned on an inclined approach and will resist closing under gravity load. We calculate spring tension for the actual incline angle at your property, not a generic door-weight formula.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="bg-navy rounded-2xl p-8 text-white">
                  <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                    Seattle Coverage
                  </p>
                  <h3 className="font-playfair font-bold text-2xl mb-5">
                    Kirkland → Seattle<br />
                    <span className="text-gold">Via SR-520 or I-90</span>
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    We dispatch from Kirkland directly to Queen Anne, Capitol Hill, Ballard, Fremont, Magnolia, Green Lake, Wallingford, Beacon Hill, and South Lake Union. Most Seattle calls receive same-day service — typically within two to four hours of dispatch.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Dispatch Time", value: "20–30 min" },
                      { label: "One-Visit Fix Rate", value: "85%+" },
                      { label: "Days Available", value: "Sun–Fri" },
                      { label: "Night Emergency", value: "Sun–Thur" },
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

        {/* ── PRO TIPS ────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-white" aria-labelledby="pro-tips-seattle">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                Expert Advice
              </p>
              <h2
                id="pro-tips-seattle"
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-10"
              >
                Pro Tips for Seattle Homeowners
              </h2>

              <div className="space-y-6">

                {/* Featured Snippet Block */}
                <div className="bg-gold/8 border-l-4 border-gold rounded-r-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Wrench size={18} className="text-gold flex-shrink-0" />
                    <h3 className="text-navy font-bold text-lg font-playfair">
                      How to Know If Your Old Wooden Garage Door Can Be Repaired
                    </h3>
                  </div>
                  <p className="text-charcoal leading-relaxed">
                    A wooden garage door is repairable if: rot is confined to the bottom rail only (can be cut out and rebuilt), panels show surface checking or minor cracking (seal and repaint), and the frame is still square with no major warping. Replacement is the better value when: rot extends into the stiles or multiple panels, the door no longer seats fully in the frame, or warping causes the bottom seal to fail across more than half the door width. Our technicians assess every wooden door on-site and give you an honest recommendation — not a default push toward a new door sale.
                  </p>
                  <a
                    href="tel:+14255550199"
                    className="inline-flex items-center gap-2 mt-4 text-forest font-semibold text-sm hover:underline"
                  >
                    📞 Call 425-555-0199 for a wooden door assessment →
                  </a>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-offwhite rounded-2xl p-6 border border-slate-200">
                    <h3 className="text-navy font-bold font-playfair mb-2">
                      The Hillside Balance Test
                    </h3>
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      On any sloped driveway — Queen Anne, Capitol Hill, Magnolia, Beacon Hill — test your door's spring balance twice a year. Disconnect the opener, lift the door manually to waist height, and release. A well-balanced door stays in place. If it drifts upward (gravity-assist overpowering springs) or drops back down (undertension), call for a spring adjustment before the spring fails entirely under the closing load.
                    </p>
                  </div>

                  <div className="bg-offwhite rounded-2xl p-6 border border-slate-200">
                    <h3 className="text-navy font-bold font-playfair mb-2">
                      Choosing an Opener for a Low-Ceiling Alley Garage
                    </h3>
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      Standard trolley-rail openers need at least 10–12 inches of clearance above the door in the raised position. Many Seattle alley garages have only 6–8 inches. The solution is a <strong>jackshaft wall-mount opener</strong> like the LiftMaster 8500W — it mounts beside the door on the wall, drives through the torsion bar, and requires zero ceiling clearance. It's also significantly quieter than chain-drive models.
                    </p>
                  </div>

                  <div className="bg-offwhite rounded-2xl p-6 border border-slate-200">
                    <h3 className="text-navy font-bold font-playfair mb-2">
                      Seattle Rain & Your Bottom Seal
                    </h3>
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      Seattle averages nearly 40 inches of rain per year. The garage door bottom seal is your first line of defense — and the first component to fail. Inspect it each fall before the rainy season: a good seal compresses evenly and leaves no daylight visible under the closed door. A cracked, torn, or hardened seal needs replacement before the rains arrive. A failed seal on a wooden door can accelerate rot at the base significantly.
                    </p>
                  </div>

                  <div className="bg-offwhite rounded-2xl p-6 border border-slate-200">
                    <h3 className="text-navy font-bold font-playfair mb-2">
                      Lubrication for Seattle's Damp Climate
                    </h3>
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      Lubricate torsion springs, rollers, hinges, and track curves with white lithium grease every three to four months in Seattle — more frequently than drier climates require. Do not use WD-40 (it strips existing lubrication). For bottom seal channels and any contact with rubber components, use a silicone-based spray. The goal is a dry-film lubricant layer that repels moisture rather than absorbing it.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── NEIGHBORHOODS ───────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-offwhite" aria-labelledby="neighborhoods-seattle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="mb-10">
              <h2
                id="neighborhoods-seattle"
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-4"
              >
                Garage Door Repair Across Every Seattle Neighborhood
              </h2>
              <p className="text-charcoal/70 text-lg max-w-2xl">
                From Queen Anne's hilltop driveways to Ballard's craftsman alleys — same licensed technicians, same same-day standard, same fully stocked truck.
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {NEIGHBORHOODS.map((hood, i) => (
                <FadeIn key={hood.name} delay={i * 0.05}>
                  <div
                    className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow"
                    itemScope
                    itemType="https://schema.org/Place"
                  >
                    <h3
                      itemProp="name"
                      className="text-navy font-bold text-base mb-2"
                    >
                      Garage Door Repair — {hood.name}, Seattle
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
        <section className="py-12 bg-navy" aria-label="About Zeus serving Seattle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  Who We Are
                </p>
                <h2 className="text-2xl lg:text-3xl font-bold text-white font-playfair mb-4">
                  Kirkland-Based. Seattle-Ready.
                </h2>
                <p className="text-white/70 leading-relaxed text-base mb-4">
                  Zeus Garage Doors is a locally owned and operated business based in Kirkland, WA. We are not a national franchise — there is no regional call center routing your job to whoever is available. When you call us, you reach our dispatch team directly. When we arrive at your Seattle property, it is a Zeus employee, not a subcontractor, who shows up at your door.
                </p>
                <p className="text-white/70 leading-relaxed text-base">
                  Seattle's housing stock presents real technical challenges that generic garage door companies aren't prepared for. We've invested in the knowledge, the right vehicles, and the right inventory to serve Seattle's alley garages, pre-1960 wooden doors, and steep hillside homes correctly — on the first visit. That investment is why we can promise same-day service in Seattle with confidence: we know what we'll find when we get there.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <FAQAccordion
          items={SEATTLE_FAQS}
          title="Garage Door Repair in Seattle — Frequently Asked Questions"
          subtitle="Straight answers for Seattle homeowners about wooden doors, alley garages, hillside spring calibration, and what to expect."
          injectSchema={false}
        />

        {/* ── BOTTOM QUOTE FORM ───────────────────────────────────────────── */}
        <section
          className="py-16 lg:py-20 bg-offwhite"
          aria-labelledby="bottom-quote-seattle"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <FadeIn>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  Ready to Get Started?
                </p>
                <h2
                  id="bottom-quote-seattle"
                  className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-4"
                >
                  Request Your Free Seattle Estimate
                </h2>
                <p className="text-charcoal/70 text-lg mb-6">
                  Fill out the form and our dispatch team will call you back promptly during business hours. For urgent service, call directly at{" "}
                  <a href="tel:+14255550199" className="text-forest font-semibold hover:underline">
                    425-555-0199
                  </a>.
                </p>
                <ul className="space-y-3">
                  {[
                    "Specialists in pre-1960 homes & alley garages",
                    "Jackshaft openers for low-ceiling Seattle garages",
                    "Corrosion-resistant hardware standard for Seattle's climate",
                    "Licensed & insured WA contractor",
                    "Flat-rate pricing — confirmed on-site",
                    "Same-day availability, Sunday–Friday",
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
          aria-labelledby="cta-seattle"
        >
          <div className="max-w-3xl mx-auto px-4 text-center">
            <FadeIn>
              <h2
                id="cta-seattle"
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-4"
              >
                Need Garage Door Repair in Seattle?
              </h2>
              <p className="text-navy text-lg mb-8">
                Zeus Garage Doors is Seattle's specialist for older homes, alley garages, and hillside spring calibration. Kirkland-based, same-day dispatch across every Seattle neighborhood.
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
