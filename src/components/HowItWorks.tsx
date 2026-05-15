import { motion } from "framer-motion";

const STEPS = [
  {
    number: "1",
    icon: "📞",
    title: "Call or Request Online",
    body: "Call 425-448-6443 or fill out the quote form. Our dispatch team calls you back within the hour to schedule.",
  },
  {
    number: "2",
    icon: "🚚",
    title: "Technician Comes to You",
    body: "We arrive same day in most cases. Our tech inspects the full system and gives you a flat-rate price — no surprises.",
  },
  {
    number: "3",
    icon: "✅",
    title: "Fixed — Backed by Warranty",
    body: "Most repairs are done in one visit. Every job is covered by our 5-year parts & labor warranty.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-offwhite py-16 lg:py-20" aria-labelledby="how-it-works-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">Simple Process</p>
          <h2 id="how-it-works-heading" className="text-3xl lg:text-4xl font-bold text-navy font-playfair">
            How It Works
          </h2>
          <p className="text-charcoal/60 mt-3 max-w-md mx-auto">
            From first call to finished repair — here's what to expect.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-12 left-[calc(16.666%+1rem)] right-[calc(16.666%+1rem)] h-0.5 bg-gradient-to-r from-gold/30 via-gold to-gold/30" aria-hidden="true" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative bg-white rounded-2xl p-7 shadow-sm border border-slate-100 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center mx-auto mb-5 relative z-10">
                <span className="text-2xl" aria-hidden="true">{step.icon}</span>
              </div>
              <span className="absolute top-5 right-5 text-xs font-bold text-slate-300">0{step.number}</span>
              <h3 className="text-navy font-bold text-lg font-playfair mb-2">{step.title}</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="tel:+14254486443"
            className="inline-flex items-center gap-2 bg-gold text-white font-bold px-8 py-3.5 rounded-xl hover:bg-gold/90 transition-colors shadow-md"
          >
            📞 Call Now — Same-Day Available
          </a>
        </motion.div>
      </div>
    </section>
  );
}
