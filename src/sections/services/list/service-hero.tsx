'use client';

import { useRouter } from 'next/navigation';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { alpha, useTheme } from '@mui/material/styles';

import Image from 'src/components/image';
import { bgGradient } from 'src/theme/css';
import Iconify from 'src/components/iconify';

// Use a direct import to ensure the image is properly loaded
const bannerImage = '/assets/carousel/carousel_2.jpg';

export default function ServiceHero() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.88),
        }),
        position: 'relative',
        height: 240,
        width: '100%',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
      }}
    >
      <Image
        alt="Service Banner"
        src={bannerImage}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      <IconButton
        onClick={() => router.back()}
        sx={{
          position: 'absolute',
          top: 16,
          left: 16,
          zIndex: 9,
          bgcolor: 'common.white',
          boxShadow: theme.customShadows.z8,
          '&:hover': {
            bgcolor: alpha(theme.palette.grey[200], 0.8),
          },
        }}
      >
        <Iconify icon="eva:arrow-ios-back-fill" />
      </IconButton>
    </Box>
  );
}
