import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/data/content";
import { Eyebrow, Reveal, MaskText } from "@/components/shared/motion";

export const FAQ = () => {
  const [open, setOpen] = useState(0);
  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="scroll-mt-20 bg-ivory bg-grain py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Eyebrow testId="faq-eyebrow">Questions</Eyebrow>
            </Reveal>
            <MaskText
              as="h2"
              className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-midnight-ink sm:text-5xl"
              lines={["Frequently", "asked", "questions."]}
            />
          </div>

          <div className="border-t border-muted-sage/30">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="border-b border-muted-sage/30">
                  <button
                    data-testid={`faq-toggle-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-xl text-midnight-ink md:text-2xl">
                      {item.q}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-muted-sage/40 text-midnight-ink">
                      {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-xl pb-6 font-sans text-base leading-relaxed text-graphite/85">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
