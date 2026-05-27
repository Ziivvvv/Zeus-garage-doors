/**
 * pages/services/CableReplacementPage.tsx — Zeus Garage Doors
 * Target: Garage door cable replacement, snapped cables, frayed cables
 */

import ServicePage from "../../components/ServicePage";
import { GENERAL_FAQS, UNIVERSAL_FAQS } from "../../components/FAQAccordion";

export default function CableReplacementPage() {
  return (
    <ServicePage
      metaTitle="Garage Door Cable Replacement | Same Day Repair | Zeus"
      metaDescription="Snapped or frayed garage door cable? Do not open the door. Zeus Garage Doors provides same-day heavy-duty cable replacement in Kirkland, Bellevue & Redmond."
      canonical="/services/cable-replacement"
      serviceName="Cable Replacement"
      serviceTagline="Your cables hold the entire weight of the door. When they fray or snap, you need heavy-duty replacements immediately to prevent property damage."
      
      /* FEATURED SNIPPET TARGET */
      directAnswer="Zeus Garage Doors provides same-day garage door cable replacement in Seattle, Kirkland, Bellevue, and the Eastside. If your cable is snapped or frayed, the door is unsafe to operate. We use aircraft-grade galvanized steel cables to withstand PNW humidity. Call 425-448-6443 for fast service."
      heroImage={{
        src: "/images/services/real-photos/torsion-spring-cable-replacement-kirkland-wa.webp",
        alt: "Technician replacing a snapped garage door lift cable",
        title: "Heavy-Duty Lift Cable Replacement"
      }}
      whatWeDoItems={[
        "Remove snapped, frayed, or rusted lift cables safely",
        "Install high-tension, aircraft-grade galvanized steel cables",
        "Check cable drums for wear and proper alignment",
        "Re-balance the torsion springs to match the new cables",
        "Lubricate pulleys and bottom brackets to prevent future wear"
      ]}
      warningSignsItems={[
        "You see visible fraying, rusting, or unwinding on the metal cables",
        "The door is hanging slightly unevenly on one side",
        "A cable has completely snapped and is hanging loose",
        "The cables are slipping off the drums when operating",
        "The door feels extremely heavy or drops quickly when closing"
      ]}
      whyZeusPoints={[
        {
          icon: "🛡️",
          heading: "Aircraft-Grade Steel",
          body: "We don't use cheap builder-grade cables. Our cables are made of thick, galvanized steel built to lift massive weight without stretching."
        },
        {
          icon: "⚖️",
          heading: "Perfect Balance",
          body: "Replacing cables requires recalibrating the springs. Our technicians ensure your door is perfectly balanced so your opener motor isn't strained."
        },
        {
          icon: "🌧️",
          heading: "PNW Weather Ready",
          body: "Standard cables rust quickly in the damp Washington climate. Our coated cables are designed to resist oxidation and last years longer."
        },
        {
          icon: "🛡️",
          heading: "5-Year Warranty",
          body: "Every cable replacement comes backed by our 5-year parts and labor warranty — the strongest guarantee in the Eastside. If anything fails, we come back at no charge."
        }
      ]}
      contentBlocks={[
        {
          heading: "What Are Garage Door Lift Cables?",
          body: `Garage door lift cables are high-tensile galvanized steel wires that connect the bottom corners of your garage door to the cable drums mounted on the <a href="/services/spring-replacement">torsion spring</a> shaft above. When the torsion spring unwinds during opening, the drums rotate and wind the cables, pulling the door upward along the vertical tracks. On extension spring systems, cables run over pulleys mounted at the top of the tracks and attach to the door bottom brackets. Lift cables typically measure 1/8 inch or 3/32 inch in diameter and are rated for thousands of pounds of tensile force. Despite their strength, cables fray over time due to the repeated bending stress at the drum and pulley contact points, exposure to moisture, and minor misalignment in the track system. A frayed or snapped cable causes the door to become uneven, jam in the tracks, or drop suddenly on one side — all of which create a safety hazard that requires immediate professional repair. Read our full guide on <a href="/blog/how-long-do-garage-door-cables-last">how long garage door cables last</a> to know when replacement is due.`,
        },
        {
          heading: "Garage Door Cable Repair in Kirkland and the Eastside",
          body: `When a lift cable snaps or frays on a Kirkland garage door, the door typically drops on one side and binds in the track. Attempting to operate the door manually or with the opener in this condition can bend the track, damage the opener carriage, or cause the door to fall. Zeus Garage Doors technicians respond same-day to cable failure calls across Kirkland, Bellevue, Redmond, Bothell, and all Eastside communities.

The repair process begins with safely releasing tension from the torsion spring system before any cable work begins — a critical safety step that requires professional training and winding bars. We then remove the damaged cable, inspect the cable drum, bottom bracket, and pulleys for wear, and install new galvanized steel cables on both sides. Cables are always replaced in pairs: replacing only the broken side leaves an aging cable on the opposite side that will fail shortly after.

After installation, we re-tension the spring system, test door balance, and verify smooth operation through several full cycles. The entire repair typically takes 60 to 90 minutes and is completed in a single visit.`,
        },
      ]}
      relatedEntities={[
        "Lift cables", "Safety cables", "Galvanized steel wire", "Cable drums", 
        "Torsion spring system", "Extension springs", "Bottom brackets", 
        "Pulleys", "Frayed wire", "Tensile strength"
      ]}
      relatedArticles={[
        { title: "How Long Do Garage Door Cables Last?", href: "/blog/how-long-do-garage-door-cables-last" },
        { title: "Is DIY Garage Door Repair Safe?", href: "/blog/is-diy-garage-door-repair-safe" },
        { title: "Garage Door Maintenance Checklist", href: "/blog/garage-door-maintenance-checklist" },
      ]}
      relatedServices={[
        { label: "Spring Replacement", href: "/services/spring-replacement" },
        { label: "Off-Track Door Repair", href: "/services/off-track-repair" },
        { label: "Safety Inspection", href: "/services/safety-inspection" },
      ]}

      faqs={[
        ...GENERAL_FAQS,
        {
          question: "Can I open my garage door if the cable is broken?",
          answer: "Absolutely not. The cables carry the entire weight of the door (often 200-300 lbs). If you try to use the opener with a broken cable, the door will bind in the tracks, bend the panels, and potentially burn out your opener motor.",
          schemaAnswer: "No. Operating a garage door with a broken cable is dangerous and can destroy the door panels, bend the tracks, and burn out the opener motor."
        },
        {
          question: "Should I replace both cables if only one is broken?",
          answer: "Yes. Cables experience the exact same amount of tension and wear over time. If one has snapped, the other is likely severely fatigued and will snap soon. We always replace cables in pairs to ensure proper door balance.",
          schemaAnswer: "Yes. We highly recommend replacing garage door cables in pairs to maintain even tension and ensure the door balances perfectly."
        },
        // Universal: cable causes + maintenance — topically matched
        ...UNIVERSAL_FAQS.filter(f =>
          f.question.includes("cables to break") ||
          f.question.includes("maintenance")
        ),
      ]}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Cable Replacement", url: "/services/cable-replacement" }
      ]}
    />
  );
}
