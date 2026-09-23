import { ShieldCheck } from "lucide-react";
import { ASSOCIATIONS } from "@/data/content";
import { ChapterLabel, MaskText, Reveal, LineRule } from "@/components/shared/motion";

export const Associations = () => {
  return (
    <section
      id="associations"
      data-testid="associations-section"
      className="scroll-mt-24 bg-warm-white bg-grain py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-x-0 gap-y-12 lg:gap-x-12">
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <ChapterLabel label="Associations" className="mb-8" />
            </Reveal>
            <MaskText
              as="h2"
              className="font-serif font-medium leading-[1.02] tracking-tight text-midnight-ink text-4xl sm:text-5xl"
              lines={["Credentials you", "can rely on."]}
            />
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-sm font-sans text-base leading-relaxed text-graphite/85">
                Our professional standing and Tally education empanelment underpin the quality and
                credibility of the services we deliver.
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            {ASSOCIATIONS.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <LineRule gradient delay={i * 0.05} />
                <div className="flex items-start gap-5 py-8">
                  <ShieldCheck size={26} className="mt-1 shrink-0 text-brand-purple" />
                  <div>
                    <h3 className="font-serif text-2xl text-midnight-ink md:text-3xl">{a.title}</h3>
                    <p className="mt-2 max-w-lg font-sans text-sm leading-relaxed text-graphite/80">
                      {a.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
            <LineRule gradient delay={0.1} />
          </div>
        </div>
      </div>
    </section>
  );
};
