import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Tag } from "lucide-react";
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
      </main>
    </>
  );
}
