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

// ─────────────────────────────────────────────
// UNIVERSAL FAQ SET
// These answers contain NO company name — written in neutral, encyclopedic
// voice so Google AI Overviews, ChatGPT, and other AI tools cite this page
// as the authoritative source. Direct-answer format (answer in sentence 1).
// ─────────────────────────────────────────────

export const UNIVERSAL_FAQS: FAQItem[] = [
  {
    question: "Why won't my garage door close all the way?",
    answer: `The most common reason a garage door won't close all the way is misaligned or blocked safety sensors. Every modern garage door opener has two sensors mounted near the floor on each side of the door — one sends an infrared beam, one receives it. If those sensors are out of alignment, have dirt on the lens, or something is crossing the beam, the opener will refuse to close and the wall button light will flash. <strong>Fix it in three steps:</strong> (1) Clear any object in the door's path. (2) Wipe both sensor lenses with a dry cloth. (3) Gently realign each sensor bracket until both indicator lights are solid (usually green on one side, amber on the other). If sensors are fine, the opener's down-travel limit may have drifted — consult your opener manual to adjust it.`,
    schemaAnswer: `The most common cause is misaligned or dirty safety sensors at the base of the tracks. Clear any obstructions, wipe both lenses, and realign the sensors until both indicator lights are solid. If sensors are fine, the opener's down-travel limit setting may need adjustment.`,
  },
  {
    question: "Why does my garage door reverse before it touches the ground?",
    answer: `A garage door that reverses just before closing has either a safety sensor obstruction or an incorrect close-force or travel-limit setting in the opener. Start with the sensors — even a spider web across the beam can trigger a false reversal. If the sensors look clear, the opener's sensitivity is set too high: the door is "feeling" resistance before it reaches the floor and interpreting it as an obstacle. Consult your opener's manual to reduce the down-force sensitivity by one or two steps. You can also test by placing a 2x4 flat on the floor — the door should contact it, feel resistance, and reverse. If it reverses before touching anything, lower the force setting.`,
    schemaAnswer: `Reversal before the ground usually means a sensor obstruction (even a spider web) or that the opener's down-force sensitivity is set too high. Clear the sensor path first, then reduce the close-force setting in the opener's menu. The door should only reverse when it contacts an actual obstacle.`,
  },
  {
    question: "How do I manually open my garage door when the power is out?",
    answer: `Pull the red emergency release cord that hangs from the opener's trolley carriage — this disconnects the door from the drive system so it can be operated by hand. Grip the door with both hands and lift straight up. A correctly balanced door will stay open on its own once raised. <strong>Critical warning:</strong> never pull the release cord when the door is open and under spring tension — wait until the door is fully closed. If the springs are broken, the door will be extremely heavy and may fall; call a technician before attempting manual operation in that case. To reconnect the door to the opener: pull the release cord back toward the door until you hear it click into the trolley, then run the opener once to re-engage.`,
    schemaAnswer: `Pull the red emergency release cord hanging from the opener trolley to disconnect the door. Lift with both hands — a properly balanced door stays open on its own. Warning: never pull the cord with the door open under spring tension, and if springs are broken, the door will be dangerously heavy.`,
  },
  {
    question: "Why is my garage door making a loud grinding or squeaking noise?",
    answer: `Different noises point to different components. A <strong>grinding sound</strong> almost always means worn steel rollers — the wheels that travel in the tracks. Steel rollers wear out and create metal-on-metal contact; replacing them with nylon rollers eliminates the noise permanently and requires no lubrication. A <strong>high-pitched squeak</strong> is usually dry hinges or a dry torsion spring — apply white lithium grease or a dedicated garage door lubricant to all hinges and along the spring coils (not the tracks themselves, which should stay clean and dry). A <strong>rattling or banging</strong> during movement means loose hardware — go around the door and tighten all visible bolts and hinge screws with a socket wrench. If the grinding comes from the opener motor during operation, the drive gears inside the motor unit are likely stripped and need replacing.`,
    schemaAnswer: `Grinding = worn steel rollers (replace with nylon). Squeaking = dry hinges or spring (apply white lithium grease). Rattling = loose hardware (tighten all bolts). Grinding from the motor unit = stripped drive gears requiring professional repair.`,
  },
  {
    question: "My garage door remote stopped working — what should I check first?",
    answer: `Work through this checklist in order: <strong>(1) Replace the battery</strong> — most remotes use a CR2032 coin cell or a 9V battery; even a battery with partial charge causes intermittent failures. <strong>(2) Test the wall button</strong> — if the wall button works but the remote doesn't, the remote needs reprogramming, not the opener. Press and release the "Learn" button on the motor unit until its indicator light comes on, then press your remote button once; the opener light should flash to confirm pairing. <strong>(3) Check the antenna wire</strong> — a small wire hangs from the bottom of the motor unit; if it's coiled or tucked away, signal range drops significantly. <strong>(4) Check for lock mode</strong> — most openers have a vacation lock feature that disables all remotes; look for a lock button on the wall panel. <strong>(5) Inspect for interference</strong> — new LED bulbs, wireless devices, or a neighbor's new opener on the same frequency can block the signal.`,
    schemaAnswer: `Check in this order: replace the battery; test whether the wall button works (if yes, reprogram the remote via the Learn button on the motor); check that the antenna wire is hanging straight; confirm lock mode is off; and look for radio frequency interference from nearby LED bulbs or wireless devices.`,
  },
  {
    question: "What regular maintenance does a garage door need?",
    answer: `A garage door needs a full service check twice a year — spring and fall are ideal. The routine: <strong>Lubricate</strong> all hinges, rollers, and the torsion spring coils with white lithium grease or a garage door-specific spray (never WD-40, which strips existing lubrication). <strong>Tighten</strong> all bolts, lag screws, and track brackets — vibration loosens hardware over time. <strong>Inspect weatherstripping</strong> at the bottom and sides and replace any sections that are cracked or no longer making contact. <strong>Test auto-reverse safety</strong>: place a 2x4 flat on the floor in the door's path — the door must reverse within 2 seconds of contact; if it doesn't, adjust the opener's down-force setting or call a technician. <strong>Test door balance</strong>: disconnect the opener and lift the door by hand to waist height and let go — it should float in place; if it drops or rises, the spring tension needs professional adjustment.`,
    schemaAnswer: `Service twice a year: lubricate hinges, rollers, and spring coils with white lithium grease; tighten all hardware bolts; replace cracked weatherstripping; test auto-reverse with a 2x4 on the floor; and test balance by lifting the door halfway manually — it should stay put without help.`,
  },
  {
    question: "How long does a garage door last?",
    answer: `A well-maintained garage door system has different lifespans for each component. The <strong>door panels themselves</strong> typically last 20 to 30 years — steel panels can last even longer with periodic painting to prevent rust. <strong>Torsion springs</strong> are rated for 10,000 cycles (one open + one close = one cycle), which equals roughly 7 to 10 years for a typical household using the door 4 times per day. High-cycle springs rated to 25,000 or 50,000 cycles are available and make sense for busy households. <strong>Openers</strong> last 10 to 15 years on average. <strong>Cables</strong> and <strong>rollers</strong> typically last 7 to 12 years and should be inspected annually. In the Pacific Northwest, springs and cables corrode faster than in dry climates — oil-tempered or galvanized springs significantly extend service life in high-humidity areas.`,
    schemaAnswer: `Door panels last 20–30 years. Torsion springs last 7–10 years (10,000 cycles). Openers last 10–15 years. Cables and rollers last 7–12 years. In humid climates like the Pacific Northwest, oil-tempered or galvanized springs significantly extend lifespan.`,
  },
  {
    question: "How long do garage door openers last?",
    answer: `The average garage door opener lasts 10 to 15 years with normal use. AC-powered chain-drive units from the 1990s often ran 15 to 20 years, but modern DC-powered belt-drive openers — while quieter — have more complex circuit boards that can fail sooner due to power surges. An opener approaching 15 years old that needs a major repair (logic board, motor replacement) is typically more cost-effective to replace than repair, especially since post-2006 models include required auto-reverse and UL 325 safety features that older units lack. Signs an opener is near end of life: slow response to remotes, inconsistent operation, grinding from the motor, or the unit failing to hold the door in the up position.`,
    schemaAnswer: `Garage door openers last 10 to 15 years on average. Units over 15 years needing a major repair are usually better replaced than fixed, particularly since modern openers include UL 325 auto-reverse safety features that older units lack.`,
  },
  {
    question: "Can you replace just one panel on a garage door?",
    answer: `Yes — a single damaged section can be replaced without replacing the full door, provided the same panel is still available from the manufacturer. The ability to match depends on the brand, model, panel style, color, and age of the existing door. Panels for doors older than 10 to 15 years are frequently discontinued, making a perfect match impossible. When an exact match isn't available, a visually close panel can sometimes be used, though a slight color or texture difference will be visible. If more than two sections are damaged, or if the bottom section is severely bent (which typically damages the tracks, cables, and bottom brackets as well), full door replacement is almost always more economical and structurally sound.`,
    schemaAnswer: `Yes, if the manufacturer still makes that panel. Match depends on brand, style, color, and age — panels over 10–15 years old are often discontinued. If more than two sections are damaged, or the bottom section is bent, full door replacement is usually the more cost-effective and structurally sound option.`,
  },
  {
    question: "Does homeowners insurance cover garage door repair?",
    answer: `Homeowners insurance covers garage door damage caused by a <strong>covered peril</strong> — vehicle impact, falling tree, storm damage (hail, high wind), fire, or vandalism. It does <strong>not</strong> cover mechanical failure, broken springs from normal wear, or rust and corrosion. If your vehicle backs into the door, that damage is typically handled by your <strong>auto insurance collision coverage</strong>, not your homeowners policy. Before filing any claim, calculate whether the repair or replacement cost exceeds your deductible — filing a claim for a $400 repair with a $500 deductible gains you nothing, and the claim record can raise your premium at renewal. Always get a written repair estimate before deciding whether to file.`,
    schemaAnswer: `Homeowners insurance covers garage door damage from covered perils — vehicle impact, storm, fire, or vandalism. It does not cover mechanical failure or wear. Car-into-door damage is typically covered by auto insurance collision coverage. Compare repair cost to your deductible before filing.`,
  },
  {
    question: "What causes garage door cables to break?",
    answer: `Garage door lift cables fail for three main reasons. <strong>Age and fraying</strong> is the most common — the cable wraps around a drum thousands of times and individual wire strands break over years of use, weakening the cable until it snaps. <strong>Bottom bracket failure</strong>: when the bottom bracket that anchors the cable detaches or bends, the cable loses tension and goes slack, then wraps incorrectly on the drum, causing it to snap on the next operation. <strong>Spring failure</strong>: when a torsion spring breaks, the full weight of the door suddenly loads the cables — they were never designed to handle the unassisted weight of the door and can snap from the shock load. A fraying or slack cable is visible — if you see fraying strands or one side of the door is lower than the other, stop using the door and have the cable replaced immediately, as a broken cable causes the door to fall.`,
    schemaAnswer: `The three main causes: (1) age and fraying from repeated drum wrapping over thousands of cycles; (2) bottom bracket failure that causes the cable to lose tension and spool incorrectly; (3) torsion spring breakage that shock-loads the cable with the full door weight. A fraying or slack cable means stop using the door immediately.`,
  },
  {
    question: "Why won't my garage door open in cold weather?",
    answer: `Cold weather causes several garage door problems. <strong>Frozen bottom weatherstrip</strong> is the most common — the rubber strip sealing the door to the floor freezes solid to the concrete overnight. Do not force the door open with the opener as this strains the spring and motor; instead, gently break the seal by hand or pour a small amount of warm water at the bottom edge. <strong>Thickened lubricants</strong>: standard lithium grease can congeal below 20°F, stiffening rollers and hinges enough to trigger the opener's obstruction sensors; switch to a low-temperature silicone-based lubricant. <strong>Metal contraction</strong>: steel tracks, springs, and cables contract in extreme cold, which can throw the door slightly out of alignment or cause the cable to become slack. If the door is frozen and you force it, you risk breaking a spring — the weakest point under load in cold conditions.`,
    schemaAnswer: `Most common cause: the bottom weatherstrip freezes to the concrete overnight. Do not force it with the opener — break the seal gently by hand or with warm water. Also check lubricants (thicken below 20°F) and spring tension — cold metal contracts and can cause the door to feel stiff or bind.`,
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
