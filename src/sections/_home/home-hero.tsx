import Carousel from 'react-slick';

import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

import Image from 'src/components/image';

// ----------------------------------------------------------------------

const _carouselImages = [
  '/assets/Carousel/carousel_1.jpg',
  '/assets/Carousel/carousel_2.jpg',
  '/assets/Carousel/carousel_3.jpg',
  '/assets/Carousel/carousel_4.jpg',
];

export default function HomeHero() {
  const carouselSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
  };

  return (
    <Box
      sx={{
        overflow: 'hidden',
        borderRadius: {
          xs: '0 0 12px 12px',
          sm: '0 0 16px 16px',
          md: '0 0 20px 20px',
          lg: '0 0 24px 24px',
        },
        position: 'relative',
        zIndex: 1,
        mb: { xs: 3, md: 5 },
        boxShadow: {
          xs: '0 4px 20px rgba(0,0,0,0.1)',
          md: '0 8px 32px rgba(0,0,0,0.12)',
        },
        '& .slick-dots': {
          bottom: '20px',
          '& li button:before': {
            fontSize: '12px',
            color: 'rgba(255,255,255,0.7)',
          },
          '& li.slick-active button:before': {
            color: 'white',
          },
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: { xs: 32, sm: 40, md: 48 },
          left: 0,
          right: 0,
          zIndex: 2,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: '2rem',
              sm: '2.5rem',
              md: '3rem',
            },
            px: { xs: 2, sm: 4 },
            textAlign: 'center',
            color: 'common.white',
            textShadow: '2px 4px 8px rgba(0,0,0,0.5)',
            fontWeight: 700,
            letterSpacing: -0.5,
            lineHeight: 1.2,
          }}
        >
          <Box
            component="span"
            sx={{
              color: 'primary.main',
              display: 'block',
              fontSize: {
                xs: '2.5rem',
                sm: '3rem',
                md: '3.5rem',
              },
              mb: 1,
              textShadow: '2px 4px 8px rgba(0,0,0,0.4)',
            }}
          >
            HTBooking
          </Box>
          Бүх үйлчилгээг <br />
          нэг дороос
        </Typography>
      </Box>

      <Carousel {...carouselSettings}>
        {_carouselImages.map((image, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              pt: '120%',
              width: '100%',
            }}
          >
            <Image
              alt={`slide-${index + 1}`}
              src={image}
              sx={{
                top: 0,
                width: '100%',
                height: '100%',
                position: 'absolute',
                objectFit: 'cover',
              }}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
