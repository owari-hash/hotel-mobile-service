import { m, LazyMotion, domAnimation } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { IHotelCategoryProps } from 'src/types/service';

import CategoryCard from './components/category-card';

// ----------------------------------------------------------------------

type Props = {
  categories: IHotelCategoryProps[];
};

export default function HomeLandingHotCategories({ categories }: Props) {
  return (
    <LazyMotion features={domAnimation}>
      <Box
        sx={{
          position: 'relative',
          py: { xs: 4, sm: 6 }, // Reduced padding on mobile
          background: (theme) => `
            radial-gradient(circle at 20% 50%, ${theme.palette.primary.lighter}15 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, ${theme.palette.secondary.lighter}10 0%, transparent 50%),
            linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.grey[50]} 100%)
          `,
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: (theme) => `linear-gradient(90deg,
              transparent 0%,
              ${theme.palette.primary.main}40 50%,
              transparent 100%)`,
          },
        }}
      >
        <Container
          sx={{
            px: 0,
          }}
        >
          <m.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Stack alignItems="center" spacing={{ xs: 1.5, sm: 2 }} sx={{ mb: { xs: 3, sm: 4 } }}>
              <Box
                sx={{
                  width: 40,
                  height: 6,
                  borderRadius: 3,
                  background: (theme) => `linear-gradient(90deg,
                    ${theme.palette.primary.main},
                    ${theme.palette.primary.light})`,
                }}
              />

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '1.5rem', sm: '2rem' }, // Smaller font on mobile
                  fontWeight: 800,
                  textAlign: 'center',
                  background: (theme) => `linear-gradient(135deg,
                    ${theme.palette.primary.dark} 0%,
                    ${theme.palette.primary.main} 50%,
                    ${theme.palette.primary.light} 100%)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                }}
              >
                Бидний үйлчилгээ
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  textAlign: 'center',
                  maxWidth: 280,
                  lineHeight: 1.5,
                  px: { xs: 1, sm: 0 },
                }}
              >
                Таны хэрэгцээнд тохирсон үйлчилгээг сонгоод эхлээрэй
              </Typography>
            </Stack>
          </m.div>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: { xs: 1.5, sm: 2 },
              position: 'relative',
            }}
          >
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </Box>
        </Container>
      </Box>
    </LazyMotion>
  );
}
