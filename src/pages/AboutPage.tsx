/**
 * pages/AboutPage.tsx — Zeus Garage Doors
 * About Us page with company story, values, and trust signals
 */

import SEOHead from "../components/SEOHead";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Clock, Wrench, Users, MapPin, Phone } from "lucide-react";

const VALUES = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description:
      "We're a fully licensed, bonded, and insured Washington State contractor. Your home and property are protected on every job.",
  },
  {
    icon: Clock,
    title: "Same-Day Response",
    description:
      "A broken garage door can't wait. We stock our trucks with the most common parts so we can fix your door in a single visit.",
  },
  {
    icon: Wrench,
    title: "Expert Craftsmanship",
    description:
      "Every technician has hands-on experience with torsion springs, LiftMaster openers, and custom wood carriage doors.",
  },
  {
    icon: Users,
    title: "Locally Owned",
    description:
      "We live and work on the Eastside. You'll talk directly to the owner — never a national call center or franchise dispatcher.",
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

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About Zeus Garage Doors | Eastside WA Experts"
        description="Learn about Zeus Garage Doors — a locally owned garage door repair company serving Seattle, Kirkland, Bellevue, Redmond, and the greater Eastside. Licensed, bonded & insured."
        canonical="/about"
        pageType="about"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" },
        ]}
      />

      {/* ── HERO */}
      <section className="relative bg-background pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,hsl(var(--gold)/0.06),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-semibold tracking-widest uppercase mb-4"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] text-wrap-balance mb-6"
          >
            Your Eastside Garage Door Experts
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE_OUT }}
            className="text-muted-foreground text-lg max-w-2xl leading-relaxed"
          >
            Zeus Garage Doors was founded with a simple belief: homeowners on the
            Eastside deserve honest, expert garage door repair without the
            runaround. No corporate call centers, no bait-and-switch pricing —
            just a local technician who shows up on time, diagnoses the real
            problem, and fixes it right the first time.
          </motion.p>
        </div>
      </section>

      {/* ── STORY */}
      <section className="bg-secondary py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="font-display text-3xl font-bold text-foreground mb-6"
          >
            Why We Started Zeus
          </motion.h2>
          <motion.div variants={fadeUp} custom={1} className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              After years of watching national franchises overcharge Eastside
               homeowners for basic repairs — quoting full door replacements when
               a simple spring swap was all that was needed — we decided to build
              something better. A company that treats every customer the way
              we'd want to be treated: with transparency, fair pricing, and
              genuine expertise.
            </p>
            <p>
              We specialize exclusively in garage doors. That singular focus
              means we carry a deeper parts inventory, understand the nuances of
              Pacific Northwest weather on your hardware, and can diagnose
              problems faster than a general handyman ever could. From the heavy
              custom wood doors on Mercer Island to the standard steel setups in
              Lynnwood townhomes, we've seen — and fixed — it all.
            </p>
            <p>
              Today, Zeus Garage Doors serves homeowners across King and
              Snohomish Counties — from Seattle and Kirkland to Bellevue, Bothell,
              and Woodinville. Every repair comes with honest pricing, quality parts,
              and a warranty you can count on.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ── VALUES */}
      <section className="bg-background py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={0}
            className="font-display text-3xl font-bold text-foreground text-center mb-14"
          >
            What Sets Us Apart
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 gap-8"
          >
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                custom={i}
                className="bg-secondary rounded-xl p-8 border border-border"
              >
                <v.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="text-foreground font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE AREA */}
      <section className="bg-secondary py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div variants={fadeUp} custom={0}>
            <MapPin className="w-8 h-8 text-primary mx-auto mb-4" strokeWidth={1.5} />
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Proudly Serving the Eastside
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Our technicians are based on the Eastside and know these
              communities inside and out. We provide same-day garage door repair
              across King and Snohomish Counties.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} custom={1} className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Kirkland", href: "/locations/kirkland-wa" },
              { name: "Bellevue", href: "/locations/bellevue-wa" },
              { name: "Redmond", href: "/locations/redmond-wa" },
              { name: "Mercer Island", href: "/locations/mercer-island-wa" },
              { name: "Lynnwood", href: "/locations/lynnwood-wa" },
              { name: "Bothell", href: "/locations/bothell-wa" },
              { name: "Woodinville", href: "/locations/woodinville-wa" },
              { name: "Kenmore", href: "/locations/kenmore-wa" },
              { name: "Seattle", href: "/locations/seattle-wa" },
            ].map((city) => (
              <Link
                key={city.href}
                to={city.href}
                className="px-5 py-2.5 rounded-lg bg-background border border-border text-foreground text-sm font-medium hover:border-primary hover:text-primary transition-colors active:scale-[0.97]"
              >
                {city.name}
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── CTA */}
      <section className="bg-primary py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="font-display text-3xl font-bold text-primary-foreground mb-4"
          >
            Ready to Fix Your Garage Door?
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Call us or request a free estimate. No pressure, no upselling — just
            an honest assessment from a local expert.
          </motion.p>
          <motion.div variants={fadeUp} custom={2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14255550199"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              <Phone className="w-4 h-4" />
              425-555-0199
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-transparent border-2 border-primary-foreground text-primary-foreground font-semibold px-8 py-3.5 rounded-lg hover:bg-primary-foreground/10 transition-colors active:scale-[0.97]"
            >
              Request an Estimate
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
