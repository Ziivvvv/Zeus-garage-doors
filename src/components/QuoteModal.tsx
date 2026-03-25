import { motion, AnimatePresence } from "framer-motion";
import { X, Wrench } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Override what happens after form submission — defaults to onClose. */
  onFormSuccess?: () => void;
}

export default function QuoteModal({ isOpen, onClose, onFormSuccess }: QuoteModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9998] bg-black/55 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-label="Get a Free Quote"
            initial={{ opacity: 0, scale: 0.93, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 28 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative w-full max-w-lg pointer-events-auto rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.35)]">

              {/* Header */}
              <div className="bg-[hsl(var(--navy))] px-6 py-5 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center">
                  <Wrench size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-[hsl(var(--primary))] text-xs font-semibold uppercase tracking-widest">
                    Free Estimate — No Obligation
                  </p>
                  <h2 className="text-white font-display text-xl font-bold leading-tight">
                    Get Your Free Quote Today
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="ml-auto flex-shrink-0 w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 transition flex items-center justify-center text-white/60 hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Body */}
              <div className="bg-white px-6 py-6 max-h-[80vh] overflow-y-auto">
                <QuoteForm onSuccess={onFormSuccess ?? onClose} />
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
