/**
 * pages/services/PanelReplacementPage.tsx — Zeus Garage Doors
 * Target: Garage door panel replacement, dented garage door, section repair
 */

import ServicePage from "../../components/ServicePage";
import { GENERAL_FAQS, UNIVERSAL_FAQS } from "../../components/FAQAccordion";

export default function PanelReplacementPage() {
  return (
    <ServicePage
      metaTitle="Garage Door Panel Replacement | Fix Dented Doors | Zeus"
      metaDescription="Dented garage door? Zeus replaces damaged panels & sections for Amarr, Clopay & Wayne Dalton in Seattle, Kirkland & Eastside WA. Call 425-448-6443."
      canonical="/services/panel-replacement"
      serviceName="Panel Replacement"
      serviceTagline="Don't replace the whole door if you don't have to. We source and install matching replacement sections for dented, cracked, or rotted garage doors."
      
      /* FEATURED SNIPPET TARGET */
      directAnswer="Zeus Garage Doors provides individual garage door panel replacement in Seattle, Kirkland, Bellevue, and the Eastside. If you dented the bottom or middle section, we can match and install a replacement panel without replacing the entire door. Call 425-448-6443 for a free on-site assessment."
      heroImage={{
        src: "/images/services/real-photos/damaged-garage-door-panel-replacement-kirkland-wa.webp",
        alt: "Technician replacing a dented garage door panel section",
        title: "Seamless Panel Replacement"
      }}
      whatWeDoItems={[
        "Identify the exact make, model, and color code of your current door",
        "Source OEM replacement sections from Clopay, Amarr, Wayne Dalton, etc.",
        "Safely remove the damaged section without compromising the tracks",
        "Install the new panel and reconnect hinges and struts",
        "Color-match and weather-seal the new section",
        "Rebalance the door weight if the new panel alters the tension"
      ]}
      warningSignsItems={[
        "You accidentally backed your car into the bottom section",
        "Wooden panels are showing signs of severe rot or warping",
        "A panel has cracked, letting in cold air and pests",
        "The door buckles or bends in the middle when opening",
        "A dent is causing the door to bind against the tracks"
      ]}
      whyZeusPoints={[
        {
          icon: "🔍",
          heading: "Exact Matching",
          body: "We work directly with major manufacturers to find the exact panel profile, texture, and color so your door looks seamless."
        },
        {
          icon: "💰",
          heading: "Cost-Effective",
          body: "Replacing one or two panels is significantly cheaper than buying an entirely new door, saving you hundreds of dollars."
        },
        {
          icon: "🛠️",
          heading: "Structural Integrity",
          body: "We add reinforcement struts if needed to ensure the new panel holds up perfectly against wind and daily use."
        },
        {
          icon: "🛡️",
          heading: "5-Year Warranty",
          body: "Panel replacements are backed by our 5-year parts and labor warranty — the longest guarantee on the Eastside. Materials defects or fitting issues are covered, no questions asked."
        }
      ]}
      relatedEntities={[
        "Bottom section", "Intermediate panel", "Top section", "Polyurethane insulation", 
        "Polystyrene insulation", "R-value", "Amarr", "Clopay", "Wayne Dalton", 
        "Northwest Door", "Wind load strut", "Hinges", "Pinch-resistant joints"
      ]}
      relatedArticles={[
        { title: "Average Cost to Replace a Garage Door", href: "/blog/average-cost-to-replace-garage-door" },
        { title: "Repair vs Replace: Which Makes Sense?", href: "/blog/repair-vs-replace-garage-door" },
        { title: "What Causes a Garage Door to Go Off Track?", href: "/blog/what-causes-garage-door-off-track" },
      ]}
      relatedServices={[
        { label: "New Door Installation", href: "/services/new-installation" },
        { label: "Off-Track Door Repair", href: "/services/off-track-repair" },
        { label: "Safety Inspection", href: "/services/safety-inspection" },
      ]}

      faqs={[
        ...GENERAL_FAQS,
        {
          question: "Can you just replace one panel on a garage door?",
          answer: "Yes, as long as the manufacturer still makes that specific model and color. Replacing a single panel is a great way to fix a dent from a car bumper without the expense of a whole new door.",
          schemaAnswer: "Yes, individual garage door panels can be replaced as long as the specific model is still manufactured. It is a cost-effective alternative to replacing the entire door."
        },
        {
          question: "Will the new garage door panel match the old ones exactly?",
          answer: "We order the exact part from the original manufacturer. However, if your current door is several years old, the paint may have faded slightly from the sun, so there might be a minor color variance. Painting the door after replacement is always an option.",
          schemaAnswer: "We order exact OEM replacement panels, but slight color variations may occur if the original door has faded from sun exposure over the years."
        },
        // Universal: panel replacement + insurance — directly relevant to this page
        ...UNIVERSAL_FAQS.filter(f =>
          f.question.includes("just one panel") ||
          f.question.includes("insurance") ||
          f.question.includes("How long does a garage door last")
        ),
      ]}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Panel Replacement", url: "/services/panel-replacement" }
      ]}
    />
  );
}
