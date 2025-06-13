'use client';

import { useScroll } from 'framer-motion';

import ScrollProgress from 'src/components/scroll-progress';
import MobileContainer from 'src/components/shared/mobile-container';

import ServiceEntertainment from '../list/service-entertainment';

// ----------------------------------------------------------------------

export default function ServiceEntertainmentView() {
  const { scrollYProgress } = useScroll();
  return (
    <MobileContainer>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <ServiceEntertainment />
    </MobileContainer>
  );
}
