import { Chip, Stack } from '@mui/material';

import Iconify from 'src/components/iconify';

type CategoryBarProps = {
  categories: Array<{ id: string; name: string; icon?: string }>;
  activeCategory: string;
  onCategoryClick: (id: string) => void;
  categoryBarRef: React.RefObject<HTMLDivElement>;
};

export default function CategoryBar({
  categories,
  activeCategory,
  onCategoryClick,
  categoryBarRef,
}: CategoryBarProps) {
  return (
    <Stack
      ref={categoryBarRef}
      direction="row"
      spacing={1}
      sx={{
        px: 2,
        pb: 2,
        overflowX: 'auto',
        '&::-webkit-scrollbar': { display: 'none' },
        scrollbarWidth: 'none',
      }}
    >
      {categories.map((category) => (
        <Chip
          key={category.id}
          id={`category-${category.id}`}
          label={category.name}
          variant={activeCategory === category.id ? 'filled' : 'outlined'}
          color={activeCategory === category.id ? 'primary' : 'default'}
          onClick={() => onCategoryClick(category.id)}
          icon={
            category.icon ? (
              <Iconify
                icon={category.icon}
                width={20}
                sx={{
                  color: activeCategory === category.id ? 'common.white' : 'primary.main',
                }}
              />
            ) : undefined
          }
          sx={{
            px: 1,
            height: 36,
            minWidth: 'max-content',
            '& .MuiChip-label': {
              px: 0.5,
              fontWeight: 500,
            },
          }}
        />
      ))}
    </Stack>
  );
}
