/**
 * pages/services/ManualToAutomaticPage.tsx — Zeus Garage Doors
 * /services/manual-to-automatic-conversion
 *
 * SEO targets:
 *   H1:  "Manual to Automatic Garage Door Conversion Kirkland WA"
 *   Primary: manual garage door opener installation, convert manual garage door
 */

import ServicePage from "../../components/ServicePage";

const MANUAL_TO_AUTO_FAQS = [
  {
    question: "Can any manual garage door be converted to automatic?",
    answer:
      "Most manual sectional garage doors (the standard type with horizontal panels) can be converted to automatic by installing a garage door opener. The door must be in good mechanical condition — properly balanced, with functioning springs and cables — before an opener is added. A door that's difficult to lift manually will overload an opener motor immediately. One-piece tilt-up doors and heavy custom wood doors may require an opener with higher horsepower (3/4 HP or 1 HP) or may need a different opener type (jackshaft vs. overhead rail). Zeus assesses your specific door before recommending an opener.",
  },
  {
    question: "How much does it cost to add a garage door opener in Kirkland WA?",
    answer:
      "Opener installation by Zeus runs $350–$650 total depending on opener type and door configuration. This includes the opener unit, all installation hardware, programming of 2 remotes, a wireless keypad, and safety sensor setup. Chain-drive openers are at the lower end; belt-drive and jackshaft openers at the higher end. We give you the exact price after assessing your door — the number doesn't change between quote and invoice.",
  },
  {
    question: "What type of opener should I install on my manual garage door?",
    answer:
      "For most standard residential sectional doors in Kirkland, a belt-drive opener is our recommendation — quieter than chain-drive, compatible with most door weights, and includes myQ Wi-Fi for smartphone control. For garages with a bedroom above, a jackshaft wall-mount opener eliminates overhead rail vibration entirely. For heavy custom wood doors (200+ lbs), a 3/4 HP or 1 HP chain-drive provides the torque necessary without straining. Zeus recommends the right opener for your specific door weight, ceiling height, and noise requirements.",
  },
  {
    question: "How long does opener installation take?",
    answer:
      "A standard sectional door opener installation takes 2–3 hours for a single-car door and 2.5–3.5 hours for a double-car door. This includes mounting the rail, installing the motor unit, wiring the safety sensors, programming the wall button and remotes, and running the full safety test. If the door also needs spring adjustment or track alignment before the opener can be safely installed, that adds time.",
  },
  {
    question: "Does my door need to be in good condition before adding an opener?",
    answer:
      "Yes — an opener is not a substitute for a well-maintained door. Before installation, Zeus checks spring balance, cable condition, roller and track operation, and hardware tightness. If the door is out of balance, the opener will strain to compensate and fail prematurely. If springs are worn, adding an opener that runs the door thousands of additional cycles per year will cause spring failure faster. We address any mechanical issues before or alongside opener installation.",
  },
  {
    question: "Can I get battery backup with my new opener installation?",
    answer:
      "Yes — LiftMaster offers battery backup on most of their residential opener lineup. We strongly recommend battery backup for Kirkland homeowners: Western Washington experiences power outages during winter storms, and a garage door that can't open during an outage traps your car or leaves the door stuck open. Battery backup units keep the opener functional for 24–48 hours during a power failure. We include battery backup pricing in every opener installation quote.",
  },
  {
    question: "Will a new opener include smartphone control?",
    answer:
      "All new LiftMaster openers Zeus installs include myQ Wi-Fi connectivity as standard. myQ lets you open, close, and monitor your garage door from anywhere via smartphone app, receive alerts when the door opens or closes, and grant temporary access to other users. We set up the myQ connection and app on your phone as part of the installation — not as a separate step.",
  },
];

export default function ManualToAutomaticPage() {
  return (
    <ServicePage
      metaTitle="Garage Door Opener Installation Kirkland WA | Zeus"
      metaDescription="Convert to automatic. Zeus installs LiftMaster belt-drive, chain-drive & jackshaft openers in Kirkland & Eastside WA. Call 425-448-6443."
      canonical="/services/manual-to-automatic-conversion"

      serviceName="Garage Door Opener Installation"
      pageH1="Manual to Automatic Garage Door Conversion Kirkland WA"

      serviceTagline="Ready to stop manually lifting your garage door? Zeus Garage Doors installs LiftMaster openers — belt-drive, chain-drive, and jackshaft — on existing manual doors across Kirkland, Bellevue, Redmond, and all Eastside WA communities. Same-day installation available."

      directAnswer="Zeus Garage Doors converts manual garage doors to automatic with professional LiftMaster opener installation in Kirkland WA and across the Eastside. Belt-drive, chain-drive, and jackshaft options with myQ Wi-Fi and battery backup available. Complete installation including remotes, keypad, and sensors. Call 425-448-6443."

      heroImage={{
        src: "/images/services/real-photos/garage-door-installation-in-progress-kirkland-wa.webp",
        alt: "Garage door opener installation in Kirkland WA — Zeus Garage Doors technician installing LiftMaster belt-drive opener",
        title: "Zeus Garage Doors technician installing LiftMaster belt-drive garage door opener on residential door in Kirkland, Washington",
      }}

      whatWeDoHeading="What's Included in Our Garage Door Opener Installation"
      whatWeDoItems={[
        "Door assessment — verify balance, spring condition, and hardware readiness before installation",
        "Rail assembly and motor unit mounting — ceiling or wall-mount depending on opener type",
        "Safety sensor installation and alignment — both sending and receiving units",
        "Wall button installation and wiring",
        "2 remote controls programmed and tested",
        "Wireless keypad installation and PIN programming",
        "HomeLink programming for your vehicles (on request)",
        "myQ Wi-Fi setup and smartphone app commissioning",
        "Battery backup installation and test (if selected)",
        "Force and travel limit calibration — set for your specific door weight and height",
        "Full UL 325 safety test — mechanical auto-reverse and photoelectric sensor verification",
        "Door balance check and spring adjustment if needed before opener is loaded",
      ]}

      warningSignsHeading="Signs It's Time to Add or Upgrade a Garage Door Opener"
      warningSignsItems={[
        "Door is still manually operated — no opener installed",
        "Current opener is 15+ years old — approaching end of reliable service life",
        "Opener making grinding, straining, or unusual noise",
        "Door reverses unexpectedly or won't complete full travel",
        "No battery backup — door unusable during power outages",
        "No smartphone control — want myQ remote access and alerts",
        "Current chain-drive is too loud — bedroom or living area above the garage",
        "Remote range has decreased significantly",
        "Opener lights, wall button, or safety sensors malfunctioning",
      ]}

      whyZeusHeading="Why Kirkland Homeowners Choose Zeus for Opener Installation"
      whyZeusPoints={[
        {
          icon: "🔧",
          heading: "Door-First Approach",
          body: "We assess your door's mechanical condition before installing any opener. A door that's out of balance or has worn springs will destroy an opener motor quickly. We make sure the door is ready first — or fix it as part of the same visit.",
        },
        {
          icon: "📱",
          heading: "myQ Setup Included",
          body: "Every LiftMaster opener we install includes myQ Wi-Fi commissioning — we connect it to your home network and get the app running on your phone before we leave. Smartphone control isn't an extra step.",
        },
        {
          icon: "🔋",
          heading: "Battery Backup Standard Option",
          body: "Western Washington power outages are real. We quote battery backup on every installation and strongly recommend it for Kirkland homeowners. A $150 upgrade that keeps your door working during a storm outage is worth every penny.",
        },
        {
          icon: "🔇",
          heading: "Right Opener for Your Garage",
          body: "Chain, belt, or jackshaft — we recommend based on your ceiling height, door weight, noise requirements, and budget. No upselling to the most expensive option if a belt-drive is the right fit.",
        },
        {
          icon: "🛡️",
          heading: "5-Year Warranty",
          body: "Every opener installation is backed by our 5-year parts and labor warranty. Manufacturer warranties on LiftMaster openers run 1–5 years depending on model — our warranty covers the gap.",
        },
        {
          icon: "⚡",
          heading: "Same-Day Installation",
          body: "We stock LiftMaster belt-drive and chain-drive openers for same-day installation across Kirkland and the Eastside. Call in the morning, have an automatic door by afternoon.",
        },
      ]}

      contentBlocks={[
        {
          heading: "Choosing the Right Opener for Your Kirkland Home",
          body: `The three main residential garage door opener types are chain-drive, belt-drive, and jackshaft (wall-mount). Each has a specific profile of advantages that makes it the right choice for certain garage configurations.

Chain-drive openers use a metal chain — similar to a bicycle chain — to pull the trolley along the rail. They're the most common and least expensive opener type, reliable and capable of handling heavy doors. The disadvantage is noise: the chain transmits vibration into the rail and motor housing, creating the characteristic rattling sound that many homeowners find disruptive. For garages that are detached or where no living space is directly above or adjacent, chain-drive is a perfectly acceptable choice. Zeus installs LiftMaster chain-drive openers for applications where the lower cost is the priority and noise is not a concern.

Belt-drive openers replace the chain with a reinforced rubber belt. The belt absorbs vibration that the chain transmits, reducing operational noise by 50–70% compared to chain-drive. Belt-drive openers are Zeus's most common recommendation for Kirkland's attached garages — particularly homes where the garage is under a master bedroom or home office. The additional cost over chain-drive ($80–$120 more) is typically recovered quickly in quality-of-life for households where the garage operates multiple times per day.

Jackshaft openers (LiftMaster 8500W series) mount on the wall beside the door rather than on the ceiling. The motor drives the torsion bar directly, eliminating the overhead rail entirely. This makes jackshaft openers the quietest option available and the correct choice for three specific situations: (1) garages with low ceilings where a standard rail would interfere with the door's travel; (2) garages with high-lift or vertical-lift door configurations that can't accommodate a standard horizontal rail; (3) homes where noise is the absolute priority and belt-drive isn't quiet enough. Jackshaft openers are more expensive than overhead options but provide the best noise performance available.

For motor size, 1/2 HP covers standard residential doors up to 200 lbs. 3/4 HP is recommended for doors 200–350 lbs — insulated double doors, heavy wood doors, and doors with significant weather sealing. Zeus measures or estimates your door weight during the assessment and selects the appropriate motor size to ensure the opener isn't running near its capacity limit every cycle.`,
        },
        {
          heading: "What to Expect During a Zeus Opener Installation",
          body: `A professional garage door opener installation is more involved than it appears — the rail must be positioned correctly, the opener must be mounted at the right height and angle, the sensors must be aligned precisely, and the opener must be calibrated to the specific weight and travel distance of your door.

Zeus begins every installation with a door assessment. We manually lift the door, disconnect any existing opener, and check the spring balance — confirming the door holds position at mid-travel. If the door is out of balance, we adjust spring tension before proceeding. An opener mounted on an unbalanced door runs under excess load every cycle and typically fails within 3–5 years regardless of brand or quality.

Rail assembly is next. The rail sections are connected and the trolley carriage is installed. The rail is then attached to the motor unit and the front bracket above the door. Rail angle matters: a rail that slopes downward toward the door causes the trolley to coast forward when the motor stops, creating premature wear on the trolley carriage and opener drive. Zeus sets the rail level or with a slight upward slope toward the motor unit.

Safety sensors are installed at 4–6 inches above the floor on each side of the door. We confirm the LED on the receiving sensor is solid (not blinking) before proceeding — blinking indicates misalignment or interference. The wiring is run along the tracks and wall to the motor unit using the low-voltage wire provided with the opener.

Final calibration involves setting the travel limits (exactly where the door stops at full open and full close) and the force settings (how much resistance the opener will overcome before stopping). Correct force settings are important for safety: too low and the door stops before fully closing; too high and the opener will push through an obstruction rather than reversing. Zeus calibrates both settings to the specific door weight and spring tension we measured during the assessment — not using the factory defaults that aren't tuned to your door.`,
        },
      ]}

      relatedEntities={[
        "LiftMaster 8550W",
        "LiftMaster 8500W jackshaft",
        "Chain-drive opener",
        "Belt-drive opener",
        "myQ Wi-Fi",
        "Battery backup unit",
        "Safety sensor pair",
        "Trolley carriage",
        "Rail assembly",
        "Travel limit setting",
        "Force calibration",
        "UL 325 compliance",
        "HomeLink integration",
        "1/2 HP motor",
        "3/4 HP motor",
        "Rolling code technology",
      ]}
      relatedArticles={[
        { title: "Best Garage Door Opener for PNW Homes", href: "/blog/best-garage-door-opener-pnw" },
        { title: "Chain vs Belt vs Jackshaft Opener", href: "/blog/chain-vs-belt-vs-jackshaft-opener" },
        { title: "LiftMaster vs Chamberlain: Full Comparison", href: "/blog/liftmaster-vs-chamberlain-garage-door-opener" },
      ]}
      relatedServices={[
        { label: "Opener Repair & Installation", href: "/services/opener-repair" },
        { label: "Remote & Keypad Programming", href: "/services/remote-keypad-programming" },
        { label: "Safety Inspection", href: "/services/safety-inspection" },
      ]}

      faqs={MANUAL_TO_AUTO_FAQS}

      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Opener Installation", url: "/services/manual-to-automatic-conversion" },
      ]}
    />
  );
}
