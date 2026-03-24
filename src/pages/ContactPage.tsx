/**
 * pages/ContactPage.tsx — Zeus Garage Doors
 * Contact page with form UI and business info
 */

import SEOHead from "../components/SEOHead";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Phone } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { useState } from "react";
import { useToast } from "../hooks/use-toast";

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Phone",
    value: "425-555-0199",
    href: "tel:+14255550199",
  },
  {
    icon: Mail,
    label: "Email",
    value: "zeusgaragedoorepair@gmail.com",
    href: "mailto:zeusgaragedoorepair@gmail.com",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "King & Snohomish Counties, WA",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Sun–Thu 6 AM – 9 PM · Fri 6 AM – 6 PM",
    href: null,
  },
];

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.08, duration: 0.6, ease: EASE_OUT },
  }),
};

export default function ContactPage() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulated — no backend wired
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Message received!",
        description: "We'll get back to you within 1 business hour.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  return (
    <>
      <SEOHead
        title="Contact Zeus Garage Doors | Kirkland & Eastside WA"
        description="Get in touch with Zeus Garage Doors for same-day garage door repair in Kirkland, Bellevue, Redmond, and the Eastside. Call 425-555-0199 or email us."
        canonical="/contact"
        pageType="contact"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />

      {/* ── HERO */}
      <section className="relative bg-background pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_20%,hsl(var(--gold)/0.06),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-semibold tracking-widest uppercase mb-4"
          >
            Contact Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
            className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-[1.05] text-wrap-balance mb-4"
          >
            Let's Get Your Door Fixed
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE_OUT }}
            className="text-muted-foreground text-lg max-w-2xl"
          >
            Call us for immediate service or fill out the form below for a free
            estimate. We respond to all inquiries within one business hour.
          </motion.p>
        </div>
      </section>

      {/* ── MAIN CONTENT */}
      <section className="bg-background pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* ── FORM */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="lg:col-span-3"
            >
              <motion.div
                variants={fadeUp}
                custom={0}
                id="estimate"
                className="bg-secondary rounded-xl border border-border p-8"
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Request a Free Estimate
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        required
                        className="bg-background border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(425) 555-0000"
                        required
                        className="bg-background border-border"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-foreground">Service Needed</Label>
                    <select
                      id="service"
                      required
                      className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select a service…</option>
                      <option value="spring">Broken Spring Replacement</option>
                      <option value="opener">Opener Repair or Install</option>
                      <option value="off-track">Off-Track Door Repair</option>
                      <option value="cable">Cable Replacement</option>
                      <option value="panel">Panel Replacement</option>
                      <option value="new">New Door Installation</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Describe the Issue
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us what's happening with your garage door…"
                      rows={4}
                      className="bg-background border-border resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-primary text-primary-foreground font-semibold py-3 hover:opacity-90 active:scale-[0.97] transition-all"
                  >
                    {submitting ? "Sending…" : "Send Request"}
                  </Button>
                  <p className="text-muted-foreground text-xs text-center">
                    We'll respond within 1 hour during business hours.
                  </p>
                </form>
              </motion.div>
            </motion.div>

            {/* ── CONTACT INFO */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {CONTACT_INFO.map((item, i) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  custom={i}
                  className="flex gap-4 items-start"
                >
                  <div className="w-11 h-11 rounded-lg bg-secondary border border-border flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              <motion.div
                variants={fadeUp}
                custom={4}
                className="bg-secondary rounded-xl border border-border p-6 mt-8"
              >
                <h3 className="text-foreground font-semibold mb-3">
                  Need Help Fast? Call Now
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  Garage door stuck open or off-track? Call us during business
                  hours for same-day service across King and Snohomish Counties.
                </p>
                <a
                  href="tel:+14255550199"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity active:scale-[0.97]"
                >
                  <Phone className="w-4 h-4" />
                  425-555-0199
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
