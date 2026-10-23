import { useCallback, useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M9.6 5.4c-3.4 1.5-5.6 4.4-5.6 8.2 0 3 1.7 5 4.2 5 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8.1-1.1.2.5-1.7 1.8-3.1 3.6-4L9.6 5.4Zm10 0c-3.4 1.5-5.6 4.4-5.6 8.2 0 3 1.7 5 4.2 5 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8.1-1.1.2.5-1.7 1.8-3.1 3.6-4l-1.6-2.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3 1.1-6.5L2.6 9.4l6.5-.9L12 2.6Z" />
    </svg>
  );
}

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m14.5 5.5-6.5 6.5 6.5 6.5" />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m9.5 5.5 6.5 6.5-6.5 6.5" />
    </svg>
  );
}

const testimonials = [
  {
    quote:
      "Dora's Nest has been more than a crèche for our family. The teachers know our daughter by name, notice the smallest changes in her day, and celebrate every little milestone with us. She comes home singing new songs and asking to go back.",
    name: 'Amaka O.',
    detail: 'Parent of Ada, 2 years',
    initials: 'AO',
  },
  {
    quote:
      'As first-time parents, we were nervous about leaving our son. The daily updates, the warm handovers, and the genuine care from the team made the transition effortless. We could not have asked for a better start.',
    name: 'Tunde & Bisi A.',
    detail: 'Parents of Kolade, 18 months',
    initials: 'TB',
  },
  {
    quote:
      'The balance of play and learning is exactly what we hoped for. Our daughter is more confident, more curious, and genuinely excited about school every morning. That says everything.',
    name: 'Chiamaka N.',
    detail: 'Parent of Zara, 3 years',
    initials: 'CN',
  },
  {
    quote:
      "From our very first tour, we felt the difference. The space is calm, clean, and thoughtfully set up for little hands and busy feet. It feels like a home away from home.",
    name: 'Folake A.',
    detail: 'Parent of Demilade, 2 years',
    initials: 'FA',
  },
  {
    quote:
      'Our son was quite shy when he joined, and the teachers were so patient with him. Within weeks he was greeting everyone at drop-off and telling us about his friends. We are so grateful.',
    name: 'Ifeanyi & Ngozi E.',
    detail: 'Parents of Chinedu, 3 years',
    initials: 'IE',
  },
  {
    quote:
      'The communication is outstanding. We always know how the day went, what our daughter ate, and the little moments we missed. It gives us complete peace of mind while we work.',
    name: 'Yewande B.',
    detail: 'Parent of Morayo, 20 months',
    initials: 'YB',
  },
  {
    quote:
      'The flexible pickup has been a lifesaver for our family. Knowing our child is safe, happy, and well cared for makes the long workdays so much easier to manage.',
    name: 'Emeka & Adaeze O.',
    detail: 'Parents of Somto, 4 years',
    initials: 'EO',
  },
  {
    quote:
      'What stands out most is the warmth. Every teacher greets our daughter by name, and she runs in smiling every morning. You cannot fake that kind of environment.',
    name: 'Halima S.',
    detail: 'Parent of Amina, 2 years',
    initials: 'HS',
  },
];

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    setCanScrollPrev(track.scrollLeft > 2);
    setCanScrollNext(track.scrollLeft < maxScrollLeft - 2);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateScrollState();
    track.addEventListener('scroll', updateScrollState, { passive: true });

    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(track);

    return () => {
      track.removeEventListener('scroll', updateScrollState);
      resizeObserver.disconnect();
    };
  }, [updateScrollState]);

  const slide = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;

    const cards = track.querySelectorAll<HTMLElement>('[data-testimonial-card]');
    const distance =
      cards.length > 1
        ? cards[1].offsetLeft - cards[0].offsetLeft
        : (cards[0]?.offsetWidth ?? track.clientWidth);

    track.scrollBy({ left: distance * direction, behavior: 'smooth' });
  };

  return (
    <section id="testimonials" className="bg-white">
      <div className="mx-auto max-w-[1284px] px-6 md:px-10 lg:px-[66px]">
        <div className="py-[64px] lg:py-[88px]">
          <div className="text-center">
            <p
              data-reveal="up"
              className="font-brand text-[11.5px] font-semibold uppercase leading-[18px] tracking-[0.13em] text-[#775A00]"
            >
              Parent Testimonials
            </p>
            <h2
              data-reveal="up"
              className="mt-[14px] font-brand text-[26px] font-bold leading-[34px] tracking-[-0.3px] text-brand [--reveal-delay:80ms] sm:text-[30px] sm:leading-[38px]"
            >
              Loved by the families who trust us
            </h2>
            <p
              data-reveal="up"
              className="mx-auto mt-[14px] max-w-[620px] font-brand text-[15px] leading-[25px] text-ink [--reveal-delay:150ms] sm:text-[16px] sm:leading-[26px]"
            >
              Real words from parents who have watched their little ones grow and thrive at
              Dora&apos;s Nest.
            </p>
          </div>

          <div className="mt-[32px] flex items-center justify-between gap-[16px] lg:mt-[44px]">
            <p className="hidden font-brand text-[12px] leading-[18px] text-ink/70 sm:block">
              Swipe or use the arrows to explore more stories.
            </p>
            <div className="ml-auto flex shrink-0 items-center gap-[10px]">
              <button
                type="button"
                onClick={() => slide(-1)}
                disabled={!canScrollPrev}
                aria-label="Previous testimonials"
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-brand/20 text-brand transition-colors duration-200 hover:border-brand hover:bg-brand hover:text-white disabled:cursor-not-allowed disabled:border-[#E4E0D7] disabled:text-[#B8B2A6] disabled:hover:bg-transparent"
              >
                <ChevronLeftIcon className="h-[18px] w-[18px]" />
              </button>
              <button
                type="button"
                onClick={() => slide(1)}
                disabled={!canScrollNext}
                aria-label="Next testimonials"
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-brand/20 text-brand transition-colors duration-200 hover:border-brand hover:bg-brand hover:text-white disabled:cursor-not-allowed disabled:border-[#E4E0D7] disabled:text-[#B8B2A6] disabled:hover:bg-transparent"
              >
                <ChevronRightIcon className="h-[18px] w-[18px]" />
              </button>
            </div>
          </div>

          <div
            ref={trackRef}
            role="region"
            aria-label="Parent testimonials"
            className="mt-[16px] flex snap-x snap-mandatory gap-[18px] overflow-x-auto scroll-smooth pb-[8px] [-ms-overflow-style:none] [scrollbar-width:none] lg:gap-[22px] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((testimonial, index) => (
              <figure
                key={testimonial.name}
                data-testimonial-card
                data-reveal="up"
                style={{ '--reveal-delay': `${120 + index * 100}ms` } as CSSProperties}
                className="card-lift flex shrink-0 grow-0 basis-full snap-start flex-col rounded-[20px] border border-[#E9E4D9] bg-[#FBF9F4] p-[26px] hover:shadow-[0_28px_55px_-42px_rgba(63,72,75,0.45)] sm:basis-[calc(50%_-_9px)] sm:p-[30px] lg:basis-[calc((100%_-_44px)/3)]"
              >
                <QuoteIcon className="h-[28px] w-[28px] text-[#D9D0E6]" />

                <div className="mt-[18px] flex items-center gap-[4px] text-[#C99A1E]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <StarIcon key={starIndex} className="h-[14px] w-[14px]" />
                  ))}
                </div>

                <blockquote className="mt-[16px] flex-1 font-brand text-[14.5px] leading-[25px] text-ink">
                  {testimonial.quote}
                </blockquote>

                <figcaption className="mt-[24px] flex items-center gap-[12px] border-t border-[#E9E4D9] pt-[20px]">
                  <span
                    aria-hidden="true"
                    className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#F0EDF3] font-brand text-[13px] font-bold text-brand"
                  >
                    {testimonial.initials}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-brand text-[14px] font-semibold leading-[20px] text-[#1B1C19]">
                      {testimonial.name}
                    </span>
                    <span className="block font-brand text-[12px] leading-[18px] text-ink/80">
                      {testimonial.detail}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
