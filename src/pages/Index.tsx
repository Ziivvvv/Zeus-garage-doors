import SEOHead from "@/components/SEOHead";
import HeroCarousel from "@/components/HeroCarousel";
import AuthorityBar from "@/components/AuthorityBar";
import CommunitiesGrid from "@/components/CommunitiesGrid";
import TrustMarquee from "@/components/TrustMarquee";
import ServicesGrid from "@/components/ServicesGrid";
import SpecialtyServices from "@/components/SpecialtyServices";
import FAQAccordion, { GENERAL_FAQS } from "@/components/FAQAccordion";
import BlogPreview from "@/components/BlogPreview";
import CTASection from "@/components/CTASection";
import type { FAQItem } from "@/components/SEOHead";

// High-value "People Also Ask" / voice-search FAQ pairs injected into
// the FAQPage JSON-LD schema only — not rendered in the visible accordion.
const HOME_SCHEMA_FAQS: FAQItem[] = [
  {
    question: "How much does it cost to fix a broken garage door spring in Kirkland?",
    answer:
      "The cost to replace a garage door spring in Kirkland ranges from $150 to $350, depending on the door's weight and spring type. Zeus Garage Doors offers flat-rate pricing with same-day service.",
  },
  {
    question: "Do you offer emergency garage door repair on the Eastside?",
    answer:
      "Yes, we provide same-day and emergency garage door repair services across Kirkland, Bellevue, and Redmond for off-track doors, broken cables, and snapped springs.",
  },
  {
    question: "Why is my garage door opening by itself?",
    answer:
      "A garage door opening by itself is typically caused by a short circuit in the opener's logic board, a misaligned safety sensor, or a neighbor's remote on the same frequency. Our technicians can diagnose and reset the system quickly.",
  },
];

export default function Index() {
  return (
    <main className="pt-16">
      <SEOHead
        title="Garage Door Repair Kirkland WA | Zeus Garage Doors — Eastside's #1 Choice"
        description="Expert garage door repair & installation in Kirkland, Bellevue, Redmond & the Eastside. Same-day emergency service, licensed & insured technicians, transparent pricing. Call 425-555-0199."
        canonical="/"
        pageType="home"
        faqs={[...HOME_SCHEMA_FAQS, ...GENERAL_FAQS]}
      />
      <HeroCarousel />
      <AuthorityBar />
      <CommunitiesGrid />
      <TrustMarquee />
      <ServicesGrid />
      <SpecialtyServices />
      <FAQAccordion
        items={GENERAL_FAQS}
        title="Garage Door Repair — Frequently Asked Questions"
        subtitle="Real answers for Eastside homeowners about repair costs, timelines, and when to call us."
        injectSchema={false}
      />
      <BlogPreview />
      <CTASection />
    </main>
  );
}
