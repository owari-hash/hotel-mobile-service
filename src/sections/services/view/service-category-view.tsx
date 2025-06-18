'use client';

import { useScroll } from 'framer-motion';

import ScrollProgress from 'src/components/scroll-progress';
import MobileContainer from 'src/components/shared/mobile-container';

import ServiceListTemplate from '../list/service-list-template';

// ----------------------------------------------------------------------

type ServiceCategoryViewProps = {
  categoryName: string;
};

export default function ServiceCategoryView({ categoryName }: ServiceCategoryViewProps) {
  const { scrollYProgress } = useScroll();

  return (
    <MobileContainer variant="mobile" disableGutters sx={{ mt: 0, pt: 0 }}>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <ServiceListTemplate categoryName={categoryName} />
    </MobileContainer>
  );
}
