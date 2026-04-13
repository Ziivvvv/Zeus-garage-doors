/**
 * pages/locations/KirklandLocation.tsx — Zeus Garage Doors
 * Target: "Garage Door Repair Kirkland WA" — 1,600+ words
 * Schema: LocalBusiness + Service + FAQPage + BreadcrumbList via SEOHead
 * Strategy: Home Base · Waterfront & Market Street · Most Trusted Local Neighbor
 */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Shield, Wrench, MapPin, AlertTriangle, CheckCircle, Zap, Home, Droplets } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import FAQAccordion from "@/components/FAQAccordion";
import QuoteForm from "@/components/QuoteForm";

// ─── Content ──────────────────────────────────────────────────────────────────

const DIRECT_ANSWER =
  "Zeus Garage Doors is Kirkland's home-base garage door repair company — same-day spring replacement, opener repair, off-track service, and cable replacement for every neighborhood from the waterfront to Finn Hill. Kirkland-based and locally owned, we are your actual neighbors. Call 425-555-0199.";

const KIRKLAND_FAQS = [
  {
    question: "How does living near Kirkland's waterfront affect my garage door hardware?",
    answer:
      "Kirkland's position on the eastern shore of Lake Washington exposes garage door hardware to near-constant lake moisture and marine air from Puget Sound. This microclimate accelerates oxidation on torsion spring coils, lift cables, and track bracket fasteners faster than inland areas. Standard galvanized hardware that lasts 5–7 years in Eastern Washington may show significant surface rust in under 3 years on Kirkland waterfront properties. We default to high-cycle galvanized torsion springs and stainless-core lift cables on all Kirkland service calls — not as an upsell, but as the correct specification for the environment.",
  },
  {
    question: "Do you service all Kirkland neighborhoods including Juanita and Finn Hill?",
    answer:
      "Yes — we cover every Kirkland neighborhood same-day: Juanita, Totem Lake, Finn Hill, Houghton, Bridle Trails, North Rose Hill, South Rose Hill, Kingsgate, Norkirk, Moss Bay, and the Highlands. All three Kirkland zip codes — 98033, 98034, and 98074 — are in our primary dispatch zone. Being Kirkland-based means no extra travel time and no surcharges for outer neighborhoods. If you're in Kirkland, you're in our backyard.",
  },
  {
    question: "What makes Zeus different from national garage door chains in Kirkland?",
    answer:
      "When you call a national franchise, your call routes to a regional call center, your job gets assigned to whoever in their contractor pool is available, and the technician who shows up may never have worked in Kirkland before. When you call Zeus, you reach our Kirkland dispatch team directly. The technician we send is a Zeus employee — not a subcontractor — who lives and works in this community. We assess every job in person because honest pricing requires seeing the problem firsthand, not quoting over the phone. We don't upsell, we don't create urgency, and we back every installation with a professional service warranty.",
  },
  {
    question: "My door runs fine in summer but sticks or binds in winter — is that a Kirkland problem?",
    answer:
      "Yes, this is a very common Kirkland-specific issue. The freeze-thaw cycles common between November and March cause door panels and frames to expand and contract, putting stress on track alignment, bottom seals, and weatherstripping. Kirkland's humidity means the wood or steel in older door panels absorbs moisture during wet months and swells. If your door binds, runs rough, or reverses unexpectedly in colder months, the most common culprits are track misalignment from thermal expansion, swollen bottom weatherstripping compressing against the floor seal, or torsion spring tension that was calibrated for summer-weight performance. A seasonal tune-up before November catches all three.",
  },
  {
    question: "How quickly can Zeus reach me in Kirkland for an emergency repair?",
    answer:
      "Because we are Kirkland-based, our dispatch response for true emergencies — a door stuck open, a broken spring preventing exit, a snapped cable — is typically 1–3 hours depending on current call volume. We don't offer a premium emergency tier that costs more than standard service. Same-day is our standard, and for Kirkland calls, that means same-day almost always means same-morning or same-afternoon. Call 425-555-0199 and our team will give you an honest ETA, not an optimistic one.",
  },
  {
    question: "Do you service older Kirkland homes from the 1970s and 1980s with original garage door systems?",
    answer:
      "Yes, and this is a significant part of our Kirkland workload. Many established Kirkland neighborhoods — Juanita, Houghton, Norkirk, and the older sections of Rose Hill — have original extension spring systems, one-piece tilt-up doors, and pre-safety-reverse openers that predate current code. We service and replace all of these. For older systems, we strongly recommend converting from extension springs to modern torsion springs: torsion systems are safer (no horizontal spring cables that can snap), easier to balance, and more durable in Kirkland's damp climate. We carry parts for all major brands including LiftMaster, Genie, Chamberlain, and Craftsman.",
  },
  {
    question: "Do you offer emergency garage door service after hours in Kirkland?",
    answer:
      "Yes. While our standard business hours are Sunday–Thursday 6:00 AM–10:00 PM and Friday 6:00 AM–6:00 PM (Saturday closed), Zeus Garage Doors provides specialized emergency dispatch outside of regular business hours for urgent repairs in Kirkland. If a spring snaps overnight, your door is stuck open, or you have a security concern that cannot wait — call 425-555-0199 and our team will arrange emergency service.",
  },
];

const SERVICES = [
  {
    name: "Spring Replacement",
    href: "/services/spring-replacement",
    icon: Wrench,
    desc: "Torsion and extension spring replacement calibrated for your door's exact weight. High-cycle galvanized springs standard for Kirkland's lake-moisture environment. Both springs replaced simultaneously for balanced operation.",
  },
  {
    name: "Opener Repair & Installation",
    href: "/services/opener-repair",
    icon: Zap,
    desc: "LiftMaster, Genie, and Chamberlain opener repair and installation. Belt-drive and jackshaft options for quiet operation. Smart myQ Wi-Fi openers with full app commissioning — same-day install.",
  },
  {
    name: "Off-Track Door Repair",
    href: "/services/off-track-repair",
    icon: AlertTriangle,
    desc: "Emergency same-day realignment for doors off rollers or derailed. Do not force a door that has left its track — contact us immediately to prevent panel damage and cable snap.",
  },
  {
    name: "Cable Replacement",
    href: "/services/cable-replacement",
    icon: Shield,
    desc: "Stainless-core lift cables for Kirkland's high-moisture environment. Lake Washington and Moss Bay proximity accelerates standard cable corrosion — we upgrade to appropriate spec as standard.",
  },
  {
    name: "Panel Replacement",
    href: "/services/panel-replacement",
    icon: Home,
    desc: "Damaged section replacement without full door replacement. Available for most major brands. Kirkland's freeze-thaw cycles can stress panel fasteners — we inspect the full door during every panel call.",
  },
  {
    name: "New Door Installation",
    href: "/services/new-installation",
    icon: Home,
    desc: "Full residential door installation with opener included. Steel, wood, glass, and carriage-style options to match Kirkland's architectural character. Full door and opener packages available.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Juanita",
    blurb: "Kirkland's lakeside neighborhood. Lake moisture accelerates spring corrosion — annual inspection is highly recommended for Juanita homes along NE 116th St and Juanita Drive.",
  },
  {
    name: "Totem Lake",
    blurb: "One of our most active Kirkland service areas near the Totem Lake Mall corridor. Springs, openers, and cable repairs handled same-day for all Totem Lake residential calls.",
  },
  {
    name: "Finn Hill",
    blurb: "Hillside properties with attached garages see added spring and track stress from steep driveways. We calibrate spring tension specifically for Finn Hill's incline geometry.",
  },
  {
    name: "Houghton",
    blurb: "Established homes near Lake Washington with some of the oldest garage door systems in Kirkland. We service and replace all opener and hardware brands — same-day, no parts wait.",
  },
  {
    name: "Bridle Trails",
    blurb: "Large equestrian properties with oversized garage bays. Heavy-duty hardware in stock for every Bridle Trails call — no special order delays for Kirkland's most expansive properties.",
  },
  {
    name: "Moss Bay",
    blurb: "Lakeside exposure on the Kirkland waterfront. Rust risk is highest in Moss Bay — stainless-core cables and high-galvanized springs are standard, not optional, for this neighborhood.",
  },
  {
    name: "Kingsgate",
    blurb: "Active service area near NE 132nd Street. Older homes with frequent opener and spring issues — our trucks are stocked with parts for all ages of hardware found in Kingsgate.",
  },
  {
    name: "North & South Rose Hill",
    blurb: "The full Rose Hill corridor is within our primary same-day dispatch zone. Spring, cable, opener, and off-track service for all Rose Hill residential properties.",
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
  { name: "Kirkland, WA", url: "/locations/kirkland-wa" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function KirklandLocation() {
  return (
    <>
      <SEOHead
        title="Garage Door Repair Kirkland WA | Same-Day Local Service | Zeus Garage Doors"
        description="Zeus Garage Doors — Kirkland's home-base garage door repair company. Same-day spring replacement, opener repair, cable service & off-track repair. Serving Juanita, Totem Lake, Finn Hill & all Kirkland neighborhoods. Call 425-555-0199."
        canonical="/locations/kirkland-wa"
        pageType="location"
        cityName="Kirkland"
        serviceName="Garage Door Repair Kirkland WA"
        serviceDescription={DIRECT_ANSWER}
        faqs={KIRKLAND_FAQS}
        breadcrumbs={BREADCRUMBS}
      />

      <main id="main-content">
        {/* ── HERO ────────────────────────────────────────────────────────── */}
        <section
          className="relative bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28"
          aria-label="Garage door repair in Kirkland hero"
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
                  Home Base · Waterfront · Most Trusted Local Neighbor
                </p>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-playfair leading-tight mb-5">
                  Garage Door Repair in Kirkland, WA
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
                      Based in Kirkland — Your Actual Neighbors
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
                    className="bg-gold hover:bg-gold-dark text-navy font-bold px-7 py-4 rounded-xl text-lg transition-colors shadow-lg"
                    aria-label="Call Zeus Garage Doors in Kirkland"
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
                  Get Your Kirkland Quote
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
        <section className="py-16 lg:py-20 bg-offwhite" aria-labelledby="intro-kirkland">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 items-start">

              <FadeIn className="lg:col-span-2 space-y-5">
                <h2
                  id="intro-kirkland"
                  className="text-3xl lg:text-4xl font-bold text-navy font-playfair"
                >
                  Kirkland's Own Garage Door Company — Not a Franchise
                </h2>

                <p className="text-charcoal leading-relaxed text-lg">
                  Kirkland is our home. When Zeus Garage Doors gets a call from a homeowner in <strong>Juanita</strong>, <strong>Moss Bay</strong>, or <strong>Finn Hill</strong>, we're not routing it to a regional call center or dispatching a subcontractor from a pool. We're a Kirkland-based team sending our own technician — usually within the same day — to a neighbor's door. That's a different relationship than what a national franchise offers, and it shows in how we work.
                </p>

                <p className="text-charcoal leading-relaxed">
                  Market Street and the Kirkland waterfront represent what makes this city distinct: a walkable downtown, a genuine community identity, and homeowners who care about the quality of every professional they let onto their property. We've built Zeus to match that standard. No phone quotes. No manufactured urgency. No upselling parts you don't need. When we arrive, we assess the full system, explain exactly what we found, and give you a flat-rate price before we touch anything.
                </p>

                <p className="text-charcoal leading-relaxed">
                  We cover the complete scope of residential garage door service: <a href="/services/spring-replacement" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">torsion and extension spring replacement</a>, <a href="/services/opener-repair" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">opener repair and smart opener installation</a>, <a href="/services/cable-replacement" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">lift cable replacement</a>, <a href="/services/off-track-repair" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">off-track door repair</a>, panel replacement, weatherstrip service, and complete new door installation. All of it available same-day. All pricing confirmed on-site — never over the phone.
                </p>

                <p className="text-charcoal leading-relaxed">
                  Kirkland's diverse housing stock — from the Craftsman bungalows near Norkirk to the newer townhomes in Kingsgate and the lakeside estates in Juanita — means no two service calls are exactly alike. Our trucks are stocked for the full range: standard residential torsion springs, heavy-duty hardware for oversized Bridle Trails doors, replacement opener boards for vintage Craftsman units, and LiftMaster smart openers for homeowners ready to upgrade. Over 85% of our Kirkland calls are resolved in a single visit because we arrive prepared for what the address actually needs.
                </p>

                {/* Local Environment Box */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 mt-4">
                  <h3 className="text-navy font-bold text-xl font-playfair mb-3">
                    How Kirkland's Lake Environment Affects Your Garage Door
                  </h3>
                  <div className="space-y-3 text-charcoal/80 leading-relaxed">
                    <p>
                      Kirkland's eastern shore position on Lake Washington creates a microclimate that is meaningfully harder on garage door hardware than the broader Pacific Northwest average. <strong>Marine air from Puget Sound</strong> funnels up the Lake Washington corridor and combines with <strong>lake moisture and seasonal rainfall</strong> to produce near-constant humidity levels that accelerate oxidation on all ferrous metal components.
                    </p>
                    <p>
                      Torsion spring coils are the first casualty. Surface rust develops in the coil gaps, reducing spring flexibility and accelerating metal fatigue — often well before the spring's rated cycle count is reached. Lift cables, particularly standard galvanized cables, develop micro-fraying at the drum attachment point where moisture collects and accelerates corrosion. Track bracket fasteners loosen as mounting hardware corrodes. Bottom weatherstripping loses compression as neoprene degrades in UV and moisture.
                    </p>
                    <p>
                      For Kirkland homes — and especially those within a few blocks of the waterfront, Moss Bay, or Juanita Beach — we default to <strong>high-cycle galvanized torsion springs</strong> and <strong>stainless-core lift cables</strong> as standard specification. Annual hardware inspection, particularly of springs and cable attachment points, is the most cost-effective preventive step a Kirkland homeowner can take.
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
                    Kirkland, WA — Home Base
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
                    Why Kirkland Homeowners Trust Zeus
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Based in Kirkland — we're your actual neighbors",
                      "Same-day across all 98033, 98034 & 98074 zip codes",
                      "Licensed Washington state contractor",
                      "Full liability insurance on every job",
                      "In-person assessment — never phone quotes",
                      "85%+ of calls resolved in a single visit",
                      "100% Customer Satisfaction — guaranteed",
                      "LiftMaster, Genie & Chamberlain stocked",
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
        <section className="py-16 lg:py-20 bg-white" aria-labelledby="services-kirkland">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-12">
              <h2
                id="services-kirkland"
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair"
              >
                Garage Door Services in Kirkland, WA
              </h2>
              <p className="text-charcoal/60 mt-4 text-lg max-w-xl mx-auto">
                Springs, openers, cables, panels, and complete installations — all available same-day for Kirkland homes.
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service, i) => (
                <FadeIn key={service.href + service.name} delay={i * 0.06}>
                  <Link
                    to={service.href}
                    className="group block bg-offwhite rounded-2xl p-7 border border-transparent hover:border-forest hover:shadow-lg transition-all h-full"
                    aria-label={`${service.name} in Kirkland, WA`}
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

        {/* ── LOCAL POSITIONING ───────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-offwhite" aria-labelledby="local-kirkland">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <FadeIn>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  The Kirkland Difference
                </p>
                <h2
                  id="local-kirkland"
                  className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-5"
                >
                  Kirkland's Waterfront Community Deserves Local Service
                </h2>
                <div className="space-y-4 text-charcoal leading-relaxed">
                  <p>
                    The Kirkland waterfront — from Marina Park south through Moss Bay and Carillon Point — is the heart of a community that takes quality seriously. The same independent, locally rooted character that defines Market Street's restaurants and businesses extends to how Kirkland homeowners choose professional services. They want someone who shows up on time, tells the truth about what they find, and does the work right.
                  </p>
                  <p>
                    Zeus was built for exactly that expectation. We are not a franchise. There is no national call center, no subcontractor pool, no manufactured urgency to sell you parts you don't need. Our technicians are Zeus employees who live in the communities they serve. When we send someone to your Kirkland home, we are accountable for their work because it reflects directly on our reputation in our own neighborhood.
                  </p>
                  <p>
                    Our commitment to Kirkland homeowners:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Kirkland-based dispatch — real neighbors, real accountability",
                      "Full system assessment before any pricing conversation",
                      "High-cycle hardware specified for lake-moisture environments",
                      "Smart opener installation with complete app commissioning",
                      "No upselling — we recommend what your door actually needs",
                      "85%+ one-visit fix rate — our truck arrives stocked for your call",
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
                    Kirkland Coverage
                  </p>
                  <h3 className="font-playfair font-bold text-2xl mb-5">
                    Every Kirkland Zip Code<br />
                    <span className="text-gold">98033 · 98034 · 98074</span>
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    From the Kirkland waterfront and Market Street to Finn Hill, Totem Lake, Bridle Trails, and every neighborhood in between — same-day standard, same licensed technician, same stocked truck.
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
        <section className="py-16 lg:py-20 bg-white" aria-labelledby="pro-tips-kirkland">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                Expert Advice
              </p>
              <h2
                id="pro-tips-kirkland"
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-10"
              >
                Pro Tips for Kirkland Homeowners
              </h2>

              <div className="space-y-6">

                {/* Featured Snippet Block */}
                <div className="bg-gold/8 border-l-4 border-gold rounded-r-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Droplets size={18} className="text-gold flex-shrink-0" />
                    <h3 className="text-navy font-bold text-lg font-playfair">
                      How to Spot Lake-Moisture Corrosion Before It Causes a Failure
                    </h3>
                  </div>
                  <p className="text-charcoal leading-relaxed">
                    On a dry morning, look at your torsion spring coils and lift cables. If you see reddish-orange surface rust on the spring coils, or dark discoloration and stiffness at the cable drum attachment point, corrosion is already underway. Do not ignore these signs — a corroded torsion spring can snap under normal load without warning. Call for a spring inspection before it becomes an emergency.
                  </p>
                  <a
                    href="tel:+14255550199"
                    className="inline-flex items-center gap-2 mt-4 text-forest font-semibold text-sm hover:underline"
                  >
                    📞 Call 425-555-0199 for a Kirkland spring inspection →
                  </a>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-offwhite rounded-2xl p-6 border border-slate-200">
                    <h3 className="text-navy font-bold font-playfair mb-2">
                      The Manual Balance Test
                    </h3>
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      Disconnect your opener and lift the door manually to waist height, then release. A properly tensioned door holds in place. If it drifts up or drifts down, spring adjustment is needed. Run this test twice yearly in Kirkland — particularly in October before the rainy season and in April after the freeze-thaw period.
                    </p>
                  </div>

                  <div className="bg-offwhite rounded-2xl p-6 border border-slate-200">
                    <h3 className="text-navy font-bold font-playfair mb-2">
                      Winterize Your Bottom Seal Early
                    </h3>
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      Kirkland's freeze-thaw cycles compress and crack neoprene bottom seals. A failed bottom seal allows cold air, water, and pests into your garage. Inspect the seal in September — before the first cold snap. If it's cracking, flattened, or missing sections, replace it before winter. A $40 seal replacement prevents $400+ in water damage.
                    </p>
                  </div>

                  <div className="bg-offwhite rounded-2xl p-6 border border-slate-200">
                    <h3 className="text-navy font-bold font-playfair mb-2">
                      Lubrication Schedule for PNW Humidity
                    </h3>
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      Apply white lithium grease — not WD-40 — to springs, rollers, hinges, and track curves every 4 months. In Kirkland's damp climate, friction wear progresses faster than dry-climate manuals suggest. For doors with nylon rollers, use a silicone-based spray on the roller stem bearings. Lubrication is the single highest-return maintenance task you can do yourself.
                    </p>
                  </div>

                  <div className="bg-offwhite rounded-2xl p-6 border border-slate-200">
                    <h3 className="text-navy font-bold font-playfair mb-2">
                      When to Convert Extension Springs to Torsion
                    </h3>
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      If your garage has horizontal extension springs above the door tracks — common in 1970s–80s Kirkland homes — consider converting to torsion. Extension spring cables can snap with significant force if the spring breaks. Torsion systems are safer, more adjustable, and last longer in humid environments. Conversion is a same-day job and meaningfully improves safety and performance.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── NEIGHBORHOODS ───────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-offwhite" aria-labelledby="neighborhoods-kirkland">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="mb-10">
              <h2
                id="neighborhoods-kirkland"
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-4"
              >
                Garage Door Repair in Every Kirkland Neighborhood
              </h2>
              <p className="text-charcoal/70 text-lg max-w-2xl">
                From the Kirkland waterfront and Market Street to Finn Hill and Kingsgate — same licensed technicians, same same-day standard, same fully stocked truck.
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                      Garage Door Repair — {hood.name}
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
        <section className="py-12 bg-navy" aria-label="About Zeus — Kirkland home base">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  Who We Are
                </p>
                <h2 className="text-2xl lg:text-3xl font-bold text-white font-playfair mb-4">
                  Kirkland-Based. Kirkland-Proud.
                </h2>
                <p className="text-white/70 leading-relaxed text-base mb-4">
                  Zeus Garage Doors is a locally owned business based in Kirkland, WA. We are not a franchise. There is no national call center routing your job to whoever is available. When you call 425-555-0199, you reach our Kirkland dispatch team. When a technician arrives at your door, it's a Zeus employee — not a subcontractor — who is accountable to the same community they live in.
                </p>
                <p className="text-white/70 leading-relaxed text-base">
                  Kirkland homeowners — whether they're in a waterfront estate off Lake Street, a craftsman bungalow in Norkirk, or a new townhome in Kingsgate — deserve a garage door company that treats their home with the same care they bring to it. That's why Zeus exists, and why Kirkland is where we're based. Not just a service area. Home.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <FAQAccordion
          items={KIRKLAND_FAQS}
          title="Garage Door Repair in Kirkland — Frequently Asked Questions"
          subtitle="Straight answers for Kirkland homeowners about springs, openers, lake-moisture hardware, and what to expect from Zeus."
          injectSchema={false}
        />

        {/* ── BOTTOM QUOTE FORM ───────────────────────────────────────────── */}
        <section
          className="py-16 lg:py-20 bg-offwhite"
          aria-labelledby="bottom-quote-kirkland"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <FadeIn>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  Ready to Get Started?
                </p>
                <h2
                  id="bottom-quote-kirkland"
                  className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-4"
                >
                  Request Your Free Kirkland Estimate
                </h2>
                <p className="text-charcoal/70 text-lg mb-6">
                  Fill out the form and our Kirkland dispatch team will call you back promptly during business hours. For urgent service, call directly at{" "}
                  <a href="tel:+14255550199" className="text-forest font-semibold hover:underline">
                    425-555-0199
                  </a>.
                </p>
                <ul className="space-y-3">
                  {[
                    "Kirkland-based — your actual neighbors",
                    "Same-day availability across all Kirkland zip codes",
                    "Licensed & insured WA contractor",
                    "Flat-rate pricing — confirmed on-site after assessment",
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
          aria-labelledby="cta-kirkland"
        >
          <div className="max-w-3xl mx-auto px-4 text-center">
            <FadeIn>
              <h2
                id="cta-kirkland"
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-4"
              >
                Need Garage Door Repair in Kirkland?
              </h2>
              <p className="text-navy text-lg mb-8">
                Zeus Garage Doors is Kirkland's home-base company — locally owned, locally operated, and ready to serve every neighborhood from the waterfront to Finn Hill. Same-day standard, every call.
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
