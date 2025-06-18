'use client';

import MainLayout from 'src/layouts/main';
import { OrderView } from 'src/sections/order/view';

export default function OrderClientWrapper() {
  return (
    <MainLayout>
      <OrderView />
    </MainLayout>
  );
}
