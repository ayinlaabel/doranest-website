import type { CSSProperties, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import crecheImage from '../assets/images/program-creche.png';
import afterSchoolImage from '../assets/images/program-afterschool.png';

function HighChairIcon({ className }: { className?: string }) {
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
      <path d="M8.2 4.5h3.6a1.8 1.8 0 0 1 1.8 1.8v7.2H8.2V4.5Z" />
      <path d="M8.2 10.8h8.6a1.6 1.6 0 0 1 0 3.2H8.2" />
      <path d="M10.2 14v3.4M15 14v3.4" />
      <path d="M7.4 19.3c1.3 1 3 1.5 4.9 1.5s3.6-.5 4.9-1.5" />
    </svg>
  );
}

function PaletteIcon({ className }: { className?: string }) {
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
      <path d="M12 3.2a8.8 8.8 0 1 0 0 17.6c1.1 0 1.9-.8 1.9-1.8 0-.5-.2-.9-.5-1.3-.3-.3-.5-.7-.5-1.1 0-.9.8-1.7 1.8-1.7h1.4a4.7 4.7 0 0 0 4.7-4.7c0-3.8-4-7-8.8-7Z" />
      <circle cx="8.4" cy="10.2" r="1.05" fill="currentColor" stroke="none" />
      <circle cx="12" cy="7.9" r="1.05" fill="currentColor" stroke="none" />
      <circle cx="15.6" cy="10.2" r="1.05" fill="currentColor" stroke="none" />
      <circle cx="8.6" cy="14" r="1.05" fill="currentColor" stroke="none" />
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
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

interface Program {
  ages: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  linkLabel: string;
  href: string;
  pillClassName: string;
  icon: ReactNode;
}

const programs: Program[] = [
  {
    ages: '3 Months - 2 Years',
    title: 'Crèche & Toddler',
    description:
      'A gentle, sensory-rich environment focused on foundational motor skills, language development, and providing the tender care infants need.',
    image: crecheImage,
    imageAlt: "A caregiver holding a baby in Dora's Nest infant crèche",
    linkLabel: 'Explore Crèche',
    href: '/programs/creche',
    pillClassName: 'bg-[#F0EDF3] text-brand',
    icon: <HighChairIcon className="h-5 w-5 text-brand" />,
  },
  {
    ages: '5 Years - 11 Years',
    title: 'After-School Care',
    description:
      'Homework support, creative arts, and structured play in a safe environment until parents finish their workday.',
    image: afterSchoolImage,
    imageAlt: 'Children painting and making crafts in a Dora\u2019s Nest after-school classroom',
    linkLabel: 'Explore After-School',
    href: '/programs/after-school',
    pillClassName: 'bg-[#FEEFC8] text-[#715600]',
    icon: <PaletteIcon className="h-5 w-5 text-[#7A5B00]" />,
  },
];

export function Programs() {
  return (
    <section id="programs" className="bg-white pt-[76px] pb-[99px]">
      <div className="mx-auto max-w-[1284px] px-6 md:px-10 lg:px-[66px]">
        <h2
          data-reveal="up"
          className="text-center font-brand text-[24px] font-bold leading-[32px] text-brand sm:text-[28.5px] sm:leading-[38px]"
        >
          Our Tailored Programs
        </h2>
        <p
          data-reveal="up"
          className="mx-auto mt-[16px] max-w-[660px] text-center font-brand text-[15.25px] leading-[24px] text-ink [--reveal-delay:90ms]"
        >
          Designed to support every stage of your child&apos;s early development in a safe,
          nurturing space.
        </p>

        <div className="mt-[50px] grid gap-[24px] lg:grid-cols-2 lg:gap-[24px]">
          {programs.map((program, index) => (
            <article
              key={program.title}
              data-reveal="up"
              style={{ '--reveal-delay': `${index * 130}ms` } as CSSProperties}
              className="card-lift group flex min-w-0 flex-col rounded-[24px] bg-white p-[28px] pt-[30px] pb-[32px] shadow-[0_14px_32px_-28px_rgba(63,72,75,0.18)] hover:shadow-[0_26px_50px_-32px_rgba(63,72,75,0.3)] sm:p-[40px] sm:pt-[38px] sm:pb-[38px]"
            >
              <div className="flex items-center justify-between gap-[16px]">
                <span
                  className={`inline-flex h-[24px] items-center rounded-full px-[12px] font-brand text-[11.7px] font-semibold leading-none ${program.pillClassName}`}
                >
                  {program.ages}
                </span>
                {program.icon}
              </div>

              <h3 className="mt-[30px] font-brand text-[21.7px] font-bold leading-[28px] text-brand sm:mt-[36px] sm:leading-[30px]">
                {program.title}
              </h3>
              <p className="mt-[13px] min-h-[72px] font-brand text-[15px] leading-[24px] text-ink">
                {program.description}
              </p>

              <img
                src={program.image}
                width={484}
                height={192}
                alt={program.imageAlt}
                className="mt-[24px] aspect-[484/192] w-full max-w-full rounded-[10px] object-cover sm:mt-[33px]"
              />

              <Link
                to={program.href}
                className="mt-[23px] inline-flex items-center gap-[8px] self-start font-brand text-[13.4px] font-semibold leading-[20px] text-brand transition-colors hover:text-[#523F6E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                {program.linkLabel}
                <ArrowIcon className="h-[14px] w-[14px] transition-transform duration-200 group-hover:translate-x-[2px]" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
