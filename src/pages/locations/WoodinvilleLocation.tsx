/**
 * pages/locations/WoodinvilleLocation.tsx — Zeus Garage Doors
 * Target: "Garage Door Repair Woodinville WA" — 1,500+ words
 * Schema: LocalBusiness + Service + FAQPage + BreadcrumbList via SEOHead
 * Premium market positioning · Wine country · Hollywood Hill · QuoteForm ×2
 */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Shield, Wrench, MapPin, AlertTriangle, CheckCircle, Zap, Home } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import FAQAccordion from "@/components/FAQAccordion";
import QuoteForm from "@/components/QuoteForm";

// ─── Content ──────────────────────────────────────────────────────────────────

const DIRECT_ANSWER =
  "Zeus Garage Doors provides same-day garage door repair in Woodinville, WA — specializing in heavy-duty spring replacement, custom wood door service, opener repair, off-track repair, and full new installations. Based in neighboring Kirkland, we serve Hollywood Hill, Cottage Lake, Wellington, and every Woodinville neighborhood with the same same-day commitment we give our home market. Call 425-555-0199.";

const WOODINVILLE_FAQS = [
  {
    question: "How far is Zeus Garage Doors from Woodinville, WA?",
    answer:
      "Our shop is based in Kirkland, WA — a short drive from Woodinville via SR-522 or Redmond-Woodinville Road. We serve Woodinville as part of our core Eastside service area, dispatching the same licensed Zeus technicians who serve Kirkland, Bellevue, and Redmond. No subcontractors, no call-center routing — just direct dispatch from our Kirkland base.",
  },
  {
    question: "Do you service heavy custom wood and carriage doors in Woodinville?",
    answer:
      "Yes — this is one of our primary specialties in Woodinville. Estate homes on Hollywood Hill and throughout the wine country corridor frequently feature heavy custom wood, wood-look steel, and carriage-style doors that weigh significantly more than standard residential doors. We calculate the exact IPPT (inch-pounds-per-turn) required for your specific door weight and install high-cycle, heavy-duty torsion springs rated for oversized systems. We also service oversized RV bays and shop doors common on Woodinville acreage properties.",
  },
  {
    question: "What should I do if my garage door spring breaks in Woodinville?",
    answer:
      "Turn off power to the opener and stop using the door immediately. A broken spring makes the door extremely heavy and unsafe to operate — forcing it risks damaging the opener, cables, and tracks. Call Zeus Garage Doors at 425-555-0199. We stock torsion and extension springs in over 10 sizes on every truck and complete most Woodinville spring replacements in a single same-day visit.",
  },
  {
    question: "Do you service properties in Cottage Lake, Hollywood Hill, and Bear Creek?",
    answer:
      "Yes. We regularly service homes throughout all Woodinville neighborhoods including Hollywood Hill, Cottage Lake, Wellington, Bear Creek, and Leota. Acreage properties and custom estate homes are a significant part of our Woodinville workload. Our trucks are stocked for heavy-duty systems — we don't carry just standard parts and then leave to order a specialty component.",
  },
  {
    question: "Which garage door opener brands do you install and service in Woodinville?",
    answer:
      "LiftMaster and Chamberlain are our primary stocked brands — we carry replacement motors, logic boards, remotes, and MyQ smart home modules. We also service Genie, Craftsman, Marantec, and most legacy systems. For high-use estate doors and heavy custom wood doors, we recommend the LiftMaster 8500W jackshaft opener, which mounts on the wall rather than the ceiling — ideal for properties with high ceilings, storage lofts, or exposed-beam garages common in Woodinville.",
  },
  {
    question: "Is same-day garage door repair available in Woodinville?",
    answer:
      "Yes. Same-day service in Woodinville is standard for us, not an upgrade tier. We are available Sunday through Thursday 6 AM–10 PM and Friday 6 AM–6 PM. Saturday is our only closed day. For urgent calls — broken springs, doors stuck open, cables snapped — we prioritize Woodinville dispatch directly from our Kirkland base.",
  },
];

const SERVICES = [
  {
    name: "Heavy-Duty Spring Replacement",
    href: "/services/spring-replacement",
    icon: Wrench,
    desc: "High-cycle torsion spring replacement engineered for Woodinville's heavy custom wood, carriage-style, and oversized estate doors. We calculate door weight and IPPT precisely — no guesswork.",
  },
  {
    name: "Opener Repair & Installation",
    href: "/services/opener-repair",
    icon: Zap,
    desc: "LiftMaster, Chamberlain, and Genie repair or new installation. Jackshaft wall-mount openers available for high-ceiling estate garages. Smart Wi-Fi and MyQ integration standard.",
  },
  {
    name: "Off-Track Door Repair",
    href: "/services/off-track-repair",
    icon: AlertTriangle,
    desc: "Emergency same-day off-track repair. Heavy estate doors that derail can cause serious structural damage — do not force the door. Call us immediately for safe realignment.",
  },
  {
    name: "Cable Replacement",
    href: "/services/cable-replacement",
    icon: Shield,
    desc: "Stainless-core lift cable replacement. Woodinville's Sammamish River Valley moisture corrodes standard galvanized cables faster than drier climates — we upgrade proactively.",
  },
  {
    name: "Panel Replacement",
    href: "/services/panel-replacement",
    icon: CheckCircle,
    desc: "Section replacement for dented, cracked, or weather-damaged panels. Available for Clopay, Amarr, Wayne Dalton, and custom wood-look products common in the Hollywood Hill area.",
  },
  {
    name: "New Door Installation",
    href: "/services/new-installation",
    icon: Home,
    desc: "Full door replacement — carriage-house, insulated steel, real wood, and glass-panel designs. Opener installation included. We match the architectural character of your Woodinville property.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Hollywood Hill",
    blurb: "Woodinville's signature estate neighborhood. Heavy custom wood and carriage doors are the norm here — we specialize in the heavy-duty hardware these homes demand.",
  },
  {
    name: "Cottage Lake",
    blurb: "Established family homes and larger acreage properties near the lake. We service all door types and spring systems in this neighborhood for same-day repairs.",
  },
  {
    name: "Wellington",
    blurb: "Quiet residential community bordering the Sammamish River corridor. Elevated moisture warrants regular cable and spring inspections — we cover Wellington directly.",
  },
  {
    name: "Downtown Woodinville",
    blurb: "The wine country hub, including the Hollywood District. Town homes and newer residential development near the tasting rooms benefit from our full service offering.",
  },
  {
    name: "Bear Creek",
    blurb: "Dense wooded acreage properties with heavy shade and high moisture. Premium rust-resistant hardware upgrades available for homes in the Bear Creek area.",
  },
  {
    name: "Leota",
    blurb: "Suburban homes in the Leota corridor receive the same same-day response as our core Eastside markets — full parts inventory on every truck.",
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
  { name: "Woodinville, WA", url: "/locations/woodinville-wa" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WoodinvilleLocation() {
  return (
    <>
      <SEOHead
        title="Garage Door Repair Woodinville WA | Same-Day Service | Zeus Garage Doors"
        description="Expert garage door repair in Woodinville, WA. Heavy-duty springs for custom wood doors, opener repair, off-track service & new installations. Based in Kirkland — same-day response. Call 425-555-0199."
        canonical="/locations/woodinville-wa"
        pageType="location"
        cityName="Woodinville"
        serviceName="Garage Door Repair Woodinville WA"
        serviceDescription={DIRECT_ANSWER}
        faqs={WOODINVILLE_FAQS}
        breadcrumbs={BREADCRUMBS}
      />

      <main id="main-content">

        {/* ── HERO ────────────────────────────────────────────────────────── */}
        <section
          className="relative bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28"
          aria-label="Garage door repair in Woodinville hero"
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy/90"
            aria-hidden="true"
          />
          {/* Subtle grid texture */}
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
                  Premium Service · Woodinville, WA
                </p>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-playfair leading-tight mb-5">
                  Garage Door Repair in Woodinville, WA
                </h1>

                {/* Direct answer block — featured snippet target */}
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

                {/* Premium Area Badge */}
                <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/40 rounded-full px-4 py-2 mb-7">
                  <MapPin size={14} className="text-gold flex-shrink-0" />
                  <span className="text-gold text-xs font-bold uppercase tracking-wide">
                    Kirkland-Based · Woodinville's Trusted Garage Door Specialist
                  </span>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:+14255550199"
                    className="bg-forest hover:bg-forest-dark text-white font-bold px-7 py-4 rounded-xl text-lg transition-colors shadow-lg"
                    aria-label="Call Zeus Garage Doors in Woodinville"
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

              {/* Right — QuoteForm (Placement #1) */}
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
                  Get Your Woodinville Quote
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
        <section className="py-16 lg:py-20 bg-offwhite" aria-labelledby="intro-woodinville">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 items-start">

              <FadeIn className="lg:col-span-2 space-y-5">
                <h2
                  id="intro-woodinville"
                  className="text-3xl lg:text-4xl font-bold text-navy font-playfair"
                >
                  Specialized Garage Door Service for Woodinville's Distinctive Homes
                </h2>

                <p className="text-charcoal leading-relaxed text-lg">
                  Woodinville is unlike any other community on the Eastside. The same region that hosts Washington's most celebrated winery district — with nearly 100 tasting rooms concentrated along the <strong>Hollywood District</strong> and Woodinville-Redmond Road NE — is also home to some of King County's most architecturally distinctive residential properties. Estate homes on <strong>Hollywood Hill</strong>, sprawling acreage parcels near Cottage Lake, and custom builds along Bear Creek share a common characteristic: they demand a higher standard of garage door service than the average residential call.
                </p>

                <p className="text-charcoal leading-relaxed">
                  Zeus Garage Doors is based in Kirkland, a short drive from Woodinville via SR-522. We built our Woodinville service practice specifically around the challenges these premium properties present — heavy custom wood carriage doors, RV bays, oversized shop doors, high-ceiling garages with exposed timber framing, and architectural glass-panel systems that require careful handling and precise hardware specification. When you call us for a Woodinville job, you're not getting a technician who usually handles standard suburban tract homes and is improvising on an estate door. You're getting a technician who has run these systems before and arrived with the right parts.
                </p>

                <p className="text-charcoal leading-relaxed">
                  We cover the full scope of residential garage door service in Woodinville: <a href="/services/spring-replacement" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">heavy-duty torsion spring replacement</a>, <a href="/services/opener-repair" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">garage door opener repair and installation</a>, <a href="/services/cable-replacement" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">lift cable replacement</a>, <a href="/services/off-track-repair" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">off-track door repair</a>, panel replacement, roller and hinge service, sensor alignment, weatherstrip replacement, and complete new door and opener installations. Every service is available same-day during our operating hours.
                </p>

                <p className="text-charcoal leading-relaxed">
                  Pricing is always confirmed in person, never over the phone. A Zeus technician arrives at your Woodinville property, assesses the door, spring type, door weight, and hardware condition, and gives you a flat-rate number before any work begins. No phone estimates because phone estimates are guesses — and on a custom wood carriage door, a guess can be significantly wrong in either direction.
                </p>

                {/* Local Climate Box */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 mt-4">
                  <h3 className="text-navy font-bold text-xl font-playfair mb-3">
                    How Woodinville's Environment Affects Your Garage Door
                  </h3>
                  <div className="space-y-3 text-charcoal/80 leading-relaxed">
                    <p>
                      Woodinville's position in the <strong>Sammamish River Valley</strong> creates a distinct microclimate — cooler, foggier, and consistently more humid than higher-elevation Eastside neighborhoods. Morning fog rolling in off the river and dense tree canopy throughout Hollywood Hill and Bear Creek means garage door hardware here faces a different oxidation profile than properties in sunnier corridors.
                    </p>
                    <p>
                      Standard builder-grade torsion springs — rated for 10,000 cycles and made with basic oil-tempered wire — are particularly vulnerable to Woodinville's persistent damp. Surface rust develops in the coil gaps, creating stress concentration points that cause springs to snap earlier than their cycle ratings suggest. For Woodinville homes, we default to <strong>high-cycle galvanized torsion springs (25,000+ cycles)</strong> and <strong>stainless-core lift cables</strong> wherever the door system accommodates them.
                    </p>
                    <p>
                      Wooden carriage doors — the signature aesthetic of Hollywood Hill estates — absorb moisture and expand seasonally, which gradually shifts their weight distribution and throws off spring tension. A wood door that operated smoothly in summer may feel noticeably heavier in January. If your opener is straining or your door seems unbalanced in the wet season, that's the environmental effect in action — not necessarily a hardware failure. We account for seasonal weight variation in every spring calculation we do for Woodinville's wood door inventory.
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
                    Serving Woodinville & All Eastside WA
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
                    Why Woodinville Homeowners Trust Zeus
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Specialists in heavy custom & wood doors",
                      "Based in Kirkland — nearby on SR-522",
                      "Licensed Washington state contractor",
                      "Full liability insurance on every job",
                      "In-person assessment — never phone quotes",
                      "High-cycle springs & stainless cables stocked",
                      "Over 85% of calls resolved in one visit",
                      "No upselling, no manufactured urgency",
                    ].map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-charcoal">
                        <span className="text-forest mt-0.5" aria-hidden="true">✓</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hours badge */}
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
        <section className="py-16 lg:py-20 bg-white" aria-labelledby="services-woodinville">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-12">
              <h2
                id="services-woodinville"
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair"
              >
                Garage Door Services in Woodinville, WA
              </h2>
              <p className="text-charcoal/60 mt-4 text-lg max-w-xl mx-auto">
                From emergency same-day spring replacement to full custom door installations — every service available for Woodinville's distinctive homes.
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service, i) => (
                <FadeIn key={service.href} delay={i * 0.06}>
                  <Link
                    to={service.href}
                    className="group block bg-offwhite rounded-2xl p-7 border border-transparent hover:border-forest hover:shadow-lg transition-all h-full"
                    aria-label={`${service.name} in Woodinville, WA`}
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

        {/* ── PREMIUM MARKET SECTION ──────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-offwhite" aria-labelledby="premium-woodinville">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <FadeIn>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  Built for Woodinville's Homes
                </p>
                <h2
                  id="premium-woodinville"
                  className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-5"
                >
                  Why Woodinville Demands a Different Level of Service
                </h2>
                <div className="space-y-4 text-charcoal leading-relaxed">
                  <p>
                    Most garage door companies are optimized for one thing: the standard 16×7 residential door on a tract home. They stock two spring sizes, one cable diameter, and one opener model. That works fine for Kirkland's suburban grid. It does not work for Hollywood Hill.
                  </p>
                  <p>
                    An estate home with a 10-foot-tall custom wood carriage door requires a different spring calculation, a higher-torque opener, and a technician who has worked on wood doors before — not one who's reading the door weight off a chart and hoping the math is close enough. Zeus Garage Doors carries an extended parts inventory specifically for Woodinville's heavier, more architecturally varied door systems.
                  </p>
                  <p>
                    Our commitment to Woodinville homeowners in plain terms:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Heavy-duty torsion springs calculated by door weight — not guessed",
                      "Jackshaft and wall-mount opener options for high-ceiling and loft-style garages",
                      "Custom wood door service including seal replacement and seasonal balance adjustment",
                      "A licensed Zeus technician dispatched directly — not a subcontractor",
                      "Flat-rate pricing confirmed on-site after a full door assessment",
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
                    Woodinville Coverage
                  </p>
                  <h3 className="font-playfair font-bold text-2xl mb-5">
                    Kirkland → Woodinville<br />
                    <span className="text-gold">Nearby via SR-522</span>
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    We've served homeowners on Hollywood Hill, in Cottage Lake, along the Sammamish River corridor, and throughout the wine country district. Woodinville isn't a secondary market for us — it's a primary service area with dedicated parts inventory and specialist knowledge of the door systems common here.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Response", value: "Same Day" },
                      { label: "One-Visit Fix Rate", value: "85%+" },
                      { label: "Days Available", value: "Sun–Fri" },
                      { label: "Spring Sizes Stocked", value: "10+" },
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
        <section className="py-16 lg:py-20 bg-white" aria-labelledby="pro-tips-woodinville">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                Expert Advice
              </p>
              <h2
                id="pro-tips-woodinville"
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-10"
              >
                Pro Tips for Woodinville Homeowners
              </h2>

              <div className="space-y-6">

                {/* Featured Snippet Block — "heavy garage door spring replacement" target */}
                <div className="bg-gold/8 border-l-4 border-gold rounded-r-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Wrench size={18} className="text-gold flex-shrink-0" />
                    <h3 className="text-navy font-bold text-lg font-playfair">
                      How to Know If Your Heavy Wood Door Needs a Spring Replacement
                    </h3>
                  </div>
                  <p className="text-charcoal leading-relaxed">
                    A heavy custom wood garage door that feels unusually difficult to lift manually, drifts down when stopped halfway, or causes your opener to strain and stall is showing signs of spring failure. Disconnect the opener and lift the door by hand to waist height — it should stay in place. If it drops, the springs have lost tension and need professional replacement. Do not continue using the opener with a failing spring system.
                  </p>
                  <a
                    href="tel:+14255550199"
                    className="inline-flex items-center gap-2 mt-4 text-forest font-semibold text-sm hover:underline"
                  >
                    📞 Call 425-555-0199 for same-day spring service →
                  </a>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-offwhite rounded-2xl p-6 border border-slate-200">
                    <h3 className="text-navy font-bold font-playfair mb-2">
                      Seasonal Balance Check for Wood Doors
                    </h3>
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      Wood carriage doors in Woodinville absorb moisture from fall through winter, adding meaningful weight and shifting spring balance. Schedule a balance check and tension adjustment in October — before the rainy season — and again in April when the door has dried out. This prevents premature spring failure and opener motor burnout.
                    </p>
                  </div>

                  <div className="bg-offwhite rounded-2xl p-6 border border-slate-200">
                    <h3 className="text-navy font-bold font-playfair mb-2">
                      Upgrade Your Cables Before They Snap
                    </h3>
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      Standard galvanized lift cables corrode faster in Woodinville's Sammamish River Valley moisture than in drier climates. If your cables show any reddish discoloration, fraying at the drum, or stiff sections, replace them before they snap. A snapped cable causes immediate off-track failure and can damage panels. We upgrade to stainless-core cables proactively on Woodinville service calls.
                    </p>
                  </div>

                  <div className="bg-offwhite rounded-2xl p-6 border border-slate-200">
                    <h3 className="text-navy font-bold font-playfair mb-2">
                      Jackshaft Openers for High-Ceiling Estate Garages
                    </h3>
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      If your Hollywood Hill or Cottage Lake garage has high ceilings, exposed timber beams, or a storage loft above the door, a standard trolley-rail opener may not fit. Wall-mount jackshaft openers — the LiftMaster 8500W is our recommendation — mount beside the door, keep the ceiling completely clear, and handle the heavy loads common in estate garages. We install these same-day.
                    </p>
                  </div>

                  <div className="bg-offwhite rounded-2xl p-6 border border-slate-200">
                    <h3 className="text-navy font-bold font-playfair mb-2">
                      Lubrication Schedule for Damp Climates
                    </h3>
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      Apply white lithium grease (not WD-40) to torsion springs, rollers, hinges, and tracks every four months in Woodinville — more frequently than the standard six-month recommendation for drier areas. The moisture from the Sammamish River Valley accelerates friction wear and surface oxidation. Consistent lubrication is the single most effective maintenance task you can do between service calls.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── NEIGHBORHOODS ───────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-offwhite" aria-labelledby="neighborhoods-woodinville">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="mb-10">
              <h2
                id="neighborhoods-woodinville"
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-4"
              >
                Garage Door Repair in Every Woodinville Neighborhood
              </h2>
              <p className="text-charcoal/70 text-lg max-w-2xl">
                From Hollywood Hill estates to Cottage Lake family homes, we cover every corner of Woodinville — same parts inventory, same licensed technicians, same same-day standard.
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
                      Garage Door Repair — {hood.name}, Woodinville
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
        <section className="py-12 bg-navy" aria-label="About Zeus serving Woodinville">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  Who We Are
                </p>
                <h2 className="text-2xl lg:text-3xl font-bold text-white font-playfair mb-4">
                  Kirkland-Based. Woodinville-Committed.
                </h2>
                <p className="text-white/70 leading-relaxed text-base mb-4">
                  Zeus Garage Doors is a locally owned and operated business based in Kirkland, WA. We're not a national franchise managing Woodinville calls through a regional dispatch pool — we're your neighbors on the Eastside, down SR-522. When you call us, you speak directly to our dispatch team. When we arrive at your Woodinville home or estate, we explain the issue honestly, quote you a flat rate, and complete the work that day.
                </p>
                <p className="text-white/70 leading-relaxed text-base">
                  Woodinville's premium residential market deserves a garage door company that treats it accordingly — with specialized knowledge of heavy custom door systems, premium hardware inventory, and a service standard that matches the quality of the properties we work on. That's the commitment Zeus makes to every Woodinville homeowner we serve.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <FAQAccordion
          items={WOODINVILLE_FAQS}
          title="Garage Door Repair in Woodinville — Frequently Asked Questions"
          subtitle="Straight answers for Woodinville homeowners about our service, custom doors, and what to expect."
          injectSchema={false}
        />

        {/* ── BOTTOM QUOTE FORM (Placement #2) ────────────────────────────── */}
        <section
          className="py-16 lg:py-20 bg-offwhite"
          aria-labelledby="bottom-quote-woodinville"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <FadeIn>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  Ready to Get Started?
                </p>
                <h2
                  id="bottom-quote-woodinville"
                  className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-4"
                >
                  Request Your Free Woodinville Estimate
                </h2>
                <p className="text-charcoal/70 text-lg mb-6">
                  Fill out the form and our dispatch team will call you back promptly during business hours. For urgent service, call us directly at{" "}
                  <a href="tel:+14255550199" className="text-forest font-semibold hover:underline">
                    425-555-0199
                  </a>.
                </p>
                <ul className="space-y-3">
                  {[
                    "Specialists in heavy custom & wood carriage doors",
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
          className="bg-forest py-16 lg:py-20"
          aria-labelledby="cta-woodinville"
        >
          <div className="max-w-3xl mx-auto px-4 text-center">
            <FadeIn>
              <h2
                id="cta-woodinville"
                className="text-3xl lg:text-4xl font-bold text-white font-playfair mb-4"
              >
                Need Garage Door Repair in Woodinville?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Zeus Garage Doors is your Eastside specialist — based in Kirkland, nearby on SR-522. Premium hardware, heavy-door expertise, and same-day service for every Woodinville neighborhood.
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
