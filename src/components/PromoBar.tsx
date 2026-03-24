import { Tag } from "lucide-react";
import { Link } from "react-router-dom";

export default function PromoBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-10 bg-blue-900 flex items-center justify-center px-4">
      <div className="flex items-center gap-2 text-white text-sm">
        <Tag size={13} className="text-amber-400 flex-shrink-0" />
        <span className="hidden sm:inline">
          First-Time Customer? Get{" "}
          <strong className="text-amber-400">10% OFF</strong> Your Garage Door Repair —{" "}
        </span>
        <span className="sm:hidden">
          <strong className="text-amber-400">10% OFF</strong> First-Time Customers —{" "}
        </span>
        <Link
          to="/quote"
          className="font-bold text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
        >
          Claim Offer
        </Link>
      </div>
    </div>
  );
}
