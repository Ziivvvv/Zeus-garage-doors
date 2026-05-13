/**
 * pages/services/SensorRepairPage.tsx — Zeus Garage Doors
 * /services/sensor-repair
 *
 * SEO targets:
 *   H1:  "Garage Door Sensor Repair Kirkland WA"
 *   Primary: garage door sensor not working, safety sensor alignment, door won't close sensor
 */

import ServicePage from "../../components/ServicePage";

const SENSOR_FAQS = [
  {
    question: "Why won't my garage door close — is it the sensor?",
    answer:
      "If your garage door opens fine but won't close (or reverses immediately after touching the floor), a misaligned or blocked safety sensor is the most common cause. The two sensors at the bottom of your door tracks must be perfectly aligned and have a clear line of sight. Check for: (1) a blinking or dim LED on one or both sensors; (2) dirt, cobwebs, or debris on the sensor lens; (3) an object in the sensor beam path; (4) sensor brackets that have been bumped out of alignment. If cleaning and visual inspection don't resolve it, call Zeus for a same-day sensor diagnosis.",
  },
  {
    question: "How do I know if my garage door sensors are aligned?",
    answer:
      "Both sensors should display solid, steady LED lights — no blinking. Most LiftMaster and Chamberlain sensors show a solid green on the receiving sensor and solid amber on the sending sensor when properly aligned. If either light is blinking or off, the sensors are misaligned or the beam is obstructed. Loosen the wing nut on the misaligned sensor, gently adjust it until the LED goes solid, then retighten. If the LED won't hold solid after adjustment, the sensor bracket may be bent or the sensor itself may be faulty.",
  },
  {
    question: "Can I bypass garage door sensors?",
    answer:
      "Technically yes — most openers allow you to hold the wall button continuously to override the sensor safety stop. However, we strongly advise against bypassing sensors permanently. Garage door safety sensors are required by federal law (UL 325) on all openers manufactured after 1993 precisely because doors were injuring and killing people. A door without functioning sensors can close on a child, pet, or adult without stopping. Zeus repairs and realigns sensors same-day — there's no reason to operate your door with disabled safety hardware.",
  },
  {
    question: "How much does garage door sensor repair cost in Kirkland WA?",
    answer:
      "Sensor realignment is the simplest repair Zeus performs — if the sensors just need repositioning, it's included in the flat service call rate. Sensor replacement (when the sensor itself is faulty) adds $40–$80 per sensor in parts. Most sensor jobs are completed in under 30 minutes. We give you the exact price on-site before starting.",
  },
  {
    question: "Why does my garage door sensor keep going out of alignment?",
    answer:
      "Recurring sensor misalignment usually means the sensor bracket is loose, bent, or attached to a wall that vibrates excessively during door operation. We check the bracket mounting hardware and reinforce it with locking hardware that resists vibration. If your garage has a concrete wall, we may use a different anchor type. If the bracket itself is bent, we replace it — a $15–$25 fix that permanently solves chronic misalignment.",
  },
  {
    question: "Do I need to replace both sensors or just one?",
    answer:
      "Sensors come in pairs — one sending unit and one receiving unit. They're designed to work as a matched pair on the same frequency. If one sensor is faulty, we replace both to ensure compatibility. Mixing a new sensor with an old one of a different generation can cause intermittent alignment issues even when physically positioned correctly. Zeus stocks matched pairs for LiftMaster, Chamberlain, and Genie systems.",
  },
  {
    question: "Will sun glare cause my garage door sensor to malfunction?",
    answer:
      "Yes — direct sunlight hitting the receiving sensor can overwhelm its photoelectric eye and cause false readings, making the door behave as if the beam is broken. This is common in west- or south-facing garages in late afternoon. Solutions include: adjusting the sensor angle slightly downward to avoid direct sun exposure, installing a small sunshade hood over the receiving sensor, or adding a sensor sun shield. Zeus can assess your garage orientation and recommend the right fix.",
  },
];

export default function SensorRepairPage() {
  return (
    <ServicePage
      metaTitle="Garage Door Sensor Repair Kirkland WA | Zeus Garage Doors"
      metaDescription="Garage door won't close? Sensor misaligned or faulty? Zeus fixes safety sensors same-day in Kirkland, Bellevue & Eastside WA. Flat-rate pricing. Call 425-448-6443."
      canonical="/services/sensor-repair"

      serviceName="Garage Door Sensor Repair"
      pageH1="Garage Door Sensor Repair Kirkland WA"

      serviceTagline="A misaligned or faulty safety sensor is the most common reason a garage door refuses to close. Zeus Garage Doors diagnoses and repairs garage door sensors same-day across Kirkland, Bellevue, Redmond, and all Eastside WA communities."

      directAnswer="Zeus Garage Doors provides same-day garage door sensor repair in Kirkland WA and across the Eastside. We realign, clean, and replace safety sensors for LiftMaster, Chamberlain, Genie, and all major opener brands. If your door won't close, call 425-448-6443 for a flat-rate diagnosis."

      heroImage={{
        src: "/images/services/garage-door-sensor-repair-kirkland-wa.png",
        alt: "Garage door sensor repair in Kirkland WA — Zeus Garage Doors technician aligning safety sensors",
        title: "Zeus Garage Doors technician realigning safety sensors on residential garage door in Kirkland, Washington",
      }}

      whatWeDoHeading="What's Included in Our Garage Door Sensor Repair Service"
      whatWeDoItems={[
        "Sensor alignment diagnosis — identify which sensor is misaligned or faulty",
        "Full sensor realignment and LED confirmation test",
        "Sensor lens cleaning — remove dirt, cobwebs, and debris causing false readings",
        "Bracket inspection and reinforcement — tighten or replace loose mounting hardware",
        "Sensor replacement for faulty sending or receiving units (matched pairs only)",
        "Sun glare assessment and correction for west- and south-facing garages",
        "Wiring inspection — check for corroded or pinched sensor wires",
        "Safety reverse function test after alignment — confirm door stops on contact",
        "Opener force and sensitivity settings adjusted to work with repaired sensors",
      ]}

      warningSignsHeading="Signs Your Garage Door Sensors Need Repair"
      warningSignsItems={[
        "Door opens normally but reverses immediately when closing — classic sensor beam break",
        "Door won't close at all from the remote — only closes by holding the wall button",
        "Blinking or dim LED on one or both sensors instead of steady solid light",
        "Door reverses mid-travel for no visible reason — intermittent sensor malfunction",
        "Sensors appear aligned but door still won't close — may be faulty sensor unit",
        "Door closes fine at night but reverses in afternoon — sun glare hitting receiver",
        "Sensor LED is out completely — wiring issue or failed sensor",
        "Opener beeps a specific number of times and refuses to close — sensor fault code",
      ]}

      whyZeusHeading="Why Kirkland Homeowners Choose Zeus for Garage Door Sensor Repair"
      whyZeusPoints={[
        {
          icon: "⚡",
          heading: "Same-Day Sensor Diagnosis",
          body: "A door that won't close is a security and weather exposure issue — we treat it as urgent. Most sensor repair calls in Kirkland and the Eastside are completed same-day, often within 30 minutes of arrival.",
        },
        {
          icon: "🔍",
          heading: "Root Cause Fix, Not a Workaround",
          body: "We don't just realign the sensor and leave. We find why it went out of alignment — loose bracket, vibration, bent hardware — and fix the underlying cause. Sensors that are properly mounted stay aligned.",
        },
        {
          icon: "🔌",
          heading: "All Major Brands Stocked",
          body: "We carry matched sensor pairs for LiftMaster, Chamberlain, Genie, Linear, and Craftsman systems. If your sensor is faulty, we replace it same-visit — no return trip for parts.",
        },
        {
          icon: "💰",
          heading: "Flat-Rate Pricing",
          body: "Sensor alignment is included in the flat service call rate. If replacement is needed, we give you the exact parts-and-labor price before touching anything. No diagnostic fee layered on top of the repair.",
        },
        {
          icon: "🛡️",
          heading: "Safety Verified After Every Job",
          body: "After sensor repair, we run the full UL 325 safety test — place an object in the door path and verify the door reverses on contact. We don't leave until the safety system passes.",
        },
        {
          icon: "📍",
          heading: "Locally Based in Kirkland",
          body: "Zeus Garage Doors is based on the Eastside. Sensor calls are dispatched from Kirkland — fast response across Bellevue, Redmond, Bothell, and all surrounding communities.",
        },
      ]}

      contentBlocks={[
        {
          heading: "How Garage Door Safety Sensors Work — and Why They Fail",
          body: `Garage door safety sensors — also called photo-eye sensors — are required on every automatic garage door opener sold in the United States since 1993 under the UL 325 federal standard. They consist of two small units mounted at the base of each door track, approximately 4–6 inches off the ground. The sending sensor emits an invisible infrared beam across the door opening; the receiving sensor detects that beam. When the beam is interrupted — by a person, pet, bicycle, or any object — the opener reverses the door before it can make contact.

The system is simple but sensitive. The infrared beam must be precisely aligned between the two sensors for the system to function correctly. A gap of a few millimeters in alignment is enough to break the circuit and cause the door to behave as if something is in the path — even when the opening is completely clear.

The most common cause of sensor failure in Kirkland and Eastside WA homes is physical displacement. Sensor brackets are mounted to the door tracks or walls with hardware that loosens over time from the repeated vibration of the door operating. Every door cycle — thousands per year — transmits a small vibration into the bracket. Over months, this loosens the mounting hardware, and the sensor drifts out of alignment.

The second most common cause is environmental. Pacific Northwest garages accumulate cobwebs, dust, and moisture condensation on sensor lenses. A lens that's 30% obstructed by dirt can break the photoelectric circuit even when the sensor is physically aligned correctly. Quarterly lens cleaning with a dry cloth is the simplest preventative maintenance for sensor reliability.

Wiring damage is the third cause Zeus encounters regularly. Sensor wires run along the door tracks and are routed back to the opener motor unit. Over years, these wires can be pinched by door hardware, chewed by rodents, or corroded at connection points. A wiring fault causes the same symptoms as a misaligned sensor — we check wiring after alignment to rule out this secondary issue.`,
        },
        {
          heading: "Sensor Repair vs. Sensor Replacement — What Kirkland Homeowners Should Expect",
          body: `Most garage door sensor service calls Zeus handles in Kirkland and the Eastside are alignment jobs — the sensors themselves are functional, they've simply drifted out of position. Realignment takes 10–20 minutes and costs significantly less than full sensor replacement.

When sensor replacement is necessary, the clearest indicator is an LED that doesn't respond to alignment at all. If the receiving sensor's LED stays off or continues blinking regardless of angle adjustments, the photoelectric unit inside has failed — typically from water intrusion (common in Pacific Northwest garages) or age-related LED degradation.

Zeus replaces sensors in matched pairs only. This is the correct practice — sensor units are frequency-matched at the factory, and installing a new unit alongside an old one of a different model year often creates compatibility issues that cause intermittent door behavior. Matched pairs ensure the sending and receiving frequencies are identical.

For LiftMaster and Chamberlain openers, Zeus uses OEM-equivalent sensor pairs that maintain full compatibility with the opener's safety circuit board. For older openers — particularly those manufactured before 2010 — we also evaluate whether a sensor repair is the right investment or whether an opener upgrade is more cost-effective. If your opener is 15+ years old and the sensor system is failing, a new opener with a modern sensor system installed correctly from the start is often the better long-term value.

After every sensor replacement, we run the full safety reversal test: place a 2×4 flat on the ground in the door path, close the door, and verify it reverses on contact without requiring manual intervention. This test confirms the sensor, the opener's safety circuit, and the mechanical reversal system are all working together correctly — not just that the LED lights look right.`,
        },
      ]}

      relatedEntities={[
        "Photo-eye sensors",
        "Infrared beam",
        "UL 325 safety standard",
        "Safety reversal system",
        "Sending sensor",
        "Receiving sensor",
        "LiftMaster safety sensors",
        "Chamberlain sensors",
        "Genie SafeT-Beam",
        "Sensor bracket",
        "Photoelectric eye",
        "Sensor wiring",
        "Force sensitivity setting",
        "Auto-reverse function",
        "Sensor LED indicator",
        "Sun glare interference",
      ]}

      faqs={SENSOR_FAQS}

      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Sensor Repair", url: "/services/sensor-repair" },
      ]}
    />
  );
}
