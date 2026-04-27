import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Tag, Wrench, Zap, BookOpen } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const posts = [
  {
    slug: "best-garage-door-opener-pnw",
    title: "LiftMaster vs. Genie: Best Opener for PNW Weather",
    excerpt: "A comparison of the top opener brands and which one handles Washington humidity the best.",
    category: "Equipment Guides",
    date: "2026-03-25",
  },
  {
    slug: "spring-replacement-cost-factors",
    title: "Factors That Affect Garage Door Spring Replacement Costs",
    excerpt: "Understanding what goes into a spring repair quote without the hidden surprises.",
    category: "Pricing & Guides",
    date: "2026-03-24",
  },
  {
    slug: "garage-door-opens-by-itself",
    title: "Why Is My Garage Door Opening by Itself?",
    excerpt: "Learn the top reasons why your garage door might be opening on its own and how to fix it fast.",
    category: "Troubleshooting",
    date: "2026-03-23",
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndex() {
  return (
    <>
      <SEOHead
        title="Blog & Resource Center | Zeus Garage Doors"
        description="Expert guides on garage door repair, opener comparisons, and maintenance tips for Pacific Northwest homeowners."
        canonical="/blog"
        pageType="blog"
      />

      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 bg-navy">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">Blog</p>
              <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white" style={{ lineHeight: 1.1 }}>
                Resources & Guides
              </h1>
              <p className="text-white/60 mt-4 max-w-lg text-base">
                Expert advice on garage door repair, maintenance, and smart upgrades for PNW homeowners.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-14 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                { icon: Wrench, title: "Repair Guides", body: "Step-by-step explanations of how garage door springs, cables, rollers, and openers fail — and what a professional repair involves. Understand your options before you call." },
                { icon: Zap, title: "Opener Comparisons", body: "LiftMaster vs. Genie, belt-drive vs. chain-drive, battery backup vs. standard — we break down the specs that matter for Pacific Northwest homeowners." },
                { icon: BookOpen, title: "Pricing Transparency", body: "No hidden fee games. Our guides explain exactly what drives repair costs in Washington state so you can recognize a fair quote from an inflated one." },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-forest" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">{title}</h3>
                    <p className="text-charcoal/70 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-16 bg-offwhite">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {posts.map((p, i) => (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={`/blog/${p.slug}`}
                    className="group block rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-forest/40 hover:shadow-lg transition-all h-full"
                  >
                    {/* Category color bar */}
                    <div className="h-1.5 bg-gradient-to-r from-forest to-emerald" />

                    <div className="p-6 flex flex-col h-full">
                      {/* Category badge */}
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-forest bg-forest/8 rounded-full px-3 py-1 w-fit mb-4">
                        <Tag size={11} />
                        {p.category}
                      </span>

                      <h2 className="font-playfair text-lg font-bold text-navy mb-2 group-hover:text-forest transition-colors leading-snug">
                        {p.title}
                      </h2>

                      <p className="text-charcoal/65 text-sm leading-relaxed mb-5 flex-1">
                        {p.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <span className="inline-flex items-center gap-1.5 text-xs text-charcoal/50">
                          <Calendar size={12} />
                          {formatDate(p.date)}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-forest group-hover:translate-x-1 transition-transform">
                          Read <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* About Zeus + Common Problems */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-14">
              <div>
                <p className="text-forest font-semibold text-xs uppercase tracking-widest mb-2">About Zeus Garage Doors</p>
                <h2 className="font-playfair text-3xl font-bold text-navy mb-4">
                  Seattle & Eastside's Trusted Garage Door Repair Resource
                </h2>
                <p className="text-charcoal/70 mb-4 leading-relaxed">
                  Zeus Garage Doors is a locally owned and operated garage door repair company based in Kirkland, WA. We serve Seattle, Bellevue, Redmond, Bothell, Woodinville, Kenmore, Lynnwood, Mercer Island, and the entire Eastside of Washington state. Our technicians are background-checked, licensed, and insured — and every repair carries a professional service warranty on parts.
                </p>
                <p className="text-charcoal/70 mb-4 leading-relaxed">
                  This blog exists because we believe an informed homeowner makes better decisions. Garage door repair is not complicated when you understand the basics: how springs counterbalance door weight, why cable failure is a safety emergency, and what separates a belt-drive opener from a chain-drive unit in the Pacific Northwest's damp climate.
                </p>
                <p className="text-charcoal/70 mb-6 leading-relaxed">
                  Our guides are written by the technicians who perform these repairs every day across King and Snohomish Counties. When we describe a broken spring scenario, we're drawing from hundreds of real service calls — not marketing copy.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:underline">
                  Contact Zeus Garage Doors <ArrowRight size={14} />
                </Link>
              </div>

              <div>
                <p className="text-forest font-semibold text-xs uppercase tracking-widest mb-2">Quick Help</p>
                <h2 className="font-playfair text-2xl font-bold text-navy mb-4">
                  Common Garage Door Problems — Fast Answers
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "My garage door won't open — what's wrong?",
                      a: "The most common cause is a broken torsion spring. If the door feels extremely heavy when lifted manually, stop immediately — the spring is likely snapped. Other causes include a tripped opener circuit breaker or disconnected trolley. Call a technician before forcing the door.",
                      link: "/services/spring-replacement",
                    },
                    {
                      q: "Why is my garage door so noisy?",
                      a: "Grinding or squeaking usually points to worn rollers, dry hinges, or a chain-drive opener that needs tensioning. Most noise issues can be fixed with lubrication and a roller replacement. A belt-drive opener upgrade eliminates virtually all operational sound.",
                      link: "/services/opener-repair",
                    },
                    {
                      q: "My garage door reverses before closing — why?",
                      a: "Safety sensors at the base of the door track are either misaligned or have an obstruction in front of them. The solid LED should be green on both sensors when aligned. A dirty lens or a spider web can trigger a false obstruction signal.",
                      link: "/services/opener-repair",
                    },
                    {
                      q: "One side of my garage door is higher than the other — is that dangerous?",
                      a: "Yes. An uneven garage door almost always means a broken cable or a broken spring on one side. Do not operate the door. The weight imbalance can cause the door to fall, damage the opener, or injure someone. Call for emergency off-track or cable repair.",
                      link: "/services/off-track-repair",
                    },
                  ].map(({ q, a, link }) => (
                    <div key={q} className="border-b border-slate-100 pb-4 last:border-0">
                      <h3 className="font-semibold text-navy text-sm mb-1">{q}</h3>
                      <p className="text-charcoal/65 text-sm leading-relaxed mb-2">{a}</p>
                      <Link to={link} className="text-xs font-semibold text-forest hover:underline inline-flex items-center gap-1">
                        Learn more <ArrowRight size={11} />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
