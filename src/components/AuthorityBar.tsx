import { Star, Shield, Package, Clock } from "lucide-react";

const badges = [
  { icon: Star,    label: "5-Star Rated",       sub: "80+ Google & Yelp Reviews" },
  { icon: Shield,  label: "Fully Licensed",      sub: "& Fully Insured" },
  { icon: Package, label: "Premium Parts",       sub: "OEM & Manufacturer Approved" },
  { icon: Clock,   label: "Same-Day Priority",   sub: "Emergency Service Available" },
];

export default function AuthorityBar() {
  return (
    <section className="py-8 bg-white border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {badges.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center shadow-md">
                <Icon size={20} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm text-slate-900 leading-tight">{label}</p>
                <p className="text-xs text-slate-500 mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
