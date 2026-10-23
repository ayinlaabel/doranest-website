import { useState } from 'react';
import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import outdoorCourtyardImage from '../assets/images/gallery-outdoor-courtyard.png';
import earlyLiteracyImage from '../assets/images/gallery-early-literacy.png';
import dedicatedInfantCareImage from '../assets/images/gallery-dedicated-infant-care.png';
import hygienicCrecheImage from '../assets/images/gallery-hygienic-creche.png';
import natureGardeningImage from '../assets/images/gallery-nature-gardening.png';
import developmentalActivitiesImage from '../assets/images/gallery-developmental-activities.png';

const categories = ['All', 'Play Areas', 'Learning Spaces', 'Dining & Rest', 'Outdoor'] as const;

type Category = (typeof categories)[number];

interface GalleryItem {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  category: Exclude<Category, 'All'>;
}

const galleryItems: GalleryItem[] = [
  {
    title: 'Outdoor Play & Courtyard',
    description: 'Safe outdoor play spaces where children play, learn, and grow together.',
    image: outdoorCourtyardImage,
    imageAlt:
      "Swing set, tricycle and play tunnel in the Dora's Nest outdoor courtyard with the words 'We play, learn and grow together'",
    category: 'Outdoor',
  },
  {
    title: 'Early Literacy Corner',
    description: 'Sensory and touch-and-feel book collection fostering early speech and curiosity.',
    image: earlyLiteracyImage,
    imageAlt: "A colourful collection of early literacy board books at Dora's Nest",
    category: 'Learning Spaces',
  },
  {
    title: 'Dedicated Infant Care',
    description: 'Individualized cribs ensuring secure, restful nap routines in a calm environment.',
    image: dedicatedInfantCareImage,
    imageAlt: 'A wooden infant crib with fresh bedding in the Dora\u2019s Nest rest suite',
    category: 'Dining & Rest',
  },
  {
    title: 'Hygienic Infant Crèche',
    description: 'Clean, temperature-regulated sleep suites with dedicated natural wood cribs.',
    image: hygienicCrecheImage,
    imageAlt: 'Natural wood cribs in the bright, hygienic Dora\u2019s Nest infant crèche',
    category: 'Dining & Rest',
  },
  {
    title: 'Nature & Sensory Gardening',
    description: 'Hands-on discovery and gentle outdoor learning in our sunny green spaces.',
    image: natureGardeningImage,
    imageAlt: "A toddler watering plants in Dora's Nest sensory garden",
    category: 'Outdoor',
  },
  {
    title: 'Developmental Activities',
    description: 'Arts & crafts, motor skills development, and joyful active group play.',
    image: developmentalActivitiesImage,
    imageAlt: "Children taking part in art, music and movement activities at Dora's Nest",
    category: 'Play Areas',
  },
];

function PinHomeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 21.4c4.7-4.5 7.2-8 7.2-11.4a7.2 7.2 0 1 0-14.4 0c0 3.4 2.5 6.9 7.2 11.4Z" />
      <path d="M9.2 11 12 8.6 14.8 11" />
      <path d="M10.2 13.3v2.4h3.6v-2.4" />
    </svg>
  );
}

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  // Re-scan whenever the filter changes so newly rendered tiles animate in.
  useScrollReveal(activeCategory);

  const visibleItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-[#FBF9F4]">
      {/* Gallery */}
      <section className="pb-[40px] pt-[56px] sm:pt-[68px] lg:pt-[92px]">
        <div className="mx-auto max-w-[1284px] px-6 md:px-10 lg:px-[66px]">
          <h1
            data-reveal="up"
            className="text-center font-brand text-[34px] font-bold leading-[1.15] tracking-[-0.4px] text-brand sm:text-[42px] lg:text-[46px]"
          >
            A Glimpse into Our Nest
          </h1>
          <p
            data-reveal="up"
            className="mx-auto mt-[18px] max-w-[660px] text-center font-brand text-[16px] leading-[26px] text-ink [--reveal-delay:90ms] sm:mt-[26px] sm:text-[18px] sm:leading-[30px]"
          >
            Explore the safe, vibrant, and nurturing spaces where your child&apos;s journey begins.
          </p>

          {/* Category filters */}
          <div
            data-reveal="up"
            className="mt-[36px] flex flex-wrap items-center justify-center gap-[10px] [--reveal-delay:170ms] sm:gap-[14px] lg:mt-[66px]"
            role="group"
            aria-label="Filter gallery by space"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`inline-flex h-[42px] items-center justify-center rounded-full border px-[22px] font-brand text-[14px] leading-none transition-all duration-300 hover:-translate-y-0.5 sm:h-[46px] sm:px-[25px] ${
                    isActive
                      ? 'border-[#2B2C28] bg-white text-ink'
                      : 'border-[#D9D3C8] bg-transparent text-ink hover:border-brand hover:text-brand'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Tiles */}
          <div
            key={activeCategory}
            className="mt-[32px] grid gap-[22px] sm:grid-cols-2 lg:mt-[38px] lg:grid-cols-3"
          >
            {visibleItems.map((item, index) => (
              <article
                key={item.title}
                data-reveal="up"
                style={{ '--reveal-delay': `${(index % 3) * 90}ms` } as CSSProperties}
                className="card-lift group flex min-w-0 flex-col overflow-hidden rounded-[10px] bg-white shadow-[0_18px_40px_-36px_rgba(63,72,75,0.4)] hover:shadow-[0_28px_50px_-34px_rgba(63,72,75,0.35)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    width={368}
                    height={276}
                    alt={item.imageAlt}
                    loading="lazy"
                    className="aspect-[368/276] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <div className="px-[20px] pb-[18px] pt-[16px] text-center">
                  <h2 className="font-brand text-[17px] font-semibold leading-[24px] text-brand">
                    {item.title}
                  </h2>
                  <p className="mt-[4px] font-brand text-[14.5px] leading-[22px] text-ink">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="bg-[#E2DCE4]">
        <div className="mx-auto max-w-[1284px] px-6 py-[60px] md:px-10 lg:pt-[64px] lg:pb-[50px]">
          <div className="flex flex-col items-center text-center">
            <span data-reveal="scale" className="flex text-brand">
              <PinHomeIcon className="h-[32px] w-[32px]" />
            </span>

            <h2
              data-reveal="up"
              className="mt-[24px] font-brand text-[30px] font-bold leading-[1.2] tracking-[-0.3px] text-brand [--reveal-delay:90ms] sm:text-[34px] lg:mt-[34px] lg:text-[36px]"
            >
              See it in Person
            </h2>

            <p
              data-reveal="up"
              className="mt-[16px] max-w-[760px] font-brand text-[16px] leading-[27px] text-ink [--reveal-delay:170ms] sm:text-[17px] sm:leading-[30px]"
            >
              Pictures only tell half the story. We invite you to experience the warmth and safety of
              Dora&apos;s Nest firsthand.
            </p>

            <div
              data-reveal="up"
              className="mt-[30px] flex flex-wrap items-center justify-center gap-[16px] [--reveal-delay:250ms] sm:mt-[38px] lg:mt-[52px]"
            >
              <Link
                to="/tour"
                className="inline-flex h-[50px] items-center justify-center rounded-full bg-brand px-[30px] font-brand text-[14px] font-semibold leading-none text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#574374] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                Book a Tour Today
              </Link>
              <Link
                to="/admissions#enroll"
                className="inline-flex h-[50px] items-center justify-center rounded-full bg-cta px-[38px] font-brand text-[14px] font-semibold leading-none text-cta-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F8C43C] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
