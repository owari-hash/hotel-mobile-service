'use client';

import { useMemo } from 'react';

import ServiceListTemplate from 'src/sections/services/list/service-list-template';
import { useGetProductCategories } from 'src/api/service';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';

export default function CategoryView({ id }: { id: string }) {
  const { productCategories, productCategoriesLoading, productCategoriesError } =
    useGetProductCategories();

  const categoryName = useMemo(() => {
    if (productCategories) {
      const foundCategory = productCategories.find((cat) => String(cat.id) === String(id));
      return foundCategory ? foundCategory.name : '';
    }
    return '';
  }, [productCategories, id]);

  if (productCategoriesLoading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (productCategoriesError) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <Alert severity="error">
          Error loading categories. Please try again later.
        </Alert>
      </Container>
    );
  }

  if (!categoryName) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <Alert severity="warning">
          Category not found.
        </Alert>
      </Container>
    );
  }

  return <ServiceListTemplate categoryName={categoryName} />;
}
