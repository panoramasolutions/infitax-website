import { motion } from "framer-motion";
import { ACCOUNTING_QUESTIONS } from "@/data/content";
import { ChapterLabel, MaskText, Reveal, BigMark, EASE } from "@/components/shared/motion";

export const AccountingInsight = () => {
  return (
    <section
      data-testid="insight-section"
      className="relative overflow-hidden bg-midnight-ink bg-grain py-28 text-ivory md:py-40"
    >
      <div className="pointer-events-none absolute inset-0 bg-ledger opacity-[0.05]" />
      <BigMark light className="absolute -left-6 top-10 text-[38vw] md:text-[24vw]">26AS</BigMark>

      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10 lg:px-16">
        <Reveal>
          <ChapterLabel label="Financial clarity" light className="mb-10" />
        </Reveal>

        <MaskText
          as="h2"
          className="max-w-4xl font-serif font-medium leading-[1.02] tracking-tight text-ivory text-4xl sm:text-5xl lg:text-7xl"
          lines={["Your numbers should", "tell you something."]}
        />

        <div className="mt-16 max-w-3xl lg:ml-auto">
          {ACCOUNTING_QUESTIONS.map((q, i) => (
            <motion.div
              key={q}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
              className="flex items-baseline gap-6 border-b border-ivory/12 py-6"
            >
              <span className="tabular font-mono text-xs text-muted-sage">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className="font-serif font-medium italic leading-tight text-ivory/90"
                style={{ fontSize: "clamp(1.6rem, 4vw, 3rem)" }}
              >
                {q}
              </span>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-14 font-serif text-2xl italic text-accounting-green md:text-3xl">
            That starts with accurate accounting.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
