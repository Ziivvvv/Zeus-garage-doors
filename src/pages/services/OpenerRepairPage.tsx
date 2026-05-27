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
      metaDescription="Opener not working? Zeus repairs LiftMaster, Genie & Chamberlain same-day in Seattle, Kirkland & the Eastside WA. Smart MyQ setup available. Call 425-448-6443."
      canonical="/services/opener-repair"
      serviceName="Garage Door Opener Repair"
      serviceTagline="From stripped gears to sensor alignment and smart MyQ upgrades—we get your motor running smoothly and quietly today."
      
      /* FEATURED SNIPPET TARGET */
      directAnswer="Zeus Garage Doors provides expert garage door opener repair and installation in Seattle, Kirkland, Bellevue, and the Eastside. We service LiftMaster, Genie, and Chamberlain. Whether it's a broken gear, safety sensor alignment, or a new smart MyQ belt-drive installation, we offer same-day service. Call 425-448-6443 for an expert assessment."
      heroImage={{
        src: "/images/services/real-photos/liftmaster-opener-installation-kirkland-wa.webp",
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
          body: "We only use OEM parts from LiftMaster and Genie. Every repair is covered by our 5-year parts and labor warranty — the strongest guarantee on the Eastside."
        }
      ]}
      contentBlocks={[
        {
          heading: "What Is a Garage Door Opener and How Does It Work?",
          body: `A garage door opener is a motorized device that automates the raising and lowering of a residential garage door. The motor drives a trolley along a rail using one of three drive mechanisms: a chain drive (durable and affordable), a belt drive (quieter, preferred for attached garages), or a jackshaft (wall-mounted, ideal for low-clearance garages). When activated by a remote, keypad, or smartphone app, the motor engages the trolley, which is connected to the door via a carriage and release cord. Safety sensors mounted near the floor emit an infrared beam across the door opening — if the beam is broken while the door is closing, the opener reverses automatically. Modern openers include a logic board that controls motor speed, travel limits, and obstacle detection force. The logic board is the most failure-prone component and is the cause of most erratic opener behavior including doors reversing for no apparent reason, not responding to remotes, or stopping mid-travel.`,
        },
        {
          heading: "Garage Door Opener Repair vs. Replacement — How to Decide",
          body: `Whether to repair or replace a garage door opener depends on the age of the unit, the nature of the failure, and your goals for smart home integration. Openers under 10 years old with a failed capacitor, stripped drive gear, or damaged safety sensor are almost always worth repairing — parts are available and the repair cost is significantly less than a new unit. Openers over 15 years old with a failed logic board or burned-out motor are typically better replaced, since new logic boards for discontinued models cost nearly as much as an entry-level new opener.

If your current opener lacks battery backup, myQ smart home connectivity, or rolling code security (a feature that changes the remote frequency with every use to prevent code grabbing), replacement is worth considering even for a partially functional unit. Zeus Garage Doors carries LiftMaster belt-drive, chain-drive, and jackshaft openers and can have a new unit installed and programmed in under two hours, including transferring your existing keypad codes and vehicle HomeLink settings.`,
        },
      ]}
      relatedEntities={[
        "LiftMaster", "Genie", "Chamberlain", "MyQ", "Belt Drive", "Chain Drive",
        "Logic Board", "Safety Sensors", "Capacitor", "Remote Programming",
        "Travel Module", "DC Motor", "Battery Backup", "Wall Station"
      ]}
      relatedArticles={[
        { title: "Best Garage Door Opener for PNW Homes", href: "/blog/best-garage-door-opener-pnw" },
        { title: "LiftMaster vs Chamberlain: Full Comparison", href: "/blog/liftmaster-vs-chamberlain-garage-door-opener" },
        { title: "Chain vs Belt vs Jackshaft Opener", href: "/blog/chain-vs-belt-vs-jackshaft-opener" },
        { title: "How to Program a Garage Door Remote", href: "/blog/how-to-program-garage-door-remote" },
      ]}
      relatedServices={[
        { label: "Remote & Keypad Programming", href: "/services/remote-keypad-programming" },
        { label: "Noise Reduction", href: "/services/noise-reduction" },
        { label: "Manual-to-Automatic Conversion", href: "/services/manual-to-automatic-conversion" },
        { label: "Sensor Repair", href: "/services/sensor-repair" },
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
