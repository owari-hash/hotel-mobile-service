'use client';

import { useScroll } from 'framer-motion';

import { _servicesByCategories } from 'src/_mock/_services';
import ScrollProgress from 'src/components/scroll-progress';
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
      {/*
      <HomeStats />

      <HomeFeatured />

      <HomeTestimonials /> */}
    </MobileContainer>
  );
}
