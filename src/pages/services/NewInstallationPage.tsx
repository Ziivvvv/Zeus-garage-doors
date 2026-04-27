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
      directAnswer="Zeus Garage Doors provides professional new garage door installation in Seattle, Kirkland, Bellevue, and the Eastside. We install premium steel, wood, and glass doors from top brands like Amarr and Clopay. Call 425-555-0199 for a free on-site estimate."
      heroImage={{
        src: "/images/new-garage-door-installation.webp",
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
        }
      ]}
      relatedEntities={[
        "Amarr Garage Doors", "Clopay", "Northwest Door", "Wayne Dalton", 
        "R-value", "Polyurethane insulation", "Polystyrene", "Carriage house doors", 
        "Modern glass garage doors", "Steel raised panel", "Weatherstripping", 
        "Wind load rating", "Torsion system"
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
