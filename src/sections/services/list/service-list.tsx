'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import Iconify from 'src/components/iconify';
import { _service, _servicesByCategories } from 'src/_mock/_services';

export default function ServiceList() {
  const theme = useTheme();
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const handleExpandCategory = (categoryId: string) => {
    setExpandedCategories((prev) => {
      const isExpanded = prev.includes(categoryId);
      return isExpanded ? prev.filter((id) => id !== categoryId) : [...prev, categoryId];
    });
  };

  const getServicesByCategory = (categoryName: string) =>
    _service.filter((service) => service.category === categoryName);

  return (
    <Box
      gap={3}
      display="grid"
      gridTemplateColumns={{
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
      }}
    >
      {_servicesByCategories.map((category) => (
        <Card
          key={category.id}
          sx={{
            cursor: 'pointer',
            '&:hover': {
              boxShadow: theme.customShadows.z24,
            },
          }}
        >
          {/* Category Header */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ p: 2 }}
            onClick={() => handleExpandCategory(category.id)}
          >
            <Box
              sx={{
                width: 48,
                height: 48,
                display: 'flex',
                borderRadius: '50%',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: alpha(theme.palette.primary.main, 0.08),
              }}
            >
              <Iconify icon={category.icon} width={24} sx={{ color: theme.palette.primary.main }} />
            </Box>

            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              {category.name}
            </Typography>

            <Iconify
              icon={
                expandedCategories.includes(category.id)
                  ? 'eva:chevron-up-fill'
                  : 'eva:chevron-down-fill'
              }
              width={20}
            />
          </Stack>

          {/* Category Services */}
          <Collapse in={expandedCategories.includes(category.id)}>
            <Stack spacing={2} sx={{ p: 2, pt: 0 }}>
              {getServicesByCategory(category.name).map((service) => (
                <Card
                  key={service.id}
                  sx={{
                    p: 2,
                    bgcolor: 'background.neutral',
                    borderRadius: 1,
                  }}
                >
                  <Stack spacing={2}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                      <Typography variant="subtitle2">{service.title}</Typography>
                      <Typography variant="subtitle1" sx={{ color: 'primary.main' }} />
                    </Stack>

                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {service.content}
                    </Typography>

                    <Button
                      fullWidth
                      size="small"
                      variant="contained"
                      startIcon={<Iconify icon="carbon:calendar" />}
                    >
                      Захиалах
                    </Button>
                  </Stack>
                </Card>
              ))}
            </Stack>
          </Collapse>
        </Card>
      ))}
    </Box>
  );
}
