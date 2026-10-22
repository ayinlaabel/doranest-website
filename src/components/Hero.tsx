import heroClassroom from '../assets/images/hero-classroom.png';

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3 1.1-6.5L2.6 9.4l6.5-.9L12 2.6Z" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
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
      <path d="M12 21s6.8-5.4 6.8-10.8a6.8 6.8 0 1 0-13.6 0C5.2 15.6 12 21 12 21Z" />
      <circle cx="12" cy="10.2" r="2.5" />
    </svg>
  );
}

function SmileIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.2" />
      <circle cx="9.2" cy="10" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="14.8" cy="10" r="0.9" fill="currentColor" stroke="none" />
      <path d="M8.6 14.1c.9 1.2 2.1 1.9 3.4 1.9s2.5-.7 3.4-1.9" />
    </svg>
  );
}

const openingHours = [
  { label: 'Mon - Fri', value: '7:00 AM - 6:00 PM', icon: <ClockIcon className="h-[21px] w-[21px]" /> },
  { label: 'Location', value: 'Victoria Island, Lagos', icon: <PinIcon className="h-[21px] w-[21px]" /> },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative mx-auto max-w-[1284px] px-6 md:px-10 lg:px-[66px]">
        {/* Soft decorative shape above the badge */}
        <span
          className="animate-float absolute left-[92px] top-[35px] hidden h-[67px] w-[99px] rounded-full bg-[#F3F7F8] lg:block"
          aria-hidden="true"
        />

        <div className="relative grid gap-[48px] pb-[64px] pt-[48px] md:pt-[64px] xl:grid-cols-2 xl:gap-[48px] xl:pb-[80px] xl:pt-[110px]">
          <div className="min-w-0 xl:pt-[56px]">
            <span
              data-reveal="up"
              className="inline-flex h-[32px] items-center gap-[11px] rounded-full bg-[#EAE8E3] px-[17px] font-brand text-[11.2px] font-semibold leading-none text-ink"
            >
              <StarIcon className="h-[12px] w-[12px] text-[#775A00]" />
              5-Star Rated Childcare in Lagos
            </span>

            <h1
              data-reveal="up"
              className="mt-[24px] font-brand text-[30px] font-extrabold leading-[38px] tracking-[-0.35px] text-brand [--reveal-delay:90ms] sm:text-[42px] sm:leading-[56px] sm:tracking-[-0.5px]"
            >
              Where Every Child Finds
              <br className="hidden md:inline" /> Their Nest
            </h1>

            <p
              data-reveal="up"
              className="mt-[24px] max-w-[552px] font-brand text-[17px] leading-[28px] text-ink [--reveal-delay:180ms]"
            >
              A premium, safe, and academically sound environment for your little ones. We blend
              maternal warmth with modern early childhood education.
            </p>

            <div
              data-reveal="up"
              className="mt-[40px] flex flex-wrap items-center gap-[18px] [--reveal-delay:260ms]"
            >
              <a
                href="/enroll"
                className="inline-flex h-[52px] items-center justify-center rounded-full bg-cta px-[32px] font-brand text-[13px] font-semibold text-cta-ink shadow-[0_10px_24px_-14px_rgba(252,203,73,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F8C43C] hover:shadow-[0_16px_28px_-16px_rgba(252,203,73,0.95)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                Enroll Now
              </a>
              <a
                href="/tour"
                className="inline-flex h-[52px] items-center justify-center rounded-full border border-brand px-[34px] font-brand text-[13px] font-semibold text-brand transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                Book a Tour
              </a>
            </div>

            <hr data-reveal="fade" className="mt-[61px] border-t border-[#E4E2DD] [--reveal-delay:340ms]" />

            <div
              data-reveal="up"
              className="mt-[22px] flex flex-wrap items-center gap-x-[28px] gap-y-[18px] [--reveal-delay:400ms]"
            >
              {openingHours.map((item) => (
                <div key={item.label} className="flex items-center gap-[14px]">
                  <span className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#F0EEE9] text-brand">
                    {item.icon}
                  </span>
                  <div className="font-brand">
                    <p className="text-[11px] font-semibold leading-[16px] text-ink">{item.label}</p>
                    <p className="text-[13.4px] font-bold leading-[20px] text-brand">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            data-reveal="right"
            className="relative mx-auto w-full min-w-0 max-w-[552px] [--reveal-delay:140ms]"
          >
            <img
              src={heroClassroom}
              width={552}
              height={604}
              alt="A teacher and children playing with blocks in a bright Dora's Nest classroom"
              className="aspect-[552/604] w-full max-w-full rounded-[32px] object-cover transition-transform duration-700 ease-out hover:scale-[1.015]"
            />

            <div className="animate-float absolute bottom-[6%] left-0 flex h-[79px] w-[182px] items-center gap-[19px] rounded-[16px] bg-white pl-[18px] pr-[14px] shadow-[0_10px_24px_-20px_rgba(63,72,75,0.22)] [animation-delay:1.4s] xl:-left-[48px] xl:bottom-[36px]">
              <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-brand text-white">
                <SmileIcon className="h-[24px] w-[24px]" />
              </span>
              <div className="font-brand">
                <p className="text-[24px] font-bold leading-[1.1] text-brand">100+</p>
                <p className="mt-[3px] text-[11px] font-medium leading-[1.2] text-ink">
                  Happy Families
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
