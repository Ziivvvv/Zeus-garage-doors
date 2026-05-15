import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const POINTS = [
  { icon: "🛡️", title: "5-Year Parts & Labor Warranty", body: "Every repair is covered. If the same part fails within 5 years, we fix it — no charge." },
  { icon: "💯", title: "Flat-Rate Price Before We Start", body: "You approve the price before we touch anything. What we quote is what you pay." },
  { icon: "🔁", title: "We Come Back If You're Not Happy", body: "Not satisfied with the result? We return and make it right. No arguments, no hassle." },
  { icon: "🚫", title: "No Diagnostic Fees", body: "Our technician assesses your door and quotes the repair at no charge. You only pay if we fix it." },
];

export default function GuaranteeSection() {
  return (
    <section className="bg-navy py-16 lg:py-20" aria-labelledby="guarantee-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">Our Promise</p>
          <h2 id="guarantee-heading" className="text-3xl lg:text-4xl font-bold text-white font-playfair">
            The Zeus Guarantee
          </h2>
          <p className="text-white/60 mt-3 max-w-lg mx-auto">
            Every job. Every time. No fine print.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {POINTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <span className="text-3xl mb-3 block" aria-hidden="true">{p.icon}</span>
              <h3 className="text-white font-bold text-base font-playfair mb-2">{p.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="text-center"
        >
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 bg-gold text-white font-bold px-8 py-3.5 rounded-xl hover:bg-gold/90 transition-colors shadow-md"
          >
            Get a Free Quote — No Obligation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
