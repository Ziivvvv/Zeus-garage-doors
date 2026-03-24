import { Phone, MessageSquare } from "lucide-react";

export default function StickyMobileFooter() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 w-full z-50 lg:hidden bg-navy"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="flex rounded-t-2xl overflow-hidden">
        <a
          href="tel:+14255550199"
          className="w-1/2 flex items-center justify-center gap-2 py-3.5 bg-gold text-navy font-semibold text-sm active:scale-[0.97] transition-transform"
          aria-label="Call Zeus Garage Doors"
        >
          <Phone size={18} /> Call Now
        </a>
        <a
          href="sms:+14255550199"
          className="w-1/2 flex items-center justify-center gap-2 py-3.5 bg-gold-dark text-navy font-semibold text-sm active:scale-[0.97] transition-transform"
          aria-label="Text Zeus Garage Doors"
        >
          <MessageSquare size={18} /> Text Us
        </a>
      </div>
    </div>
  );
}
