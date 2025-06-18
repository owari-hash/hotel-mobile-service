'use client';

import Typography from '@mui/material/Typography';

import OrderList from 'src/sections/order/order-list';
import MobileContainer from 'src/components/shared/mobile-container';

// ----------------------------------------------------------------------

export default function OrderView() {
  return (
    <MobileContainer>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Миний Захиалгууд
      </Typography>

      <OrderList />
    </MobileContainer>
  );
}
