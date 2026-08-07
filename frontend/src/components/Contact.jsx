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

  return (
    <section id="contact" className="bg-primary py-24 text-white md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: details + map */}
          <div>
            <Reveal>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-accent" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
                  Get In Touch
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                Let&apos;s move your freight forward.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
                Request a free quote or speak with our team directly. We respond to every
                enquiry the same working day.
              </p>
            </Reveal>

            <div className="mt-10 space-y-6">
              {details.map((d, i) => (
                <Reveal key={d.label} delay={0.1 + i * 0.05}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 flex-none items-center justify-center border border-white/15">
                      <d.icon className="text-accent" size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-white/40">
                        {d.label}
                      </div>
                      {d.href ? (
                        <a href={d.href} className="text-sm text-white/90 transition-colors hover:text-accent">
                          {d.value}
                        </a>
                      ) : (
                        <div className="text-sm text-white/90">{d.value}</div>
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
                className="mt-8 inline-flex items-center gap-3 bg-[#25D366] px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-opacity duration-300 hover:opacity-90"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="mt-10 overflow-hidden border border-white/10">
                <iframe
                  title="Atlas Freight Logistics Office Location"
                  src="https://www.google.com/maps?q=SG+Highway,+Ahmedabad,+Gujarat+380015&output=embed"
                  width="100%"
                  height="260"
                  style={{ border: 0, filter: "grayscale(1) contrast(1.1)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <div>
            <Reveal delay={0.1}>
              <div className="border border-white/10 bg-white/[0.03] p-8 md:p-10">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      data-testid="contact-success"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex min-h-[420px] flex-col items-center justify-center text-center"
                    >
                      <CheckCircle2 className="text-accent" size={56} strokeWidth={1.5} />
                      <h3 className="mt-6 font-heading text-2xl font-bold text-white">
                        Request Received
                      </h3>
                      <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
                        Thank you for reaching out to Atlas Freight Logistics. Our team will
                        contact you shortly with your quotation.
                      </p>
                      <button
                        data-testid="contact-reset-btn"
                        onClick={() => setSubmitted(false)}
                        className="mt-8 border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-primary"
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
                      className="space-y-5"
                    >
                      <div>
                        <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-white/60">
                          Full Name
                        </Label>
                        <Input
                          id="name" data-testid="input-name" value={form.name} onChange={update("name")}
                          placeholder="Your name"
                          className="mt-2 h-12 rounded-none border-white/15 bg-transparent text-white placeholder:text-white/30 focus-visible:ring-accent"
                        />
                        {errors.name && <p data-testid="error-name" className="mt-1.5 text-xs text-accent">{errors.name}</p>}
                      </div>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-white/60">
                            Email
                          </Label>
                          <Input
                            id="email" type="email" data-testid="input-email" value={form.email} onChange={update("email")}
                            placeholder="you@company.com"
                            className="mt-2 h-12 rounded-none border-white/15 bg-transparent text-white placeholder:text-white/30 focus-visible:ring-accent"
                          />
                          {errors.email && <p data-testid="error-email" className="mt-1.5 text-xs text-accent">{errors.email}</p>}
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-white/60">
                            Phone
                          </Label>
                          <Input
                            id="phone" data-testid="input-phone" value={form.phone} onChange={update("phone")}
                            placeholder="+91 90000 00000"
                            className="mt-2 h-12 rounded-none border-white/15 bg-transparent text-white placeholder:text-white/30 focus-visible:ring-accent"
                          />
                          {errors.phone && <p data-testid="error-phone" className="mt-1.5 text-xs text-accent">{errors.phone}</p>}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="service" className="text-xs font-bold uppercase tracking-wider text-white/60">
                          Service Required <span className="normal-case text-white/30">(optional)</span>
                        </Label>
                        <Input
                          id="service" data-testid="input-service" value={form.service} onChange={update("service")}
                          placeholder="e.g. Full Truck Load, Warehousing"
                          className="mt-2 h-12 rounded-none border-white/15 bg-transparent text-white placeholder:text-white/30 focus-visible:ring-accent"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-white/60">
                          Shipment Details
                        </Label>
                        <Textarea
                          id="message" data-testid="input-message" value={form.message} onChange={update("message")}
                          placeholder="Pickup, destination, cargo type and weight..."
                          rows={4}
                          className="mt-2 rounded-none border-white/15 bg-transparent text-white placeholder:text-white/30 focus-visible:ring-accent"
                        />
                        {errors.message && <p data-testid="error-message" className="mt-1.5 text-xs text-accent">{errors.message}</p>}
                      </div>

                      <button
                        type="submit"
                        data-testid="contact-submit-btn"
                        className="group flex w-full items-center justify-center gap-3 bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-white hover:text-primary"
                      >
                        Get Free Quote
                        <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
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
