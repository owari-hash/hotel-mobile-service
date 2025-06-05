'use client';

import { useScroll } from 'framer-motion';

import { _servicesByCategories } from 'src/_mock/_services';
import ScrollProgress from 'src/components/scroll-progress';

import HomeHero from '../home-hero';
import HomeLandingHotCategories from '../home-category';

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />

      <HomeLandingHotCategories categories={_servicesByCategories} />

      {/* <HomeFlexibleComponents />

      <HomeFeatureHighlights /> */}

      {/* <HomeForDesigner />

      <PricingHome plans={_pricingHome} />  

      <HomeFAQs />

      <HomeCombination />

      <HomeAdvertisement /> */}
    </>
  );
}
