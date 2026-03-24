/**
 * pages/locations/MercerIslandPage.tsx — Zeus Garage Doors
 * Target: Garage Door Repair Mercer Island WA, High-end target page
 * Unique content: Lakefront humidity, custom wood doors, quiet operation
 */

import AreaPage from "../../components/AreaPage";
import { GENERAL_FAQS } from "../../components/FAQAccordion";

const MERCER_ISLAND_FAQS = [
  ...GENERAL_FAQS,
  {
    question: "Do you service custom wood garage doors on Mercer Island?",
    answer:
      "Yes, we specialize in the heavy-duty hardware required for custom wood carriage doors commonly found on Mercer Island. These doors weigh significantly more than standard steel doors and require specialized high-cycle torsion springs and heavy-duty openers like the LiftMaster 8500W wall-mount.",
    schemaAnswer:
      "Yes, we specialize in repairing and maintaining heavy custom wood garage doors, providing high-cycle torsion springs and heavy-duty LiftMaster openers suitable for Mercer Island homes.",
  },
  {
    question: "Are your parts rust-resistant for lakefront homes?",
    answer:
      "Absolutely. For homes on the waterfront, standard zinc-plated hardware rusts quickly. We install premium oil-tempered springs, nylon rollers with sealed stainless-steel bearings, and rust-resistant cables to withstand the high humidity from Lake Washington.",
    schemaAnswer:
      "Yes, we use rust-resistant hardware including oil-tempered springs, sealed bearing nylon rollers, and galvanized cables specifically to withstand Lake Washington's humidity.",
  },
];

export default function MercerIslandPage() {
  return (
    <AreaPage
      metaTitle="Garage Door Repair Mercer Island WA | Premium Service | Zeus"
      metaDescription="Need garage door repair on Mercer Island? Zeus Garage Doors offers expert spring replacement, quiet opener installs, and same-day service. Call 425-555-0199."
      canonical="/locations/mercer-island-wa"
      cityName="Mercer Island"
      stateName="WA"
      countyName="King County"
      
      /* FEATURED SNIPPET TARGET: 40-60 WORDS */
      directAnswer="Zeus Garage Doors provides premium, same-day garage door repair on Mercer Island, WA, including broken spring replacement, quiet opener installation, and custom wood door service. Serving both the North and South End, we specialize in rust-resistant parts for lakefront homes. Call 425-555-0199 for a local expert."

      introContent={`Mercer Island's exclusive properties demand garage door systems that are both visually stunning and flawlessly reliable. At Zeus Garage Doors, we understand that a broken garage door isn't just an inconvenience—it's a security vulnerability for your island home. From the dense, tree-lined streets of the South End to the bustling North End near I-90, we provide discreet, white-glove repair services tailored to high-end residential needs.`}

      localContext={`Surrounded entirely by Lake Washington, Mercer Island homes face unique environmental challenges. The constant high moisture and morning lake fog lead to rapid hardware oxidation and spring fatigue. Standard builder-grade parts simply don't last here. We combat this by exclusively using heavily galvanized, weather-resistant components and oil-tempered springs engineered to withstand the island's specific microclimate.`}

      neighborhoods={[
        {
          name: "North End",
          slug: "north-end",
          blurb: "Fast, same-day service for commuters needing immediate access to I-90.",
        },
        {
          name: "East Seattle",
          slug: "east-seattle",
          blurb: "Specialized maintenance for historic and remodeled lakeside properties.",
        },
        {
          name: "First Hill",
          slug: "first-hill",
          blurb: "Quiet-drive opener installations for homes with bedrooms above the garage.",
        },
        {
          name: "Parkwood",
          slug: "parkwood",
          blurb: "Reliable spring and cable replacements for active family households.",
        },
        {
          name: "Roanoke",
          slug: "roanoke",
          blurb: "Heavy-duty hardware upgrades for custom and carriage-style wood doors.",
        },
        {
          name: "South End",
          slug: "south-end",
          blurb: "Premium, rust-resistant parts for estates directly on the waterfront.",
        },
      ]}

      servicesOffered={[
        {
          name: "Heavy-Duty Springs",
          href: "/services/spring-replacement",
          shortDesc: "High-cycle springs capable of lifting heavy custom wood doors safely.",
        },
        {
          name: "Wall-Mount Openers",
          href: "/services/opener-repair",
          shortDesc: "Ultra-quiet LiftMaster Jackshaft openers that free up ceiling space.",
        },
        {
          name: "Emergency Repair",
          href: "/services/off-track-repair",
          shortDesc: "Immediate response to secure your home if the door is stuck open.",
        },
      ]}

      localTrustSignals={[
        "Serving the Entire Mercer Island Community",
        "Specialists in Heavy Custom Wood Doors",
        "Discreet, White-Glove Professional Service",
        "Premium Rust-Resistant PNW Hardware",
        "Fully Licensed, Bonded & Insured WA Contractor",
        "Direct Communication — No Call Centers",
      ]}
      
      faqs={MERCER_ISLAND_FAQS}
      
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Service Areas", url: "/locations" },
        { name: "Mercer Island, WA", url: "/locations/mercer-island-wa" },
      ]}
    />
  );
}
