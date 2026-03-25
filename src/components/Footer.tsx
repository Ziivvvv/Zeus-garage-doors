/**
 * Footer.tsx — Zeus Garage Doors
 * Internal linking engine: every city × every service
 * Semantic HTML5 footer with schema-friendly markup
 * Link equity flows from footer → city pages → service pages (bidirectional)
 */

import { Link } from "react-router-dom";

const SERVICES = [
  { label: "Spring Replacement", href: "/services/spring-replacement" },
  { label: "Opener Repair & Install", href: "/services/opener-repair" },
  { label: "Off-Track Door Repair", href: "/services/off-track-repair" },
  { label: "Cable Replacement", href: "/services/cable-replacement" },
  { label: "Panel Replacement", href: "/services/panel-replacement" },
  { label: "New Door Installation", href: "/services/new-installation" },
  
];

const LOCATIONS = [
  { label: "Kirkland, WA", href: "/locations/kirkland-wa" },
  { label: "Bellevue, WA", href: "/locations/bellevue-wa" },
  { label: "Redmond, WA", href: "/locations/redmond-wa" },
  { label: "Mercer Island, WA", href: "/locations/mercer-island-wa" },
  { label: "Lynnwood, WA", href: "/locations/lynnwood-wa" },
  { label: "Bothell, WA", href: "/locations/bothell-wa" },
  { label: "Woodinville, WA", href: "/locations/woodinville-wa" },
  { label: "Kenmore, WA", href: "/locations/kenmore-wa" },
];

const NEIGHBORHOODS = [
  { label: "Juanita", href: "/locations/kirkland-wa#juanita" },
  { label: "Totem Lake", href: "/locations/kirkland-wa#totem-lake" },
  { label: "Finn Hill", href: "/locations/kirkland-wa#finn-hill" },
  { label: "Houghton", href: "/locations/kirkland-wa#houghton" },
  { label: "Bridle Trails", href: "/locations/kirkland-wa#bridle-trails" },
  { label: "Kingsgate", href: "/locations/kirkland-wa#kingsgate" },
  { label: "Somerset, Bellevue", href: "/locations/bellevue-wa#somerset" },
  { label: "Crossroads, Bellevue", href: "/locations/bellevue-wa#crossroads" },
  { label: "Factoria, Bellevue", href: "/locations/bellevue-wa#factoria" },
  { label: "Eastgate, Bellevue", href: "/locations/bellevue-wa#eastgate" },
  { label: "Lakemont, Bellevue", href: "/locations/bellevue-wa#lakemont" },
  { label: "Education Hill", href: "/locations/redmond-wa#education-hill" },
  { label: "Overlake, Redmond", href: "/locations/redmond-wa#overlake" },
  { label: "Grass Lawn", href: "/locations/redmond-wa#grass-lawn" },
  { label: "Hollywood Hill", href: "/locations/woodinville-wa#hollywood-hill" },
  { label: "Canyon Park, Bothell", href: "/locations/bothell-wa#canyon-park" },
  { label: "Meadowdale, Lynnwood", href: "/locations/lynnwood-wa#meadowdale" },
  { label: "Alderwood, Lynnwood", href: "/locations/lynnwood-wa#alderwood" },
];

const COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Safety Checklist", href: "/safety-checklist" },
  { label: "Local FAQ", href: "/local-faq" },
  { label: "Contact", href: "/contact" },
  { label: "Get an Estimate", href: "/contact#estimate" },
];

const BLOG_POSTS = [
  {
    label: "Why Is My Garage Door Opening by Itself?",
    href: "/blog/garage-door-opens-by-itself",
  },
  {
    label: "Spring Replacement Cost Factors",
    href: "/blog/spring-replacement-cost-factors",
  },
  {
    label: "LiftMaster vs Genie: Best Opener for PNW",
    href: "/blog/best-garage-door-opener-pnw",
  },
];

function FooterLinkList({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-gold text-xs font-bold uppercase tracking-widest mb-4">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              className="text-white/70 hover:text-white text-sm transition-colors leading-relaxed"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="bg-navy text-white"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* ── TRUST BAR */}
      <div className="border-b border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              { icon: "⚡", text: "Same-Day Service Available" },
              { icon: "🏆", text: "Licensed & Insured" },
              { icon: "💯", text: "Honest Upfront Pricing" },
              { icon: "🔧", text: "LiftMaster Certified" },
              { icon: "📍", text: "Locally Owned — Kirkland, WA" },
            ].map((trust) => (
              <div
                key={trust.text}
                className="flex items-center gap-2 text-sm text-white/80"
              >
                <span aria-hidden="true">{trust.icon}</span>
                <span>{trust.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col items-center md:items-start">
            <Link to="/" className="inline-block mb-5" aria-label="Zeus Garage Doors Home">
              <img
                src="/zeus-logo-footer.png"
                alt="Zeus Garage Doors"
                loading="lazy"
                decoding="async"
                className="w-48 mx-auto md:mx-0 md:w-auto md:h-16 lg:h-20 object-contain"
              />
            </Link>

            <address
              className="not-italic text-white/70 text-sm space-y-2 mb-5 text-center md:text-left"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <p>
                <strong className="text-white" itemProp="name">
                  Zeus Garage Doors and Gate Repair LLC
                </strong>
              </p>
              <p itemProp="addressLocality">
                Kirkland,{" "}
                <span itemProp="addressRegion">WA</span>{" "}
                <span itemProp="postalCode">98034</span>
              </p>
              <p>
                <a
                  href="tel:+14255550199"
                  className="text-gold hover:text-white transition-colors font-semibold"
                  itemProp="telephone"
                  aria-label="Call Zeus Garage Doors"
                >
                  425-555-0199
                </a>
              </p>
              <p>
                <a
                  href="mailto:zeusgaragedoorepair@gmail.com"
                  className="text-white/60 hover:text-white transition-colors text-xs"
                  itemProp="email"
                >
                  zeusgaragedoorepair@gmail.com
                </a>
              </p>
            </address>

            <div className="text-white/60 text-xs text-center md:text-left">
              <p className="text-white/90 font-semibold text-sm mb-1">Hours</p>
              <p>Sunday – Thursday: 6:00 AM – 10:00 PM</p>
              <p>Friday: 6:00 AM – 6:00 PM</p>
              <p>Saturday: Closed</p>
            </div>
          </div>

          <FooterLinkList title="Our Services" links={SERVICES} />
          <FooterLinkList title="Areas We Serve" links={LOCATIONS} />
          <FooterLinkList title="Neighborhoods" links={NEIGHBORHOODS} />

          <div className="space-y-8">
            <FooterLinkList title="Company" links={COMPANY} />
            <FooterLinkList title="Recent Posts" links={BLOG_POSTS} />
          </div>
        </div>

        {/* ── CITY × SERVICE MATRIX */}
        <div className="mt-12 pt-10 border-t border-white/10">
          <p className="text-gold text-xs font-bold uppercase tracking-widest mb-5">
            Garage Door Repair by City
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {[
              { text: "Garage Door Repair Kirkland WA", href: "/locations/kirkland-wa" },
              { text: "Garage Door Repair Bellevue WA", href: "/locations/bellevue-wa" },
              { text: "Garage Door Repair Redmond WA", href: "/locations/redmond-wa" },
              { text: "Spring Replacement Kirkland", href: "/services/spring-replacement" },
              { text: "Opener Repair Bellevue", href: "/services/opener-repair" },
              { text: "Emergency Garage Door Eastside WA", href: "/contact" },
              { text: "LiftMaster Repair Kirkland WA", href: "/services/opener-repair" },
              { text: "Off-Track Repair Kirkland", href: "/services/off-track-repair" },
              { text: "Cable Repair Bellevue WA", href: "/services/cable-replacement" },
              { text: "Garage Door Repair Mercer Island", href: "/locations/mercer-island-wa" },
              { text: "Garage Door Repair Bothell WA", href: "/locations/bothell-wa" },
              { text: "New Garage Door Installation Kirkland", href: "/services/new-installation" },
            ].map((link) => (
              <Link
                key={link.href + link.text}
                to={link.href}
                className="text-white/40 hover:text-white/70 text-xs transition-colors"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>
            © {currentYear} Zeus Garage Doors and Gate Repair LLC. All rights reserved.
            Serving Kirkland, Bellevue, Redmond &amp; the Eastside.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white/70 transition-colors">
              Terms
            </Link>
            <Link to="/sitemap.xml" className="hover:text-white/70 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
