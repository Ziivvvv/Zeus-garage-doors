/**
 * pages/services/TrackRepairPage.tsx — Zeus Garage Doors
 * /services/track-repair
 *
 * SEO targets:
 *   H1:  "Garage Door Track Repair Kirkland WA"
 *   Primary: bent garage door track, track alignment, garage door track replacement
 */

import ServicePage from "../../components/ServicePage";

const TRACK_FAQS = [
  {
    question: "Can a bent garage door track be repaired or does it need replacing?",
    answer:
      "It depends on the severity and location of the bend. Minor bends in the vertical track — a gentle curve or a small dent that a roller can still pass through — can often be straightened with professional track-straightening tools without full replacement. Severe bends (sharp kinks, crimped sections, or bends in the curved radius section where vertical meets horizontal) typically require section replacement because straightening creates stress fractures that fail quickly. Zeus assesses each case and recommends the most cost-effective fix — we don't replace tracks that can be safely repaired.",
  },
  {
    question: "How do I know if my garage door track is bent or misaligned?",
    answer:
      "Signs of bent or misaligned track: (1) the door sticks or jerks at the same point in its travel every cycle — a roller is catching a bent section; (2) visible gap between rollers and the track flange — track has spread or bowed outward; (3) door scraping against the track on one side; (4) rollers jumping out of the track; (5) a specific section of track that looks visually deformed, bent inward, or out-of-square when viewed from the side. Track misalignment without a visible bend is usually caused by loose mounting brackets that allow the track to shift over time.",
  },
  {
    question: "How much does garage door track repair cost in Kirkland WA?",
    answer:
      "Track realignment (tightening brackets and adjusting track position) is included in Zeus's flat service rate. Track straightening for a minor bend runs $80–$150 depending on the section involved. Full track section replacement runs $150–$300 per section for standard residential track. We provide the exact price on-site after assessment — track damage varies significantly by severity and location, so phone quotes aren't accurate.",
  },
  {
    question: "What causes a garage door to go off-track?",
    answer:
      "The most common cause is a broken cable — when one cable snaps, the door drops unevenly and the roller on that side pops out of the track. Other causes: a vehicle striking the door while it was in motion, a broken spring that caused the door to fall rapidly, a worn roller that seized and dragged out of the track, or loose track brackets that let the track spread wide enough for a roller to escape. Zeus addresses both the off-track condition and the underlying cause — just putting the door back on track without fixing what caused it is a temporary fix.",
  },
  {
    question: "Is it safe to operate my door if the track is slightly bent?",
    answer:
      "No — even a minor track bend that the door still moves through is a safety concern. A roller catching a bent section puts lateral stress on the door panels, can cause rollers to pop out of the track mid-cycle, and forces the opener motor to overcome the obstruction — shortening motor life. A door with a track problem can also drop suddenly if a roller escapes the track with the door elevated. Don't operate the door until the track is repaired.",
  },
  {
    question: "My garage door track is covered in rust — does it need replacing?",
    answer:
      "Surface rust on galvanized steel tracks is normal in the Pacific Northwest after several years and doesn't require replacement by itself. The track should be cleaned with a wire brush to remove loose rust, then wiped dry — do not lubricate the track surface, as this causes roller slippage. If rust has caused the track material to pit, flake, or thin significantly, or if the track has warped from corrosion, replacement is warranted. Zeus assesses rust severity during track repair calls and gives you a clear recommendation.",
  },
  {
    question: "How long does garage door track repair take?",
    answer:
      "Track realignment (adjusting and tightening brackets) typically takes 30–45 minutes. Track straightening for a minor bend takes 45–90 minutes. Full track section replacement takes 90–150 minutes depending on the door height and section involved. We give you a time estimate when we assess the damage on-site.",
  },
];

export default function TrackRepairPage() {
  return (
    <ServicePage
      metaTitle="Garage Door Track Repair Kirkland WA | Zeus Garage Doors"
      metaDescription="Bent, misaligned, or damaged garage door track? Zeus repairs and replaces tracks same-day in Kirkland, Bellevue & Eastside WA. Flat-rate pricing. Call 425-448-6443."
      canonical="/services/track-repair"

      serviceName="Garage Door Track Repair"
      pageH1="Garage Door Track Repair Kirkland WA"

      serviceTagline="A bent or misaligned garage door track causes rollers to bind, jump, and potentially drop the door mid-travel. Zeus Garage Doors repairs and replaces tracks same-day across Kirkland, Bellevue, Redmond, and all Eastside WA communities — addressing both the damage and its root cause."

      directAnswer="Zeus Garage Doors provides same-day garage door track repair and replacement in Kirkland WA and across the Eastside. We straighten bent tracks, realign misaligned sections, replace damaged track, and restore proper roller clearance — all at flat-rate pricing. Call 425-448-6443."

      heroImage={{
        src: "/images/garage-door-track-repair-kirkland-wa.webp",
        alt: "Garage door track repair in Kirkland WA — Zeus Garage Doors technician realigning door track",
        title: "Zeus Garage Doors technician repairing bent and misaligned garage door track on residential door in Kirkland, Washington",
      }}

      whatWeDoHeading="What's Included in Our Garage Door Track Repair Service"
      whatWeDoItems={[
        "Track damage assessment — determine whether straightening or replacement is needed",
        "Track straightening for minor bends using professional track-forming tools",
        "Full track section replacement for severe bends, kinks, or crimped sections",
        "Track bracket inspection and tightening — eliminate the looseness that causes drift",
        "Track spacing adjustment — restore the 1/4\"–1/2\" roller-to-flange gap",
        "Roller inspection — check for damage caused by track contact",
        "Door panel inspection — assess panel stress from roller catching bent track",
        "Post-repair full-cycle test — confirm smooth travel through entire range",
        "Root cause fix — address cable, spring, or opener issue that caused the track damage",
      ]}

      warningSignsHeading="Signs Your Garage Door Track Needs Repair"
      warningSignsItems={[
        "Door sticks or jerks at the same point every cycle — roller catching a bent section",
        "Visible bend, kink, or deformation in any track section",
        "Rollers visibly leaving the track during door operation",
        "Gap between rollers and the track flange — track has spread or bowed outward",
        "Loud scraping or grinding localized to one section of travel",
        "Door sits crooked when fully closed — track on one side lower than the other",
        "Track mounting brackets loose — track wobbles when touched",
        "Rust pitting or corrosion causing rough roller travel",
        "Vehicle contact with the door — almost always damages the vertical track",
      ]}

      whyZeusHeading="Why Kirkland Homeowners Choose Zeus for Garage Door Track Repair"
      whyZeusPoints={[
        {
          icon: "🔍",
          heading: "Repair vs. Replace Assessment",
          body: "We don't automatically replace bent track — we assess whether straightening is a safe and durable fix. Minor bends in the vertical track are straightened; severe kinks and curved-section damage are replaced. You get the honest recommendation, not the more expensive default.",
        },
        {
          icon: "🔗",
          heading: "Root Cause Always Addressed",
          body: "Track doesn't bend by itself. We find what caused the damage — broken cable, spring failure, vehicle contact, loose brackets — and fix it alongside the track repair. A track-only fix that ignores the cause will fail again.",
        },
        {
          icon: "⚡",
          heading: "Same-Day Track Service",
          body: "We stock standard residential track sections in 7', 8', and 10' heights for same-visit replacement. No waiting for a parts order when the damage requires new track.",
        },
        {
          icon: "💰",
          heading: "Flat-Rate Pricing",
          body: "Track assessment, straightening, and replacement are all flat-rate. We give you the price after seeing the damage — not a phone estimate that changes when we arrive.",
        },
        {
          icon: "🛡️",
          heading: "5-Year Warranty",
          body: "All track repair and replacement work is backed by our 5-year parts and labor warranty. New track sections that fail due to installation defect are replaced at no charge.",
        },
        {
          icon: "📍",
          heading: "Locally Based in Kirkland",
          body: "Zeus technicians are based on the Eastside. Track damage calls are dispatched quickly — and we know the housing stock across Kirkland, Bellevue, and surrounding communities.",
        },
      ]}

      contentBlocks={[
        {
          heading: "How Garage Door Track Damage Happens — and What It Means for Your Door",
          body: `Garage door tracks are the structural rails that guide rollers through the door's travel path. A standard residential door has two vertical tracks (one on each side) that connect to two horizontal tracks running back along the ceiling into the garage. The curved section where vertical meets horizontal — called the radius — is the most mechanically stressed point in the system.

The most common cause of track damage Zeus encounters in Kirkland is vehicle contact. A car or truck that clips the door while it's opening or partially open almost always hits the vertical track section on the impacted side. The impact bends the track inward at the contact point, creating an obstruction that rollers can't pass through cleanly. If the door was in motion during the collision, the roller may have already been forced out of the track — creating an immediate off-track condition that requires both track repair and door realignment.

The second most common cause is cable failure. When a lift cable snaps, the door drops suddenly on the side of the failed cable. The abrupt, uneven drop slams the roller stem laterally against the track flange at high speed — bending the track outward at the point of impact. Zeus always checks cables and springs after track damage because the underlying failure that caused the track to bend must be fixed before the repaired track will stay straight.

Gradual track drift from loose brackets is less dramatic but equally damaging. Tracks are mounted to the door frame and garage walls with lag bolts through steel angle brackets. Every door cycle — thousands per year — vibrates these brackets slightly. Over years, the hardware loosens, allowing the tracks to shift inward or outward from their correct position. A track that has drifted even 3/4" inward creates a gap between the roller wheel and the track flange on one side while pinching the roller on the other — causing the drag and binding that homeowners notice first as noise, then as door resistance.`,
        },
        {
          heading: "Track Repair vs. Full Track Replacement — Zeus's Decision Framework",
          body: `One of the most common questions Zeus answers at a track repair call is: can this be straightened, or does it need replacing? The answer depends on three factors: bend severity, bend location, and track age.

Bend severity is the primary factor. A gentle bow or minor dent in the vertical track section — where the track wall is deformed but not kinked — can typically be straightened with professional track-forming tools. The track material is galvanized steel with enough ductility to be reshaped without cracking if the bend isn't sharp. We straighten the track, verify the roller clears the straightened section cleanly, and confirm the repair holds under load. This approach costs significantly less than replacement and is structurally sound when the bend isn't severe.

Sharp kinks — where the track material has folded rather than bent — cannot be safely straightened. The fold creates a stress fracture in the steel that weakens the material permanently. A kinked section that's straightened under load will re-deform at the fracture point, usually within weeks. Zeus replaces kinked sections rather than attempting repairs that will fail quickly.

Location matters as much as severity. Bends in the radius section (the curved portion where vertical meets horizontal) are almost always replaced rather than straightened. The radius is under constant lateral load from the rollers as they transition from vertical to horizontal travel — a weakened or straightened radius section fails under this repeated stress. Vertical track sections are easier to straighten because they bear primarily axial roller load without the directional change stress.

Track age is the third factor. A track that's 15+ years old with visible corrosion and thinning walls is a replacement candidate even for minor bends — the overall structural integrity has declined to the point where a repair won't extend service life meaningfully. When we replace track, we replace the full section (not just the bent portion) to ensure consistent wall thickness and strength throughout the run.`,
        },
      ]}

      relatedEntities={[
        "Vertical track",
        "Horizontal track",
        "Track radius",
        "Track gauge",
        "Track bracket",
        "Lag bolt",
        "Roller clearance",
        "Track flange",
        "Galvanized steel track",
        "Track straightening",
        "Section replacement",
        "Off-track repair",
        "Cable drum",
        "Counterbalance system",
        "Standard lift track",
        "High-lift track",
      ]}

      faqs={TRACK_FAQS}

      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Track Repair", url: "/services/track-repair" },
      ]}
    />
  );
}
