import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function SiteLayout() {
  const { pathname, hash, key } = useLocation();

  useScrollReveal(pathname);

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0 });
  }, [pathname, hash, key]);

  return (
    <>
      <Navbar />
      <main key={pathname} className="page-enter pt-[80px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
