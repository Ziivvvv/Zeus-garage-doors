/**
 * pages/locations/RedmondLocation.tsx — Zeus Garage Doors
 * Target: "Garage Door Repair Redmond WA" — 1,400+ words
 * Schema: LocalBusiness + Service + FAQPage + BreadcrumbList via SEOHead
 * Strategy: High-Tech Professional · Belt-Drive Silence · Battery Backup · Smart Home (myQ, HomeKit, Tesla)
 */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Shield, Wrench, MapPin, AlertTriangle, CheckCircle, Zap, Home, BatteryCharging } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import FAQAccordion from "@/components/FAQAccordion";
import QuoteForm from "@/components/QuoteForm";

// ─── Content ──────────────────────────────────────────────────────────────────

const DIRECT_ANSWER =
  "Zeus Garage Doors provides same-day garage door repair in Redmond, WA — specializing in ultra-quiet belt-drive opener installation, battery backup systems for PNW power outages, smart home integration (myQ, HomeKit, Tesla), and spring and cable replacement. Kirkland-based, we serve Education Hill, Overlake, Marymoor, and every Redmond neighborhood. Call 425-555-0199.";

const REDMOND_FAQS = [
  {
    question: "What is a belt-drive garage door opener and why is it ideal for Redmond homes?",
    answer:
      "A belt-drive opener uses a reinforced rubber belt instead of a metal chain to move the trolley, producing significantly less vibration and noise during operation. For Redmond's attached-garage homes — particularly where a home office, bedroom, or living space sits directly above or beside the garage — belt-drive operation means an opening or closing door no longer interrupts a call, a meeting, or sleep. We carry LiftMaster and Chamberlain belt-drive systems, including models with integrated DC motors that slow gradually at the end of travel for near-silent operation.",
  },
  {
    question: "Do you install battery backup garage door openers in Redmond, WA?",
    answer:
      "Yes. Battery backup is one of the most important features for Redmond homeowners. The Puget Sound region's storm season — particularly October through February — produces regular power outages that can leave a garage door inoperable for hours. Modern LiftMaster openers with integrated battery backup maintain full door operation through outages and alert you via the myQ app when power is lost. We install and commission these same-day. For homes with a Tesla Powerwall, the battery backup opener works seamlessly alongside whole-home backup power.",
  },
  {
    question: "Can my garage door opener integrate with HomeKit, Tesla, or myQ in Redmond?",
    answer:
      "Yes to all three. The LiftMaster myQ ecosystem integrates natively with Google Assistant, Amazon Alexa, and — via the myQ Home Bridge accessory — Apple HomeKit. Tesla vehicles with HomeLink can trigger an myQ-compatible opener directly from the car's touchscreen or via geofencing as you approach home. We handle full commissioning at the time of install: Wi-Fi setup, app pairing, HomeKit home configuration, and Tesla HomeLink programming. You leave with everything connected, not just the hardware installed.",
  },
  {
    question: "Do you service the Education Hill and Overlake / Microsoft Campus area?",
    answer:
      "Yes. Education Hill is one of our highest-volume Redmond service areas — established homes from the 1980s and 1990s with original extension spring systems and aging opener hardware that are overdue for a full system assessment. Overlake and the Microsoft Campus corridor are the opposite: dense with newer townhomes and condos where smart opener commissioning and belt-drive installations are the primary call type. We carry inventory for both ends of the spectrum on every Redmond truck.",
  },
  {
    question: "What is your service schedule for Redmond garage door repair?",
    answer:
      "We are available Sunday through Thursday 6:00 AM to 10:00 PM and Friday 6:00 AM to 6:00 PM. Saturday is our only closed day. Same-day service is standard for Redmond — not a premium option. We are based in neighboring Kirkland, a short drive across the 520 corridor, and dispatch directly from our Kirkland base — no subcontractor routing, no regional call center.",
  },
  {
    question: "How does Redmond's wet climate affect garage door springs and cables?",
    answer:
      "Redmond averages over 36 inches of rain annually and sits in a valley microclimate that keeps humidity elevated year-round. Standard builder-grade torsion springs — rated for 10,000 cycles using basic oil-tempered wire — develop surface oxidation in Redmond's persistent damp, causing micro-cracks that lead to premature snapping. Similarly, standard galvanized lift cables corrode at drum contact points faster in high-humidity environments. For all Redmond service calls, we default to high-cycle galvanized torsion springs (25,000+ cycles) and stainless-core lift cables wherever the door system accommodates them.",
  },
  {
    question: "Do you offer emergency garage door service after hours in Redmond?",
    answer:
      "Yes. While our standard business hours are Sunday–Thursday 6:00 AM–10:00 PM and Friday 6:00 AM–6:00 PM (Saturday closed), Zeus Garage Doors provides specialized emergency dispatch outside of regular business hours for urgent repairs in Redmond. If a spring snaps overnight, your door is stuck open, or you have a security concern that cannot wait — call 425-555-0199 and our team will arrange emergency service.",
  },
];

const SERVICES = [
  {
    name: "Belt-Drive Opener Installation",
    href: "/services/opener-repair",
    icon: Zap,
    desc: "Ultra-quiet LiftMaster and Chamberlain belt-drive systems for attached garages with adjacent living spaces, home offices, and bedrooms. Full Wi-Fi, myQ, HomeKit, and Tesla commissioning included.",
  },
  {
    name: "Battery Backup Systems",
    href: "/services/opener-repair",
    icon: BatteryCharging,
    desc: "LiftMaster integrated battery backup openers that keep your door operational through Redmond's PNW storm outages. myQ app alerts you the moment power goes out. Same-day installation.",
  },
  {
    name: "Spring Replacement",
    href: "/services/spring-replacement",
    icon: Wrench,
    desc: "High-cycle galvanized torsion spring replacement calibrated for your door's weight. Redmond's persistent humidity makes standard builder-grade springs a poor long-term choice — we upgrade proactively.",
  },
  {
    name: "Off-Track Door Repair",
    href: "/services/off-track-repair",
    icon: AlertTriangle,
    desc: "Emergency same-day realignment for doors that have jumped a roller or derailed. Do not force an off-track door — call us immediately for safe professional repair.",
  },
  {
    name: "Cable Replacement",
    href: "/services/cable-replacement",
    icon: Shield,
    desc: "Stainless-core lift cable replacement for Redmond's high-humidity environment. Standard galvanized cables corrode at drum contact points faster in the Sammamish Valley — we spec correctly from the start.",
  },
  {
    name: "New Door Installation",
    href: "/services/new-installation",
    icon: Home,
    desc: "Full insulated steel, contemporary glass, and carriage-style door installation with opener included. We match Redmond's mix of established neighborhood character and modern new-build aesthetics.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "Education Hill",
    blurb: "Redmond's established hillside neighborhood. Homes from the 1980s–90s often have original extension springs and aging openers — a full system assessment is the right starting point for these properties.",
  },
  {
    name: "Overlake / Microsoft Campus",
    blurb: "Dense townhomes and condos near the Microsoft campus. Belt-drive smart opener installation and commissioning is our primary call type in this corridor.",
  },
  {
    name: "Marymoor District",
    blurb: "Residential neighborhoods near Marymoor Park and the Sammamish River. Same-day service for all door brands and opener systems in this community-focused area.",
  },
  {
    name: "Bear Creek",
    blurb: "Rural-residential properties east of Redmond with larger garage systems, RV bays, and acreage doors. Full heavy-duty inventory on every service call.",
  },
  {
    name: "Grass Lawn",
    blurb: "Mid-density single-family homes. We cover the full service spectrum here — from routine spring replacements to complete smart opener upgrades.",
  },
  {
    name: "Willow Ridge",
    blurb: "Established mid-century homes with original hardware. Spring replacements, cable overhauls, and opener upgrades are the most common service calls in Willow Ridge.",
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
  { name: "Redmond, WA", url: "/locations/redmond-wa" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RedmondLocation() {
  return (
    <>
      <SEOHead
        title="Garage Door Repair Redmond WA | Belt-Drive, Battery Backup & Smart Openers | Zeus Garage Doors"
        description="Expert garage door repair in Redmond, WA — ultra-quiet belt-drive openers, battery backup, myQ/HomeKit/Tesla smart integration, same-day spring & cable service. Kirkland-based, serving Education Hill, Overlake & Marymoor. Call 425-555-0199."
        canonical="/locations/redmond-wa"
        pageType="location"
        cityName="Redmond"
        serviceName="Garage Door Repair Redmond WA"
        serviceDescription={DIRECT_ANSWER}
        faqs={REDMOND_FAQS}
        breadcrumbs={BREADCRUMBS}
      />

      <main id="main-content">

        {/* ── HERO ────────────────────────────────────────────────────────── */}
        <section
          className="relative bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28"
          aria-label="Garage door repair in Redmond hero"
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
                  Smart Tech · Silent Operation · Redmond, WA
                </p>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-playfair leading-tight mb-5">
                  Garage Door Repair in Redmond, WA
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
                      Kirkland-Based · Redmond's Smart Door Specialist
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
                    aria-label="Call Zeus Garage Doors in Redmond"
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

              {/* Right — QuoteForm #1 */}
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
                  Get Your Redmond Quote
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
        <section className="py-16 lg:py-20 bg-offwhite" aria-labelledby="intro-redmond">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 items-start">

              <FadeIn className="lg:col-span-2 space-y-5">
                <h2
                  id="intro-redmond"
                  className="text-3xl lg:text-4xl font-bold text-navy font-playfair"
                >
                  Garage Door Service Built for Redmond's Tech-Forward Homeowners
                </h2>

                <p className="text-charcoal leading-relaxed text-lg">
                  Redmond sits at the center of the Puget Sound tech corridor. Home to <strong>Microsoft's global headquarters</strong>, <strong>Nintendo of America</strong>, and a dense concentration of engineering and technology professionals, the city's residential culture reflects its industry — precise, high-expectation, and invested in how home systems perform. A garage door that makes noise, loses connectivity, or fails during a power outage is not just inconvenient in this context. It is a problem that a professional expects to be solved correctly, once.
                </p>

                <p className="text-charcoal leading-relaxed">
                  Zeus Garage Doors is based in neighboring Kirkland, a short drive from Redmond across the 520 corridor. We have built our Redmond service practice around three specific demands that define this market: <strong>silent operation</strong> for homes with attached garages adjacent to offices and living spaces, <strong>battery backup reliability</strong> for a region that sees regular storm outages between October and February, and <strong>full smart home commissioning</strong> for a client base that expects myQ, HomeKit, and Tesla integration to work on the first visit — not after three follow-up calls.
                </p>

                <p className="text-charcoal leading-relaxed">
                  We handle the full scope of residential garage door service in Redmond: <a href="/services/opener-repair" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">belt-drive and smart opener installation</a>, <a href="/services/spring-replacement" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">torsion spring replacement</a>, <a href="/services/cable-replacement" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">lift cable replacement</a>, <a href="/services/off-track-repair" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">off-track door repair</a>, weatherstrip replacement, sensor alignment, and full new door installations. Every service is available same-day. Pricing is confirmed on-site after a full assessment — never over the phone.
                </p>

                <p className="text-charcoal leading-relaxed">
                  Redmond's housing stock is unusually split. <strong>Education Hill</strong> and <strong>Willow Ridge</strong> are home to established 1980s and 1990s construction where original extension springs, aging openers, and worn cables are overdue for replacement. Meanwhile, <strong>Overlake</strong> and the corridors adjacent to the Microsoft campus are dense with newer townhomes and condos where the opener is the smart-home hub and everything else is a secondary concern. Zeus carries the right inventory for both ends of that spectrum — and we don't have to order parts and come back.
                </p>

                {/* Climate Box */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 mt-4">
                  <h3 className="text-navy font-bold text-xl font-playfair mb-3">
                    Redmond's Climate: What It Does to Garage Door Hardware
                  </h3>
                  <div className="space-y-3 text-charcoal/80 leading-relaxed">
                    <p>
                      Redmond averages over 36 inches of annual rainfall and sits in a valley microclimate that maintains elevated humidity throughout the year. The <strong>Sammamish River</strong> and the lowland basin that runs west toward Marymoor Park create persistent morning fog and damp air that accelerates oxidation on standard garage door hardware faster than most Eastside homeowners expect.
                    </p>
                    <p>
                      Builder-grade torsion springs — the type installed in most new construction — are rated for 10,000 cycles using basic oil-tempered wire. In Redmond's humidity, surface oxidation develops in the coil gaps within two to three years, creating stress concentration points that cause springs to snap earlier than the cycle count suggests. Lift cables suffer a related problem: corrosion at the drum contact point, where cable fraying begins invisibly before the visible outer strands show wear.
                    </p>
                    <p>
                      For all Redmond service calls, we default to <strong>high-cycle galvanized torsion springs (25,000+ cycles)</strong> and <strong>stainless-core lift cables</strong>. This is not an upsell — it is the correct hardware specification for the environment these components operate in. The cost difference is minimal. The service life difference is significant.
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
                    Serving Redmond & All Eastside WA
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
                    Why Redmond Homeowners Trust Zeus
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Belt-drive & smart opener specialists",
                      "Full myQ, HomeKit & Tesla commissioning",
                      "Battery backup installation & setup",
                      "Based in Kirkland — direct dispatch to Redmond",
                      "Licensed Washington state contractor",
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
        <section className="py-16 lg:py-20 bg-white" aria-labelledby="services-redmond">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-12">
              <h2
                id="services-redmond"
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair"
              >
                Garage Door Services in Redmond, WA
              </h2>
              <p className="text-charcoal/60 mt-4 text-lg max-w-xl mx-auto">
                From battery backup installs to spring replacements to full smart opener commissioning — every service available same-day for Redmond homes.
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service, i) => (
                <FadeIn key={service.name} delay={i * 0.06}>
                  <Link
                    to={service.href}
                    className="group block bg-offwhite rounded-2xl p-7 border border-transparent hover:border-forest hover:shadow-lg transition-all h-full"
                    aria-label={`${service.name} in Redmond, WA`}
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

        {/* ── TECH DEEP DIVE ──────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-offwhite" aria-labelledby="tech-redmond">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <FadeIn>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  Built for Redmond's Standard
                </p>
                <h2
                  id="tech-redmond"
                  className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-5"
                >
                  Silent, Connected, and Ready for a Power Outage
                </h2>
                <div className="space-y-4 text-charcoal leading-relaxed">
                  <p>
                    Three things define what a garage door system should do in a Redmond home. It should open and close without disturbing the home office meeting happening one floor up. It should keep working when a November windstorm takes out the block's power. And it should fit into the smart home environment — Alexa, HomeKit, Tesla, Google — that a tech professional has already built.
                  </p>
                  <p>
                    <strong>Belt-drive openers</strong> solve the noise problem completely. The rubber belt absorbs vibration that a metal chain would transmit through the rail and into the structure. Paired with a DC motor that ramps speed gradually at open and close, a modern belt-drive system is nearly inaudible from an adjacent room. For homes with a bedroom, office, or nursery above or beside the garage — which describes a significant portion of Redmond's attached-garage housing stock — this matters more than any other specification.
                  </p>
                  <p>
                    <strong>Battery backup</strong> solves the reliability problem. The Puget Sound region averages 18–22 significant storm events per year, with power outages concentrated in the fall and winter months. An opener without battery backup leaves the garage door inoperable during an outage — and manually releasing the trolley to open or close a 200-pound door by hand is not a reasonable expectation for every household member. LiftMaster's integrated battery backup models provide full operation and myQ connectivity through the outage, with automatic recharge when power returns.
                  </p>
                  <p>
                    Our commitment to Redmond homeowners:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Belt-drive installation with full myQ, HomeKit, Alexa, and Tesla commissioning",
                      "Battery backup setup including myQ power-loss alert configuration",
                      "High-cycle galvanized springs and stainless-core cables as standard — not an upgrade",
                      "A licensed Zeus technician from Kirkland dispatched directly — no subcontractors",
                      "Flat-rate pricing confirmed after an in-person assessment — never over the phone",
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
                    Redmond Coverage
                  </p>
                  <h3 className="font-playfair font-bold text-2xl mb-5">
                    Kirkland → Redmond<br />
                    <span className="text-gold">Short Drive via SR-520</span>
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    We've served homeowners on Education Hill, in Overlake, near Marymoor Park, in Bear Creek, Grass Lawn, and Willow Ridge. Redmond is one of our core Eastside markets — we maintain dedicated smart opener inventory and high-humidity hardware specs specifically for this service area.
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
        <section className="py-16 lg:py-20 bg-white" aria-labelledby="pro-tips-redmond">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                Expert Advice
              </p>
              <h2
                id="pro-tips-redmond"
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-10"
              >
                Pro Tips for Redmond Homeowners
              </h2>

              <div className="space-y-6">

                {/* Featured snippet — "battery backup garage door opener" target */}
                <div className="bg-gold/8 border-l-4 border-gold rounded-r-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <BatteryCharging size={18} className="text-gold flex-shrink-0" />
                    <h3 className="text-navy font-bold text-lg font-playfair">
                      Why Every Redmond Garage Door Opener Should Have Battery Backup
                    </h3>
                  </div>
                  <p className="text-charcoal leading-relaxed">
                    A garage door opener without battery backup is inoperable during a power outage. In the Puget Sound region, that means a door that cannot open or close on any of the 18–22 significant storm events the area sees annually. A battery backup opener maintains full operation and smart-app connectivity through an outage, then recharges automatically when power returns. For most Redmond homeowners, this is the single most valuable upgrade available for an existing opener system — and it can be installed same-day.
                  </p>
                  <a
                    href="tel:+14255550199"
                    className="inline-flex items-center gap-2 mt-4 text-forest font-semibold text-sm hover:underline"
                  >
                    📞 Call 425-555-0199 to upgrade your opener →
                  </a>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-offwhite rounded-2xl p-6 border border-slate-200">
                    <h3 className="text-navy font-bold font-playfair mb-2">
                      How to Set Up Tesla HomeLink with myQ
                    </h3>
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      Tesla vehicles with HomeLink can control an myQ-compatible opener directly from the car's touchscreen or via geofencing — the door opens automatically as you approach. Setup requires the myQ app, your Tesla's HomeLink configuration screen, and the opener's learn button. We configure this at time of install. If your current opener is HomeLink-incompatible, an myQ-enabled replacement is a same-day job.
                    </p>
                  </div>

                  <div className="bg-offwhite rounded-2xl p-6 border border-slate-200">
                    <h3 className="text-navy font-bold font-playfair mb-2">
                      Apple HomeKit Integration via myQ Home Bridge
                    </h3>
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      LiftMaster's myQ platform connects to Apple HomeKit through the myQ Home Bridge accessory — enabling full Siri voice control, Home app automation, and inclusion in HomeKit scenes and shortcuts. For households deeply invested in the Apple ecosystem, this is the cleanest integration path available. We carry the myQ Home Bridge and configure it alongside every compatible opener installation.
                    </p>
                  </div>

                  <div className="bg-offwhite rounded-2xl p-6 border border-slate-200">
                    <h3 className="text-navy font-bold font-playfair mb-2">
                      Spring Balance Test for Redmond's Damp Climate
                    </h3>
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      Redmond's humidity accelerates spring oxidation, which causes tension loss before the spring snaps. Test balance quarterly: disconnect the opener and lift the door manually to waist height, then release. A correctly tensioned door holds in place. If it drifts down or up, spring adjustment is needed. Annual professional inspection is the right maintenance interval for Redmond's humidity level.
                    </p>
                  </div>

                  <div className="bg-offwhite rounded-2xl p-6 border border-slate-200">
                    <h3 className="text-navy font-bold font-playfair mb-2">
                      Belt-Drive vs. Chain-Drive: The WFH Difference
                    </h3>
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      Chain-drive openers transmit mechanical vibration through the rail into the ceiling and wall structure — audible as a metallic rattle one or two rooms away. For a home office adjacent to the garage, this disrupts calls and focus multiple times a day. Belt-drive systems eliminate this vibration path entirely. If your garage is attached and your work schedule is at home, upgrading from chain to belt-drive is the most impactful single change you can make to your garage system.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── NEIGHBORHOODS ───────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-offwhite" aria-labelledby="neighborhoods-redmond">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="mb-10">
              <h2
                id="neighborhoods-redmond"
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-4"
              >
                Garage Door Repair in Every Redmond Neighborhood
              </h2>
              <p className="text-charcoal/70 text-lg max-w-2xl">
                From Education Hill's established homes to Overlake's modern builds — same licensed technicians, same same-day standard, same fully stocked truck.
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
                      Garage Door Repair — {hood.name}, Redmond
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
        <section className="py-12 bg-navy" aria-label="About Zeus serving Redmond">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  Who We Are
                </p>
                <h2 className="text-2xl lg:text-3xl font-bold text-white font-playfair mb-4">
                  Kirkland-Based. Redmond-Ready.
                </h2>
                <p className="text-white/70 leading-relaxed text-base mb-4">
                  Zeus Garage Doors is a locally owned and operated business based in Kirkland, WA — a short drive from Redmond via SR-520. We are not a franchise routing your call through a regional dispatch center. When you call us, you reach our team. When we arrive, it is a Zeus employee who rings your doorbell, assesses your door honestly, and gives you a flat-rate number before any work begins.
                </p>
                <p className="text-white/70 leading-relaxed text-base">
                  Redmond's tech-professional homeowner culture sets a high bar for service providers: knowledgeable, transparent, efficient, and capable of handling modern systems correctly on the first visit. That is the standard we hold ourselves to in every Redmond job — whether it is a belt-drive smart opener installation in Overlake or a spring overhaul on an Education Hill home that hasn't had professional service in a decade.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <FAQAccordion
          items={REDMOND_FAQS}
          title="Garage Door Repair in Redmond — Frequently Asked Questions"
          subtitle="Straight answers for Redmond homeowners about smart openers, battery backup, and what to expect."
          injectSchema={false}
        />

        {/* ── BOTTOM QUOTE FORM (Placement #2) ────────────────────────────── */}
        <section
          className="py-16 lg:py-20 bg-offwhite"
          aria-labelledby="bottom-quote-redmond"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <FadeIn>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  Ready to Get Started?
                </p>
                <h2
                  id="bottom-quote-redmond"
                  className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-4"
                >
                  Request Your Free Redmond Estimate
                </h2>
                <p className="text-charcoal/70 text-lg mb-6">
                  Fill out the form and our dispatch team will call you back promptly during business hours. For urgent service, call us directly at{" "}
                  <a href="tel:+14255550199" className="text-forest font-semibold hover:underline">
                    425-555-0199
                  </a>.
                </p>
                <ul className="space-y-3">
                  {[
                    "Belt-drive & battery backup specialists",
                    "Full myQ, HomeKit & Tesla commissioning",
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
          aria-labelledby="cta-redmond"
        >
          <div className="max-w-3xl mx-auto px-4 text-center">
            <FadeIn>
              <h2
                id="cta-redmond"
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-4"
              >
                Need Garage Door Repair in Redmond?
              </h2>
              <p className="text-navy text-lg mb-8">
                Zeus Garage Doors is your Eastside specialist — Kirkland-based, a short drive from Redmond via SR-520. Silent belt-drive tech, battery backup, smart home integration, and same-day professional service for every neighborhood.
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
