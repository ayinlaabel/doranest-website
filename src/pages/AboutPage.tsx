import type { CSSProperties, ReactNode } from "react";
import aboutHeroImage from "../assets/images/about-hero.png";
import founderPortrait from "../assets/images/founder-portrait.png";
import { OurPurpose } from "../components/VisionMission";
import { Testimonials } from "../components/Testimonials";

function BadgeCheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3.1l1.7 1.3 2.1-.2.7 2 1.8 1.2-.5 2 .5 2-1.8 1.2-.7 2-2.1-.2L12 20.9l-1.7-1.3-2.1.2-.7-2-1.8-1.2.5-2-.5-2 1.8-1.2.7-2 2.1.2L12 3.1Z" />
      <path d="m8.9 12.1 2.1 2.1 4.2-4.4" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 20.1S4.2 15.4 4.2 9.8A4.1 4.1 0 0 1 12 7.7a4.1 4.1 0 0 1 7.8 2.1c0 5.6-7.8 10.3-7.8 10.3Z" />
    </svg>
  );
}

function ShieldLockIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3.2 5.2 5.8v5.4c0 4 2.8 7.5 6.8 9.2 4-1.7 6.8-5.2 6.8-9.2V5.8L12 3.2Z" />
      <circle cx="12" cy="10.6" r="1.3" />
      <path d="M12 11.9v2.4" />
    </svg>
  );
}

function PuzzleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M4.6 3.6h4.1a3.3 3.3 0 0 1 6.6 0h4.1a1 1 0 0 1 1 1v4.1a3.3 3.3 0 0 1 0 6.6v4.1a1 1 0 0 1-1 1H4.6a1 1 0 0 1-1-1v-4.1a3.3 3.3 0 0 1 0-6.6V4.6a1 1 0 0 1 1-1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ShieldFilledIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 2.6 4.7 5.4v5.7c0 4.4 3 8.2 7.3 10 4.3-1.8 7.3-5.6 7.3-10V5.4L12 2.6Z"
        fill="currentColor"
      />
      <path
        d="m8.7 11.7 2.2 2.2 4.4-4.5"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SmileFilledIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="currentColor" />
      <circle cx="9.1" cy="10" r="1.05" fill="#FFFFFF" />
      <circle cx="14.9" cy="10" r="1.05" fill="#FFFFFF" />
      <path
        d="M8.4 14c.9 1.3 2.1 2 3.6 2s2.7-.7 3.6-2"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth={1.7}
        strokeLinecap="round"
      />
    </svg>
  );
}

function QuoteMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M9.6 5.4H5.9a2.5 2.5 0 0 0-2.5 2.5V12a2.5 2.5 0 0 0 2.5 2.5h2.2c0 2.1-1.1 3.3-3.2 3.8v1.7c4-.3 6.4-3 6.4-7.5V7.9a2.5 2.5 0 0 0-1.7-2.5ZM20 5.4h-3.7a2.5 2.5 0 0 0-2.5 2.5V12a2.5 2.5 0 0 0 2.5 2.5h2.2c0 2.1-1.1 3.3-3.2 3.8v1.7c4-.3 6.4-3 6.4-7.5V7.9A2.5 2.5 0 0 0 20 5.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

const heroHighlights: { label: string; icon: ReactNode }[] = [
  {
    label: "Licensed Facility",
    icon: <BadgeCheckIcon className="h-[15px] w-[15px]" />,
  },
  { label: "Play-Based", icon: <HeartIcon className="h-[15px] w-[15px]" /> },
  {
    label: "24/7 Security",
    icon: <ShieldLockIcon className="h-[15px] w-[15px]" />,
  },
];

const philosophyPoints = [
  {
    title: "Safety First",
    description:
      "From rigorous staff background checks to child-proofed architecture and comprehensive hygiene protocols, peace of mind is our promise.",
    icon: <ShieldFilledIcon className="h-[19px] w-[19px]" />,
    iconClassName: "bg-[#F0EDF3] text-brand",
  },
  {
    title: "Emotional Development",
    description:
      "We focus heavily on EQ, teaching children how to identify their feelings, develop empathy, and build resilient interpersonal skills.",
    icon: <SmileFilledIcon className="h-[19px] w-[19px]" />,
    iconClassName: "bg-[#EEEFEF] text-ink",
  },
];

export function AboutPage() {
  return (
    <div className="overflow-x-clip bg-[#FBF9F4]">
      {/* Our story */}
      <section className="bg-[#FBF9F4]">
        <div className="mx-auto max-w-[1284px] px-6 md:px-10 lg:px-[40px]">
          <div className="grid gap-[44px] pb-[64px] pt-[44px] md:pt-[60px] lg:grid-cols-2 lg:items-start lg:gap-[48px] lg:pb-[140px] lg:pt-[85px]">
            <div className="min-w-0 lg:pt-[100px]">
              <p
                data-reveal="up"
                className="font-brand text-[11.5px] font-semibold uppercase leading-[18px] tracking-[0.13em] text-[#775A00]"
              >
                Our Story
              </p>

              <h1
                data-reveal="up"
                className="mt-[16px] font-brand text-[34px] font-extrabold leading-[1.16] tracking-[-0.7px] text-[#1B1C19] [--reveal-delay:90ms] sm:text-[42px] sm:leading-[1.15] lg:text-[46px]"
              >
                Nurturing minds,
                <br />
                <span className="italic text-brand">building foundations.</span>
              </h1>

              <p
                data-reveal="up"
                className="mt-[22px] max-w-[575px] font-brand text-[16px] leading-[28px] text-ink [--reveal-delay:180ms] sm:text-[17px] sm:leading-[29px]"
              >
                Working in a fast paced city like Lagos comes with wide range of
                challenges, demands and risk that has to be balanced with the
                demands of providing care for children.
              </p>
              <p
                data-reveal="up"
                className="mt-[22px] max-w-[575px] font-brand text-[16px] leading-[28px] text-ink [--reveal-delay:180ms] sm:text-[17px] sm:leading-[29px]"
              >
                Our services aim at taking up the responsibility of caring for
                children within the hours of 6:30am to 6:00pm, thus putting the
                minds of parents at rest and enabling them to be more productive
                at what they do.
              </p>

              <ul
                data-reveal="up"
                className="mt-[30px] flex flex-wrap items-center gap-[12px] [--reveal-delay:270ms]"
              >
                {heroHighlights.map((highlight) => (
                  <li
                    key={highlight.label}
                    className="inline-flex h-[38px] items-center gap-[8px] rounded-full bg-[#F8F3F6] px-[16px] font-brand text-[12.5px] font-semibold leading-none text-[#250F43]"
                  >
                    <span className="text-[#250F43]">{highlight.icon}</span>
                    {highlight.label}
                  </li>
                ))}
              </ul>
            </div>

            <div
              data-reveal="right"
              className="relative min-w-0 [--reveal-delay:140ms]"
            >
              <img
                src={aboutHeroImage}
                width={577}
                height={482}
                alt="A teacher and toddlers playing with wooden blocks in a bright Dora's Nest classroom"
                className="aspect-[577/482] w-full rounded-[26px] object-cover transition-transform duration-700 ease-out hover:scale-[1.015]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Care philosophy */}
      <section className="bg-[#F5F3EE]">
        <div className="mx-auto max-w-[1284px] px-6 md:px-10 lg:px-[40px]">
          <div className="pb-[72px] pt-[56px] lg:pb-[114px] lg:pt-[78px]">
            <h2
              data-reveal="up"
              className="text-center font-brand text-[26px] font-bold leading-[34px] tracking-[-0.3px] text-[#1B1C19] sm:text-[28px]"
            >
              Our Care Philosophy
            </h2>
            <p
              data-reveal="up"
              className="mx-auto mt-[14px] max-w-[760px] text-center font-brand text-[15px] leading-[25px] text-ink [--reveal-delay:90ms] sm:text-[16px] sm:leading-[26px]"
            >
              We blend structured learning with organic play, ensuring every day
              is an adventure in growth.
            </p>

            <div className="mt-[44px] grid gap-[20px] lg:mt-[70px] lg:grid-cols-[minmax(0,1fr)_390px] lg:gap-[22px]">
              <article
                data-reveal="up"
                className="card-lift relative overflow-hidden rounded-[16px] bg-white p-[26px] shadow-[0_20px_45px_-42px_rgba(63,72,75,0.45)] hover:shadow-[0_30px_55px_-40px_rgba(63,72,75,0.4)] sm:p-[36px] lg:min-h-[510px]"
              >
                <span className="flex h-[46px] w-[46px] items-center justify-center rounded-[10px] bg-[#F1EFE5] text-[#775A00]">
                  <PuzzleIcon className="h-[22px] w-[22px]" />
                </span>

                <h3 className="mt-[32px] font-brand text-[22px] font-bold leading-[30px] text-[#1B1C19]">
                  Play-Based Learning
                </h3>
                <p className="mt-[13px] max-w-[455px] font-brand text-[15px] leading-[24px] text-ink">
                  Children learn best when they are engaged and having fun. Our
                  curriculum is deeply rooted in play, allowing toddlers to
                  explore math, language, and science concepts naturally through
                  sensory bins, block building, and imaginative role-play. We
                  create environments that provoke curiosity.
                </p>

                <PuzzleIcon className="animate-float pointer-events-none absolute bottom-[80px] left-[255px] hidden h-[160px] w-[240px] text-[#F4F0E8] [animation-delay:0.8s] lg:block" />
              </article>

              <div className="flex flex-col gap-[20px]">
                {philosophyPoints.map((point, index) => (
                  <article
                    key={point.title}
                    data-reveal="up"
                    style={
                      {
                        "--reveal-delay": `${120 + index * 120}ms`,
                      } as CSSProperties
                    }
                    className="card-lift flex-1 rounded-[16px] bg-white p-[24px] shadow-[0_20px_45px_-42px_rgba(63,72,75,0.45)] hover:shadow-[0_30px_55px_-40px_rgba(63,72,75,0.4)]"
                  >
                    <span
                      className={`flex h-[38px] w-[38px] items-center justify-center rounded-[9px] ${point.iconClassName}`}
                    >
                      {point.icon}
                    </span>
                    <h3 className="mt-[24px] font-brand text-[19px] font-bold leading-[26px] text-[#1B1C19]">
                      {point.title}
                    </h3>
                    <p className="mt-[9px] font-brand text-[14px] leading-[22px] text-ink">
                      {point.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurPurpose />

      {/* Founder */}
      <section className="relative overflow-hidden bg-[#FBF9F4]">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="animate-float absolute left-[32%] top-[30px] h-[430px] w-[430px] rounded-full bg-[#F1F3EF]" />
          <div className="animate-float absolute right-[12%] top-[36px] h-[200px] w-[200px] rotate-45 rounded-[26px] bg-[#F1F3EF] [animation-delay:1.6s]" />
          <div className="animate-float absolute bottom-[-190px] left-[24%] h-[430px] w-[430px] rounded-full bg-[#F1F3EF] [animation-delay:3.2s]" />
        </div>

        <div className="relative mx-auto max-w-[1284px] px-6 md:px-10 lg:px-[40px]">
          <div className="py-[56px] lg:py-[80px] xl:py-[94px]">
            <article
              data-reveal="scale"
              className="rounded-[28px] bg-white px-[28px] py-[36px] shadow-[0_30px_70px_-55px_rgba(63,72,75,0.55)] sm:px-[48px] lg:px-[56px] lg:py-[56px] xl:px-[88px] xl:py-[70px]"
            >
              <div className="grid items-start gap-[36px] lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-[56px] xl:grid-cols-[350px_minmax(0,1fr)] xl:gap-[80px]">
                <div className="mx-auto w-full max-w-[350px] lg:max-w-[300px] xl:max-w-[350px]">
                  <img
                    src={founderPortrait}
                    width={340}
                    height={340}
                    alt="Olayinka Giwa, Director and Lead Visionary at Dora's Nest"
                    className="h-auto w-full transition-transform duration-700 ease-out hover:scale-[1.02]"
                  />
                </div>

                <div className="relative min-w-0 lg:-mt-[16px]">
                  <h2 className="font-brand text-[25px] font-bold leading-[34px] tracking-[-0.2px] text-[#1B1C19] sm:text-[26px]">
                    Meet Olayinka Giwa
                  </h2>
                  <p className="mt-[5px] font-brand text-[13px] font-semibold leading-[20px] text-brand">
                    Director &amp; Lead Visionary
                  </p>

                  <div className="relative mt-[20px]">
                    <QuoteMark className="pointer-events-none absolute -left-[8px] -top-[30px] h-[88px] w-[88px] text-[#F0EDF1]" />
                    <blockquote className="relative font-brand text-[16px] leading-[28px] text-ink sm:text-[17px]">
                      <p>
                        &ldquo;When I set out to create Dora&apos;s Nest, my
                        vision was simple yet profound: to build the kind of
                        space I searched for as a working mother in Lagos but
                        couldn&apos;t find. A place that doesn&apos;t just watch
                        your children, but truly sees them.
                      </p>
                      <p className="mt-[22px]">
                        We are committed to providing an environment where
                        excellence in early education meets the warmth of a
                        loving home. Every color on our walls, every toy on our
                        shelves, and every educator on our team is carefully
                        chosen to foster your child&apos;s unique
                        journey.&rdquo;
                      </p>
                    </blockquote>
                  </div>

                  <p className="mt-[22px] font-script text-[26px] leading-[36px] text-[#2F7B78]">
                    Olayinka G.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
