import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { SERVICES } from "@/data/content";
import { EASE, Reveal } from "@/components/shared/motion";

export const Services = () => {
  const [active, setActive] = useState(0);
  const current = SERVICES[active];

  return (
    <section
      id="services"
      data-testid="services-section"
      className="scroll-mt-24 bg-ivory bg-grain py-20 md:py-24"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-16">
        <Reveal>
          <div className="flex items-center gap-3 text-sm font-semibold text-accounting-green">
            <span className="h-px w-8 brand-gradient" />
            Our Services
          </div>
          <p className="mt-5 max-w-3xl font-sans text-base leading-relaxed text-graphite/85 md:text-lg">
              At InfiTax Accounting Services LLP, we provide reliable accounting, taxation, GST
              and business compliance services designed to help businesses stay financially
              organized, compliant and focused on growth.
          </p>
        </Reveal>

        <div
          role="tablist"
          aria-label="Services"
          className="mt-12 grid grid-cols-2 gap-2 lg:grid-cols-4"
        >
          {SERVICES.map((service, index) => {
            const isActive = active === index;

            return (
              <button
                key={service.id}
                id={`service-tab-${service.id}`}
                data-testid={`service-tab-${service.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`service-panel-${service.id}`}
                onClick={() => setActive(index)}
                className={`flex min-h-16 items-center justify-center rounded-[8px] border px-4 py-3 text-center transition-all duration-300 md:px-5 ${
                  isActive
                    ? "border-midnight-ink bg-midnight-ink text-ivory shadow-lg"
                    : "border-midnight-ink/15 bg-warm-white text-midnight-ink hover:border-accounting-green/60"
                }`}
              >
                <span className="font-sans text-sm font-semibold leading-snug md:text-base">
                  {service.title}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-3 overflow-hidden rounded-[10px] border border-midnight-ink/15 bg-warm-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              id={`service-panel-${current.id}`}
              data-testid={`service-${current.id}`}
              role="tabpanel"
              aria-labelledby={`service-tab-${current.id}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease: EASE }}
              className="grid grid-cols-12 gap-x-0 gap-y-8 p-6 md:p-8 lg:gap-x-12 lg:p-10"
            >
              <div className="col-span-12 self-start lg:col-span-4">
                <img
                  src={`${process.env.PUBLIC_URL}/${current.image}`}
                  alt={`${current.title} illustration`}
                  loading="lazy"
                  className="aspect-[3/2] w-full rounded-[8px] border border-midnight-ink/10 object-cover"
                />
              </div>

              <div className="col-span-12 lg:col-span-3">
                <p className="font-sans text-sm font-semibold text-accounting-green">
                  {current.lead}
                </p>
                <p className="mt-3 max-w-lg font-sans text-sm leading-relaxed text-graphite/85 md:text-base">
                  {current.summary}
                </p>

              </div>

              <div className="col-span-12 lg:col-span-5">
                <p className="font-sans text-sm font-semibold text-midnight-ink">
                  {current.itemsLabel}
                </p>
                <div className="mt-3 grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {current.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 border-b border-muted-sage/25 py-3"
                    >
                      <Check
                        size={15}
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-accounting-green"
                      />
                      <span className="font-sans text-sm leading-snug text-graphite/90">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {current.noteLabel && (
                <div className="col-span-12 -mx-6 -mb-6 mt-2 border-t border-midnight-ink/12 bg-warm-paper/80 px-6 py-5 md:-mx-8 md:-mb-8 md:px-8 lg:-mx-10 lg:-mb-10 lg:px-10 lg:py-6">
                  <div className="grid gap-2 md:grid-cols-[180px_1fr] md:items-start md:gap-6">
                    <p className="font-sans text-sm font-semibold text-midnight-ink">
                      {current.noteLabel}
                    </p>
                    <p className="font-sans text-sm leading-relaxed text-graphite/85 md:text-base">
                      {current.message}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
