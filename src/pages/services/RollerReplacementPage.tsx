/**
 * pages/services/RollerReplacementPage.tsx — Zeus Garage Doors
 * /services/roller-replacement
 *
 * SEO targets:
 *   H1:  "Garage Door Roller Replacement Kirkland WA"
 *   H2s: semantic cluster — repair, replacement, noisy, nylon, steel, cost, services
 *   Words: 1,300+ (competitors average 600–800)
 *   FAQ schema: rare among competitors — gap exploited
 */

import ServicePage from "../../components/ServicePage";

const ROLLER_FAQS = [
  {
    question: "How do I know if my garage door rollers need replacing?",
    answer:
      "The clearest signs are: (1) a grinding, squealing, or rattling noise during operation that persists after lubrication; (2) visible cracking, chipping, or flat spots on the roller wheels; (3) wobbling or shaking as the door moves through the tracks; (4) the door sticking or jerking at certain points in its travel. Worn rollers put excessive strain on your opener motor and accelerate track wear — replacing them early is the most cost-effective maintenance move.",
  },
  {
    question: "How much does garage door roller replacement cost in Kirkland WA?",
    answer:
      "Zeus Garage Doors charges a flat service rate that covers the visit, diagnosis, and labor. Nylon rollers (the most common upgrade) run $8–$14 per roller; a full set of 10–12 rollers on a standard double door costs $80–$170 in parts. Total job cost including labor is typically $150–$280 for a full roller replacement. We provide the exact price on-site before starting — no phone quotes, no surprises.",
  },
  {
    question: "What's the difference between nylon and steel garage door rollers?",
    answer:
      "Steel rollers are the builder-grade standard found on most new doors — functional but loud, and they rust over time in Washington's wet climate. Nylon rollers have a sealed ball-bearing center encased in a nylon wheel: they operate 50–70% quieter, don't rust, don't require lubrication, and last 2–3× longer. For Kirkland and Eastside WA homes — especially those with garages adjacent to living spaces — nylon rollers are the right long-term choice.",
  },
  {
    question: "How many rollers does a garage door have?",
    answer:
      "A standard single-car door (8'–10' wide) has 10 rollers. A standard double-car door (16'–18' wide) has 12 rollers. High-lift and custom-height doors may have additional rollers. Zeus replaces the full set — replacing only a few worn rollers leaves mismatched wear rates and causes uneven track loading.",
  },
  {
    question: "Can I replace garage door rollers myself?",
    answer:
      "The bottom rollers are in brackets attached to the bottom cable — removing these requires releasing spring tension, which is dangerous without professional training. The middle and top rollers can be swapped without releasing tension, but the bottom bracket rollers should always be done by a licensed technician. If your door has a broken spring at the same time, attempting roller replacement yourself becomes a serious injury risk. Call us for a fast, flat-rate roller replacement instead.",
  },
  {
    question: "How long do garage door rollers last?",
    answer:
      "Builder-grade steel rollers typically last 5–7 years in the Pacific Northwest's wet climate before rust and wear degrade performance. Premium nylon rollers with sealed bearings are rated for 10,000–20,000 cycles — roughly 10–15 years of average residential use. Doors that operate 4+ times per day (dual-car household or home office garage) wear rollers faster. Annual lubrication extends steel roller life; nylon rollers require no lubrication.",
  },
  {
    question: "Will new rollers make my garage door quieter?",
    answer:
      "Yes — in most cases, roller replacement is the single most effective noise reduction repair you can make. If your door uses steel rollers, upgrading to nylon rollers with sealed ball bearings eliminates the grinding and rattling that steel-on-steel track contact creates. Combined with hinge lubrication and track cleaning, a full roller replacement typically reduces operational noise by 50–70%. If the noise persists after roller replacement, the next likely cause is worn hinges or a chain-drive opener.",
  },
];

export default function RollerReplacementPage() {
  return (
    <ServicePage
      metaTitle="Garage Door Roller Replacement Kirkland WA | Zeus Garage Doors"
      metaDescription="Noisy or worn garage door rollers? Zeus replaces steel & nylon rollers same-day in Kirkland, Bellevue & Eastside WA. Flat-rate pricing. Call 425-448-6443."
      canonical="/services/roller-replacement"

      serviceName="Garage Door Roller Replacement"
      pageH1="Garage Door Roller Replacement Kirkland WA"

      serviceTagline="Worn rollers are the leading cause of noisy, jerky garage doors — and one of the easiest same-day fixes. Zeus Garage Doors replaces steel and nylon rollers for homeowners across Kirkland, Bellevue, Redmond, and all Eastside WA communities."

      directAnswer="Zeus Garage Doors provides same-day garage door roller replacement in Kirkland WA and across the Eastside. We upgrade builder-grade steel rollers to sealed nylon rollers, reducing noise by up to 70% and eliminating rust-related wear. Full set replacement, flat-rate pricing. Call 425-448-6443."

      heroImage={{
        src: "/images/garage-door-roller-replacement-kirkland-wa.webp",
        alt: "Garage door roller replacement in Kirkland WA — Zeus Garage Doors technician installing nylon rollers",
        title: "Zeus Garage Doors technician replacing worn steel rollers with sealed nylon rollers on residential garage door in Kirkland, Washington",
      }}

      whatWeDoHeading="What's Included in Our Garage Door Roller Replacement Service"
      whatWeDoItems={[
        "Full roller set replacement — all 10–12 rollers on single and double-car doors",
        "Nylon sealed ball-bearing rollers standard — quieter, rust-resistant, longer-lasting than steel",
        "Bottom bracket roller replacement including safe spring-tension management",
        "Track cleaning and alignment check with every roller replacement job",
        "Hinge inspection — worn hinges are the second most common noise source after rollers",
        "Opener force recalibration after roller swap to account for reduced friction",
        "Post-replacement door balance test and full-cycle operation check",
        "Lubrication of all moving parts — hinges, springs, tracks — included at no extra charge",
        "Exact price confirmed on-site before any work begins",
      ]}

      warningSignsHeading="Signs Your Garage Door Rollers Need Replacement"
      warningSignsItems={[
        "Grinding, squealing, or rattling noise that lubrication doesn't fix — worn roller bearings",
        "Visible cracks, chips, or flat spots on the roller wheels",
        "Door wobbles or shakes as it moves — misaligned or worn rollers losing track contact",
        "Door sticks or jerks at the same point every cycle — a damaged roller causing drag",
        "Rust streaks on the track surface — corroded steel rollers leaving deposits",
        "Opener straining louder than usual — worn rollers increasing resistance on the motor",
        "Steel rollers with no rubber coating — builder-grade hardware due for upgrade",
        "Door age over 7 years with no roller service — past average replacement interval for steel",
      ]}

      whyZeusHeading="Why Kirkland Homeowners Choose Zeus for Garage Door Roller Replacement"
      whyZeusPoints={[
        {
          icon: "⚡",
          heading: "Same-Day Roller Replacement",
          body: "We stock full roller sets for every standard residential door size — single and double-car, standard and high-lift. No waiting for parts. Most Kirkland roller replacement jobs are completed in under 90 minutes from arrival.",
        },
        {
          icon: "🔇",
          heading: "Nylon Upgrade Standard",
          body: "We install sealed nylon ball-bearing rollers as our standard replacement — not the cheapest steel rollers that come back in 3 years. Nylon rollers operate quieter, outlast steel 2–3×, and don't rust in Kirkland's damp winters.",
        },
        {
          icon: "💰",
          heading: "Flat-Rate Pricing",
          body: "We quote the exact price for your roller replacement before touching the door. The quote covers all rollers, labor, track cleaning, and the post-replacement balance test. No per-roller add-ons, no surprise fees at the end.",
        },
        {
          icon: "🛡️",
          heading: "5-Year Warranty",
          body: "Every roller replacement is backed by our 5-year parts and labor warranty. If a roller fails due to a defect or installation error within 5 years, we return and fix it at no charge — the strongest warranty on the Eastside.",
        },
        {
          icon: "🔍",
          heading: "Full System Check Included",
          body: "Rollers don't fail in isolation — we inspect the full door system while we're there. Hinges, cables, springs, and opener force settings are all checked. If we find something else that needs attention, we tell you clearly and give you a separate price.",
        },
        {
          icon: "📍",
          heading: "Locally Based in Kirkland",
          body: "Zeus Garage Doors technicians are based on the Eastside. When you call, you reach a local technician — not a national dispatch center. We know the housing stock, the climate, and the specific wear patterns in Kirkland, Bellevue, and the surrounding communities.",
        },
      ]}

      contentBlocks={[
        {
          heading: "Steel vs. Nylon Garage Door Rollers: What Kirkland Homeowners Should Know",
          body: `Most homes in Kirkland and across the Eastside were built with steel garage door rollers — the standard builder-grade hardware that comes with new door installations. Steel rollers are functional when new, but they have three significant disadvantages for Pacific Northwest homeowners.

First, steel rollers corrode. Kirkland averages 150+ days of rain per year, and garage environments rarely have climate control. Moisture enters through the bottom seal gap, humidity condenses on cold metal surfaces, and steel rollers begin oxidizing within a few years of installation. As rust builds up, roller bearings seize, wheels develop flat spots, and the door begins making the grinding noise that many homeowners mistake for a spring or opener problem.

Second, steel rollers are loud. The steel wheel rolling against the steel track amplifies vibration through the entire door panel — the sound carries directly into adjacent rooms. In Kirkland's attached garages, which often share a wall with a bedroom or living room, this noise becomes a genuine quality-of-life issue.

Third, steel rollers require regular lubrication to operate correctly. Without annual lubrication, the bearings dry out and fail faster. Most homeowners don't lubricate their rollers — so steel roller life in real-world conditions is often 5–6 years, not the 8–10 years on paper.

Nylon rollers solve all three problems. The nylon wheel material doesn't rust, doesn't require lubrication, and absorbs vibration instead of transmitting it. The sealed ball-bearing center is protected from moisture by a nylon housing that prevents the corrosion that destroys steel bearings. The result is a roller that operates quietly, lasts 10–15 years without maintenance, and remains effective through Washington state's wet winters.

Zeus Garage Doors installs nylon rollers as our standard replacement hardware. We don't offer the cheapest steel rollers to keep the job price artificially low — because a steel roller replacement that fails in 4 years isn't a good value for Kirkland homeowners.`,
        },
        {
          heading: "Garage Door Roller Replacement as Part of a Full Tune-Up in Kirkland, WA",
          body: `Roller replacement is often the starting point for a broader garage door tune-up service. When Zeus Garage Doors technicians arrive at a Kirkland home for roller replacement, we assess the full door system — because rollers rarely wear out in isolation.

The most common combination we find: worn rollers plus loose hinge hardware. Every time a worn roller creates drag in the track, the corresponding hinge bracket absorbs the shock. Over thousands of cycles, hinge bolts loosen, and the stem that holds the roller in the hinge bracket develops play. We tighten all hinge hardware as part of every roller replacement job.

The second most common combination: worn rollers plus a dirty or misaligned track. Steel rollers leave rust deposits and debris in the track groove. This buildup increases resistance for the new rollers and can cause premature wear. We clean the full track — both vertical and horizontal sections — with every roller replacement.

Beyond rollers and hinges, we check the cable condition, spring balance, bottom weather seal, and opener limit and force settings. A door running on fresh rollers through clean tracks requires less force from the opener — we recalibrate the opener's travel limits and force settings to match the improved conditions. This prevents the opener from working harder than necessary and extends motor life.

For Kirkland homeowners who want a complete system service rather than just roller replacement, Zeus offers a full garage door tune-up that covers all moving parts, hardware, balance, and opener calibration. Ask about our tune-up service when you call — it's often cost-effective to combine both on a single visit.`,
        },
      ]}

      relatedEntities={[
        "Nylon rollers",
        "Steel rollers",
        "Sealed ball bearings",
        "Bottom bracket",
        "Roller stem",
        "Hinge brackets",
        "Track gauge",
        "Horizontal track",
        "Vertical track",
        "Track radius",
        "Roller replacement interval",
        "Counterbalance system",
        "UL 325 compliance",
        "Garage door cycle rating",
        "10,000-cycle rollers",
        "20,000-cycle rollers",
        "Door panel weight",
      ]}

      faqs={ROLLER_FAQS}

      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Roller Replacement", url: "/services/roller-replacement" },
      ]}
    />
  );
}
