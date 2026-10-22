import type { ComponentType, CSSProperties } from 'react';

interface IconProps {
  className?: string;
}

export function VisionIcon({ className }: IconProps) {
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
      <path d="M2.7 12S6.1 6.2 12 6.2 21.3 12 21.3 12 17.9 17.8 12 17.8 2.7 12 2.7 12Z" />
      <circle cx="12" cy="12" r="3.1" />
    </svg>
  );
}

export function MissionIcon({ className }: IconProps) {
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
      <circle cx="12" cy="12" r="8.6" />
      <path d="m14.9 9.1-1.7 4.2-4.2 1.7 1.7-4.2 4.2-1.7Z" />
    </svg>
  );
}

function WarmthIcon({ className }: IconProps) {
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
      <circle cx="12" cy="12" r="4.1" />
      <path d="M12 2.8v2.4M12 18.8v2.4M4.5 4.5l1.7 1.7M17.8 17.8l1.7 1.7M2.8 12h2.4M18.8 12h2.4M4.5 19.5l1.7-1.7M17.8 6.2l1.7-1.7" />
    </svg>
  );
}

function HumilityIcon({ className }: IconProps) {
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
      <path d="M12 20.4V11.4" />
      <path d="M12 11.4C12 7.7 9.2 5 5.4 5c0 3.7 2.8 6.4 6.6 6.4Z" />
      <path d="M12 14.2c0-3.2 2.4-5.6 5.6-5.6 0 3.2-2.4 5.6-5.6 5.6Z" />
      <path d="M7.4 20.4h9.2" />
    </svg>
  );
}

function IntegrityIcon({ className }: IconProps) {
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
      <path d="m9.1 11.9 2 2 3.8-4" />
    </svg>
  );
}

function TeamworkIcon({ className }: IconProps) {
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
      <circle cx="9.2" cy="8.6" r="3.1" />
      <path d="M3.4 19.4c0-3 2.6-5.4 5.8-5.4s5.8 2.4 5.8 5.4" />
      <path d="M15.6 5.8a3.1 3.1 0 0 1 0 5.9" />
      <path d="M17.4 14.3c1.9.6 3.2 2.3 3.2 4.4" />
    </svg>
  );
}

function EmpathyIcon({ className }: IconProps) {
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

interface CoreValue {
  name: string;
  icon: ComponentType<IconProps>;
}

export const visionStatement =
  'To be the choice child care center within the Lagos Metropolis.';

export const missionStatement =
  'To provide the right care and start for children from 3 months to 3 years in a warm and conducive environment while retaining the trust and confidence of Parents/Guardians.';

export const coreValues: CoreValue[] = [
  { name: 'Warmth', icon: WarmthIcon },
  { name: 'Humility', icon: HumilityIcon },
  { name: 'Integrity', icon: IntegrityIcon },
  { name: 'Team work', icon: TeamworkIcon },
  { name: 'Empathy', icon: EmpathyIcon },
];

/** Compact vision, mission and values block for the landing page. */
export function VisionMission() {
  return (
    <section id="vision" className="bg-[#F5F3EE]">
      <div className="mx-auto max-w-[1284px] px-6 md:px-10 lg:px-[66px]">
        <div className="py-[68px] lg:py-[92px]">
          <div className="rounded-[30px] bg-white px-[24px] py-[36px] shadow-[0_30px_70px_-60px_rgba(63,72,75,0.55)] sm:px-[40px] sm:py-[48px] lg:px-[64px] lg:py-[62px]">
            <div className="text-center">
              <p
                data-reveal="up"
                className="font-brand text-[11.5px] font-semibold uppercase leading-[18px] tracking-[0.13em] text-[#775A00]"
              >
                Our Purpose
              </p>
              <h2
                data-reveal="up"
                className="mt-[14px] font-brand text-[26px] font-bold leading-[34px] tracking-[-0.3px] text-brand [--reveal-delay:80ms] sm:text-[30px] sm:leading-[38px]"
              >
                The heart behind everything we do
              </h2>
              <p
                data-reveal="up"
                className="mx-auto mt-[14px] max-w-[620px] font-brand text-[15px] leading-[25px] text-ink [--reveal-delay:150ms] sm:text-[16px] sm:leading-[26px]"
              >
                A clear vision, a steady mission, and five values that shape every day at
                Dora&apos;s Nest.
              </p>
            </div>

            <div className="mt-[36px] grid gap-[18px] lg:mt-[48px] lg:grid-cols-2 lg:gap-[22px]">
              <article
                data-reveal="up"
                className="rounded-[20px] bg-[#FBF9F4] p-[26px] sm:p-[32px] [--reveal-delay:120ms]"
              >
                <span className="flex h-[46px] w-[46px] items-center justify-center rounded-[12px] bg-[#F1EFE5] text-[#775A00]">
                  <VisionIcon className="h-[22px] w-[22px]" />
                </span>
                <h3 className="mt-[22px] font-brand text-[11.5px] font-semibold uppercase leading-[18px] tracking-[0.1em] text-[#775A00]">
                  Our Vision
                </h3>
                <p className="mt-[10px] font-brand text-[17px] font-semibold leading-[28px] text-[#1B1C19] sm:text-[18px] sm:leading-[30px]">
                  {visionStatement}
                </p>
              </article>

              <article
                data-reveal="up"
                className="rounded-[20px] bg-[#FBF9F4] p-[26px] sm:p-[32px] [--reveal-delay:220ms]"
              >
                <span className="flex h-[46px] w-[46px] items-center justify-center rounded-[12px] bg-[#F0EDF3] text-brand">
                  <MissionIcon className="h-[22px] w-[22px]" />
                </span>
                <h3 className="mt-[22px] font-brand text-[11.5px] font-semibold uppercase leading-[18px] tracking-[0.1em] text-brand">
                  Our Mission
                </h3>
                <p className="mt-[10px] font-brand text-[15px] leading-[26px] text-ink sm:text-[15.5px] sm:leading-[27px]">
                  {missionStatement}
                </p>
              </article>
            </div>

            <div
              data-reveal="up"
              className="mt-[36px] border-t border-[#EFECE5] pt-[28px] lg:mt-[44px] lg:pt-[34px]"
            >
              <p className="text-center font-brand text-[11.5px] font-semibold uppercase leading-[18px] tracking-[0.13em] text-[#775A00]">
                Our Values
              </p>
              <ul className="mt-[18px] flex flex-wrap justify-center gap-[10px]">
                {coreValues.map((value) => (
                  <li
                    key={value.name}
                    className="inline-flex h-[42px] items-center gap-[9px] rounded-full border border-[#EFECE5] bg-[#FBF9F4] px-[17px] font-brand text-[13px] font-semibold leading-none text-brand"
                  >
                    <value.icon className="h-[16px] w-[16px] text-[#775A00]" />
                    {value.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Expanded vision, mission and values section for the About page. */
export function OurPurpose() {
  return (
    <section className="bg-[#FBF9F4]">
      <div className="mx-auto max-w-[1284px] px-6 md:px-10 lg:px-[40px]">
        <div className="pb-[8px] pt-[8px] lg:pb-[16px] lg:pt-[12px]">
          <div className="text-center">
            <p
              data-reveal="up"
              className="font-brand text-[11.5px] font-semibold uppercase leading-[18px] tracking-[0.13em] text-[#775A00]"
            >
              Our Purpose
            </p>
            <h2
              data-reveal="up"
              className="mt-[14px] font-brand text-[26px] font-bold leading-[34px] tracking-[-0.3px] text-[#1B1C19] [--reveal-delay:80ms] sm:text-[28px]"
            >
              Our Vision, Mission &amp; Values
            </h2>
            <p
              data-reveal="up"
              className="mx-auto mt-[14px] max-w-[700px] font-brand text-[15px] leading-[25px] text-ink [--reveal-delay:150ms] sm:text-[16px] sm:leading-[26px]"
            >
              The promise we make to every family, and the principles our team lives by each day.
            </p>
          </div>

          <div className="mt-[36px] grid gap-[20px] lg:mt-[46px] lg:grid-cols-2 lg:gap-[22px]">
            <article
              data-reveal="up"
              className="relative overflow-hidden rounded-[24px] bg-brand p-[30px] shadow-[0_24px_50px_-40px_rgba(63,72,75,0.55)] sm:p-[40px] [--reveal-delay:120ms]"
            >
              <span
                className="pointer-events-none absolute -right-[60px] -top-[70px] h-[210px] w-[210px] rounded-full border border-white/10"
                aria-hidden="true"
              />
              <span
                className="pointer-events-none absolute -bottom-[90px] -left-[50px] h-[180px] w-[180px] rounded-full border border-white/10"
                aria-hidden="true"
              />

              <span className="relative flex h-[46px] w-[46px] items-center justify-center rounded-[12px] bg-white/15 text-white">
                <VisionIcon className="h-[22px] w-[22px]" />
              </span>
              <h3 className="relative mt-[22px] font-brand text-[11.5px] font-semibold uppercase leading-[18px] tracking-[0.1em] text-white/70">
                Our Vision
              </h3>
              <p className="relative mt-[10px] font-brand text-[20px] font-semibold leading-[32px] text-white sm:text-[22px] sm:leading-[34px]">
                {visionStatement}
              </p>
            </article>

            <article
              data-reveal="up"
              className="rounded-[24px] bg-white p-[30px] shadow-[0_20px_45px_-42px_rgba(63,72,75,0.45)] sm:p-[40px] [--reveal-delay:220ms]"
            >
              <span className="flex h-[46px] w-[46px] items-center justify-center rounded-[12px] bg-[#F0EDF3] text-brand">
                <MissionIcon className="h-[22px] w-[22px]" />
              </span>
              <h3 className="mt-[22px] font-brand text-[11.5px] font-semibold uppercase leading-[18px] tracking-[0.1em] text-brand">
                Our Mission
              </h3>
              <p className="mt-[10px] font-brand text-[15px] leading-[26px] text-ink sm:text-[16px] sm:leading-[28px]">
                {missionStatement}
              </p>
            </article>
          </div>

          <div className="mt-[40px] lg:mt-[52px]">
            <h3
              data-reveal="up"
              className="text-center font-brand text-[11.5px] font-semibold uppercase leading-[18px] tracking-[0.13em] text-[#775A00]"
            >
              Our Values
            </h3>

            <ul className="mt-[20px] grid grid-cols-2 gap-[14px] sm:grid-cols-3 lg:grid-cols-5 lg:gap-[16px]">
              {coreValues.map((value, index) => (
                <li
                  key={value.name}
                  data-reveal="up"
                  style={{ '--reveal-delay': `${index * 90}ms` } as CSSProperties}
                  className="card-lift relative overflow-hidden rounded-[16px] bg-white p-[20px] shadow-[0_20px_45px_-42px_rgba(63,72,75,0.45)] hover:shadow-[0_30px_55px_-40px_rgba(63,72,75,0.4)] lg:p-[22px]"
                >
                  <span className="absolute right-[18px] top-[16px] font-brand text-[11px] font-semibold leading-none text-[#C8C2B4]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="flex h-[36px] w-[36px] items-center justify-center rounded-[9px] bg-[#F1EFE5] text-[#775A00]">
                    <value.icon className="h-[18px] w-[18px]" />
                  </span>
                  <p className="mt-[20px] font-brand text-[15px] font-semibold leading-[22px] text-[#1B1C19]">
                    {value.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
