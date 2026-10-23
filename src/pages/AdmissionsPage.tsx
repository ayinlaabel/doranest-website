import { useState } from 'react';
import type { CSSProperties, FormEvent } from 'react';
import playZoneImage from '../assets/images/admission-play-zone.png';
import snoozeSuitesImage from '../assets/images/admission-snooze-suites.png';
import steamCommonsImage from '../assets/images/admission-steam-commons.png';

/* ------------------------------------------------------------------ */
/* Icons                                                               */
/* ------------------------------------------------------------------ */

function ShieldBadgeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 2.9 5.3 5.5v5.3c0 4.2 2.8 7.7 6.7 9.4 3.9-1.7 6.7-5.2 6.7-9.4V5.5L12 2.9Z"
        fill="currentColor"
      />
      <path
        d="m8.8 11.7 2.1 2.1 4.2-4.3"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DownloadIcon({ className }: { className?: string }) {
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
      <path d="M12 3.6v11M7.6 10.4 12 14.8l4.4-4.4M4.4 19.8h15.2" />
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

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="3.1" fill="currentColor" />
      <path
        d="M12 2.7v3.4M12 17.9v3.4M2.7 12h3.4M17.9 12h3.4M5.4 5.4l2.4 2.4M16.2 16.2l2.4 2.4M18.6 5.4l-2.4 2.4M7.8 16.2l-2.4 2.4"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.9}
        strokeLinecap="round"
      />
    </svg>
  );
}

function BoltIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M13.4 2.6 4.9 13.2h5.3l-.6 8.2 8.5-10.6h-5.3l.6-8.2Z" fill="currentColor" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
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
      <rect x="3.6" y="5.2" width="16.8" height="15.2" rx="2.2" />
      <path d="M3.6 10h16.8M8.2 3.4v3.4M15.8 3.4v3.4" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
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
      <path d="M12 20.1S4.2 15.4 4.2 9.8A4.1 4.1 0 0 1 12 7.7a4.1 4.1 0 0 1 7.8 2.1c0 5.6-7.8 10.3-7.8 10.3Z" />
    </svg>
  );
}

function GroupIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="8.2" cy="8.4" r="3.3" fill="currentColor" />
      <circle cx="16.4" cy="9.4" r="2.6" fill="currentColor" opacity="0.7" />
      <path d="M2.6 19.4c0-3.1 2.5-5.6 5.6-5.6s5.6 2.5 5.6 5.6H2.6Z" fill="currentColor" />
      <path d="M14.3 19.4c0-2.6 1.5-4.7 3.6-5.3 2 .7 3.5 2.7 3.5 5.3h-7.1Z" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

function IdCardIcon({ className }: { className?: string }) {
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
      <rect x="2.8" y="5.2" width="18.4" height="13.6" rx="2" />
      <circle cx="8.4" cy="11" r="2" />
      <path d="M5.4 15.8c.4-1.5 1.6-2.4 3-2.4s2.6.9 3 2.4M14.2 10h4.4M14.2 13.4h4.4" />
    </svg>
  );
}

function ShieldPlusIcon({ className }: { className?: string }) {
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
      <path d="M12 3.2 5.2 5.8v5.4c0 4 2.8 7.5 6.8 9.2 4-1.7 6.8-5.2 6.8-9.2V5.8L12 3.2Z" />
      <path d="M12 8.4v6M9 11.4h6" />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
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
      <path d="M12 21s6.4-5.1 6.4-10.2a6.4 6.4 0 1 0-12.8 0C5.6 15.9 12 21 12 21Z" />
      <circle cx="12" cy="10.4" r="2.3" />
    </svg>
  );
}

function FileIcon({ className }: { className?: string }) {
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
      <path d="M13.6 3.2H6.4a1.8 1.8 0 0 0-1.8 1.8v14a1.8 1.8 0 0 0 1.8 1.8h11.2a1.8 1.8 0 0 0 1.8-1.8V9l-5.8-5.8Z" />
      <path d="M13.4 3.4V9h5.6M8.4 13.4h7.2M8.4 17h5" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m6 9.4 6 6 6-6" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
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
      <path d="M4 12h15M13 6l6 6-6 6" />
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

function BookIcon({ className }: { className?: string }) {
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
      <path d="M12 6.4C10 4.8 7.5 4.2 4.3 4.5v13c3.2-.3 5.7.3 7.7 1.9 2-1.6 4.5-2.2 7.7-1.9v-13c-3.2-.3-5.7.3-7.7 1.9Z" />
      <path d="M12 6.4v13" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const plans = [
  {
    id: 'creche',
    ages: '6 Months – 2 Years',
    agesClassName: 'bg-[#F1E8FB] text-[#56407A]',
    schedule: 'Termly & Monthly Flex',
    title: 'The Nest Crèche',
    titleClassName: 'text-brand',
    description:
      'A serene, climate-controlled haven featuring low caregiver-to-infant ratios, sensory enrichment, and continuous peace-of-mind updates.',
    price: '₦180,000',
    priceNote: (
      <>
        Flexible installment plan available: <span className="font-bold text-[#4B4A45]">₦65,000 / month</span>
      </>
    ),
    inclusions: [
      'Nourishing, pediatrician-approved warm meals & fruit purees',
      'Dedicated diaper change, wipe protocol & sanitary linen care',
      'Individual cribs, structured nap cycles & soothing white-noise rooms',
      'Real-time daily digital logbook via Parent Portal & WhatsApp logs',
    ],
    ctaLabel: 'Inquire for Crèche Placement',
    ctaClassName: 'bg-brand text-white hover:bg-[#574473]',
    ctaIcon: <SmileIcon className="h-[20px] w-[20px]" />,
  },
  {
    id: 'after-school',
    ages: '2 Years – 12 Years',
    agesClassName: 'bg-[#FFDF97] text-[#5F4A0A]',
    schedule: '1:30 PM – 6:30 PM Daily',
    title: 'After-School Sanctuary',
    titleClassName: 'text-[#1B1C19]',
    description:
      'Stress-free transitions after school bell rings: secure chaperone pickup, focused academic assistance, and creative clubs.',
    price: '₦95,000',
    priceNote: (
      <>
        Daily drop-in available: <span className="font-bold text-[#4B4A45]">₦3,500 / session</span> with advance notice
      </>
    ),
    inclusions: [
      'Vetted staff pickup from primary schools in Yaba & environs',
      'Trained educator homework guidance & reading support',
      'Fresh, healthy afternoon meals & wholesome energy bites',
      'STEAM building blocks, coding basics, art & chess enrichment',
    ],
    ctaLabel: 'Inquire for After-School Care',
    ctaClassName: 'bg-cta text-[#5B4600] hover:bg-[#F8C43C]',
    ctaIcon: <BookIcon className="h-[20px] w-[20px]" />,
  },
];

const steps = [
  {
    number: '1',
    title: 'Submit Inquiry',
    description:
      "Complete the digital form below with your child's age group and schedule needs. Our team reviews placement openings right away.",
    note: 'Reviewed within 24 hours',
    noteIcon: <BoltIcon className="h-[14px] w-[14px]" />,
    noteClassName: 'text-brand',
    circleClassName: 'bg-[#E9DFF8] text-[#4B3568]',
  },
  {
    number: '2',
    title: 'Tour Our Nest',
    description:
      'Join us for an unhurried, private walk-through in Yaba. Meet the lead caregivers, inspect safety protocols, and observe live sessions.',
    note: 'Weekdays & Saturday morning slots',
    noteIcon: <CalendarIcon className="h-[14px] w-[14px]" />,
    noteClassName: 'text-[#8A6B00]',
    circleClassName: 'bg-[#FFDF97] text-[#5F4A0A]',
  },
  {
    number: '3',
    title: 'Welcome & Onboard',
    description:
      "Finalize health and emergency contacts, receive your Dora's Nest starter cubby kit, parent app login, and seamless settling-in plan.",
    note: 'Gentle 3-day settling-in routine',
    noteIcon: <HeartIcon className="h-[14px] w-[14px]" />,
    noteClassName: 'text-ink',
    circleClassName: 'bg-[#DDE3E2] text-[#3F484B]',
  },
];

const leftHighlights = [
  {
    title: '1:3 Infant-to-Caregiver Ratio',
    description: 'Dedicated eye-to-eye care for our crèche occupants.',
    icon: <GroupIcon className="h-[18px] w-[18px]" />,
  },
  {
    title: 'Secure Biometric & Monitored',
    description: '24/7 CCTV, armed security guard, authorized ID pickup only.',
    icon: <IdCardIcon className="h-[18px] w-[18px]" />,
  },
  {
    title: 'Pediatric First-Aid Certified',
    description: 'Every staff member is formally trained in infant & child CPR.',
    icon: <ShieldPlusIcon className="h-[18px] w-[18px]" />,
  },
];

const faqs = [
  {
    question: 'What should my child bring on their first day?',
    answer:
      'A labelled water bottle, a full change of clothes, nappies and wipes if your child is still in them, and a comfort item from home. All meals, snacks and cot linen are provided by Dora’s Nest.',
  },
  {
    question: "What is Dora's Nest policy on childhood illness?",
    answer:
      'Children should be symptom-free for at least 24 hours before returning to the nest. Please let us know as soon as possible if your child is unwell so we can support you and protect the other families in our care.',
  },
  {
    question: 'How does pickup authorization and school collection work?',
    answer:
      'Only adults listed on your child’s pickup authorization form may collect them, and a valid photo ID is checked every time. For after-school collection, our chaperones follow the dismissal schedule shared by your school.',
  },
  {
    question: 'Do you offer sibling discounts or corporate partner rates?',
    answer:
      'Yes. We offer sibling discounts and tailored corporate partner plans for teams in Yaba, Surulere and the Lagos Mainland. Send us a WhatsApp message and we will put together a plan that works for your family.',
  },
];

const galleryPhotos = [
  {
    image: playZoneImage,
    alt: "A child exploring wooden Montessori materials in the sunlit Dora's Nest play zone",
    caption: 'Sunlit Montessori Play Zone',
  },
  {
    image: snoozeSuitesImage,
    alt: "A caregiver tending to a baby in the hygienic Dora's Nest infant snooze suite",
    caption: 'Hygienic Infant Snooze Suites',
  },
  {
    image: steamCommonsImage,
    alt: "Children building and learning together in the Dora's Nest STEAM and study commons",
    caption: 'Engaging STEAM & Study Commons',
  },
];

const inputClassName =
  'h-[46px] w-full rounded-[8px] border border-transparent bg-[#F5F2EC] px-[16px] font-brand text-[14.5px] text-[#1B1C19] placeholder:text-[#8E8B84] transition-colors focus:border-brand/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/15';
const labelClassName = 'mb-[8px] block font-brand text-[12.5px] font-bold leading-[18px] text-[#1B1C19]';

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export function AdmissionsPage() {
  const [program, setProgram] = useState<'creche' | 'after-school'>('creche');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section>
        <div className="mx-auto max-w-[1284px] px-6 md:px-10 lg:px-[66px]">
          <div className="pb-[56px] pt-[40px] text-center md:pt-[52px] lg:pb-[74px]">
            <span
              data-reveal="up"
              className="inline-flex min-h-[32px] items-center gap-[8px] rounded-full bg-[#ECDCFF] px-[16px] py-[6px] font-brand text-[11.5px] font-semibold leading-[16px] text-[#3F2A57]"
            >
              <ShieldBadgeIcon className="h-[14px] w-[14px] text-[#665087]" />
              Yaba, Lagos &bull; Licensed Early Years &amp; Childcare
            </span>

            <h1
              data-reveal="up"
              className="mt-[26px] font-brand text-[34px] font-bold leading-[1.12] tracking-[-0.6px] text-[#1B1C19] [--reveal-delay:80ms] sm:text-[42px] lg:text-[44px]"
            >
              Transparent Admissions &amp; Fees
            </h1>

            <p
              data-reveal="up"
              className="mx-auto mt-[20px] max-w-[700px] font-brand text-[16px] leading-[27px] text-ink [--reveal-delay:150ms] sm:text-[17px] sm:leading-[29px]"
            >
              No hidden dues. Tailored flexible schedules crafted for discerning working parents
              across Yaba, Surulere, and the Lagos Mainland.
            </p>

            <div
              data-reveal="up"
              className="mt-[30px] flex flex-wrap items-center justify-center gap-[14px] [--reveal-delay:220ms]"
            >
              <a
                href="/downloads/doras-nest-fee-schedule-2024-2025.pdf"
                download
                className="inline-flex h-[48px] items-center justify-center gap-[10px] rounded-full bg-[#EAE8E3] px-[22px] font-brand text-[13.5px] font-semibold text-[#1B1C19] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E1DED7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <DownloadIcon className="h-[16px] w-[16px]" />
                Download 2024/2025 Fee Schedule (PDF, 820 KB)
              </a>
              <a
                href="https://wa.me/"
                className="inline-flex h-[48px] items-center justify-center gap-[10px] rounded-full bg-cta px-[24px] font-brand text-[13.5px] font-semibold text-[#5B4600] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F8C43C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <ChatIcon className="h-[17px] w-[17px]" />
                Chat on WhatsApp for Custom Plan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fees */}
      <section>
        <div className="mx-auto max-w-[1284px] px-6 md:px-10 lg:px-[66px]">
          <div className="grid gap-[22px] lg:grid-cols-2">
            {plans.map((plan, index) => (
              <article
                key={plan.id}
                data-reveal="up"
                style={{ '--reveal-delay': `${index * 120}ms` } as CSSProperties}
                className="card-lift relative flex min-w-0 flex-col overflow-hidden rounded-[14px] border border-[#EFECE5] bg-white p-[26px] shadow-[0_18px_44px_-40px_rgba(63,72,75,0.4)] hover:shadow-[0_26px_50px_-38px_rgba(63,72,75,0.35)] sm:p-[32px]"
              >
                {/* Decorative corner shapes */}
                <span
                  className={`pointer-events-none absolute -top-px right-0 h-[112px] w-[150px] rounded-bl-[96px] ${
                    plan.id === 'creche' ? 'bg-[#F7F4FB]' : 'bg-[#FEF5DB]'
                  }`}
                  aria-hidden="true"
                />
                <span
                  className={`pointer-events-none absolute right-[-70px] top-[36%] h-[210px] w-[210px] rounded-full ${
                    plan.id === 'creche' ? 'bg-[#FBF9F4]' : 'bg-[#FDF4E3]'
                  }`}
                  aria-hidden="true"
                />

                <div className="relative">
                  <div className="flex flex-wrap items-center justify-between gap-x-[16px] gap-y-[10px]">
                    <span
                      className={`inline-flex h-[26px] items-center rounded-full px-[13px] font-brand text-[11.5px] font-semibold leading-none ${plan.agesClassName}`}
                    >
                      {plan.ages}
                    </span>
                    <span className="font-brand text-[12px] font-medium leading-[18px] text-[#6E6C66]">
                      {plan.schedule}
                    </span>
                  </div>

                  <h2
                    className={`mt-[16px] font-brand text-[27px] font-bold leading-[1.2] tracking-[-0.3px] sm:text-[29px] ${plan.titleClassName}`}
                  >
                    {plan.title}
                  </h2>
                  <p className="mt-[12px] max-w-[500px] font-brand text-[15px] leading-[25px] text-ink">
                    {plan.description}
                  </p>

                  <div className="mt-[24px] rounded-[10px] bg-[#F5F3EE] px-[20px] py-[16px]">
                    <p className="flex flex-wrap items-baseline gap-x-[8px] font-brand">
                      <span className="text-[29px] font-bold leading-[1.1] tracking-[-0.4px] text-[#1B1C19]">
                        {plan.price}
                      </span>
                      <span className="text-[13px] font-semibold text-[#4B4A45]">/ term</span>
                    </p>
                    <p className="mt-[6px] font-brand text-[11.5px] leading-[18px] text-[#6E6C66]">
                      {plan.priceNote}
                    </p>
                  </div>

                  <p className="mt-[26px] font-brand text-[13px] font-bold leading-[20px] text-[#1B1C19]">
                    What&apos;s included in every plan:
                  </p>
                  <ul className="mt-[14px] flex flex-col gap-[11px]">
                    {plan.inclusions.map((inclusion) => (
                      <li
                        key={inclusion}
                        className="flex items-start gap-[11px] font-brand text-[14px] leading-[23px] text-[#33383A]"
                      >
                        <SparkleIcon className="mt-[4px] h-[15px] w-[15px] shrink-0 text-[#A8801C]" />
                        {inclusion}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative mt-auto pt-[26px]">
                  <a
                    href="#enroll"
                    className={`inline-flex h-[48px] w-full items-center justify-center gap-[9px] rounded-full px-[24px] font-brand text-[13.5px] font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${plan.ctaClassName}`}
                  >
                    {plan.ctaLabel}
                    {plan.ctaIcon}
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Photo strip */}
          <div className="mt-[30px] grid gap-[16px] sm:grid-cols-3">
            {galleryPhotos.map((photo, index) => (
              <figure
                key={photo.caption}
                data-reveal="up"
                style={{ '--reveal-delay': `${index * 90}ms` } as CSSProperties}
                className="group relative overflow-hidden rounded-[10px]"
              >
                <img
                  src={photo.image}
                  width={374}
                  height={225}
                  alt={photo.alt}
                  loading="lazy"
                  className="aspect-[374/225] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent px-[16px] pb-[13px] pt-[38px] font-brand text-[13px] font-semibold leading-[18px] text-white">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment steps */}
      <section>
        <div className="mx-auto max-w-[1284px] px-6 md:px-10 lg:px-[66px]">
          <div className="py-[72px] text-center lg:py-[92px]">
            <p
              data-reveal="up"
              className="font-brand text-[10.5px] font-bold uppercase leading-[16px] tracking-[0.14em] text-[#8A6B00]"
            >
              How to Join
            </p>
            <h2
              data-reveal="up"
              className="mt-[14px] font-brand text-[27px] font-bold leading-[1.2] tracking-[-0.4px] text-[#1B1C19] [--reveal-delay:70ms] sm:text-[31px]"
            >
              Our Simple 3-Step Enrollment
            </h2>
            <p
              data-reveal="up"
              className="mx-auto mt-[14px] max-w-[600px] font-brand text-[14.5px] leading-[24px] text-ink [--reveal-delay:140ms] sm:text-[15px]"
            >
              Designed to respect the demanding schedules of Lagos professionals. Move from initial
              curiosity to your child&apos;s first joyful day in under a week.
            </p>

            <div className="mt-[52px] grid gap-[38px] text-left sm:gap-[34px] lg:grid-cols-3 lg:gap-0">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  data-reveal="up"
                  style={{ '--reveal-delay': `${index * 110}ms` } as CSSProperties}
                  className={`relative px-0 lg:px-[32px] ${
                    index > 0 ? 'lg:border-l lg:border-[#EFECE5]' : ''
                  }`}
                >
                  <span
                    className={`flex h-[38px] w-[38px] items-center justify-center rounded-full font-brand text-[15px] font-bold leading-none ${step.circleClassName}`}
                  >
                    {step.number}
                  </span>
                  <h3 className="mt-[22px] font-brand text-[19px] font-bold leading-[26px] text-[#1B1C19]">
                    {step.title}
                  </h3>
                  <p className="mt-[10px] max-w-[300px] font-brand text-[14px] leading-[23px] text-ink">
                    {step.description}
                  </p>
                  <p
                    className={`mt-[16px] flex items-center gap-[7px] font-brand text-[11.5px] font-semibold leading-[17px] ${step.noteClassName}`}
                  >
                    {step.noteIcon}
                    {step.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment form */}
      <section id="enroll" className="scroll-mt-[96px]">
        <div className="mx-auto max-w-[1284px] px-6 md:px-10 lg:px-[66px]">
          <div className="grid overflow-hidden rounded-[12px] border border-[#EFECE5] lg:grid-cols-[480px_minmax(0,1fr)]">
            {/* Left panel */}
            <aside className="bg-[#F0EEE9] p-[30px] sm:p-[38px] lg:flex lg:flex-col lg:p-[44px]">
              <span className="inline-flex min-h-[26px] items-center gap-[7px] self-start rounded-full bg-white px-[12px] py-[5px] font-brand text-[10.5px] font-semibold leading-[15px] text-[#4B4A45] shadow-[0_4px_12px_-8px_rgba(63,72,75,0.4)]">
                <ShieldBadgeIcon className="h-[13px] w-[13px] text-[#665087]" />
                Lagos State MoE Certified
              </span>

              <h2 className="mt-[20px] font-brand text-[26px] font-bold leading-[1.2] tracking-[-0.3px] text-brand sm:text-[28px]">
                Begin Your Child&apos;s Journey
              </h2>
              <p className="mt-[12px] max-w-[360px] font-brand text-[14.5px] leading-[24px] text-ink">
                Places for the current and upcoming academic terms are allocated in order of
                application receipt to uphold strict ratio guidelines.
              </p>

              <ul className="mt-[26px] flex flex-col gap-[18px]">
                {leftHighlights.map((item) => (
                  <li key={item.title} className="flex items-start gap-[12px]">
                    <span className="mt-[1px] flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-[6px] bg-[#E7E3DA] text-brand">
                      {item.icon}
                    </span>
                    <div className="min-w-0">
                      <p className="font-brand text-[13px] font-bold leading-[19px] text-[#1B1C19]">
                        {item.title}
                      </p>
                      <p className="font-brand text-[12px] leading-[18px] text-[#5E6264]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-[30px] flex items-start gap-[12px] rounded-[10px] bg-white px-[18px] py-[16px] lg:mt-auto">
                <PinIcon className="mt-[2px] h-[18px] w-[18px] shrink-0 text-[#9A7620]" />
                <div>
                  <p className="font-brand text-[12.5px] font-bold leading-[18px] text-[#1B1C19]">
                    Commercial Avenue, Sabo-Yaba
                  </p>
                  <p className="mt-[2px] font-brand text-[11.5px] leading-[17px] text-[#5E6264]">
                    Accessible off Herbert Macaulay Way &amp; Third Mainland Bridge
                  </p>
                </div>
              </div>
            </aside>

            {/* Form */}
            <div className="bg-white p-[30px] sm:p-[38px] lg:p-[44px]">
              {submitted ? (
                <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#ECDCFF] text-brand">
                    <ShieldBadgeIcon className="h-[27px] w-[27px]" />
                  </span>
                  <h2 className="mt-[22px] font-brand text-[24px] font-bold leading-[32px] text-[#1B1C19]">
                    Thank you — your inquiry is in.
                  </h2>
                  <p className="mt-[10px] max-w-[420px] font-brand text-[14.5px] leading-[24px] text-ink">
                    Our admissions team will be in touch within 1 business day via email &amp;
                    WhatsApp to confirm your tour and placement options.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-[24px] inline-flex h-[44px] items-center justify-center rounded-full border border-brand px-[22px] font-brand text-[13px] font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-x-[20px] gap-y-[18px] sm:grid-cols-2">
                  <div>
                    <label htmlFor="guardian-name" className={labelClassName}>
                      Parent / Guardian Full Name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="guardian-name"
                      name="guardianName"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="e.g. Dr. Ngozi Adebayo"
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClassName}>
                      Email Address <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="ngozi.adebayo@gmail.com"
                      className={inputClassName}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="phone" className={labelClassName}>
                      Phone Number (WhatsApp Preferred) <span aria-hidden="true">*</span>
                    </label>
                    <div className="flex overflow-hidden rounded-[8px] bg-[#F5F2EC] focus-within:ring-2 focus-within:ring-brand/15">
                      <span className="flex h-[46px] items-center border-r border-[#E7E2D9] px-[14px] font-brand text-[14px] font-medium text-[#4B4A45]">
                        +234
                      </span>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="803 123 4567"
                        className="h-[46px] w-full bg-transparent px-[14px] font-brand text-[14.5px] text-[#1B1C19] placeholder:text-[#8E8B84] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="child-name" className={labelClassName}>
                      Child&apos;s First &amp; Last Name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="child-name"
                      name="childName"
                      type="text"
                      required
                      placeholder="e.g. Kamsi Adebayo"
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label htmlFor="child-dob" className={labelClassName}>
                      Child&apos;s DOB or Current Age <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="child-dob"
                      name="childDob"
                      type="text"
                      required
                      placeholder="e.g. 9 Months old (or DD/MM/YYYY)"
                      className={inputClassName}
                    />
                  </div>

                  <fieldset className="sm:col-span-2">
                    <legend className={labelClassName}>
                      Program of Interest <span aria-hidden="true">*</span>
                    </legend>
                    <div className="grid gap-[14px] sm:grid-cols-2">
                      <label
                        className={`relative cursor-pointer rounded-[10px] border px-[18px] py-[15px] transition-colors ${
                          program === 'creche'
                            ? 'border-[#D3B9F5] bg-[#F1E8FB]'
                            : 'border-transparent bg-[#F5F2EC] hover:bg-[#F0EBE1]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="program"
                          value="creche"
                          checked={program === 'creche'}
                          onChange={() => setProgram('creche')}
                          className="sr-only"
                        />
                        <span className="flex items-start justify-between gap-[10px]">
                          <span className="font-brand text-[19px] font-semibold leading-[25px] text-[#3F2A57]">
                            Crèche
                          </span>
                          <SmileIcon className="h-[17px] w-[17px] text-[#3F2A57]" />
                        </span>
                        <span className="mt-[5px] block pr-[12px] font-brand text-[11px] leading-[16px] text-[#5E526E]">
                          6 months to 2 years &bull; Full day sensory &amp; care
                        </span>
                      </label>

                      <label
                        className={`relative cursor-pointer rounded-[10px] border px-[18px] py-[15px] transition-colors ${
                          program === 'after-school'
                            ? 'border-[#D3B9F5] bg-[#F1E8FB]'
                            : 'border-transparent bg-[#F5F2EC] hover:bg-[#F0EBE1]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="program"
                          value="after-school"
                          checked={program === 'after-school'}
                          onChange={() => setProgram('after-school')}
                          className="sr-only"
                        />
                        <span className="flex items-start justify-between gap-[10px]">
                          <span className="font-brand text-[19px] font-semibold leading-[25px] text-[#1B1C19]">
                            After-School
                          </span>
                          <BookIcon className="h-[17px] w-[17px] text-[#1B1C19]" />
                        </span>
                        <span className="mt-[5px] block pr-[12px] font-brand text-[11px] leading-[16px] text-[#5E6264]">
                          2 to 12 years &bull; Pickup, homework &amp; clubs
                        </span>
                      </label>
                    </div>
                  </fieldset>

                  <div className="sm:col-span-2">
                    <label htmlFor="start-date" className={labelClassName}>
                      Target Start Date <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="start-date"
                      name="startDate"
                      type="text"
                      required
                      placeholder="mm/dd/yyyy"
                      className={inputClassName}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="notes" className={labelClassName}>
                      Optional Notes, Dietary Requirements, or Inquiries
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      placeholder="Tell us about allergies, preferred nap patterns, or school pickup location..."
                      className="w-full resize-y rounded-[8px] border border-transparent bg-[#F5F2EC] px-[16px] py-[13px] font-brand text-[14.5px] leading-[23px] text-[#1B1C19] placeholder:text-[#8E8B84] transition-colors focus:border-brand/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/15"
                    />
                  </div>

                  <label className="flex cursor-pointer items-start gap-[11px] font-brand text-[11px] leading-[17px] text-[#5E6264] sm:col-span-2">
                    <input
                      type="checkbox"
                      required
                      className="mt-[1px] h-[16px] w-[16px] shrink-0 rounded-[3px] border-[#CFCAC0] text-brand accent-[#665087]"
                    />
                    I agree to the privacy policy regarding the care and processing of our
                    information under Nigerian Data Protection Regulation (NDPR) guidelines.
                  </label>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex h-[52px] w-full items-center justify-center gap-[10px] rounded-full bg-cta px-[24px] font-brand text-[14px] font-semibold text-[#5B4600] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F8C43C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                    >
                      Submit Inquiry
                      <ArrowRightIcon className="h-[17px] w-[17px]" />
                    </button>
                    <p className="mt-[10px] text-center font-brand text-[10.5px] leading-[16px] text-[#8E8B84]">
                      You&apos;ll receive a response within 1 business day via email &amp; WhatsApp.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="mx-auto max-w-[1284px] px-6 md:px-10 lg:px-[66px]">
          <div className="py-[72px] lg:py-[92px]">
            <div className="mx-auto max-w-[770px]">
              <p
                data-reveal="up"
                className="text-center font-brand text-[10.5px] font-bold uppercase leading-[16px] tracking-[0.14em] text-[#8A6B00]"
              >
                Answers for Parents
              </p>
              <h2
                data-reveal="up"
                className="mt-[14px] text-center font-brand text-[27px] font-bold leading-[1.2] tracking-[-0.4px] text-[#1B1C19] [--reveal-delay:70ms] sm:text-[31px]"
              >
                Frequently Asked Questions
              </h2>

              <div className="mt-[36px] flex flex-col gap-[12px]">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  const panelId = `faq-panel-${index}`;

                  return (
                    <div
                      key={faq.question}
                      data-reveal="up"
                      style={{ '--reveal-delay': `${index * 70}ms` } as CSSProperties}
                      className="overflow-hidden rounded-[10px] border border-[#F0EDE6] bg-white shadow-[0_14px_30px_-28px_rgba(63,72,75,0.3)]"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        className="flex w-full items-center justify-between gap-[16px] px-[20px] py-[18px] text-left font-brand text-[15.5px] font-semibold leading-[23px] text-[#1B1C19] transition-colors hover:text-brand sm:px-[24px] sm:py-[20px] sm:text-[16.5px]"
                      >
                        {faq.question}
                        <ChevronDownIcon
                          className={`h-[18px] w-[18px] shrink-0 text-brand transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <div
                        id={panelId}
                        hidden={!isOpen}
                        className="px-[20px] pb-[20px] font-brand text-[13.5px] leading-[23px] text-ink sm:px-[24px]"
                      >
                        {faq.answer}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Fee schedule download */}
              <div
                data-reveal="up"
                className="mt-[36px] flex flex-col items-start gap-[18px] rounded-[12px] bg-[#F0EEE9] px-[24px] py-[22px] sm:flex-row sm:items-center"
              >
                <span className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[#DCD4E8] text-brand">
                  <FileIcon className="h-[23px] w-[23px]" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-brand text-[20px] font-bold leading-[27px] text-[#1B1C19]">
                    Full Fee Schedule (2024–2025)
                  </h3>
                  <p className="mt-[3px] font-brand text-[11.5px] leading-[18px] text-[#5E6264]">
                    Effective September 2024 &bull; Includes meal breakdown &amp; extended hour
                    rates (PDF, &lt; 1 MB)
                  </p>
                </div>
                <a
                  href="/downloads/doras-nest-fee-schedule-2024-2025.pdf"
                  download
                  className="inline-flex h-[42px] w-full shrink-0 items-center justify-center rounded-full bg-brand px-[24px] font-brand text-[12.5px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#574473] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:w-auto"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
