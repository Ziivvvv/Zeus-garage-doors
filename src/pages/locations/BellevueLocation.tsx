/**
 * pages/locations/BellevueLocation.tsx — Zeus Garage Doors
 * Target: "Garage Door Repair Bellevue WA" — 1,600+ words
 * Schema: LocalBusiness + Service + FAQPage + BreadcrumbList via SEOHead
 * Strategy: Modern Glass & Aluminum Doors · Smart Opener Tech · Professional Positioning
 */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Shield, Wrench, MapPin, AlertTriangle, CheckCircle, Zap, Home, Cpu } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import FAQAccordion from "@/components/FAQAccordion";
import QuoteForm from "@/components/QuoteForm";

// ─── Content ──────────────────────────────────────────────────────────────────

const DIRECT_ANSWER =
  "Zeus Garage Doors provides same-day garage door repair in Bellevue, WA — specializing in modern glass and aluminum door systems, smart opener installation and commissioning, spring replacement, and off-track repair. Kirkland-based, we serve Somerset, Bridle Trails, Meydenbauer Bay, and every Bellevue neighborhood with the same professional standard we bring to our home market. Call 425-555-0199.";

const BELLEVUE_FAQS = [
  {
    question: "Do you repair modern glass and aluminum garage doors in Bellevue?",
    answer:
      "Yes — modern glass and aluminum door systems are our primary specialty in Bellevue. Tempered glass panel doors, full-view aluminum-frame systems, and contemporary frosted-glass designs require different handling than traditional steel doors: precise torque specs for the lighter frame weight, neoprene bottom-seal replacement, and hardware that won't corrode against aluminum. We carry the parts and have the experience to service these systems correctly in a single visit.",
  },
  {
    question: "Do you install smart garage door openers in Bellevue, WA?",
    answer:
      "Yes. We install and commission LiftMaster myQ-enabled openers, Chamberlain smart series, and wall-mount jackshaft models — including full Wi-Fi setup, smartphone app pairing, and auto-close scheduling. For Bellevue homeowners integrating with Amazon Alexa, Google Home, or Ring security ecosystems, we configure the myQ integration at the time of install. We also carry the LiftMaster 8500W wall-mount model for modern high-ceiling garages where a standard trolley-rail system won't fit cleanly.",
  },
  {
    question: "How does Somerset's hillside terrain affect garage door springs?",
    answer:
      "Somerset's steep inclines create a subtle but important effect: the gravity-assist on opening can mask spring tension loss that would be obvious on a flat driveway. A door that opens easily on an inclined driveway may actually have weakened springs that will fail under the full load of closing. We test Somerset doors using the mid-point manual lift test — disconnect the opener, lift the door to waist height, and release. A properly tensioned door holds in place. If it drifts in either direction, spring adjustment or replacement is needed.",
  },
  {
    question: "Do you service Bridle Trails and Meydenbauer Bay in Bellevue?",
    answer:
      "Yes. Bridle Trails is one of our regular service areas — large equestrian properties, oversized garage bays, and RV doors are common there, and our trucks are stocked with the heavy-duty hardware these systems require. Meydenbauer Bay's waterfront location places it in one of the highest-corrosion environments on our Eastside service map. We use stainless-core lift cables and heavily galvanized springs as standard on Meydenbauer Bay calls — not as an upgrade.",
  },
  {
    question: "What is your service schedule for Bellevue garage door repair?",
    answer:
      "We are available Sunday through Thursday 6:00 AM to 10:00 PM, and Friday 6:00 AM to 6:00 PM. Saturday is our only closed day. Same-day service is standard for most Bellevue calls — not a premium tier. For urgent situations such as broken springs, doors stuck open, or cables snapped, we prioritize dispatch from our Kirkland base directly to your Bellevue address.",
  },
  {
    question: "What opener do you recommend for a Bellevue home with a glass garage door?",
    answer:
      "For glass-panel doors, we recommend belt-drive or jackshaft openers over chain-drive. Chain-drive vibration transmits through the opener rail and into the door, which can cause glass panels to rattle or — over time — stress the frame connections. The LiftMaster 8500W jackshaft mounts beside the door on the wall, eliminating ceiling rail entirely and producing near-silent operation. The myQ ecosystem connects to your smartphone and integrates with most major smart home platforms. We install and fully commission these same-day.",
  },
  {
    question: "Do you offer emergency garage door service after hours in Bellevue?",
    answer:
      "Yes. While our standard business hours are Sunday–Thursday 6:00 AM–10:00 PM and Friday 6:00 AM–6:00 PM (Saturday closed), Zeus Garage Doors provides specialized emergency dispatch outside of regular business hours for urgent repairs in Bellevue. If a spring snaps overnight, your door is stuck open, or you have a security concern that cannot wait — call 425-555-0199 and our team will arrange emergency service.",
  },
];

const SERVICES = [
  {
    name: "Modern Glass & Aluminum Door Repair",
    href: "/services/panel-replacement",
    icon: Cpu,
    desc: "Tempered glass panel repair, aluminum frame service, bottom-seal replacement, and hardware maintenance for Bellevue's contemporary door systems. Proper torque specs and corrosion-resistant parts are standard.",
  },
  {
    name: "Spring Replacement",
    href: "/services/spring-replacement",
    icon: Wrench,
    desc: "High-cycle torsion spring replacement calibrated for your door's exact weight — including lighter aluminum-frame systems and heavier Somerset hillside doors. Professional service warranty on every installation.",
  },
  {
    name: "Smart Opener Installation",
    href: "/services/opener-repair",
    icon: Zap,
    desc: "LiftMaster myQ, Chamberlain smart series, and jackshaft wall-mount installation. Full Wi-Fi commissioning, app setup, and smart home integration (Alexa, Google Home, Ring). Same-day install.",
  },
  {
    name: "Off-Track Door Repair",
    href: "/services/off-track-repair",
    icon: AlertTriangle,
    desc: "Emergency same-day realignment for doors that have jumped a roller or derailed. Do not force a glass-panel door off its track — contact us immediately to prevent panel fracture.",
  },
  {
    name: "Cable Replacement",
    href: "/services/cable-replacement",
    icon: Shield,
    desc: "Stainless-core lift cables for Bellevue's waterfront and valley-corridor properties. Lake Washington and Meydenbauer Bay proximity accelerates standard cable corrosion — we upgrade proactively.",
  },
  {
    name: "New Door Installation",
    href: "/services/new-installation",
    icon: Home,
    desc: "Full-view glass, aluminum-frame, insulated contemporary panel, and traditional steel installation — with opener included. We match Bellevue's architectural aesthetic precisely.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Somerset",
    blurb: "Bellevue's premier hillside neighborhood. Inclined driveways require precision spring calibration — we test balance at mid-point lift, not just at full open.",
  },
  {
    name: "Bridle Trails",
    blurb: "Large equestrian properties with oversized garage bays and RV doors. Our trucks carry the heavy-duty hardware these homes demand — no waiting on parts orders.",
  },
  {
    name: "Meydenbauer Bay",
    blurb: "Waterfront proximity creates one of the highest-corrosion environments on the Eastside. Stainless-core cables and galvanized springs are standard — not optional — for Meydenbauer service calls.",
  },
  {
    name: "Downtown Bellevue",
    blurb: "High-rise condos, modern townhomes, and luxury developments with full-view glass systems. We are Bellevue's glass-door specialist — the right technician for contemporary architectural builds.",
  },
  {
    name: "Factoria",
    blurb: "Dense residential near I-90 and I-405. Same-day service for all major door brands and opener systems — springs, cables, sensors, and full new installations.",
  },
  {
    name: "Crossroads",
    blurb: "Diverse housing stock from multi-family to established single-family. We cover the full service spectrum from routine tune-ups to complete system replacements.",
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
  { name: "Bellevue, WA", url: "/locations/bellevue-wa" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BellevueLocation() {
  return (
    <>
      <SEOHead
        title="Garage Door Repair Bellevue WA | Modern Doors & Smart Openers | Zeus Garage Doors"
        description="Expert garage door repair in Bellevue, WA — modern glass & aluminum doors, smart opener installation, same-day spring & cable service. Kirkland-based, serving Somerset, Bridle Trails & Meydenbauer Bay. Call 425-555-0199."
        canonical="/locations/bellevue-wa"
        pageType="location"
        cityName="Bellevue"
        serviceName="Garage Door Repair Bellevue WA"
        serviceDescription={DIRECT_ANSWER}
        faqs={BELLEVUE_FAQS}
        breadcrumbs={BREADCRUMBS}
      />

      <main id="main-content">

        {/* ── HERO ────────────────────────────────────────────────────────── */}
        <section
          className="relative bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28"
          aria-label="Garage door repair in Bellevue hero"
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
                  Modern Doors · Smart Technology · Bellevue, WA
                </p>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-playfair leading-tight mb-5">
                  Garage Door Repair in Bellevue, WA
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
                      Kirkland-Based · Bellevue's Modern Door Specialist
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-red-500/15 border border-red-400/30 rounded-full px-4 py-2">
                    <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse flex-shrink-0" aria-hidden="true" />
                    <span className="text-red-300 text-xs font-bold uppercase tracking-wide">
                      Local 24/7 Emergency Garage Door Repair
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:+14255550199"
                    className="bg-forest hover:bg-forest-dark text-white font-bold px-7 py-4 rounded-xl text-lg transition-colors shadow-lg"
                    aria-label="Call Zeus Garage Doors in Bellevue"
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
                  Get Your Bellevue Quote
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
        <section className="py-16 lg:py-20 bg-offwhite" aria-labelledby="intro-bellevue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 items-start">

              <FadeIn className="lg:col-span-2 space-y-5">
                <h2
                  id="intro-bellevue"
                  className="text-3xl lg:text-4xl font-bold text-navy font-playfair"
                >
                  Garage Door Experts Built for Bellevue's Modern Standard
                </h2>

                <p className="text-charcoal leading-relaxed text-lg">
                  Bellevue's residential landscape has transformed dramatically over the past decade. The proliferation of tech-sector professionals, the wave of new luxury high-rises and contemporary townhomes in <strong>Downtown Bellevue</strong>, the premium hillside estates in <strong>Somerset</strong>, and the expansive equestrian properties in <strong>Bridle Trails</strong> have collectively raised expectations for every home service category — including garage doors. The standard corporate garage door company optimized for a 16-foot steel panel in a tract subdivision is not the right fit for a full-view glass door on a Bellevue new-build. Zeus Garage Doors is.
                </p>

                <p className="text-charcoal leading-relaxed">
                  We are based in Kirkland — a direct drive from Bellevue via I-405 or Bellevue-Redmond Road. But what sets us apart from both national dispatch companies and single-market locals is our specialist knowledge of the door systems that define modern Bellevue architecture. <strong>Tempered glass panel systems</strong>, <strong>full-view aluminum-frame doors</strong>, and <strong>contemporary frosted or clear-glass designs</strong> are now the dominant aesthetic in Bellevue's new construction. These systems require a different approach than traditional steel: precise torque calibration for lighter frame weights, neoprene seal replacement, and corrosion-resistant hardware that won't react against aluminum tracks and frames.
                </p>

                <p className="text-charcoal leading-relaxed">
                  We cover the full scope of residential garage door service in Bellevue: <a href="/services/panel-replacement" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">glass and aluminum door repair</a>, <a href="/services/spring-replacement" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">torsion spring replacement</a>, <a href="/services/opener-repair" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">smart opener installation and commissioning</a>, <a href="/services/cable-replacement" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">lift cable replacement</a>, <a href="/services/off-track-repair" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">off-track door repair</a>, weatherstrip replacement, sensor alignment, and complete new door installations. Every service is available same-day. All pricing is confirmed on-site after a full assessment — never over the phone.
                </p>

                <p className="text-charcoal leading-relaxed">
                  Bellevue's competitive landscape is crowded with national brands running franchise models — where your call routes to a regional call center, your technician is assigned from a contractor pool, and the person arriving at your property may have no specific experience with the door system you have. Zeus operates differently. When you call 425-555-0199, you reach our Kirkland dispatch team directly. The technician we send is a Zeus employee, not a subcontractor. They arrive with a fully stocked truck — and for Bellevue calls, that inventory includes parts specifically suited to glass-frame systems and high-corrosion waterfront environments.
                </p>

                {/* Local Environment Box */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 mt-4">
                  <h3 className="text-navy font-bold text-xl font-playfair mb-3">
                    How Bellevue's Environment Affects Your Garage Door
                  </h3>
                  <div className="space-y-3 text-charcoal/80 leading-relaxed">
                    <p>
                      <strong>Meydenbauer Bay and Lake Washington</strong> place a significant portion of Bellevue's residential stock within direct marine air exposure. Waterfront and near-waterfront properties see accelerated corrosion on all metal hardware — particularly lift cables, torsion spring coils, and track bracket fasteners. Standard galvanized cables that last years in drier inland areas can develop surface rust and micro-fraying in under two years in Meydenbauer Bay homes.
                    </p>
                    <p>
                      Bellevue's urban density also creates a localized heat island effect — slightly warmer and more humid than surrounding areas — which combines with marine air from the lake to degrade rubber and neoprene components faster. The <strong>bottom seal</strong> on a glass-panel door is the first casualty: neoprene degrades in UV and heat, losing its compression seal and allowing drafts, water intrusion, and eventually condensation between glass panes. Annual seal inspection is the most cost-effective preventive maintenance a Bellevue homeowner can schedule.
                    </p>
                    <p>
                      For all Bellevue service calls — and especially waterfront, Somerset hillside, and Bridle Trails properties — we default to <strong>high-cycle galvanized torsion springs</strong> and <strong>stainless-core lift cables</strong>. These are not upgrades we upsell. They are the appropriate specification for the environment your hardware lives in.
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
                    Serving Bellevue & All Eastside WA
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
                    Why Bellevue Homeowners Trust Zeus
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Specialists in glass & aluminum door systems",
                      "Smart opener install & full app commissioning",
                      "Based in Kirkland — direct dispatch to Bellevue",
                      "Licensed Washington state contractor",
                      "Full liability insurance on every job",
                      "In-person assessment — never phone quotes",
                      "Over 85% of calls resolved in one visit",
                      "100% Customer Satisfaction — guaranteed on every job",
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
                    <li>Sunday – Thursday: 6:00 AM – 10:00 PM</li>
                    <li>Friday: 6:00 AM – 6:00 PM</li>
                    <li className="text-charcoal/50">Saturday: Closed</li>
                    <li className="text-red-500/70 text-xs font-medium pt-1">
                      * 24/7 emergency dispatch available for urgent repairs.
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
        <section className="py-16 lg:py-20 bg-white" aria-labelledby="services-bellevue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-12">
              <h2
                id="services-bellevue"
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair"
              >
                Garage Door Services in Bellevue, WA
              </h2>
              <p className="text-charcoal/60 mt-4 text-lg max-w-xl mx-auto">
                Modern glass systems, smart opener tech, and traditional repairs — every service available same-day for Bellevue homes.
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service, i) => (
                <FadeIn key={service.href + service.name} delay={i * 0.06}>
                  <Link
                    to={service.href}
                    className="group block bg-offwhite rounded-2xl p-7 border border-transparent hover:border-forest hover:shadow-lg transition-all h-full"
                    aria-label={`${service.name} in Bellevue, WA`}
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

        {/* ── SMART TECH POSITIONING ──────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-offwhite" aria-labelledby="tech-bellevue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <FadeIn>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  Built for Bellevue's Standard
                </p>
                <h2
                  id="tech-bellevue"
                  className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-5"
                >
                  The Bellevue Homeowner's Expectation Has Changed
                </h2>
                <div className="space-y-4 text-charcoal leading-relaxed">
                  <p>
                    Bellevue is one of the most technology-integrated residential markets in the country. Amazon, Microsoft, and the broader tech ecosystem have shaped a homeowner culture where smart home integration is a baseline expectation — not a novelty. A garage door opener that doesn't connect to a smartphone app, integrate with Alexa, or trigger a Ring notification when it opens feels out of place in a neighborhood where every other system in the home is remotely monitored.
                  </p>
                  <p>
                    Zeus Garage Doors installs and fully commissions the <strong>LiftMaster myQ ecosystem</strong> — the most broadly integrated smart opener platform on the market. Our install includes Wi-Fi setup, smartphone app pairing on your device, auto-close scheduling, and integration walkthrough with your existing smart home system. We also carry the <strong>LiftMaster 8500W jackshaft</strong> for homes where a ceiling-rail trolley system isn't the right fit: high ceilings, storage lofts, exposed-beam structures, and modern builds where a clean garage ceiling is part of the architectural intent.
                  </p>
                  <p>
                    Our commitment to Bellevue homeowners:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Full smart opener commissioning — not just hardware install, but complete app and ecosystem setup",
                      "Glass and aluminum door expertise — correct torque specs, seal replacement, corrosion-resistant hardware",
                      "Jackshaft and wall-mount options for modern high-ceiling and loft-style garages",
                      "A licensed Zeus technician dispatched directly — not a subcontractor from a regional pool",
                      "Flat-rate pricing confirmed on-site after a full door and opener assessment",
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
                    Bellevue Coverage
                  </p>
                  <h3 className="font-playfair font-bold text-2xl mb-5">
                    Kirkland → Bellevue<br />
                    <span className="text-gold">Direct via I-405</span>
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    We've served homes in Somerset, Bridle Trails, Meydenbauer Bay, Downtown Bellevue, Factoria, and Crossroads. Bellevue is one of our highest-volume service areas — we maintain dedicated parts inventory for glass-frame systems and high-corrosion waterfront environments.
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

        {/* ── PRO TIPS ────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-white" aria-labelledby="pro-tips-bellevue">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                Expert Advice
              </p>
              <h2
                id="pro-tips-bellevue"
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-10"
              >
                Pro Tips for Bellevue Homeowners
              </h2>

              <div className="space-y-6">

                {/* Featured Snippet Block — "glass garage door repair Bellevue" target */}
                <div className="bg-gold/8 border-l-4 border-gold rounded-r-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Cpu size={18} className="text-gold flex-shrink-0" />
                    <h3 className="text-navy font-bold text-lg font-playfair">
                      How to Identify Seal Failure on a Glass Garage Door
                    </h3>
                  </div>
                  <p className="text-charcoal leading-relaxed">
                    A failing bottom seal on a glass garage door shows as visible daylight under the closed door, drafts felt at floor level, water intrusion after rain, or — in double-pane glass panels — condensation or fogging between the panes. Do not attempt to force a glass-panel door with a broken spring or compromised frame. Tempered glass can fracture under uneven load distribution. Call a technician to assess the system before operating it further.
                  </p>
                  <a
                    href="tel:+14255550199"
                    className="inline-flex items-center gap-2 mt-4 text-forest font-semibold text-sm hover:underline"
                  >
                    📞 Call 425-555-0199 for glass door service →
                  </a>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-offwhite rounded-2xl p-6 border border-slate-200">
                    <h3 className="text-navy font-bold font-playfair mb-2">
                      Annual Seal Inspection for Glass Doors
                    </h3>
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      Bellevue's marine air and urban heat island degrade neoprene bottom seals faster than inland climates. Schedule an annual inspection — particularly before the rainy season — to catch seal compression loss before it allows water into your garage. A failed seal on a glass-panel door can also cause condensation to form between panes, which is a more complex and costly repair.
                    </p>
                  </div>

                  <div className="bg-offwhite rounded-2xl p-6 border border-slate-200">
                    <h3 className="text-navy font-bold font-playfair mb-2">
                      Somerset Balance Test on Hillside Driveways
                    </h3>
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      On an inclined driveway, gravity-assist during opening can mask spring tension loss. Test balance by disconnecting the opener and lifting the door manually to waist height — then release. A correctly tensioned door holds in place. If it drifts open (gravity assist) or drops (undertension), spring adjustment is needed. Somerset homeowners should run this test seasonally, not just when the door feels wrong.
                    </p>
                  </div>

                  <div className="bg-offwhite rounded-2xl p-6 border border-slate-200">
                    <h3 className="text-navy font-bold font-playfair mb-2">
                      myQ Smart Diagnostics Before You Call
                    </h3>
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      LiftMaster myQ-connected openers display error codes in the app when a fault occurs. Before calling for service, open your myQ app and check the Activity log and any active alerts. Common codes — obstruction, sensor misalignment, motor overload — can help our dispatcher understand the problem before the technician arrives and ensure the right parts are on the truck.
                    </p>
                  </div>

                  <div className="bg-offwhite rounded-2xl p-6 border border-slate-200">
                    <h3 className="text-navy font-bold font-playfair mb-2">
                      Lubrication Cycle for Bellevue's Damp Corridor
                    </h3>
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      Apply white lithium grease — not WD-40 — to torsion springs, rollers, hinges, and track curves every four months in Bellevue. The marine air from Lake Washington and Meydenbauer Bay accelerates friction wear faster than drier inland areas. For aluminum-frame and glass-panel doors, use a silicone-based lubricant on the bottom seal channel to maintain compression and prevent tearing.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── NEIGHBORHOODS ───────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-offwhite" aria-labelledby="neighborhoods-bellevue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="mb-10">
              <h2
                id="neighborhoods-bellevue"
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-4"
              >
                Garage Door Repair in Every Bellevue Neighborhood
              </h2>
              <p className="text-charcoal/70 text-lg max-w-2xl">
                From Somerset's hillside estates to Meydenbauer Bay's waterfront homes — same licensed technicians, same same-day standard, same fully stocked truck.
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
                      Garage Door Repair — {hood.name}, Bellevue
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
        <section className="py-12 bg-navy" aria-label="About Zeus serving Bellevue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  Who We Are
                </p>
                <h2 className="text-2xl lg:text-3xl font-bold text-white font-playfair mb-4">
                  Kirkland-Based. Bellevue-Ready.
                </h2>
                <p className="text-white/70 leading-relaxed text-base mb-4">
                  Zeus Garage Doors is a locally owned and operated business based in Kirkland, WA. We are not a franchise — there is no national call center routing your job to whoever is available. When you call us, you reach our dispatch team. When we arrive at your Bellevue property, it is a Zeus employee, not a subcontractor, who rings your doorbell.
                </p>
                <p className="text-white/70 leading-relaxed text-base">
                  Bellevue's premium residential market — from Downtown's contemporary glass condos to Somerset's estate homes to Bridle Trails' expansive properties — sets a high bar for professional service. We've built our Bellevue operation around meeting that bar: specialized knowledge of modern door systems, smart opener technology, and the environmental conditions that affect hardware in this specific geography. That's what it means to be Bellevue-ready.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <FAQAccordion
          items={BELLEVUE_FAQS}
          title="Garage Door Repair in Bellevue — Frequently Asked Questions"
          subtitle="Straight answers for Bellevue homeowners about modern door systems, smart openers, and what to expect."
          injectSchema={false}
        />

        {/* ── BOTTOM QUOTE FORM (Placement #2) ────────────────────────────── */}
        <section
          className="py-16 lg:py-20 bg-offwhite"
          aria-labelledby="bottom-quote-bellevue"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <FadeIn>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  Ready to Get Started?
                </p>
                <h2
                  id="bottom-quote-bellevue"
                  className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-4"
                >
                  Request Your Free Bellevue Estimate
                </h2>
                <p className="text-charcoal/70 text-lg mb-6">
                  Fill out the form and our dispatch team will call you back promptly during business hours. For urgent service, call us directly at{" "}
                  <a href="tel:+14255550199" className="text-forest font-semibold hover:underline">
                    425-555-0199
                  </a>.
                </p>
                <ul className="space-y-3">
                  {[
                    "Glass & aluminum door specialists",
                    "Smart opener install & full commissioning",
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
          aria-labelledby="cta-bellevue"
        >
          <div className="max-w-3xl mx-auto px-4 text-center">
            <FadeIn>
              <h2
                id="cta-bellevue"
                className="text-3xl lg:text-4xl font-bold text-white font-playfair mb-4"
              >
                Need Garage Door Repair in Bellevue?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Zeus Garage Doors is your Eastside specialist — Kirkland-based, Bellevue-ready. Modern glass doors, smart opener tech, and same-day professional service for every neighborhood.
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
