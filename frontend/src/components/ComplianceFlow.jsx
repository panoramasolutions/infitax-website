import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GST_FLOW, TDS_FLOW } from "@/data/content";
import { ChapterLabel, MaskText, Reveal, BigMark, EASE } from "@/components/shared/motion";

const Journey = ({ label, steps, accent, testId }) => (
  <div data-testid={testId} className="py-10">
    <div className="mb-6 flex items-center gap-4">
      <span className="font-serif text-3xl text-midnight-ink">{label}</span>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: EASE }}
        style={{ transformOrigin: "left" }}
        className="h-px flex-1 bg-midnight-ink/15"
      />
    </div>
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-2">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2 md:contents">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE, delay: i * 0.12 }}
            className="flex items-baseline gap-2 md:flex-1"
          >
            <span className="tabular font-mono text-[10px]" style={{ color: accent }}>
              0{i + 1}
            </span>
            <span className="font-sans text-sm font-semibold uppercase tracking-wide text-midnight-ink md:text-base">
              {step}
            </span>
          </motion.div>
          {i < steps.length - 1 && (
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 + 0.1 }}
              className="hidden font-mono text-muted-sage md:inline"
            >
              →
            </motion.span>
          )}
        </div>
      ))}
    </div>
  </div>
);

export const ComplianceFlow = ({ onNavigate }) => {
  return (
    <section
      id="compliance"
      data-testid="compliance-section"
      className="relative scroll-mt-24 overflow-hidden bg-warm-paper bg-grain py-24 md:py-32"
    >
      <BigMark className="absolute -right-4 bottom-0 text-[30vw] md:text-[20vw]">3B</BigMark>
      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-y-12">
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <ChapterLabel label="Taxation" className="mb-8" />
            </Reveal>
            <MaskText
              as="h2"
              className="font-serif font-medium leading-[1.02] tracking-tight text-midnight-ink text-4xl sm:text-5xl lg:text-6xl"
              lines={["Compliance", "without", "last-minute", "chaos."]}
            />
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-sm font-sans text-base leading-relaxed text-graphite/85">
                Invoices, deadlines, reconciliations and filings pile up quickly. We structure the
                whole process so nothing slips.
              </p>
              <button
                data-testid="compliance-cta"
                onClick={() => onNavigate?.("#contact")}
                className="group mt-8 inline-flex items-center gap-2 font-sans text-sm font-semibold text-accounting-green"
              >
                <span className="link-underline">Get compliance assistance</span>
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <Journey label="GST" steps={GST_FLOW} accent="#3E63D6" testId="gst-flow" />
            <div className="h-px w-full bg-midnight-ink/10" />
            <Journey label="TDS" steps={TDS_FLOW} accent="#EC008C" testId="tds-flow" />
          </div>
        </div>
      </div>
    </section>
  );
};
