import { BUSINESS, buildTelLink, buildMailLink, buildWhatsAppLink } from "@/config/business";
import { Linkedin, Instagram, MapPin, MessageCircle } from "lucide-react";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Tally Education", href: "#tally" },
  { label: "Contact us", href: "#contact" },
];

const SERVICE_LINKS = ["Accounting", "Income tax", "GST"];

export const Footer = ({ onNavigate }) => {
  return (
    <footer data-testid="footer" className="bg-midnight-ink bg-grain text-ivory">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src={`${process.env.PUBLIC_URL}/infitax-logo.png`}
                alt="InfiTax logo"
                className="h-9 w-auto"
              />
              <div className="font-serif text-2xl tracking-tight">InfiTax</div>
            </div>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-sage">
              {BUSINESS.tagline}
            </p>
            <div className="mt-6 overflow-hidden rounded-[8px] border border-ivory/15 bg-ivory/5">
              <iframe
                title="InfiTax office location"
                src={BUSINESS.mapEmbedUrl}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-44 w-full border-0"
              />
            </div>
            <a
              href={BUSINESS.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 font-sans text-xs font-semibold text-ivory/75 transition-colors hover:text-ivory"
            >
              <MapPin size={14} /> Open in Google Maps
            </a>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-sage">Navigate</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <button
                    data-testid={`footer-nav-${n.href.slice(1)}`}
                    onClick={() => onNavigate?.(n.href)}
                    className="link-underline font-sans text-sm text-ivory/75 transition-colors hover:text-ivory"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-sage">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_LINKS.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => onNavigate?.("#services")}
                    className="link-underline font-sans text-sm text-ivory/75 transition-colors hover:text-ivory"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-sage">Get in touch</h4>
            <ul className="mt-4 space-y-2.5 font-sans text-sm text-ivory/75">
              <li>
                <a href={buildTelLink()} className="link-underline hover:text-ivory">{BUSINESS.phone}</a>
              </li>
              <li>
                <a href={buildMailLink()} className="link-underline hover:text-ivory">{BUSINESS.email}</a>
              </li>
              <li className="leading-relaxed">{BUSINESS.address}</li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              <a href={BUSINESS.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-[6px] border border-ivory/20 text-ivory/80 transition-colors duration-300 hover:border-transparent hover:btn-gradient">
                <Linkedin size={15} />
              </a>
              <a href={BUSINESS.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-[6px] border border-ivory/20 text-ivory/80 transition-colors duration-300 hover:border-transparent hover:btn-gradient">
                <Instagram size={15} />
              </a>
              <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-9 w-9 items-center justify-center rounded-[6px] border border-ivory/20 text-ivory/80 transition-colors duration-300 hover:border-transparent hover:text-accounting-green">
                <MessageCircle size={15} />
              </a>
              <a href={BUSINESS.mapUrl} target="_blank" rel="noopener noreferrer" aria-label="Google Maps" className="flex h-9 w-9 items-center justify-center rounded-[6px] border border-ivory/20 text-ivory/80 transition-colors duration-300 hover:border-transparent hover:text-accounting-green">
                <MapPin size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-ivory/15 pt-8">
          <p className="max-w-3xl font-sans text-xs leading-relaxed text-ivory/45">
            Disclaimer: Information presented on this website is for general informational purposes
            and should not be considered professional tax or legal advice for a specific situation.
          </p>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="font-sans text-xs text-ivory/55">
              © 2026 {BUSINESS.name}. All rights reserved.
            </p>
            <div className="flex gap-6 font-sans text-xs text-ivory/55">
              <button className="link-underline hover:text-ivory">Privacy policy</button>
              <button className="link-underline hover:text-ivory">Terms</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
