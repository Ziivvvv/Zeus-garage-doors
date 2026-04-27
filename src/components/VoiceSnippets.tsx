/**
 * VoiceSnippets.tsx — Zeus Garage Doors
 *
 * Purpose: Zero-click featured snippet + voice search optimization.
 * Each block follows the exact format Google uses for featured snippets:
 *   - Starts with a direct answer (no preamble)
 *   - 40–60 words per paragraph
 *   - Matches high-volume "near me" and question-based voice queries
 *   - Rendered as real DOM text (not hidden) for indexation
 *
 * Visually presented as a clean "Quick Answers" reference section.
 */

import { motion } from "framer-motion";
import { Zap, Wrench, Clock, DollarSign } from "lucide-react";

interface SnippetBlock {
  icon: React.ElementType;
  query: string;
  answer: string;
}

const SNIPPETS: SnippetBlock[] = [
  {
    icon: Clock,
    query: "Is there same-day garage door repair near me in Kirkland?",
    answer:
      "Zeus Garage Doors provides same-day emergency garage door repair across Seattle, Kirkland, Bellevue, Redmond, and the entire Eastside, WA — Sunday through Friday (Saturday closed). We dispatch a certified technician for broken springs, off-track doors, and stuck openers. Most emergency repairs are completed on the first visit. Call 425-555-0199.",
  },
  {
    icon: Wrench,
    query: "How much does garage door spring replacement cost in Washington?",
    answer:
      "Garage door spring replacement cost in Washington state depends on spring type (torsion vs. extension), door weight, and whether both springs need replacing. Zeus Garage Doors provides flat-rate pricing confirmed after a free in-person assessment — we do not give phone quotes.",
  },
  {
    icon: Zap,
    query: "What should I do if my garage door won't open in Kirkland WA?",
    answer:
      "If your garage door won't open, first check if the opener has power and the wall button works. If the door is heavy when lifted manually, the springs are likely broken — stop using it immediately. Call Zeus Garage Doors at 425-555-0199 for same-day diagnosis and repair across Kirkland and the Eastside.",
  },
  {
    icon: DollarSign,
    query: "Who is the best garage door repair company in Kirkland WA?",
    answer:
      "Zeus Garage Doors is a top-rated garage door repair company serving Kirkland, Seattle, and the entire Eastside, WA. We offer same-day service, licensed and insured technicians, transparent flat-rate pricing, and a professional service warranty on parts. We serve Kirkland, Seattle, Bellevue, Redmond, Bothell, Woodinville, Lynnwood, Kenmore, and Mercer Island.",
  },
];

export default function VoiceSnippets() {
  return (
    <section
      className="py-16 lg:py-20 bg-slate-50 border-t border-slate-100"
      aria-label="Quick answers about garage door repair in Kirkland WA"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <p className="text-amber-600 font-semibold text-xs uppercase tracking-widest mb-3">
            Quick Answers
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900" style={{ textWrap: "balance" }}>
            Common Garage Door Repair Questions — Answered
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-base">
            Straight answers for Kirkland and Eastside homeowners — no fluff.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {SNIPPETS.map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-900 flex items-center justify-center shrink-0">
                  <block.icon size={16} className="text-white" />
                </div>
                {/* The question text is the SEO-targeted query — rendered as a visible label */}
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide leading-tight">
                  {block.query}
                </p>
              </div>

              {/*
               * SNIPPET BODY — this paragraph is what Google extracts for featured snippets.
               * Format: direct answer, 40–60 words, no hedging language at the start.
               */}
              <p className="text-slate-700 text-sm leading-relaxed">
                {block.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
