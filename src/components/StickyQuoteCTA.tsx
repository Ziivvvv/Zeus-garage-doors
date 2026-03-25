import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText } from "lucide-react";
import QuoteModal from "@/components/QuoteModal";

/**
 * Floating golden CTA — always visible.
 *
 * Positioning:
 *  - Mobile:  bottom-right, above the StickyMobileFooter
 *  - Desktop: vertically centred on the right edge as a side tab
 */
export default function StickyQuoteCTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── Floating button ─────────────────────────────────────────────── */}

      {/* Mobile pill — sits above StickyMobileFooter (~96 px tall) */}
      <div className="lg:hidden fixed bottom-[104px] right-4 z-40">
        <AnimatePresence>
          <motion.button
            key="mobile-cta"
            onClick={() => setOpen(true)}
            aria-label="Get a free quote"
            initial={{ opacity: 0, scale: 0.8, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 280, damping: 22 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className="relative inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm text-white shadow-xl"
            style={{
              background: "linear-gradient(135deg, hsl(43 90% 50%), hsl(36 95% 44%))",
              boxShadow: "0 6px 28px hsl(43 90% 48% / 0.55)",
            }}
          >
            {/* Pulse ring */}
            <span
              className="absolute inset-0 rounded-full animate-ping opacity-30"
              style={{ background: "hsl(43 90% 50%)" }}
              aria-hidden="true"
            />
            <FileText size={16} className="relative z-10 flex-shrink-0" />
            <span className="relative z-10">Free Quote</span>
          </motion.button>
        </AnimatePresence>
      </div>

      {/* Desktop side tab — vertically centred on the right edge */}
      <div className="hidden lg:block fixed top-1/2 -translate-y-1/2 right-0 z-40">
        <motion.button
          onClick={() => setOpen(true)}
          aria-label="Get a free quote"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ delay: 1.0, type: "spring", stiffness: 260, damping: 26 }}
          whileHover={{ x: "-4px" }}
          whileTap={{ scale: 0.97 }}
          className="group relative flex flex-col items-center justify-center gap-2 px-3 py-6 rounded-l-2xl text-white font-bold text-xs tracking-widest uppercase shadow-2xl overflow-hidden"
          style={{
            background: "linear-gradient(180deg, hsl(43 90% 50%), hsl(36 95% 42%))",
            writingMode: "vertical-rl",
            boxShadow: "-6px 0 32px hsl(43 90% 48% / 0.45)",
            minHeight: "140px",
          }}
        >
          {/* Shimmer overlay on hover */}
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 60%)",
            }}
            aria-hidden="true"
          />
          <FileText size={18} className="relative z-10 mb-1 rotate-90" />
          <span className="relative z-10" style={{ transform: "rotate(180deg)" }}>
            Free&nbsp;Quote
          </span>
        </motion.button>
      </div>

      {/* ── Modal ───────────────────────────────────────────────────────── */}
      <QuoteModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
