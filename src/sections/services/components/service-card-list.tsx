import React, { useState, useEffect } from 'react';

import { Box, Grid, Typography, CircularProgress } from '@mui/material';

import axios from 'src/utils/axios';
import { ProductTemplate, ProductCategory } from 'src/types/service';
import ServiceCard from 'src/components/service-card/service-card';
import { HOST_API } from 'src/config-global';

interface ServiceCardListProps {
  products: ProductTemplate[];
  language: string;
  onOrderClick: (product: ProductTemplate) => void;
}

export default function ServiceCardList({
  products,
  language,
  onOrderClick,
}: ServiceCardListProps) {
  // Removed internal state and useEffect for fetching products
  // The products are now passed as a prop.

  // No loading or error states here, as they are handled by the parent component
  // that fetches the products.

  return (
    <Grid container spacing={2}>
      {products.map((product: ProductTemplate) => (
        <Grid key={product.id.toString()} item xs={12} sm={6}>
          <ServiceCard service={product} language={language} onOrderClick={onOrderClick} />
        </Grid>
      ))}
    </Grid>
  );
}
