import { Check } from "lucide-react";
import { WHY_US } from "@/data/content";
import { Reveal } from "@/components/shared/motion";

export const WhyUs = () => {
  return (
    <section
      id="why-us"
      data-testid="why-us-section"
      className="scroll-mt-24 bg-warm-paper bg-grain py-20 md:py-24"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 items-end gap-x-0 gap-y-6 lg:gap-x-12">
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3 text-sm font-semibold text-accounting-green">
                <span className="h-px w-8 brand-gradient" />
                Why Choose InfiTax?
              </div>
              <h2 className="mt-5 max-w-4xl font-serif text-4xl font-medium leading-[1.05] tracking-tight text-midnight-ink sm:text-5xl lg:text-6xl">
                Reliable. Professional. Business-Focused.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.08} className="col-span-12 lg:col-span-5">
            <p className="max-w-xl font-sans text-base leading-relaxed text-graphite/85 md:text-lg">
              We believe accounting and compliance should be simple, transparent and hassle-free.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((reason, index) => (
            <Reveal key={reason.title} delay={(index % 3) * 0.05}>
              <article className="h-full rounded-[8px] border border-midnight-ink/12 bg-warm-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accounting-green/45 hover:shadow-lg hover:shadow-midnight-ink/5 md:p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accounting-green text-white">
                  <Check size={19} strokeWidth={2.4} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold text-midnight-ink md:text-2xl">
                  {reason.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-graphite/85 md:text-base">
                  {reason.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
