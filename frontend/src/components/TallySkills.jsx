import { ArrowUpRight, Check, Download, MapPin, Phone } from "lucide-react";
import { BUSINESS } from "@/config/business";
import { Reveal } from "@/components/shared/motion";

const BENEFITS = [
  "Official Tally Education Certifications",
  "Hands-on Industry Training",
  "Access to Tally’s Official Placement Services",
];

const getBrochureDownloadUrl = (url) => {
  if (!url) return "";

  const driveFileId =
    url.match(/\/d\/([a-zA-Z0-9_-]+)/)?.[1] ||
    url.match(/[?&]id=([a-zA-Z0-9_-]+)/)?.[1];

  return driveFileId
    ? `https://drive.google.com/uc?export=download&id=${driveFileId}`
    : url;
};

export const TallySkills = ({ onNavigate }) => {
  const configuredBrochureUrl = getBrochureDownloadUrl(BUSINESS.tallyBrochureUrl);
  const brochureUrl =
    configuredBrochureUrl || `${process.env.PUBLIC_URL}/tally-education-brochure.jpeg`;

  return (
    <section
      id="tally"
      data-testid="tally-section"
      className="scroll-mt-24 bg-warm-white bg-grain py-20 md:py-24"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 text-sm font-semibold text-tally-accent">
                <span className="h-px w-8 brand-gradient" />
                Tally Education
              </div>
              <h2 className="mt-5 max-w-3xl font-serif text-4xl font-medium leading-[1.04] tracking-tight text-midnight-ink sm:text-5xl lg:text-6xl">
                Get Certified. Get Placed.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-6 max-w-2xl font-sans text-lg font-medium leading-relaxed text-midnight-ink">
                Big news! InfiTax Accounting Services LLP is now an empanelled Tally Skill
                Incubation Centre (TSIC).
              </p>
              <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-graphite/85">
                We don’t just teach you Tally; we help you get hired! By joining our TSIC, you get:
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <ul className="mt-5 space-y-3">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 font-sans text-sm font-semibold text-midnight-ink md:text-base">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accounting-green text-white">
                      <Check size={13} strokeWidth={2.5} aria-hidden="true" />
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-graphite/85">
                Bridge the gap between learning and earning. Gain the skills employers want and get
                the placement support you deserve.
              </p>

              <div className="mt-6 space-y-3 border-t border-midnight-ink/15 pt-5">
                <div className="flex items-start gap-3 font-sans text-sm leading-relaxed text-graphite/90">
                  <MapPin size={17} className="mt-0.5 shrink-0 text-accounting-green" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-midnight-ink">Visit us at:</strong> Office
                    No 1, KVK Xenia CHS, Plot No 53, Sector 4, Karanjade, Panvel - 410206.
                  </span>
                </div>
                <div className="flex items-center gap-3 font-sans text-sm text-graphite/90">
                  <Phone size={17} className="shrink-0 text-accounting-green" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-midnight-ink">Call/WA:</strong>{" "}
                    <a className="link-underline" href="tel:+918850120408">8850120408</a>{" / "}
                    <a className="link-underline" href="tel:+919819746501">9819746501</a>
                  </span>
                </div>
              </div>

              <p className="mt-6 font-sans text-lg font-semibold text-midnight-ink">
                Enroll today and secure your future!
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  data-testid="tally-cta-enquire"
                  type="button"
                  onClick={() => onNavigate?.("#contact")}
                  className="group inline-flex items-center gap-2 rounded-[6px] btn-gradient px-6 py-3.5 font-sans text-sm font-semibold"
                >
                  Enroll today
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                <a
                  data-testid="tally-download-brochure"
                  href={brochureUrl}
                  download={configuredBrochureUrl ? undefined : "InfiTax-Tally-Education-Brochure.jpeg"}
                  target={configuredBrochureUrl ? "_blank" : undefined}
                  rel={configuredBrochureUrl ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-[6px] border border-midnight-ink/20 px-6 py-3.5 font-sans text-sm font-semibold text-midnight-ink transition-colors hover:border-accounting-green hover:text-accounting-green"
                >
                  <Download size={16} aria-hidden="true" />
                  Download brochure
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="overflow-hidden rounded-[10px] border border-midnight-ink/15 bg-warm-paper p-2 shadow-xl shadow-midnight-ink/10">
              <img
                src={`${process.env.PUBLIC_URL}/tally-education-brochure.jpeg`}
                alt="Tally Education certification and placement services brochure"
                loading="lazy"
                className="h-auto w-full rounded-[6px] object-contain"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
