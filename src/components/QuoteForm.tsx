import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2, MapPin, Phone } from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────

export const SERVICES = [
  "Broken Spring Replacement",
  "Broken Cable Replacement",
  "Off-Track Door Repair",
  "Damaged Panel Replacement",
  "Roller & Hinge Replacement",
  "Opener Motor Repair / Installation",
  "New Door Installation",
  "General Repair",
  "Other",
];

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormState {
  name: string;
  phone: string;
  zip: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  zip?: string;
}

export interface QuoteFormProps {
  /** Called after a successful dispatch — popup uses this to trigger auto-close. */
  onSuccess?: () => void;
}

// ─── Dispatch stub ────────────────────────────────────────────────────────────

/**
 * Simulates posting to your dispatch webhook.
 * Replace the body with a real fetch() when the endpoint is ready:
 *
 *   await fetch("https://hooks.zapier.com/hooks/catch/…", {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify(payload),
 *   });
 */
async function sendToDispatch(payload: Record<string, string>): Promise<void> {
  void payload;
  return new Promise((resolve) => setTimeout(resolve, 1500));
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function QuoteForm({ onSuccess }: QuoteFormProps) {
  const [form, setForm] = useState<FormState>({
    name: "", phone: "", zip: "", service: "", message: "",
  });

  const [cityName, setCityName]         = useState("");
  const [zipLookup, setZipLookup]       = useState<"idle" | "loading" | "found" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted]       = useState(false);
  const [errors, setErrors]             = useState<FormErrors>({});

  // ── Zip → city lookup ──────────────────────────────────────────────────────
  useEffect(() => {
    const zip = form.zip;
    if (zip.length !== 5) {
      if (zip.length === 0) setZipLookup("idle");
      setCityName("");
      return;
    }

    let cancelled = false;
    setZipLookup("loading");
    setCityName("");

    fetch(`https://api.zippopotam.us/us/${zip}`)
      .then((res) => { if (!res.ok) throw new Error(); return res.json(); })
      .then((data) => {
        if (cancelled) return;
        const city: string = data.places?.[0]?.["place name"] ?? "";
        setCityName(city);
        setZipLookup(city ? "found" : "error");
      })
      .catch(() => { if (!cancelled) setZipLookup("error"); });

    return () => { cancelled = true; };
  }, [form.zip]);

  // ── Handlers ───────────────────────────────────────────────────────────────

  function field(key: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
      if (key in errors) setErrors((prev) => ({ ...prev, [key]: undefined }));
    };
  }

  function validate(): boolean {
    const next: FormErrors = {};
    if (!form.name.trim())     next.name  = "Full name is required.";
    if (!form.phone.trim())    next.phone = "Phone number is required.";
    if (form.zip.length !== 5) next.zip   = "Enter a valid 5-digit zip code.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const location = cityName ? `${cityName}, ${form.zip}` : form.zip;
    const payload: Record<string, string> = {
      name:        form.name.trim(),
      phone:       form.phone.trim(),
      service:     form.service,
      message:     form.message.trim(),
      location,                         // "Kirkland, 98033" format for dispatchers
      submittedAt: new Date().toISOString(),
    };

    try {
      await sendToDispatch(payload);
    } catch {
      // Fail silently — form shows success regardless to avoid frustrating users
    }

    setIsSubmitting(false);
    setSubmitted(true);
    onSuccess?.();
  }

  // ── Style helper ───────────────────────────────────────────────────────────

  const inputCls = (error?: string) =>
    `w-full px-4 py-3 rounded-lg bg-[hsl(var(--secondary))] border text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] text-sm focus:outline-none focus:ring-2 transition disabled:opacity-60 ${
      error
        ? "border-red-400 focus:ring-red-300"
        : "border-[hsl(var(--border))] focus:ring-[hsl(var(--primary))]/50"
    }`;

  // ── Success state ──────────────────────────────────────────────────────────

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        className="flex flex-col items-center justify-center py-10 text-center gap-4"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center">
          <CheckCircle size={40} className="text-emerald-500" />
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold text-[hsl(var(--navy))] mb-2">
            Success!
          </h3>
          <p className="text-[hsl(var(--foreground))] font-medium">
            Our dispatch team will call you shortly.
          </p>
          {cityName && (
            <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))] flex items-center justify-center gap-1">
              <MapPin size={13} />
              Dispatching a technician to&nbsp;<strong>{cityName}</strong>
            </p>
          )}
        </div>
      </motion.div>
    );
  }

  // ── Form ───────────────────────────────────────────────────────────────────

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-3.5">

      {/* Row 1 — Full Name + Phone Number (side-by-side, both required) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">

        {/* Full Name */}
        <div>
          <input
            value={form.name}
            onChange={field("name")}
            disabled={isSubmitting}
            placeholder="Full Name *"
            autoComplete="name"
            className={inputCls(errors.name)}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>

        {/* Phone Number — most critical dispatcher field */}
        <div>
          <div className="relative">
            <Phone
              size={14}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[hsl(var(--muted-foreground))] pointer-events-none"
            />
            <input
              value={form.phone}
              onChange={field("phone")}
              disabled={isSubmitting}
              type="tel"
              placeholder="Phone Number *"
              autoComplete="tel"
              className={`${inputCls(errors.phone)} pl-9`}
            />
          </div>
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>

      </div>

      {/* Zip Code — full width, with live city autodetect */}
      <div>
        <div className="relative">
          <input
            value={form.zip}
            onChange={field("zip")}
            disabled={isSubmitting}
            placeholder="Zip Code *"
            inputMode="numeric"
            pattern="[0-9]{5}"
            maxLength={5}
            autoComplete="postal-code"
            className={`${inputCls(errors.zip)} pr-9`}
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            {zipLookup === "loading" && (
              <Loader2 size={14} className="animate-spin text-[hsl(var(--muted-foreground))]" />
            )}
            {zipLookup === "found" && <MapPin size={14} className="text-emerald-500" />}
            {zipLookup === "error"  && <MapPin size={14} className="text-red-400" />}
          </span>
        </div>
        {cityName && (
          <p className="mt-1 text-xs text-emerald-600 font-medium flex items-center gap-1">
            <MapPin size={11} /> {cityName}
          </p>
        )}
        {errors.zip && <p className="mt-1 text-xs text-red-500">{errors.zip}</p>}
      </div>

      {/* Service dropdown */}
      <select
        value={form.service}
        onChange={field("service")}
        disabled={isSubmitting}
        className="w-full px-4 py-3 rounded-lg bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]/50 transition disabled:opacity-60"
      >
        <option value="">Select Service Needed</option>
        {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
      </select>

      {/* Optional message */}
      <textarea
        value={form.message}
        onChange={field("message")}
        disabled={isSubmitting}
        placeholder="Describe the issue... (optional)"
        rows={3}
        className="w-full px-4 py-3 rounded-lg bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]/50 transition resize-none disabled:opacity-60"
      />

      {/* CTA button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-base tracking-wide transition-all active:scale-[0.97] disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100"
        style={{
          background: "linear-gradient(135deg, hsl(43 90% 48%), hsl(36 95% 44%))",
          color: "#fff",
          boxShadow: isSubmitting ? "none" : "0 4px 20px hsl(43 90% 48% / 0.45)",
        }}
        onMouseEnter={(e) => { if (!isSubmitting) e.currentTarget.style.filter = "brightness(1.08)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.filter = ""; }}
      >
        {isSubmitting
          ? <><Loader2 size={18} className="animate-spin" /> Sending…</>
          : <><Send size={18} /> Send Quote Request</>
        }
      </button>

      <p className="text-center text-[10px] text-[hsl(var(--muted-foreground))]">
        No spam. No commitment. We'll call you back promptly during business hours.
      </p>
    </form>
  );
}
