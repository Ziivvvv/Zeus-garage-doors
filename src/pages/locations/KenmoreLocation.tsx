/**
 * pages/locations/KenmoreLocation.tsx — Zeus Garage Doors
 * Target: "Garage Door Repair Kenmore WA" — 1,400+ words
 * Schema: LocalBusiness + Service + FAQPage + BreadcrumbList via SEOHead
 * Extended Area Emergency Response positioning · Local landmarks · QuoteForm ×2
 */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Shield, Wrench, MapPin, AlertTriangle, CheckCircle, Zap } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import FAQAccordion from "@/components/FAQAccordion";
import QuoteForm from "@/components/QuoteForm";

// ─── Content ──────────────────────────────────────────────────────────────────

const DIRECT_ANSWER =
  "Zeus Garage Doors provides same-day garage door repair in Kenmore, WA — covering broken spring replacement, opener repair, cable service, off-track repair, and new installations. Based in neighboring Kirkland, we provide a fast Extended Area Emergency Response to all Kenmore neighborhoods. Call 425-555-0199.";

const KENMORE_FAQS = [
  {
    question: "How far is Zeus Garage Doors from Kenmore, WA?",
    answer:
      "Our shop is based in Kirkland, WA — a short drive south of Kenmore via SR 522. We've built a dedicated Extended Area Emergency Response program specifically for Kenmore, Woodinville, Sammamish, and Issaquah residents so that our service quality matches what Kirkland homeowners experience.",
  },
  {
    question: "Do you offer same-day garage door repair in Kenmore?",
    answer:
      "Yes. Same-day garage door repair in Kenmore is our standard, not an upgrade. When you call before noon on most days, we can typically reach you within the same business day. For emergencies — broken springs, doors stuck open, cables snapped — we prioritize Kenmore dispatch and send a technician directly during business hours (Monday–Saturday).",
  },
  {
    question: "What is your emergency response time for garage door repairs in Kenmore?",
    answer:
      "Our Extended Area Emergency Response commitment for Kenmore means a licensed Zeus technician dispatched directly — not a subcontractor — with a fully stocked truck carrying torsion springs in multiple sizes, LiftMaster motors, lift cables, rollers, hinges, and track hardware. We aim to get to you fast, but we don't sign off on a stopwatch.",
  },
  {
    question: "My garage door came off its track — what should I do?",
    answer:
      "A garage door off its track is caused by a bent track, loose roller, or snapped cable. Turn off power to the opener immediately — do not force the door. A certified technician can realign the track and replace damaged rollers in a single visit, restoring safe operation within 60 minutes. Call 425-555-0199 for same-day off-track repair in Kenmore.",
  },
  {
    question: "How much does garage door spring replacement cost in Kenmore, WA?",
    answer:
      "Spring replacement cost in Kenmore depends on spring type (torsion vs. extension), door weight, and number of springs replaced. Zeus provides flat-rate pricing confirmed after an in-person assessment — we don't give phone quotes because we can't assess your specific spring size, cycle rating, or door weight without seeing it.",
  },
  {
    question: "Do you service LiftMaster and Chamberlain openers in Kenmore?",
    answer:
      "Yes — LiftMaster and Chamberlain are our primary stocked brands and our most common Kenmore service calls. We carry replacement motors, logic boards, remotes, and MyQ smart home modules. We also service Genie, Craftsman, Marantec, and most legacy systems. If your opener is beyond repair, we install new units same-day.",
  },
];

const SERVICES = [
  {
    name: "Broken Spring Replacement",
    href: "/services/spring-replacement",
    icon: Wrench,
    desc: "Torsion and extension spring replacement using high-cycle, oil-tempered springs rated for 25,000+ cycles. Kenmore's humidity demands better-than-standard hardware.",
  },
  {
    name: "Opener Repair & Installation",
    href: "/services/opener-repair",
    icon: Zap,
    desc: "LiftMaster, Chamberlain, and Genie repair or new installation. Same-day parts stocked. Smart Wi-Fi and MyQ integration available.",
  },
  {
    name: "Off-Track Door Repair",
    href: "/services/off-track-repair",
    icon: AlertTriangle,
    desc: "Emergency off-track service for doors that have jumped a roller, bent a track, or collapsed on one side. Do not operate the door — call us immediately.",
  },
  {
    name: "Cable Replacement",
    href: "/services/cable-replacement",
    icon: Shield,
    desc: "Lift cable replacement using stainless-core cables. Lake Washington moisture corrodes standard cables faster than inland areas — we upgrade proactively.",
  },
  {
    name: "Panel Replacement",
    href: "/services/panel-replacement",
    icon: CheckCircle,
    desc: "Damaged section replacement without full door replacement. Available for most major brands including Clopay, Amarr, and Wayne Dalton.",
  },
  {
    name: "New Door Installation",
    href: "/services/new-installation",
    icon: CheckCircle,
    desc: "Full garage door replacement with insulated steel, carriage-house, or custom wood-look panels. LiftMaster opener included in all installation packages.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Moorlands",
    blurb: "A quiet residential pocket near Holmes Point Drive NE. We serve Moorlands for same-day spring, cable, and opener repairs.",
  },
  {
    name: "Holmes Point",
    blurb: "Perched above Lake Washington, Holmes Point homes face elevated moisture exposure. Annual spring and cable inspection recommended.",
  },
  {
    name: "Kenmore Town Center",
    blurb: "Homes in the Town Center corridor, near the Kenmore Park & Ride and SR 522, are well within our extended service area.",
  },
  {
    name: "Juanita Drive NE Corridor",
    blurb: "The Juanita Drive NE corridor connecting Kenmore to Kirkland is one of our most active service routes. Fast response for all repairs.",
  },
  {
    name: "Saint Edward State Park Area",
    blurb: "Residential neighborhoods bordering Saint Edward State Park see high humidity from the forest canopy. Rust-resistant hardware upgrades available.",
  },
  {
    name: "Burke-Gilman Trail Neighborhoods",
    blurb: "Homes along the Burke-Gilman Trail corridor benefit from our full service offering — from tune-ups to emergency off-track repair.",
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
  { name: "Kenmore, WA", url: "/locations/kenmore-wa" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function KenmoreLocation() {
  return (
    <>
      <SEOHead
        title="Garage Door Repair Kenmore WA | Same-Day Service | Zeus Garage Doors"
        description="Expert garage door repair in Kenmore, WA. Broken springs, openers, off-track doors & cables. Based in nearby Kirkland — fast Extended Area Emergency Response. Call 425-555-0199."
        canonical="/locations/kenmore-wa"
        pageType="location"
        cityName="Kenmore"
        serviceName="Garage Door Repair Kenmore WA"
        serviceDescription={DIRECT_ANSWER}
        faqs={KENMORE_FAQS}
        breadcrumbs={BREADCRUMBS}
      />

      <main id="main-content">

        {/* ── HERO ────────────────────────────────────────────────────────── */}
        <section
          className="relative bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28"
          aria-label="Garage door repair in Kenmore hero"
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
                  Extended Area Service · Kenmore, WA
                </p>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-playfair leading-tight mb-5">
                  Garage Door Repair in Kenmore, WA
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

                {/* Extended Range Badge */}
                <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/40 rounded-full px-4 py-2 mb-7">
                  <Clock size={14} className="text-gold flex-shrink-0" />
                  <span className="text-gold text-xs font-bold uppercase tracking-wide">
                    Extended Area Emergency Response — Same-Day Service
                  </span>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:+14255550199"
                    className="bg-forest hover:bg-forest-dark text-white font-bold px-7 py-4 rounded-xl text-lg transition-colors shadow-lg"
                    aria-label="Call Zeus Garage Doors in Kenmore"
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

              {/* Right — QuoteForm (Placement #1: under hero) */}
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
                  Get Your Kenmore Quote
                </h2>
                <p className="text-charcoal/60 text-sm mb-5">
                  We'll call you back promptly during business hours (Mon–Sat).
                </p>
                <QuoteForm />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── INTRO ───────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-offwhite" aria-labelledby="intro-kenmore">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 items-start">

              <FadeIn className="lg:col-span-2 space-y-5">
                <h2
                  id="intro-kenmore"
                  className="text-3xl lg:text-4xl font-bold text-navy font-playfair"
                >
                  Local Garage Door Experts Serving Kenmore
                </h2>

                <p className="text-charcoal leading-relaxed text-lg">
                  Most garage door companies in the greater Seattle area anchor themselves to the biggest markets — Kirkland, Bellevue, and Redmond — and treat Kenmore as an afterthought. Zeus Garage Doors is different. While our shop is based in Kirkland, just a short drive south on SR 522, we built our Kenmore service program intentionally. We stock the same parts, dispatch the same licensed technicians, and hold ourselves to the same same-day service commitment in Kenmore that we do in our own backyard.
                </p>

                <p className="text-charcoal leading-relaxed">
                  Kenmore homeowners deserve the same quality of service that larger Eastside cities take for granted. Whether you live near <strong>Saint Edward State Park</strong>, along the <strong>Burke-Gilman Trail</strong> corridor, or in one of the quiet residential pockets off Juanita Drive NE, a broken garage door is an urgent problem — not a "schedule you for Thursday" situation. Our Kenmore-specific service commitment means a real technician with a fully stocked truck, not a subcontractor pulled from a dispatch pool.
                </p>

                <p className="text-charcoal leading-relaxed">
                  We handle the full spectrum of residential garage door repair and installation in Kenmore: <a href="/services/spring-replacement" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">broken torsion spring replacement</a>, <a href="/services/opener-repair" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">garage door opener repair and installation</a>, <a href="/services/cable-replacement" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">lift cable replacement</a>, <a href="/services/off-track-repair" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">off-track door repair</a>, panel replacement, roller and hinge service, sensor alignment, weatherstrip replacement, and full new door installation.
                </p>

                <p className="text-charcoal leading-relaxed">
                  What sets us apart isn't just geography — it's the way we work. Every job starts with an in-person assessment. We don't give phone quotes because we can't see your springs, cable condition, or track alignment over the phone. When our technician arrives at your Kenmore home, they explain exactly what failed, why it failed, and what the fair price to fix it is. No upselling. No manufactured urgency. No surprise fees when the job is done.
                </p>

                {/* Local Climate Box */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 mt-4">
                  <h3 className="text-navy font-bold text-xl font-playfair mb-3">
                    How Kenmore's Climate Affects Your Garage Door
                  </h3>
                  <div className="space-y-3 text-charcoal/80 leading-relaxed">
                    <p>
                      Kenmore's position between <strong>Lake Washington</strong> and the Sammamish River creates a persistently damp microclimate that accelerates wear on garage door hardware in ways that homeowners often don't notice until a spring snaps or a cable frays without warning.
                    </p>
                    <p>
                      The constant moisture from the lake and Kenmore's above-average annual rainfall causes surface oxidation on torsion springs and lift cables. Standard builder-grade springs — the ones most new construction homes ship with — are rated for 10,000 cycles. In Kenmore's humidity, those springs often develop micro-cracks well before that threshold, leading to sudden failure. We address this by defaulting to <strong>high-cycle oil-tempered torsion springs (25,000+ cycles)</strong> and stainless-core lift cables for all Kenmore service calls where the door will accommodate them.
                    </p>
                    <p>
                      The freeze-thaw cycles that hit Kenmore between November and February are equally destructive. Track brackets and hinge plates expand and contract with temperature swings, gradually loosening the hardware that keeps your door tracking straight. The dense tree canopy near Saint Edward State Park creates additional shade and moisture retention in neighborhoods bordering the park. If your door has started squeaking, grinding, or shaking during operation, that's the early warning sign to schedule service before it becomes an emergency.
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
                    Serving Kenmore & All Eastside WA
                  </h3>
                  <p className="text-white/60 text-sm mb-4">
                    Same-day service · Mon–Sat
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
                    Why Kenmore Homeowners Trust Zeus
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Fast Extended Emergency Response",
                      "Based in Kirkland — nearby on SR 522",
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

                {/* Distance badge */}
                <div className="bg-gold/10 border border-gold/30 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={16} className="text-gold flex-shrink-0" />
                    <p className="text-navy font-bold text-sm">Extended Service Area</p>
                  </div>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    Kenmore is part of our dedicated extended service area — a short drive from our Kirkland shop via SR 522. We cover Kenmore, Woodinville, Sammamish, and Issaquah with the same service standards as our home market.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── SERVICES ────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-white" aria-labelledby="services-kenmore">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-12">
              <h2
                id="services-kenmore"
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair"
              >
                Garage Door Services in Kenmore, WA
              </h2>
              <p className="text-charcoal/60 mt-4 text-lg max-w-xl mx-auto">
                From emergency same-day repair to full door installations — every service available in Kenmore.
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service, i) => (
                <FadeIn key={service.href} delay={i * 0.06}>
                  <Link
                    to={service.href}
                    className="group block bg-offwhite rounded-2xl p-7 border border-transparent hover:border-forest hover:shadow-lg transition-all h-full"
                    aria-label={`${service.name} in Kenmore, WA`}
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

        {/* ── EXTENDED SERVICE RADIUS ─────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-offwhite" aria-labelledby="extended-range">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <FadeIn>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  Our Commitment to Kenmore
                </p>
                <h2
                  id="extended-range"
                  className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-5"
                >
                  Extended Area Emergency Response — What It Actually Means
                </h2>
                <div className="space-y-4 text-charcoal leading-relaxed">
                  <p>
                    Most national garage door companies that appear in "Kenmore garage door repair" searches are routing your call to the nearest available contractor — sometimes 45–60 minutes away. You won't find out until they call to confirm your appointment window. That's not emergency service. That's a scheduling system.
                  </p>
                  <p>
                    Zeus Garage Doors maintains a true <strong>Extended Area Emergency Response</strong> for Kenmore and other communities within our extended service radius from Kirkland. When you call 425-555-0199, you're reaching the dispatcher who controls our actual technician schedule — not a national call center with no real-time visibility into our trucks.
                  </p>
                  <p>
                    Our commitment to Kenmore homeowners in plain terms:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "A licensed Zeus technician dispatched directly — not a subcontractor",
                      "Priority dispatch for true emergency calls (door stuck open, spring failure, car trapped inside)",
                      "The same fully stocked truck that serves Kirkland: torsion springs in 10+ sizes, LiftMaster motors, cables, rollers, track hardware, and sensors",
                      "One-visit fix rate over 85% — we resolve the majority of Kenmore calls in a single trip",
                      "Flat-rate pricing confirmed on-site, not over the phone",
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
                    Service Radius Coverage
                  </p>
                  <h3 className="font-playfair font-bold text-2xl mb-5">
                    Kirkland → Kenmore<br />
                    <span className="text-gold">Nearby via SR 522</span>
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    We've served homeowners in Moorlands, Holmes Point, along Juanita Drive NE, and throughout the neighborhoods bordering Saint Edward State Park and the Burke-Gilman Trail. Kenmore isn't a secondary market for us — it's a fully supported service area with dedicated response commitments.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Response Time", value: "Same Day" },
                      { label: "One-Visit Fix Rate", value: "85%+" },
                      { label: "Days Available", value: "Mon–Sat" },
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
        <section className="py-16 lg:py-20 bg-white" aria-labelledby="pro-tips">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                Expert Advice
              </p>
              <h2
                id="pro-tips"
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-10"
              >
                Pro Tips for Kenmore Homeowners
              </h2>

              <div className="space-y-6">

                {/* Featured Snippet Block — "garage door off track fix" target */}
                <div className="bg-gold/8 border-l-4 border-gold rounded-r-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle size={18} className="text-gold flex-shrink-0" />
                    <h3 className="text-navy font-bold text-lg font-playfair">
                      What To Do When Your Garage Door Comes Off Its Track
                    </h3>
                  </div>
                  <p className="text-charcoal leading-relaxed">
                    A garage door off its track is caused by a bent track, loose roller, or snapped cable. Turn off power to the opener immediately — do not force the door. A certified technician can realign the track and replace damaged rollers in a single visit, restoring safe operation within 60 minutes.
                  </p>
                  <a
                    href="tel:+14255550199"
                    className="inline-flex items-center gap-2 mt-4 text-forest font-semibold text-sm hover:underline"
                  >
                    📞 Call 425-555-0199 for emergency off-track repair →
                  </a>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-offwhite rounded-2xl p-6 border border-slate-200">
                    <h3 className="text-navy font-bold font-playfair mb-2">
                      Annual Inspection — Especially in Kenmore
                    </h3>
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      Because of the moisture from Lake Washington and the tree canopy near Saint Edward State Park, Kenmore garage door hardware ages faster than in drier climates. Schedule an annual inspection to catch spring fatigue, cable corrosion, and track misalignment before they become emergency calls.
                    </p>
                  </div>

                  <div className="bg-offwhite rounded-2xl p-6 border border-slate-200">
                    <h3 className="text-navy font-bold font-playfair mb-2">
                      Don't Ignore a Grinding or Shaking Door
                    </h3>
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      A door that makes new noises or vibrates during operation is signaling that rollers are worn, hinges are loose, or the spring balance has drifted. Addressing it with a professional tune-up today prevents a costly emergency spring replacement call in January when the door finally gives out.
                    </p>
                  </div>

                  <div className="bg-offwhite rounded-2xl p-6 border border-slate-200">
                    <h3 className="text-navy font-bold font-playfair mb-2">
                      Test Your Door Balance Monthly
                    </h3>
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      Disconnect your opener and manually lift the door halfway. If it stays in place, spring tension is correct. If it drifts down, the springs are losing tension and need adjustment. This 30-second test can tell you when to call before the spring breaks entirely.
                    </p>
                  </div>

                  <div className="bg-offwhite rounded-2xl p-6 border border-slate-200">
                    <h3 className="text-navy font-bold font-playfair mb-2">
                      Lubricate Twice a Year
                    </h3>
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      Apply lithium-based grease (not WD-40) to torsion springs, rollers, hinges, and tracks every six months. In Kenmore's wet climate, white lithium grease repels moisture while reducing friction — extending the life of every moving component by years.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── NEIGHBORHOODS ───────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-offwhite" aria-labelledby="neighborhoods-kenmore">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="mb-10">
              <h2
                id="neighborhoods-kenmore"
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-4"
              >
                Garage Door Repair in Every Kenmore Neighborhood
              </h2>
              <p className="text-charcoal/70 text-lg max-w-2xl">
                From Moorlands to Holmes Point, we cover every corner of Kenmore for same-day garage door repair, spring replacement, opener service, and more.
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
                      Garage Door Repair — {hood.name}, Kenmore
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
        <section className="py-12 bg-navy" aria-label="About Zeus serving Kenmore">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  Who We Are
                </p>
                <h2 className="text-2xl lg:text-3xl font-bold text-white font-playfair mb-4">
                  Kirkland-Based. Kenmore-Committed.
                </h2>
                <p className="text-white/70 leading-relaxed text-base mb-4">
                  Zeus Garage Doors is a locally owned and operated business based in Kirkland, WA. We're not a national franchise — we're your neighbors just down SR 522. When you call us, you speak to the owner. When we show up at your Kenmore home, we explain the problem honestly, give you a fair price, and complete the work that day.
                </p>
                <p className="text-white/70 leading-relaxed text-base">
                  We built our Extended Area service program because Kenmore, Woodinville, Sammamish, and Issaquah residents deserve the same response quality as Kirkland homeowners — and most local companies simply don't serve these areas with the same commitment. That gap is exactly why Zeus made the deliberate decision to staff and stock for same-day extended area coverage.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <FAQAccordion
          items={KENMORE_FAQS}
          title="Garage Door Repair in Kenmore — Frequently Asked Questions"
          subtitle="Straight answers for Kenmore homeowners about response times, pricing, and what to expect."
          injectSchema={false}
        />

        {/* ── BOTTOM QUOTE FORM (Placement #2) ────────────────────────────── */}
        <section
          className="py-16 lg:py-20 bg-offwhite"
          aria-labelledby="bottom-quote-kenmore"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <FadeIn>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  Ready to Get Started?
                </p>
                <h2
                  id="bottom-quote-kenmore"
                  className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-4"
                >
                  Request Your Free Kenmore Estimate
                </h2>
                <p className="text-charcoal/70 text-lg mb-6">
                  Fill out the form and our dispatch team will call you back promptly during business hours (Mon–Sat). For emergency service, call us directly at{" "}
                  <a href="tel:+14255550199" className="text-forest font-semibold hover:underline">
                    425-555-0199
                  </a>.
                </p>
                <ul className="space-y-3">
                  {[
                    "Fast emergency response in Kenmore",
                    "Licensed & insured WA contractor",
                    "Flat-rate pricing — confirmed on-site",
                    "Same-day availability, Monday–Saturday",
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
          aria-labelledby="cta-kenmore"
        >
          <div className="max-w-3xl mx-auto px-4 text-center">
            <FadeIn>
              <h2
                id="cta-kenmore"
                className="text-3xl lg:text-4xl font-bold text-white font-playfair mb-4"
              >
                Need Garage Door Repair in Kenmore?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Zeus Garage Doors is your same-day Eastside choice — based in Kirkland, nearby on SR 522. Same technicians, same stocked truck, same professional service warranty.
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
