'use client';

import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { TransitionProps } from '@mui/material/transitions';

import Iconify from '../iconify';
import { Service } from '../../types/service';
import { useCart } from '../../sections/cart/context/cart-context';

const Transition = React.forwardRef(
  (props: TransitionProps & { children: React.ReactElement }, ref: React.Ref<unknown>) => (
    <Slide direction="up" ref={ref} {...props} />
  )
);

type ServiceDialogProps = {
  open: boolean;
  onClose: () => void;
  service: Service | null;
};

export default function ServiceDialog({ open, onClose, service }: ServiceDialogProps) {
  const { addItem } = useCart();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  if (!service) return null;

  const addToCart = () => {
    addItem(service);
    setSnackbarOpen(true);
    setTimeout(() => {
      onClose();
    }, 500); // Close after 500ms to allow snackbar to be seen
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      fullWidth
      maxWidth="xs"
      sx={{
        '& .MuiDialog-container': {
          alignItems: 'flex-end',
        },
        '& .MuiPaper-root': {
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          p: 2,
        },
      }}
    >
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        sx={{ mt: 8 }}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          {service.title} сагсанд нэмэгдлээ
        </Alert>
      </Snackbar>

      <DialogTitle sx={{ pb: 1 }}>
        <Typography variant="h6" component="div">
          {service.title}
        </Typography>
      </DialogTitle>

      <DialogContent>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
          {service.content}
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Stack spacing={1.5} sx={{ mb: 3 }}>
          <Typography variant="subtitle2" color="text.primary">
            Үйлчилгээний дэлгэрэнгүй:
          </Typography>

          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" color="text.secondary">
              Байршил:
            </Typography>
            <Typography variant="body2">{service.location || '---'}</Typography>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" color="text.secondary">
              Үнэ:
            </Typography>
            <Typography variant="body2" color="primary.main">
              {service.price ? `${service.price}₮` : '---'}
            </Typography>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" color="text.secondary">
              Үнэлгээ:
            </Typography>
            <Typography variant="body2">
              {service.ratings ?? 0} ({service.numberOfReviews ?? 0} сэтгэгдэл)
            </Typography>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" color="text.secondary">
              Хугацаа:
            </Typography>
            <Typography variant="body2">{service.deadline || '---'}</Typography>
          </Box>
        </Stack>

        <Divider sx={{ mb: 2 }} />

        <Stack direction="row" spacing={2}>
          <Button fullWidth variant="contained" onClick={onClose}>
            Хаах
          </Button>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            startIcon={<Iconify icon="mdi:cart" />}
            onClick={() => {
              addToCart();
            }}
          >
            Сагс
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
