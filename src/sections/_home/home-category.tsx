import Link from 'next/link';
import { m, LazyMotion, domAnimation } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SvgColor from 'src/components/svg-color';
import TextMaxLine from 'src/components/text-max-line';
import { IHotelCategoryProps } from 'src/types/service';

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
          maxWidth="sm"
          sx={{
            px: { xs: 1.5, sm: 2 }, // Adjusted padding for mobile
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
            {categories.map((category, index) => (
              <m.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 120,
                  damping: 20,
                }}
              >
                <CategoryItem category={category} index={index} />
              </m.div>
            ))}
          </Box>
        </Container>
      </Box>
    </LazyMotion>
  );
}

// ----------------------------------------------------------------------

type CategoryItemProps = {
  category: IHotelCategoryProps;
  index: number;
};

function CategoryItem({ category, index }: CategoryItemProps) {
  return (
    <Link href={category.path} style={{ textDecoration: 'none' }}>
      <Paper
        component={m.div}
        whileTap={{ scale: 0.97 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 25,
        }}
        elevation={0}
        sx={{
          height: { xs: 140, sm: 160 },
          borderRadius: 4,
          position: 'relative',
          overflow: 'hidden',
          background: (theme) => theme.palette.background.paper,
          border: '1px solid',
          borderColor: 'divider',
          transition: 'background 0.2s ease',

          // Touch feedback only
          '&:active': {
            background: (theme) => theme.palette.primary.lighter,
            borderColor: 'primary.main',
            transform: 'scale(0.98)',
            '& .category-icon': {
              background: (theme) => theme.palette.primary.main,
              transform: 'scale(0.95)',
              '& svg': {
                color: 'common.white',
                transform: 'scale(1.1)',
              },
            },
            '& .category-text': {
              color: 'primary.main',
            },
          },
        }}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          spacing={{ xs: 1, sm: 2 }} // Reduced spacing on mobile
          sx={{
            height: '100%',
            p: { xs: 1.5, sm: 3 }, // Reduced padding on mobile
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Icon Container */}
          <Box
            className="category-icon"
            sx={{
              width: { xs: 48, sm: 64 }, // Smaller icon on mobile
              height: { xs: 48, sm: 64 },
              borderRadius: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              transition: 'background 0.2s ease',
              background: (theme) => theme.palette.background.neutral,
            }}
          >
            <SvgColor
              src={category.icon}
              sx={{
                width: { xs: 24, sm: 32 }, // Smaller icon size on mobile
                height: { xs: 24, sm: 32 },
                color: 'primary.main',
                filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))',
              }}
            />
          </Box>

          {/* Category Name */}
          <TextMaxLine
            className="category-text"
            variant="subtitle2" // Changed to smaller variant
            line={2}
            sx={{
              color: 'text.primary',
              fontWeight: 600,
              fontSize: { xs: '0.8rem', sm: '0.9rem' }, // Smaller font on mobile
              lineHeight: 1.2,
              textAlign: 'center',
              maxHeight: { xs: 32, sm: 40 }, // Control text container height
              overflow: 'hidden',
            }}
          >
            {category.name}
          </TextMaxLine>
        </Stack>

        {/* Tap ripple effect */}
        <m.div
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 0, opacity: 0 }}
          whileTap={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 20,
            height: 20,
            borderRadius: '50%',
            background: 'rgba(25, 118, 210, 0.3)',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }}
        />
      </Paper>
    </Link>
  );
}
