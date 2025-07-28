'use client';

import { useScroll } from 'framer-motion';

import ScrollProgress from 'src/components/scroll-progress';
import MobileContainer from 'src/components/shared/mobile-container';

import ServiceHero from '../list/service-hero';
import { useGetProductTemplates } from 'src/api/service'; // Assuming this hook exists

// ----------------------------------------------------------------------

type ServiceViewProps = {
  id: string;
};

export default function ServiceView({ id }: ServiceViewProps) {
  const { scrollYProgress } = useScroll();
  const { hotelService, hotelServiceLoading, hotelServiceError } = useServiceData(id);

  if (hotelServiceLoading) {
    return <div>Loading hotel service...</div>;
  }

  if (hotelServiceError) {
    return <div>Error loading hotel service.</div>;
  }

  if (!hotelService) {
    return <div>Hotel service not found.</div>;
  }

  return (
    <MobileContainer variant="mobile" disableGutters sx={{ mt: 0, pt: 0 }}>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <ServiceHero />

      {/* You can display product details here */}
      <div>
        <h1>{hotelService.product_name || hotelService.service_categ.name}</h1>
        <p>{hotelService.description}</p>
        {/* Add more hotel service details as needed */}
      </div>
    </MobileContainer>
  );
}
