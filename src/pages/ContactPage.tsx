/**
 * pages/ContactPage.tsx — Zeus Garage Doors
 * Contact page — form powered by the shared <QuoteForm /> component.
 */

import SEOHead from "../components/SEOHead";
import QuoteForm from "../components/QuoteForm";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, CheckCircle, Wrench, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
    value: "Sun–Thur 6:00 AM – 10:00 PM (PT) · Fri 6:00 AM – 6:00 PM (PT) · Sat Closed",
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
      <section className="bg-background pb-16">
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
                  We'll call you back promptly during business hours (Sunday–Friday).
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
      {/* ── SERVICES OVERVIEW ──────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-16 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-2">What We Fix</p>
            <h2 className="font-display text-3xl font-bold text-foreground mb-3">
              Garage Door Repair Services in Kirkland & Seattle
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Zeus Garage Doors handles every type of residential garage door repair near me across King and Snohomish Counties. Whether your spring snapped overnight, a cable frayed, or your opener stopped responding, our certified technicians carry the parts to fix most issues in a single same-day visit.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Broken Spring Replacement", href: "/services/spring-replacement", desc: "Torsion and extension spring repair for all door weights. Most common garage door failure on the Eastside." },
              { title: "Garage Door Opener Repair", href: "/services/opener-repair", desc: "LiftMaster, Genie, and Chamberlain motor repair, gear replacement, sensor alignment, and smart MyQ upgrades." },
              { title: "Cable Replacement", href: "/services/cable-replacement", desc: "Frayed or snapped lift cables are a safety hazard. We replace both cables and inspect the drums in the same visit." },
              { title: "Off-Track Door Repair", href: "/services/off-track-repair", desc: "An off-track door is an emergency. We secure, realign, and test the door before leaving your property." },
              { title: "Panel Replacement", href: "/services/panel-replacement", desc: "Dented or cracked section? We source matching panels for Amarr, Clopay, Wayne Dalton, and more." },
              { title: "New Door Installation", href: "/services/new-installation", desc: "Premium steel, wood, and glass door installations with same-day measurement and scheduling available." },
            ].map(({ title, href, desc }) => (
              <Link key={href} to={href} className="group block bg-white rounded-xl border border-slate-200 hover:border-primary/40 hover:shadow-md transition-all p-5">
                <div className="flex items-start gap-3">
                  <Wrench className="w-5 h-5 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">{title}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-2">The Process</p>
            <h2 className="font-display text-3xl font-bold text-foreground mb-3">
              What Happens After You Contact Us
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              We keep the process simple and transparent. Here is exactly what to expect from the moment you reach out to the time your garage door is fully repaired and tested.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", heading: "You Call or Submit the Form", body: "Call 425-555-0199 or fill out the contact form. Our dispatch team is available Sunday through Friday. We confirm your address and describe the problem over the phone — no commitment yet." },
              { step: "02", heading: "Same-Day Dispatch", body: "We schedule a certified technician for the earliest available same-day window. You'll receive a courtesy call when the technician is 30 minutes out." },
              { step: "03", heading: "On-Site Inspection & Quote", body: "The technician inspects the door, weighs the springs, and checks cables and hardware. You receive a firm, flat-rate price before any work starts — no surprise fees." },
              { step: "04", heading: "Repair & Safety Test", body: "Most repairs are completed in one visit. We test the door through multiple open/close cycles and adjust the opener force settings before leaving your property." },
            ].map(({ step, heading, body }) => (
              <div key={step} className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold text-sm">{step}</span>
                </div>
                <h3 className="font-semibold text-foreground text-base">{heading}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ───────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-14 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-2">Service Coverage</p>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Garage Door Repair Near Me — Our Service Area
            </h2>
            <p className="text-muted-foreground mb-6">
              Zeus Garage Doors is based in Kirkland, WA. We provide same-day garage door repair across King County and South Snohomish County, with technicians dispatched directly from our Kirkland base for fast response times across the entire Eastside.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { name: "Seattle, WA", href: "/locations/seattle-wa" },
                { name: "Kirkland, WA", href: "/locations/kirkland-wa" },
                { name: "Bellevue, WA", href: "/locations/bellevue-wa" },
                { name: "Redmond, WA", href: "/locations/redmond-wa" },
                { name: "Bothell, WA", href: "/locations/bothell-wa" },
                { name: "Woodinville, WA", href: "/locations/woodinville-wa" },
                { name: "Kenmore, WA", href: "/locations/kenmore-wa" },
                { name: "Lynnwood, WA", href: "/locations/lynnwood-wa" },
                { name: "Mercer Island, WA", href: "/locations/mercer-island-wa" },
              ].map(({ name, href }) => (
                <Link key={href} to={href} className="inline-flex items-center gap-1.5 text-sm font-medium text-primary bg-primary/8 hover:bg-primary/15 rounded-full px-3 py-1 transition-colors">
                  <MapPin className="w-3 h-3" />
                  {name}
                </Link>
              ))}
            </div>
            <p className="text-muted-foreground text-sm">
              Not sure if we serve your neighborhood? Call <a href="tel:+14255550199" className="text-primary font-medium hover:underline">425-555-0199</a> — if you're in King or Snohomish County, we almost certainly do.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-2">Questions</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-8">
            Contact & Booking FAQ
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How quickly can you get to me for emergency garage door repair?",
                a: "For same-day emergency garage door repair near me requests received before 12:00 PM (PT) on business days, we aim to dispatch a technician the same afternoon. In Kirkland, Bellevue, Redmond, and most of the Eastside, we typically arrive within 2–4 hours. Seattle and Lynnwood may have slightly longer windows depending on routing. For overnight emergencies Sunday through Thursday, our after-hours emergency line is available at 425-555-0199."
              },
              {
                q: "Do you give free quotes over the phone?",
                a: "We provide honest, transparent flat-rate pricing — but we do not quote over the phone. Garage door springs, cables, and hardware vary significantly by door weight, size, and condition. Quoting without seeing the door often results in misleading estimates. Our technician provides a firm price on-site before any work begins, and there is no obligation if you choose not to proceed."
              },
              {
                q: "What are your service hours?",
                a: "Our regular service hours are Sunday through Thursday, 6:00 AM to 10:00 PM (PT), and Friday 6:00 AM to 6:00 PM (PT). We are closed on Saturdays. Emergency night dispatch is available Sunday through Thursday for urgent after-hours situations."
              },
              {
                q: "Are your technicians licensed and insured?",
                a: "Yes. All Zeus Garage Doors technicians are background-checked, fully licensed for Washington State, and covered by liability insurance. We are a locally owned and operated business based in Kirkland, WA — not a national franchise. Every repair carries a professional service warranty on parts."
              },
            ].map(({ q, a }, i) => (
              <div key={i} className="border-b border-slate-100 pb-6 last:border-0">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{q}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
