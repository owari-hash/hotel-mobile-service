'use client';

import groupBy from 'lodash/groupBy';
import { useRouter } from 'next/navigation';
import React, { useRef, useMemo, useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import { Chip } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { Service } from 'src/types/service';
import Iconify from 'src/components/iconify';
import { _servicesByCategories } from 'src/_mock/_services';
import ServiceDialog from 'src/components/dialog/ServiceDialog';
import ServiceCard from 'src/components/service-card/service-card';
import { TAXI_SERVICES, TAXI_SUBCATEGORIES } from 'src/_mock/_taxi-services';
import { ROOM_SERVICES, ROOM_SUBCATEGORIES } from 'src/_mock/_room-services';
import { FOOD_SERVICES, FOOD_SUBCATEGORIES } from 'src/_mock/_food-services';
import { EXTRA_SERVICES, EXTRA_SUBCATEGORIES } from 'src/_mock/_extra-services';
import { GUIDE_SERVICES, GUIDE_SUBCATEGORIES } from 'src/_mock/_guide-services';
import {
  ENTERTAINMENT_SERVICES,
  ENTERTAINMENT_SUBCATEGORIES,
} from 'src/_mock/_entertainment-services';

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

  const getServicesByCategory = useCallback((name: string) => {
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
  }, []);

  const getSubcategoriesForCategory = useCallback((name: string) => {
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
  }, []);

  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const categoryBarRef = useRef<HTMLDivElement>(null);
  const stickyHeaderRef = useRef<HTMLDivElement>(null);

  const scrollSectionIntoView = useCallback((sectionId: string) => {
    const sectionButton = document.getElementById(`category-${sectionId}`);
    if (sectionButton && categoryBarRef.current) {
      const scrollContainer = categoryBarRef.current;
      const buttonLeft = sectionButton.offsetLeft;
      const containerWidth = scrollContainer.offsetWidth;
      const scrollPosition = buttonLeft - containerWidth / 2 + sectionButton.offsetWidth / 2;

      scrollContainer.scrollTo({
        left: scrollPosition,
        behavior: 'auto',
      });
    }
  }, []);

  const scrollToContentSection = useCallback((sectionId: string) => {
    const sectionElement = sectionRefs.current[sectionId];
    if (sectionElement) {
      const headerOffset = stickyHeaderRef.current ? stickyHeaderRef.current.offsetHeight : 0;
      window.scrollTo({
        top: sectionElement.offsetTop - headerOffset,
        behavior: 'smooth',
      });
    }
  }, []);

  const [activeSection, setActiveSection] = useState<string>('');
  const [activeSubcategory, setActiveSubcategory] = useState<string>(() => {
    const subcategories = getSubcategoriesForCategory(categoryName);
    return subcategories.length > 0 ? subcategories[0].name : categoryName;
  });
  const [language, setLanguage] = useState<string>('mn'); // 'mn' for Mongolian, 'en' for English

  // Dialog state
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      let currentActive = '';

      Object.entries(sectionRefs.current).forEach(([sectionId, ref]) => {
        if (ref) {
          const { top, bottom } = ref.getBoundingClientRect();
          const headerOffset = stickyHeaderRef.current ? stickyHeaderRef.current.offsetHeight : 0;
          // Check if the section's top is at or above the header, and its bottom is below the header
          if (top <= headerOffset && bottom > headerOffset) {
            currentActive = sectionId;
          }
        }
      });

      if (currentActive) {
        setActiveSection(currentActive);
        // If there are subcategories, also update activeSubcategory
        if (getSubcategoriesForCategory(categoryName).length > 0) {
          setActiveSubcategory(currentActive);
        } else if (categoryName) {
          // If no subcategories, set activeSubcategory to the main category name
          setActiveSubcategory(categoryName);
        }
      }
    };

    handleScroll(); // Check initial position
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [categoryName, getSubcategoriesForCategory]);

  useEffect(() => {
    if (activeSection) {
      scrollSectionIntoView(activeSection);
    }
  }, [activeSection, scrollSectionIntoView]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'mn' ? 'en' : 'mn'));
  };

  // Simplified category finding
  const currentCategory = _servicesByCategories.find((cat) => cat.name === categoryName);

  const groupedServices = useMemo(() => {
    const services = getServicesByCategory(categoryName);
    const subcategories = getSubcategoriesForCategory(categoryName);

    if (subcategories.length > 0) {
      return groupBy(services, 'subcategory');
    }
    return { [categoryName]: services }; // If no subcategories, group all under main category name
  }, [categoryName, getServicesByCategory, getSubcategoriesForCategory]);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Stack spacing={3}>
        <Box
          ref={stickyHeaderRef}
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
              onClick={() => router.push('/')}
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
            {getSubcategoriesForCategory(categoryName).length > 0
              ? getSubcategoriesForCategory(categoryName).map((subcat) => (
                  <Chip
                    key={subcat.name}
                    id={`category-${subcat.name}`}
                    label={subcat.name}
                    variant={activeSubcategory === subcat.name ? 'filled' : 'outlined'}
                    color={activeSubcategory === subcat.name ? 'primary' : 'default'}
                    onClick={() => {
                      setActiveSubcategory(subcat.name);
                      setActiveSection(subcat.name); // Update active section for chip bar highlighting
                      scrollToContentSection(subcat.name); // Scroll main content to section
                    }}
                    sx={{
                      minWidth: 80,
                      '& .MuiChip-label': {
                        fontWeight: activeSubcategory === subcat.name ? 600 : 400,
                      },
                    }}
                  />
                ))
              : currentCategory && (
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Chip
                      id={`category-${currentCategory.id}`}
                      label={currentCategory.name}
                      variant="filled"
                      color="primary"
                    />
                  </Stack>
                )}
          </Stack>
        </Box>

        <Box sx={{ px: 2, pb: 4 }}>
          {currentCategory && (
            <Stack spacing={2}>
              {Object.entries(groupedServices).map(([sectionName, services]) => (
                <Box
                  key={sectionName}
                  ref={(el: HTMLDivElement | null) => {
                    sectionRefs.current[sectionName] = el;
                  }}
                  sx={{ pt: 2 }} // Add some padding top for better scroll detection
                >
                  <Typography variant="h5" sx={{ mb: 2 }}>
                    {sectionName}
                  </Typography>
                  <Stack spacing={2}>
                    {services.map((service: Service) => (
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
                </Box>
              ))}
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
