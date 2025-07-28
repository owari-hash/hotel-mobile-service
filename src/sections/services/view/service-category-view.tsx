'use client';

import { useScroll } from 'framer-motion';

import ScrollProgress from 'src/components/scroll-progress';
import MobileContainer from 'src/components/shared/mobile-container';

// ----------------------------------------------------------------------

import HotelServicesView from './HotelServicesView'; // Import the new component

export default function ServiceCategoryView() {
  // The existing logic for `ServiceCategoryView` is being replaced by `HotelServicesView`
  // to centralize the display of all service and amenity categories.
  // The `categoryType` and `categoryId` from `useParams` and `useSearchParams`
  // are no longer directly used here, as `HotelServicesView` will manage its own state
  // for selected categories and data fetching.

  return <HotelServicesView />;
}
