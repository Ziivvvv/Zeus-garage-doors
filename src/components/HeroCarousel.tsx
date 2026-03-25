import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/effect-fade";
// @ts-ignore
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Phone, FileText, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.webp";
import hero2 from "@/assets/hero-2.webp";

const slides = [
  { img: hero1, headline: "The Eastside's #1 Choice for Garage Door Repair", sub: "Same-day emergency service across Kirkland, Bellevue & Mercer Island." },
  { img: hero2, headline: "Premium Garage Door Installation & Repair", sub: "Factory-certified technicians. LiftMaster, Amarr, Clopay authorized dealer." },
];

export default function HeroCarousel() {
  return (
    <section className="relative h-[90vh] min-h-[600px] hero-swiper">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full">
              <img src={slide.img} alt={slide.headline} loading="eager" fetchPriority="high" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
              <div className="relative z-10 h-full flex items-center pb-16">
                <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4"
                  >
                    Zeus Garage Doors
                  </motion.p>
                  {i === 0 ? (
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35, duration: 0.7 }}
                      className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-6 drop-shadow-lg"
                      style={{ textWrap: "balance" }}
                    >
                      {slide.headline}
                    </motion.h1>
                  ) : (
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35, duration: 0.7 }}
                      className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-6 drop-shadow-lg"
                      style={{ textWrap: "balance" }}
                    >
                      {slide.headline}
                    </motion.h2>
                  )}
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-white/85 text-lg mb-8 max-w-xl drop-shadow"
                  >
                    {slide.sub}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65, duration: 0.6 }}
                    className="flex flex-col gap-4"
                  >
                    <div className="flex flex-wrap gap-4">
                      <Link to="/quote" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-gold hover:bg-gold-dark text-navy font-semibold shadow-lg transition-all active:scale-[0.97]">
                        <FileText size={18} /> Book Your Repair Now
                      </Link>
                      <a href="tel:+14255550199" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-gold hover:bg-gold-dark text-navy font-semibold shadow-lg transition-all active:scale-[0.97]">
                        <Phone size={18} /> Call 425-555-0199 (Emergency Service Available)
                      </a>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/20 border border-gold/40 self-start">
                      <Tag size={12} className="text-gold flex-shrink-0" />
                      <span className="text-gold-light text-xs font-semibold tracking-wide">
                        10% OFF for First-Time Customers — mention this offer when booking
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
