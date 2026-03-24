import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileFooter from "@/components/StickyMobileFooter";
import FAQAccordion, { GENERAL_FAQS } from "@/components/FAQAccordion";
import QuoteForm from "@/components/QuoteForm";

const serviceData: Record<string, { title: string; description: string; content: string }> = {
  "broken-spring-replacement": {
    title: "Broken Spring Replacement",
    description: "Expert torsion & extension spring repair across Kirkland, Bellevue & Mercer Island.",
    content: "Garage door springs are under immense tension and are the most common point of failure in any garage door system. When a spring breaks, the door becomes extremely heavy and dangerous to operate manually. At Zeus Garage Doors, our certified technicians carry a full inventory of torsion and extension springs on every truck, enabling same-day replacement in most cases.\n\nWe use high-cycle springs rated for 25,000+ cycles—roughly double the lifespan of standard springs. Every replacement includes a full system safety inspection, cable check, and balance test. We back our spring work with a lifetime warranty because we're that confident in our parts and labor.\n\nSigns your spring may be failing include a door that feels heavier than usual, visible gaps in the spring coils, or a loud bang from the garage area. If you notice any of these, call us immediately—operating a door with a broken spring risks cable damage, opener burnout, and personal injury.",
  },
  "broken-cable-replacement": {
    title: "Broken Cable Replacement",
    description: "Swift garage door cable replacement to restore safe, balanced operation.",
    content: "Garage door cables work in tandem with your springs to lift and lower the door smoothly. When a cable snaps or frays, the door can drop suddenly or hang at an angle—both serious safety hazards. Our technicians replace cables using aircraft-grade galvanized steel wire rated for your door's exact weight.\n\nEvery cable replacement includes a spring tension check, drum inspection, and full balance adjustment. We carry cables for all major brands and door types, from standard residential to heavy insulated commercial doors.",
  },
  "off-track-door-repair": {
    title: "Off-Track Door Repair",
    description: "Precision garage door realignment for smooth, safe operation.",
    content: "An off-track garage door is both a safety risk and a security vulnerability. Doors can come off track from impacts, worn rollers, broken cables, or obstructions in the track. Our technicians carefully realign the door, inspect and replace damaged rollers or track sections, and verify smooth operation through multiple cycles.\n\nNever attempt to force an off-track door open or closed—this can cause further damage to panels, tracks, and hardware. Call Zeus Garage Doors for safe, professional realignment.",
  },
  "damaged-panel-replacement": {
    title: "Damaged Panel Replacement",
    description: "Match and replace individual garage door panels to restore curb appeal.",
    content: "A dented or cracked panel doesn't always mean you need a full door replacement. We source replacement panels from all major manufacturers—Amarr, Clopay, Wayne Dalton, and more—to match your door's style, color, and insulation rating.\n\nPanel replacement is significantly more cost-effective than full door replacement and can be completed in a single service visit. We also offer custom color matching and insulation upgrades during the replacement process.",
  },
  "roller-hinge-replacement": {
    title: "Roller & Hinge Replacement",
    description: "Quiet nylon rollers and heavy-duty hinges installed same day.",
    content: "Worn rollers and hinges are the #1 cause of noisy garage doors. Over time, steel rollers develop flat spots and metal hinges wear at pivot points, creating grinding and squeaking. We upgrade to sealed nylon rollers and heavy-gauge commercial hinges that dramatically reduce noise and friction.\n\nRoller and hinge replacement is one of the most impactful maintenance tasks you can do for your garage door system. It reduces strain on the opener motor, improves door balance, and extends the life of cables and springs.",
  },
  "opener-motor-repair": {
    title: "Opener Motor Repair",
    description: "Expert diagnostics for belt, chain, and screw-drive garage door openers.",
    content: "If your garage door opener is humming but not moving, reversing unexpectedly, or not responding to remotes, our technicians can diagnose and repair the issue on-site. We service all major brands including LiftMaster, Chamberlain, Genie, and Craftsman.\n\nCommon opener issues include stripped gears, failed logic boards, misaligned safety sensors, and worn drive mechanisms. We carry replacement parts for most models and can often complete repairs in a single visit. For openers beyond repair, we offer premium LiftMaster replacements with smartphone connectivity and battery backup.",
  },
  "roller-replacement": {
    title: "Roller Replacement",
    description: "Worn or broken rollers cause grinding, shaking, and off-track doors.",
    content: "Worn garage door rollers create excessive noise, vibration, and can cause your door to jump off its tracks. Zeus Garage Doors replaces nylon and steel rollers on all residential doors across the Eastside.\n\nWe inspect the entire track system during every roller replacement to ensure smooth, quiet operation. Nylon rollers are recommended for homes with bedrooms near the garage due to their whisper-quiet performance.",
  },
};

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const data = serviceData[slug || ""] || serviceData["broken-spring-replacement"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <section className="py-20 bg-navy-gradient">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Services</p>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4" style={{ textWrap: "balance", lineHeight: 1.1 }}>
                {data.title}
              </h1>
              <p className="text-lg text-muted-foreground">{data.description}</p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                {data.content.split("\n\n").map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-6">{p}</p>
                ))}

                <div className="mt-12">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
                  <FAQAccordion items={GENERAL_FAQS} />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-1"
              >
                <div className="sticky top-24 bg-card border border-border rounded-2xl p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">Request a Free Estimate</h3>
                  <QuoteForm variant="inline" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileFooter />
      <div className="h-14 lg:hidden" />
    </div>
  );
}
