/**
 * BlogPost.tsx — Zeus Garage Doors
 * Blog post template with:
 * - Article JSON-LD schema
 * - Direct answer / featured snippet block
 * - Structured internal linking to service + city pages
 * - Framer Motion scroll animations
 */

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Calendar, User, ArrowRight, Phone, Play, Pause, Square } from "lucide-react";
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
  additionalSchemas?: object[];
}

// ─────────────────────────────────────────────
// TTS PLAYER
// ─────────────────────────────────────────────

function ArticlePlayer({ content, directAnswer, title }: { content: string; directAnswer: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    setSupported(typeof window !== "undefined" && "speechSynthesis" in window);
    return () => { window.speechSynthesis?.cancel(); };
  }, []);

  const getPlainText = () => {
    const div = document.createElement("div");
    div.innerHTML = content;
    const body = div.textContent ?? div.innerText ?? "";
    return `${title}. ${directAnswer}. ${body}`;
  };

  const getBestVoice = (): SpeechSynthesisVoice | null => {
    const voices = window.speechSynthesis.getVoices();
    const priority = [
      "Google US English",
      "Google UK English Female",
      "Samantha",          // macOS/iOS
      "Karen",             // macOS Australian
      "Daniel",            // macOS UK
      "Microsoft Aria",    // Windows
      "Microsoft Zira",    // Windows
    ];
    for (const name of priority) {
      const match = voices.find(v => v.name === name && v.lang.startsWith("en"));
      if (match) return match;
    }
    return voices.find(v => v.lang.startsWith("en-US")) ??
           voices.find(v => v.lang.startsWith("en")) ??
           null;
  };

  const handlePlay = () => {
    if (paused) {
      window.speechSynthesis.resume();
      setPlaying(true);
      setPaused(false);
      return;
    }
    if (playing) {
      window.speechSynthesis.pause();
      setPlaying(false);
      setPaused(true);
      return;
    }
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(getPlainText());
    utt.rate = 0.92;
    utt.pitch = 1;
    const voice = getBestVoice();
    if (voice) utt.voice = voice;
    utt.onend = () => { setPlaying(false); setPaused(false); };
    utt.onerror = () => { setPlaying(false); setPaused(false); };
    window.speechSynthesis.speak(utt);
    setPlaying(true);
    setPaused(false);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setPlaying(false);
    setPaused(false);
  };

  if (!supported) return null;

  return (
    <div className="flex items-center gap-3 bg-navy/[0.04] border border-navy/10 rounded-xl px-4 py-3 mb-6">
      <button
        onClick={handlePlay}
        className="flex items-center gap-2 bg-navy hover:bg-navy/85 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shrink-0"
        aria-label={playing ? "Pause" : paused ? "Resume" : "Listen to article"}
      >
        {playing ? <Pause size={14} aria-hidden="true" /> : <Play size={14} aria-hidden="true" />}
        {playing ? "Pause" : paused ? "Resume" : "Listen"}
      </button>
      {(playing || paused) && (
        <button
          onClick={handleStop}
          className="text-slate-400 hover:text-slate-600 transition-colors p-1"
          aria-label="Stop reading"
        >
          <Square size={13} aria-hidden="true" />
        </button>
      )}
      <span className="text-slate-500 text-xs leading-snug">
        {playing ? "Reading aloud…" : paused ? "Paused" : "Listen to this article"}
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────
// READING PROGRESS BAR
// ─────────────────────────────────────────────

function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-gold to-amber-400 transition-[width] duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// ─────────────────────────────────────────────
// HELPERS
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
  additionalSchemas,
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
        additionalSchemas={additionalSchemas}
      />

      <ReadingProgress />

      <main id="main-content">

        {/* ── HERO */}
        <section
          className="relative bg-navy pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden"
        >
          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            aria-hidden="true"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
          {/* Gold glow top-right */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 pointer-events-none"
            aria-hidden="true"
            style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)" }}
          />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/40">
                {breadcrumbs.map((crumb, i) => (
                  <li key={crumb.url} className="flex items-center gap-2">
                    {i > 0 && <span aria-hidden="true" className="text-white/20">›</span>}
                    {i === breadcrumbs.length - 1 ? (
                      <span className="text-white/70">{crumb.name}</span>
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
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Tags */}
              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gold/15 border border-gold/30 text-gold text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Gold accent bar */}
              <div className="w-12 h-1 bg-gold rounded-full mb-5" aria-hidden="true" />

              <h1 className="text-3xl lg:text-[2.75rem] xl:text-5xl font-bold text-white font-playfair leading-[1.1] mb-5 tracking-tight">
                {title}
              </h1>

              {subtitle && (
                <p className="text-white/65 text-xl leading-relaxed mb-6 max-w-2xl">
                  {subtitle}
                </p>
              )}

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-5 text-white/45 text-sm mt-6 pt-6 border-t border-white/10">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} aria-hidden="true" />
                  <time dateTime={datePublished}>{formatDate(datePublished)}</time>
                </span>
                {dateModified && dateModified !== datePublished && (
                  <span className="flex items-center gap-1.5">
                    Updated <time dateTime={dateModified}>{formatDate(dateModified)}</time>
                  </span>
                )}
                <span className="flex items-center gap-1.5">
                  <User size={13} aria-hidden="true" />
                  {authorName}
                </span>
                {readingTimeMinutes && (
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} aria-hidden="true" />
                    {readingTimeMinutes} min read
                  </span>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── ARTICLE BODY */}
        <section className="py-12 lg:py-16 bg-[#F8F7F4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_340px] gap-10 xl:gap-14 items-start">

              <article
                className="min-w-0"
                itemScope
                itemType="https://schema.org/Article"
              >
                <meta itemProp="headline" content={title} />
                <meta itemProp="datePublished" content={datePublished} />
                <meta itemProp="author" content={authorName} />

                {/* ⭐ DIRECT ANSWER — featured snippet target */}
                <FadeIn>
                  <div
                    className="relative bg-white rounded-2xl border-l-4 border-gold shadow-sm px-6 py-5 mb-8"
                    role="note"
                    aria-label="Key takeaway"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <svg width="14" height="14" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                        <polygon points="18,2 10,17 15,17 13,30 22,14 17,14" fill="#C9A84C" />
                      </svg>
                      <p className="text-gold text-[11px] font-bold uppercase tracking-widest">
                        Quick Answer
                      </p>
                    </div>
                    <p className="text-slate-700 leading-relaxed text-[15px]">
                      {directAnswer}
                    </p>
                  </div>
                </FadeIn>

                {/* TTS player */}
                <ArticlePlayer content={content} directAnswer={directAnswer} title={title} />

                {/* Article content */}
                <FadeIn delay={0.05}>
                  <div
                    itemProp="articleBody"
                    className="
                      prose prose-lg prose-slate max-w-none
                      prose-headings:font-playfair prose-headings:text-navy prose-headings:tracking-tight
                      prose-h2:text-2xl prose-h2:lg:text-[1.75rem] prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-3 prose-h2:border-b prose-h2:border-slate-100
                      prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                      prose-p:text-[#3D3D3D] prose-p:leading-[1.85] prose-p:text-[17px]
                      prose-a:text-forest prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                      prose-strong:text-navy
                      prose-ul:text-[#3D3D3D] prose-li:leading-relaxed prose-li:my-1
                      prose-ol:text-[#3D3D3D]
                      prose-blockquote:border-l-4 prose-blockquote:border-gold prose-blockquote:bg-amber-50/50 prose-blockquote:not-italic prose-blockquote:rounded-r-lg prose-blockquote:py-1
                      prose-table:text-sm prose-thead:bg-navy prose-th:text-white prose-th:font-semibold prose-th:px-4 prose-th:py-2
                      prose-td:px-4 prose-td:py-2 prose-td:border prose-td:border-slate-200
                      prose-tr:even:bg-slate-50
                    "
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                </FadeIn>

                {/* Tags footer */}
                {tags && tags.length > 0 && (
                  <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
                    <span className="text-slate-400 text-sm font-medium mr-1">Filed under:</span>
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs px-3 py-1.5 rounded-full transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>

              {/* ── SIDEBAR */}
              <aside className="space-y-5 lg:sticky lg:top-24">

                {/* CTA card */}
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{ background: "linear-gradient(145deg, #1B2A3B 0%, #0f1e2d 100%)" }}
                >
                  {/* Subtle gold glow */}
                  <div
                    className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20 pointer-events-none"
                    aria-hidden="true"
                    style={{ background: "radial-gradient(circle, #C9A84C, transparent 70%)" }}
                  />
                  <div className="relative p-6">
                    {/* Live indicator */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                      <span className="text-green-400 text-[11px] font-bold uppercase tracking-widest">
                        Available Now
                      </span>
                    </div>
                    <h3 className="font-playfair font-bold text-xl text-white mb-1 leading-snug">
                      Need Garage Door Repair?
                    </h3>
                    <p className="text-white/55 text-sm mb-5 leading-relaxed">
                      Same-day service · Kirkland, Bellevue & Eastside WA
                    </p>
                    <a
                      href="tel:+14254486443"
                      className="flex items-center justify-center gap-2 w-full bg-gold hover:bg-amber-400 text-navy font-bold py-3 rounded-xl text-sm transition-colors mb-3 shadow-lg"
                    >
                      <Phone size={15} aria-hidden="true" />
                      425-448-6443
                    </a>
                    <Link
                      to="/contact#estimate"
                      className="flex items-center justify-center gap-1.5 w-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 font-semibold py-3 rounded-xl text-sm transition-colors"
                    >
                      Free Estimate <ArrowRight size={13} aria-hidden="true" />
                    </Link>
                  </div>
                </div>

                {/* Author card */}
                <div className="bg-white rounded-2xl border border-slate-200 p-5">
                  <h3 className="text-navy font-bold text-sm mb-3 uppercase tracking-wide">
                    About the Author
                  </h3>
                  <div className="flex items-start gap-3">
                    <div
                      className="w-11 h-11 rounded-full bg-navy flex items-center justify-center shrink-0 shadow-md"
                      aria-hidden="true"
                    >
                      <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
                        <polygon points="18,2 10,17 15,17 13,30 22,14 17,14" fill="#C9A84C" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-navy text-sm">{authorName}</p>
                      <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">
                        Licensed garage door technician serving Kirkland & Eastside WA.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Services list */}
                <div className="bg-white rounded-2xl border border-slate-200 p-5">
                  <h3 className="text-navy font-bold text-sm uppercase tracking-wide mb-4">
                    Our Services
                  </h3>
                  <ul className="space-y-1.5 text-sm">
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
                          className="flex items-center gap-1.5 text-forest hover:text-navy transition-colors font-medium py-0.5 group"
                        >
                          <ArrowRight size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                          {s.name}
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
          <section className="py-16 bg-white border-t border-slate-100" aria-labelledby="related-posts-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[3px] bg-gold rounded-full" aria-hidden="true" />
                <h2
                  id="related-posts-heading"
                  className="text-2xl lg:text-3xl font-bold text-navy font-playfair"
                >
                  Related Articles
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((post, i) => (
                  <FadeIn key={post.href} delay={i * 0.07}>
                    <Link
                      to={post.href}
                      className="group block bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-gold/40 hover:shadow-lg transition-all duration-300 h-full"
                    >
                      <div className="h-1 bg-gradient-to-r from-gold to-amber-400" aria-hidden="true" />
                      <div className="p-6 flex flex-col h-full">
                        <time
                          dateTime={post.datePublished}
                          className="text-slate-400 text-xs mb-3 block"
                        >
                          {formatDate(post.datePublished)}
                        </time>
                        <h3 className="text-navy font-bold text-base font-playfair mb-3 group-hover:text-forest transition-colors leading-snug flex-1">
                          {post.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-forest group-hover:gap-2 transition-all">
                          Read article <ArrowRight size={12} aria-hidden="true" />
                        </span>
                      </div>
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
