import { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  logo?: React.ReactNode;
  navItems?: NavItem[];
  cta?: {
    label: string;
    href: string;
    variant?: 'primary' | 'secondary';
  };
  activePath?: string;
}

export function Navbar({
  logo,
  navItems = [
    { label: 'Our Nest', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Programs', href: '/programs' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Admissions', href: '/admissions' },
  ],
  cta = { label: 'Enroll Now', href: '/enroll', variant: 'secondary' },
  activePath = '/',
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return activePath === '/';
    return activePath.startsWith(href);
  };

  return (
    <nav className="animate-slide-down fixed top-0 left-0 z-50 w-full bg-header">
      <div className="mx-auto flex h-[80px] max-w-[1284px] items-center justify-between gap-8 px-6 md:px-10 lg:px-[66px]">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center" aria-label="Dora's Nest — Home">
            {logo || (
              <span className="inline-block font-brand text-[22.5px] font-semibold leading-none text-brand transition-transform duration-300 hover:scale-[1.02]">
                Dora&apos;s Nest
              </span>
            )}
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-[24.5px] lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-underline relative font-brand text-[13.5px] font-medium leading-[24px] transition-colors after:absolute after:inset-x-0 after:-bottom-px after:h-[2px] after:rounded-full after:bg-brand after:content-[''] ${
                isActive(item.href) ? 'text-brand' : 'text-ink hover:text-brand'
              }`}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center lg:flex">
          <a
            href={cta.href}
            className={`inline-flex h-[44px] items-center justify-center rounded-full px-[25px] font-brand text-[13px] font-semibold leading-none transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
              cta.variant === 'primary'
                ? 'bg-brand text-header hover:bg-brand/90'
                : 'bg-cta text-cta-ink hover:bg-cta/90'
            }`}
          >
            {cta.label}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center rounded-lg p-2 text-ink transition-colors hover:text-brand lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="animate-slide-down border-t border-border bg-header lg:hidden">
          <div className="mx-auto flex max-w-[1284px] flex-col gap-1 px-6 py-4 md:px-10">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`animate-fade-up rounded-lg px-3 py-3 font-brand text-[14px] font-medium ${
                  isActive(item.href)
                    ? 'text-brand'
                    : 'text-ink hover:text-brand'
                }`}
                style={{ animationDelay: `${index * 45}ms` }}
                aria-current={isActive(item.href) ? 'page' : undefined}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={cta.href}
              className={`mt-2 inline-flex h-[44px] items-center justify-center rounded-full px-[25px] font-brand text-[13px] font-semibold ${
                cta.variant === 'primary'
                  ? 'bg-brand text-header'
                  : 'bg-cta text-cta-ink'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {cta.label}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}