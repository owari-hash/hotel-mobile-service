'use client';

import { useScroll } from 'framer-motion';

import { Container } from '@mui/system';

import ScrollProgress from 'src/components/scroll-progress';
import { _servicesByCategories } from 'src/_mock/_services';

import HomeHero from '../home-hero';
import HomeLandingHotCategories from '../home-category';

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();
  return (
    <Container>
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
    </Container>
  );
}
