/**
 * pages/services/NewInstallationPage.tsx — Zeus Garage Doors
 * Target: New garage door installation, garage door replacement
 */

import ServicePage from "../../components/ServicePage";
import { GENERAL_FAQS } from "../../components/FAQAccordion";

export default function NewInstallationPage() {
  return (
    <ServicePage
      metaTitle="New Garage Door Installation | Custom & Steel Doors | Zeus"
      metaDescription="Upgrade your home's curb appeal with a new garage door. We install premium Amarr, Clopay, and Northwest doors in Kirkland, Bellevue & the Eastside."
      canonical="/services/new-installation"
      serviceName="New Door Installation"
      serviceTagline="Transform your home's exterior with a beautiful, energy-efficient new garage door built to withstand the Pacific Northwest climate."
      
      /* FEATURED SNIPPET TARGET */
      directAnswer="Zeus Garage Doors provides professional new garage door installation in Seattle, Kirkland, Bellevue, and the Eastside. We install premium steel, wood, and glass doors from top brands like Amarr and Clopay. Call 425-448-6443 for a free on-site estimate."
      heroImage={{
        src: "/images/services/real-photos/carriage-garage-door-kirkland-wa.webp",
        alt: "Beautiful new carriage house garage door installed on a modern home",
        title: "Premium Garage Door Installation"
      }}
      whatWeDoItems={[
        "Free in-person design consultation and measurement",
        "Removal and eco-friendly disposal of your old garage door",
        "Installation of new tracks, heavy-duty springs, and hardware",
        "Professional installation of the new door panels and weatherstripping",
        "Integration with a new or existing garage door opener",
        "Final safety inspection and balance testing"
      ]}
      warningSignsItems={[
        "Your current door is sagging, rotting, or severely rusted",
        "You want to improve your home's curb appeal and resale value",
        "Your garage is drafty and you need better insulation (high R-value)",
        "The old door requires constant, expensive repairs",
        "You are upgrading to a modern or custom architectural style"
      ]}
      whyZeusPoints={[
        {
          icon: "🏡",
          heading: "Curb Appeal Experts",
          body: "Your garage door makes up to 40% of your home's facade. We help you choose a design that perfectly complements your architecture."
        },
        {
          icon: "🌡️",
          heading: "Energy Efficiency",
          body: "We offer highly insulated polyurethane doors that keep your garage warm in the Washington winters and reduce your energy bills."
        },
        {
          icon: "📐",
          heading: "Precision Install",
          body: "A great door installed poorly will fail quickly. We laser-level all tracks and perfectly balance the torsion system for a lifetime of smooth operation."
        },
        {
          icon: "🛡️",
          heading: "5-Year Warranty",
          body: "Every new installation is backed by our 5-year parts and labor warranty — the best on the Eastside. If anything fails due to installation workmanship, we fix it free."
        }
      ]}
      contentBlocks={[
        {
          heading: "What Is Involved in a New Garage Door Installation?",
          body: `A new garage door installation is a full system replacement that includes the door panels, track system, spring system, hardware, and opener integration. The process begins with removing the existing door — panels, horizontal and vertical tracks, torsion or extension spring system, cables, and bottom brackets — down to the bare opening. The new door is installed panel by panel from the bottom up, with hinges connecting each section and rollers fitted to the sides. The track system is installed and set to the correct vertical and horizontal alignment for the door's weight and size. A new torsion spring assembly is sized and wound to the exact counterbalance required for the door's specific weight, measured on-site. Finally, the opener is connected, the travel limits and obstacle detection force are calibrated, and all remotes and keypads are programmed. A professional installation on a standard two-car garage door typically takes three to five hours from start to finish.`,
        },
        {
          heading: "Choosing the Right Garage Door for a Pacific Northwest Home",
          body: `The Pacific Northwest's damp climate creates specific requirements for garage door selection that differ from drier inland markets. Steel insulated doors with a polyurethane foam core offer the best balance of durability, insulation value, and moisture resistance for Kirkland and Eastside WA homes. Polyurethane-insulated steel doors achieve R-values of 12 to 18, compared to R-6 to R-9 for polystyrene-insulated panels — a meaningful difference for attached garages that share a wall with living space.

Wood doors and wood composite doors require more maintenance in Washington's wet climate — annual painting or staining is essential to prevent moisture infiltration and panel delamination. Aluminum and glass panel doors are a popular modern choice for contemporary homes and hold up well to the climate, though they offer minimal insulation value and should be reserved for detached garages or heated garage applications.

Zeus Garage Doors carries steel, insulated steel, aluminum, and composite door lines from Amarr and Northwest Door, with options from a basic builder replacement to a fully custom carriage house design. We bring door samples to your home so you can see the profile and finish in your actual light conditions before committing.`,
        },
      ]}
      relatedEntities={[
        "Amarr Garage Doors", "Clopay", "Northwest Door", "Wayne Dalton", 
        "R-value", "Polyurethane insulation", "Polystyrene", "Carriage house doors", 
        "Modern glass garage doors", "Steel raised panel", "Weatherstripping", 
        "Wind load rating", "Torsion system"
      ]}
      relatedArticles={[
        { title: "Average Cost to Replace a Garage Door", href: "/blog/average-cost-to-replace-garage-door" },
        { title: "Repair vs Replace: Which Makes Sense?", href: "/blog/repair-vs-replace-garage-door" },
        { title: "LiftMaster vs Chamberlain: Full Comparison", href: "/blog/liftmaster-vs-chamberlain-garage-door-opener" },
        { title: "Best Garage Door Opener for PNW Homes", href: "/blog/best-garage-door-opener-pnw" },
      ]}
      relatedServices={[
        { label: "Opener Repair & Installation", href: "/services/opener-repair" },
        { label: "Weather Seal Replacement", href: "/services/weather-seal-replacement" },
        { label: "Safety Inspection", href: "/services/safety-inspection" },
        { label: "View Our Work — Gallery", href: "/gallery" },
      ]}

      faqs={[
        ...GENERAL_FAQS,
        {
          question: "How long does it take to install a new garage door?",
          answer: "A standard single or double garage door installation typically takes our professional technicians 3 to 5 hours. This includes removing the old door, installing the new tracks, door, and hardware, and connecting the opener.",
          schemaAnswer: "A standard residential garage door installation typically takes between 3 to 5 hours, including removal of the old door and hardware."
        },
        {
          question: "Do you dispose of my old garage door?",
          answer: "Yes, complete removal and eco-friendly haul-away of your old door panels, tracks, and hardware is included in our installation service.",
          schemaAnswer: "Yes, our installation service includes the complete removal and eco-friendly disposal of your old garage door and hardware."
        }
      ]}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "New Installation", url: "/services/new-installation" }
      ]}
    />
  );
}
