import type { CSSProperties, ReactNode } from 'react';
import crecheImage from '../assets/images/program-creche.png';
import afterSchoolImage from '../assets/images/program-afterschool.png';
import { PickupSection } from '../components/PickupSection';

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M20.2 3.8c.4 8.3-5.1 15.2-13.6 15.2H4.9l.7-2.4c1.9-.2 5-1.2 7.2-3.4-1.6.7-3.2 1.1-5.3 1.3 2-3.6 5.4-6.5 12.7-10.7Z"
        fill="currentColor"
      />
      <path d="M5.6 20.3c.6-3.1 1.9-6.2 3.9-8.8" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function UtensilsIcon({ className }: { className?: string }) {
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
      <path d="M7.2 3.5v5.2a2.3 2.3 0 0 0 4.6 0V3.5M9.5 3.5v17" />
      <path d="M16.9 3.5c1.7.9 2.6 2.8 2.6 5.3 0 2-.9 3.6-2.6 4.3v7.4" />
    </svg>
  );
}

function ShieldCheckIcon({ className }: { className?: string }) {
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
      <path d="m9 11.8 2.1 2.1 3.9-4" />
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

function CupIcon({ className }: { className?: string }) {
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
      <path d="M4.5 7.5h12v5.4a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5V7.5Z" />
      <path d="M16.5 8.8h1.8a2.4 2.4 0 0 1 0 4.8h-1.8" />
      <path d="M4.2 21h12.6" />
    </svg>
  );
}

function BusIcon({ className }: { className?: string }) {
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
      <rect x="4" y="4" width="16" height="12.5" rx="2.2" />
      <path d="M4 10.5h16M8 4v6.5M16 4v6.5" />
      <circle cx="7.8" cy="17.2" r="1.5" />
      <circle cx="16.2" cy="17.2" r="1.5" />
      <path d="M6.2 19.5v1.2M17.8 19.5v1.2" />
    </svg>
  );
}

interface CareProgram {
  ages: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  features: { label: string; icon: ReactNode }[];
}

const carePrograms: CareProgram[] = [
  {
    ages: '6mo - 2yr',
    title: 'Crèche',
    description:
      'A nurturing, safe haven designed to stimulate early cognitive development while ensuring absolute comfort and hygiene.',
    image: crecheImage,
    imageAlt: "A caregiver holding a smiling baby in Dora's Nest crèche",
    features: [
      { label: 'Nurturing Environment tailored for infants', icon: <LeafIcon className="h-[17px] w-[17px]" /> },
      { label: 'Nutritious, age-appropriate meals', icon: <UtensilsIcon className="h-[17px] w-[17px]" /> },
      { label: 'Rigorous safety and hygiene protocols', icon: <ShieldCheckIcon className="h-[17px] w-[17px]" /> },
    ],
  },
  {
    ages: '2 - 12yr',
    title: 'After-School Care',
    description:
      'Structured support bridging the gap between school and home, focusing on academic reinforcement and relaxed socialization.',
    image: afterSchoolImage,
    imageAlt: 'Children painting and making crafts in a Dora\u2019s Nest after-school classroom',
    features: [
      { label: 'Dedicated homework supervision', icon: <BookIcon className="h-[17px] w-[17px]" /> },
      { label: 'Healthy afternoon snacks', icon: <CupIcon className="h-[17px] w-[17px]" /> },
      { label: 'Seamless school pickup logistics', icon: <BusIcon className="h-[17px] w-[17px]" /> },
    ],
  },
];

export function ProgramsPage() {
  return (
    <div className="bg-[#FBF9F4] pb-[48px]">
      <section className="pt-[64px] sm:pt-[80px] lg:pt-[100px]">
        <div className="mx-auto max-w-[1284px] px-6 md:px-10 lg:px-[66px]">
          <h1
            data-reveal="up"
            className="text-center font-brand text-[34px] font-bold leading-[1.15] tracking-[-0.4px] text-brand sm:text-[42px] lg:text-[46px]"
          >
            Our Care Programs
          </h1>
          <p
            data-reveal="up"
            className="mx-auto mt-[20px] max-w-[640px] text-center font-brand text-[16px] leading-[26px] text-ink [--reveal-delay:90ms] sm:mt-[24px] sm:text-[18px] sm:leading-[30px]"
          >
            Tailored environments for every stage of early childhood, blending maternal warmth with
            modern professionalism.
          </p>

          <div className="mt-[48px] grid gap-[24px] pb-[56px] sm:mt-[56px] lg:mt-[78px] lg:grid-cols-2 lg:gap-[34px] lg:pb-[70px]">
            {carePrograms.map((program, index) => (
              <article
                key={program.title}
                data-reveal="up"
                style={{ '--reveal-delay': `${index * 140}ms` } as CSSProperties}
                className="card-lift group flex min-w-0 flex-col overflow-hidden rounded-[12px] border border-[#EFEDE7] bg-white shadow-[0_20px_45px_-40px_rgba(63,72,75,0.4)] hover:shadow-[0_30px_55px_-38px_rgba(63,72,75,0.4)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={program.image}
                    width={560}
                    height={250}
                    alt={program.imageAlt}
                    className="h-[190px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] sm:aspect-[560/250] sm:h-auto"
                  />
                  <span className="absolute left-[13px] top-[13px] inline-flex h-[34px] items-center rounded-full bg-[#F1EEF4]/90 px-[16px] font-brand text-[13px] font-semibold leading-none text-brand backdrop-blur-sm">
                    {program.ages}
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-[24px] pb-[32px] pt-[28px] sm:px-[32px] sm:pt-[34px] sm:pb-[50px]">
                  <h2 className="font-brand text-[26px] font-bold leading-[34px] text-brand sm:text-[28px]">
                    {program.title}
                  </h2>
                  <p className="mt-[14px] font-brand text-[15px] leading-[26px] text-ink sm:text-[16px]">
                    {program.description}
                  </p>

                  <ul className="mt-[26px] flex flex-col gap-[12px]">
                    {program.features.map((feature) => (
                      <li
                        key={feature.label}
                        className="flex items-center gap-[14px] font-brand text-[15px] leading-[24px] text-ink sm:text-[16px]"
                      >
                        <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center text-brand">
                          {feature.icon}
                        </span>
                        {feature.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PickupSection />
    </div>
  );
}
