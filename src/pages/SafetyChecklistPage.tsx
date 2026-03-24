/**
 * pages/SafetyChecklistPage.tsx — Zeus Garage Doors
 * Target: Garage door safety inspection, DIY safety check WA
 * Link magnet page — shareable, high-value content
 */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, AlertTriangle, Phone } from "lucide-react";
import SEOHead from "../components/SEOHead";

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
      initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const CHECKS = [
  {
    title: "The Photo-Eye Reverse Test",
    body: "Place an object (like a roll of paper towels) in the door's path and try to close it. The door should immediately reverse. In Washington, cobwebs and lakefront fog often smudge these lenses, causing erratic behavior. Wipe them with a dry cloth monthly.",
  },
  {
    title: "The Balance Test",
    body: "Pull the red emergency release cord and lift the door halfway by hand. If it's hard to lift or crashes down, your springs are out of balance. This is a common issue in Bothell and Woodinville homes with heavy custom doors.",
    warning: "Do not attempt to adjust the springs yourself.",
  },
  {
    title: "High-Tension Cable Inspection",
    body: "Check the cables for fraying or \"wear spots\" near the bottom brackets. Due to the high humidity in the Eastside, standard steel cables can oxidize and snap without warning. If you see even one stray wire sticking out, call a professional immediately.",
  },
  {
    title: "Spring Visual Check",
    body: "Look at the torsion springs above the door (or extension springs along the tracks). Check for visible rust, gaps in the coils, or signs of stretching. PNW moisture accelerates corrosion—rusty springs can snap without warning.",
    warning: "Never touch or attempt to adjust torsion springs. They are under extreme tension.",
  },
  {
    title: "Auto-Reverse Force Test",
    body: "Place a 2x4 flat on the ground where the door closes. When the door contacts the wood, it should reverse within two seconds. If it doesn't, the force settings on your opener need adjustment—a critical safety feature required by federal law since 1993.",
  },
  {
    title: "Track Alignment Check",
    body: "Visually inspect the vertical and horizontal tracks on both sides. Look for dents, bends, or gaps between the track and the wall brackets. Even a small misalignment can cause the door to bind, jump off track, or put uneven stress on the opener motor.",
  },
  {
    title: "Roller Condition",
    body: "Examine the rollers (the wheels that ride inside the tracks). Cracked, chipped, or seized rollers create grinding noises and strain the entire system. Nylon rollers last longer and run quieter than steel, especially in damp PNW conditions.",
  },
  {
    title: "Weatherstripping & Bottom Seal",
    body: "Check the rubber seal along the bottom of the door and the weatherstripping around the frame. Cracked or missing seals let rain, cold air, and pests into your garage. In the Pacific Northwest, a good seal also prevents moisture from pooling and rusting your hardware.",
  },
  {
    title: "Emergency Release Function",
    body: "Pull the red emergency release handle and verify you can manually open and close the door smoothly. This is your backup if the power goes out during a winter storm—common in King and Snohomish Counties. If it's stuck or jammed, the trolley mechanism needs service.",
  },
  {
    title: "Hardware Tightness & Lubrication",
    body: "Vibration loosens hardware over time. Check all visible bolts, brackets, and hinges for tightness. Then apply a silicone-based lubricant (not WD-40) to the springs, rollers, and hinges. This reduces noise, prevents rust, and extends the life of every moving part.",
  },
];

export default function SafetyChecklistPage() {
  return (
    <>
      <SEOHead
        title="10-Point Garage Door Safety Checklist | Zeus Garage Doors"
        description="Is your garage door safe? Use this free 10-point DIY safety checklist to inspect springs, cables, sensors, and more. Essential for WA homeowners."
        canonical="/safety-checklist"
        pageType="blog"
        datePublished="2026-03-22"
        authorName="Zeus Garage Doors"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/blog" },
          { name: "Safety Checklist", url: "/safety-checklist" },
        ]}
      />

      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 bg-navy">
          <div className="container mx-auto px-4 max-w-3xl">
            <FadeIn>
              <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
                Free Resource
              </p>
              <h1
                className="font-playfair text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white"
                style={{ lineHeight: 1.1 }}
              >
                10-Point Garage Door Safety Checklist for WA Homeowners
              </h1>
              <p className="text-white/60 mt-5 text-base leading-relaxed max-w-xl">
                In the Pacific Northwest, moisture and cold wear down your garage door faster
                than you think. Use this free checklist to ensure your family and property
                are protected.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Featured Snippet Target */}
        <section className="py-10 bg-offwhite">
          <div className="container mx-auto px-4 max-w-3xl">
            <FadeIn>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <h2 className="text-navy font-playfair text-xl font-bold mb-3">
                  How to check if your garage door is safe?
                </h2>
                <p className="text-charcoal/75 leading-relaxed">
                  To check if your garage door is safe, perform a visual inspection of the
                  springs and cables for rust, test the auto-reverse sensors with a block of
                  wood, and check the balance by lifting the door halfway manually. A safe
                  door should stay in place and reverse immediately upon hitting an
                  obstruction.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Checklist Items */}
        <section className="py-12 bg-offwhite">
          <div className="container mx-auto px-4 max-w-3xl space-y-6">
            {CHECKS.map((check, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-forest/30 hover:shadow-md transition-all">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-0.5">
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-forest/10 text-forest font-bold text-sm">
                        {i + 1}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-navy font-playfair text-lg font-bold mb-2">
                        {check.title}
                      </h3>
                      <p className="text-charcoal/70 leading-relaxed text-[15px]">
                        {check.body}
                      </p>
                      {check.warning && (
                        <div className="mt-3 flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
                          <AlertTriangle size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
                          <p className="text-amber-800 text-sm font-medium">
                            {check.warning}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-offwhite">
          <div className="container mx-auto px-4 max-w-3xl">
            <FadeIn>
              <div className="bg-navy rounded-2xl p-8 sm:p-10 text-center">
                <CheckCircle2 size={40} className="text-gold mx-auto mb-4" />
                <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-3">
                  Fail any part of the checklist?
                </h2>
                <p className="text-white/65 mb-7 max-w-md mx-auto leading-relaxed">
                  Don't risk a DIY disaster. Our technicians provide same-day safety
                  inspections across King and Snohomish Counties.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-gold text-navy px-7 py-3.5 rounded-xl font-bold hover:bg-gold/90 transition-colors active:scale-[0.97]"
                  >
                    Book a Professional Inspection
                  </Link>
                  <a
                    href="tel:+14255550199"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-colors active:scale-[0.97]"
                  >
                    <Phone size={16} />
                    Call 425-555-0199
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </>
  );
}
