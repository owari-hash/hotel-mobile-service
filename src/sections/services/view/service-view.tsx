'use client';

import { useScroll } from 'framer-motion';
import { usePathname } from 'next/navigation';

import ScrollProgress from 'src/components/scroll-progress';
import MobileContainer from 'src/components/shared/mobile-container';

import ServiceHero from '../list/service-hero';
import ServiceListTemplate from '../list/service-list-template';

// ----------------------------------------------------------------------

export default function ServiceView() {
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();

  const getCategoryNameFromPath = (path: string) => {
    const parts = path.split('/');
    const servicePart = parts[parts.length - 1]; // e.g., "food-service"
    switch (servicePart) {
      case 'room-service':
        return 'Өрөөний үйлчилгээ';
      case 'food-service':
        return 'Хоол';
      case 'extra-service':
        return 'Нэмэлт үйлчилгээ';
      case 'entertainment-service':
        return 'Энтертайнмент';
      case 'taxi-service':
        return 'Такси';
      case 'guide-service':
        return 'Хөтөч';
      default:
        return '';
    }
  };

  const categoryName = getCategoryNameFromPath(pathname);

  return (
    <MobileContainer variant="mobile" disableGutters sx={{ mt: 0, pt: 0 }}>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <ServiceHero />

      {categoryName && <ServiceListTemplate categoryName={categoryName} />}
    </MobileContainer>
  );
}
