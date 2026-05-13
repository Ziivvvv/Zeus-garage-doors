/**
 * pages/blog/GarageDoorMaintenanceChecklist.tsx — Zeus Garage Doors
 * Target: "garage door maintenance checklist" + PNW homeowners
 */

import BlogPost from "../../components/BlogPost";

const CONTENT = `
<p>
  Most garage door failures are preventable. A broken torsion spring, a snapped cable, a seized opener — these rarely happen without warning. Annual maintenance catches the warning signs before they become 9 PM emergency calls. This checklist covers what to do yourself and what to hand off to a professional.
</p>

<h2>DIY Monthly Checks (5 Minutes)</h2>

<h3>Visual Inspection</h3>
<p>
  With the door closed, look at the springs, cables, and rollers from inside the garage. You're looking for: visible rust or corrosion on spring coils, fraying strands on the lift cables, cracked or flat-spotted rollers, and any hardware (hinges, brackets) that looks obviously bent or loose. Don't touch the springs or cables — just observe.
</p>

<h3>Balance Test</h3>
<p>
  Pull the red emergency release cord to disconnect the opener. Manually lift the door to the halfway point (about 3–4 feet) and let go. A properly balanced door holds position — or drifts less than 6 inches. If it falls rapidly, the spring tension is low. If it rises, the tension is too high. Either signals a spring adjustment is needed. Reconnect the opener before using the door normally.
</p>

<h3>Auto-Reverse Test</h3>
<p>
  Place a 2×4 flat on the floor under the center of the door. Close the door using the opener. When the door makes contact with the board, it should reverse automatically within 2 seconds. If it doesn't reverse — or takes longer — the opener's force settings need adjustment. This is a federal safety requirement (UL 325) and a test worth running monthly if you have children or pets.
</p>

<h2>DIY Seasonal Maintenance (Fall and Spring)</h2>

<h3>Lubrication</h3>
<p>
  Apply white lithium grease or silicone-based lubricant to: torsion spring coils (the full length of each coil), roller stems where they enter the hinge bracket, hinge pivot points, and the top surface of the opener rail. Do not lubricate the track — the track should be clean and dry for proper roller traction. Do not use WD-40 — it's a solvent that strips lubrication and attracts dirt.
</p>
<p>
  In Kirkland and the Eastside, do this in early fall before temperatures drop. Cold temperatures make lubricant less effective, and you want fresh lubrication in place before the wet season.
</p>

<h3>Hardware Tightening</h3>
<p>
  Using a socket wrench or ratchet, go around the door and snug all visible nuts and bolts on hinges, track brackets, and the opener rail mounts. Do not overtighten — just snug. Loose hardware is the primary cause of rattling garage doors and can allow tracks to drift out of alignment.
</p>

<h3>Weather Seal Inspection</h3>
<p>
  Inspect the bottom seal for cracks, tears, and sections that have compressed flat. Close the door and check from inside for daylight under or around the frame. Side and top weatherstripping should compress against the door face without gaps. Failed seals let in water, cold air, and pests — and replacement is a quick, inexpensive fix. See our <a href="/services/weather-seal-replacement">weather seal replacement service</a>.
</p>

<h3>Sensor Test</h3>
<p>
  Verify both safety sensors have solid (non-blinking) LED lights. Wave your hand through the sensor beam while the door is closing — it should reverse immediately. If either LED is blinking or the door doesn't respond to a broken beam, call for sensor repair. See our <a href="/services/sensor-repair">sensor repair service</a>.
</p>

<h2>Annual Professional Maintenance (Have a Technician Do This)</h2>

<h3>Spring Tension Measurement and Adjustment</h3>
<p>
  Springs stretch slightly over thousands of cycles. A spring that was correctly tensioned at installation may be undertensioned after 3–5 years, forcing the opener to carry extra load. A technician measures current spring tension against the door's actual weight and adjusts accordingly — this isn't a visual inspection, it's a measurement.
</p>

<h3>Cable Condition Assessment</h3>
<p>
  Lift cables run from the cable drums to the bottom brackets on each side of the door. Internal strand fraying isn't visible from the outside — a technician inspects cable condition up close, looking for corrosion, broken strands, and correct drum winding. A cable with 3 broken strands is close to failure and should be replaced before it snaps.
</p>

<h3>Opener Force Calibration</h3>
<p>
  Over time, opener force settings drift — particularly as door components wear and the door's resistance changes. An undertensioned spring means the opener is running near its force limit every cycle. A technician recalibrates both force and travel limit settings after addressing any underlying door issues, ensuring the opener runs well within its design parameters.
</p>

<h3>Full 21-Point Inspection</h3>
<p>
  Zeus Garage Doors provides a comprehensive 21-point <a href="/services/safety-inspection">garage door safety inspection</a> that covers every component with a pass/monitor/replace rating and written report. This is the most efficient single annual service for Eastside homeowners — one visit addresses everything on this list and produces documentation of the door's condition.
</p>

<h2>Pacific Northwest-Specific Maintenance Priorities</h2>
<p>
  Kirkland averages 150+ days of rain per year. Compared to drier climates, PNW garages face: faster spring corrosion from sustained humidity, cable corrosion from moisture infiltration, roller bearing seizing from water intrusion, and weather seal degradation from thermal cycling. Annual maintenance in this climate isn't optional — it's the minimum responsible frequency for a system that operates daily in corrosion-accelerating conditions.
</p>
<p>
  For Eastside homeowners who want a professional to handle the full annual service, Zeus's <a href="/services/garage-door-tune-up">tune-up and maintenance service</a> covers lubrication, adjustment, inspection, and safety testing in a single flat-rate visit.
</p>
`;

const FAQS = [
  {
    question: "How often should a garage door be serviced?",
    answer:
      "Once per year for most residential doors in the Pacific Northwest. Doors used 4+ times per day benefit from service every 6 months. Doors over 10 years old should be inspected annually regardless of use frequency, as springs and cables approach end-of-life.",
  },
  {
    question: "What is the most important garage door maintenance task?",
    answer:
      "The balance test and lubrication tie for most impactful. A door that isn't balanced strains the opener every cycle and causes accelerated wear across all components. Proper lubrication prevents corrosion and reduces friction that wears springs, rollers, and hinges prematurely.",
  },
  {
    question: "Can I lubricate my garage door tracks?",
    answer:
      "No — the tracks should be clean and dry. Lubricant on the tracks causes roller slippage and can attract debris that builds up in the track groove. Only lubricate roller stems, hinge pivot points, and torsion spring coils. Use white lithium grease or silicone spray — never WD-40.",
  },
  {
    question: "What should I do if my garage door balance test fails?",
    answer:
      "Stop using the opener until the spring tension is corrected. Operating an unbalanced door through the opener strains the motor beyond its design load and causes premature failure. Call a technician for spring adjustment — this is not a DIY repair due to the tension stored in torsion springs.",
  },
];

export default function GarageDoorMaintenanceChecklistPage() {
  return (
    <BlogPost
      metaTitle="Garage Door Maintenance Checklist for PNW Homes"
      metaDescription="Annual garage door maintenance checklist for Kirkland, Bellevue & Eastside WA homeowners. DIY monthly checks + what to have a pro handle once a year."
      canonical="/blog/garage-door-maintenance-checklist"
      title="Garage Door Maintenance Checklist for Pacific Northwest Homeowners"
      datePublished="2026-05-12"
      authorName="Zeus Garage Doors"
      directAnswer="Garage door maintenance for PNW homeowners: monthly balance test and visual inspection, seasonal lubrication (white lithium grease — not WD-40) and hardware tightening, plus an annual professional inspection covering spring tension, cable condition, and opener calibration. In Kirkland's wet climate, annual service is the minimum responsible interval."
      content={CONTENT}
      tags={["Maintenance", "DIY Tips"]}
      readingTimeMinutes={7}
      faqs={FAQS}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Garage Door Maintenance Checklist", url: "/blog/garage-door-maintenance-checklist" },
      ]}
      relatedPosts={[
        {
          title: "How Long Do Garage Door Springs Last? (WA Climate Guide)",
          href: "/blog/how-long-do-garage-door-springs-last",
          excerpt: "Torsion springs last 10,000–20,000 cycles. In Washington's wet climate, that's often shorter.",
          datePublished: "2026-04-15",
        },
        {
          title: "Is DIY Garage Door Repair Safe? The Honest Answer",
          href: "/blog/is-diy-garage-door-repair-safe",
          excerpt: "Some repairs are safe DIY. Others — especially spring replacement — are genuinely dangerous.",
          datePublished: "2026-05-08",
        },
        {
          title: "Why Is My Garage Door So Noisy? 6 Causes & Fixes",
          href: "/blog/why-is-my-garage-door-so-noisy",
          excerpt: "Grinding, rattling, squeaking — each noise type points to a specific component.",
          datePublished: "2026-05-11",
        },
      ]}
    />
  );
}
