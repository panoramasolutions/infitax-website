import { ArrowUpRight } from "lucide-react";
import { APPROACH } from "@/data/content";
import { Eyebrow, Reveal, MaskText, LineRule } from "@/components/shared/motion";

export const About = ({ onNavigate }) => {
  return (
    <section id="about" data-testid="about-section" className="relative scroll-mt-24 bg-ivory bg-grain py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-x-0 gap-y-14 lg:gap-x-12">
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <Eyebrow testId="about-eyebrow">More Than Accounting</Eyebrow>
            </Reveal>
            <MaskText
              as="h2"
              className="mt-6 font-serif font-medium leading-[1.02] tracking-tight text-midnight-ink text-4xl sm:text-5xl"
              lines={["Financial Clarity", "for Every Stage", "of Your Business."]}
            />
            <Reveal delay={0.1}>
              <div className="mt-8 max-w-md space-y-5 font-sans text-base leading-relaxed text-graphite/90">
                <p>
                  Accurate accounting is more than data entry. It helps businesses understand where
                  they stand, stay compliant and make better decisions.
                </p>
                <p>
                  We provide practical accounting, taxation and compliance support for businesses,
                  professionals and individuals across India.
                </p>
              </div>
              <button
                data-testid="about-cta"
                onClick={() => onNavigate?.("#contact")}
                className="group mt-8 inline-flex items-center gap-2 font-sans text-sm font-semibold text-accounting-green"
              >
                <span className="link-underline">Know More About Us</span>
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            {APPROACH.map((step, i) => (
              <Reveal key={step.no} delay={i * 0.07}>
                <LineRule delay={i * 0.05} />
                <div className="grid grid-cols-[auto_1fr] items-start gap-6 py-8">
                  <span className="font-serif text-3xl tabular text-accounting-green">{step.no}</span>
                  <div>
                    <h3 className="font-serif text-2xl text-midnight-ink md:text-3xl">{step.title}</h3>
                    <p className="mt-2 max-w-md font-sans text-sm leading-relaxed text-graphite/80">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <LineRule delay={0.1} />
          </div>
        </div>
      </div>
    </section>
  );
};
