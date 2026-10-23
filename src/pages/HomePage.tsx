import { Hero } from '../components/Hero';
import { Programs } from '../components/Programs';
import { VisionMission } from '../components/VisionMission';
import { Testimonials } from '../components/Testimonials';

export function HomePage() {
  return (
    <>
      <Hero />
      <Programs />
      <VisionMission />
      <Testimonials />
    </>
  );
}
