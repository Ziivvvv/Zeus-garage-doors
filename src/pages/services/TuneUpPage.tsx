/**
 * pages/services/TuneUpPage.tsx — Zeus Garage Doors
 * /services/garage-door-tune-up
 *
 * SEO targets:
 *   H1:  "Garage Door Tune-Up Kirkland WA"
 *   Primary: garage door tune-up, garage door maintenance service, garage door inspection
 */

import ServicePage from "../../components/ServicePage";

const TUNEUP_FAQS = [
  {
    question: "What's included in a garage door tune-up?",
    answer:
      "Zeus Garage Doors performs a comprehensive 21-point garage door tune-up: lubrication of all moving parts (springs, hinges, rollers, tracks), spring tension check and adjustment, cable inspection for fraying or corrosion, roller inspection and replacement recommendation, track alignment check, hardware tightening (all bolts and brackets), weather seal inspection, safety sensor test and alignment, opener force and travel limit calibration, battery backup test, and a full door balance test. We also check the auto-reverse safety function and provide a written condition report.",
  },
  {
    question: "How often should I get a garage door tune-up?",
    answer:
      "Once per year is the standard recommendation for residential garage doors in the Pacific Northwest. Kirkland's wet climate accelerates corrosion on springs, cables, and roller bearings, so annual service catches problems before they become failures. Doors used 4+ times per day (busy families or home offices) benefit from service every 6 months. If your door hasn't been serviced in over 2 years, schedule a tune-up before winter — cold temperatures stress already-worn springs and cables.",
  },
  {
    question: "How much does a garage door tune-up cost in Kirkland WA?",
    answer:
      "Zeus charges a flat rate for our 21-point garage door tune-up. The rate covers the full service — lubrication, inspection, adjustments, and safety testing. If we find parts that need replacement (rollers, hinges, weather seal), we give you a separate price before doing any additional work. The tune-up rate itself doesn't change based on what we find.",
  },
  {
    question: "Can a tune-up fix a noisy garage door?",
    answer:
      "In most cases, yes. Noise is almost always caused by friction — metal parts running dry or rollers that have worn beyond their lubrication range. A thorough tune-up with proper lubrication of springs, hinges, and rollers eliminates most garage door noise immediately. If noise persists after lubrication, we identify whether rollers (nylon upgrade recommended) or worn hinges are the cause and provide a quote for those repairs.",
  },
  {
    question: "What lubricant should I use on my garage door?",
    answer:
      "Use a silicone-based or lithium-based spray lubricant — specifically formulated for garage doors. Never use WD-40: it's a solvent and degreaser, not a lubricant, and it attracts dirt that accelerates wear. Apply lubricant to: torsion spring coils, roller bearings (not the track), hinge pivot points, and the top of the door rail. Do not lubricate the track itself — a clean, dry track provides better roller traction. Zeus uses professional-grade lubricant on every tune-up.",
  },
  {
    question: "Do I need a tune-up if my door seems to be working fine?",
    answer:
      "Yes — preventative maintenance is the point. Garage door failures (broken springs, snapped cables, failed openers) happen suddenly, usually at the worst time. A tune-up identifies components near the end of their service life before they fail. A $0 repair caught during a tune-up is worth far more than an emergency call at 9 PM when a spring breaks with your car trapped inside. Annual tune-ups also extend the life of your opener motor by ensuring the door is balanced and running at proper resistance.",
  },
  {
    question: "How long does a garage door tune-up take?",
    answer:
      "Zeus completes a standard 21-point tune-up in 45–75 minutes for a single-car door and 60–90 minutes for a double-car door. If we find additional work (roller replacement, spring adjustment, weather seal replacement), that adds time and we'll let you know the estimate before proceeding. We schedule tune-up appointments in 2-hour windows so you're not waiting all day.",
  },
];

export default function TuneUpPage() {
  return (
    <ServicePage
      metaTitle="Garage Door Tune-Up & Maintenance Kirkland WA | Zeus Garage Doors"
      metaDescription="Annual garage door tune-up service in Kirkland, Bellevue & Eastside WA. 21-point inspection, lubrication, adjustment & safety test. Flat-rate pricing. Call 425-448-6443."
      canonical="/services/garage-door-tune-up"

      serviceName="Garage Door Tune-Up & Maintenance"
      pageH1="Garage Door Tune-Up Kirkland WA"

      serviceTagline="Annual maintenance is the most cost-effective garage door service you can schedule. Zeus Garage Doors performs a comprehensive 21-point tune-up — lubrication, adjustment, inspection, and safety testing — for homeowners across Kirkland, Bellevue, Redmond, and the Eastside."

      directAnswer="Zeus Garage Doors provides comprehensive 21-point garage door tune-up service in Kirkland WA and across the Eastside. We lubricate all moving parts, adjust spring tension, inspect cables and rollers, test safety sensors, and calibrate opener settings — all in one flat-rate visit. Call 425-448-6443 to schedule."

      heroImage={{
        src: "/images/garage-door-tune-up-kirkland-wa.webp",
        alt: "Garage door tune-up service in Kirkland WA — Zeus Garage Doors technician performing maintenance inspection",
        title: "Zeus Garage Doors technician performing comprehensive garage door tune-up and maintenance on residential door in Kirkland, Washington",
      }}

      whatWeDoHeading="What's Included in Our 21-Point Garage Door Tune-Up"
      whatWeDoItems={[
        "Spring tension measurement and adjustment — confirm proper counterbalance for door weight",
        "Torsion and extension spring lubrication with professional-grade lithium spray",
        "Cable inspection — check for fraying, corrosion, and correct drum seating",
        "Roller inspection — assess wear, bearing condition, and lubrication",
        "Full track cleaning — remove debris and rust deposits from vertical and horizontal tracks",
        "Track alignment check — confirm consistent 1/2\" gap between rollers and track flanges",
        "Hardware tightening — all lag bolts, track brackets, and hinge bolts",
        "Hinge lubrication at all pivot points",
        "Bottom weather seal inspection — check for gaps, tears, and compression loss",
        "Safety sensor alignment and LED confirmation test",
        "Auto-reverse safety test — 2×4 board contact test per UL 325 protocol",
        "Opener force and travel limit calibration",
        "Battery backup test (if applicable)",
        "Door balance test — mid-travel hold check with opener disconnected",
        "Written condition report with any recommended future repairs",
      ]}

      warningSignsHeading="Signs Your Garage Door Is Overdue for a Tune-Up"
      warningSignsItems={[
        "More than 12 months since last professional service",
        "Squealing, grinding, or rattling noise that wasn't there before",
        "Door feels heavier than usual when lifting manually",
        "Opener straining louder or reversing unexpectedly",
        "Door shakes or vibrates during travel",
        "One side of the door lower than the other — balance issue",
        "Visible rust on springs or cables",
        "Weather seal cracked, torn, or leaving gaps at the floor",
        "Sensors requiring frequent realignment",
      ]}

      whyZeusHeading="Why Kirkland Homeowners Choose Zeus for Annual Garage Door Maintenance"
      whyZeusPoints={[
        {
          icon: "📋",
          heading: "True 21-Point Inspection",
          body: "Our tune-up isn't a quick lubrication and out-the-door. We check every component — springs, cables, rollers, hinges, tracks, hardware, sensors, opener, and weather seal — and document what we find. You leave with a full picture of your door's condition.",
        },
        {
          icon: "🔇",
          heading: "Immediate Noise Reduction",
          body: "Most noisy garage doors are fixed during a tune-up. Proper lubrication of springs, hinges, and roller bearings eliminates metal-on-metal friction noise immediately. If the noise requires parts (new nylon rollers, worn hinges), we quote it on-the-spot.",
        },
        {
          icon: "🛡️",
          heading: "Catch Problems Before Failure",
          body: "A spring that's 18 months from breaking looks and sounds different from a new spring. We identify components near end-of-life and give you a heads-up — so you schedule replacement on your timeline, not at 7 AM when the spring snaps and you're late for work.",
        },
        {
          icon: "💰",
          heading: "Flat-Rate, No Surprise Pricing",
          body: "The tune-up rate is all-inclusive for the 21-point service. If we find parts that need replacement, we quote that separately before doing any additional work. You decide what to add — we don't roll unexpected repairs into the bill.",
        },
        {
          icon: "⚡",
          heading: "Same-Day Scheduling Available",
          body: "We schedule tune-ups across Kirkland, Bellevue, Redmond, and the Eastside with same-day and next-day availability. Appointments run in 2-hour windows — no 6-hour wait-at-home blocks.",
        },
        {
          icon: "📍",
          heading: "PNW-Specific Maintenance Knowledge",
          body: "Kirkland's wet climate creates specific wear patterns — rust on spring coils, corrosion on cable strands, moisture in roller bearings. Our technicians know what to look for in Pacific Northwest garages specifically, not just generic maintenance checklists.",
        },
      ]}

      contentBlocks={[
        {
          heading: "Why Annual Garage Door Maintenance Matters in Kirkland, WA",
          body: `The Pacific Northwest's climate is harder on garage door hardware than homeowners typically expect. Kirkland averages 150+ days of rain annually, and garage environments — even with well-sealed doors — accumulate moisture that accelerates corrosion on every metal component. Torsion spring coils develop rust that increases friction and creates stress fractures. Cable strands corrode from the outside in, weakening their load capacity before the cable shows visible damage. Roller bearings absorb moisture and seize when they run dry.

Annual maintenance is the solution. A proper garage door tune-up in Kirkland should include real lubrication — not a quick spray-and-wipe, but coating the full length of spring coils, the interior of roller bearings, all hinge pivot points, and the top surface of the door rail with a professional lithium or silicone-based lubricant. This creates a moisture barrier that slows corrosion significantly and reduces friction that would otherwise wear components faster.

Beyond lubrication, spring tension requires periodic verification. Springs stretch slightly over thousands of cycles. A spring that was correctly tensioned at installation may be slightly undertensioned after 3–5 years, causing the door to feel heavier when lifted manually and forcing the opener motor to work harder than its design load. Zeus technicians measure and adjust spring tension as part of every tune-up — a 15-minute adjustment that extends opener motor life by years.

Track alignment is another maintenance point that's easy to overlook visually but has significant impact on door performance. The standard gap between roller stems and track flanges should be consistent at 1/4" to 1/2". Brackets loosen from vibration over time, allowing tracks to drift inward or outward. A track that's even slightly out of alignment puts lateral stress on rollers and hinges, accelerating wear on components that should last 10+ years.

For Kirkland homeowners, we recommend scheduling your annual tune-up in early fall — before the wet season begins and before the cold snaps that stress already-worn springs. A door that enters winter in good mechanical condition is significantly less likely to fail during the coldest, wettest months when emergency repair calls are most disruptive.`,
        },
        {
          heading: "Garage Door Balance Testing: The Most Important Safety Check",
          body: `The door balance test is the single most important diagnostic check Zeus performs during a tune-up — and the one most often skipped by less thorough services.

The test is simple: disconnect the opener from the door by pulling the red release cord, then manually lift the door to the halfway (mid-travel) position and let go. A properly balanced door should hold position at mid-travel, neither rising nor falling. It may drift slightly — within 6 inches is acceptable — but it should not fall rapidly or rise to the fully open position on its own.

If the door falls, the spring system is undertensioned — the counterbalance isn't supporting the full door weight. This forces the opener motor to carry load it wasn't designed for, dramatically shortening motor life. An opener dealing with an undertensioned door also strains at the motor every cycle, which homeowners often interpret as the opener "getting old" when the real problem is a spring that needs adjustment.

If the door rises, the springs are overtensioned — the counterbalance is stronger than the door weight requires. An overtensioned door can fly upward unexpectedly when released from a low position, which is a safety risk if anyone is near the door when the opener releases.

Zeus adjusts spring tension until the door holds correctly at mid-travel, then reconnects the opener and recalibrates the force settings to match the newly balanced door. This combination — correct spring tension plus correctly calibrated opener — gives you a door that operates safely, quietly, and with minimal wear on all components.

For Kirkland homeowners who want to check their door balance between tune-up visits: pull the release cord when the door is fully closed, lift the door manually to the halfway point, and observe whether it holds. If it doesn't, call for a tune-up or spring adjustment before the imbalance causes further component wear.`,
        },
      ]}

      relatedEntities={[
        "21-point inspection",
        "Torsion spring tension",
        "Door balance test",
        "Lubrication interval",
        "Lithium-based lubricant",
        "Silicone spray",
        "Track alignment",
        "Hardware torque",
        "Auto-reverse test",
        "UL 325 protocol",
        "Opener force calibration",
        "Travel limit setting",
        "Counterbalance system",
        "Cycle rating",
        "Preventative maintenance",
        "Weather seal compression",
      ]}

      faqs={TUNEUP_FAQS}

      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Tune-Up & Maintenance", url: "/services/garage-door-tune-up" },
      ]}
    />
  );
}
