/**
 * pages/services/SafetyInspectionPage.tsx — Zeus Garage Doors
 * /services/safety-inspection
 *
 * SEO targets:
 *   H1:  "Garage Door Safety Inspection Kirkland WA"
 *   Primary: garage door safety inspection, 26-point inspection, garage door inspection service
 */

import ServicePage from "../../components/ServicePage";

const INSPECTION_FAQS = [
  {
    question: "What does a garage door safety inspection include?",
    answer:
      "Zeus performs a comprehensive 26-point garage door safety inspection covering: spring condition and tension, cable integrity and drum seating, roller wear and bearing condition, track alignment and bracket tightness, hinge and hardware security, bottom and side weatherseal condition, safety sensor alignment and auto-reverse function test, opener force and travel limit calibration, manual release operation, wall button and remote function, panel condition, and door balance test. You receive a written report with each item rated pass, monitor, or replace.",
  },
  {
    question: "How often should I get a garage door safety inspection?",
    answer:
      "Annually for most residential homes — same interval as a tune-up. For doors used 4+ times per day (busy families, home office garages), every 6 months. For doors that are 10+ years old, annual inspection is especially important because spring wire fatigue and cable corrosion accelerate near end-of-life and are not visible without close-up inspection. Zeus recommends scheduling inspections in fall before winter weather stresses components.",
  },
  {
    question: "Is a garage door safety inspection the same as a tune-up?",
    answer:
      "They overlap significantly but have different primary purposes. A tune-up is maintenance — lubrication, adjustment, and calibration to keep a functioning door in good condition. An inspection is a condition assessment — a pass/fail evaluation of every component against safety and performance standards, with a written report. Zeus performs the inspection first, then offers to do maintenance work on the same visit if the homeowner wants to combine both services.",
  },
  {
    question: "My home was recently purchased — why do I need a garage door inspection?",
    answer:
      "A home inspection covers garage door function (does it open and close?) but doesn't assess component condition or remaining service life. A general home inspector won't identify a spring that's 80% through its cycle life, cable strands that are beginning to fray, or a safety sensor that's misaligned but still barely passing. Zeus provides a detailed component-level report that tells new homeowners exactly what condition their garage door system is in and what to expect in the next 1–5 years.",
  },
  {
    question: "What is the auto-reverse safety test and why does it matter?",
    answer:
      "The auto-reverse test verifies that your garage door opener will stop and reverse the door if it contacts an object while closing. UL 325 (the federal safety standard for residential garage door openers) requires this feature on all openers since 1993. Zeus tests the mechancial auto-reverse by placing a 2×4 board flat on the floor under the door and closing it — the door must reverse within 2 seconds of contact. We also test the photoelectric sensor system by breaking the beam with our hand. Both tests must pass. A door that fails either test is a safety hazard.",
  },
  {
    question: "Can a garage door inspection help me avoid emergency repair calls?",
    answer:
      "Yes — this is the primary value of annual inspection. A spring with visible rust and wire fatigue identified in October can be replaced before it breaks on a January morning. A cable with 3 frayed strands noted in an inspection report can be scheduled for replacement before it snaps. An opener that's losing force calibration can be adjusted before it starts failing to close the door reliably. Emergency repair calls are almost always caused by components that were showing warning signs for months before failure — annual inspection catches those signs.",
  },
  {
    question: "How long does a garage door safety inspection take?",
    answer:
      "Zeus completes a 26-point safety inspection in 45–60 minutes for a single-car door. Double-car doors take 60–75 minutes. We don't rush inspections — every point on the checklist is verified, not just glanced at. You receive the written report before we leave.",
  },
];

export default function SafetyInspectionPage() {
  return (
    <ServicePage
      metaTitle="Garage Door Safety Inspection Kirkland WA | Zeus Garage Doors"
      metaDescription="Comprehensive 26-point garage door safety inspection in Kirkland, Bellevue & Eastside WA. Written condition report. Flat-rate pricing. Call Zeus at 425-448-6443."
      canonical="/services/safety-inspection"

      serviceName="Garage Door Safety Inspection"
      pageH1="Garage Door Safety Inspection Kirkland WA"

      serviceTagline="A garage door is the largest moving mechanical system in your home — and one of the most overlooked. Zeus Garage Doors performs a comprehensive 26-point safety inspection with written report for homeowners across Kirkland, Bellevue, Redmond, and all Eastside WA communities."

      directAnswer="Zeus Garage Doors performs a comprehensive 26-point garage door safety inspection in Kirkland WA and across the Eastside. Every component is evaluated against safety and performance standards — springs, cables, rollers, sensors, opener, and more. You receive a written condition report. Call 425-448-6443 to schedule."

      heroImage={{
        src: "/images/services/real-photos/zeus-garage-door-service-truck-kirkland-wa.webp",
        alt: "Garage door safety inspection in Kirkland WA — Zeus Garage Doors technician performing 26-point inspection",
        title: "Zeus Garage Doors technician performing comprehensive 26-point safety inspection on residential garage door in Kirkland, Washington",
      }}

      whatWeDoHeading="What's Covered in Our 26-Point Garage Door Safety Inspection"
      whatWeDoItems={[
        "Spring condition — inspect for rust, wire fatigue, coil separation, and correct tension",
        "Cable integrity — check all strands for fraying, corrosion, and correct drum winding",
        "Roller condition — assess wear, bearing integrity, and track contact",
        "Track alignment — verify consistent roller clearance and bracket tightness",
        "Hinge and hardware — check all bolts, brackets, and fasteners for tightness",
        "Panel condition — inspect for dents, cracks, and structural compromise",
        "Weather seal — assess bottom, side, and top seal compression and integrity",
        "Safety sensor alignment and LED confirmation test",
        "Auto-reverse mechanical test — 2×4 contact test per UL 325 protocol",
        "Photoelectric sensor test — beam interruption with full reversal confirmation",
        "Opener force calibration — verify motor isn't overcoming excessive resistance",
        "Travel limit calibration — confirm full open and full close positions",
        "Manual release operation — confirm emergency pull cord functions correctly",
        "Wall button and remote function test",
        "Battery backup test (if applicable)",
        "Door balance test — mid-travel hold check with opener disconnected",
        "Written condition report — every item rated pass, monitor, or replace",
      ]}

      warningSignsHeading="When to Schedule a Garage Door Safety Inspection"
      warningSignsItems={[
        "More than 12 months since last professional inspection or tune-up",
        "Recently purchased a home — assess the door system's true condition",
        "Door is 10+ years old — components approaching end-of-service life",
        "Any unusual noise, vibration, or behavior in the last few months",
        "Door feels heavier than normal when lifted manually",
        "Planning to sell your home — document garage door condition for disclosure",
        "After any significant impact — vehicle contact, storm, or falling object",
        "Opener reversing or not closing reliably — safety system may be failing",
        "Safety sensors blinking or door not responding to remote",
      ]}

      whyZeusHeading="Why Kirkland Homeowners Choose Zeus for Garage Door Safety Inspections"
      whyZeusPoints={[
        {
          icon: "📋",
          heading: "Written Report — Not Just a Verbal Assessment",
          body: "Every Zeus inspection produces a written condition report. Each of the 26 points is rated pass, monitor, or replace — with notes on what we observed. You have documentation of the door's condition at the time of inspection, useful for home sales, insurance, and future maintenance planning.",
        },
        {
          icon: "🔍",
          heading: "Component-Level Evaluation",
          body: "We assess individual components against their design specifications — not just whether the door opens and closes. A spring that passes a functional test may still be 80% through its cycle life and due for replacement within a year. We report what we actually find.",
        },
        {
          icon: "🛡️",
          heading: "UL 325 Safety Standards",
          body: "Both the mechanical auto-reverse and photoelectric safety tests are conducted per UL 325 protocol — the federal standard for residential garage door openers. We don't estimate or assume; we run the actual test and report the actual result.",
        },
        {
          icon: "🏠",
          heading: "New Homeowner Specialist",
          body: "A general home inspection doesn't reveal component age or remaining service life. Zeus provides the detailed garage door condition report that home buyers need to understand what they're inheriting and what maintenance to expect in the next 1–5 years.",
        },
        {
          icon: "💰",
          heading: "Flat-Rate Inspection Fee",
          body: "The 26-point inspection has a single flat rate. If you choose to have maintenance or repair work done on the same visit, we quote that separately before starting. No upselling — just honest findings and a price for anything that needs attention.",
        },
        {
          icon: "📍",
          heading: "Locally Based in Kirkland",
          body: "Zeus technicians know Kirkland and Eastside WA housing stock. We understand the specific wear patterns in Pacific Northwest garages — rust acceleration from humidity, spring fatigue from temperature swings, cable corrosion in coastal-exposure areas.",
        },
      ]}

      contentBlocks={[
        {
          heading: "Why Garage Door Safety Inspections Matter — The Statistics Homeowners Should Know",
          body: `Garage doors are the most frequently used entry point in most American homes — averaging 1,500+ cycles per year for a typical family. They are also the largest moving mechanical object in the home, with the torsion spring system storing significant mechanical energy when wound. A 16-foot double door weighs 150–400 pounds; without a properly functioning spring system, that weight becomes a serious injury hazard.

According to the U.S. Consumer Product Safety Commission, garage doors cause approximately 20,000–30,000 injuries per year in the United States — with the largest share involving pinch injuries from panel sections, followed by injuries from falling doors due to spring or cable failure, and opener-related incidents. Most of these incidents involve components that were showing warning signs before failure — signs that a professional inspection would have identified.

The federal UL 325 standard requires residential garage door openers to have two independent safety systems: a mechanical auto-reverse (the door reverses on contact with an object) and a photoelectric sensor system (the door reverses when the beam is broken before contact). Both systems can fail or degrade over time. Zeus tests both systems on every inspection, using the exact protocol specified by UL 325 — not a visual inspection of the sensor position, but an actual functional test.

Springs are the component most homeowners think about in the context of safety — and rightly so. A torsion spring under full wind tension stores enough mechanical energy to cause serious injury if it releases suddenly due to breakage or improper handling. Zeus inspects springs for rust pitting, wire fatigue (visible as slight separation between coils), and correct tension. A spring showing these signs is flagged for replacement before it fails — not after.

For Kirkland and Eastside WA homeowners, the Pacific Northwest climate adds specific inspection priorities: rust on spring coils from sustained humidity, cable corrosion from moisture infiltration, and hardened weather seals that leave gaps for wind-driven rain. Annual inspection in this climate is not optional maintenance — it's the minimum responsible frequency for a system that operates daily in a corrosion-accelerating environment.`,
        },
        {
          heading: "Garage Door Inspection for Home Sales and Real Estate Transactions",
          body: `Garage door condition is increasingly relevant in residential real estate transactions in the Kirkland and greater Eastside market. Buyers are more sophisticated about requesting documentation of major mechanical systems, and a garage door that fails inspection or shows obvious maintenance neglect can become a negotiating point — or a required repair before closing.

Zeus provides garage door inspection reports specifically suitable for real estate disclosure purposes. The written 26-point report documents the condition of each component at the time of inspection, notes any items requiring attention, and provides estimated remaining service life for springs and cables based on their assessed condition. This documentation gives sellers a clear picture of what they're disclosing and buyers a clear picture of what they're inheriting.

For sellers, a pre-listing inspection has two advantages. First, it allows you to repair any issues on your own schedule and at your chosen service provider — rather than being rushed into repairs at whatever price the buyer's contractor quotes after a failed home inspection. Second, a documented recent inspection with all items passing is a positive disclosure that reduces buyer concern about the garage door system's condition.

For buyers, a Zeus inspection provides information that the general home inspection doesn't cover: component age estimates, specific condition ratings for springs and cables, and an honest assessment of what maintenance or repairs to expect in the next 1–3 years. A garage door with 20-year-old springs that "pass" a functional test is still a system with springs that are 2–5 years from likely failure — relevant information for budgeting.

Zeus schedules inspection appointments with 24–48 hours notice across Kirkland, Bellevue, Redmond, and the Eastside. Reports are provided in writing at the completion of the inspection, with digital copies available on request.`,
        },
      ]}

      relatedEntities={[
        "26-point inspection",
        "UL 325 safety standard",
        "Auto-reverse test",
        "Photoelectric sensor test",
        "Spring cycle life",
        "Cable strand integrity",
        "Door balance test",
        "Force calibration",
        "Travel limit setting",
        "Manual release",
        "CPSC garage door statistics",
        "Home inspection vs. specialized inspection",
        "Real estate disclosure",
        "Preventative maintenance",
        "Component service life",
        "Safety reversal system",
      ]}

      faqs={INSPECTION_FAQS}

      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Safety Inspection", url: "/services/safety-inspection" },
      ]}
    />
  );
}
