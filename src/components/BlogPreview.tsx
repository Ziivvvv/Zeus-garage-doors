import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import blog1 from "@/assets/blog-1.webp";
import blog2 from "@/assets/blog-2.webp";
import blog3 from "@/assets/blog-3.webp";

const posts = [
  {
    slug: "garage-door-opens-by-itself",
    title: "Why Is My Garage Door Opening by Itself?",
    excerpt: "Learn the top reasons why your garage door might be opening on its own and how to fix it fast.",
    image: blog1,
    date: "Mar 23, 2026",
  },
  {
    slug: "spring-replacement-cost-factors",
    title: "Factors That Affect Spring Replacement Costs",
    excerpt: "Understanding what goes into a spring repair quote without the hidden surprises.",
    image: blog2,
    date: "Mar 24, 2026",
  },
  {
    slug: "best-garage-door-opener-pnw",
    title: "LiftMaster vs. Genie: Best Opener for PNW",
    excerpt: "A comparison of the top opener brands and which one handles Washington humidity the best.",
    image: blog3,
    date: "Mar 25, 2026",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function BlogPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Resources</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Recent Articles</h2>
          </div>
          <Link to="/blog" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            View All <ArrowRight size={16} />
          </Link>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {posts.map((p) => (
            <motion.div key={p.slug} variants={item}>
              <Link to={`/blog/${p.slug}`} className="group block rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-300">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <p className="text-xs text-muted-foreground mb-2">{p.date}</p>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{p.excerpt}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-primary">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
