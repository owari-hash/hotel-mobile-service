import Carousel from 'react-slick';

import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { alpha, useTheme } from '@mui/material/styles';

import Image from 'src/components/image';
import { bgGradient } from 'src/theme/css';

// ----------------------------------------------------------------------

const _carouselImages = [
  '/assets/Carousel/carousel_1.jpg',
  '/assets/Carousel/carousel_2.jpg',
  '/assets/Carousel/carousel_3.jpg',
  '/assets/Carousel/carousel_4.jpg',
];

export default function HomeHero() {
  const theme = useTheme();

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
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_1.jpg',
        }),
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <Container sx={{ p: 0 }}>
          <Box>
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
                      borderRadius: '0 0 10px 10px',
                    }}
                  />
                </Box>
              ))}
            </Carousel>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
