import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { Star } from "lucide-react";

export default function AnimatedRating() {
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => v.toFixed(1));
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      animate(count, 5.0, { duration: 1.5, ease: "easeOut" });
    }
  }, [inView, count]);

  return (
    <div ref={ref} className="flex items-center gap-2">
      <div className="flex text-gold">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-current" />
        ))}
      </div>
      <div className="text-white font-medium text-lg flex items-center gap-1">
        <motion.span>{display}</motion.span>
        <span className="text-white/80"> / 5.0 </span>
        <span className="text-sm text-white/60 ml-1">Eastside WA</span>
      </div>
    </div>
  );
}
