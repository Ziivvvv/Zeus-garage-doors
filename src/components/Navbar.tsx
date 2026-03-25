/**
 * Navbar.tsx — Zeus Garage Doors
 * SEO-optimized navigation: semantic HTML, internal linking, accessibility
 * CLS-safe sticky header with Framer Motion
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// ─────────────────────────────────────────────
// NAV DATA — drives both nav and internal links
// ─────────────────────────────────────────────

const SERVICES_NAV = [
  {
    label: "Spring Replacement",
    href: "/services/spring-replacement",
    description: "Torsion & extension spring repair",
  },
  {
    label: "Opener Repair",
    href: "/services/opener-repair",
    description: "LiftMaster, Genie, Chamberlain",
  },
  {
    label: "Off-Track Repair",
    href: "/services/off-track-repair",
    description: "Emergency same-day service",
  },
  {
    label: "Cable Replacement",
    href: "/services/cable-replacement",
    description: "Snapped or frayed cable repair",
  },
  {
    label: "Panel Replacement",
    href: "/services/panel-replacement",
    description: "Dented or damaged panel sections",
  },
  {
    label: "New Installation",
    href: "/services/new-installation",
    description: "Full door & opener packages",
  },
  {
    label: "Other / Need an Estimate?",
    href: "/quote",
    description: "Not sure? Get a free assessment",
  },
];

const LOCATIONS_NAV = [
  { label: "Kirkland, WA", href: "/locations/kirkland-wa" },
  { label: "Bellevue, WA", href: "/locations/bellevue-wa" },
  { label: "Redmond, WA", href: "/locations/redmond-wa" },
  { label: "Mercer Island, WA", href: "/locations/mercer-island-wa" },
  { label: "Lynnwood, WA", href: "/locations/lynnwood-wa" },
  { label: "Bothell, WA", href: "/locations/bothell-wa" },
  { label: "Woodinville, WA", href: "/locations/woodinville-wa" },
  { label: "Kenmore, WA", href: "/locations/kenmore-wa" },
];

const PRIMARY_NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// ─────────────────────────────────────────────
// SUB-MENU
// ─────────────────────────────────────────────

interface DropdownProps {
  isOpen: boolean;
  items: { label: string; href: string; description?: string }[];
  onClose: () => void;
}

function Dropdown({ isOpen, items, onClose }: DropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50"
          role="menu"
          aria-label="Submenu"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              role="menuitem"
              onClick={onClose}
              className="flex flex-col px-5 py-3 hover:bg-offwhite transition-colors group"
            >
              <span className="text-navy font-semibold text-sm group-hover:text-forest transition-colors">
                {item.label}
              </span>
              {item.description && (
                <span className="text-slate-400 text-xs mt-0.5">
                  {item.description}
                </span>
              )}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─────────────────────────────────────────────
// MOBILE MENU
// ─────────────────────────────────────────────

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.28, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-navy flex flex-col overflow-y-auto"
          aria-label="Mobile navigation"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <Link
              to="/"
              onClick={onClose}
              aria-label="Zeus Garage Doors — Home"
            >
              <img
                src="/zeus-logo-footer.png"
                alt="Zeus Garage Doors"
                loading="eager"
                decoding="async"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <button
              onClick={onClose}
              aria-label="Close navigation menu"
              className="text-white/70 hover:text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* CTA */}
          <div className="px-6 py-4 bg-gold">
            <a
              href="tel:+14255550199"
              className="block text-center text-navy font-bold text-lg py-3"
              aria-label="Call Zeus Garage Doors now"
            >
              📞 Call Now: 425-555-0199
            </a>
          </div>

          {/* Links */}
          <div className="flex-1 px-6 py-6 space-y-6">
            {/* Services */}
            <div>
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                Our Services
              </p>
              <ul className="space-y-1">
                {SERVICES_NAV.map((s) => (
                  <li key={s.href}>
                    <Link
                      to={s.href}
                      onClick={onClose}
                      className="block py-2 text-white/90 hover:text-gold transition-colors text-base"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div>
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">
                Service Areas
              </p>
              <ul className="space-y-1">
                {LOCATIONS_NAV.map((l) => (
                  <li key={l.href}>
                    <Link
                      to={l.href}
                      onClick={onClose}
                      className="block py-2 text-white/90 hover:text-gold transition-colors text-base"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Primary */}
            <div>
              <ul className="space-y-1">
                {PRIMARY_NAV.slice(1).map((p) => (
                  <li key={p.href}>
                    <Link
                      to={p.href}
                      onClick={onClose}
                      className="block py-2 text-white/90 hover:text-gold transition-colors text-base"
                    >
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

// ─────────────────────────────────────────────
// MAIN NAVBAR
// ─────────────────────────────────────────────

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setServicesOpen(false);
    setLocationsOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const close = () => {
      setServicesOpen(false);
      setLocationsOpen(false);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-forest text-white px-4 py-2 rounded z-[100]"
      >
        Skip to main content
      </a>

      <header
        role="banner"
        className={`fixed top-10 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100"
            : "bg-black/40 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            <Link
              to="/"
              className="shrink-0"
              aria-label="Zeus Garage Doors — Kirkland WA — Home"
            >
              <img
                src="/zeus-logo-navbar.png"
                alt="Zeus Garage Doors"
                loading="eager"
                decoding="async"
                className="h-10 lg:h-12 w-auto object-contain"
              />
            </Link>

            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => {
                    setServicesOpen((o) => !o);
                    setLocationsOpen(false);
                  }}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    scrolled
                      ? "text-navy hover:bg-slate-100"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  Services
                  <svg className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <Dropdown
                  isOpen={servicesOpen}
                  items={SERVICES_NAV}
                  onClose={() => setServicesOpen(false)}
                />
              </div>

              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => {
                    setLocationsOpen((o) => !o);
                    setServicesOpen(false);
                  }}
                  aria-expanded={locationsOpen}
                  aria-haspopup="true"
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    scrolled
                      ? "text-navy hover:bg-slate-100"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  Areas We Serve
                  <svg className={`w-4 h-4 transition-transform ${locationsOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <Dropdown
                  isOpen={locationsOpen}
                  items={LOCATIONS_NAV}
                  onClose={() => setLocationsOpen(false)}
                />
              </div>

              {PRIMARY_NAV.slice(1).map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    scrolled
                      ? "text-navy hover:bg-slate-100"
                      : "text-white hover:bg-white/10"
                  } ${location.pathname === item.href ? "underline underline-offset-4" : ""}`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="ml-4 flex flex-col items-center gap-0.5">
                <span className="flex items-center gap-1.5 text-red-400 text-[9px] font-bold uppercase tracking-widest leading-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" aria-hidden="true" />
                  24/7 Emergency Service
                </span>
                <a
                  href="tel:+14255550199"
                  className="bg-gold hover:bg-gold-dark text-navy font-bold px-5 py-2.5 rounded-xl text-sm transition-colors shadow-md"
                  aria-label="Call Zeus Garage Doors now at 425-555-0199"
                >
                  📞 Call Now
                </a>
              </div>
            </nav>

            <div className="flex lg:hidden items-center gap-3">
              <a
                href="tel:+14255550199"
                className="bg-gold text-navy text-sm font-bold px-4 py-2 rounded-lg"
                aria-label="Call now"
              >
                Call Now
              </a>
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
                className={`p-2 rounded-lg transition-colors ${
                  scrolled ? "text-navy" : "text-white"
                }`}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      <div
        className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-navy border-t border-white/10 px-4 py-3 flex gap-3"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
        role="complementary"
        aria-label="Quick contact"
      >
        <a
          href="tel:+14255550199"
          className="flex-1 bg-gold text-navy font-bold text-center py-3 rounded-xl text-sm"
          aria-label="Call Zeus Garage Doors"
        >
          📞 Call Now
        </a>
        <a
          href="sms:+14255550199"
          className="flex-1 bg-gold text-navy font-bold text-center py-3 rounded-xl text-sm"
          aria-label="Text Zeus Garage Doors"
        >
          💬 Text Us
        </a>
      </div>
    </>
  );
}

export { SERVICES_NAV, LOCATIONS_NAV };
