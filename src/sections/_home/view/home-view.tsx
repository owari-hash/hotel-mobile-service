'use client';

import { useScroll } from 'framer-motion';

import ScrollProgress from 'src/components/scroll-progress';
import { _servicesByCategories } from 'src/_mock/_services';
import MobileContainer from 'src/components/shared/mobile-container';

import HomeHero from '../home-hero';
import HomeLandingHotCategories from '../home-category';

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();
  return (
    <MobileContainer>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />

      <HomeLandingHotCategories categories={_servicesByCategories} />

      {/* <HomeFlexibleComponents />

      <HomeFeatureHighlights />

      <HomeForDesigner /> */}

      {/* <PricingHome plans={_pricingHome} />

      <HomeFAQs />

      <HomeCombination />

      <HomeAdvertisement /> */}
    </MobileContainer>
  );
}
