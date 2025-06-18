'use client';

import { useRouter } from 'next/navigation';
import React, { useRef, useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import { Chip } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { Service } from 'src/types/service';
import Iconify from 'src/components/iconify';
import { _servicesByCategories } from 'src/_mock/_services';
import ServiceDialog from 'src/components/dialog/ServiceDialog';
import ServiceCard from 'src/components/service-card/service-card';
import { ROOM_SERVICES, ROOM_SUBCATEGORIES } from 'src/_mock/_room-services';
import { TAXI_SERVICES, TAXI_SUBCATEGORIES } from 'src/_mock/_taxi-services';
import { FOOD_SERVICES, FOOD_SUBCATEGORIES } from 'src/_mock/_food-services';
import { EXTRA_SERVICES, EXTRA_SUBCATEGORIES } from 'src/_mock/_extra-services';
import { GUIDE_SERVICES, GUIDE_SUBCATEGORIES } from 'src/_mock/_guide-services';
import {
  ENTERTAINMENT_SERVICES,
  ENTERTAINMENT_SUBCATEGORIES,
} from 'src/_mock/_entertainment-services';

type CategoryColor = 'success' | 'info' | 'warning' | 'default' | 'primary';
type CategoryChip = {
  label: string;
  icon: string;
  color: CategoryColor;
};

interface ServiceListTemplateProps {
  categoryName: string;
}

// TODO: [Refactoring] This component is quite large and handles multiple responsibilities.
// Consider breaking it down into smaller, more focused components or custom hooks
// (e.g., a hook for scroll-based category detection, a component for rendering category chips,
// and a component for rendering the list of services) to improve maintainability and readability.
export default function ServiceListTemplate({ categoryName }: ServiceListTemplateProps) {
  const theme = useTheme();
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [activeSubcategory, setActiveSubcategory] = useState<string>('Бүгд'); // Default to 'Бүгд'
  const [language, setLanguage] = useState<string>('mn'); // 'mn' for Mongolian, 'en' for English
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const categoryBarRef = useRef<HTMLDivElement>(null);

  // Dialog state
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      let currentActive = '';

      Object.entries(categoryRefs.current).forEach(([categoryId, ref]) => {
        if (ref) {
          const { top, bottom } = ref.getBoundingClientRect();
          // Check if the category is in the middle of the viewport
          if (top < viewportHeight / 2 && bottom > viewportHeight / 2) {
            currentActive = categoryId;
          }
        }
      });

      if (currentActive) {
        setActiveCategory(currentActive);
      }
    };

    handleScroll(); // Check initial position
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollCategoryIntoView = (categoryId: string) => {
    const categoryButton = document.getElementById(`category-${categoryId}`);
    if (categoryButton && categoryBarRef.current) {
      const scrollContainer = categoryBarRef.current;
      const buttonLeft = categoryButton.offsetLeft;
      const containerWidth = scrollContainer.offsetWidth;
      const scrollPosition = buttonLeft - containerWidth / 2 + categoryButton.offsetWidth / 2;

      scrollContainer.scrollTo({
        left: scrollPosition,
        behavior: 'auto',
      });
    }
  };

  useEffect(() => {
    if (activeCategory) {
      scrollCategoryIntoView(activeCategory);
    }
  }, [activeCategory]);

  const getServicesByCategory = (name: string) => {
    switch (name) {
      case 'Өрөөний үйлчилгээ':
        return ROOM_SERVICES;
      case 'Нэмэлт үйлчилгээ':
        return EXTRA_SERVICES;
      case 'Хоол':
        return FOOD_SERVICES;
      case 'Энтертайнмент':
        return ENTERTAINMENT_SERVICES;
      case 'Такси':
        return TAXI_SERVICES;
      case 'Хөтөч':
        return GUIDE_SERVICES;
      default:
        return [];
    }
  };

  const getSubcategoriesForCategory = (name: string) => {
    switch (name) {
      case 'Хоол':
        return FOOD_SUBCATEGORIES;
      case 'Өрөөний үйлчилгээ':
        return ROOM_SUBCATEGORIES;
      case 'Нэмэлт үйлчилгээ':
        return EXTRA_SUBCATEGORIES;
      case 'Такси':
        return TAXI_SUBCATEGORIES;
      case 'Хөтөч':
        return GUIDE_SUBCATEGORIES;
      case 'Энтертайнмент':
        return ENTERTAINMENT_SUBCATEGORIES;
      default:
        return [];
    }
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'mn' ? 'en' : 'mn'));
  };

  // Simplified category finding
  const currentCategory = _servicesByCategories.find((cat) => cat.name === categoryName);

  const currentServices = (() => {
    const services = getServicesByCategory(categoryName);
    const subcategories = getSubcategoriesForCategory(categoryName);

    if (subcategories.length > 0 && activeSubcategory !== 'Бүгд') {
      return services.filter((service) => service.subcategory === activeSubcategory);
    }
    return services;
  })();

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Stack spacing={3}>
        <Box
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 10,
            bgcolor: 'background.paper',
            borderBottom: () => `1px solid ${theme.palette.divider}`,
            pt: 1,
          }}
        >
          {/* Top Header Row */}
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ px: 2, py: 1 }}
          >
            <IconButton
              onClick={() => router.back()}
              sx={{
                bgcolor: 'background.default',
                boxShadow: theme.customShadows.z8,
                '&:hover': {
                  bgcolor: theme.palette.action.hover,
                },
                width: 40,
                height: 40,
              }}
              size="small"
            >
              <Iconify icon="eva:arrow-ios-back-fill" />
            </IconButton>

            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {language === 'mn' ? 'Үйлчилгээ' : 'Services'}
            </Typography>

            <IconButton
              onClick={toggleLanguage}
              sx={{
                bgcolor: 'background.default',
                boxShadow: theme.customShadows.z8,
                '&:hover': {
                  bgcolor: theme.palette.action.hover,
                },
                width: 40,
                height: 40,
              }}
              size="small"
            >
              <Iconify icon="eva:arrow-ios-back-fill" width={20} />
            </IconButton>
          </Stack>

          {/* Category Bar */}
          <Stack
            ref={categoryBarRef}
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{
              px: 2,
              pb: 2,
              overflowX: 'auto',
              '&::-webkit-scrollbar': { display: 'none' },
              scrollbarWidth: 'none',
            }}
          >
            {getSubcategoriesForCategory(categoryName).length > 0 ? (
              <>
                <Chip
                  id="category-Бүгд"
                  label="Бүгд"
                  variant={activeSubcategory === 'Бүгд' ? 'filled' : 'outlined'}
                  color={activeSubcategory === 'Бүгд' ? 'primary' : 'default'}
                  onClick={() => {
                    setActiveSubcategory('Бүгд');
                    scrollCategoryIntoView('Бүгд');
                  }}
                  sx={{
                    minWidth: 80,
                    '& .MuiChip-label': {
                      fontWeight: activeSubcategory === 'Бүгд' ? 600 : 400,
                    },
                  }}
                />
                {getSubcategoriesForCategory(categoryName).map((subcat) => (
                  <Chip
                    key={subcat.name}
                    id={`category-${subcat.name}`}
                    label={subcat.name}
                    variant={activeSubcategory === subcat.name ? 'filled' : 'outlined'}
                    color={activeSubcategory === subcat.name ? 'primary' : 'default'}
                    onClick={() => {
                      setActiveSubcategory(subcat.name);
                      scrollCategoryIntoView(subcat.name);
                    }}
                    sx={{
                      minWidth: 80,
                      '& .MuiChip-label': {
                        fontWeight: activeSubcategory === subcat.name ? 600 : 400,
                      },
                    }}
                  />
                ))}
              </>
            ) : (
              currentCategory && (
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Chip
                    id={`category-${currentCategory.id}`}
                    label={currentCategory.name}
                    variant="filled"
                    color="primary"
                  />
                </Stack>
              )
            )}
          </Stack>
        </Box>

        <Box sx={{ px: 2, pb: 4 }}>
          {currentCategory && (
            <Stack spacing={2}>
              <Stack spacing={2}>
                {currentServices.map((service: Service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    language={language}
                    onOrderClick={(serviceData) => {
                      setSelectedService(serviceData);
                      setOpenDialog(true);
                    }}
                  />
                ))}
              </Stack>
            </Stack>
          )}
        </Box>

        <ServiceDialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          service={selectedService}
        />
      </Stack>
    </Box>
  );
}
