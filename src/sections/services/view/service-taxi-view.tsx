'use client';

import { useScroll } from 'framer-motion';

import ScrollProgress from 'src/components/scroll-progress';
import MobileContainer from 'src/components/shared/mobile-container';

import ServiceTaxi from '../list/service-taxi';

// ----------------------------------------------------------------------

export default function ServiceTaxiView() {
  const { scrollYProgress } = useScroll();
  return (
    <MobileContainer>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <ServiceTaxi />
    </MobileContainer>
  );
}
