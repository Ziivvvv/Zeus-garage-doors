import { CheckCircle2 } from "lucide-react";

const specialties = [
  "Custom Garage Door Installation",
  "Garage Door Roller & Hinge Replacement",
  "Garage Door Gear & Sprocket Repair",
  "Garage Door Drum & Pulley System Repair",
  "Garage Door Track Alignment & Repair",
  "Garage Door Weather Seal & Panel Replacement",
  "Garage Door Insulation Upgrades",
  "Manual to Automatic Garage Door Conversion",
  "Smart Garage Door System Setup",
  "Commercial Garage Door Repair",
];

export default function SpecialtyServices() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4 lg:px-8">

        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-blue-900 font-semibold text-sm uppercase tracking-widest mb-3">
            Full Service Capabilities
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900" style={{ textWrap: "balance" }}>
            The Complete Range of Garage Door Services
          </h2>
          <p className="mt-4 text-slate-600">
            From routine tune-ups to complex mechanical overhauls, Zeus Garage Doors handles every aspect of garage door service across the Eastside — one trusted team, one call.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-16">
          {specialties.map((service) => (
            <div
              key={service}
              className="flex items-center gap-3 py-3.5 border-b border-slate-200 last:border-0"
            >
              <CheckCircle2 size={17} className="text-blue-900 flex-shrink-0" />
              <span className="text-slate-800 font-medium text-sm">{service}</span>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-slate-500 text-sm max-w-lg mx-auto">
          Not sure which service you need? Our Eastside technicians diagnose every issue on the first visit —{" "}
          <a href="tel:+14255550199" className="text-blue-900 font-semibold hover:underline">
            call for a free same-day estimate
          </a>
          .
        </p>

      </div>
    </section>
  );
}
