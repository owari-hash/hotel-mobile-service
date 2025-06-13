import React from 'react';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

interface ServiceCardProps {
  service: {
    id: string;
    icon: string;
    title: string;
    content?: string;
    category: string;
  };
  language: string;
  onOrderClick: (service: any) => void;
}

export default function ServiceCard({ service, language, onOrderClick }: ServiceCardProps) {
  const theme = useTheme();

  return (
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
            <Chip
              label={service.category}
              size="small"
              sx={{
                mt: 0.5,
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                mt: 0.5,
                lineHeight: 1.5,
              }}
            >
              {service.content}
            </Typography>
          </Box>

          <Typography variant="subtitle1" sx={{ color: 'primary.main', whiteSpace: 'nowrap' }} />
        </Stack>

        <Stack direction="row" justifyContent="flex-end">
          <Button
            variant="contained"
            startIcon={<Iconify icon="carbon:calendar" />}
            onClick={() => onOrderClick(service)}
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
  );
}
