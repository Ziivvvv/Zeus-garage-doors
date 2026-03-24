/**
 * BlogPost.tsx — Zeus Garage Doors
 * Blog post template with:
 * - Article JSON-LD schema
 * - Direct answer / featured snippet block
 * - Structured internal linking to service + city pages
 * - Framer Motion scroll animations
 */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead, { FAQItem } from "./SEOHead";
import FAQAccordion from "./FAQAccordion";

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────

export interface RelatedPost {
  title: string;
  href: string;
  excerpt: string;
  datePublished: string;
}

export interface BlogPostProps {
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  ogImage?: string;
  title: string;
  subtitle?: string;
  /** 40-60 word direct answer — featured snippet target */
  directAnswer: string;
  /** HTML content — the full article body */
  content: string;
  readingTimeMinutes?: number;
  tags?: string[];
  faqs?: FAQItem[];
  relatedPosts?: RelatedPost[];
  breadcrumbs: { name: string; url: string }[];
}

// ─────────────────────────────────────────────
// COMPONENTS
// ─────────────────────────────────────────────

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────

export default function BlogPost({
  metaTitle,
  metaDescription,
  canonical,
  datePublished,
  dateModified,
  authorName = "Zeus Garage Doors Team",
  ogImage,
  title,
  subtitle,
  directAnswer,
  content,
  readingTimeMinutes,
  tags,
  faqs,
  relatedPosts,
  breadcrumbs,
}: BlogPostProps) {
  return (
    <>
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        canonical={canonical}
        pageType="blog"
        datePublished={datePublished}
        dateModified={dateModified}
        authorName={authorName}
        ogImage={ogImage}
        ogType="article"
        breadcrumbs={breadcrumbs}
        faqs={faqs}
      />

      <main id="main-content">

        {/* ── HERO */}
        <section className="bg-navy pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/50">
                {breadcrumbs.map((crumb, i) => (
                  <li key={crumb.url} className="flex items-center gap-2">
                    {i > 0 && <span aria-hidden="true">›</span>}
                    {i === breadcrumbs.length - 1 ? (
                      <span className="text-white/90">{crumb.name}</span>
                    ) : (
                      <Link to={crumb.url} className="hover:text-white transition-colors">
                        {crumb.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gold/20 text-gold text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <h1 className="text-3xl lg:text-5xl font-bold text-white font-playfair leading-tight mb-4">
                {title}
              </h1>

              {subtitle && (
                <p className="text-white/70 text-xl leading-relaxed mb-6">
                  {subtitle}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm">
                <time dateTime={datePublished}>
                  {formatDate(datePublished)}
                </time>
                {dateModified && dateModified !== datePublished && (
                  <span>
                    Updated{" "}
                    <time dateTime={dateModified}>
                      {formatDate(dateModified)}
                    </time>
                  </span>
                )}
                <span>By {authorName}</span>
                {readingTimeMinutes && (
                  <span>{readingTimeMinutes} min read</span>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── ARTICLE BODY */}
        <section className="py-12 lg:py-16 bg-offwhite">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10 items-start">

              <article
                className="lg:col-span-2"
                itemScope
                itemType="https://schema.org/Article"
              >
                <meta itemProp="headline" content={title} />
                <meta itemProp="datePublished" content={datePublished} />
                <meta itemProp="author" content={authorName} />

                {/* ⭐ DIRECT ANSWER BLOCK */}
                <FadeIn>
                  <div
                    className="bg-navy rounded-2xl px-6 py-5 mb-8"
                    role="note"
                    aria-label="Key takeaway"
                  >
                    <p className="text-gold text-xs font-bold uppercase tracking-wide mb-2">
                      Key Takeaway
                    </p>
                    <p className="text-white leading-relaxed text-base">
                      {directAnswer}
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.05}>
                  <div
                    itemProp="articleBody"
                    className="
                      prose prose-lg prose-slate max-w-none
                      prose-headings:font-playfair prose-headings:text-navy
                      prose-h2:text-2xl prose-h2:lg:text-3xl prose-h2:mt-10 prose-h2:mb-4
                      prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                      prose-p:text-charcoal prose-p:leading-relaxed prose-p:text-[17px]
                      prose-a:text-forest prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                      prose-strong:text-navy
                      prose-ul:text-charcoal prose-li:leading-relaxed
                      prose-blockquote:border-gold prose-blockquote:bg-offwhite prose-blockquote:not-italic
                    "
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                </FadeIn>

                {tags && tags.length > 0 && (
                  <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap gap-2">
                    <span className="text-slate-500 text-sm font-medium mr-1">
                      Filed under:
                    </span>
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>

              {/* Sidebar */}
              <aside className="space-y-6 lg:sticky lg:top-24">

                <div className="bg-white rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-navy font-bold text-base mb-3">
                    About the Author
                  </h3>
                  <div className="flex items-start gap-3">
                    <div
                      className="w-12 h-12 rounded-full bg-navy flex items-center justify-center shrink-0"
                      aria-hidden="true"
                    >
                      <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                        <polygon points="18,2 10,17 15,17 13,30 22,14 17,14" fill="#C9A84C" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-navy text-sm">{authorName}</p>
                      <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">
                        Local garage door technician and owner of Zeus Garage Doors, serving the Kirkland and Eastside WA area.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-forest rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg font-playfair mb-2">
                    Need Garage Door Repair?
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    Same-day service in Kirkland, Bellevue, Redmond, and the Eastside.
                  </p>
                  <a
                    href="tel:+14255550199"
                    className="block w-full text-center bg-white text-forest font-bold py-3 rounded-xl text-sm hover:bg-offwhite transition-colors mb-3"
                  >
                    📞 Call Now: 425-555-0199
                  </a>
                  <Link
                    to="/contact#estimate"
                    className="block w-full text-center border border-white/40 text-white font-semibold py-3 rounded-xl text-sm hover:bg-white/10 transition-colors"
                  >
                    Get Free Estimate
                  </Link>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-navy font-bold text-sm uppercase tracking-wide mb-4">
                    Our Services
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {[
                      { name: "Spring Replacement", href: "/services/spring-replacement" },
                      { name: "Opener Repair & Install", href: "/services/opener-repair" },
                      { name: "Off-Track Repair", href: "/services/off-track-repair" },
                      { name: "Cable Replacement", href: "/services/cable-replacement" },
                      { name: "Panel Replacement", href: "/services/panel-replacement" },
                      { name: "New Installation", href: "/services/new-installation" },
                    ].map((s) => (
                      <li key={s.href}>
                        <Link
                          to={s.href}
                          className="text-forest hover:text-navy transition-colors font-medium"
                        >
                          → {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ── FAQs */}
        {faqs && faqs.length > 0 && (
          <FAQAccordion
            items={faqs}
            title="Frequently Asked Questions"
            injectSchema={false}
          />
        )}

        {/* ── RELATED POSTS */}
        {relatedPosts && relatedPosts.length > 0 && (
          <section className="py-16 bg-offwhite" aria-labelledby="related-posts-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2
                id="related-posts-heading"
                className="text-2xl lg:text-3xl font-bold text-navy font-playfair mb-8"
              >
                Related Articles
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((post, i) => (
                  <FadeIn key={post.href} delay={i * 0.07}>
                    <Link
                      to={post.href}
                      className="group block bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-all"
                    >
                      <time
                        dateTime={post.datePublished}
                        className="text-slate-400 text-xs"
                      >
                        {formatDate(post.datePublished)}
                      </time>
                      <h3 className="text-navy font-bold text-lg font-playfair mt-2 mb-3 group-hover:text-forest transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
    </>
  );
}
