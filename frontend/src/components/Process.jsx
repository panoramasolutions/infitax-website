import { ArrowUpRight } from "lucide-react";
import { PROCESS } from "@/data/content";
import { Eyebrow, MaskText, Reveal, LineRule } from "@/components/shared/motion";

export const Process = ({ onNavigate }) => {
  return (
    <section data-testid="process-section" className="bg-ivory bg-grain py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-16">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow testId="process-eyebrow">Getting started</Eyebrow>
            </Reveal>
            <MaskText
              as="h2"
              className="mt-6 font-serif font-medium leading-[1.02] tracking-tight text-midnight-ink text-4xl sm:text-5xl"
              lines={["Support without", "complicated onboarding."]}
            />
          </div>
          <Reveal delay={0.1}>
            <button
              data-testid="process-cta"
              onClick={() => onNavigate?.("#contact")}
              className="group inline-flex items-center gap-2 rounded-[6px] bg-midnight-ink px-6 py-3.5 font-sans text-sm font-semibold text-ivory transition-colors duration-300 hover:bg-accounting-green"
            >
              Start a conversation
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-10 md:grid-cols-4 md:gap-x-10">
          {PROCESS.map((step, i) => (
            <Reveal key={step.no} delay={i * 0.08}>
              <div className="md:border-l md:border-midnight-ink/15 md:pl-6">
                <span className="font-serif text-5xl tabular leading-none text-accounting-green md:text-6xl">
                  {step.no}
                </span>
                <h3 className="mt-6 font-serif text-2xl leading-snug text-midnight-ink">{step.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-graphite/80">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-16"><LineRule /></div>
      </div>
    </section>
  );
};
