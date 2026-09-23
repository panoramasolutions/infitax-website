import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AUDIENCE } from "@/data/content";
import { ChapterLabel, Reveal, EASE } from "@/components/shared/motion";

// Asymmetric offsets so the big words sit at different positions.
const OFFSETS = ["lg:ml-0", "lg:ml-40", "lg:ml-20", "lg:ml-56", "lg:ml-10", "lg:ml-32"];

export const Audience = () => {
  const [active, setActive] = useState(-1);
  return (
    <section
      id="who-we-serve"
      data-testid="audience-section"
      className="scroll-mt-24 bg-ivory bg-grain py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-16">
        <Reveal>
          <ChapterLabel label="Who we serve" className="mb-10" />
        </Reveal>
        <Reveal>
          <p className="font-serif text-2xl italic text-graphite/70 md:text-3xl">We work with</p>
        </Reveal>

        <div className="mt-6">
          {AUDIENCE.map((a, i) => (
            <div
              key={a.title}
              data-testid={`audience-${i}`}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(-1)}
              onClick={() => setActive(active === i ? -1 : i)}
              className={`group flex flex-col py-2 lg:flex-row lg:items-center lg:gap-10 ${OFFSETS[i]}`}
            >
              <h3
                className={`font-serif font-medium leading-[1.02] tracking-tight transition-colors duration-300 ${
                  active === i ? "text-accounting-green" : "text-midnight-ink"
                }`}
                style={{ fontSize: "clamp(2.4rem, 7vw, 6rem)" }}
              >
                {a.title}
              </h3>
              <div className="min-h-[1.5rem] lg:w-72">
                <AnimatePresence mode="wait">
                  {active === i && (
                    <motion.p
                      key={a.title}
                      initial={{ opacity: 0, x: 14 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="font-sans text-sm leading-relaxed text-graphite/85"
                    >
                      {a.text}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
