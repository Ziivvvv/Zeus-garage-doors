/**
 * pages/services/OffTrackRepairPage.tsx — Zeus Garage Doors
 * Target: Off-track garage door repair, emergency service, crooked door
 */

import ServicePage from "../../components/ServicePage";
import { GENERAL_FAQS } from "../../components/FAQAccordion";

export default function OffTrackRepairPage() {
  return (
    <ServicePage
      metaTitle="Off-Track Garage Door Repair | Emergency Service | Zeus"
      metaDescription="Door off its tracks? Zeus provides emergency off-track garage door repair in Seattle, Kirkland & the Eastside WA. Licensed techs. Call 425-448-6443."
      canonical="/services/off-track-repair"
      serviceName="Off-Track Door Repair"
      serviceTagline="A door off its tracks is extremely dangerous and can damage your panels. We realign tracks, replace rollers, and restore balance immediately."
      
      /* FEATURED SNIPPET TARGET */
      directAnswer="Zeus Garage Doors provides emergency off-track garage door repair in Seattle, Kirkland, Bellevue, and the Eastside. If your door is crooked or rollers have popped out, stop using it immediately. We safely realign the tracks, reset the cables, and replace damaged rollers. Call 425-448-6443 for fast service."
      heroImage={{
        src: "/images/services/real-photos/garage-door-off-track-repair-kirkland-wa.webp",
        alt: "Crooked garage door off its tracks needing emergency repair",
        title: "Emergency Off-Track Realignment"
      }}
      whatWeDoItems={[
        "Safely secure the heavy door to prevent falling",
        "Inspect and straighten bent vertical or horizontal tracks",
        "Replace snapped or slipped lift cables",
        "Replace damaged or worn-out steel/nylon rollers",
        "Perform a full balance and safety test after realignment",
        "Check opener limits and force settings"
      ]}
      warningSignsItems={[
        "The door is hanging at a severe angle",
        "One or more rollers have popped completely out of the track",
        "Loud scraping or grinding metal sounds when moving",
        "The lift cable on one side is loose or tangled",
        "You accidentally backed your car into the door"
      ]}
      whyZeusPoints={[
        {
          icon: "🚨",
          heading: "Emergency Priority",
          body: "A stuck, off-track door leaves your home vulnerable. We prioritize these calls to secure your property ASAP."
        },
        {
          icon: "🛑",
          heading: "Damage Prevention",
          body: "We know how to safely release the tension without bending your door panels further, saving you thousands."
        },
        {
          icon: "🔧",
          heading: "Root Cause Fix",
          body: "We don't just pop the roller back in. We find out WHY it happened (frayed cable, bent track) and fix the root cause."
        },
        {
          icon: "🛡️",
          heading: "5-Year Warranty",
          body: "Every off-track repair is backed by our 5-year parts and labor warranty — the strongest in the Eastside. If the door goes off-track again due to our repair, we return at no charge."
        }
      ]}
      contentBlocks={[
        {
          heading: "What Does It Mean When a Garage Door Goes Off Track?",
          body: `A garage door goes off track when one or more rollers slip out of the vertical or horizontal track sections that guide the door through its travel path. The track system consists of vertical tracks on each side of the door opening and curved horizontal tracks that extend into the garage ceiling. Steel or nylon rollers attached to hinges on each side of the door run inside these tracks. When a roller pops out — due to a snapped lift cable, a bent track section, an impact from a vehicle, or worn roller stems — the door loses its guided path and can jam at an angle, buckle under its own weight, or drop suddenly on the unsupported side. An off-track garage door is a serious safety hazard: the door may weigh 150 to 350 pounds and is no longer supported by the counterbalance system. Do not attempt to force the door open or closed, and do not operate the opener — doing so can bend the tracks permanently, damage the opener carriage arm, and cause the door panels to crack under the uneven load.`,
        },
        {
          heading: "How Zeus Garage Doors Fixes an Off-Track Door in Kirkland",
          body: `When Zeus Garage Doors technicians arrive for an off-track repair call in Kirkland or the Eastside, the first step is stabilizing the door in its current position before attempting any realignment. If a broken cable caused the derailment, the spring tension must be safely released before any cable or track work begins. The technician then carefully guides the escaped rollers back into the track, inspects all rollers and hinges for damage, and checks the track sections for bends, separation at the joints, or improper alignment relative to the door width.

Bent tracks are straightened with professional track adjustment tools or replaced if the bend is severe. Damaged rollers are replaced as a set — worn nylon rollers often cause repeated off-track events and are worth upgrading to sealed steel ball-bearing rollers at the same visit. After realignment, the technician tests the door through multiple full cycles and verifies that the gap between the door edge and track is consistent across the full travel height before clearing the system as safe for normal use.`,
        },
      ]}
      relatedEntities={[
        "Vertical track", "Horizontal track", "Nylon rollers", "Steel rollers", 
        "Track alignment", "Lift cables", "Cable drums", "Binding", 
        "Track brackets", "Flag brackets", "Door jamb"
      ]}
      relatedArticles={[
        { title: "What Causes a Garage Door to Go Off Track?", href: "/blog/what-causes-garage-door-off-track" },
        { title: "Is DIY Garage Door Repair Safe?", href: "/blog/is-diy-garage-door-repair-safe" },
        { title: "Garage Door Maintenance Checklist", href: "/blog/garage-door-maintenance-checklist" },
      ]}
      relatedServices={[
        { label: "Spring Replacement", href: "/services/spring-replacement" },
        { label: "Cable Replacement", href: "/services/cable-replacement" },
        { label: "Track Repair", href: "/services/track-repair" },
        { label: "Panel Replacement", href: "/services/panel-replacement" },
      ]}

      faqs={[
        ...GENERAL_FAQS,
        {
          question: "Can I fix an off-track garage door myself?",
          answer: "No. An off-track door is under immense tension from the springs and cables. Trying to force it back into place can cause the door to fall, leading to severe injury or completely destroying the door panels. Always call a professional.",
          schemaAnswer: "No. Attempting to fix an off-track garage door is extremely dangerous due to the high tension of springs and the heavy weight of the door. Professional realignment is required."
        },
        {
          question: "Why did my garage door come off the track?",
          answer: "The most common reasons are: hitting the door with a vehicle, a broken lift cable, worn-out rollers that snapped, or an obstruction in the track path. Earthquakes or shifting foundations can also cause track misalignment.",
          schemaAnswer: "Common causes include vehicle impact, broken lift cables, worn-out rollers, obstructions in the tracks, or shifting foundations."
        }
      ]}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Off-Track Repair", url: "/services/off-track-repair" }
      ]}
    />
  );
}
