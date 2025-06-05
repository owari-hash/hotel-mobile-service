import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import TextMaxLine from 'src/components/text-max-line';
import { IHotelCategoryProps } from 'src/types/service';

// ----------------------------------------------------------------------

type Props = {
  categories: IHotelCategoryProps[];
};

export default function HomeLandingHotCategories({ categories }: Props) {
  return (
    <Container
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
        width: { xs: '100%', sm: '80%', lg: '40%' }, // Match navbar width
        mx: 'auto',
        px: { xs: 2, sm: 3 },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: 'center',
          fontSize: {
            xs: '1.5rem',
            sm: '1.75rem',
            md: '2rem',
          },
          mb: { xs: 3, md: 5 },
        }}
      >
        Түгээмэл үйлчилгээ
      </Typography>

      <Box
        sx={{
          gap: { xs: 2, sm: 3, md: 4 },
          display: 'grid',
          my: { xs: 4, md: 5 },
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)', // 2 columns on mobile
            sm: 'repeat(2, 1fr)', // 2 columns on tablet
            md: 'repeat(2, 1fr)', // 2 columns on desktop
          },
        }}
      >
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </Box>

      <Stack alignItems="center" sx={{ mt: { xs: 4, md: 5 } }}>
        <Button
          color="inherit"
          size="large"
          variant="outlined"
          endIcon={<Iconify icon="carbon:chevron-right" />}
          sx={{
            width: { xs: '100%', sm: 'auto' }, // Full width on mobile
          }}
        >
          Бүх үйлчилгээг харах
        </Button>
      </Stack>
    </Container>
  );
}

// ----------------------------------------------------------------------

type CategoryItemProps = {
  category: IHotelCategoryProps;
};

function CategoryItem({ category }: CategoryItemProps) {
  return (
    <Paper
      variant="outlined"
      sx={{
        pt: '100%',
        borderRadius: 2,
        cursor: 'pointer',
        textAlign: 'center',
        position: 'relative',
        bgcolor: 'transparent',
        transition: (theme) => theme.transitions.create('all'),
        '&:hover': {
          bgcolor: 'background.paper',
          boxShadow: (theme) => theme.customShadows.z24,
          '& .icon': {
            bgcolor: 'primary.main',
            transition: (theme) => theme.transitions.create('all'),
            '& > span': {
              color: 'common.white',
            },
          },
        },
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          width: 1,
          height: 1,
          top: 0,
          position: 'absolute',
        }}
      >
        <Box
          className="icon"
          sx={{
            mb: 2.5,
            width: 72,
            height: 72,
            mx: 'auto',
            display: 'flex',
            borderRadius: '50%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <SvgColor src={category.icon} sx={{ width: 48, height: 48 }} />
        </Box>

        <TextMaxLine variant="h6" line={1}>
          {category.name}
        </TextMaxLine>

        <Typography variant="body2" sx={{ color: 'text.disabled', mt: 0.5 }}>
          {category.totalService} Үйлчилгээ
        </Typography>
      </Stack>
    </Paper>
  );
}
