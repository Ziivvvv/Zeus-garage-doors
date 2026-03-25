import SEOHead from "@/components/SEOHead";
import QuoteForm from "@/components/QuoteForm";
import { motion } from "framer-motion";

export default function QuotePage() {
  return (
    <>
      <SEOHead
        title="Request a Free Quote | Zeus Garage Doors — Kirkland & Eastside WA"
        description="Get a free garage door repair or installation estimate from Zeus Garage Doors. Same-day service across Kirkland, Bellevue, Redmond, and the Eastside."
        canonical="/quote"
        pageType="contact"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Get a Quote", url: "/quote" },
        ]}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative bg-[hsl(var(--navy))] pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(43_90%_48%/0.12),transparent_65%)]" />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center relative">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[hsl(var(--primary))] text-sm font-semibold tracking-widest uppercase mb-4"
          >
            Free Estimate — No Obligation
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-5xl font-bold text-white leading-[1.08] mb-4"
          >
            Get Your Free Quote Today
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/70 text-lg"
          >
            Fill out the form below and our dispatch team will call you back
            promptly during business hours (Mon–Sat).
          </motion.p>
        </div>
      </section>

      {/* ── FORM CARD ─────────────────────────────────────────────────────── */}
      <section className="bg-background py-16">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-2xl shadow-xl p-8"
          >
            <h2 className="font-display text-xl font-bold text-[hsl(var(--navy))] mb-1">
              Request Your Estimate
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              Name, phone, and zip are all we need to get started.
            </p>
            <QuoteForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}
