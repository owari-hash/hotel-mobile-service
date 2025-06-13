'use client';

import { useRouter } from 'next/navigation';
import React, { useRef, useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import { Chip } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import { ROOM_SERVICES } from 'src/_mock/_room-services';
import { FOOD_SERVICES } from 'src/_mock/_food-services';
import { TAXI_SERVICES } from 'src/_mock/_taxi-services';
import { GUIDE_SERVICES } from 'src/_mock/_guide-services';
import { EXTRA_SERVICES } from 'src/_mock/_extra-services';
import { _servicesByCategories } from 'src/_mock/_services';
import ServiceDialog from 'src/components/dialog/ServiceDialog';
import ServiceCard from 'src/components/service-card/service-card';
import { ENTERTAINMENT_SERVICES } from 'src/_mock/_entertainment-services';

type CategoryColor = 'success' | 'info' | 'warning' | 'default' | 'primary';
type CategoryChip = {
  label: string;
  icon: string;
  color: CategoryColor;
};

const CATEGORY_INFO = {
  'Өрөөний үйлчилгээ': {
    icon: 'mdi:room-service',
    chips: [
      { label: '24/7', icon: 'ic:round-access-time', color: 'success' },
      { label: 'Өрөөнд', icon: 'ic:round-room', color: 'info' },
    ],
  },
  Хоол: {
    icon: 'ic:round-restaurant',
    chips: [
      { label: '30-40 мин', icon: 'ic:round-access-time', color: 'warning' },
      { label: 'Хүргэлттэй', icon: 'ic:round-delivery-dining', color: 'info' },
    ],
  },
  'Нэмэлт үйлчилгээ': {
    icon: 'ic:round-more-horiz',
    chips: [{ label: 'Тухай бүр', icon: 'ic:round-schedule', color: 'default' }],
  },
  Энтертайнмент: {
    icon: 'ic:round-sports-esports',
    chips: [{ label: 'Өдөр бүр', icon: 'ic:round-event', color: 'success' }],
  },
  Такси: {
    icon: 'ic:round-local-taxi',
    chips: [{ label: '24/7', icon: 'ic:round-access-time', color: 'success' }],
  },
  Хөтөч: {
    icon: 'ic:round-tour',
    chips: [{ label: 'Урьдчилан', icon: 'ic:round-event-available', color: 'info' }],
  },
} satisfies Record<string, { icon: string; chips: CategoryChip[] }>;

interface ServiceListTemplateProps {
  categoryName: string;
}

export default function ServiceListTemplate({ categoryName }: ServiceListTemplateProps) {
  const theme = useTheme();
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<string>('');
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
          if (top <= viewportHeight * 0.5 && bottom >= 0) {
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

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'mn' ? 'en' : 'mn'));
  };

  // Simplified category finding
  const currentCategory = _servicesByCategories.find((cat) => cat.name === categoryName);
  const currentServices = getServicesByCategory(categoryName);

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
              <Iconify
                icon={
                  language === 'mn'
                    ? 'emojione:flag-for-united-states'
                    : 'emojione:flag-for-mongolia'
                }
                width={20}
              />
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
            {currentCategory && (
              <Stack direction="row" alignItems="center" spacing={1}>
                <Chip
                  id={`category-${currentCategory.id}`}
                  label={currentCategory.name}
                  variant="filled"
                  color="primary"
                  icon={
                    <Iconify
                      icon={currentCategory.icon}
                      width={20}
                      sx={{ color: 'common.white' }}
                    />
                  }
                />

                {CATEGORY_INFO[categoryName as keyof typeof CATEGORY_INFO] &&
                  CATEGORY_INFO[categoryName as keyof typeof CATEGORY_INFO].chips.map(
                    (chip: CategoryChip, index: number) => (
                      <Chip
                        key={index}
                        label={chip.label}
                        variant="outlined"
                        color={chip.color}
                        icon={<Iconify icon={chip.icon} width={18} />}
                      />
                    )
                  )}

                <Chip
                  size="small"
                  color="primary"
                  variant="outlined"
                  label={`${currentServices.length}`}
                />
              </Stack>
            )}
          </Stack>
        </Box>

        <Box sx={{ px: 2, pb: 4 }}>
          {currentCategory && (
            <Stack spacing={2}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {currentCategory.name}
                </Typography>

                <Chip size="small" color="primary" label={currentServices.length} />

                {CATEGORY_INFO[categoryName as keyof typeof CATEGORY_INFO] &&
                  CATEGORY_INFO[categoryName as keyof typeof CATEGORY_INFO].chips.map(
                    (chip: CategoryChip, index: number) => (
                      <Chip
                        key={index}
                        size="small"
                        variant="outlined"
                        color={chip.color}
                        icon={<Iconify icon={chip.icon} width={16} />}
                        label={chip.label}
                      />
                    )
                  )}
              </Stack>

              <Stack spacing={2}>
                {currentServices.map((service) => (
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
