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

import { Order } from 'src/types/order';
import { CartItem } from 'src/types/cart';
import { Service } from 'src/types/service'; // Import CartItem from new location

type CartContextType = {
  items: CartItem[];
  addItem: (service: Service) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  placeOrder: () => void; // Add placeOrder to context type
  itemCount: number;
  totalAmount: number;
};

const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  placeOrder: () => {}, // Initialize placeOrder
  itemCount: 0,
  totalAmount: 0,
});

export const useCart = () => useContext(CartContext);

type CartProviderProps = {
  children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
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

  const removeItem = useCallback((id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  const updateQuantity = useCallback(
    (id: string, quantity: number) => {
      if (quantity <= 0) {
        removeItem(id);
        return;
      }

      setItems((prevItems) =>
        prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    },
    [removeItem]
  ); // removeItem is a dependency because it's called inside updateQuantity

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
      alert('Таны сагс хоосон байна!');
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

    // Retrieve existing orders from local storage
    const savedOrders = localStorage.getItem('user_orders');
    const existingOrders: Order[] = savedOrders
      ? JSON.parse(savedOrders).map((order: any) => ({
          ...order,
          orderDate: new Date(order.orderDate),
        }))
      : [];

    // Add new order and save back to local storage
    localStorage.setItem('user_orders', JSON.stringify([...existingOrders, newOrder]));

    clearCart(); // Clear the current cart
    alert('Захиалга амжилттай хийгдлээ!');
  }, [items, clearCart]);

  const itemCount = items.reduce((count, item) => count + item.quantity, 0);

  const totalAmount = items.reduce((total, item) => total + (item.price || 0) * item.quantity, 0);

  const contextValue = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      placeOrder, // Add placeOrder to context value
      itemCount,
      totalAmount,
    }),
    [items, addItem, removeItem, updateQuantity, clearCart, placeOrder, itemCount, totalAmount]
  );

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}
export type { CartItem };
