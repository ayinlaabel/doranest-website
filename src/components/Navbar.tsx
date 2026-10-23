import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../assets/images/logo.png';

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
  cta = { label: 'Enroll Now', href: '/admissions#enroll', variant: 'secondary' },
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    const path = href.split('#')[0];
    if (path === '/') return pathname === '/';
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <nav className="animate-slide-down fixed top-0 left-0 z-50 w-full bg-header">
      <div className="mx-auto flex h-[80px] max-w-[1284px] items-center justify-between gap-8 px-6 md:px-10 lg:px-[66px]">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center" aria-label="Dora's Nest — Home">
            {logo || (
              <img
                src={logoImage}
                alt="Dora's Nest Crèche"
                width={768}
                height={456}
                className="h-[52px] w-auto mix-blend-multiply sm:h-[58px]"
              />
            )}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-[24.5px] lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`nav-underline relative font-brand text-[13.5px] font-medium leading-[24px] transition-colors after:absolute after:inset-x-0 after:-bottom-px after:h-[2px] after:rounded-full after:bg-brand after:content-[''] ${
                isActive(item.href) ? 'text-brand' : 'text-ink hover:text-brand'
              }`}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center lg:flex">
          <Link
            to={cta.href}
            className={`inline-flex h-[44px] items-center justify-center rounded-full px-[25px] font-brand text-[13px] font-semibold leading-none transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
              cta.variant === 'primary'
                ? 'bg-brand text-header hover:bg-brand/90'
                : 'bg-cta text-cta-ink hover:bg-cta/90'
            }`}
          >
            {cta.label}
          </Link>
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
              <Link
                key={item.href}
                to={item.href}
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
              </Link>
            ))}
            <Link
              to={cta.href}
              className={`mt-2 inline-flex h-[44px] items-center justify-center rounded-full px-[25px] font-brand text-[13px] font-semibold ${
                cta.variant === 'primary'
                  ? 'bg-brand text-header'
                  : 'bg-cta text-cta-ink'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {cta.label}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}