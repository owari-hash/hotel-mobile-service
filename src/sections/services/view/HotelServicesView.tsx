'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { m, LazyMotion, domAnimation } from 'framer-motion';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';

import { useScroll } from 'framer-motion';
import ScrollProgress from 'src/components/scroll-progress';
import MobileContainer from 'src/components/shared/mobile-container';
import ServiceCard from 'src/components/service-card/service-card';

import {
  useGetHotelServiceTypes,
  useGetHotelServicesByTypeId,
  useGetHotelRoomAmenityTypes,
  useGetHotelRoomAmenitiesByTypeId,
} from 'src/api/service';
import { Category, HotelService, HotelRoomAmenity } from 'src/types/service';
import { ASSETS_API } from 'src/config-global';

// ----------------------------------------------------------------------

type CombinedServiceItem = {
  id: string;
  title: string;
  content?: string;
  image?: string;
  price?: number;
  category: Category;
  icon?: string;
  active: boolean;
  source: 'hotel_service' | 'hotel_room_amenity';
};

export default function HotelServicesView() {
  const { scrollYProgress } = useScroll();

  const { hotelServiceTypes, hotelServiceTypesLoading, hotelServiceTypesError } =
    useGetHotelServiceTypes();
  const { hotelRoomAmenityTypes, hotelRoomAmenityTypesLoading, hotelRoomAmenityTypesError } =
    useGetHotelRoomAmenityTypes();

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const allCategories = useMemo(() => {
    const categories: Category[] = [];
    if (hotelServiceTypes) {
      categories.push(
        ...hotelServiceTypes.map((type) => ({ ...type, source: 'hotel_service' as const }))
      );
    }
    if (hotelRoomAmenityTypes) {
      categories.push(
        ...hotelRoomAmenityTypes.map((type) => ({ ...type, source: 'hotel_room_amenity' as const }))
      );
    }
    return categories;
  }, [hotelServiceTypes, hotelRoomAmenityTypes]);

  useEffect(() => {
    if (allCategories.length > 0 && !selectedCategory) {
      setSelectedCategory(allCategories[0]);
    }
  }, [allCategories, selectedCategory]);

  const { hotelServices, hotelServicesLoading, hotelServicesError } = useGetHotelServicesByTypeId(
    selectedCategory?.source === 'hotel_service' ? selectedCategory.id : ''
  );

  const { hotelRoomAmenities, hotelRoomAmenitiesLoading, hotelRoomAmenitiesError } =
    useGetHotelRoomAmenitiesByTypeId(
      selectedCategory?.source === 'hotel_room_amenity' ? selectedCategory.id : ''
    );

  const isLoading =
    hotelServiceTypesLoading ||
    hotelRoomAmenityTypesLoading ||
    hotelServicesLoading ||
    hotelRoomAmenitiesLoading;
  const isError =
    hotelServiceTypesError ||
    hotelRoomAmenityTypesError ||
    hotelServicesError ||
    hotelRoomAmenitiesError;

  const displayedItems = useMemo(() => {
    let items: CombinedServiceItem[] = [];

    if (selectedCategory?.source === 'hotel_service' && hotelServices) {
      items = hotelServices.map((service: HotelService) => ({
        id: service.id,
        title: service.name,
        content: service.description,
        image: service.image ? `${ASSETS_API}${service.image}` : '',
        price: service.price,
        category: service.service_type_id,
        active: service.active,
        source: 'hotel_service',
      }));
    } else if (selectedCategory?.source === 'hotel_room_amenity' && hotelRoomAmenities) {
      items = hotelRoomAmenities.map((amenity: HotelRoomAmenity) => ({
        id: amenity.id,
        title: amenity.name,
        content: amenity.description,
        image: amenity.icon ? `${ASSETS_API}${amenity.icon}` : '', // Assuming icon can be used as image
        price: 0, // Amenities might not have prices
        category: {
          id: amenity.amenities_category_id,
          name: amenity.amenities_category_name,
          source: 'hotel_room_amenity',
        },
        icon: amenity.icon,
        active: amenity.active,
        source: 'hotel_room_amenity',
      }));
    }

    return items.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [selectedCategory, hotelServices, hotelRoomAmenities, searchTerm]);

  const handleChipClick = useCallback((category: Category) => {
    setSelectedCategory(category);
    setSearchTerm(''); // Clear search term when switching categories
  }, []);

  if (isLoading) {
    return (
      <Stack alignItems="center" justifyContent="center" sx={{ height: '80vh' }}>
        <CircularProgress />
        <Typography variant="subtitle2" sx={{ mt: 2 }}>
          Loading services...
        </Typography>
      </Stack>
    );
  }

  if (isError) {
    return (
      <Stack alignItems="center" justifyContent="center" sx={{ height: '80vh' }}>
        <Alert severity="error">Error loading data. Please try again later.</Alert>
      </Stack>
    );
  }

  return (
    <MobileContainer variant="mobile" disableGutters sx={{ mt: 0, pt: 0 }}>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1100,
          bgcolor: 'background.paper',
          py: 2,
          boxShadow: (theme) => theme.shadows[1],
        }}
      >
        <Container>
          <Stack direction="row" spacing={1} sx={{ overflowX: 'auto', pb: 1 }}>
            {allCategories.map((category) => (
              <Chip
                key={category.id}
                label={category.name}
                color={selectedCategory?.id === category.id ? 'primary' : 'default'}
                onClick={() => handleChipClick(category)}
                sx={{
                  minWidth: 'max-content',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    bgcolor: (theme) => theme.palette.primary.light,
                    color: (theme) => theme.palette.primary.contrastText,
                  },
                }}
              />
            ))}
          </Stack>
          <TextField
            fullWidth
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ mt: 2 }}
          />
        </Container>
      </Box>

      <Container sx={{ py: 3 }}>
        {selectedCategory && (
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Typography variant="h4" sx={{ mb: 3 }}>
              {selectedCategory.name}
            </Typography>
            <Grid container spacing={3}>
              {displayedItems.length > 0 ? (
                displayedItems.map((item) => (
                  <Grid item xs={12} sm={6} md={4} key={item.id}>
                    <ServiceCard
                      service={{
                        id: item.id,
                        title: item.title,
                        content: item.content,
                        image: item.image,
                        price: item.price,
                        category: item.category,
                        icon: item.icon,
                        active: item.active,
                      }}
                      language="en"
                      onOrderClick={() => {}}
                    />
                  </Grid>
                ))
              ) : (
                <Grid item xs={12}>
                  <Alert severity="info">No services or amenities found for this category.</Alert>
                </Grid>
              )}
            </Grid>
          </m.div>
        )}
      </Container>
    </MobileContainer>
  );
}
