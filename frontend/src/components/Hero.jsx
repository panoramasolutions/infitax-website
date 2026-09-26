import { motion } from "framer-motion";
import {
  ArrowDown,
  Building2,
  Calculator,
  FileCheck2,
  Landmark,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { EASE } from "@/components/shared/motion";

const HEADLINE = ["Your Trusted Partner in", "Accounting, Taxation &", "Compliance."];

const SERVICE_SUMMARY = [
  { label: "Accounting", icon: Calculator },
  { label: "Income Tax", icon: Landmark },
  { label: "GST Compliance", icon: FileCheck2 },
  { label: "Business Support", icon: Building2 },
];

export const Hero = ({ onNavigate }) => {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative overflow-hidden bg-ivory bg-grain"
    >
      <div className="pointer-events-none absolute inset-0 bg-ledger opacity-35" />
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-brand-cyan/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-brand-magenta/5 blur-3xl" />
      <div className="relative mx-auto grid min-h-[100svh] max-w-[1600px] grid-cols-12 items-center gap-x-0 gap-y-10 px-5 pb-12 pt-24 md:px-10 md:pb-16 md:pt-28 lg:gap-x-12 lg:px-16">
        <div className="relative col-span-12 lg:col-span-8 xl:col-span-7">
          <img
            src={`${process.env.PUBLIC_URL}/infitax-logo.png`}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[43%] w-[min(110%,620px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.055] mix-blend-multiply"
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="relative z-10 mb-6 flex items-center gap-3 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-graphite sm:gap-5 sm:text-base sm:tracking-[0.28em]"
          >
            <span className="h-px w-8 shrink-0 brand-gradient sm:w-12" />
            InfiTax Accounting Services LLP
          </motion.div>

          <h1
            className="relative z-10 font-serif font-medium tracking-tight text-midnight-ink"
            style={{ fontSize: "clamp(2.35rem, 4.9vw, 5rem)", lineHeight: 1.02 }}
          >
            {HEADLINE.map((line, index) => (
              <span key={line} className="reveal-mask">
                <motion.span
                  className="block"
                  initial={{ y: "112%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.14 + index * 0.1 }}
                >
                  {line}{index < HEADLINE.length - 1 ? " " : null}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.55 }}
            style={{ transformOrigin: "left" }}
            className="relative z-10 mt-7 h-[2px] w-full max-w-xl brand-gradient"
          />

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.68 }}
            className="relative z-10 mt-8"
          >
            <button
              data-testid="hero-cta-services"
              type="button"
              onClick={() => onNavigate?.("#services")}
              className="group inline-flex items-center gap-2 rounded-[6px] btn-gradient px-7 py-4 font-sans text-sm font-semibold"
            >
              Explore our services
              <ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-1" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.83 }}
            className="relative z-10 mt-7 flex flex-wrap gap-x-6 gap-y-3 font-sans text-sm text-graphite/75"
          >
            <span className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-accounting-green" aria-hidden="true" />
              Professional and Transparent
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-accounting-green" aria-hidden="true" />
              Navi Mumbai · Supporting clients across India
            </span>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.42 }}
          className="col-span-12 hidden lg:col-span-4 lg:block xl:col-start-9"
          aria-label="Service overview"
        >
          <div className="rounded-[12px] border border-midnight-ink/12 bg-warm-white/90 p-7 shadow-2xl shadow-brand-purple/10 backdrop-blur-sm xl:p-8">
            <p className="font-sans text-sm font-semibold text-accounting-green">What we help with</p>
            <h2 className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-midnight-ink">
              Clear support for every financial requirement.
            </h2>

            <div className="mt-7 grid grid-cols-2 gap-3">
              {SERVICE_SUMMARY.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-[8px] border border-midnight-ink/10 bg-warm-paper p-4"
                >
                  <Icon size={20} className="text-accounting-green" aria-hidden="true" />
                  <p className="mt-3 font-sans text-sm font-semibold leading-snug text-midnight-ink">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-midnight-ink/10 pt-5">
              <p className="font-sans text-sm leading-relaxed text-graphite/80">
                Dependable support for businesses, professionals and individuals.
              </p>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
};
