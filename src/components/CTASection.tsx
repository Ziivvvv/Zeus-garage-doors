import { motion } from "framer-motion";
import QuoteForm from "./QuoteForm";

export default function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-blue-900 font-semibold text-sm uppercase tracking-widest mb-3">Get Started</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-6" style={{ textWrap: "balance" }}>
              Request Your Free Estimate Today
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Whether it's a broken spring at midnight or a new door installation, our certified technicians respond fast. Most repairs completed same-day with upfront pricing—no surprises.
            </p>
            <ul className="space-y-3 text-sm text-slate-600">
              {[
                "24/7 emergency dispatch — urgent repairs, any hour",
                "26-point safety inspection on every visit",
                "Professional service warranty on spring replacements",
                "Licensed, bonded & insured in Washington state",
                "Honest upfront pricing — confirmed on-site",
                "🎁 10% off for first-time customers",
                "🎖️ 12.5% off for veterans & seniors",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-900 flex-shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-card"
          >
            <QuoteForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
