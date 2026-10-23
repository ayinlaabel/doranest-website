import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

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

function PhoneIcon({ className }: { className?: string }) {
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
      <path d="M7.1 3.9 9.5 8a1.4 1.4 0 0 1-.3 1.7l-1.4 1.2a13.4 13.4 0 0 0 5.3 5.3l1.2-1.4a1.4 1.4 0 0 1 1.7-.3l4.1 2.4a1.4 1.4 0 0 1 .6 1.6l-.7 2.1a1.5 1.5 0 0 1-1.5 1C10.3 21.6 2.4 13.7 2.4 5.4a1.5 1.5 0 0 1 1-1.5l2.1-.7a1.4 1.4 0 0 1 1.6.7Z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
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
      <rect x="3.2" y="5.4" width="17.6" height="13.2" rx="2" />
      <path d="m4.2 7 7.8 6 7.8-6" />
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

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h13M13 6.5l5.5 5.5-5.5 5.5" />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
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
      <path d="M4.2 5.4h15.6a1.4 1.4 0 0 1 1.4 1.4v9.4a1.4 1.4 0 0 1-1.4 1.4H9.3L4.6 21v-3.4a1.4 1.4 0 0 1-.4-1V6.8a1.4 1.4 0 0 1 0-1.4Z" />
      <path d="M7.8 9.6h8.4M7.8 13h5.6" />
    </svg>
  );
}

const contactDetails = [
  {
    label: 'Visit the Nest',
    icon: PinIcon,
    lines: ['1, Edmund Crescent', 'Off Herbert Macaulay Way, Yaba', 'Lagos State, Nigeria'],
    actionLabel: 'Get directions',
    href: 'https://www.google.com/maps/dir/?api=1&destination=1%2C%20Edmund%20Crescent%2C%20off%20Herbert%20Macaulay%20Way%2C%20Yaba%2C%20Lagos%2C%20Nigeria',
  },
  {
    label: 'Call or WhatsApp',
    icon: PhoneIcon,
    lines: ['+234 802 345 6789', 'Mon - Fri, 8:00 AM - 5:00 PM'],
    actionLabel: 'Call us',
    href: 'tel:+2348023456789',
  },
  {
    label: 'Email us',
    icon: MailIcon,
    lines: ['hello@dorasnest.com', 'We reply within one business day'],
    actionLabel: 'Send an email',
    href: 'mailto:hello@dorasnest.com',
  },
  {
    label: 'Opening hours',
    icon: ClockIcon,
    lines: ['Mon - Fri: 6:30 AM - 6:00 PM', 'Saturday & Sunday: Closed'],
    actionLabel: 'Plan your visit',
    href: '/admissions#enroll',
  },
];

const openingHours = [
  { day: 'Monday - Friday', time: '6:30 AM - 6:00 PM' },
  { day: 'Saturday', time: 'Closed' },
  { day: 'Sunday', time: 'Closed' },
];

export function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#FBF9F4]">
        <div className="mx-auto max-w-[1284px] px-6 md:px-10 lg:px-[66px]">
          <div className="pb-[72px] pt-[56px] text-center md:pt-[72px] lg:pb-[96px] lg:pt-[88px]">
            <span
              data-reveal="up"
              className="inline-flex min-h-[32px] items-center gap-[8px] rounded-full bg-[#F0EDF3] px-[16px] py-[6px] font-brand text-[11.5px] font-semibold leading-[16px] text-brand"
            >
              <PinIcon className="h-[14px] w-[14px]" />
              Yaba, Lagos
            </span>

            <h1
              data-reveal="up"
              className="mt-[24px] font-brand text-[34px] font-bold leading-[1.12] tracking-[-0.6px] text-[#1B1C19] [--reveal-delay:80ms] sm:text-[42px] lg:text-[46px]"
            >
              We&apos;d love to meet you
            </h1>

            <p
              data-reveal="up"
              className="mx-auto mt-[20px] max-w-[640px] font-brand text-[16px] leading-[27px] text-ink [--reveal-delay:150ms] sm:text-[17px] sm:leading-[29px]"
            >
              Have a question about our programs, want to arrange a tour, or simply say hello? Reach
              out to the Dora&apos;s Nest team - we are always happy to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact detail cards */}
      <section>
        <div className="mx-auto max-w-[1284px] px-6 md:px-10 lg:px-[66px]">
          <div className="-mt-[48px] grid gap-[18px] sm:grid-cols-2 lg:-mt-[56px] lg:grid-cols-4 lg:gap-[22px]">
            {contactDetails.map((detail, index) => {
              const Icon = detail.icon;
              const isExternal = detail.href.startsWith('http');

              return (
                <article
                  key={detail.label}
                  data-reveal="up"
                  style={{ '--reveal-delay': `${index * 90}ms` } as CSSProperties}
                  className="card-lift flex h-full flex-col rounded-[18px] border border-[#EFECE5] bg-white p-[24px] shadow-[0_20px_45px_-42px_rgba(63,72,75,0.45)] hover:shadow-[0_28px_55px_-40px_rgba(63,72,75,0.4)]"
                >
                  <span className="flex h-[44px] w-[44px] items-center justify-center rounded-[12px] bg-[#F0EDF3] text-brand">
                    <Icon className="h-[21px] w-[21px]" />
                  </span>

                  <h2 className="mt-[20px] font-brand text-[15px] font-bold leading-[22px] text-[#1B1C19]">
                    {detail.label}
                  </h2>

                  <div className="mt-[8px] flex-1">
                    {detail.lines.map((line) => (
                      <p
                        key={line}
                        className="font-brand text-[13.5px] leading-[22px] text-ink"
                      >
                        {line}
                      </p>
                    ))}
                  </div>

                  {isExternal ? (
                    <a
                      href={detail.href}
                      target={detail.href.startsWith('https') ? '_blank' : undefined}
                      rel={detail.href.startsWith('https') ? 'noreferrer' : undefined}
                      className="mt-[18px] inline-flex items-center gap-[7px] self-start font-brand text-[12.5px] font-semibold leading-[18px] text-brand transition-colors hover:text-[#523F6E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                    >
                      {detail.actionLabel}
                      <ArrowIcon className="h-[14px] w-[14px]" />
                    </a>
                  ) : (
                    <Link
                      to={detail.href}
                      className="mt-[18px] inline-flex items-center gap-[7px] self-start font-brand text-[12.5px] font-semibold leading-[18px] text-brand transition-colors hover:text-[#523F6E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                    >
                      {detail.actionLabel}
                      <ArrowIcon className="h-[14px] w-[14px]" />
                    </Link>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location and hours */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1284px] px-6 md:px-10 lg:px-[66px]">
          <div className="py-[64px] lg:py-[88px]">
            <div className="max-w-[620px]">
              <p
                data-reveal="up"
                className="font-brand text-[11.5px] font-semibold uppercase leading-[18px] tracking-[0.13em] text-[#775A00]"
              >
                Find us
              </p>
              <h2
                data-reveal="up"
                className="mt-[14px] font-brand text-[28px] font-bold leading-[36px] tracking-[-0.3px] text-brand [--reveal-delay:80ms] sm:text-[32px] sm:leading-[40px]"
              >
                Come and see where little ones bloom
              </h2>
              <p
                data-reveal="up"
                className="mt-[14px] font-brand text-[15px] leading-[26px] text-ink [--reveal-delay:150ms] sm:text-[16px]"
              >
                Our nest sits on Edmund Crescent, off Herbert Macaulay Way in Yaba, with easy access
                from Surulere, Ebute Metta and the Lagos Mainland. Book a visit and we will share
                parking and arrival details.
              </p>
            </div>

            <div className="mt-[32px] grid gap-[22px] lg:mt-[44px] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-[28px]">
              {/* Map */}
              <div
                data-reveal="up"
                className="overflow-hidden rounded-[22px] border border-[#EFECE5] bg-[#F5F3EE] shadow-[0_20px_45px_-42px_rgba(63,72,75,0.35)]"
              >
                <iframe
                  title="Map showing Dora's Nest in Yaba, Lagos"
                  src="https://www.google.com/maps?q=1%2C%20Edmund%20Crescent%2C%20off%20Herbert%20Macaulay%20Way%2C%20Yaba%2C%20Lagos%2C%20Nigeria&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="h-[280px] w-full border-0 sm:h-[340px] lg:h-[430px]"
                />

                <div className="flex flex-wrap items-center justify-between gap-[16px] bg-white px-[22px] py-[20px]">
                  <div className="flex items-start gap-[12px]">
                    <span className="mt-[2px] flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px] bg-[#F0EDF3] text-brand">
                      <PinIcon className="h-[19px] w-[19px]" />
                    </span>
                    <div>
                      <p className="font-brand text-[14px] font-semibold leading-[20px] text-[#1B1C19]">
                        1, Edmund Crescent, Yaba
                      </p>
                      <p className="font-brand text-[12.5px] leading-[19px] text-ink">
                        Off Herbert Macaulay Way, Lagos State
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=1%2C%20Edmund%20Crescent%2C%20off%20Herbert%20Macaulay%20Way%2C%20Yaba%2C%20Lagos%2C%20Nigeria"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-[40px] items-center justify-center gap-[8px] rounded-full bg-brand px-[18px] font-brand text-[12.5px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#574374] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    Get directions
                    <ArrowIcon className="h-[14px] w-[14px]" />
                  </a>
                </div>
              </div>

              {/* Hours + CTA */}
              <div className="flex flex-col gap-[22px]">
                <article
                  id="hours"
                  data-reveal="up"
                  className="scroll-mt-[104px] rounded-[22px] border border-[#EFECE5] bg-[#FBF9F4] p-[26px] sm:p-[30px]"
                >
                  <div className="flex items-center gap-[12px]">
                    <span className="flex h-[42px] w-[42px] items-center justify-center rounded-[12px] bg-white text-brand">
                      <ClockIcon className="h-[20px] w-[20px]" />
                    </span>
                    <div>
                      <h3 className="font-brand text-[17px] font-bold leading-[24px] text-[#1B1C19]">
                        Opening hours
                      </h3>
                      <p className="font-brand text-[12.5px] leading-[18px] text-ink">
                        All times are West Africa Time (WAT)
                      </p>
                    </div>
                  </div>

                  <dl className="mt-[24px] divide-y divide-[#E9E6DF]">
                    {openingHours.map((entry) => (
                      <div
                        key={entry.day}
                        className="flex items-center justify-between gap-[16px] py-[13px]"
                      >
                        <dt className="font-brand text-[14px] leading-[20px] text-ink">
                          {entry.day}
                        </dt>
                        <dd
                          className={`font-brand text-[14px] font-semibold leading-[20px] ${
                            entry.time === 'Closed' ? 'text-ink/60' : 'text-[#1B1C19]'
                          }`}
                        >
                          {entry.time}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <p className="mt-[18px] border-t border-[#E9E6DF] pt-[18px] font-brand text-[12.5px] leading-[21px] text-ink">
                    Tours are by appointment so we can give you our full attention. Reach out and
                    we will find a time that works for your family.
                  </p>
                </article>

                <article
                  data-reveal="up"
                  style={{ '--reveal-delay': '120ms' } as CSSProperties}
                  className="relative overflow-hidden rounded-[22px] bg-brand p-[26px] text-white sm:p-[30px]"
                >
                  <span
                    className="pointer-events-none absolute -right-[46px] -top-[46px] h-[150px] w-[150px] rounded-full bg-white/10"
                    aria-hidden="true"
                  />
                  <span
                    className="pointer-events-none absolute -bottom-[54px] -left-[34px] h-[130px] w-[130px] rounded-full bg-white/10"
                    aria-hidden="true"
                  />

                  <div className="relative">
                    <h3 className="font-brand text-[21px] font-bold leading-[29px]">
                      Ready to visit?
                    </h3>
                    <p className="mt-[10px] font-brand text-[13.5px] leading-[22px] text-white/80">
                      Book a private tour, meet our team, and see our classrooms in action.
                    </p>

                    <div className="mt-[22px] flex flex-wrap items-center gap-[10px]">
                      <Link
                        to="/admissions#enroll"
                        className="inline-flex h-[44px] items-center justify-center rounded-full bg-cta px-[20px] font-brand text-[12.5px] font-semibold text-cta-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F8C43C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        Book a tour
                      </Link>
                      <a
                        href="https://wa.me/2348023456789"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-[44px] items-center justify-center gap-[7px] rounded-full border border-white/40 px-[18px] font-brand text-[12.5px] font-semibold text-white transition-colors duration-300 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        <ChatIcon className="h-[15px] w-[15px]" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
