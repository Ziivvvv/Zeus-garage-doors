import { Star, Shield, CheckCircle, Wrench, Gift, Award } from "lucide-react";

const TRUST_BADGES = [
  { icon: Star,        label: "5-Star Rated",              sub: "80+ Google & Yelp Reviews" },
  { icon: Shield,      label: "Fully Licensed & Insured",  sub: "Washington State Contractor" },
  { icon: Wrench,      label: "85% One-Visit Fix Rate",    sub: "Fully Stocked Truck Every Call" },
  { icon: CheckCircle, label: "100% Satisfaction",         sub: "Guaranteed on Every Job" },
];

export default function AuthorityBar() {
  return (
    <section className="bg-white border-b border-slate-200 shadow-sm" aria-label="Trust signals and special offers">

      {/* ── Row 1: Trust badges */}
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {TRUST_BADGES.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center shadow-md">
                <Icon size={20} className="text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-sm text-slate-900 leading-tight">{label}</p>
                <p className="text-xs text-slate-500 mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Row 2: Special Offers */}
      <div className="border-t border-amber-200/80 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">

            <p className="text-amber-700 text-xs font-bold uppercase tracking-widest hidden sm:block flex-shrink-0">
              🏷️ Special Offers
            </p>

            {/* Offer 1 */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                <Gift size={16} className="text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="text-slate-900 text-sm font-semibold leading-tight">
                  <span className="text-amber-600 font-extrabold text-base">10% Off</span>{" "}
                  for First-Time Customers
                </p>
                <p className="text-slate-500 text-xs">Mention at booking — any service</p>
              </div>
            </div>

            <span className="text-amber-300 hidden sm:block text-lg" aria-hidden="true">|</span>

            {/* Offer 2 */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                <Award size={16} className="text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="text-slate-900 text-sm font-semibold leading-tight">
                  <span className="text-amber-600 font-extrabold text-base">12.5% Off</span>{" "}
                  for Veterans &amp; Seniors
                </p>
                <p className="text-slate-500 text-xs">Zeus honors those who served</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
