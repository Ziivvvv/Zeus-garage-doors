import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Wrench, Cable, AlertTriangle, Zap, ShieldCheck, Home, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Garage Door Spring Repair",
    desc: "When a torsion or extension spring breaks, your garage door won't open safely. Zeus Garage Doors replaces broken garage door springs same-day across Kirkland, Bellevue, and the Eastside. We stock high-cycle springs for all door sizes, include a lifetime warranty on every part, and restore full operation in a single visit.",
    path: "/services/spring-replacement",
  },
  {
    icon: Zap,
    title: "Garage Door Opener Replacement",
    desc: "If your garage door opener is grinding, slow, or unresponsive, it may need repair or full replacement. Zeus Garage Doors installs and repairs LiftMaster, Chamberlain, and Genie openers — including smart Wi-Fi models — across the Eastside. Our licensed technicians diagnose the problem, provide honest pricing, and complete most opener jobs the same day.",
    path: "/services/opener-repair",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Garage Door Repair",
    desc: "A stuck, jammed, or fallen garage door is a safety hazard that needs immediate attention. Zeus Garage Doors provides emergency repair service across Kirkland, Bellevue, Redmond, and the greater Eastside, 7 days a week. We dispatch a certified technician fast — most emergency repairs, including off-track doors and broken cables, are completed the same day.",
    path: "/services/off-track-repair",
  },
  {
    icon: Home,
    title: "New Garage Door Installation",
    desc: "Replacing your old garage door is one of the highest-ROI home improvements you can make. Zeus Garage Doors installs modern steel, wood, carriage-style, and insulated glass doors across Kirkland, Bellevue, Redmond, and the Eastside. Our certified installers handle full removal, new door fitting, and opener integration in a single, hassle-free appointment.",
    path: "/services/new-installation",
  },
  {
    icon: ShieldCheck,
    title: "Garage Door Maintenance & Tune-Up",
    desc: "A professional garage door tune-up extends the life of your springs, cables, and opener while preventing costly emergency repairs. Zeus Garage Doors performs a comprehensive 21-point safety inspection, lubrication of all moving parts, and precision balance adjustment. Flat-rate maintenance pricing for Eastside homeowners in Kirkland, Bellevue, Redmond, Bothell, and surrounding communities.",
    path: "/quote",
  },
  {
    icon: Cable,
    title: "Garage Door Cable & Track Repair",
    desc: "Snapped lift cables or a door jumping off its tracks creates an immediate safety risk and prevents normal operation. Zeus Garage Doors provides fast, same-day cable and track repair across Kirkland, Redmond, Bothell, and the greater Eastside. Our technicians realign tracks, replace frayed or broken cables, and restore smooth, balanced door movement on the first visit.",
    path: "/services/cable-replacement",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-900 font-semibold text-sm uppercase tracking-widest mb-3">Our Services</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900" style={{ textWrap: "balance" }}>
            Garage Door Services for Every Need
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Broken spring at midnight? Door off-track? Opener grinding? Zeus Garage Doors dispatches a certified technician to your Eastside home the same day.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.div key={s.title} variants={item}>
              <Link
                to={s.path}
                className="group flex flex-col p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-900/25 hover:shadow-card-hover transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center mb-5 shadow-md group-hover:bg-blue-800 transition-colors">
                  <s.icon size={20} className="text-white" />
                </div>
                <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-1">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-amber-600 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
