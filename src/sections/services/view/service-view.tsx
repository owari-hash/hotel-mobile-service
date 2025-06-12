'use client';

import { useScroll } from 'framer-motion';

import ScrollProgress from 'src/components/scroll-progress';
import MobileContainer from 'src/components/shared/mobile-container';

import ServiceList from '../list/service-list';
import ServiceHero from '../list/service-hero';

// ----------------------------------------------------------------------

export default function ServiceView() {
  const { scrollYProgress } = useScroll();
  return (
    <MobileContainer variant="mobile" disableGutters sx={{ mt: 0, pt: 0 }}>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <ServiceHero />

      <ServiceList />
    </MobileContainer>
  );
}
