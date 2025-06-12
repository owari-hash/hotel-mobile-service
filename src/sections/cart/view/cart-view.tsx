'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { paths } from 'src/routes/paths';
import { Service } from 'src/types/service';
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';

import CartItem from './cart-item';
import CartEmpty from './cart-empty';
import CartSummary from './cart-summary';

// Mock cart data - in a real app, this would come from a state management solution or API
const MOCK_CART_ITEMS: (Service & { quantity: number })[] = [
  {
    id: '1',
    title: 'Өрөө цэвэрлэх',
    content: 'Таны өрөөг өдөр бүр стандартын дагуу цэвэрлэж, тав тухтай орчинг бүрдүүлнэ.',
    category: 'Өрөөний үйлчилгээ',
    icon: 'carbon:clean',
    price: 12000,
    quantity: 1,
  },
  {
    id: '7',
    title: 'Өрөөнд хоол захиалах',
    content: 'Манай мэргэжлийн тогоочоос шинэхэн, амттай хоолыг өрөөндөө захиалан авах боломжтой.',
    category: 'Хоол',
    icon: 'carbon:restaurant',
    price: 45000,
    quantity: 2,
  },
];

export default function CartView() {
  const theme = useTheme();
  const [cartItems, setCartItems] = useState<(Service & { quantity: number })[]>(MOCK_CART_ITEMS);
  const [language, setLanguage] = useState<string>('mn'); // 'mn' for Mongolian, 'en' for English

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'mn' ? 'en' : 'mn'));
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id: string, change: number) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 5 }}>
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          bgcolor: 'background.paper',
          borderBottom: () => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 2, py: 1.5 }}
        >
          <IconButton
            component={RouterLink}
            href={paths.service.root}
            sx={{
              bgcolor: 'background.default',
              boxShadow: theme.customShadows.z8,
              '&:hover': {
                bgcolor: theme.palette.action.hover,
              },
              width: 40,
              height: 40,
            }}
            size="small"
          >
            <Iconify icon="eva:arrow-ios-back-fill" />
          </IconButton>

          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {language === 'mn' ? 'Сагс' : 'Cart'}
          </Typography>

          <IconButton
            onClick={toggleLanguage}
            sx={{
              bgcolor: 'background.default',
              boxShadow: theme.customShadows.z8,
              '&:hover': {
                bgcolor: theme.palette.action.hover,
              },
              width: 40,
              height: 40,
            }}
            size="small"
          >
            <Iconify
              icon={
                language === 'mn' ? 'emojione:flag-for-united-states' : 'emojione:flag-for-mongolia'
              }
              width={20}
            />
          </IconButton>
        </Stack>
      </Box>

      <Container maxWidth="sm" sx={{ mt: 3 }}>
        {cartItems.length > 0 ? (
          <>
            <Stack spacing={2}>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={handleRemoveItem}
                  onQuantityChange={handleQuantityChange}
                />
              ))}
            </Stack>

            <Box sx={{ mt: 3 }}>
              <CartSummary items={cartItems} language={language} />
            </Box>
          </>
        ) : (
          <CartEmpty language={language} />
        )}
      </Container>
    </Box>
  );
}
