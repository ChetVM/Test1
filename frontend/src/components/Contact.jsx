import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle2, Send } from "lucide-react";
import { Reveal } from "./motion";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { COMPANY } from "../data";

const initial = { name: "", email: "", phone: "", service: "", message: "" };

export const Contact = () => {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.phone.trim()) e.phone = "Please enter your phone number.";
    else if (!/^[+]?[\d\s-]{7,15}$/.test(form.phone)) e.phone = "Enter a valid phone number.";
    if (!form.message.trim()) e.message = "Tell us about your shipment.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const update = (k) => (ev) => {
    setForm((f) => ({ ...f, [k]: ev.target.value }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm(initial);
    }
  };

  const waLink = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(COMPANY.whatsappMessage)}`;

  const details = [
    { icon: Phone, label: "Phone", value: `${COMPANY.phone1}  ·  ${COMPANY.phone2}`, href: `tel:${COMPANY.phone1}` },
    { icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
    { icon: MapPin, label: "Corporate Office", value: `${COMPANY.address.line1}, ${COMPANY.address.line2}, ${COMPANY.address.line3}` },
    { icon: Clock, label: "Working Hours", value: COMPANY.hours },
  ];

  const inputCls =
    "mt-2 h-12 rounded-2xl border-white/15 bg-white/[0.04] text-white placeholder:text-white/35 focus-visible:ring-accent focus-visible:ring-offset-0 focus-visible:border-accent transition-colors";

  return (
    <section id="contact" className="relative overflow-hidden bg-primary py-28 text-white md:py-36">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 30%, hsl(var(--accent)) 0%, transparent 45%), radial-gradient(circle at 85% 70%, white 0%, transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left: details + map */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
                  Get In Touch
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-heading text-3xl font-bold leading-[1.08] text-white md:text-4xl lg:text-5xl">
                Let&apos;s move your
                <span className="text-accent"> freight forward.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/65">
                Request a free quote or speak with our team directly. We respond to every
                enquiry the same working day.
              </p>
            </Reveal>

            <div className="mt-10 space-y-4">
              {details.map((d, i) => (
                <Reveal key={d.label} delay={0.1 + i * 0.05}>
                  <div className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition-all duration-300 hover:border-accent/50 hover:bg-white/[0.05]">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-accent/15 transition-colors duration-300 group-hover:bg-accent">
                      <d.icon className="text-accent transition-colors duration-300 group-hover:text-white" size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                        {d.label}
                      </div>
                      {d.href ? (
                        <a href={d.href} className="mt-1 block text-sm text-white/95 transition-colors hover:text-accent">
                          {d.value}
                        </a>
                      ) : (
                        <div className="mt-1 text-sm text-white/95">{d.value}</div>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <a
                data-testid="whatsapp-btn"
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-elegant transition-transform duration-300 hover:scale-[1.03]"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 shadow-elegant">
                <iframe
                  title="Atlas Freight Logistics Office Location"
                  src="https://www.google.com/maps?q=SG+Highway,+Ahmedabad,+Gujarat+380015&output=embed"
                  width="100%"
                  height="280"
                  style={{
                    border: 0,
                    filter: "grayscale(1) invert(0.92) contrast(0.85) hue-rotate(180deg) saturate(0.3)",
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl shadow-elegant-lg md:p-12">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      data-testid="contact-success"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex min-h-[500px] flex-col items-center justify-center text-center"
                    >
                      <motion.div
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="flex h-20 w-20 items-center justify-center rounded-full bg-accent/15"
                      >
                        <CheckCircle2 className="text-accent" size={44} strokeWidth={1.75} />
                      </motion.div>
                      <h3 className="mt-8 font-heading text-2xl font-bold text-white md:text-3xl">
                        Request Received
                      </h3>
                      <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
                        Thank you for reaching out to Atlas Freight Logistics. Our team will
                        contact you shortly with your quotation.
                      </p>
                      <button
                        data-testid="contact-reset-btn"
                        onClick={() => setSubmitted(false)}
                        className="mt-10 rounded-full border border-white/20 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-primary"
                      >
                        Send Another Request
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      data-testid="contact-form"
                      onSubmit={onSubmit}
                      noValidate
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-6"
                    >
                      <div>
                        <div className="font-heading text-lg font-bold text-white">Request a Quote</div>
                        <p className="mt-1 text-xs text-white/50">Fill in a few details and we&apos;ll get back to you shortly.</p>
                      </div>

                      <div>
                        <Label htmlFor="name" className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60">
                          Full Name
                        </Label>
                        <Input
                          id="name" data-testid="input-name" value={form.name} onChange={update("name")}
                          placeholder="Your name" className={inputCls}
                        />
                        {errors.name && <p data-testid="error-name" className="mt-1.5 text-xs text-accent">{errors.name}</p>}
                      </div>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="email" className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60">
                            Email
                          </Label>
                          <Input
                            id="email" type="email" data-testid="input-email" value={form.email} onChange={update("email")}
                            placeholder="you@company.com" className={inputCls}
                          />
                          {errors.email && <p data-testid="error-email" className="mt-1.5 text-xs text-accent">{errors.email}</p>}
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60">
                            Phone
                          </Label>
                          <Input
                            id="phone" data-testid="input-phone" value={form.phone} onChange={update("phone")}
                            placeholder="+91 90000 00000" className={inputCls}
                          />
                          {errors.phone && <p data-testid="error-phone" className="mt-1.5 text-xs text-accent">{errors.phone}</p>}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="service" className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60">
                          Service Required <span className="normal-case text-white/30">(optional)</span>
                        </Label>
                        <Input
                          id="service" data-testid="input-service" value={form.service} onChange={update("service")}
                          placeholder="e.g. Full Truck Load, Warehousing" className={inputCls}
                        />
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60">
                          Shipment Details
                        </Label>
                        <Textarea
                          id="message" data-testid="input-message" value={form.message} onChange={update("message")}
                          placeholder="Pickup, destination, cargo type and weight..." rows={4}
                          className="mt-2 rounded-2xl border-white/15 bg-white/[0.04] text-white placeholder:text-white/35 focus-visible:ring-accent focus-visible:ring-offset-0 focus-visible:border-accent transition-colors"
                        />
                        {errors.message && <p data-testid="error-message" className="mt-1.5 text-xs text-accent">{errors.message}</p>}
                      </div>

                      <button
                        type="submit"
                        data-testid="contact-submit-btn"
                        className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-elegant-lg transition-transform duration-300 hover:scale-[1.02]"
                      >
                        <span className="relative z-10">Get Free Quote</span>
                        <Send size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                        <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-500 group-hover:translate-x-0" />
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
