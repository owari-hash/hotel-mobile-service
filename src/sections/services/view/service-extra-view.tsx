'use client';

import { useScroll } from 'framer-motion';

import ScrollProgress from 'src/components/scroll-progress';
import MobileContainer from 'src/components/shared/mobile-container';

import ServiceExtra from '../list/service-extra';

// ----------------------------------------------------------------------

export default function ServiceExtraView() {
  const { scrollYProgress } = useScroll();
  return (
    <MobileContainer>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <ServiceExtra />
    </MobileContainer>
  );
}
