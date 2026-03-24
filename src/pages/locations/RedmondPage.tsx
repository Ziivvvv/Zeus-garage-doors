/**
 * pages/locations/RedmondPage.tsx — Zeus Garage Doors
 * Garage Door Repair in Redmond, WA — Tech-corridor target page
 * Unique content: ~650 words, Microsoft proximity, smart-home focus
 */

import AreaPage from "../../components/AreaPage";
import { GENERAL_FAQS } from "../../components/FAQAccordion";

const REDMOND_FAQS = [
  ...GENERAL_FAQS,
  {
    question: "How quickly can you get to Redmond for an emergency repair?",
    answer:
      "Our technicians are stationed on the Eastside, so we typically reach <strong>Education Hill, Overlake, and Bear Creek</strong> within 60–90 minutes for emergencies like a broken spring or a door stuck open overnight.",
    schemaAnswer:
      "We typically arrive in Redmond within 60–90 minutes for emergencies like broken springs or doors stuck open.",
  },
  {
    question: "Do you install smart garage door openers compatible with home automation?",
    answer:
      "Yes. Many Redmond homeowners work in tech and want seamless smart-home integration. We install <strong>LiftMaster openers with built-in MyQ Wi-Fi</strong>, allowing you to open, close, and monitor your garage from anywhere via your phone, Google Home, or Amazon Alexa.",
    schemaAnswer:
      "Yes, we install LiftMaster openers with MyQ Wi-Fi for full smart-home integration, compatible with Google Home and Alexa.",
  },
];

export default function RedmondPage() {
  return (
    <AreaPage
      metaTitle="Garage Door Repair Redmond WA | Same Day Service | Zeus Garage Doors"
      metaDescription="Need garage door repair in Redmond? Zeus Garage Doors offers same-day spring replacement, opener repair, and new installations. Serving Education Hill, Overlake, and Ames Lake. Licensed & Local. Call 425-555-0199."
      canonical="/locations/redmond-wa"
      cityName="Redmond"
      stateName="WA"
      countyName="King County"
      directAnswer="Zeus Garage Doors offers same-day garage door repair in Redmond, WA, including spring replacement and opener repair. Serving Education Hill, Overlake, and Ames Lake. Licensed and local. Call 425-555-0199 for a free in-person estimate."
      introContent={`Redmond sits at the heart of the Eastside's tech corridor, home to Microsoft's global campus and a rapidly growing population of professionals who expect reliability from every system in their home—including the garage door. At Zeus Garage Doors, we serve Redmond homeowners who need fast, precise repairs without the runaround. Whether you own an older split-level on Education Hill that needs a full spring overhaul or a newly built smart home in Overlake requiring a quiet belt-drive opener with Wi-Fi integration, our technicians have the expertise to match.`}
      localContext={`Redmond's housing stock is uniquely split between established neighborhoods with 30- to 40-year-old homes and brand-new developments pushing toward the Sammamish Plateau. Older homes in areas like Grass Lawn and Willow Ridge often have original extension springs and single-panel doors that are past their service life. Meanwhile, new construction near Bear Creek and Ames Lake demands modern insulated steel doors with smart openers. Zeus Garage Doors carries inventory for both scenarios, stocking high-cycle torsion springs for retrofits and LiftMaster 87504 units for new smart-home builds—so we can usually complete your repair in a single visit.`}
      neighborhoods={[
        {
          name: "Education Hill",
          slug: "education-hill",
          blurb: "Full system overhauls for established homes near Redmond's top-rated schools.",
        },
        {
          name: "Bear Creek",
          slug: "bear-creek",
          blurb: "Rural-residential service for acreage properties and custom wood doors.",
        },
        {
          name: "Overlake",
          slug: "overlake",
          blurb: "Smart opener installations for modern townhomes near the Microsoft campus.",
        },
        {
          name: "Willow Ridge",
          slug: "willow-ridge",
          blurb: "Spring replacements and tune-ups for mid-century split-level homes.",
        },
        {
          name: "Grass Lawn",
          slug: "grass-lawn",
          blurb: "Affordable, same-day repairs for single-family homes and duplexes.",
        },
        {
          name: "Ames Lake",
          slug: "ames-lake",
          blurb: "Heavy-duty door service for rural properties east of Redmond.",
        },
      ]}
      servicesOffered={[
        {
          name: "Spring Replacement",
          href: "/services/spring-replacement",
          shortDesc: "High-cycle torsion springs rated for Redmond's damp, cool climate.",
        },
        {
          name: "Opener Repair",
          href: "/services/opener-repair",
          shortDesc: "Wi-Fi-enabled LiftMaster openers with MyQ smart-home control.",
        },
        {
          name: "New Installation",
          href: "/services/new-installation",
          shortDesc: "Insulated steel, modern glass, and carriage-house door options.",
        },
      ]}
      localTrustSignals={[
        "5-Star Rated Across Redmond & Education Hill",
        "Licensed, Bonded, and Insured WA Contractor",
        "Smart-Home Opener Specialists (MyQ, Wi-Fi)",
        "Locally Owned — Not a Franchise",
        "Same-Day Emergency Response Guaranteed",
        "Parts & Labor Warranty on Every Job",
      ]}
      faqs={REDMOND_FAQS}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Service Areas", url: "/locations" },
        { name: "Redmond, WA", url: "/locations/redmond-wa" },
      ]}
    />
  );
}
