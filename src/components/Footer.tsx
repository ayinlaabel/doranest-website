import type { CSSProperties } from 'react';

const footerColumns = [
  [
    { label: 'Location & Hours', href: '/contact#hours' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'WhatsApp Support', href: 'https://wa.me/' },
  ],
  [
    { label: 'Staff Portal', href: '/staff-portal' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
];

export function Footer() {
  return (
    <footer className="bg-footer">
      <div className="mx-auto max-w-[1284px] px-6 md:px-10 lg:px-[66px]">
        <div className="grid grid-cols-2 gap-x-[32px] gap-y-[40px] pt-[48px] lg:grid-cols-[293px_294px_1fr] lg:gap-x-0 lg:pt-[50px]">
          <div data-reveal="up" className="col-span-2 pt-[2px] lg:col-span-1">
            <a
              href="/"
              className="inline-block font-brand text-[22.5px] font-semibold leading-none text-brand"
              aria-label="Dora's Nest — Home"
            >
              Dora&apos;s Nest
            </a>
            <p className="mt-[18px] max-w-[250px] font-brand text-[14.7px] leading-[24px] text-ink">
              Providing a nurturing, safe, and premium environment for Lagos&apos; brightest little
              minds.
            </p>
          </div>

          {footerColumns.map((column, index) => (
            <nav
              key={index}
              data-reveal="up"
              style={{ '--reveal-delay': `${index * 100 + 90}ms` } as CSSProperties}
              className="flex flex-col gap-[16px] font-brand text-[15px] font-medium leading-[20px] text-ink"
              aria-label={index === 0 ? 'Location and contact' : 'Company'}
            >
              {column.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          ))}
        </div>

        <div data-reveal="fade" className="mt-[40px] border-t border-footer-line lg:-mx-[24px]" />

        <p
          data-reveal="fade"
          className="pt-[24px] pb-[24px] font-brand text-[11.7px] leading-[16px] text-ink [--reveal-delay:120ms]"
        >
          © 2024 Dora&apos;s Nest Childcare. All Rights Reserved. Licensed by Lagos State Ministry
          of Education.
        </p>
      </div>
    </footer>
  );
}
