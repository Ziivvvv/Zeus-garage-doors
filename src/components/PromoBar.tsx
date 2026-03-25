import { Link } from "react-router-dom";

export default function PromoBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-10 bg-blue-900 flex items-center justify-center px-4 overflow-hidden">
      <div className="flex items-center gap-3 text-white text-sm">

        {/* Offer 1 — always visible */}
        <span className="flex items-center gap-1.5 whitespace-nowrap">
          <span aria-hidden="true">🎁</span>
          <span>
            First-Time Customer:{" "}
            <strong className="text-amber-400 text-[15px]">10% OFF</strong>
          </span>
        </span>

        <span className="text-white/30 hidden sm:block" aria-hidden="true">|</span>

        {/* Offer 2 — tablet+ */}
        <span className="hidden sm:flex items-center gap-1.5 whitespace-nowrap">
          <span aria-hidden="true">🎖️</span>
          <span>
            Veterans &amp; Seniors:{" "}
            <strong className="text-amber-400 text-[15px]">12.5% OFF</strong>
          </span>
        </span>

        <span className="text-white/30 hidden md:block" aria-hidden="true">|</span>

        {/* Emergency — desktop */}
        <span className="hidden md:flex items-center gap-1.5 whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse flex-shrink-0" aria-hidden="true" />
          <span className="text-red-300 font-bold text-xs uppercase tracking-wide">24/7 Emergency</span>
        </span>

        <Link
          to="/quote"
          className="ml-1 font-bold text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors text-xs whitespace-nowrap"
          aria-label="Claim special offer"
        >
          Claim Offer →
        </Link>

      </div>
    </div>
  );
}
