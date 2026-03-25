/**
 * pages/locations/MercerIslandLocation.tsx — Zeus Garage Doors
 * Target: "Garage Door Repair Mercer Island WA" — 1,500+ words
 * Schema: LocalBusiness + Service + FAQPage + BreadcrumbList via SEOHead
 * Strategy: High-End Luxury · I-90 Bridge Access · Lakefront Corrosion · Premium Door Aesthetics
 */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Shield, Wrench, MapPin, AlertTriangle, CheckCircle, Zap, Home, Star } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import FAQAccordion from "@/components/FAQAccordion";
import QuoteForm from "@/components/QuoteForm";

// ─── Content ──────────────────────────────────────────────────────────────────

const DIRECT_ANSWER =
  "Zeus Garage Doors provides premium, same-day garage door repair on Mercer Island, WA — specializing in custom wood doors, luxury glass and aluminum systems, heavy-duty spring replacement, and ultra-quiet jackshaft opener installation. Accessible via I-90 from Kirkland, serving both the North End and South End with hardware specified for Lake Washington's high-corrosion lakefront environment. Call 425-555-0199.";

const MERCER_ISLAND_FAQS = [
  {
    question: "How does Lake Washington's lakefront environment affect garage door hardware on Mercer Island?",
    answer:
      "Mercer Island is surrounded entirely by Lake Washington, which creates one of the most corrosive residential environments in the Puget Sound region. The combination of lake moisture, morning fog, and the marine air that circulates around the island means that all ferrous metal hardware — torsion springs, lift cables, track hardware, and fasteners — experiences accelerated oxidation year-round. Standard galvanized springs that might last 5–7 years on an inland property can show significant rust and metal fatigue in 2–3 years on Mercer Island waterfront homes. We address this by specifying heavily galvanized torsion springs, stainless-core lift cables, and marine-grade track hardware as standard for all Mercer Island service calls — not as a premium add-on.",
  },
  {
    question: "Do you repair custom wood and carriage-style garage doors on Mercer Island?",
    answer:
      "Yes — custom wood and carriage-style doors are among the most common systems we service on Mercer Island, and they require meaningfully different handling than standard steel doors. Custom wood doors weigh significantly more — often 400–600 lbs for a full carriage-door system — requiring heavy-duty torsion springs rated for that load, and high-torque openers that can handle the weight reliably. The LiftMaster 8500W jackshaft is particularly well-suited for heavy wood doors: it mounts beside the door, eliminates ceiling rail stress, and provides superior torque at low speed for smooth, quiet operation. We also service the hardware specific to carriage-door aesthetics: decorative hinges, handles, and the internal reinforcement brackets that maintain panel alignment on heavy swinging-style doors.",
  },
  {
    question: "Which garage door opener is best for a high-end Mercer Island home?",
    answer:
      "For Mercer Island's premium residential properties, we recommend the LiftMaster 8500W jackshaft wall-mount opener as the top-tier choice. It mounts beside the door on the wall — no overhead ceiling rail — for three key advantages: near-silent operation (ideal for homes with living spaces above or adjacent to the garage), full ceiling clearance for storage or architectural design, and superior performance with heavy custom wood and glass-panel doors. The 8500W integrates with the myQ ecosystem for smartphone control, real-time alerts, and auto-close scheduling. For properties where a ceiling-mount unit is preferred, the LiftMaster 87504 with battery backup and MyQ connectivity is our recommendation for quiet belt-drive performance with full smart home integration.",
  },
  {
    question: "How does the I-90 bridge access work for your service calls to Mercer Island?",
    answer:
      "The I-90 floating bridge makes Mercer Island one of the most accessible island communities in the region for service calls from our Kirkland base. From Kirkland, we travel south on I-405 to I-90 West, cross the bridge, and are on the island in typically 20–30 minutes outside of peak commute hours. For calls on the North End near the I-90 interchange, we can often be onsite in under 25 minutes. South End properties, farther from the bridge, add 5–10 minutes of island driving. We factor current I-90 bridge traffic into every ETA we give — the floating bridge has its own congestion patterns that we know well.",
  },
  {
    question: "My South End property is directly on Lake Washington — what hardware specification do I need?",
    answer:
      "For properties with direct water frontage on the South End, we treat the hardware specification as we would a marine application. Stainless-core lift cables are non-negotiable — standard galvanized cables corrode at the drum attachment point within 18 months in direct waterfront exposure. Torsion springs should be the highest-galvanization rating available, with full-length powder-coat finish on the coil body if possible. Roller bearings should be sealed — not open — to prevent water intrusion into the bearing race. All track fasteners and mounting hardware should be stainless or hot-dipped galvanized, not zinc-plated. Bottom seals should be inspected annually and replaced as soon as compression loss is visible, since water intrusion from a failed seal accelerates all other hardware corrosion. We inventory all of this specification for Mercer Island calls.",
  },
  {
    question: "Do you handle premium glass and aluminum doors for contemporary Mercer Island builds?",
    answer:
      "Yes. Mercer Island's newer construction and recent remodels frequently feature full-view glass and aluminum-frame garage doors — the same contemporary aesthetic that's prevalent in Bellevue and Redmond's premium market. These systems require specific handling: aluminum frames require torque-limited hardware installation to avoid stripping, glass panels must be handled with care during off-track realignment, and the bottom seal is a compression-fit neoprene channel rather than the flexible rubber seal used on steel doors. The LiftMaster 8500W jackshaft is particularly well-matched to glass-panel systems because it eliminates ceiling rail vibration that can stress aluminum frame connections and cause glass to rattle. We carry the parts and have the experience for these systems.",
  },
  {
    question: "Do you offer emergency garage door service after hours on Mercer Island?",
    answer:
      "Yes. While our standard business hours are Sunday–Thursday 6:00 AM–10:00 PM and Friday 6:00 AM–6:00 PM (Saturday closed), Zeus Garage Doors provides specialized emergency dispatch outside of regular business hours for urgent repairs on Mercer Island. If a spring snaps overnight, your door is stuck open, or you have a security concern that cannot wait — call 425-555-0199 and our team will arrange emergency service.",
  },
];

const SERVICES = [
  {
    name: "Custom & Luxury Door Repair",
    href: "/services/panel-replacement",
    icon: Star,
    desc: "Expert service for custom wood carriage doors, full-view glass systems, and premium aluminum-frame designs. Proper torque specs, marine-grade hardware, and discreet white-glove service standard.",
  },
  {
    name: "Heavy-Duty Spring Replacement",
    href: "/services/spring-replacement",
    icon: Wrench,
    desc: "High-cycle torsion springs rated for heavy custom wood and glass doors. Heavily galvanized coil finish for Lake Washington's corrosive lakefront environment. Calibrated for your door's exact weight.",
  },
  {
    name: "Jackshaft Opener Installation",
    href: "/services/opener-repair",
    icon: Zap,
    desc: "LiftMaster 8500W wall-mount installation — near-silent, no ceiling rail, full myQ smart home integration. The premium choice for high-end Mercer Island homes with custom door systems.",
  },
  {
    name: "Corrosion-Resistant Cable Replacement",
    href: "/services/cable-replacement",
    icon: Shield,
    desc: "Stainless-core lift cables as standard for all Mercer Island calls. Marine-grade hardware for direct waterfront properties where standard galvanized cables corrode in under two years.",
  },
  {
    name: "Off-Track Emergency Repair",
    href: "/services/off-track-repair",
    icon: AlertTriangle,
    desc: "Same-day realignment for glass, wood, and steel doors. Do not force a custom door off track — glass panels fracture under uneven load. Call immediately for safe, damage-free realignment.",
  },
  {
    name: "Luxury Door Installation",
    href: "/services/new-installation",
    icon: Home,
    desc: "Premium new door installation with opener — custom wood, full-view glass, and contemporary aluminum systems. Full packages that match Mercer Island's architectural standard. Openers included.",
  },
];

const NEIGHBORHOODS = [
  {
    name: "North End",
    blurb: "Fast same-day service for commuters needing I-90 access. Contemporary homes and lakefront properties near the bridge interchange — full parts inventory for modern door systems.",
  },
  {
    name: "South End",
    blurb: "Mercer Island's most exclusive waterfront estates. Direct lakefront exposure demands marine-grade hardware specification. We stock stainless cable and premium galvanized springs for every South End call.",
  },
  {
    name: "First Hill",
    blurb: "Elevated properties with attached garages. Quiet jackshaft opener installations for homes where the garage is below or adjacent to primary living spaces.",
  },
  {
    name: "Parkwood",
    blurb: "Family-oriented residential neighborhood. Reliable spring, cable, and opener service for active households. Same same-day standard as the island's premium waterfront areas.",
  },
  {
    name: "Roanoke",
    blurb: "Custom and carriage-style wood doors are common in Roanoke. Heavy-duty torsion springs, high-torque openers, and decorative hardware maintenance for these premium systems.",
  },
  {
    name: "Island Crest",
    blurb: "Central Mercer Island elevated properties with panoramic views. Contemporary and traditional door systems serviced with the same attention to quality and hardware specification.",
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
  { name: "Mercer Island, WA", url: "/locations/mercer-island-wa" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MercerIslandLocation() {
  return (
    <>
      <SEOHead
        title="Garage Door Repair Mercer Island WA | Luxury & Custom Door Specialists | Zeus Garage Doors"
        description="Premium garage door repair on Mercer Island, WA — custom wood, glass & aluminum door specialists. Jackshaft opener install, lakefront corrosion-resistant hardware, same-day I-90 bridge access. Serving North End & South End. Call 425-555-0199."
        canonical="/locations/mercer-island-wa"
        pageType="location"
        cityName="Mercer Island"
        serviceName="Garage Door Repair Mercer Island WA"
        serviceDescription={DIRECT_ANSWER}
        faqs={MERCER_ISLAND_FAQS}
        breadcrumbs={BREADCRUMBS}
      />

      <main id="main-content">
        {/* ── HERO ────────────────────────────────────────────────────────── */}
        <section
          className="relative bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28"
          aria-label="Garage door repair on Mercer Island hero"
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
                  Luxury Door Specialists · I-90 Bridge Access · Lakefront Corrosion Experts
                </p>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-playfair leading-tight mb-5">
                  Garage Door Repair on Mercer Island, WA
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
                      Kirkland-Based · I-90 Bridge Access · Premium Service Standard
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
                    aria-label="Call Zeus Garage Doors on Mercer Island"
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
                  Get Your Mercer Island Quote
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
        <section className="py-16 lg:py-20 bg-offwhite" aria-labelledby="intro-mercerisland">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 items-start">

              <FadeIn className="lg:col-span-2 space-y-5">
                <h2
                  id="intro-mercerisland"
                  className="text-3xl lg:text-4xl font-bold text-navy font-playfair"
                >
                  Premium Garage Door Service Built for Mercer Island's Standard
                </h2>

                <p className="text-charcoal leading-relaxed text-lg">
                  Mercer Island is one of the most exclusive residential communities in Washington State. The island's location — entirely surrounded by Lake Washington, connected to the mainland by the I-90 floating bridge — creates both an extraordinary environment for living and a uniquely challenging one for garage door hardware. The same lake views that define the island's appeal also generate the marine moisture that corrodes standard hardware in a fraction of its rated lifespan.
                </p>

                <p className="text-charcoal leading-relaxed">
                  Zeus Garage Doors approaches Mercer Island service with the premium standard the community demands. We do not send a technician with a van of standard residential parts and expect them to improvise around a 600-pound custom mahogany carriage door or a full-view glass panel system on a contemporary lakefront build. Our Mercer Island service calls are prepared differently: heavy-duty torsion spring inventory for large custom doors, stainless-core cables as standard rather than optional, and jackshaft opener hardware for the homes where ceiling-mount rail systems are architecturally incompatible with the space.
                </p>

                <p className="text-charcoal leading-relaxed">
                  We reach Mercer Island via the <strong>I-90 floating bridge</strong> from our Kirkland base — typically 20–30 minutes in normal traffic, with both the North End and South End accessible within a single dispatch. Our full service range is available same-day: <a href="/services/spring-replacement" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">heavy-duty spring replacement</a>, <a href="/services/opener-repair" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">jackshaft and belt-drive opener installation</a>, <a href="/services/cable-replacement" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">marine-grade cable replacement</a>, <a href="/services/off-track-repair" className="text-forest underline underline-offset-2 hover:text-forest-dark transition-colors">off-track repair for custom doors</a>, panel service, and complete luxury door installation. All pricing confirmed on-site after a full assessment.
                </p>

                <p className="text-charcoal leading-relaxed">
                  Mercer Island's residential character spans two distinct zones: the <strong>North End</strong>, with its convenience to the I-90 interchange, newer construction, and contemporary architectural styles; and the <strong>South End</strong>, with its deeper estate properties, mature landscaping, and direct waterfront estates where garage door hardware faces the most aggressive corrosion environment on the island. Both ends receive the same quality of service — but the South End specification for hardware is materially different from inland properties, and we account for that from the first call.
                </p>

                {/* Local Environment Box */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 mt-4">
                  <h3 className="text-navy font-bold text-xl font-playfair mb-3">
                    Mercer Island Lakefront Corrosion: What It Means for Your Hardware
                  </h3>
                  <div className="space-y-3 text-charcoal/80 leading-relaxed">
                    <p>
                      The same corrosion patterns we see at <strong>Meydenbauer Bay in Bellevue</strong> and <strong>Moss Bay in Kirkland</strong> appear on Mercer Island — amplified. Being an island, no part of the residential community is more than a few hundred yards from Lake Washington. Morning lake fog deposits moisture on all exposed surfaces before the day begins. Evening temperature drops cause condensation on metal hardware in attached garages. The result is a near-continuous wet-dry cycle that is more demanding on ferrous metal than either constant submersion or constant dry conditions.
                    </p>
                    <p>
                      Torsion spring coils corrode at the inter-coil gap where water collects and cannot evaporate between cycles. Lift cables corrode at the cable drum and bottom bracket, where stagnant water accelerates galvanic corrosion. Track hardware loosens as mounting fasteners corrode and lose grip in the substrate. Roller bearings seize as water intrudes through open bearing races.
                    </p>
                    <p>
                      Our response: <strong>marine-grade hardware as a default specification</strong>, not an upgrade. Stainless-core cables, highest-available galvanization on torsion springs, sealed roller bearings, and stainless or hot-dipped galvanized track fasteners. This hardware costs more than standard residential grade. We use it on Mercer Island because the environment demands it — and because cutting corners on hardware for a $4M lakefront estate is not an acceptable outcome.
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
                    Serving Mercer Island, WA
                  </h3>
                  <p className="text-white/60 text-sm mb-4">
                    Same-day · I-90 bridge access · Sun–Fri
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
                    Why Mercer Island Homeowners Trust Zeus
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Custom wood & carriage door specialists",
                      "Glass & aluminum luxury door expertise",
                      "Marine-grade hardware — standard, not optional",
                      "I-90 bridge access from Kirkland base",
                      "Jackshaft opener installs for premium homes",
                      "In-person assessment — never phone quotes",
                      "85%+ of calls resolved in a single visit",
                      "100% Customer Satisfaction — guaranteed",
                      "Discreet, professional service for every property",
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
        <section className="py-16 lg:py-20 bg-white" aria-labelledby="services-mercerisland">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-12">
              <h2
                id="services-mercerisland"
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair"
              >
                Garage Door Services on Mercer Island, WA
              </h2>
              <p className="text-charcoal/60 mt-4 text-lg max-w-xl mx-auto">
                Premium custom door repair, marine-grade hardware, and luxury opener installation — all available same-day via I-90 bridge access.
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service, i) => (
                <FadeIn key={service.href + service.name} delay={i * 0.06}>
                  <Link
                    to={service.href}
                    className="group block bg-offwhite rounded-2xl p-7 border border-transparent hover:border-forest hover:shadow-lg transition-all h-full"
                    aria-label={`${service.name} on Mercer Island, WA`}
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

        {/* ── LUXURY POSITIONING ──────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-offwhite" aria-labelledby="luxury-mercerisland">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <FadeIn>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  The Mercer Island Standard
                </p>
                <h2
                  id="luxury-mercerisland"
                  className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-5"
                >
                  Premium Doors Deserve Premium Service
                </h2>
                <div className="space-y-4 text-charcoal leading-relaxed">
                  <p>
                    A garage door on Mercer Island is not just a functional component — it is a visible architectural element on a property where design, materials, and curb appeal have been carefully considered. Custom mahogany carriage doors, full-view glass systems framed in powder-coated aluminum, and hand-finished cedar shake doors are not uncommon on Mercer Island estates. These doors require a technician who understands their construction, respects their finish, and uses the right hardware — not one who applies standard residential procedure and hopes for the best.
                  </p>
                  <p>
                    We approach every Mercer Island call with this understanding. For custom wood doors, that means checking the full spring and cable system for the door's actual weight — not a rated weight class. For glass and aluminum systems, it means torque-limited installation to prevent frame distortion. For waterfront properties, it means marine-grade hardware specification without being asked. And for every Mercer Island property, it means a technician who presents professionally, works without unnecessary noise or disruption, and leaves the property exactly as they found it.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Heavy-duty spring calibration for custom wood door weights",
                      "Jackshaft wall-mount openers for ceiling-clearance and silent operation",
                      "Marine-grade hardware as standard for lakefront properties",
                      "Glass and aluminum door expertise — proper torque and frame care",
                      "Discreet, professional service with no unnecessary disruption",
                      "85%+ one-visit resolution — fully stocked for Mercer Island specification",
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
                    Mercer Island Coverage
                  </p>
                  <h3 className="font-playfair font-bold text-2xl mb-5">
                    Kirkland → Mercer Island<br />
                    <span className="text-gold">via I-405 S / I-90 W</span>
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    North End, South End, Roanoke, Parkwood, First Hill, Island Crest — all covered same-day. I-90 floating bridge makes Mercer Island highly accessible from our Kirkland base. Typical travel: 20–35 minutes.
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
        <section className="py-16 lg:py-20 bg-white" aria-labelledby="pro-tips-mercerisland">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                Expert Advice
              </p>
              <h2
                id="pro-tips-mercerisland"
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-10"
              >
                Pro Tips for Mercer Island Homeowners
              </h2>

              <div className="space-y-6">

                {/* Featured Snippet Block */}
                <div className="bg-gold/8 border-l-4 border-gold rounded-r-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Star size={18} className="text-gold flex-shrink-0" />
                    <h3 className="text-navy font-bold text-lg font-playfair">
                      Annual Lakefront Hardware Inspection: What to Check
                    </h3>
                  </div>
                  <p className="text-charcoal leading-relaxed">
                    For Mercer Island waterfront properties, we recommend an annual hardware inspection covering: torsion spring coils (look for surface rust in the inter-coil gaps), cable attachment points at the drum and bottom bracket (look for discoloration, fraying, or strand separation), roller bearings (listen for grinding or roughness during manual operation), and track fastener tightness. Catching corrosion early prevents emergency failures. Spring and cable replacement on a maintenance schedule costs a fraction of the emergency call after a snap.
                  </p>
                  <a
                    href="tel:+14255550199"
                    className="inline-flex items-center gap-2 mt-4 text-forest font-semibold text-sm hover:underline"
                  >
                    📞 Call 425-555-0199 to schedule a Mercer Island inspection →
                  </a>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-offwhite rounded-2xl p-6 border border-slate-200">
                    <h3 className="text-navy font-bold font-playfair mb-2">
                      Custom Wood Door Weight Check
                    </h3>
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      Custom wood and carriage doors absorb moisture seasonally, making them heavier in winter than in summer. If your spring tension was set during summer on a dry door, the door may be undertensioned in wet months — causing the opener to strain or the door to fall when disconnected. A seasonal spring tension check for heavy wood doors is good practice, particularly heading into the wet season.
                    </p>
                  </div>

                  <div className="bg-offwhite rounded-2xl p-6 border border-slate-200">
                    <h3 className="text-navy font-bold font-playfair mb-2">
                      Why the 8500W Jackshaft Is the Right Choice Here
                    </h3>
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      For Mercer Island homes with living spaces above the garage or high architectural ceiling expectations, the LiftMaster 8500W jackshaft is the clear premium choice. No ceiling rail means no vibration transfer into the room above. No overhead hardware means the garage ceiling can be finished or used for storage. Near-silent operation. Full myQ smart connectivity. We install and commission these same-day — complete with app setup and smart home integration.
                    </p>
                  </div>

                  <div className="bg-offwhite rounded-2xl p-6 border border-slate-200">
                    <h3 className="text-navy font-bold font-playfair mb-2">
                      Glass Door Care in Lake Moisture
                    </h3>
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      Full-view glass panel doors on Mercer Island properties face condensation between panes if the bottom seal loses compression and allows humid lake air into the frame cavity. Annual bottom seal inspection — the neoprene compression channel at the floor — prevents this. Once condensation appears between panes, the glass unit must be replaced; the seal alone cannot fix it. Catch the seal before it reaches that point.
                    </p>
                  </div>

                  <div className="bg-offwhite rounded-2xl p-6 border border-slate-200">
                    <h3 className="text-navy font-bold font-playfair mb-2">
                      Lubrication for High-Humidity Environments
                    </h3>
                    <p className="text-charcoal/80 text-sm leading-relaxed">
                      Apply white lithium grease to torsion spring coils, roller stems, hinges, and track curves every 3–4 months on Mercer Island properties. Use silicone spray — not petroleum-based lubricants — on the bottom seal compression channel. For aluminum-frame glass doors, use a dry silicone lubricant on the frame slides and seals to prevent swelling and sticking. Do not use WD-40 on any garage door component — it displaces moisture temporarily but leaves a residue that attracts dirt and accelerates wear.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── NEIGHBORHOODS ───────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-offwhite" aria-labelledby="neighborhoods-mercerisland">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="mb-10">
              <h2
                id="neighborhoods-mercerisland"
                className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-4"
              >
                Garage Door Repair Across All of Mercer Island
              </h2>
              <p className="text-charcoal/70 text-lg max-w-2xl">
                North End to South End, waterfront estates to hillside homes — premium hardware specification, same-day access via I-90, professional service standard throughout.
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
                      Garage Door Repair — {hood.name}, Mercer Island
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
        <section className="py-12 bg-navy" aria-label="About Zeus serving Mercer Island">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  Who We Are
                </p>
                <h2 className="text-2xl lg:text-3xl font-bold text-white font-playfair mb-4">
                  Kirkland-Based. Mercer Island-Ready.
                </h2>
                <p className="text-white/70 leading-relaxed text-base mb-4">
                  Zeus Garage Doors is a locally owned business based in Kirkland, WA. We are not a franchise, and there is no national call center. Mercer Island is one of our most demanding service environments — and one we've built explicit capability for. Our trucks carry the marine-grade hardware, heavy-duty springs, and jackshaft opener equipment that the island's properties require.
                </p>
                <p className="text-white/70 leading-relaxed text-base">
                  Mercer Island homeowners have earned the right to expect professionalism, technical capability, and discretion from every service provider they allow onto their property. We bring all three — with the local knowledge that makes the difference between hardware that lasts and hardware that fails prematurely in one of the region's most demanding environments.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <FAQAccordion
          items={MERCER_ISLAND_FAQS}
          title="Garage Door Repair on Mercer Island — Frequently Asked Questions"
          subtitle="Answers for Mercer Island homeowners about lakefront hardware, custom wood doors, jackshaft openers, and premium service."
          injectSchema={false}
        />

        {/* ── BOTTOM QUOTE FORM ───────────────────────────────────────────── */}
        <section
          className="py-16 lg:py-20 bg-offwhite"
          aria-labelledby="bottom-quote-mercerisland"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <FadeIn>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                  Ready to Get Started?
                </p>
                <h2
                  id="bottom-quote-mercerisland"
                  className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-4"
                >
                  Request Your Free Mercer Island Estimate
                </h2>
                <p className="text-charcoal/70 text-lg mb-6">
                  Fill out the form and our team will call you back promptly during business hours. For urgent service, call directly at{" "}
                  <a href="tel:+14255550199" className="text-forest font-semibold hover:underline">
                    425-555-0199
                  </a>.
                </p>
                <ul className="space-y-3">
                  {[
                    "Custom wood, glass & aluminum door specialists",
                    "Marine-grade hardware for lakefront properties",
                    "I-90 bridge access — 20–35 min from Kirkland",
                    "Licensed & insured WA contractor",
                    "85%+ one-visit fix rate — premium inventory stocked",
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
          aria-labelledby="cta-mercerisland"
        >
          <div className="max-w-3xl mx-auto px-4 text-center">
            <FadeIn>
              <h2
                id="cta-mercerisland"
                className="text-3xl lg:text-4xl font-bold text-white font-playfair mb-4"
              >
                Need Garage Door Repair on Mercer Island?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Zeus Garage Doors reaches Mercer Island via the I-90 bridge — premium service for custom doors, marine-grade hardware for lakefront properties, and same-day professional care for every island neighborhood.
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
