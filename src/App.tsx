import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Programs } from './components/Programs';
import { VisionMission } from './components/VisionMission';
import { Footer } from './components/Footer';
import { ProgramsPage } from './pages/ProgramsPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  const pathname = window.location.pathname;
  const isProgramsPage = pathname.startsWith('/programs');
  const isAboutPage = pathname.startsWith('/about');
  const isGalleryPage = pathname.startsWith('/gallery');

  useScrollReveal(pathname);

  return (
    <>
      <Navbar
        activePath={
          isAboutPage ? '/about' : isProgramsPage ? '/programs' : isGalleryPage ? '/gallery' : '/'
        }
      />
      <main key={pathname} className="page-enter pt-[80px]">
        {isAboutPage ? (
          <AboutPage />
        ) : isProgramsPage ? (
          <ProgramsPage />
        ) : isGalleryPage ? (
          <GalleryPage />
        ) : (
          <>
            <Hero />
            <Programs />
            <VisionMission />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
