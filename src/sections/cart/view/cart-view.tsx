'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';
import MobileContainer from 'src/components/shared/mobile-container';

import { useCart } from '../context/cart-context';

import CartItem from './cart-item';
import CartEmpty from './cart-empty';
import CartSummary from './cart-summary';

export default function CartView() {
  const theme = useTheme();
  const { items, removeItem, updateQuantity } = useCart();
  const [language, setLanguage] = useState<string>('mn'); // 'mn' for Mongolian, 'en' for English

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'mn' ? 'en' : 'mn'));
  };

  const handleRemoveItem = (id: string) => {
    removeItem(id);
  };

  const handleQuantityChange = (id: string, change: number) => {
    const item = items.find((i) => i.id === id);
    if (item) {
      updateQuantity(id, item.quantity + change);
    }
  };

  return (
    <MobileContainer>
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
                  language === 'mn'
                    ? 'emojione:flag-for-united-states'
                    : 'emojione:flag-for-mongolia'
                }
                width={20}
              />
            </IconButton>
          </Stack>
        </Box>

        <Container maxWidth="sm" sx={{ mt: 3 }}>
          {items.length > 0 ? (
            <>
              <Stack spacing={2}>
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onRemove={handleRemoveItem}
                    onQuantityChange={handleQuantityChange}
                  />
                ))}
              </Stack>

              <Box sx={{ mt: 3 }}>
                <CartSummary items={items} language={language} />
              </Box>
            </>
          ) : (
            <CartEmpty language={language} />
          )}
        </Container>
      </Box>
    </MobileContainer>
  );
}
