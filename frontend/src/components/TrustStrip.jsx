import Marquee from "react-fast-marquee";
import { TRUST_ITEMS } from "@/data/content";

export const TrustStrip = () => {
  return (
    <section
      data-testid="trust-strip"
      className="overflow-hidden border-y border-muted-sage/25 bg-warm-paper py-4"
      aria-label="What we do"
    >
      <div className="w-full overflow-hidden">
        <Marquee gradient={false} speed={34} pauseOnHover>
          {TRUST_ITEMS.concat(TRUST_ITEMS).map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center">
              <span className="px-7 font-sans text-sm font-semibold tracking-wide text-midnight-ink/75 md:text-base">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accounting-green" aria-hidden="true" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
