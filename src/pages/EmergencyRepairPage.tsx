import SEOHead from "@/components/SEOHead";
import QuoteForm from "@/components/QuoteForm";

import type { FAQItem, BreadcrumbItem } from "@/components/SEOHead";
import { motion } from "framer-motion";

const EMERGENCY_FAQS: FAQItem[] = [
  {
    question: "Do you offer emergency garage door repair near me?",
    answer:
      "Yes. Zeus Garage Doors provides emergency garage door repair across Kirkland, Bellevue, Redmond, Seattle, and all Eastside WA communities. Night dispatch is available Sunday through Thursday. Call 425-448-6443 for immediate response.",
  },
  {
    question: "How fast can a technician arrive for emergency service?",
    answer:
      "In most Eastside WA cities we aim to arrive within 60–90 minutes of your call. We keep parts stocked on every truck so most emergency repairs — broken springs, snapped cables, off-track doors — are completed in a single visit.",
  },
  {
    question: "What counts as a garage door emergency?",
    answer:
      "A garage door that won't close leaves your home unsecured — that's always an emergency. Broken torsion springs, snapped lift cables, doors stuck halfway open, and openers that lost power are the most common after-hours calls we handle.",
  },
  {
    question: "Is emergency garage door service available on weekends?",
    answer:
      "Emergency dispatch is available Sunday through Thursday nights. We do not offer after-hours service on Friday or Saturday nights. For Saturday daytime calls, contact us and we'll do our best to accommodate.",
  },
  {
    question: "Do you fix garage doors that won't close after a power outage?",
    answer:
      "Yes. Most modern openers have a manual release cord. If your door is stuck due to a power outage or dead opener, we can release it manually and diagnose the opener issue. LiftMaster and Chamberlain battery backup units are available as upgrades.",
  },
  {
    question: "How much does emergency garage door repair cost?",
    answer:
      "Our technician assesses the situation on-site and provides a flat-rate quote before any work begins. No surprise fees. Every repair includes our 5-year parts and labor warranty.",
  },
];

const BREADCRUMBS: BreadcrumbItem[] = [
  { name: "Home", url: "/" },
  { name: "Emergency Garage Door Repair", url: "/emergency-garage-door-repair" },
];

const SCENARIOS = [
  {
    icon: "🌀",
    title: "Broken Torsion Spring",
    body: "The most common emergency. A snapped spring means your door won't open — or worse, it drops suddenly. We carry all spring sizes on every truck.",
  },
  {
    icon: "🔗",
    title: "Snapped Lift Cable",
    body: "Cables hold the full weight of the door. A broken cable causes the door to hang crooked or slam down. Do not operate the door — call us immediately.",
  },
  {
    icon: "🚪",
    title: "Door Off Track",
    body: "A door that jumped its track can't close — leaving your home exposed. We realign tracks, replace bent rollers, and secure the door in one visit.",
  },
  {
    icon: "🔒",
    title: "Door Won't Close",
    body: "An open garage is a security risk. Whether it's a sensor issue, a broken spring, or a logic board failure, we diagnose and fix it fast.",
  },
  {
    icon: "⚡",
    title: "Opener Failure",
    body: "Dead motor, burnt logic board, or power surge — we carry LiftMaster and Chamberlain parts on every truck for same-night repairs.",
  },
  {
    icon: "💥",
    title: "Impact Damage",
    body: "Car hit the door? Panel crushed? We can secure the door temporarily and schedule a full repair or replacement, all in one call.",
  },
];

export default function EmergencyRepairPage() {
  return (
    <>
      <SEOHead
        title="Emergency Garage Door Repair Kirkland WA | Same-Night Service | Zeus"
        description="Garage door emergency in Kirkland, Bellevue, or the Eastside? Zeus Garage Doors dispatches same-night — broken springs, cables, off-track doors. Available Sun–Thu. Call 425-448-6443."
        canonical="/emergency-garage-door-repair"
        pageType="service"
        serviceName="Emergency Garage Door Repair"
        serviceDescription="Same-night emergency garage door repair across Kirkland, Bellevue, Redmond, and the greater Eastside WA. Broken springs, snapped cables, off-track doors fixed fast. Night dispatch available Sunday through Thursday."
        faqs={EMERGENCY_FAQS}
        breadcrumbs={BREADCRUMBS}
      />

      {/* ── HERO */}
      <section className="relative bg-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)",
            backgroundSize: "12px 12px",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2 bg-red-600/90 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" aria-hidden="true" />
              Night Emergency Dispatch Available
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Emergency Garage Door Repair{" "}
              <span className="text-gold">Kirkland WA</span>
            </h1>

            <p className="text-white/70 text-lg mb-8 max-w-lg">
              Broken spring, snapped cable, or door stuck open? Zeus dispatches a
              technician to your door — same night, parts on the truck, one visit.
            </p>

            {/* Hours callout */}
            <div className="bg-white/10 border border-white/20 rounded-xl p-5 mb-8">
              <p className="text-gold font-semibold text-sm uppercase tracking-wide mb-3">
                Emergency Dispatch Hours
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <span className="text-green-400" aria-hidden="true">✓</span>
                  Sun – Thu: available
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-400" aria-hidden="true">✗</span>
                  Fri – Sat night: unavailable
                </div>
              </div>
              <p className="text-white/50 text-xs mt-3">
                Daytime calls Mon–Sat welcome. After-hours dispatch Sun–Thu only.
              </p>
            </div>

            {/* Trust checklist */}
            <ul className="space-y-3">
              {[
                "60–90 min arrival across the Eastside",
                "All parts stocked on every truck — one visit fix",
                "5-year warranty on all parts & labor",
                "Licensed & insured technicians on every job",
                "Flat-rate quote before any work starts",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-gold/20 border border-gold/50 flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path
                        d="M1 4l2.5 2.5L9 1"
                        stroke="#C9A84C"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Phone CTA */}
            <div className="mt-8">
              <a
                href="tel:+14254486443"
                className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-7 py-4 rounded-xl transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                Call 425-448-6443
              </a>
              <p className="text-white/40 text-xs mt-2">
                Or fill the form — we'll call you back within minutes
              </p>
            </div>
          </motion.div>

          {/* Right — Quote form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-red-600 mb-1">
              Emergency Request
            </p>
            <h2 className="text-2xl font-bold text-navy mb-1 font-display">
              Get a Technician Tonight
            </h2>
            <p className="text-navy/60 text-sm mb-6">
              Fill in your details — dispatch calls you back within minutes.
            </p>
            <QuoteForm />
          </motion.div>
        </div>
      </section>

      {/* ── COMMON EMERGENCIES */}
      <section className="py-16 lg:py-24 bg-offwhite" aria-labelledby="emergencies-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              id="emergencies-heading"
              className="text-3xl lg:text-4xl font-bold text-navy font-display mb-4"
            >
              Common Garage Door Emergencies We Fix
            </h2>
            <p className="text-navy/60 max-w-2xl mx-auto">
              Every truck is stocked with the parts needed for the most common
              after-hours calls — no waiting for a parts order.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SCENARIOS.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-xl border border-navy/10 p-6 hover:shadow-md transition-shadow"
              >
                <span className="text-3xl mb-4 block" aria-hidden="true">
                  {s.icon}
                </span>
                <h3 className="font-bold text-navy text-lg mb-2">{s.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ZEUS FOR EMERGENCIES */}
      <section className="py-16 bg-navy" aria-labelledby="why-zeus-emergency-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="why-zeus-emergency-heading"
            className="text-3xl font-bold text-white font-display text-center mb-12"
          >
            Why Eastside Homeowners Call Zeus First
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "⚡", stat: "60–90 min", label: "Average arrival time" },
              { icon: "🔧", stat: "1 visit", label: "Most repairs done same night" },
              { icon: "🛡️", stat: "5 years", label: "Warranty on parts & labor" },
              { icon: "📍", stat: "Local", label: "Kirkland-based, Eastside-focused" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-3xl mb-2" aria-hidden="true">{item.icon}</div>
                <div className="text-gold font-bold text-2xl">{item.stat}</div>
                <div className="text-white/60 text-sm mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ */}
      <section className="py-16 lg:py-24 bg-offwhite" aria-labelledby="faq-emergency-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="faq-emergency-heading"
            className="text-3xl font-bold text-navy font-display text-center mb-10"
          >
            Emergency Repair — Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {EMERGENCY_FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group bg-white border border-navy/10 rounded-xl px-6 py-4"
              >
                <summary className="font-semibold text-navy cursor-pointer list-none flex justify-between items-center gap-4">
                  {faq.question}
                  <span
                    className="text-gold text-xl flex-shrink-0 transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="text-navy/70 text-sm leading-relaxed mt-3">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA */}
      <section className="py-16 bg-gold text-navy text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-display mb-3">
            Garage Door Emergency? Don't Wait.
          </h2>
          <p className="text-navy/70 mb-8">
            Zeus dispatches same-night Sunday through Thursday. One call, one visit, done.
          </p>
          <a
            href="tel:+14254486443"
            className="inline-flex items-center gap-3 bg-navy text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-navy/90 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            Call 425-448-6443 Now
          </a>
        </div>
      </section>
    </>
  );
}
