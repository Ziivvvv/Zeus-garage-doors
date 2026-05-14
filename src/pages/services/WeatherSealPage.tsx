/**
 * pages/services/WeatherSealPage.tsx — Zeus Garage Doors
 * /services/weather-seal-replacement
 *
 * SEO targets:
 *   H1:  "Garage Door Weather Seal Replacement Kirkland WA"
 *   Primary: garage door weather seal replacement, bottom seal, weatherstripping, draft
 */

import ServicePage from "../../components/ServicePage";

const WEATHERSEAL_FAQS = [
  {
    question: "How do I know if my garage door weather seal needs replacing?",
    answer:
      "The clearest signs: (1) visible daylight under the closed door from inside the garage; (2) water, leaves, or debris getting in under the door during rain; (3) noticeable draft or cold air in the garage even with the door closed; (4) the rubber or vinyl seal material is visibly cracked, torn, compressed flat, or missing sections. In the Pacific Northwest, bottom seals typically last 5–8 years before the material hardens from UV exposure and cold temperatures and loses its compression seal.",
  },
  {
    question: "What's the difference between a bottom seal and weatherstripping?",
    answer:
      "A bottom seal (also called a door bottom or threshold seal) is the rubber or vinyl strip attached to the bottom edge of the door panel — it compresses against the floor or threshold to create a seal. Weatherstripping refers to the vinyl or rubber seals along the sides and top of the door frame (the stop molding). Zeus replaces both. Bottom seal replacement is the most common because the bottom edge contacts the floor on every cycle, causing faster wear.",
  },
  {
    question: "How much does garage door weather seal replacement cost in Kirkland WA?",
    answer:
      "Bottom seal replacement (the most common) runs $80–$150 total depending on door width and seal type. Side and top weatherstripping replacement is $120–$220 for a full frame seal. We provide the exact price on-site before starting. Both jobs are typically completed in 30–60 minutes.",
  },
  {
    question: "Can I replace garage door weatherstripping myself?",
    answer:
      "Side and top weatherstripping (the vinyl stop molding around the frame) is DIY-accessible — it's typically stapled or nailed to the frame and can be removed and replaced without tools beyond a pry bar and staple gun. Bottom seal replacement is more involved: the seal slides into a retainer channel along the door's bottom rail, and the old seal must be slid out while the new one is fed in. On a 16' double door, this requires feeding 16 feet of new seal through the channel — easier with two people. Zeus handles both in a single visit with professional seal material rated for PNW conditions.",
  },
  {
    question: "What type of bottom seal is best for Pacific Northwest weather?",
    answer:
      "For Kirkland and Eastside WA homes, we recommend a T-style or T-end bulb seal in EPDM rubber rather than standard vinyl. EPDM maintains flexibility in cold temperatures (down to -40°F) and resists UV degradation significantly better than PVC-based vinyl seals that harden and crack in Pacific Northwest winters. We don't install the cheapest builder-grade vinyl seals — they fail within 2–3 years in this climate.",
  },
  {
    question: "Will a new weather seal help with garage energy efficiency?",
    answer:
      "Yes, significantly. A failed bottom seal allows cold air, moisture, and drafts to enter freely — which matters for garages with living space above, attached garages sharing a wall with heated rooms, or garages used as workshops. Replacing a failed seal is one of the highest ROI home improvement steps for garages: a $120–$150 seal replacement can noticeably reduce heating costs in adjacent rooms and eliminate moisture intrusion that causes floor damage and humidity problems inside the garage.",
  },
  {
    question: "My garage floor is uneven — will a standard seal work?",
    answer:
      "Standard T-style seals have limited flex — they seal well on flat floors but leave gaps where the floor dips. For uneven floors, Zeus installs a bulb-type bottom seal or an astragal seal with a deeper compression profile that conforms to minor floor irregularities. For significant floor unevenness, we may also recommend a garage door threshold seal — a vinyl ramp that adheres to the floor and creates a high point the door seal compresses against, compensating for the low spots.",
  },
];

export default function WeatherSealPage() {
  return (
    <ServicePage
      metaTitle="Garage Door Weather Seal Replacement Kirkland WA"
      metaDescription="Drafts or water under your garage door? Zeus replaces seals & weatherstripping same-day in Kirkland & Eastside WA. Call 425-448-6443."
      canonical="/services/weather-seal-replacement"

      serviceName="Garage Door Weather Seal Replacement"
      pageH1="Garage Door Weather Seal Replacement Kirkland WA"

      serviceTagline="A failed weather seal lets in cold air, rain, pests, and debris — and costs you in energy bills every month. Zeus Garage Doors replaces bottom seals and weatherstripping same-day across Kirkland, Bellevue, Redmond, and all Eastside WA communities."

      directAnswer="Zeus Garage Doors replaces garage door bottom seals and weatherstripping same-day in Kirkland WA and across the Eastside. We use EPDM rubber seals rated for Pacific Northwest cold and moisture — not the builder-grade vinyl that hardens and cracks in 2–3 years. Call 425-448-6443 for flat-rate pricing."

      heroImage={{
        src: "/images/services/garage-door-weather-seal-replacement-kirkland-wa.png",
        alt: "Garage door weather seal replacement in Kirkland WA — Zeus Garage Doors technician installing bottom seal",
        title: "Zeus Garage Doors technician installing EPDM bottom seal on residential garage door in Kirkland, Washington",
      }}

      whatWeDoHeading="What's Included in Our Garage Door Weather Seal Replacement"
      whatWeDoItems={[
        "Bottom seal replacement — remove old seal, clean retainer channel, install new EPDM seal",
        "Side weatherstripping replacement — vinyl stop molding along door frame left and right sides",
        "Top weatherstripping replacement — header seal above the door",
        "Retainer channel inspection and repair — bent or damaged channels replaced",
        "Threshold seal installation for uneven garage floors (where needed)",
        "Seal compression test — confirm full contact with floor across entire door width",
        "Door bottom alignment adjustment — ensure door lowers evenly for consistent seal contact",
        "Condition assessment of all four sides of the door frame seal system",
      ]}

      warningSignsHeading="Signs Your Garage Door Weather Seal Needs Replacement"
      warningSignsItems={[
        "Visible daylight under the door when closed — gap in the bottom seal",
        "Water puddling inside the garage near the door during rain",
        "Cold draft noticeable in the garage even with the door fully closed",
        "Leaves, insects, or small debris getting under the door",
        "Bottom seal visibly cracked, torn, hardened, or compressed flat",
        "Rubber or vinyl material pulling away from the retainer channel",
        "Missing sections of seal along the bottom or sides",
        "Garage noticeably colder than it used to be in winter",
        "Evidence of rodent entry under the door",
      ]}

      whyZeusHeading="Why Kirkland Homeowners Choose Zeus for Weather Seal Replacement"
      whyZeusPoints={[
        {
          icon: "🌧️",
          heading: "PNW-Grade Seal Material",
          body: "We install EPDM rubber seals — not the builder-grade vinyl that hardens in Pacific Northwest cold and fails within a few years. EPDM stays flexible at temperatures Kirkland actually sees in winter and resists UV degradation from the summer months.",
        },
        {
          icon: "⚡",
          heading: "Same-Day Replacement",
          body: "We stock seals for all standard door widths — 8', 9', 10', 16', 18'. Most weather seal replacements are completed in under an hour. No waiting for parts.",
        },
        {
          icon: "🔍",
          heading: "Full Frame Assessment",
          body: "We don't just replace the obvious failed seal. We inspect all four sides of the door frame seal system — bottom, sides, and header — and report the condition of each. If the side weatherstripping is also failing, we quote it while we're there.",
        },
        {
          icon: "💰",
          heading: "Flat-Rate Pricing",
          body: "Bottom seal, side weatherstripping, and threshold seal all have flat rates. We give you the price before starting — no per-foot billing that makes the final number a surprise.",
        },
        {
          icon: "🏠",
          heading: "Energy Efficiency Impact",
          body: "For garages with living space above or adjacent heated rooms, a proper seal replacement measurably reduces cold air infiltration. A $120–$150 investment in a new bottom seal pays back in reduced heating bills through the winter.",
        },
        {
          icon: "📍",
          heading: "Locally Based in Kirkland",
          body: "Zeus technicians know Kirkland's housing stock. Older homes in Juanita and Finn Hill have different door hardware than newer construction in Houghton or Totem Lake — we bring the right seal material for your specific door and floor configuration.",
        },
      ]}

      contentBlocks={[
        {
          heading: "Choosing the Right Garage Door Weather Seal for Kirkland's Climate",
          body: `Not all garage door weather seals are equal — and the difference matters significantly in the Pacific Northwest. Kirkland experiences cold, wet winters with temperatures regularly dropping into the 20s and 30s Fahrenheit, followed by UV-intense summers. This thermal cycling — cold and damp for half the year, warm and bright for the other half — degrades seal materials at different rates depending on their composition.

The cheapest seals are made from PVC vinyl. They're flexible when new but harden rapidly when exposed to cold temperatures. A PVC seal that compresses well at 70°F may be completely rigid at 28°F — sitting stiff against the floor and leaving gaps along the door width. Pacific Northwest winters are exactly the conditions that expose PVC seal limitations, which is why homeowners in Kirkland often find their seal failing after only 2–3 years even with apparently light use.

EPDM (Ethylene Propylene Diene Monomer) rubber is the correct material for this climate. EPDM remains flexible across a temperature range of -40°F to 250°F and resists UV degradation significantly better than vinyl. Zeus installs EPDM seals on every replacement job — not as a premium upgrade, but as our standard. The additional material cost over vinyl is minor; the lifespan difference is 5–8 years in the Pacific Northwest.

Seal profile also matters. T-style seals are the standard residential option — a T-shaped rubber extrusion that slides into a retainer channel on the door's bottom rail. They work well on flat, level floors. Bulb-style seals have a rounded compression profile that compensates for minor floor irregularities — better for garages where the concrete has settled slightly or was poured with imperfect leveling. Zeus selects the appropriate profile for each door and floor combination rather than using a single seal type for all jobs.

For severe floor unevenness — common in older Kirkland homes where garage slabs have settled over decades — we may recommend a combination of a bulb seal on the door plus a threshold seal on the floor. The threshold seal creates a raised vinyl ramp that the door seal compresses against, effectively evening out floor dips of up to 1". This combination creates a seal that no standard door-only solution can match on an uneven slab.`,
        },
        {
          heading: "Side and Top Weatherstripping: The Often-Missed Part of Garage Door Sealing",
          body: `When homeowners notice drafts or moisture in the garage, the bottom seal is the obvious suspect — but the side and top weatherstripping (the stop molding that seals the door frame) is equally important and often overlooked.

The side stop molding runs vertically along both sides of the door opening. It typically consists of a rigid vinyl or wood backer strip with a flexible vinyl bulb that compresses against the door panel face when the door is closed. Over years, the flexible bulb compresses permanently or tears, leaving gaps along the sides where wind, cold air, and small pests enter.

The top weatherstripping (header seal) seals the gap between the top door panel and the door frame. This seal often fails last but is important for preventing wind-driven rain from entering — particularly in Kirkland's west-facing garages that take the brunt of incoming weather systems.

Zeus replaces all weatherstripping components during a full seal replacement service. We remove the old stop molding, inspect the door frame underneath for wood rot or water damage (common on older homes where failed seals allowed moisture in for years), and install new vinyl stop molding with a fresh bulb seal. The installation is stapled and nailed to ensure it stays in place through thousands of door cycles.

For homeowners who have already replaced the bottom seal but still feel a draft, the side and top weatherstripping is the next place to look. A full perimeter seal replacement — bottom plus sides plus top — addresses every entry point and is the definitive solution for a leaky garage door. Zeus quotes this as a combined service at a reduced rate compared to scheduling each component separately.`,
        },
      ]}

      relatedEntities={[
        "EPDM rubber seal",
        "PVC vinyl seal",
        "T-style bottom seal",
        "Bulb seal",
        "Threshold seal",
        "Astragal seal",
        "Retainer channel",
        "Stop molding",
        "Header seal",
        "Side weatherstripping",
        "Door bottom rail",
        "Seal compression",
        "Thermal cycling",
        "UV degradation",
        "Air infiltration",
        "Rodent exclusion",
      ]}
      relatedArticles={[
        { title: "Garage Door Maintenance Checklist", href: "/blog/garage-door-maintenance-checklist" },
        { title: "Why Is My Garage Door So Noisy?", href: "/blog/why-is-my-garage-door-so-noisy" },
      ]}
      relatedServices={[
        { label: "Tune-Up & Maintenance", href: "/services/garage-door-tune-up" },
        { label: "Noise Reduction", href: "/services/noise-reduction" },
        { label: "Safety Inspection", href: "/services/safety-inspection" },
      ]}

      faqs={WEATHERSEAL_FAQS}

      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Weather Seal Replacement", url: "/services/weather-seal-replacement" },
      ]}
    />
  );
}
