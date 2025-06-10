'use client';

import { useRouter } from 'next/navigation';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { alpha, useTheme } from '@mui/material/styles';

import Image from 'src/components/image';
import { bgGradient } from 'src/theme/css';
import Iconify from 'src/components/iconify';

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
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        height: 240,
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: 0,
          paddingTop: '45%', // controls the height ratio
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Image
          alt="Service Banner"
          src={bannerImage}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: 3,
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
    </Box>
  );
}
