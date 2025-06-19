'use client';

import {
  useMemo,
  useState,
  ReactNode,
  useEffect,
  useContext,
  useCallback,
  createContext,
} from 'react';

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from '@mui/material';

import { Order } from 'src/types/order';
import { CartItem } from 'src/types/cart';
import { Service } from 'src/types/service';
import { useSnackbar } from 'src/components/snackbar';

type CartContextType = {
  items: CartItem[];
  addItem: (service: Service) => void;
  removeItem: (id: string) => void;
  confirmRemoveItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  placeOrder: () => void;
  itemCount: number;
  totalAmount: number;
};

const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  confirmRemoveItem: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  placeOrder: () => {},
  itemCount: 0,
  totalAmount: 0,
});

export const useCart = () => useContext(CartContext);

type CartProviderProps = {
  children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
  const { enqueueSnackbar } = useSnackbar();
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
      } catch (error) {
        console.error('Failed to load cart:', error);
        return [];
      }
    }
    return [];
  });

  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [itemToRemoveId, setItemToRemoveId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('cart', JSON.stringify(items));
      } catch (error) {
        console.error('Failed to save cart:', error);
      }
    }
  }, [items]);

  const addItem = useCallback((service: Service) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((item) => item.id === service.id);

      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        return updatedItems;
      }

      return [...prevItems, { ...service, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback(
    (id: string) => {
      try {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
        enqueueSnackbar('Амжилттай устгагдлаа', { variant: 'success' });
      } catch (error) {
        console.error('Failed to remove item:', error);
        enqueueSnackbar('Устгахад алдаа гарлаа', { variant: 'error' });
      }
    },
    [enqueueSnackbar]
  );

  const confirmRemoveItem = useCallback((id: string) => {
    setItemToRemoveId(id);
    setOpenConfirmDialog(true);
  }, []);

  const handleCloseConfirmDialog = () => {
    setOpenConfirmDialog(false);
    setItemToRemoveId(null);
  };

  const handleConfirmRemove = () => {
    if (itemToRemoveId) {
      removeItem(itemToRemoveId);
    }
    handleCloseConfirmDialog();
  };

  const updateQuantity = useCallback(
    (id: string, quantity: number) => {
      if (quantity <= 0) {
        confirmRemoveItem(id);
        return;
      }

      setItems((prevItems) =>
        prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    },
    [confirmRemoveItem]
  );

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const generateOrderNumber = () => {
    const timestamp = new Date().getTime();
    const random = Math.floor(Math.random() * 1000);
    return `ORD-${timestamp}-${random}`;
  };

  const placeOrder = useCallback(() => {
    if (items.length === 0) {
      enqueueSnackbar('Таны сагс хоосон байна!', { variant: 'warning' });
      return;
    }

    const newOrder: Order = {
      id: `order-${Date.now()}`,
      orderNumber: generateOrderNumber(),
      orderDate: new Date(),
      totalAmount: items.reduce((total, item) => total + (item.price || 0) * item.quantity, 0),
      status: 'Pending',
      items,
    };

    const savedOrders = localStorage.getItem('user_orders');
    const existingOrders: Order[] = savedOrders
      ? JSON.parse(savedOrders).map((order: any) => ({
          ...order,
          orderDate: new Date(order.orderDate),
        }))
      : [];

    localStorage.setItem('user_orders', JSON.stringify([...existingOrders, newOrder]));

    clearCart();
    enqueueSnackbar('Захиалга амжилттай хийгдлээ!', { variant: 'success' });
  }, [items, clearCart, enqueueSnackbar]);

  const itemCount = items.reduce((count, item) => count + item.quantity, 0);

  const totalAmount = items.reduce((total, item) => total + (item.price || 0) * item.quantity, 0);

  const contextValue = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      confirmRemoveItem, // Add new function to context value
      updateQuantity,
      clearCart,
      placeOrder,
      itemCount,
      totalAmount,
    }),
    [
      items,
      addItem,
      removeItem,
      confirmRemoveItem, // Add new function to dependencies
      updateQuantity,
      clearCart,
      placeOrder,
      itemCount,
      totalAmount,
    ]
  );

  return (
    <CartContext.Provider value={contextValue}>
      {children}

      <Dialog open={openConfirmDialog} onClose={handleCloseConfirmDialog}>
        <DialogTitle>Баталгаажуулах</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Та энэ зүйлийг сагснаас устгахдаа итгэлтэй байна уу?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmDialog} color="primary">
            Үгүй
          </Button>
          <Button onClick={handleConfirmRemove} color="primary" autoFocus>
            Тийм
          </Button>
        </DialogActions>
      </Dialog>
    </CartContext.Provider>
  );
}
export type { CartItem };
