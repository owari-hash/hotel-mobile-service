import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { Service } from 'src/types/service';
import Iconify from 'src/components/iconify';

type CartSummaryProps = {
  items: (Service & { quantity: number })[];
  language: string;
};

export default function CartSummary({ items, language }: CartSummaryProps) {
  const calculateSubtotal = () =>
    items.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);

  const discount = 0; // In a real app, this would be calculated based on promotions or coupons

  const calculateTotal = () => calculateSubtotal() - discount;

  return (
    <Card sx={{ p: 3 }}>
      <Stack spacing={2}>
        <Typography variant="h6">
          {language === 'mn' ? 'Захиалгын дүн' : 'Order Summary'}
        </Typography>

        <Stack spacing={1}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {language === 'mn' ? 'Дэд дүн' : 'Subtotal'}
            </Typography>
            <Typography variant="body2">{calculateSubtotal().toLocaleString()}₮</Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {language === 'mn' ? 'Хөнгөлөлт' : 'Discount'}
            </Typography>
            <Typography variant="body2">{discount.toLocaleString()}₮</Typography>
          </Stack>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="subtitle1">{language === 'mn' ? 'Нийт дүн' : 'Total'}</Typography>
          <Typography variant="subtitle1" sx={{ color: 'primary.main' }}>
            {calculateTotal().toLocaleString()}₮
          </Typography>
        </Stack>

        <Button
          fullWidth
          size="large"
          variant="contained"
          startIcon={<Iconify icon="eva:checkmark-circle-2-fill" />}
        >
          {language === 'mn' ? 'Захиалах' : 'Checkout'}
        </Button>
      </Stack>
    </Card>
  );
}
