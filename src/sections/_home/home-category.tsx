import { m, LazyMotion, domAnimation } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import MobileContainer from 'src/components/mobile-container';

import { useGetProductCategories } from 'src/api/service';
import { Category } from 'src/types/service';

import CategoryCard from './components/category-card';
import { HOST_API, ASSETS_API } from 'src/config-global';

// ----------------------------------------------------------------------
export default function HomeLandingHotCategories() {
  const { productCategories, productCategoriesLoading, productCategoriesError } =
    useGetProductCategories();

  const isLoading = productCategoriesLoading;
  const isError = productCategoriesError;

  const combinedCategories: Category[] = [];
  const existingIds = new Set<string>();

  console.log('Raw productCategories data:', productCategories);

  const { data } = useGetProductCategories();
  console.log(data); // Check structure here
  const addCategory = (category: Category) => {
    if (!existingIds.has(category.id)) {
      combinedCategories.push(category);
      existingIds.add(category.id);
    }
  };

  if (productCategories) {
    productCategories.forEach((c) => {
      addCategory({
        id: String(c.id),
        name: c.name,
        complete_name: c.complete_name,
        parent_path: c.parent_path,
        parent_id: c.parent,
        source: 'product' as const,
        path: `/service/category/${c.id}?type=product`,
      });
    });
  }
  if (isLoading) {
    return (
      <Stack alignItems="center" justifyContent="center" sx={{ height: 200 }}>
        <CircularProgress />
        <Typography variant="subtitle2" sx={{ mt: 2 }}>
          Уншиж байна...
        </Typography>
      </Stack>
    );
  }
  if (isError) {
    return (
      <Stack alignItems="center" justifyContent="center" sx={{ height: 200 }}>
        <Alert severity="error">Сервертэй холбогдоход алдаа гарлаа</Alert>
      </Stack>
    );
  }

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
            {combinedCategories.map((category) => {
              console.log('Rendering category:', category); // Add this line for debugging
              return <CategoryCard key={category.id} category={category} />;
            })}
          </Box>
        </Container>
      </Box>
    </LazyMotion>
  );
}
