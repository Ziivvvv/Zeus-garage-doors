import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const STORAGE_KEY = "zeus_exit_popup_seen";

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY <= 0) {
        setVisible(true);
        sessionStorage.setItem(STORAGE_KEY, "1");
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    }

    // Small delay so it doesn't fire immediately on page load
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 8000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  function close() {
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
            onClick={close}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-popup-heading"
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className="fixed inset-0 z-[201] flex items-center justify-center px-4 pointer-events-none"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 pointer-events-auto text-center">
              {/* Close */}
              <button
                onClick={close}
                aria-label="Close"
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors"
              >
                <X size={20} />
              </button>

              {/* Badge */}
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl" aria-hidden="true">🎁</span>
              </div>

              <h2 id="exit-popup-heading" className="text-2xl font-bold text-navy font-playfair mb-2">
                Wait — Before You Go
              </h2>
              <p className="text-charcoal/70 text-sm mb-2">
                First-time customers get <strong className="text-gold text-base">10% off</strong> any service.
              </p>
              <p className="text-charcoal/50 text-xs mb-6">
                Mention this when you call — no code needed.
              </p>

              <a
                href="tel:+14254486443"
                className="block w-full bg-gold text-white font-bold py-3.5 rounded-xl hover:bg-gold/90 transition-colors shadow-md mb-3 text-base"
              >
                📞 Call Now — 425-448-6443
              </a>

              <button
                onClick={close}
                className="text-xs text-slate-400 hover:text-slate-600 transition-colors underline"
              >
                No thanks, I'll pay full price
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
