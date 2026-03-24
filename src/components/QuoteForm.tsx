import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export default function QuoteForm({ variant = "section" }: { variant?: "section" | "inline" }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle size={48} className="text-emerald mb-4" />
        <h3 className="font-display text-2xl font-bold text-foreground mb-2">Quote Requested!</h3>
        <p className="text-muted-foreground">We'll get back to you within 30 minutes during business hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input required placeholder="Full Name" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition" />
        <input required type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition" />
      </div>
      <input required placeholder="Zip Code" inputMode="numeric" pattern="[0-9]{5}" maxLength={5} className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition" />
      <input required type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition" />
      <select className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition">
        <option value="">Select Service Needed</option>
        <option>Broken Spring Replacement</option>
        <option>Broken Cable Replacement</option>
        <option>Off-Track Door Repair</option>
        <option>Damaged Panel Replacement</option>
        <option>Roller & Hinge Replacement</option>
        <option>Opener Motor Repair</option>
        <option>Roller Replacement</option>
        <option>Other</option>
      </select>
      <textarea placeholder="Describe the issue..." rows={3} className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none" />
      <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all active:scale-[0.97]">
        <Send size={18} /> Send Quote Request
      </button>
    </form>
  );
}
