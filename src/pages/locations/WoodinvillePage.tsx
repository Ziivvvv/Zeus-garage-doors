/**
 * pages/locations/WoodinvillePage.tsx — Zeus Garage Doors
 * Target: Garage Door Repair Woodinville WA, acreage homes, custom doors
 * Unique content: Wine country, Sammamish River Valley, Hollywood Hill
 */

import AreaPage from "../../components/AreaPage";
import { GENERAL_FAQS } from "../../components/FAQAccordion";

const WOODINVILLE_FAQS = [
  ...GENERAL_FAQS,
  {
    question: "Do you service rural and acreage homes in Woodinville?",
    answer:
      "Yes. We frequently service large properties and acreage homes in areas like <strong>Cottage Lake, Wellington, and Bear Creek</strong>. We carry heavy-duty parts specifically designed for oversized garage doors, RV bays, and custom shop doors common in these neighborhoods.",
    schemaAnswer:
      "Yes, we service rural and acreage properties in Woodinville, providing heavy-duty hardware for oversized residential garage doors, RV bays, and custom shops.",
  },
  {
    question: "Can you replace the springs on a heavy custom wood door?",
    answer:
      "Absolutely. Many homes in the <strong>Hollywood Hill</strong> area feature beautiful custom wood carriage doors. These weigh significantly more than standard steel doors. We calculate the exact IPPT (Inch Pounds Per Turn) required and install high-cycle, heavy-duty torsion springs to ensure the door lifts safely without straining your opener.",
    schemaAnswer:
      "Yes, we specialize in repairing heavy custom wood carriage doors in Woodinville, calculating the exact IPPT to install heavy-duty, high-cycle torsion springs.",
  },
];

export default function WoodinvillePage() {
  return (
    <AreaPage
      metaTitle="Garage Door Repair Woodinville WA | Expert Service | Zeus"
      metaDescription="Need garage door repair in Woodinville? Zeus Garage Doors specializes in heavy-duty spring replacement and opener repair for Cottage Lake, Hollywood Hill & more."
      canonical="/locations/woodinville-wa"
      cityName="Woodinville"
      stateName="WA"
      countyName="King County"
      
      /* FEATURED SNIPPET TARGET: 40-60 WORDS */
      directAnswer="Zeus Garage Doors provides premium garage door repair in Woodinville, WA. From heavy-duty spring replacement to custom wood door maintenance, we serve Hollywood Hill, Cottage Lake, and Wellington. Our local technicians offer reliable, same-day service with transparent on-site pricing. Call 425-555-0199 for an expert assessment."

      introContent={`Woodinville offers a unique blend of suburban comfort and sprawling, scenic acreage. With its renowned wine country and beautiful estates, the homes here often feature oversized, custom, or carriage-style garage doors that require specialized care. At Zeus Garage Doors, we have the expertise to handle these heavy-duty systems. Whether you have a modern glass door near Downtown or a massive wood-faced door on a Hollywood Hill estate, we ensure your access system is safe, balanced, and perfectly functional.`}

      localContext={`Nestled along the Sammamish River Valley, Woodinville properties experience high moisture levels and dense morning fog, particularly in the fall and winter. This damp, rural environment accelerates rust on standard garage door tracks and springs. We specialize in outfitting Woodinville homes with premium, weather-resistant hardware—such as heavily galvanized torsion springs and sealed nylon rollers—designed to resist oxidation and perform quietly for years.`}

      neighborhoods={[
        {
          name: "Hollywood Hill",
          slug: "hollywood-hill",
          blurb: "Expert maintenance and heavy-duty spring replacements for custom wood doors.",
        },
        {
          name: "Cottage Lake",
          slug: "cottage-lake",
          blurb: "Fast, reliable repairs for established family homes and acreage properties.",
        },
        {
          name: "Wellington",
          slug: "wellington",
          blurb: "Comprehensive system overhauls and ultra-quiet opener installations.",
        },
        {
          name: "Downtown Woodinville",
          slug: "downtown",
          blurb: "Same-day service for townhomes and modern residential developments.",
        },
        {
          name: "Bear Creek",
          slug: "bear-creek",
          blurb: "Durable hardware solutions for homes integrated into wooded, rural areas.",
        },
        {
          name: "Leota",
          slug: "leota",
          blurb: "Affordable cable, roller, and track realignments for suburban homes.",
        },
      ]}

      servicesOffered={[
        {
          name: "Heavy-Duty Springs",
          href: "/services/spring-replacement",
          shortDesc: "High-cycle springs engineered to safely lift oversized and wood doors.",
        },
        {
          name: "Opener Repair",
          href: "/services/opener-repair",
          shortDesc: "Powerful LiftMaster motors capable of handling heavy Woodinville doors.",
        },
        {
          name: "New Installation",
          href: "/services/new-installation",
          shortDesc: "Upgrades to premium carriage-house and fully insulated steel doors.",
        },
      ]}

      localTrustSignals={[
        "Serving Woodinville & The Sammamish River Valley",
        "Specialists in Heavy Custom & Wood Doors",
        "Fully Licensed, Bonded & Insured WA Contractor",
        "Premium Rust-Resistant Hardware",
        "Transparent On-Site Pricing — No Phone Quotes",
        "Locally Owned — Support Eastside Small Business",
      ]}
      
      faqs={WOODINVILLE_FAQS}
      
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Service Areas", url: "/locations" },
        { name: "Woodinville, WA", url: "/locations/woodinville-wa" },
      ]}
    />
  );
}
