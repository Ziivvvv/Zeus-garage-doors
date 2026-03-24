/**
 * FAQAccordion.tsx — Zeus Garage Doors
 * - Injects FAQPage JSON-LD schema on render
 * - Direct answer blocks formatted for featured snippets
 * - Accessible: keyboard-navigable, ARIA-compliant
 * - Framer Motion expand/collapse animations
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────

export interface FAQItem {
  question: string;
  answer: string;
  /** Optional: structured answer for schema (plain text, no HTML) */
  schemaAnswer?: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  /** If true, inject FAQPage JSON-LD schema into document head */
  injectSchema?: boolean;
  /** ID for the section — used in anchor links */
  id?: string;
}

// ─────────────────────────────────────────────
// SCHEMA INJECTION
// ─────────────────────────────────────────────

function injectFAQSchema(items: FAQItem[]) {
  const existing = document.getElementById("schema-faq-accordion");
  if (existing) existing.remove();

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.schemaAnswer || item.answer.replace(/<[^>]*>/g, ""),
      },
    })),
  };

  const script = document.createElement("script");
  script.id = "schema-faq-accordion";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

// ─────────────────────────────────────────────
// SINGLE ITEM
// ─────────────────────────────────────────────

interface FAQItemComponentProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItemComponent({ item, isOpen, onToggle, index }: FAQItemComponentProps) {
  const answerId = `faq-answer-${index}`;
  const questionId = `faq-question-${index}`;

  return (
    <div
      className={`border-b border-slate-200 last:border-b-0 transition-colors ${
        isOpen ? "bg-offwhite" : "bg-white hover:bg-slate-50"
      }`}
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        id={questionId}
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={onToggle}
        className="w-full text-left flex items-center justify-between gap-4 px-6 py-5 group"
      >
        <h3
          itemProp="name"
          className="text-navy font-semibold text-base lg:text-lg leading-snug group-hover:text-forest transition-colors"
        >
          {item.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 w-7 h-7 rounded-full border-2 border-gold flex items-center justify-center"
          aria-hidden="true"
        >
          <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={answerId}
            role="region"
            aria-labelledby={questionId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div
              itemProp="text"
              className="px-6 pb-6 text-charcoal leading-relaxed text-base"
              dangerouslySetInnerHTML={{ __html: item.answer }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────

export default function FAQAccordion({
  items,
  title = "Frequently Asked Questions",
  subtitle,
  injectSchema: shouldInjectSchema = true,
  id = "faq",
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    if (shouldInjectSchema && items.length > 0) {
      injectFAQSchema(items);
    }
    return () => {
      const existing = document.getElementById("schema-faq-accordion");
      if (existing) existing.remove();
    };
  }, [items, shouldInjectSchema]);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id={id}
      className="py-16 lg:py-24 bg-white"
      aria-labelledby="faq-heading"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
            Got Questions?
          </p>
          <h2
            id="faq-heading"
            className="text-3xl lg:text-4xl font-bold text-navy font-playfair mb-4"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-charcoal/70 text-lg max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div
          className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
          role="list"
        >
          {items.map((item, index) => (
            <FAQItemComponent
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
              index={index}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-charcoal/60 text-base mb-4">
            Don't see your question? We're happy to help.
          </p>
          <a
            href="tel:+14255550199"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold px-6 py-3 rounded-xl transition-colors"
            aria-label="Call Zeus Garage Doors to ask a question"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Us: 425-555-0199
          </a>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// PRESET FAQ SETS — import and use per page
// ─────────────────────────────────────────────

export const SPRING_FAQS: FAQItem[] = [
  {
    question: "How much does garage door spring replacement cost in Kirkland, WA?",
    answer:
      "The cost of garage door spring replacement in Kirkland, WA depends on spring type (torsion vs. extension), wire gauge, door weight, and number of springs needed. Zeus Garage Doors provides honest, transparent pricing after an in-person assessment — no phone quotes, no surprises.",
    schemaAnswer:
      "The cost depends on spring type, wire gauge, and door weight. Zeus Garage Doors provides transparent pricing after an in-person assessment.",
  },
  {
    question: "How long does a garage door spring last in Washington state?",
    answer:
      "Standard torsion springs are rated for <strong>10,000 cycles</strong> (roughly 7–10 years of average use). In the Pacific Northwest, however, springs often fail sooner due to constant humidity and temperature swings. Kirkland's wet winters and damp springs accelerate rust and metal fatigue — especially in older Seattle-area homes with inadequate weatherstripping.",
    schemaAnswer:
      "Standard springs last 7–10 years, but PNW humidity accelerates rust and metal fatigue, often shortening lifespan in the Kirkland and Eastside area.",
  },
  {
    question: "Is it safe to use my garage door with a broken spring?",
    answer:
      "<strong>No — stop using the door immediately.</strong> A broken torsion spring puts enormous strain on the opener motor, cable drums, and tracks. Continued use can cause the door to fall unexpectedly, damaging your vehicle or injuring family members. Call Zeus Garage Doors for same-day spring replacement.",
    schemaAnswer:
      "No — stop using the door immediately. A broken torsion spring puts dangerous strain on the opener motor and cables. Call for same-day service.",
  },
  {
    question: "Do you replace both springs at once?",
    answer:
      "Yes, and for good reason: if one spring breaks, the other is likely nearing the end of its cycle life too. Replacing both at once saves you a second service call, protects the opener from further stress, and keeps the door balanced — which matters especially in our PNW winters when thermal expansion and contraction stress the hardware.",
    schemaAnswer:
      "Yes. If one spring breaks, the second is near its end of life. Replacing both at once saves cost and protects the opener from further damage.",
  },
  {
    question: "Can I replace a garage door spring myself?",
    answer:
      "We strongly advise against DIY spring replacement. Torsion springs store enormous mechanical energy — an improperly wound spring can release violently, causing serious injury. This is one of the most dangerous garage door repairs. Zeus Garage Doors' technicians are trained in safe spring handling and use professional winding bars.",
    schemaAnswer:
      "We strongly advise against it. Torsion springs store dangerous mechanical energy. Improper winding can cause serious injury. Always hire a licensed technician.",
  },
];

export const OPENER_FAQS: FAQItem[] = [
  {
    question: "What garage door opener brands do you work with in the Eastside WA area?",
    answer:
      "Zeus Garage Doors specializes in <strong>LiftMaster, Genie, and Chamberlain</strong> openers — the three most reliable brands for Pacific Northwest homes. We stock parts for these brands for same-day repair in Kirkland, Bellevue, Redmond, and surrounding cities.",
    schemaAnswer:
      "We specialize in LiftMaster, Genie, and Chamberlain openers, stocking parts for same-day repair across the Eastside WA area.",
  },
  {
    question: "How do I know if I need a new opener or just a repair?",
    answer:
      "Common signs you need a repair: grinding noise, slow movement, remote not responding, door reversing unexpectedly. Signs you need a new opener: unit is 15+ years old, motor smells burnt, no wall button response, or it's a pre-2004 model without auto-reverse safety sensors (required by UL 325 standards). We'll assess in person and give you an honest recommendation.",
    schemaAnswer:
      "If the opener is 15+ years old, smells burnt, or lacks UL 325 safety features, replacement is likely best. Newer units showing noise or remote issues usually just need repair.",
  },
  {
    question: "How long does opener installation take?",
    answer:
      "Most opener installations take <strong>1.5 to 2.5 hours</strong> for a standard residential garage door. We handle the full installation including mounting, rail assembly, safety sensor alignment, remote programming, and wall-button setup.",
    schemaAnswer:
      "Most residential opener installations take 1.5 to 2.5 hours including mounting, safety sensor alignment, and remote programming.",
  },
];

export const GENERAL_FAQS: FAQItem[] = [
  {
    question: "Do you offer same-day garage door repair in Kirkland, WA?",
    answer:
      "Yes — same-day service is our standard, not an upsell. When you call Zeus Garage Doors, we schedule a same-day appointment whenever possible. We serve Kirkland, Bellevue, Redmond, Mercer Island, Lynnwood, Bothell, and Woodinville.",
    schemaAnswer:
      "Yes. Same-day service is standard at Zeus Garage Doors across Kirkland, Bellevue, Redmond, and the greater Eastside WA area.",
  },
  {
    question: "Are you licensed and insured in Washington state?",
    answer:
      "Yes. Zeus Garage Doors is a licensed and insured contractor in Washington state. We carry liability insurance on every job. You can always ask to see our license number at time of service.",
    schemaAnswer:
      "Yes. Zeus Garage Doors is a licensed and insured contractor in Washington state.",
  },
  {
    question: "Do you give estimates over the phone?",
    answer:
      "We don't quote prices over the phone — and neither does any honest garage door company. Every job is different: spring sizes, cable condition, door weight, and brand all affect cost. We come to you, assess in person, explain everything clearly, and give you an exact price before any work begins.",
    schemaAnswer:
      "We don't quote over the phone because every job is different. We come to you, assess in person, and provide an exact price before work begins.",
  },
  {
    question: "What neighborhoods in Kirkland do you serve?",
    answer:
      "We serve all Kirkland neighborhoods including <strong>Juanita, Totem Lake, Finn Hill, Houghton, Bridle Trails, North Rose Hill, South Rose Hill, Kingsgate, Norkirk, Moss Bay, and the Highlands</strong>. If you're anywhere in the 98033, 98034, or 98074 zip codes, we've got you covered.",
    schemaAnswer:
      "We serve all Kirkland neighborhoods: Juanita, Totem Lake, Finn Hill, Houghton, Bridle Trails, North Rose Hill, South Rose Hill, Kingsgate, Norkirk, Moss Bay, and the Highlands.",
  },
  {
    question: "How much does garage door repair cost in the Eastside area?",
    answer:
      "The cost of garage door repair depends on the type of repair needed (springs, cables, rollers, sensors) and the specific hardware your door requires. New door installation costs vary based on material, size, and insulation. We provide exact, transparent pricing after an in-person assessment — never over the phone.",
    schemaAnswer:
      "Repair costs depend on the type of work needed and specific hardware. We provide exact, transparent pricing after an in-person assessment.",
  },
];
