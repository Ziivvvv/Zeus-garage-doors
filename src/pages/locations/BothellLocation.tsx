/**
 * pages/locations/BothellLocation.tsx — Zeus Garage Doors
 * Target: Garage Door Repair Bothell WA, tech corridor, older & new homes
 * Unique content: Canyon Park, SR 522, mix of King and Snohomish counties
 */

import AreaPage from "../../components/AreaPage";
import { GENERAL_FAQS } from "../../components/FAQAccordion";

const BOTHELL_FAQS = [
  ...GENERAL_FAQS,
  {
    question: "Do you service both King and Snohomish county sides of Bothell?",
    answer:
      "Yes! Bothell uniquely straddles both King and Snohomish counties, and we provide same-day garage door service to the entire area. Whether you're up north near <strong>Thrasher's Corner</strong> or closer to <strong>Downtown Bothell and SR 522</strong>, our technicians are local and ready to help.",
    schemaAnswer:
      "Yes, we provide same-day garage door repair to all of Bothell, covering both the King County and Snohomish County neighborhoods, including Thrasher's Corner and Canyon Park.",
  },
  {
    question: "My Bothell home is newly built, can you upgrade my basic opener?",
    answer:
      "Absolutely. Many new developments in the North Creek and Canyon Park areas come with builder-grade chain drive openers. We regularly upgrade these to ultra-quiet, Wi-Fi enabled <strong>LiftMaster belt-drive systems</strong>, allowing you to monitor and control your garage door from your smartphone.",
    schemaAnswer:
      "Yes, we upgrade builder-grade garage door openers in new Bothell homes to ultra-quiet, smart LiftMaster belt-drive systems with smartphone control.",
  },
];

export default function BothellLocation() {
  return (
    <AreaPage
      metaTitle="Garage Door Repair Bothell WA | Local Experts | Zeus"
      metaDescription="Need fast garage door repair in Bothell, WA? We fix broken springs, cables, and openers in Canyon Park, Thrasher's Corner, and Downtown Bothell. Call 425-555-0199."
      canonical="/locations/bothell-wa"
      cityName="Bothell"
      stateName="WA"
      countyName="King & Snohomish Counties"

      /* FEATURED SNIPPET TARGET: 40-60 WORDS */
      directAnswer="Zeus Garage Doors provides fast, expert garage door repair in Bothell, WA. From broken spring replacement to smart opener upgrades, we serve Canyon Park, Thrasher's Corner, and North Creek. Our licensed local technicians offer honest, transparent pricing after a free on-site assessment. Call 425-555-0199 for same-day service."

      introContent={`Bothell is a rapidly growing hub that blends historic charm with a booming tech corridor. With so many families and professionals relying on their garages daily, a broken spring or stuck door is a major hassle. At Zeus Garage Doors, we bring top-tier repair and installation services right to your driveway. Whether you have an older, heavy wooden door in Maywood or a modern steel setup in a new Canyon Park development, we have the exact parts and expertise to get it running flawlessly.`}

      localContext={`The weather in the Bothell area, particularly near the Sammamish River and North Creek, brings a constant cycle of dampness and changing temperatures. This PNW climate is tough on standard garage door hardware, causing metal to oxidize and springs to fatigue prematurely. We protect your investment by installing weather-resistant, galvanized steel cables and high-cycle, oil-tempered springs designed to outlast typical builder-grade components.`}

      neighborhoods={[
        {
          name: "Canyon Park",
          slug: "canyon-park",
          blurb: "Fast, reliable spring and opener repairs for busy tech professionals and families.",
        },
        {
          name: "Thrasher's Corner",
          slug: "thrashers-corner",
          blurb: "Heavy-duty hardware upgrades and emergency off-track repairs.",
        },
        {
          name: "North Creek",
          slug: "north-creek",
          blurb: "Smart home integrations and ultra-quiet LiftMaster opener installations.",
        },
        {
          name: "Downtown Bothell",
          slug: "downtown-bothell",
          blurb: "Maintenance and custom door replacements for historic and remodeled homes.",
        },
        {
          name: "Maywood",
          slug: "maywood",
          blurb: "Comprehensive system overhauls for established residential properties.",
        },
        {
          name: "Queensborough",
          slug: "queensborough",
          blurb: "Same-day service for broken cables, rollers, and snapped springs.",
        },
      ]}

      servicesOffered={[
        {
          name: "Spring Replacement",
          href: "/services/spring-replacement",
          shortDesc: "High-cycle springs guaranteed to lift heavy doors safely.",
        },
        {
          name: "Smart Openers",
          href: "/services/opener-repair",
          shortDesc: "Quiet belt-drive motors with MyQ smartphone integration.",
        },
        {
          name: "Off-Track Repair",
          href: "/services/off-track-repair",
          shortDesc: "Emergency realignment if your door is crooked or stuck.",
        },
      ]}

      localTrustSignals={[
        "Serving All of Bothell (King & Snohomish Sides)",
        "Smart Home Opener Specialists",
        "Fully Licensed, Bonded & Insured WA Contractor",
        "Premium Weather-Resistant Parts",
        "No Hidden Fees — Exact Pricing Upfront",
        "Same-Day Service Availability",
      ]}

      faqs={BOTHELL_FAQS}

      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Service Areas", url: "/locations" },
        { name: "Bothell, WA", url: "/locations/bothell-wa" },
      ]}
    />
  );
}
