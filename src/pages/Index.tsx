import SEOHead from "@/components/SEOHead";
import QuotePopup from "@/components/QuotePopup";
import QuoteForm from "@/components/QuoteForm";
import HeroCarousel from "@/components/HeroCarousel";
import AuthorityBar from "@/components/AuthorityBar";
import CommunitiesGrid from "@/components/CommunitiesGrid";
import TrustMarquee from "@/components/TrustMarquee";
import ServicesGrid from "@/components/ServicesGrid";
import SpecialtyServices from "@/components/SpecialtyServices";
import FAQAccordion, { GENERAL_FAQS } from "@/components/FAQAccordion";
import VoiceSnippets from "@/components/VoiceSnippets";
import BlogPreview from "@/components/BlogPreview";
import CTASection from "@/components/CTASection";
import type { FAQItem } from "@/components/SEOHead";

// High-value "People Also Ask" / voice-search FAQ pairs injected into
// the FAQPage JSON-LD schema only — not rendered in the visible accordion.
const HOME_SCHEMA_FAQS: FAQItem[] = [
  // ── 24/7 Emergency cluster
  {
    question: "Is there emergency garage door repair service in Kirkland WA?",
    answer:
      "Yes. Zeus Garage Doors provides same-day emergency garage door repair in Kirkland, WA. We dispatch a certified technician for broken springs, off-track doors, stuck doors, and snapped cables. We are available Sunday–Thursday 6 AM–10 PM and Friday 6 AM–6 PM. Call 425-555-0199.",
  },
  {
    question: "Who do I call for emergency garage door repair near me in Washington?",
    answer:
      "Call Zeus Garage Doors at 425-555-0199 for emergency garage door repair anywhere on the Eastside of Washington state — Kirkland, Bellevue, Redmond, Bothell, Woodinville, and Mercer Island. Same-day dispatch, Sunday through Friday.",
  },
  {
    question: "Can a garage door be fixed the same day in Kirkland WA?",
    answer:
      "Yes. Zeus Garage Doors offers same-day garage door repair in Kirkland, WA for most issues including broken springs, off-track doors, snapped cables, and opener failures. We stock parts on every truck to complete most repairs in a single visit.",
  },
  {
    question: "Do you offer emergency garage door repair on the Eastside?",
    answer:
      "Yes, we provide same-day and emergency garage door repair services across Kirkland, Bellevue, and Redmond for off-track doors, broken cables, and snapped springs.",
  },
  // ── Broken spring cluster
  {
    question: "How much does broken garage door spring replacement cost in Washington state?",
    answer:
      "Broken garage door spring replacement cost in Washington state depends on the spring type (torsion or extension), door weight, and number of springs replaced. Zeus Garage Doors provides flat-rate pricing confirmed after an in-person assessment — we do not give phone quotes.",
  },
  {
    question: "How long does it take to replace a broken garage door spring?",
    answer:
      "A professional garage door spring replacement typically takes 45 to 90 minutes. Zeus Garage Doors technicians carry torsion and extension springs in multiple sizes on every truck, so most Kirkland and Eastside spring replacements are completed in a single same-day visit.",
  },
  {
    question: "What happens if a garage door spring breaks?",
    answer:
      "When a garage door spring breaks, the door becomes extremely heavy and unsafe to operate manually. The opener may also be damaged if you continue using it. Stop using the door immediately and call Zeus Garage Doors at 425-555-0199 for same-day spring replacement in Kirkland and the Eastside.",
  },
  // ── General PAA
  {
    question: "How much does it cost to fix a broken garage door spring in Kirkland?",
    answer:
      "The cost to replace a garage door spring in Kirkland depends on the door's weight and spring type. Zeus Garage Doors provides flat-rate pricing confirmed on-site after an in-person assessment, with same-day service.",
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
      <QuotePopup />
      <SEOHead
        title="Garage Door Repair Kirkland WA | Zeus Garage Doors — Eastside's #1 Choice"
        description="Expert garage door repair & installation in Kirkland, Bellevue, Redmond & the Eastside. Same-day emergency service, licensed & insured technicians, transparent pricing. Call 425-555-0199."
        canonical="/"
        pageType="home"
        faqs={[...HOME_SCHEMA_FAQS, ...GENERAL_FAQS]}
      />
      <HeroCarousel />

      {/* ── Inline Quote Section — visible immediately below the hero ── */}
      <section className="bg-[hsl(var(--navy))] py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left — value proposition */}
            <div className="text-white">
              <p className="text-[hsl(var(--primary))] text-xs font-semibold uppercase tracking-widest mb-3">
                Free Estimate — No Obligation
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight mb-4">
                Get a Free Quote Today
              </h2>
              <p className="text-white/70 text-base mb-8 max-w-md">
                Fill in your details and our dispatch team will call you back fast — same-day service available across the entire Eastside. For urgent emergencies outside regular hours, we offer 24/7 emergency dispatch.
              </p>
              <ul className="space-y-3">
                {[
                  "24/7 emergency dispatch — urgent repairs, any hour",
                  "Licensed, insured & background-checked techs",
                  "Transparent flat-rate pricing — no surprise fees",
                  "Parts stocked on every truck for one-visit fixes",
                  "🎁 10% off — first-time customers (mention at booking)",
                  "🎖️ 12.5% off — veterans & seniors (Zeus honors those who served)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[hsl(var(--primary))]/20 border border-[hsl(var(--primary))]/50 flex items-center justify-center">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4l2.5 2.5L9 1" stroke="hsl(43 90% 60%)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — elevated form card */}
            <div className="bg-white rounded-2xl shadow-2xl p-7 ring-1 ring-white/10">
              <h3 className="font-display text-lg font-bold text-[hsl(var(--navy))] mb-1">
                Request Your Free Quote
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] text-sm mb-5">
                We'll call you back promptly during business hours.
              </p>
              <QuoteForm />
            </div>

          </div>
        </div>
      </section>

      <AuthorityBar />
      <CommunitiesGrid />
      <TrustMarquee />
      <ServicesGrid />
      <SpecialtyServices />
      <VoiceSnippets />
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
