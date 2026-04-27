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
      directAnswer="Zeus Garage Doors provides same-day garage door cable replacement in Seattle, Kirkland, Bellevue, and the Eastside. If your cable is snapped or frayed, the door is unsafe to operate. We use aircraft-grade galvanized steel cables to withstand PNW humidity. Call 425-555-0199 for fast service."
      heroImage={{
        src: "/images/garage-door-cable-replacement.webp",
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
        }
      ]}
      relatedEntities={[
        "Lift cables", "Safety cables", "Galvanized steel wire", "Cable drums", 
        "Torsion spring system", "Extension springs", "Bottom brackets", 
        "Pulleys", "Frayed wire", "Tensile strength"
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
