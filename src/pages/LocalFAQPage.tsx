/**
 * pages/LocalFAQPage.tsx — Zeus Garage Doors
 * Target: Localized FAQ for Eastside WA (Kirkland, Bellevue, Redmond)
 */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import SEOHead from "../components/SEOHead";
import { UNIVERSAL_FAQS } from "../components/FAQAccordion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const LOCAL_FAQS = [
  {
    question: "How fast can you reach Totem Lake or Juanita in Kirkland?",
    answer:
      "Since our technicians are based right here in Kirkland, we typically provide same-day service to neighborhoods like Totem Lake, Juanita, and Finn Hill. In most cases, we can have a pro at your door within 2–4 hours of your call.",
  },
  {
    question:
      "Do you service the heavy custom wood doors common on Mercer Island?",
    answer:
      "Yes. Mercer Island homes often feature heavy, custom-designed wood garage doors that require specialized high-torque springs and heavy-duty openers. We carry the specific hardware needed to balance these larger systems safely.",
  },
  {
    question:
      "Why do garage door springs rust faster near Lake Washington and Lake Sammamish?",
    answer:
      "The higher humidity levels near the lakes accelerate oxidation on standard steel springs. For homes in Bellevue and Redmond near the water, we recommend galvanized or oil-tempered springs which offer superior rust resistance against the PNW moisture.",
  },
  {
    question:
      "Are your technicians familiar with the steep driveways in the Issaquah Highlands and Somerset?",
    answer:
      "Absolutely. We operate fully equipped service trucks capable of navigating the steeper terrain of the Eastside highlands. We ensure your door is perfectly balanced to handle the extra vibration that sometimes comes with home movement in these hilly areas.",
  },
  {
    question:
      "What happens if my garage door fails during a major PNW winter storm?",
    answer:
      "Power outages are common during our wind and snow storms. We install and service battery-backup openers (like LiftMaster) that allow you to operate your door even when the grid is down. We also prioritize emergency repairs during extreme weather for King and Snohomish County residents.",
  },
];

const ALL_FAQS = [...LOCAL_FAQS, ...UNIVERSAL_FAQS];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ALL_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.schemaAnswer || faq.answer,
    },
  })),
};

export default function LocalFAQPage() {
  return (
    <>
      <SEOHead
        title="Garage Door Repair FAQ | Complete Homeowner Guide"
        description="Complete garage door repair FAQ — springs, openers, cables, maintenance, noise, cold weather, insurance coverage, and panel replacement. Plain answers."
        canonical="/local-faq"
        pageType="about"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn>
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Complete Resource</p>
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4 text-pretty">
              Garage Door Repair — Complete FAQ
            </h1>
            <p className="text-lg text-navy/60 mb-4 text-pretty max-w-2xl">
              Straightforward answers to the questions homeowners in Seattle, Kirkland, Bellevue, and across the Eastside search for most often. No fluff, no upsells.
            </p>
            <p className="text-sm text-navy/50 mb-12 max-w-2xl">
              Covers: troubleshooting · springs · openers · cables · panels · maintenance · cold weather · insurance · noise · and more.
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h2 className="text-xl font-bold text-navy mb-4">Troubleshooting & General Questions</h2>
            <Accordion type="single" collapsible className="w-full mb-10">
              {UNIVERSAL_FAQS.map((faq, i) => (
                <AccordionItem key={`u-${i}`} value={`universal-${i}`}>
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-navy hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-navy/70 leading-relaxed text-base">
                    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-xl font-bold text-navy mb-4">Pacific Northwest & Local Service Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {LOCAL_FAQS.map((faq, i) => (
                <AccordionItem key={`l-${i}`} value={`local-${i}`}>
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-navy hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-navy/70 leading-relaxed text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-20 p-8 md:p-10 bg-navy/5 border border-navy/10 rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Have a specific question about your neighborhood?
              </h2>
              <p className="mb-8 text-navy/60 text-lg text-pretty">
                We've likely worked on a home just down the street from you.
                Contact us for a local expert's opinion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+14255550199"
                  className="inline-flex items-center justify-center gap-2 bg-navy text-white px-8 py-4 rounded-full font-bold hover:bg-navy/90 active:scale-[0.97] transition-all text-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <Link
                  to="/contact"
                  className="border border-navy/20 text-navy px-8 py-4 rounded-full font-bold hover:bg-navy/5 active:scale-[0.97] transition-all text-lg"
                >
                  Request an Estimate
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
    </>
  );
}
