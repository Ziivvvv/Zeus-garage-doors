/**
 * pages/locations/KirklandLocation.tsx — Zeus Garage Doors
 * Garage Door Repair in Kirkland, WA — primary target page
 * Unique content: ~600 words, PNW weather signals, all neighborhoods
 */

import AreaPage from "../../components/AreaPage";
import { GENERAL_FAQS } from "../../components/FAQAccordion";

const KIRKLAND_FAQS = [
  ...GENERAL_FAQS,
  {
    question: "Do you offer same-day service in all Kirkland neighborhoods?",
    answer:
      "Yes — Zeus Garage Doors serves all Kirkland neighborhoods same-day, including <strong>Juanita, Totem Lake, Finn Hill, Houghton, Bridle Trails, North Rose Hill, South Rose Hill, Kingsgate, Norkirk, Moss Bay, and the Highlands</strong>. If you're in the 98033, 98034, or 98074 zip codes, we can typically reach you the same day you call.",
    schemaAnswer:
      "Yes. Zeus Garage Doors serves all Kirkland neighborhoods same-day including Juanita, Totem Lake, Finn Hill, Houghton, Bridle Trails, North Rose Hill, South Rose Hill, Kingsgate, and more.",
  },
  {
    question: "How quickly can you get to me in Kirkland for an emergency?",
    answer:
      "For emergency garage door repairs in Kirkland — like a door stuck open or a broken spring keeping you trapped — we aim to reach you within <strong>1–3 hours</strong> depending on current schedule. Call us at 425-555-0199 and we'll give you an honest ETA.",
    schemaAnswer:
      "For emergencies in Kirkland, we typically arrive within 1–3 hours. Call 425-555-0199 for an honest ETA.",
  },
];

export default function KirklandLocation() {
  return (
    <AreaPage
      metaTitle="Garage Door Repair in Kirkland, WA | Same Day | Zeus Garage Doors"
      metaDescription="Zeus Garage Doors offers same-day garage door repair, spring replacement, and opener service in Kirkland, WA. Locally owned, licensed, and honest pricing. Call 425-555-0199."
      canonical="/locations/kirkland-wa"
      cityName="Kirkland"
      stateName="WA"
      countyName="King"
      directAnswer="Zeus Garage Doors provides same-day garage door repair in Kirkland, WA including spring replacement, opener repair, cable repair, and off-track service. We're a locally owned, licensed contractor serving all Kirkland neighborhoods from Juanita to Finn Hill. Call 425-555-0199 for same-day service."
      introContent={`
        <p>When your garage door breaks down in Kirkland, you need someone who shows up fast, explains the problem honestly, and fixes it right the first time. Zeus Garage Doors is that company — locally owned, based right here in Kirkland, and committed to same-day service for every job.</p>
        <p>We handle everything from <a href="/services/spring-replacement">broken torsion spring replacement</a> and <a href="/services/cable-replacement">snapped cable repair</a> to <a href="/services/opener-repair">LiftMaster opener installation</a> and <a href="/services/off-track-repair">emergency off-track door service</a>. Our team serves all of Kirkland's neighborhoods — Juanita, Totem Lake, Finn Hill, Houghton, Bridle Trails, and every community in between.</p>
        <p>Unlike national chains, you're not calling a call center when you dial us. You're speaking to a local technician who lives and works in this community. We assess every job in person — because giving you an honest price requires seeing the problem firsthand, not guessing over the phone.</p>
        <p>Kirkland homeowners choose Zeus for our straightforward communication, fair pricing, and warranty-backed work. We don't upsell. We don't create urgency. We diagnose, explain, and fix — with your full understanding at every step.</p>
      `}
      localContext={`
        <p>Kirkland's position on the eastern shore of Lake Washington creates a unique microclimate that's hard on garage door hardware. The combination of <strong>lake moisture, marine air from Puget Sound, and heavy seasonal rainfall</strong> accelerates rust and corrosion on springs, cables, rollers, and hinges.</p>
        <p>Torsion springs in Kirkland homes typically experience more rapid degradation than in drier climates — the constant humidity causes surface oxidation that reduces spring flexibility and accelerates metal fatigue. We recommend annual inspection of springs and cables for any Kirkland garage that doesn't have weatherstripping or a heated garage.</p>
        <p>Winter temperature swings — particularly the freeze-thaw cycles common in Kirkland between November and March — cause door panels to expand and contract, putting stress on bottom seals, weatherstripping, and track alignment. If your door is binding or running rough during colder months, this is often the culprit.</p>
      `}
      neighborhoods={[
        {
          name: "Juanita",
          slug: "juanita",
          blurb:
            "Juanita's lakeside homes frequently deal with moisture-related spring wear. We serve the full Juanita area along NE 116th St and Juanita Drive for same-day garage door repair.",
        },
        {
          name: "Totem Lake",
          slug: "totem-lake",
          blurb:
            "The Totem Lake neighborhood, near the Totem Lake Mall corridor, is one of our most active service areas. Springs, openers, and cable repairs handled same-day.",
        },
        {
          name: "Finn Hill",
          slug: "finn-hill",
          blurb:
            "Finn Hill's hillside homes with attached garages see significant track and spring stress from steep driveway grades. Zeus serves all of Finn Hill for same-day repair.",
        },
        {
          name: "Houghton",
          slug: "houghton",
          blurb:
            "Houghton's established homes often have older garage door systems due for an upgrade. We service and replace all opener and hardware brands in the Houghton area.",
        },
        {
          name: "Bridle Trails",
          slug: "bridle-trails",
          blurb:
            "Bridle Trails homeowners benefit from our same-day service for spring replacement, off-track repair, and opener installation throughout this upscale neighborhood.",
        },
        {
          name: "North Rose Hill",
          slug: "north-rose-hill",
          blurb:
            "North Rose Hill and the greater Rose Hill corridor are well within our same-day service zone. Call us for fast spring, cable, or opener service.",
        },
        {
          name: "South Rose Hill",
          slug: "south-rose-hill",
          blurb:
            "South Rose Hill's proximity to the 520 corridor makes us easy to reach fast. We cover this area for all residential garage door repairs.",
        },
        {
          name: "Kingsgate",
          slug: "kingsgate",
          blurb:
            "The Kingsgate area near NE 132nd Street sees frequent opener and spring issues, particularly in older homes. Zeus handles all Kingsgate garage door repairs same-day.",
        },
        {
          name: "Norkirk",
          slug: "norkirk",
          blurb:
            "Norkirk's residential streets are a regular part of our Kirkland service route. Quick response times for all garage door emergencies in this area.",
        },
        {
          name: "Moss Bay",
          slug: "moss-bay",
          blurb:
            "Moss Bay's lakeside exposure increases rust risk on springs and cables. Annual inspection and weatherstripping are highly recommended for this neighborhood.",
        },
        {
          name: "Highlands",
          slug: "highlands",
          blurb:
            "The Highlands area of Kirkland is fully covered for same-day garage door repair. Springs, openers, off-track repairs, and new installations available.",
        },
      ]}
      servicesOffered={[
        {
          name: "Spring Replacement",
          href: "/services/spring-replacement",
          shortDesc:
            "Torsion and extension spring replacement for Kirkland homes. Both springs replaced at once for balanced operation.",
        },
        {
          name: "Garage Door Opener Repair",
          href: "/services/opener-repair",
          shortDesc:
            "LiftMaster, Genie, and Chamberlain opener repair and installation. Same-day parts stocked for Kirkland service.",
        },
        {
          name: "Off-Track Door Repair",
          href: "/services/off-track-repair",
          shortDesc:
            "Emergency off-track repair for Kirkland homeowners. Door back on track safely, same day.",
        },
        {
          name: "Cable Replacement",
          href: "/services/cable-replacement",
          shortDesc:
            "Frayed or snapped lift cable replacement. Kirkland's humidity accelerates cable wear — catch it early.",
        },
        {
          name: "Panel Replacement",
          href: "/services/panel-replacement",
          shortDesc:
            "Damaged section replacement without full door replacement. Available for most major brands.",
        },
        {
          name: "New Door Installation",
          href: "/services/new-installation",
          shortDesc:
            "Full garage door installation for Kirkland homes. LiftMaster openers included in all packages.",
        },
      ]}
      localTrustSignals={[
        "Based in Kirkland — we're your actual neighbors",
        "Same-day availability across all 98033, 98034, 98074 zip codes",
        "Licensed Washington state contractor",
        "Full liability insurance on every job",
        "In-person assessment — never phone quotes",
        "LiftMaster, Genie, Chamberlain stocked for same-day repair",
        "No upselling, no manufactured urgency",
      ]}
      faqs={KIRKLAND_FAQS}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Service Areas", url: "/locations" },
        { name: "Kirkland, WA", url: "/locations/kirkland-wa" },
      ]}
    />
  );
}
