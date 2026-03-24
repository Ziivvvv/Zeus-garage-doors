/**
 * pages/locations/BellevuePage.tsx — Zeus Garage Doors
 * Garage Door Repair in Bellevue, WA — High-end target page
 * Unique content: ~650 words, Lake Washington humidity signals, luxury quiet-drive focus
 */

import AreaPage from "../../components/AreaPage";
import { GENERAL_FAQS } from "../../components/FAQAccordion";

const BELLEVUE_FAQS = [
  ...GENERAL_FAQS,
  {
    question: "How fast can you reach Bellevue for a garage door emergency?",
    answer:
      "We prioritize Bellevue calls due to our proximity. Whether you are in <strong>Somerset, Medina, or Factoria</strong>, we typically arrive within 60–90 minutes for emergencies like broken springs or doors that won't close, securing your home's perimeter immediately.",
    schemaAnswer:
      "We typically arrive in Bellevue within 60–90 minutes for emergencies like broken springs or doors that won't close.",
  },
  {
    question: "Do you install quiet garage door openers for Bellevue homes?",
    answer:
      "Absolutely. Many Bellevue homes have bedrooms above the garage. We specialize in <strong>LiftMaster belt-drive systems</strong> with DC motors that offer near-silent operation, perfect for the high-end residential standards in neighborhoods like Newport Way and Enatai.",
    schemaAnswer:
      "Yes, we specialize in ultra-quiet LiftMaster belt-drive openers, ideal for Bellevue homes with living spaces above or near the garage.",
  },
];

export default function BellevuePage() {
  return (
    <AreaPage
      metaTitle="Garage Door Repair Bellevue WA | Same Day Service | Zeus Garage Doors"
      metaDescription="Need garage door repair in Bellevue? Zeus Garage Doors offers same-day spring replacement, opener repair, and new installations. Serving Medina, Somerset, and Factoria. Licensed & Local. Call 425-555-0199."
      canonical="/locations/bellevue-wa"
      cityName="Bellevue"
      stateName="WA"
      countyName="King County"
      
      /* FEATURED SNIPPET TARGET: 40-60 WORDS */
      directAnswer="Zeus Garage Doors provides professional, same-day garage door repair in Bellevue, WA, including spring replacement, opener repair, and new installations. Serving Somerset, Medina, and Factoria, we specialize in high-humidity PNW solutions. Call 425-555-0199 for an honest, in-person estimate from a local Bellevue technician today."
      introContent={`Bellevue's unique geography, nestled between Lake Washington and Lake Sammamish, creates a specific set of challenges for garage door systems. At Zeus Garage Doors, we understand that a malfunctioning door isn't just an inconvenience—it's a security risk for your Bellevue estate. Our technicians are local experts who know the difference between a mid-century modern setup in Enatai and a heavy custom wood door in Somerset. We provide white-glove service without the inflated "Bellevue price tag," focusing on precision engineering and long-term reliability.`}
      localContext={`The high humidity levels near the Bellevue waterfront and the damp morning fog common in the Eastside foothills lead to accelerated oxidation on standard garage door hardware. We see a high rate of rusted rollers and corroded torsion springs in zip codes like 98004 and 98006. To combat this, Zeus Garage Doors exclusively uses galvanized or oil-tempered hardware designed to withstand the Pacific Northwest climate, ensuring your system remains quiet and rust-free for years.`}
      neighborhoods={[
        {
          name: "Medina",
          slug: "medina",
          blurb: "Expert service for high-end custom doors and luxury estates near the waterfront.",
        },
        {
          name: "Somerset",
          slug: "somerset",
          blurb: "Specializing in heavy-duty springs for homes on steep inclines and hilly terrain.",
        },
        {
          name: "Factoria",
          slug: "factoria",
          blurb: "Fast, same-day commercial and residential repairs near the I-90 / I-405 interchange.",
        },
        {
          name: "Enatai",
          slug: "enatai",
          blurb: "Quiet-drive opener installations for residential privacy and comfort.",
        },
        {
          name: "Newport",
          slug: "newport",
          blurb: "Full system overhauls and preventative maintenance for established family homes.",
        },
        {
          name: "Crossroads",
          slug: "crossroads",
          blurb: "Affordable, honest repairs for diverse housing and multi-family units.",
        },
      ]}
      servicesOffered={[
        {
          name: "Spring Replacement",
          href: "/services/spring-replacement",
          shortDesc: "High-cycle torsion springs built for Bellevue's damp climate.",
        },
        {
          name: "Opener Repair",
          href: "/services/opener-repair",
          shortDesc: "Smart LiftMaster openers with MyQ technology and ultra-quiet belts.",
        },
        {
          name: "New Installation",
          href: "/services/new-installation",
          shortDesc: "Modern glass, carriage-house, and insulated steel door options.",
        },
      ]}
      localTrustSignals={[
        "5-Star Rated Service in Bellevue & Enatai",
        "Licensed, Bonded, and Insured WA Contractor",
        "Specialists in Quiet-Drive & Smart Home Openers",
        "Locally Owned — Not a Franchise",
        "Same-Day Emergency Response Guaranteed",
        "Parts & Labor Warranty on Every Job",
      ]}
      
      faqs={BELLEVUE_FAQS}
      
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Service Areas", url: "/locations" },
        { name: "Bellevue, WA", url: "/locations/bellevue-wa" },
      ]}
    />
  );
}
