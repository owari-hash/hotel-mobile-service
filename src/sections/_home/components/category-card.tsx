import Link from 'next/link';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import TextMaxLine from 'src/components/text-max-line';
import { Category } from 'src/types/service';

type CategoryCardProps = {
  category: Category;
};

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={category.path || '#'} style={{ textDecoration: 'none' }}>
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
            height: 200, // Give it a fixed height to ensure visibility
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center', // Center text horizontally
          }}
        >
          <Stack spacing={0.5} sx={{ flexGrow: 1, p: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              {category.name}
            </Typography>
            {category.complete_name && (
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {category.complete_name}
              </Typography>
            )}
            {category.description && (
              <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                {category.description}
              </Typography>
            )}
          </Stack>
        </Box>
      </Card>
    </Link>
  );
}
