/**
 * pages/services/SpringReplacementPage.tsx — Zeus Garage Doors
 * /services/spring-replacement
 *
 * SEO targets (from algorithm analysis, 2026-03-24):
 *   H1:  "Garage Door Spring Repair Kirkland WA"          ← exact match, 0/8 competitors have it
 *   H2s: semantic cluster — repair, services, maintenance, choose, garage, door
 *   Words: 1,250+ (avg competitor: 1,104)
 *   FAQ schema: 0% of competitors — massive gap, already implemented
 *   LocalBusiness schema: injected via SEOHead on every service page
 */

import ServicePage from "../../components/ServicePage";
import { SPRING_FAQS } from "../../components/FAQAccordion";

export default function SpringReplacementPage() {
  return (
    <ServicePage
      metaTitle="Garage Door Spring Repair Kirkland WA | Same-Day | Zeus Garage Doors"
      metaDescription="Broken garage door spring in Kirkland WA? Zeus Garage Doors provides same-day torsion and extension spring repair and replacement in Kirkland, Bellevue, Redmond, and all Eastside WA communities. Licensed, locally owned, honest flat-rate pricing. Call 425-555-0199."
      canonical="/services/spring-replacement"

      // serviceName stays clean — used in FAQ title, cities list, CTA, schema
      serviceName="Garage Door Spring Replacement"

      // pageH1 is the exact-match SEO keyword — rendered ONLY in the <h1> tag
      pageH1="Garage Door Spring Repair Kirkland WA"

      serviceTagline="Broken springs are the #1 cause of garage door failure in the Pacific Northwest. Zeus Garage Doors provides same-day torsion and extension spring repair across Kirkland, Bellevue, Redmond, and all Eastside WA communities."

      // Featured snippet block: 40-60 words, direct answer, voice-search optimized
      directAnswer="Zeus Garage Doors provides same-day garage door spring repair in Kirkland, WA and across the Eastside. We replace torsion and extension springs, always replace both at once, and back every job with a parts and labor warranty. Call 425-555-0199 for a free on-site assessment."

      heroImage={{
        src: "/images/garage-door-spring-replacement-kirkland-wa.webp",
        alt: "Garage door spring repair in Kirkland WA — Zeus Garage Doors technician",
        title:
          "Zeus Garage Doors technician performing torsion spring repair on residential garage door in Kirkland, Washington",
      }}

      // H2: "What's Included in Our Garage Door Spring Repair Services"
      // → hits: repair, services, garage, door
      whatWeDoHeading="What's Included in Our Garage Door Spring Repair Services"
      whatWeDoItems={[
        "Complete torsion spring repair and replacement (single and double-spring systems)",
        "Extension spring replacement for one-piece and sectional garage doors",
        "Spring size assessment based on door weight, height, and cycle requirements",
        "Both springs replaced simultaneously — always the right way to repair a garage door spring system",
        "Cable and drum inspection included with every garage door spring repair job",
        "Spring tension calibration for smooth, balanced door operation",
        "Safety containment cable installation for extension spring systems",
        "Post-installation door balance test and opener force adjustment",
        "Full explanation of findings and pricing before any garage door repair work begins",
      ]}

      // H2: "Warning Signs Your Garage Door Spring Needs Repair or Replacement"
      // → hits: repair, garage, door, spring
      warningSignsHeading="Warning Signs Your Garage Door Spring Needs Repair or Replacement"
      warningSignsItems={[
        "Garage door won't open or is extremely heavy to lift manually — classic broken spring symptom",
        "Loud bang from your garage — a snapped torsion spring (common on cold PNW mornings)",
        "Door opens a few inches then stops — opener can't overcome the spring tension loss",
        "Visible gap in the torsion spring above the door",
        "Door feels unbalanced — one side lower than the other when moving",
        "Opener straining, grinding, or reversing during a garage door open cycle",
        "Cables hanging loose or pulled off the drums — secondary sign of spring failure",
        "Door slams shut instead of lowering smoothly",
      ]}

      // H2: "Why Kirkland Homeowners Choose Zeus for Garage Door Repair"
      // → hits: choose, garage, door, repair, Kirkland
      whyZeusHeading="Why Kirkland Homeowners Choose Zeus for Garage Door Repair"
      whyZeusPoints={[
        {
          icon: "⚡",
          heading: "Same-Day Garage Door Spring Repair",
          body: "Most spring repairs in Kirkland and the Eastside are completed the same day you call. We stock high-cycle torsion and extension springs for residential garage doors of all sizes — no waiting for parts.",
        },
        {
          icon: "💰",
          heading: "Honest Upfront Pricing",
          body: "We assess your garage door spring damage in person and give you an exact price before touching anything. No phone quotes, no surprise line items when the repair is done. Flat-rate garage door service pricing, always.",
        },
        {
          icon: "🔄",
          heading: "Both Springs Replaced Every Time",
          body: "If one garage door spring broke, the other is close behind. We always replace both — protecting your opener motor, your cables, and your wallet from a second service call within months.",
        },
        {
          icon: "🏅",
          heading: "High-Cycle Springs for PNW Conditions",
          body: "We install commercial-grade, oil-tempered springs rated for 25,000–30,000 cycles — 2–3× the standard builder spring. Engineered to outlast Kirkland's humidity, wet winters, and temperature swings.",
        },
        {
          icon: "📍",
          heading: "Locally Owned in Kirkland",
          body: "Zeus Garage Doors is based right here in Kirkland, WA. When you call for garage door spring repair, you reach a local technician — not a national dispatch center routing jobs to unknown subcontractors.",
        },
        {
          icon: "🛡️",
          heading: "Warranty-Backed Spring Repair",
          body: "Every garage door spring repair is backed by a parts and labor warranty. If a spring fails due to a defect or installation error, we return at no charge — that's our commitment to Eastside homeowners.",
        },
      ]}

      // Content blocks: two editorial sections adding ~500 words
      // Semantic H2s hit: garage, door, spring, repair, maintenance, services, Kirkland
      contentBlocks={[
        {
          heading: "How Garage Door Spring Repair Works in Kirkland, WA",
          body: `When a garage door spring breaks in Kirkland, the counterbalance system that makes your heavy garage door easy to open fails completely. A standard residential garage door weighs between 130 and 350 pounds. Without a functioning spring, that entire weight falls on your opener motor — and in most cases, the door simply won't move at all.

Zeus Garage Doors technicians arrive at your Kirkland home, assess the full spring system, and identify the exact spring size your door requires. Garage door spring repair involves measuring the door's weight, height, and wire diameter to select the correct replacement spring. We never guess at spring sizes, and we never install undersized springs to save time.

For torsion spring systems — the most common type in Eastside WA homes — the repair involves safely unwinding the broken spring using professional winding bars, removing it from the torsion tube, and installing the correctly wound replacement. For extension spring systems found on older garage doors, we replace the springs on both sides and install safety containment cables to prevent dangerous projectile failure.

Every garage door spring repair service includes a full balance test: we disconnect the opener and manually lift the door to check that it holds position at mid-travel. If it doesn't, we readjust spring tension until the door is properly balanced before reconnecting the opener. This final step is what separates a professional garage door repair from a rushed fix.`,
        },
        {
          heading: "Garage Door Spring Maintenance for Washington State Homeowners",
          body: `Washington state's climate creates specific challenges for garage door spring maintenance. Kirkland and the greater Eastside experience 150+ days of rain annually, and that persistent moisture accelerates rust formation on spring coils — particularly in garages without climate control. Rust increases friction, creates stress points in the coil windings, and causes springs to fail years earlier than their rated cycle life.

The best maintenance practice for Kirkland homeowners is annual garage door spring lubrication. Use a silicone-based or lithium-based lubricant — never WD-40, which attracts dirt and accelerates oxidation. Apply lubricant to the coil windings of torsion springs and along the length of extension springs every 12 months, ideally before winter. A well-lubricated spring system runs quieter, operates more smoothly, and lasts significantly longer.

Beyond lubrication, watch for these maintenance signals: excessive noise during garage door operation, visible rust streaks on the spring coils, a door that feels slightly heavier when lifting manually, or an opener that seems to work harder than usual. Any of these signs indicate the spring system is under stress and due for inspection.

Zeus Garage Doors offers 21-point garage door maintenance tune-ups for Kirkland, Bellevue, Redmond, and all Eastside WA communities. A professional tune-up includes spring inspection, lubrication of all moving parts, cable and roller assessment, and opener force calibration — the most cost-effective way to avoid an emergency garage door repair call.`,
        },
      ]}

      relatedEntities={[
        "Torsion springs",
        "Extension springs",
        "Torque tube",
        "Cable drums",
        "Winding bars",
        "Spring wire gauge",
        "Inside diameter",
        "Left-wind / right-wind",
        "Counterbalance system",
        "UL 325 compliance",
        "Oil-tempered steel",
        "High-cycle springs",
        "Roller bearings",
        "End plates",
        "Safety cables",
        "Spring anchor bracket",
        "Door weight / IPPT",
      ]}

      faqs={SPRING_FAQS}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Spring Replacement", url: "/services/spring-replacement" },
      ]}
    />
  );
}
