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
      metaDescription="Is your garage door hanging crooked or off its tracks? DO NOT operate it. Zeus Garage Doors offers emergency off-track repair in Kirkland and the Eastside. Call 425-555-0199."
      canonical="/services/off-track-repair"
      serviceName="Off-Track Door Repair"
      serviceTagline="A door off its tracks is extremely dangerous and can damage your panels. We realign tracks, replace rollers, and restore balance immediately."
      
      /* FEATURED SNIPPET TARGET */
      directAnswer="Zeus Garage Doors provides emergency off-track garage door repair in Kirkland, Bellevue, and Redmond. If your door is crooked or rollers have popped out, stop using it immediately. We safely realign the tracks, reset the cables, and replace damaged rollers. Call 425-555-0199 for fast service."
      heroImage={{
        src: "/images/off-track-garage-door-repair.webp",
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
        }
      ]}
      relatedEntities={[
        "Vertical track", "Horizontal track", "Nylon rollers", "Steel rollers", 
        "Track alignment", "Lift cables", "Cable drums", "Binding", 
        "Track brackets", "Flag brackets", "Door jamb"
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
