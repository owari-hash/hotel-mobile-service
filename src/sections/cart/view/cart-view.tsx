'use client';

import { useSnackbar } from 'notistack';
import { useRouter } from 'next/navigation';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import Iconify from 'src/components/iconify';
import MobileContainer from 'src/components/shared/mobile-container';

import { useCart } from '../context/cart-context';

import CartItem from './cart-item';
import CartEmpty from './cart-empty';
import CartSummary from './cart-summary';

export default function CartView() {
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar(); // Re-added enqueueSnackbar initialization
  const router = useRouter();
  const { items, removeItem, updateQuantity } = useCart();
  const [language, setLanguage] = useState<string>('mn');
  const [openConfirm, setOpenConfirm] = useState(false);
  const [itemToRemoveId, setItemToRemoveId] = useState<string | null>(null);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'mn' ? 'en' : 'mn'));
  };

  const handleRemoveItem = useCallback((id: string) => {
    setItemToRemoveId(id);
    setOpenConfirm(true);
  }, []);

  const handleConfirmRemove = useCallback(() => {
    if (itemToRemoveId) {
      try {
        removeItem(itemToRemoveId);
        enqueueSnackbar(language === 'mn' ? 'Амжилттай устгагдлаа!' : 'Successfully removed!', {
          variant: 'success',
        });
      } catch (error) {
        enqueueSnackbar(language === 'mn' ? 'Устгахад алдаа гарлаа.' : 'Failed to remove item.', {
          variant: 'error',
        });
      }
    }
    setOpenConfirm(false);
    setItemToRemoveId(null);
  }, [enqueueSnackbar, itemToRemoveId, language, removeItem]);

  const handleCancelRemove = useCallback(() => {
    setOpenConfirm(false);
    setItemToRemoveId(null);
  }, []);

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
              onClick={() => router.back()}
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
              {language === 'mn' ? 'Сагслах' : 'Cart'}
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

      <Dialog open={openConfirm} onClose={handleCancelRemove}>
        <DialogTitle>{language === 'mn' ? 'Баталгаажуулах' : 'Confirm Deletion'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {language === 'mn'
              ? 'Та энэ зүйлийг сагснаас устгахдаа итгэлтэй байна уу?'
              : 'Are you sure you want to remove this item from your cart?'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelRemove} color="inherit">
            {language === 'mn' ? 'Үгүй' : 'No'}
          </Button>
          <Button onClick={handleConfirmRemove} color="error" autoFocus>
            {language === 'mn' ? 'Тийм' : 'Yes'}
          </Button>
        </DialogActions>
      </Dialog>
    </MobileContainer>
  );
}
