/**
 * pages/locations/LynnwoodPage.tsx — Zeus Garage Doors
 * Target: Garage Door Repair Lynnwood WA, I-5 corridor
 * Unique content: Commuter focus, Alderwood area, mix of old/new homes
 */

import AreaPage from "../../components/AreaPage";
import { GENERAL_FAQS } from "../../components/FAQAccordion";

const LYNNWOOD_FAQS = [
  ...GENERAL_FAQS,
  {
    question: "Do you offer same-day garage door repair in Lynnwood?",
    answer:
      "Yes. Because Lynnwood is a major hub along the I-5 and I-405 corridors, our trucks can quickly reach neighborhoods like <strong>Alderwood Manor, Meadowdale, and Martha Lake</strong>. We stock our vehicles with the most common springs and openers to ensure we can fix your door in a single visit.",
    schemaAnswer:
      "Yes, we provide same-day garage door repair across Lynnwood, including Alderwood Manor and Meadowdale, keeping our trucks fully stocked for single-visit repairs.",
  },
  {
    question: "Can you replace the springs on an older Lynnwood home?",
    answer:
      "Absolutely. Many homes in Lynnwood built in the 70s and 80s have original garage doors with worn-out extension or torsion springs. We upgrade these to modern, high-cycle oil-tempered springs that are much safer and last significantly longer in the Washington climate.",
    schemaAnswer:
      "Yes, we specialize in upgrading springs on older Lynnwood homes to modern, high-cycle oil-tempered torsion springs for better safety and longevity.",
  },
];

export default function LynnwoodPage() {
  return (
    <AreaPage
      metaTitle="Garage Door Repair Lynnwood WA | Fast Service | Zeus"
      metaDescription="Broken garage door in Lynnwood? Zeus Garage Doors offers same-day spring repair and opener installation in Alderwood, Meadowdale, and Martha Lake. Call 425-555-0199."
      canonical="/locations/lynnwood-wa"
      cityName="Lynnwood"
      stateName="WA"
      countyName="Snohomish County"
      
      /* FEATURED SNIPPET TARGET: 40-60 WORDS */
      directAnswer="Zeus Garage Doors provides expert, same-day garage door repair in Lynnwood, WA. From broken spring replacement to smart opener installations, we serve Alderwood, Meadowdale, and Perrinville. Our local technicians offer honest, transparent pricing after a free on-site assessment. Call 425-555-0199 for fast service near the I-5 corridor."

      introContent={`Lynnwood is the crossroads of the North Sound. With its rapid growth and busy commuter lifestyle, a broken garage door here isn't just an annoyance—it's a major disruption to your daily routine. At Zeus Garage Doors, we specialize in fast, reliable repairs that get you back on the road. Whether you're in a newly built townhome near Alderwood Mall or an established mid-century house in Meadowdale, we have the right parts and expertise for your specific door system.`}

      localContext={`Snohomish County weather means your garage door faces constant rain, dampness, and occasional freezing temperatures. This environment is notorious for rusting out standard builder-grade springs and causing metal rollers to seize. We counteract this by outfitting Lynnwood homes with galvanized lift cables, nylon rollers with sealed stainless-steel bearings, and heavy-duty weatherstripping that seals the wet PNW weather outside where it belongs.`}

      neighborhoods={[
        {
          name: "Alderwood Manor",
          slug: "alderwood-manor",
          blurb: "Fast response times for busy families and professionals near the mall corridor.",
        },
        {
          name: "Meadowdale",
          slug: "meadowdale",
          blurb: "Heavy-duty hardware upgrades for established, classic residential properties.",
        },
        {
          name: "Martha Lake",
          slug: "martha-lake",
          blurb: "Comprehensive spring and cable replacements for multi-car garage homes.",
        },
        {
          name: "Perrinville",
          slug: "perrinville",
          blurb: "Quiet-drive opener installations to reduce noise in tightly-packed neighborhoods.",
        },
        {
          name: "Cedar Valley",
          slug: "cedar-valley",
          blurb: "Affordable maintenance and safety inspections for older door systems.",
        },
        {
          name: "Picnic Point",
          slug: "picnic-point",
          blurb: "Premium rust-resistant parts for homes exposed to Puget Sound moisture.",
        },
      ]}

      servicesOffered={[
        {
          name: "Spring Repair",
          href: "/services/spring-replacement",
          shortDesc: "High-cycle springs designed to withstand daily commuter wear and tear.",
        },
        {
          name: "Opener Upgrades",
          href: "/services/opener-repair",
          shortDesc: "Wi-Fi enabled LiftMaster openers you can control from your smartphone.",
        },
        {
          name: "Panel Replacement",
          href: "/services/panel-replacement",
          shortDesc: "Cost-effective dent repair and section replacement for minor accidents.",
        },
      ]}

      localTrustSignals={[
        "Serving Lynnwood and South Snohomish County",
        "Same-Day Response for the I-5 & I-405 Corridor",
        "Fully Licensed & Bonded WA Contractor",
        "Specialists in High-Cycle Hardware",
        "No Hidden Fees — Exact Pricing Upfront",
        "Top-Rated Local Business — Not a Franchise",
      ]}
      
      faqs={LYNNWOOD_FAQS}
      
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Service Areas", url: "/locations" },
        { name: "Lynnwood, WA", url: "/locations/lynnwood-wa" },
      ]}
    />
  );
}
