import SEOHead from "@/components/SEOHead";
import QuoteForm from "@/components/QuoteForm";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, Wrench, MapPin, Clock, DollarSign, CheckCircle } from "lucide-react";

export default function QuotePage() {
  return (
    <>
      <SEOHead
        title="Get a Free Garage Door Repair Quote | Zeus WA"
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
            promptly during business hours (Sunday–Friday).
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

      {/* ── WHY GET A QUOTE ───────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-16 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-amber-600 text-xs font-semibold uppercase tracking-widest mb-2">Transparent Pricing</p>
              <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">
                Why We Quote On-Site — Not Over the Phone
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Garage door repair pricing is not one-size-fits-all. The cost of a garage door spring replacement depends on the exact weight of your door, the spring type (torsion vs. extension), and whether the lift cables and bearing plates need attention at the same time. A phone quote for "a spring replacement" can easily be $80 off in either direction once a technician actually sees your system.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                At Zeus Garage Doors, our technician inspects the full system on-site, weighs the door if necessary, and presents you with a flat-rate price before any work begins. You are never committed. If you decide not to proceed, there is no pressure and no charge for the diagnostic visit.
              </p>
              <p className="text-slate-600 leading-relaxed">
                This approach protects you from the bait-and-switch pricing that is unfortunately common in the garage door industry. We believe you deserve to know the full cost before we pick up a single tool.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: ShieldCheck, heading: "Flat-Rate Pricing Confirmed On-Site", body: "Your technician presents the full repair price before any work begins. No surprise fees, no upsells added at the last minute." },
                { icon: DollarSign, heading: "No Obligation If You Decline", body: "If the price doesn't work for you, there is no charge. We'd rather earn your trust than pressure you into a sale." },
                { icon: Wrench, heading: "Parts-on-Truck Guarantee", body: "We stock torsion and extension springs, cables, rollers, and common opener parts on every truck so most repairs are completed the same day." },
                { icon: Clock, heading: "Same-Day Availability", body: "Garage door repair near me requests received before noon on business days are typically scheduled for the same afternoon across the Eastside." },
              ].map(({ icon: Icon, heading, body }) => (
                <div key={heading} className="flex gap-4 bg-white rounded-xl border border-slate-200 p-5">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-amber-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">{heading}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES WE QUOTE ─────────────────────────────────────────────── */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-amber-600 text-xs font-semibold uppercase tracking-widest mb-2">Services</p>
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-3">
              Garage Door Services We Quote — Seattle to the Eastside
            </h2>
            <p className="text-slate-500 max-w-2xl">
              Zeus Garage Doors provides free, no-obligation estimates for all residential garage door repair and installation services. Submit the form above and we'll call you back to schedule a same-day assessment.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Spring Replacement", href: "/services/spring-replacement", desc: "Broken torsion or extension spring? We quote on-site after weighing your door and inspecting the full system." },
              { title: "Opener Repair & Install", href: "/services/opener-repair", desc: "LiftMaster, Genie, and Chamberlain motor repair, logic board replacement, or a full new smart-home opener installation." },
              { title: "Cable Replacement", href: "/services/cable-replacement", desc: "Frayed or snapped lift cables need immediate replacement before the door becomes unsafe to operate." },
              { title: "Off-Track Emergency Repair", href: "/services/off-track-repair", desc: "An off-track door is a safety emergency. We prioritize these calls for same-day dispatch across all service areas." },
              { title: "Panel Replacement", href: "/services/panel-replacement", desc: "We source matching replacement panels for all major brands including Amarr, Clopay, and Wayne Dalton." },
              { title: "New Door Installation", href: "/services/new-installation", desc: "A full new door install includes free design consultation, old door removal, track installation, and opener integration." },
            ].map(({ title, href, desc }) => (
              <Link key={href} to={href} className="group block bg-slate-50 hover:bg-white rounded-xl border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all p-5">
                <p className="font-semibold text-slate-900 group-hover:text-amber-700 transition-colors mb-2">{title}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">{desc}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ──────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-14 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber-600 text-xs font-semibold uppercase tracking-widest mb-2">Coverage</p>
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
              Free Quotes Across King & Snohomish Counties
            </h2>
            <p className="text-slate-600 mb-5">
              We provide free, same-day garage door repair quotes across the entire Seattle metro and Eastside. Our Kirkland-based technicians dispatch to Seattle, Bellevue, Redmond, Bothell, Woodinville, Kenmore, Lynnwood, and Mercer Island. If you are searching for garage door repair near me in King or Snohomish County, we almost certainly serve your neighborhood.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "Seattle", href: "/locations/seattle-wa" },
                { name: "Kirkland", href: "/locations/kirkland-wa" },
                { name: "Bellevue", href: "/locations/bellevue-wa" },
                { name: "Redmond", href: "/locations/redmond-wa" },
                { name: "Bothell", href: "/locations/bothell-wa" },
                { name: "Woodinville", href: "/locations/woodinville-wa" },
                { name: "Kenmore", href: "/locations/kenmore-wa" },
                { name: "Lynnwood", href: "/locations/lynnwood-wa" },
                { name: "Mercer Island", href: "/locations/mercer-island-wa" },
              ].map(({ name, href }) => (
                <Link key={href} to={href} className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-700 bg-amber-50 hover:bg-amber-100 rounded-full px-3 py-1 transition-colors border border-amber-100">
                  <MapPin className="w-3 h-3" />
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE FAQ ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-600 text-xs font-semibold uppercase tracking-widest mb-2">Questions</p>
          <h2 className="font-display text-3xl font-bold text-slate-900 mb-8">Quote & Pricing FAQ</h2>
          <div className="space-y-6">
            {[
              { q: "How long does it take to get a quote?", a: "After you submit the form, our dispatch team will call you back during business hours — typically within one hour. We'll ask a few quick questions about the issue and schedule your on-site assessment at the earliest available time, often the same day." },
              { q: "Is the on-site assessment free?", a: "Yes. Zeus Garage Doors provides free on-site inspections and written flat-rate quotes. There is absolutely no charge if you choose not to proceed with the repair after receiving your quote." },
              { q: "Do you offer discounts?", a: "Yes. We offer 10% off for first-time customers (mention at time of booking) and 12.5% off for veterans and seniors. Discounts apply to the labor portion of the repair and cannot be combined." },
              { q: "What payment methods do you accept?", a: "We accept all major credit and debit cards, cash, and check. Payment is collected at the time of service after the repair is complete and you're satisfied with the work." },
            ].map(({ q, a }, i) => (
              <div key={i} className="border-b border-slate-100 pb-6 last:border-0">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{q}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{a}</p>
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
