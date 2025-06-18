import Link from 'next/link';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import TextMaxLine from 'src/components/text-max-line';
import { IHotelCategoryProps } from 'src/types/service';

type CategoryCardProps = {
  category: IHotelCategoryProps;
};

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={category.path} style={{ textDecoration: 'none' }}>
      <Card
        component={m.div}
        whileTap={{ scale: 0.97 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 25,
        }}
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          borderRadius: 2,
          boxShadow: (theme) => theme.customShadows.z4,
          '&:hover': {
            boxShadow: (theme) => theme.customShadows.z16,
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            pt: '75%', // 4:3 aspect ratio
            borderRadius: 1.5,
            overflow: 'hidden',
            flexShrink: 0,
            bgcolor: 'background.neutral',
            backgroundImage: `url(${category.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mb: 2,
          }}
        />

        <Stack spacing={0.5} sx={{ flexGrow: 1 }}>
          <TextMaxLine variant="subtitle2" line={2} sx={{ fontWeight: 600 }}>
            {category.name}
          </TextMaxLine>
          {category.totalService && (
            <Typography variant="caption" sx={{ color: 'text.disabled' }}>
              {category.totalService} үйлчилгээ
            </Typography>
          )}
        </Stack>
      </Card>
    </Link>
  );
}
