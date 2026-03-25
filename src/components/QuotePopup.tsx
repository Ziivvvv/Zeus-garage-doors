import { useEffect, useRef, useState } from "react";
import QuoteModal from "@/components/QuoteModal";

const STORAGE_KEY   = "zeus_quote_popup_dismissed";
const DELAY_MS      = 6000;
const AUTO_CLOSE_MS = 4000;

/** Auto-triggers the QuoteModal 6 s after first landing — once per session. */
export default function QuotePopup() {
  const [open, setOpen]   = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setOpen(true), DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  }

  function handleFormSuccess() {
    localStorage.setItem(STORAGE_KEY, "1");
    timerRef.current = setTimeout(() => setOpen(false), AUTO_CLOSE_MS);
  }

  return (
    <QuoteModal
      isOpen={open}
      onClose={dismiss}
      onFormSuccess={handleFormSuccess}
    />
  );
}
