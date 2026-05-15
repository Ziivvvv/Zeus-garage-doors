import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Loader2, MapPin, Phone, ChevronLeft } from "lucide-react";
import { SERVICES } from "./QuoteForm";

const SERVICE_ICONS: Record<string, string> = {
  "Broken Spring Replacement":       "🔧",
  "Broken Cable Replacement":        "🪢",
  "Off-Track Door Repair":           "🚪",
  "Damaged Panel Replacement":       "🔨",
  "Roller & Hinge Replacement":      "⚙️",
  "Opener Motor Repair / Installation": "📡",
  "New Door Installation":           "🏠",
  "General Repair":                  "🛠️",
  "Other":                           "❓",
};

async function sendToDispatch(payload: Record<string, string>): Promise<void> {
  await fetch("https://hook.us2.make.com/9a2qgfao1orrdhd4e5h8nty15990acz9", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

export default function MultiStepQuoteForm() {
  const [step, setStep]             = useState(1);
  const [service, setService]       = useState("");
  const [zip, setZip]               = useState("");
  const [cityName, setCityName]     = useState("");
  const [zipStatus, setZipStatus]   = useState<"idle"|"loading"|"found"|"error">("idle");
  const [name, setName]             = useState("");
  const [phone, setPhone]           = useState("");
  const [message, setMessage]       = useState("");
  const [errors, setErrors]         = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone]             = useState(false);

  // Zip → city lookup
  useEffect(() => {
    if (zip.length !== 5) {
      if (zip.length === 0) setZipStatus("idle");
      setCityName("");
      return;
    }
    let cancelled = false;
    setZipStatus("loading");
    fetch(`https://api.zippopotam.us/us/${zip}`)
      .then(r => { if (!r.ok) throw new Error(); return r.json(); })
      .then(d => {
        if (cancelled) return;
        const city: string = d.places?.[0]?.["place name"] ?? "";
        setCityName(city);
        setZipStatus(city ? "found" : "error");
      })
      .catch(() => { if (!cancelled) setZipStatus("error"); });
    return () => { cancelled = true; };
  }, [zip]);

  function goStep2() {
    if (!service) { setErrors({ service: "Please select a service." }); return; }
    setErrors({});
    setStep(2);
  }

  function goStep3() {
    if (zip.length !== 5) { setErrors({ zip: "Enter a valid 5-digit zip." }); return; }
    setErrors({});
    setStep(3);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!name.trim())  next.name  = "Full name is required.";
    if (!phone.trim()) next.phone = "Phone number is required.";
    if (Object.keys(next).length) { setErrors(next); return; }
    setErrors({});
    setSubmitting(true);

    const location = cityName ? `${cityName}, ${zip}` : zip;
    const payload: Record<string, string> = {
      name: name.trim(),
      phone: phone.trim(),
      service,
      message: message.trim(),
      location,
      submittedAt: new Date().toLocaleString("en-US", {
        timeZone: "America/Los_Angeles",
        month: "2-digit", day: "2-digit", year: "numeric",
        hour: "2-digit", minute: "2-digit", hour12: true,
      }) + " PT",
    };

    try { await sendToDispatch(payload); } catch { /* fail silently */ }
    setSubmitting(false);
    setDone(true);
  }

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        className="flex flex-col items-center justify-center py-14 text-center gap-4"
      >
        <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center">
          <CheckCircle size={48} className="text-emerald-500" />
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold text-navy mb-2">We got it!</h3>
          <p className="text-charcoal font-medium">Our dispatch team will call you shortly.</p>
          {cityName && (
            <p className="mt-2 text-sm text-slate-400 flex items-center justify-center gap-1">
              <MapPin size={13} /> Dispatching to <strong className="ml-1 text-slate-600">{cityName}</strong>
            </p>
          )}
          <p className="mt-1 text-xs text-slate-400">Service: {service}</p>
        </div>
      </motion.div>
    );
  }

  const inputCls = (err?: string) =>
    `w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 transition ${
      err ? "border-red-400 focus:ring-red-300" : "border-slate-200 focus:ring-gold/50"
    }`;

  const progress = ((step - 1) / 3) * 100;

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-slate-400 mb-1.5">
          <span className={step >= 1 ? "text-gold font-semibold" : ""}>Service</span>
          <span className={step >= 2 ? "text-gold font-semibold" : ""}>Location</span>
          <span className={step >= 3 ? "text-gold font-semibold" : ""}>Contact</span>
        </div>
        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gold rounded-full"
            animate={{ width: `${progress + 33}%` }}
            transition={{ duration: 0.35 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* ── STEP 1: Service ── */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25 }}
          >
            <h3 className="font-bold text-navy text-lg mb-4">What do you need help with?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              {SERVICES.map(s => (
                <button
                  key={s}
                  type="button"
                  onClick={() => { setService(s); setErrors({}); }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-sm font-medium text-left transition-all ${
                    service === s
                      ? "border-gold bg-gold/5 text-navy"
                      : "border-slate-200 text-slate-600 hover:border-gold/40 hover:bg-slate-50"
                  }`}
                >
                  <span className="text-xl shrink-0" aria-hidden="true">{SERVICE_ICONS[s] ?? "🔧"}</span>
                  {s}
                </button>
              ))}
            </div>
            {errors.service && <p className="text-xs text-red-500 mb-3">{errors.service}</p>}
            <button
              type="button"
              onClick={goStep2}
              className="w-full bg-gold text-white font-bold py-3.5 rounded-xl hover:bg-gold/90 transition-colors"
            >
              Next — Choose Location →
            </button>
          </motion.div>
        )}

        {/* ── STEP 2: Location ── */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              onClick={() => setStep(1)}
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600 mb-4 transition-colors"
            >
              <ChevronLeft size={14} /> Back
            </button>
            <h3 className="font-bold text-navy text-lg mb-1">Where are you located?</h3>
            <p className="text-slate-400 text-sm mb-4">We'll confirm we serve your area.</p>

            <div className="relative mb-1">
              <input
                value={zip}
                onChange={e => { setZip(e.target.value.replace(/\D/g, "").slice(0, 5)); setErrors({}); }}
                placeholder="Enter your zip code"
                inputMode="numeric"
                maxLength={5}
                className={`${inputCls(errors.zip)} pr-10 text-base`}
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                {zipStatus === "loading" && <Loader2 size={16} className="animate-spin text-slate-300" />}
                {zipStatus === "found"   && <MapPin size={16} className="text-emerald-500" />}
                {zipStatus === "error"   && <MapPin size={16} className="text-red-400" />}
              </span>
            </div>
            {cityName && (
              <p className="text-xs text-emerald-600 font-medium mb-3 flex items-center gap-1">
                <MapPin size={11} /> {cityName} — we serve this area!
              </p>
            )}
            {zipStatus === "error" && (
              <p className="text-xs text-red-500 mb-3">Zip not found — call us at 425-448-6443 to confirm coverage.</p>
            )}
            {errors.zip && <p className="text-xs text-red-500 mb-3">{errors.zip}</p>}

            <button
              type="button"
              onClick={goStep3}
              className="w-full bg-gold text-white font-bold py-3.5 rounded-xl hover:bg-gold/90 transition-colors mt-2"
            >
              Next — Your Contact Info →
            </button>
          </motion.div>
        )}

        {/* ── STEP 3: Contact ── */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              onClick={() => setStep(2)}
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600 mb-4 transition-colors"
            >
              <ChevronLeft size={14} /> Back
            </button>
            <h3 className="font-bold text-navy text-lg mb-1">Last step — how do we reach you?</h3>
            <p className="text-slate-400 text-sm mb-4">
              Service: <strong className="text-navy">{service}</strong>
              {cityName && <> · <strong className="text-navy">{cityName}</strong></>}
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-3">
              <div>
                <input
                  value={name}
                  onChange={e => { setName(e.target.value); setErrors(p => ({ ...p, name: "" })); }}
                  placeholder="Full Name *"
                  autoComplete="name"
                  className={inputCls(errors.name)}
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div>
                <div className="relative">
                  <Phone size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  <input
                    value={phone}
                    onChange={e => { setPhone(e.target.value); setErrors(p => ({ ...p, phone: "" })); }}
                    type="tel"
                    placeholder="Phone Number *"
                    autoComplete="tel"
                    className={`${inputCls(errors.phone)} pl-9`}
                  />
                </div>
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>

              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Describe the issue... (optional)"
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 transition resize-none"
              />

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 bg-gold text-white font-bold py-4 rounded-xl hover:bg-gold/90 transition-colors shadow-md disabled:opacity-70 text-base"
              >
                {submitting
                  ? <><Loader2 size={18} className="animate-spin" /> Sending…</>
                  : "Send Quote Request 🚀"
                }
              </button>

              <p className="text-center text-[10px] text-slate-400">
                No spam. No commitment. We call you back within the hour.
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
