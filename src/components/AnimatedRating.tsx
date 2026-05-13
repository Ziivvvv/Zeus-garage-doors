import { Star } from "lucide-react";

// Shows a "leave us a review" prompt until real reviews exist.
// Replace this entire component with aggregateRating schema + real star count
// once Google reviews accumulate (target: 25+ reviews before adding schema).
export default function AnimatedRating() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex text-gold/40">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-current" />
        ))}
      </div>
      <div className="text-white font-medium text-sm flex flex-col leading-tight">
        <span className="text-white/90 font-semibold">New &amp; Growing</span>
        <span className="text-white/60 text-xs">Be among our first reviewers</span>
      </div>
    </div>
  );
}
