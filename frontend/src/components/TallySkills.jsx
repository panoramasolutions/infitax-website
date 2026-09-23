import { ArrowUpRight, Check, Download } from "lucide-react";
import { BUSINESS } from "@/config/business";
import { ChapterLabel, Reveal } from "@/components/shared/motion";

const BENEFITS = [
  "Official Tally Education Certifications",
  "Hands-on Industry Training",
  "Access to Tally’s Official Placement Services",
];

const TALLY_COURSES = [
  ["Tally Essential Level 1", "Accounting & Reporting", "35 Hrs"],
  ["Tally Essential Level 2", "Accounts Payable & Accounts Receivable", "35 Hrs"],
  ["Tally Essential Level 3", "Taxation & Compliance", "37 Hrs"],
  ["Tally Essential Comprehensive", "Level 1 to 3", "107 Hrs"],
  ["Tally Professional", "Accounting, Finance, Administration & HR", "100 Hrs"],
  ["Office Automation", "Word, Excel, PowerPoint", "25 Hrs"],
  ["Complete Guide to Payroll and Income Tax", "", "35 Hrs"],
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
              <ChapterLabel label="Tally Education" />
              <h2 className="mt-5 max-w-3xl font-serif text-4xl font-medium leading-[1.04] tracking-tight text-midnight-ink sm:text-5xl lg:text-6xl">
                <span className="block">Get Certified.</span>
                <span className="block">Get Placed.</span>
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
                  Download Brochure
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="rounded-[10px] border border-midnight-ink/15 bg-ivory p-6 shadow-xl shadow-midnight-ink/10 md:p-8">
              <div className="flex items-center justify-between gap-5 border-b border-midnight-ink/12 pb-6">
                <img
                  src={`${process.env.PUBLIC_URL}/tally-education-logo.png`}
                  alt="Tally Education"
                  className="h-16 w-auto max-w-[190px] object-contain sm:h-20 sm:max-w-[230px]"
                />
                <span className="rounded-full bg-[#95C11F]/15 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#5D7F08]">
                  Courses
                </span>
              </div>

              <h3 className="mt-6 font-serif text-3xl font-semibold tracking-tight text-midnight-ink">
                Tally Course List
              </h3>

              <ol className="mt-4 divide-y divide-midnight-ink/10">
                {TALLY_COURSES.map(([title, detail, duration], index) => (
                  <li key={title} className="grid grid-cols-[32px_1fr_auto] items-start gap-3 py-3.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#95C11F]/15 font-mono text-xs font-semibold text-[#5D7F08]">
                      {index + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="font-sans text-sm font-semibold leading-snug text-midnight-ink md:text-base">
                        {title}
                      </p>
                      {detail && (
                        <p className="mt-1 font-sans text-xs leading-relaxed text-graphite/75 md:text-sm">
                          {detail}
                        </p>
                      )}
                    </div>
                    <span className="whitespace-nowrap rounded-full bg-warm-paper px-2.5 py-1 font-mono text-[10px] font-semibold text-accounting-green md:text-xs">
                      {duration}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
