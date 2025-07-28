'use client';

import { useRef, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import { Chip } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';

import { useServiceData } from 'src/sections/services/hooks/use-service-data';

interface ServiceCategoryChipsProps {
  categoryName: string;
  activeSubcategory: string;
  setActiveSubcategory: (sub: string) => void;
  scrollToContentSection: (sectionId: string) => void;
}

export default function ServiceCategoryChips({
  categoryName,
  activeSubcategory,
  setActiveSubcategory,
  scrollToContentSection,
}: ServiceCategoryChipsProps) {
  const theme = useTheme();
  const categoryBarRef = useRef<HTMLDivElement>(null);

  const { getSubcategoriesForCategory } = useServiceData(categoryName);
  const subcategories = getSubcategoriesForCategory(categoryName);

  const scrollSectionIntoView = useCallback((sectionId: string) => {
    const sectionButton = document.getElementById(`category-${sectionId}`);
    if (sectionButton && categoryBarRef.current) {
      const scrollContainer = categoryBarRef.current;
      const buttonLeft = sectionButton.offsetLeft;
      const containerWidth = scrollContainer.offsetWidth;
      const scrollPosition = buttonLeft - containerWidth / 2 + sectionButton.offsetWidth / 2;

      scrollContainer.scrollTo({
        left: scrollPosition,
        behavior: 'auto',
      });
    }
  }, []);

  useEffect(() => {
    if (activeSubcategory) {
      scrollSectionIntoView(activeSubcategory);
    }
  }, [activeSubcategory, scrollSectionIntoView]);

  return (
    <Box
      ref={categoryBarRef}
      sx={{
        position: 'sticky',
        top: 64, // Adjust based on header height
        zIndex: 1100,
        bgcolor: 'background.paper',
        borderBottom: () => `1px solid ${theme.palette.divider}`,
        px: 2,
        pb: 2,
        overflowX: 'auto',
        '&::-webkit-scrollbar': { display: 'none' },
        scrollbarWidth: 'none',
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{
          py: 1,
        }}
      >
        {subcategories.length > 0 ? (
          subcategories.map((subcat) => (
            <Chip
              key={subcat.id}
              id={`category-${subcat.name}`}
              label={subcat.name}
              variant={activeSubcategory === subcat.name ? 'filled' : 'outlined'}
              color={activeSubcategory === subcat.name ? 'primary' : 'default'}
              onClick={() => {
                setActiveSubcategory(subcat.name);
                scrollToContentSection(subcat.name);
              }}
              sx={{
                minWidth: 80,
                '& .MuiChip-label': {
                  fontWeight: activeSubcategory === subcat.name ? 600 : 400,
                },
              }}
            />
          ))
        ) : (
          // Render a single chip for the main category if no subcategories
          <Chip
            id={`category-${categoryName}`}
            label={categoryName}
            variant="filled"
            color="primary"
            sx={{
              minWidth: 80,
              '& .MuiChip-label': {
                fontWeight: 600,
              },
            }}
          />
        )}
      </Stack>
    </Box>
  );
}
