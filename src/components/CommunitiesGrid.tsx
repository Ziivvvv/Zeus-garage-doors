import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const communities = [
  {
    name: "Kirkland",
    tag: "HQ",
    desc: "Our home base — fastest response times and priority scheduling for all Kirkland residents.",
    href: "/locations/kirkland-wa",
  },
  {
    name: "Seattle",
    tag: "New",
    desc: "Serving Queen Anne, Capitol Hill, Ballard, Fremont & Magnolia — specialists in alley garages and pre-1960 housing stock.",
    href: "/locations/seattle-wa",
  },
  {
    name: "Bellevue",
    tag: "",
    desc: "Serving Bellevue's premier neighborhoods with top-rated garage door repair and installation.",
    href: "/locations/bellevue-wa",
  },
  {
    name: "Redmond",
    tag: "",
    desc: "Rapid garage door service for Redmond homes, from the tech corridor to Trilogy.",
    href: "/locations/redmond-wa",
  },
  {
    name: "Bothell",
    tag: "",
    desc: "North Eastside residents count on us for reliable repairs, spring replacements, and new installations.",
    href: "/locations/bothell-wa",
  },
  {
    name: "Woodinville",
    tag: "",
    desc: "Same-day service for Woodinville homes — from cottage-style properties to large estate garages.",
    href: "/locations/woodinville-wa",
  },
  {
    name: "Mercer Island",
    tag: "",
    desc: "Island residents receive priority scheduling and white-glove service on every visit.",
    href: "/locations/mercer-island-wa",
  },
  {
    name: "Kenmore",
    tag: "",
    desc: "Same-day garage door repair and installation for Kenmore homeowners along the Lake Washington shoreline.",
    href: "/locations/kenmore-wa",
  },
];

const secondaryCities = [
  { label: "Lynnwood, WA",   href: "/locations/lynnwood-wa" },
  { label: "Sammamish, WA",  href: "/areas/sammamish-wa" },
  { label: "Issaquah, WA",   href: "/areas/issaquah-wa" },
  { label: "Renton, WA",     href: "/areas/renton-wa" },
  { label: "Newcastle, WA",  href: "/areas/newcastle-wa" },
  { label: "Clyde Hill, WA", href: "/areas/clyde-hill-wa" },
];

export default function CommunitiesGrid() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-900 font-semibold text-sm uppercase tracking-widest mb-2">
            Service Areas
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
            Proudly Serving the Eastside
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Zeus Garage Doors provides expert repair and installation across Seattle and the entire Eastside.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map(({ name, tag, desc, href }) => (
            <Link
              key={name}
              to={href}
              className="group p-6 rounded-2xl border border-slate-200 bg-white shadow-card hover:shadow-card-hover hover:border-gold/40 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                  <MapPin size={14} className="text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-gold transition-colors duration-300">
                  {name}
                </h3>
                {tag && (
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-900/10 text-blue-900">
                    {tag}
                  </span>
                )}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed flex-1">{desc}</p>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Service Area <ArrowRight size={12} />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-500 text-sm font-medium mb-4">
            Also Providing Same-Day Garage Door Service To:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {secondaryCities.map(({ label, href }) => (
              <Link
                key={label}
                to={href}
                className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-medium shadow-sm hover:border-gold/50 hover:text-gold transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
