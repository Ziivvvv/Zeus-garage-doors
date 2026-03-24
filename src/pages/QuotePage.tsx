import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileFooter from "@/components/StickyMobileFooter";
import QuoteForm from "@/components/QuoteForm";

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <section className="py-20 bg-navy-gradient">
          <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Free Estimate</p>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4" style={{ lineHeight: 1.1 }}>
                Request Your Quote
              </h1>
              <p className="text-muted-foreground">Fill out the form below and we'll respond within 30 minutes during business hours.</p>
            </motion.div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <QuoteForm />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileFooter />
      <div className="h-14 lg:hidden" />
    </div>
  );
}
