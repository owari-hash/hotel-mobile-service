'use client';

import { useRouter } from 'next/navigation';
import React, { useRef, useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import { Chip } from '@mui/material';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Iconify from 'src/components/iconify';
import ServiceDialog from 'src/components/dialog/ServiceDialog';
import { _service, _servicesByCategories } from 'src/_mock/_services';

export default function ServiceList() {
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

  const getServicesByCategory = (categoryName: string) => {
    // Normalize category names to match exactly
    const categoryMap: { [key: string]: string } = {
      'Өрөөний үйлчилгээ': 'Өрөөний үйлчилгээ',
      'Нэмэлт үйлчилгээ': 'Нэмэлт үйлчилгээ',
      Хоол: 'Хоол',
      Энтертайнмент: 'Энтертайнмент',
      Такси: 'Такси',
      Хөтөч: 'Хөтөч',
    };

    return _service.filter((service) => service.category === categoryMap[categoryName]);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'mn' ? 'en' : 'mn'));
  };

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
            sx={{
              px: 2,
              pb: 2,
              overflowX: 'auto',
              '&::-webkit-scrollbar': { display: 'none' },
              scrollbarWidth: 'none',
              scrollBehavior: 'smooth',
            }}
          >
            {_servicesByCategories.map((category) => (
              <Chip
                id={`category-${category.id}`}
                key={category.id}
                label={category.name}
                variant={activeCategory === category.id ? 'filled' : 'outlined'}
                color={activeCategory === category.id ? 'primary' : 'default'}
                onClick={() => {
                  categoryRefs.current[category.id]?.scrollIntoView({ behavior: 'auto' });
                  setActiveCategory(category.id);
                }}
                icon={
                  <Iconify
                    icon={category.icon}
                    width={20}
                    sx={{
                      color: activeCategory === category.id ? 'common.white' : 'primary.main',
                    }}
                  />
                }
                sx={{
                  px: 1,
                  height: 36,
                  minWidth: 'max-content',
                  '& .MuiChip-label': {
                    px: 0.5,
                    fontWeight: 500,
                  },
                }}
              />
            ))}
          </Stack>
        </Box>

        <Box sx={{ px: 2, pb: 4 }}>
          <Stack spacing={5}>
            {_servicesByCategories.map((category) => (
              <Box
                key={category.id}
                ref={(el) => {
                  categoryRefs.current[category.id] = el as HTMLDivElement | null;
                }}
                sx={{
                  scrollMarginTop: { xs: 120, sm: 140 },
                  minHeight: { xs: '60vh', sm: '50vh' },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 3,
                    pb: 1,
                    fontWeight: 600,
                    borderBottom: () => `1px solid ${theme.palette.divider}`,
                  }}
                >
                  {category.name}
                </Typography>

                <Stack spacing={2}>
                  {getServicesByCategory(category.name)
                    .filter((service) => typeof service.id === 'string' && service.id.trim() !== '')
                    .map((service) => (
                      <Card
                        key={service.id}
                        sx={{
                          p: 3,
                          minHeight: 120,
                          transition: 'all 0.2s ease-in-out',
                          '&:hover': {
                            boxShadow: theme.customShadows.z16,
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        <Stack spacing={2} sx={{ height: '100%' }}>
                          <Stack direction="row" alignItems="center" spacing={2} sx={{ flex: 1 }}>
                            <Box
                              sx={{
                                width: 48,
                                height: 48,
                                display: 'flex',
                                borderRadius: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                bgcolor: 'background.neutral',
                              }}
                            >
                              <Iconify icon={service.icon} width={24} />
                            </Box>

                            <Box sx={{ flexGrow: 1 }}>
                              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                {service.title}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: 'text.secondary',
                                  mt: 0.5,
                                  lineHeight: 1.5,
                                }}
                              >
                                {service.content || ''}
                              </Typography>
                            </Box>

                            <Typography
                              variant="subtitle1"
                              sx={{ color: 'primary.main', whiteSpace: 'nowrap' }}
                            />
                          </Stack>

                          <Stack direction="row" justifyContent="flex-end">
                            <Button
                              variant="contained"
                              startIcon={<Iconify icon="carbon:calendar" />}
                              onClick={() => {
                                setSelectedService(service);
                                setOpenDialog(true);
                              }}
                              sx={{
                                width: { xs: '40%', sm: 'auto' },
                                py: 1.5,
                                fontWeight: 600,
                              }}
                            >
                              {language === 'mn' ? 'Захиалах' : 'Order'}
                            </Button>
                          </Stack>
                        </Stack>
                      </Card>
                    ))}
                </Stack>
              </Box>
            ))}
          </Stack>
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
