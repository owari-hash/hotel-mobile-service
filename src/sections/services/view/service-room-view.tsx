'use client';

import { useScroll } from 'framer-motion';

import ScrollProgress from 'src/components/scroll-progress';
import MobileContainer from 'src/components/shared/mobile-container';

import ServiceRoom from '../list/service-room';

// ----------------------------------------------------------------------

export default function ServiceRoomView() {
  const { scrollYProgress } = useScroll();
  return (
    <MobileContainer>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <ServiceRoom />
    </MobileContainer>
  );
}
