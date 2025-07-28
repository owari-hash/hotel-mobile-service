'use client';

import React, { useMemo } from 'react';

import { TransitionProps } from '@mui/material/transitions';
import {
  Box,
  List,
  Slide,
  Dialog,
  Button,
  ListItem,
  Typography,
  DialogTitle,
  ListItemIcon,
  ListItemText,
  DialogContent,
  ListItemButton,
} from '@mui/material';

import { useCart } from 'src/sections/cart/context/cart-context';
import { useGetProductCategories } from 'src/api/service'; // Changed back to useGetProductCategories

import Iconify from '../iconify/iconify';
import { Service, Category } from '../../types/service';
import { RouterLink } from '../../routes/components';

const Transition = React.forwardRef(
  (props: TransitionProps & { children: React.ReactElement }, ref: React.Ref<unknown>) => (
    <Slide direction="up" ref={ref} {...props} />
  )
);

type Props = {
  open: boolean;
  onClose: () => void;
  services?: Service[];
  onSelect?: (service: Service) => void; // Made optional as it might not be directly used for adding to cart
  onSelectCategory?: (category: { id: string; name: string; path: string }) => void;
  selectedService?: Service | null; // Add a prop for the currently selected service to add to cart
};

export default function ServiceMenuDialog({
  open,
  onClose,
  services,
  onSelect,
  onSelectCategory = () => {},
  selectedService = null, // Default to null
}: Props) {
  const { addItem } = useCart();
  const { productCategories, productCategoriesLoading, productCategoriesError } =
    useGetProductCategories(); // Changed back to useGetProductCategories

  const categoriesToDisplay = useMemo(() => {
    // Display all product categories for now, let user specify exclusions if needed
    const filtered =
      productCategories?.map((category) => ({
        id: String(category.id),
        name: category.name,
        icon: category.icon || '', // Ensure icon is handled
        path: `/service/category/${category.id}`, // Construct path dynamically
      })) || [];
    return filtered;
  }, [productCategories]);

  const handleAddToCart = () => {
    if (selectedService) {
      addItem(selectedService);
      onClose(); // Close the dialog after adding to cart
    }
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
      <DialogTitle>
        <Typography variant="h6">Үйлчилгээнүүд</Typography>
      </DialogTitle>

      <DialogContent dividers>
        <List disablePadding>
          {productCategoriesLoading && <Typography>Loading categories...</Typography>}
          {productCategoriesError && <Typography>Error loading categories.</Typography>}
          {!productCategoriesLoading && !productCategoriesError && (
            <List disablePadding>
              {categoriesToDisplay.map((category) => (
                <ListItem key={category.id} disableGutters>
                  <ListItemButton
                    component={RouterLink}
                    href={`/service/category/${category.id}`} // Dynamic path based on category ID
                    onClick={() => {
                      onSelectCategory(category);
                      onClose();
                    }}
                    sx={{
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 1,
                      '&:hover': {
                        borderColor: 'primary.main',
                      },
                    }}
                  >
                    <ListItemIcon>
                      <Iconify icon={category.icon} width={24} />
                    </ListItemIcon>
                    <ListItemText
                      primary={category.name}
                      primaryTypographyProps={{ fontWeight: 500 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}
        </List>
      </DialogContent>

      <Box p={2} display="flex" gap={2}>
        <Button fullWidth variant="outlined" onClick={onClose}>
          Хаах
        </Button>
        {selectedService && (
          <Button
            fullWidth
            variant="contained"
            onClick={handleAddToCart}
            startIcon={<Iconify icon="carbon:shopping-cart" />}
          >
            Сагсанд нэмэх
          </Button>
        )}
      </Box>
    </Dialog>
  );
}
