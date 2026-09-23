import { Eye, Target } from "lucide-react";
import { ChapterLabel, Reveal } from "@/components/shared/motion";

export const AboutFirm = () => {
  return (
    <section
      id="about"
      data-testid="about-firm-section"
      className="scroll-mt-24 bg-warm-white bg-grain py-20 md:py-24"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-y-8 lg:gap-x-12">
          <Reveal className="col-span-12 lg:col-span-5">
            <ChapterLabel label="About the Firm" />
            <h2 className="mt-5 max-w-xl font-serif text-4xl font-medium leading-[1.06] tracking-tight text-midnight-ink sm:text-5xl lg:text-6xl">
              Built on trust. Growing with purpose.
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="col-span-12 lg:col-span-7">
            <p className="max-w-3xl font-sans text-base leading-relaxed text-graphite/85 md:text-lg">
              Established in June 2018 as Infinity Financial Consultancy by childhood friends
              Ajinkya Prakash Karve and Aditya Ajit Jadhav, the firm evolved into InfiTax
              Accounting Services LLP in September 2025 to scale operations globally. We deliver
              end-to-end bookkeeping, statutory compliance, direct and indirect taxation, and
              audit solutions tailored to businesses and individuals.
            </p>

            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <article className="h-full rounded-[8px] border border-midnight-ink/12 bg-warm-paper p-6 md:p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accounting-green text-white">
                  <Eye size={19} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-midnight-ink">Vision</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-graphite/85 md:text-base">
                  To be a globally recognized accounting firm driving financial clarity,
                  compliance, and growth for businesses of all scales.
                </p>
              </article>

              <article className="h-full rounded-[8px] border border-midnight-ink/12 bg-warm-paper p-6 md:p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accounting-green text-white">
                  <Target size={19} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-midnight-ink">Mission</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-graphite/85 md:text-base">
                  To integrate every business into a structured, transparent accounting
                  ecosystem—ensuring full compliance, zero penalties, and long-term stability.
                </p>
              </article>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
