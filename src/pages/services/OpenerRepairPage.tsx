/**
 * pages/services/OpenerRepairPage.tsx — Zeus Garage Doors
 * Target: Garage door opener repair, LiftMaster, Genie, Smart Home
 */

import ServicePage from "../../components/ServicePage";
import { GENERAL_FAQS, UNIVERSAL_FAQS } from "../../components/FAQAccordion";

export default function OpenerRepairPage() {
  return (
    <ServicePage
      metaTitle="Garage Door Opener Repair & Install | Zeus Garage Doors"
      metaDescription="Opener not working? Zeus repairs LiftMaster, Genie & Chamberlain same-day in Seattle, Kirkland & the Eastside WA. Smart MyQ setup available. Call 425-555-0199."
      canonical="/services/opener-repair"
      serviceName="Garage Door Opener Repair"
      serviceTagline="From stripped gears to sensor alignment and smart MyQ upgrades—we get your motor running smoothly and quietly today."
      
      /* FEATURED SNIPPET TARGET */
      directAnswer="Zeus Garage Doors provides expert garage door opener repair and installation in Seattle, Kirkland, Bellevue, and the Eastside. We service LiftMaster, Genie, and Chamberlain. Whether it's a broken gear, safety sensor alignment, or a new smart MyQ belt-drive installation, we offer same-day service. Call 425-555-0199 for an expert assessment."
      heroImage={{
        src: "/images/garage-door-opener-repair.webp",
        alt: "Technician repairing a LiftMaster garage door opener",
        title: "Expert Opener Repair & Installation"
      }}
      whatWeDoItems={[
        "Diagnostic of motor and logic board issues",
        "Safety sensor alignment and replacement",
        "Gear and sprocket kit replacement",
        "New LiftMaster & Genie installations",
        "Remote control and keypad programming",
        "Smart home (MyQ) integration and setup"
      ]}
      warningSignsItems={[
        "The motor hums but the door doesn't move",
        "The door starts to close and then reverses immediately",
        "The opener is making excessive grinding noises",
        "Remotes and wall stations have stopped responding",
        "The chain is sagging or the belt is frayed"
      ]}
      whyZeusPoints={[
        {
          icon: "⚡",
          heading: "Same-Day Fix",
          body: "We carry most common logic boards, sensors, and gears in our trucks for immediate repair."
        },
        {
          icon: "📱",
          heading: "Smart Specialists",
          body: "We specialize in modernizing older doors with Wi-Fi enabled openers for phone control."
        },
        {
          icon: "🛡️",
          heading: "Certified Parts",
          body: "We only use OEM parts from LiftMaster and Genie to ensure your warranty remains valid."
        }
      ]}
      relatedEntities={[
        "LiftMaster", "Genie", "Chamberlain", "MyQ", "Belt Drive", "Chain Drive",
        "Logic Board", "Safety Sensors", "Capacitor", "Remote Programming",
        "Travel Module", "DC Motor", "Battery Backup", "Wall Station"
      ]}
      
      
      faqs={[
        ...GENERAL_FAQS,
        {
          question: "Is it better to repair or replace my garage door opener?",
          answer: "If your opener is over 12-15 years old, lacks modern safety sensors, or needs a costly logic board repair, we usually recommend replacement. Newer DC motors are quieter and more secure.",
          schemaAnswer: "If an opener is over 12 years old or needs a major part like a logic board, replacement is often more cost-effective than repair."
        },
        // Universal opener-specific questions
        ...UNIVERSAL_FAQS.filter(f =>
          f.question.includes("close all the way") ||
          f.question.includes("reverse before") ||
          f.question.includes("remote stopped") ||
          f.question.includes("openers last")
        ),
      ]}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Opener Repair", url: "/services/opener-repair" }
      ]}
    />
  );
}
