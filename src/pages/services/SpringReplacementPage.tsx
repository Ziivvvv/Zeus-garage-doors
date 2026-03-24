/**
 * pages/services/SpringReplacementPage.tsx — Zeus Garage Doors
 * /services/spring-replacement
 * Target keywords: broken spring replacement Kirkland WA, torsion spring repair Bellevue
 */

import ServicePage from "../../components/ServicePage";
import { SPRING_FAQS } from "../../components/FAQAccordion";

export default function SpringReplacementPage() {
  return (
    <ServicePage
      metaTitle="Garage Door Spring Replacement in Kirkland, WA | Same Day | Zeus"
      metaDescription="Broken garage door spring? Zeus Garage Doors offers same-day torsion and extension spring replacement in Kirkland, Bellevue, Redmond, and Eastside WA. Licensed, local, honest pricing. Call 425-555-0199."
      canonical="/services/spring-replacement"
      serviceName="Garage Door Spring Replacement"
      serviceTagline="Broken springs are the #1 cause of garage door failure in the Pacific Northwest. We replace both springs same-day across Kirkland, Bellevue, and all Eastside WA communities."
      directAnswer="Zeus Garage Doors replaces broken torsion and extension springs same-day in Kirkland, Bellevue, Redmond, and the Eastside WA area. We always replace both springs at once and back our work with a parts and labor warranty. Call 425-555-0199 for a free on-site assessment."
      heroImage={{
        src: "/images/garage-door-spring-replacement-kirkland-wa.webp",
        alt: "Garage door torsion spring replacement in Kirkland WA",
        title:
          "Zeus Garage Doors technician replacing torsion spring on residential garage door in Kirkland, Washington",
      }}
      whatWeDoItems={[
        "Complete torsion spring replacement (single and double-spring systems)",
        "Extension spring replacement for one-piece and sectional doors",
        "Spring size assessment based on door weight, height, and cycle requirements",
        "Both springs replaced simultaneously — the right way to do it",
        "Cable and drum inspection included with every spring job",
        "Spring tension calibration for smooth, balanced door operation",
        "Safety containment cable installation for extension spring systems",
        "Post-installation door balance test and opener force adjustment",
        "Full explanation of findings before any work begins",
      ]}
      warningSignsItems={[
        "Garage door won't open or is extremely heavy to lift manually",
        "Loud bang from garage — spring snapped (common in cold PNW mornings)",
        "Door opens a few inches then stops",
        "Visible gap in torsion spring above the door",
        "Door feels unbalanced — one side lower than the other",
        "Opener straining, grinding, or reversing when opening",
        "Cables hanging loose or pulled off the drums",
        "Door slams shut instead of lowering smoothly",
      ]}
      whyZeusPoints={[
        {
          icon: "⚡",
          heading: "Same-Day Service",
          body: "Most spring replacements in Kirkland and the Eastside are completed the same day you call. We stock high-cycle springs for residential doors of all sizes.",
        },
        {
          icon: "💰",
          heading: "Honest Upfront Pricing",
          body: "We assess in person and give you an exact price before touching anything. No phone quotes — and no surprise line items when the job is done.",
        },
        {
          icon: "🔄",
          heading: "Both Springs, Every Time",
          body: "If one spring broke, the other is close behind. We always replace both — protecting your opener, your cables, and your wallet from a second service call in three months.",
        },
        {
          icon: "🏅",
          heading: "High-Cycle Springs",
          body: "We install commercial-grade, oil-tempered springs rated for 25,000–30,000 cycles — 2–3x the standard builder spring. Made to outlast PNW humidity.",
        },
        {
          icon: "📍",
          heading: "Locally Owned",
          body: "Zeus Garage Doors is based right here in Kirkland. When you call, you reach a local technician — not a national dispatch center routing jobs to unknown subcontractors.",
        },
        {
          icon: "🛡️",
          heading: "Warranty Backed",
          body: "All spring replacements are backed by a parts and labor warranty. If a spring fails prematurely due to defect or installation error, we come back — no charge.",
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
