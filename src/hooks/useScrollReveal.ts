import { useEffect } from 'react';

/**
 * Reveals every element marked with `data-reveal` as it scrolls into view.
 *
 * Add `data-reveal="up" | "left" | "right" | "scale" | "fade"` to an element
 * (optionally with a `--reveal-delay` custom property) and the element fades
 * into place once it enters the viewport.
 *
 * Pass a `revealKey` to re-scan the DOM after content changes, for example when
 * a filtered list renders a new set of cards.
 */
export function useScrollReveal(revealKey?: unknown) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      elements.forEach((element) => element.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -48px 0px' },
    );

    elements.forEach((element) => {
      if (element.classList.contains('is-revealed')) return;
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [revealKey]);
}
