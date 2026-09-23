import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowUpRight, Check, Loader2, AlertCircle, Linkedin, Instagram } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";
import { SERVICE_OPTIONS } from "@/data/content";
import { BUSINESS, buildWhatsAppLink, buildTelLink } from "@/config/business";
import { ChapterLabel, Reveal, MaskText } from "@/components/shared/motion";

const inputCls =
  "w-full border-0 border-b border-midnight-ink/25 bg-transparent py-3 font-sans text-base text-midnight-ink placeholder:text-graphite/35 transition-colors duration-300 focus:border-accounting-green focus:outline-none focus:ring-0";

const Field = ({ id, label, error, children }) => (
  <div>
    <label htmlFor={id} className="mb-1 block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-sage">
      {label}
    </label>
    {children}
    {error && (
      <p data-testid={`error-${id}`} className="mt-1.5 flex items-center gap-1.5 font-sans text-xs text-destructive">
        <AlertCircle size={12} /> {error}
      </p>
    )}
  </div>
);

const DETAILS = [
  { icon: Phone, label: "Phone", value: BUSINESS.phone, href: buildTelLink() },
  { icon: Mail, label: "Email", value: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
  { icon: MapPin, label: "Office", value: BUSINESS.address },
  { icon: Clock, label: "Working hours", value: BUSINESS.workingHours },
];

export const Contact = () => {
  const { values, errors, status, setField, handleSubmit, reset } = useContactForm();

  return (
    <section id="contact" data-testid="contact-section" className="scroll-mt-24 bg-ivory bg-grain py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-16">
        <Reveal>
          <ChapterLabel label="Contact" className="mb-10" />
        </Reveal>
        <div className="grid grid-cols-12 gap-x-0 gap-y-16 lg:gap-x-12">
          {/* Left 40% */}
          <div className="col-span-12 lg:col-span-5">
            <MaskText
              as="h2"
              className="font-serif font-medium leading-[1.0] tracking-tight text-midnight-ink text-5xl sm:text-6xl"
              lines={["Contact us"]}
            />
            <div className="mt-12 space-y-6">
              {DETAILS.map((d) => (
                <div key={d.label} className="flex items-start gap-4 border-b border-midnight-ink/12 pb-5">
                  <d.icon size={18} className="mt-1 shrink-0 text-accounting-green" />
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-sage">{d.label}</div>
                    {d.href ? (
                      <a href={d.href} className="link-underline font-sans text-base text-midnight-ink">{d.value}</a>
                    ) : (
                      <div className="font-sans text-base leading-relaxed text-midnight-ink">{d.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                data-testid="contact-call-btn"
                href={buildTelLink()}
                className="inline-flex items-center gap-2 rounded-[6px] bg-midnight-ink px-6 py-3.5 font-sans text-sm font-semibold text-ivory transition-colors duration-300 hover:bg-accounting-green"
              >
                <Phone size={15} /> Call us
              </a>
              <a
                data-testid="contact-whatsapp-btn"
                href={buildWhatsAppLink(values.service)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[6px] border border-accounting-green px-6 py-3.5 font-sans text-sm font-semibold text-accounting-green transition-colors duration-300 hover:bg-accounting-green hover:text-ivory"
              >
                <MessageCircle size={15} /> WhatsApp us
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                data-testid="social-linkedin"
                href={BUSINESS.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="InfiTax on LinkedIn"
                className="inline-flex items-center gap-2 rounded-[6px] bg-[#0A66C2] px-5 py-3 font-sans text-sm font-semibold text-white shadow-sm transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                data-testid="social-instagram"
                href={BUSINESS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="InfiTax on Instagram"
                className="inline-flex items-center gap-2 rounded-[6px] bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] px-5 py-3 font-sans text-sm font-semibold text-white shadow-sm transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Instagram size={18} /> Instagram
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 border-t border-midnight-ink/12 pt-6 sm:grid-cols-2">
              {BUSINESS.partners.map((p) => (
                <div key={p.name}>
                  <div className="font-serif text-lg text-midnight-ink">{p.name}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-sage">{p.role}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right 60% — form integrated (no card) */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            {status === "success" ? (
              <div data-testid="contact-success" className="flex min-h-[400px] flex-col items-center justify-center border border-midnight-ink/15 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accounting-green text-ivory">
                  <Check size={30} />
                </div>
                <h3 className="mt-6 font-serif text-3xl text-midnight-ink">Enquiry received</h3>
                <p className="mt-3 max-w-sm font-sans text-sm text-graphite/80">
                  Thank you. We'll review your requirement and get back to you shortly.
                </p>
                <button
                  data-testid="contact-reset-btn"
                  onClick={reset}
                  className="mt-8 link-underline font-sans text-sm font-semibold text-accounting-green"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form data-testid="contact-form" onSubmit={handleSubmit} noValidate className="space-y-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <Field id="name" label="Name" error={errors.name}>
                    <input id="name" data-testid="input-name" type="text" value={values.name} onChange={(e) => setField("name", e.target.value)} className={inputCls} placeholder="Full name" />
                  </Field>
                  <Field id="phone" label="Phone" error={errors.phone}>
                    <input id="phone" data-testid="input-phone" type="tel" value={values.phone} onChange={(e) => setField("phone", e.target.value)} className={inputCls} placeholder="+91 00000 00000" />
                  </Field>
                </div>
                <Field id="email" label="Email" error={errors.email}>
                  <input id="email" data-testid="input-email" type="email" value={values.email} onChange={(e) => setField("email", e.target.value)} className={inputCls} placeholder="you@company.com" />
                </Field>
                <Field id="service" label="Requirement" error={errors.service}>
                  <select id="service" data-testid="select-service" value={values.service} onChange={(e) => setField("service", e.target.value)} className={`${inputCls} cursor-pointer`}>
                    <option value="" disabled>Select a service</option>
                    {SERVICE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </Field>
                <Field id="message" label="Message" error={errors.message}>
                  <textarea id="message" data-testid="input-message" rows={2} value={values.message} onChange={(e) => setField("message", e.target.value)} className={`${inputCls} resize-none`} placeholder="A few lines about what you need…" />
                </Field>

                {status === "error" && (
                  <p data-testid="contact-error" className="flex items-center gap-2 font-sans text-sm text-destructive">
                    <AlertCircle size={14} /> Something went wrong. Please try again or WhatsApp us.
                  </p>
                )}

                <button
                  data-testid="contact-submit-btn"
                  type="submit"
                  disabled={status === "loading"}
                  className="group inline-flex items-center justify-center gap-2 rounded-[6px] bg-midnight-ink px-8 py-4 font-sans text-sm font-semibold text-ivory transition-colors duration-300 hover:bg-accounting-green disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <><Loader2 size={16} className="animate-spin" /> Sending…</>
                  ) : (
                    <>Send enquiry <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
