import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { NAV_LINKS, MOBILE_NAV } from "@/data/content";
import { BUSINESS, buildTelLink, buildWhatsAppLink } from "@/config/business";
import { EASE } from "@/components/shared/motion";

export const Navbar = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const go = (href) => {
    setOpen(false);
    onNavigate?.(href);
  };

  return (
    <>
      <header
        data-testid="navbar"
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ivory/80 backdrop-blur-xl border-b border-muted-sage/25"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1600px] items-center justify-between px-5 transition-all duration-500 md:px-10 lg:px-16 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          <button
            data-testid="nav-logo"
            onClick={() => go("#home")}
            className="group flex items-center gap-2.5 text-left"
          >
            <img
              src={`${process.env.PUBLIC_URL}/infitax-logo.png`}
              alt="InfiTax logo"
              className="h-8 w-auto md:h-9"
            />
            <span className="leading-none">
              <span className="block font-serif text-xl tracking-tight text-midnight-ink">InfiTax</span>
              <span className="hidden font-mono text-[8px] uppercase tracking-[0.18em] text-muted-sage sm:block">
                Accounting Services LLP
              </span>
            </span>
          </button>

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                data-testid={`nav-link-${l.href.slice(1)}`}
                onClick={() => go(l.href)}
                className="link-underline font-sans text-sm font-medium text-graphite/90 transition-colors hover:text-midnight-ink"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              data-testid="nav-menu-toggle"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center text-midnight-ink lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col bg-midnight-ink lg:hidden"
          >
            <div className="pointer-events-none absolute inset-0 bg-ledger opacity-[0.05]" />
            <div className="relative flex items-center justify-between px-5 py-5">
              <div className="flex items-center gap-2.5">
                <img
                  src={`${process.env.PUBLIC_URL}/infitax-logo.png`}
                  alt="InfiTax logo"
                  className="h-8 w-auto"
                />
                <span className="font-serif text-2xl leading-none tracking-tight text-ivory">InfiTax</span>
              </div>
              <button
                data-testid="mobile-menu-close"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center text-ivory"
                aria-label="Close menu"
              >
                <X size={26} />
              </button>
            </div>
            <div className="relative flex flex-1 flex-col justify-center px-7">
              {MOBILE_NAV.map((l, i) => (
                <motion.button
                  key={l.href}
                  data-testid={`mobile-link-${l.href.slice(1)}`}
                  onClick={() => go(l.href)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 + i * 0.05, ease: EASE }}
                  className="flex w-full items-baseline border-b border-ivory/10 py-3 text-left"
                >
                  <span className="font-serif text-3xl text-ivory">{l.label}</span>
                </motion.button>
              ))}
            </div>
            <div className="relative grid grid-cols-2 gap-px border-t border-ivory/10 bg-ivory/10">
              <a
                href={buildTelLink()}
                className="flex items-center justify-center gap-2 bg-midnight-ink py-5 font-sans text-sm font-semibold text-ivory"
              >
                <Phone size={16} /> {BUSINESS.phone}
              </a>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-midnight-ink py-5 font-sans text-sm font-semibold text-accounting-green"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
