import React from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

interface ServiceCardProps {
  service: {
    id: string;
    icon: string;
    title: string;
    content?: string;
    category: string;
    image?: string; // Added image field
    price?: number; // Added price field
  };
  language: string;
  onOrderClick: (service: any) => void;
}

export default function ServiceCard({ service, language, onOrderClick }: ServiceCardProps) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        p: 0, // Reset card padding
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          boxShadow: theme.customShadows.z16,
          transform: 'translateY(-2px)',
        },
      }}
    >
      {service.category === 'Хөтөч' ? (
        <>
          <Box
            sx={{
              width: 'auto',
              height: 200,
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 2,
              m: 3, // Equal margin on all sides
            }}
          >
            {service.image && (
              <Image
                src={service.image}
                alt={service.title}
                fill
                style={{
                  objectFit: 'cover',
                  borderRadius: '16px',
                }}
                priority
              />
            )}
          </Box>

          <Box sx={{ px: 3, pb: 3 }}>
            <Stack spacing={2}>
              <Box sx={{ pl: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {service.title}
                </Typography>
                {service.content && (
                  <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                    {service.content}
                  </Typography>
                )}
                <Typography variant="subtitle2" sx={{ color: 'primary.main', mt: 0.5 }}>
                  {service.price}₮
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'flex-end', pl: 1 }}>
                <Button variant="contained" size="small" onClick={() => onOrderClick(service)}>
                  {language === 'mn' ? 'Захиалах' : 'Order'}
                </Button>
              </Box>
            </Stack>
          </Box>
        </>
      ) : (
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ height: '100%', width: '100%' }}
        >
          <Box
            sx={{
              width: 160, // Fixed width for the image container
              height: 130, // Fixed height for the image container (square)
              flexShrink: 0, // Prevent image from shrinking
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 1, // Use a slight border radius, not circular
            }}
          >
            {service.image && (
              <Image
                src={service.image}
                alt={service.title}
                fill
                style={{
                  objectFit: 'cover',
                }}
                priority
              />
            )}
          </Box>
          <Stack spacing={1} sx={{ flexGrow: 1, justifyContent: 'space-between', p: 1 }}>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {service.title}
              </Typography>
              {service.content && (
                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                  {service.content}
                </Typography>
              )}
            </Box>
            <Typography variant="subtitle2" sx={{ color: 'primary.main', mt: 0.5 }}>
              {service.price}₮
            </Typography>
            <Stack direction="row" justifyContent="flex-end">
              <Button variant="contained" size="small" onClick={() => onOrderClick(service)}>
                {language === 'mn' ? 'Захиалах' : 'Order'}
              </Button>
            </Stack>
          </Stack>
        </Stack>
      )}
    </Card>
  );
}
