/**
 * pages/ContactPage.tsx — Zeus Garage Doors
 * Contact page — form powered by the shared <QuoteForm /> component.
 */

import SEOHead from "../components/SEOHead";
import QuoteForm from "../components/QuoteForm";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Phone",
    value: "425-555-0199",
    href: "tel:+14255550199",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "King & Snohomish Counties, WA",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Sun–Thu 6 AM – 10 PM · Fri 6 AM – 6 PM · Sat Closed",
    href: null,
  },
];

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.08, duration: 0.6, ease: EASE_OUT },
  }),
};

export default function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact Zeus Garage Doors | Kirkland & Eastside WA"
        description="Get in touch with Zeus Garage Doors for same-day garage door repair in Kirkland, Bellevue, Redmond, and the Eastside. Call 425-555-0199."
        canonical="/contact"
        pageType="contact"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative bg-background pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_20%,hsl(var(--gold)/0.06),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-semibold tracking-widest uppercase mb-4"
          >
            Contact Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
            className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-[1.05] text-wrap-balance mb-4"
          >
            Let's Get Your Door Fixed
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE_OUT }}
            className="text-muted-foreground text-lg max-w-2xl"
          >
            Call us for immediate service or fill out the form below for a free
            estimate. We respond to all inquiries within one business hour.
          </motion.p>
        </div>
      </section>

      {/* ── MAIN CONTENT ──────────────────────────────────────────────────── */}
      <section className="bg-background pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* ── FORM (3 cols) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="lg:col-span-3"
            >
              <motion.div
                variants={fadeUp}
                custom={0}
                id="estimate"
                className="bg-secondary rounded-2xl border border-border p-8"
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Request a Free Estimate
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  We'll call you back promptly during business hours (Mon–Sat).
                </p>
                <QuoteForm />
              </motion.div>
            </motion.div>

            {/* ── CONTACT INFO (2 cols) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {CONTACT_INFO.map((item, i) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  custom={i}
                  className="flex gap-4 items-start"
                >
                  <div className="w-11 h-11 rounded-lg bg-secondary border border-border flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              <motion.div
                variants={fadeUp}
                custom={3}
                className="bg-[hsl(var(--navy))] rounded-2xl p-6 mt-8"
              >
                <p className="text-[hsl(var(--primary))] text-xs font-semibold uppercase tracking-widest mb-2">
                  Emergency Service
                </p>
                <h3 className="text-white font-display font-bold text-lg mb-3">
                  Need Help Fast? Call Now
                </h3>
                <p className="text-white/70 text-sm mb-5 leading-relaxed">
                  Door stuck open or off-track? We dispatch same-day across King
                  and Snohomish Counties.
                </p>
                <a
                  href="tel:+14255550199"
                  className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-white transition-all active:scale-[0.97]"
                  style={{
                    background: "linear-gradient(135deg, hsl(43 90% 50%), hsl(36 95% 44%))",
                    boxShadow: "0 4px 20px hsl(43 90% 48% / 0.4)",
                  }}
                >
                  <Phone className="w-4 h-4" />
                  425-555-0199
                </a>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
