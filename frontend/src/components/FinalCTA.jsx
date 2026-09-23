import { ArrowUpRight } from "lucide-react";
import { BigMark, Reveal } from "@/components/shared/motion";

export const FinalCTA = ({ onNavigate }) => {
  return (
    <section
      data-testid="final-cta-section"
      className="relative overflow-hidden bg-warm-white bg-grain py-20 text-midnight-ink md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-ledger opacity-40" />
      <BigMark className="absolute -right-6 -bottom-8 text-[40vw] md:text-[26vw]">₹</BigMark>

      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 items-end gap-x-0 gap-y-8 lg:gap-x-12">
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3 text-sm font-semibold text-accounting-green">
                <span className="h-px w-8 brand-gradient" />
                Our Commitment
              </div>
              <h2 className="mt-5 max-w-4xl font-serif text-4xl font-medium leading-[1.04] tracking-tight text-midnight-ink sm:text-5xl lg:text-6xl">
                Your Compliance. Our Responsibility.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.08} className="col-span-12 lg:col-span-5">
            <div className="space-y-4 font-sans text-base leading-relaxed text-graphite/85 md:text-lg">
              <p>
                At InfiTax Accounting Services LLP, our goal is to provide dependable accounting
                and taxation support that allows you to focus on what matters most—growing your
                business.
              </p>
              <p>
                Let us take care of your accounts, taxes and compliance while you focus on your
                business.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <div className="mt-12 grid items-center gap-6 rounded-[10px] border border-midnight-ink/12 bg-warm-paper p-6 md:grid-cols-[1fr_auto] md:p-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-midnight-ink md:text-3xl">
                Need professional accounting or tax support?
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-graphite/85 md:text-base">
                Contact InfiTax Accounting Services LLP today to discuss your requirements.
              </p>
            </div>
            <button
              data-testid="final-cta-expert"
              type="button"
              onClick={() => onNavigate?.("#contact")}
              className="group inline-flex items-center justify-center gap-2 rounded-[6px] btn-gradient px-8 py-4 font-sans text-sm font-semibold"
            >
              Get in Touch
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 font-sans text-sm font-medium tracking-wide text-muted-sage">
            Accounting <span className="text-graphite/25">|</span> Income Tax{" "}
            <span className="text-graphite/25">|</span> GST{" "}
            <span className="text-graphite/25">|</span> Business Compliance
          </p>
        </Reveal>
      </div>
    </section>
  );
};
