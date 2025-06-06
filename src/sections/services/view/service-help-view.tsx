'use client';

import { useScroll } from 'framer-motion';

import ScrollProgress from 'src/components/scroll-progress';
import MobileContainer from 'src/components/shared/mobile-container';

import ServiceHelp from '../help/service-help';

// ----------------------------------------------------------------------

export default function ServiceView() {
  const { scrollYProgress } = useScroll();
  return (
    <MobileContainer>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <ServiceHelp />
    </MobileContainer>
  );
}
