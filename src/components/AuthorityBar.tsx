import { Shield, CheckCircle, Wrench, Gift, Award } from "lucide-react";
import AnimatedRating from "@/components/AnimatedRating";

export default function AuthorityBar() {
  return (
    <section className="bg-navy border-b border-white/10" aria-label="Trust signals and special offers">

      {/* ── Row 1: Trust signals */}
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">

          {/* Animated star rating */}
          <div className="lg:pr-10">
            <AnimatedRating />
          </div>

          {/* 85% one-visit fix rate — mandatory business rule, always prominent */}
          <div className="lg:px-10 flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center shadow-md">
              <Wrench size={20} className="text-gold" aria-hidden="true" />
            </div>
            <div>
              <p className="text-gold font-bold text-sm leading-tight">
                85% one-visit fix rate
              </p>
              <p className="text-white text-xs mt-0.5">
                fully stocked truck on every call
              </p>
            </div>
          </div>

          {/* Licensed & Insured */}
          <div className="lg:px-10 flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shadow-md">
              <Shield size={20} className="text-white" aria-hidden="true" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm leading-tight">
                Fully Licensed &amp; Insured
              </p>
              <p className="text-white text-xs mt-0.5">Washington State Contractor</p>
            </div>
          </div>

          {/* 100% Satisfaction */}
          <div className="lg:pl-10 flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shadow-md">
              <CheckCircle size={20} className="text-white" aria-hidden="true" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm leading-tight">
                100% Satisfaction
              </p>
              <p className="text-white text-xs mt-0.5">Guaranteed on every job</p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Row 2: Special Offers */}
      <div className="border-t border-white/10 bg-white/5">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">

            <p className="text-gold text-xs font-bold uppercase tracking-widest hidden sm:block flex-shrink-0">
              🏷️ Special Offers
            </p>

            {/* Offer 1 */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center flex-shrink-0">
                <Gift size={16} className="text-gold" aria-hidden="true" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-tight">
                  <span className="text-gold font-extrabold text-base">10% Off</span>{" "}
                  for First-Time Customers
                </p>
                <p className="text-white text-xs">Mention at booking — any service</p>
              </div>
            </div>

            <span className="text-white/20 hidden sm:block text-lg" aria-hidden="true">|</span>

            {/* Offer 2 */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center flex-shrink-0">
                <Award size={16} className="text-gold" aria-hidden="true" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-tight">
                  <span className="text-gold font-extrabold text-base">12.5% Off</span>{" "}
                  for Veterans &amp; Seniors
                </p>
                <p className="text-white text-xs">Zeus honors those who served</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
