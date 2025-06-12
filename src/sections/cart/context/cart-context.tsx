'use client';

import { useMemo, useState, useEffect, ReactNode, useContext, createContext } from 'react';

import { Service } from 'src/types/service';

// Define the cart item type
export type CartItem = Service & { quantity: number };

// Define the cart context type
type CartContextType = {
  items: CartItem[];
  addItem: (service: Service) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  totalAmount: number;
};

// Create the cart context with default values
const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  itemCount: 0,
  totalAmount: 0,
});

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);

type CartProviderProps = {
  children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
  // Initialize cart items from localStorage if available
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error);
    }
  }, []);

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(items));
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error);
    }
  }, [items]);

  // Add an item to the cart
  const addItem = (service: Service) => {
    setItems((prevItems) => {
      // Check if the item already exists in the cart
      const existingItemIndex = prevItems.findIndex((item) => item.id === service.id);

      if (existingItemIndex !== -1) {
        // If the item exists, increase its quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        return updatedItems;
      }

      return [...prevItems, { ...service, quantity: 1 }];
    });
  };

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // const updateQuantity = (id: string, quantity: number) => {
  //   if (quantity <= 0) {
  //     removeItem(id);
  //     return;
  //   }

  //   setItems((prevItems) =>
  //     prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
  //   );
  // };

  const clearCart = () => {
    setItems([]);
  };

  const itemCount = items.reduce((count, item) => count + item.quantity, 0);

  const totalAmount = items.reduce((total, item) => total + (item.price || 0) * item.quantity, 0);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      // updateQuantity, // Ensure it's included here
      clearCart,
      itemCount,
      totalAmount,
    }),
    [items, itemCount, totalAmount] // Include updateQuantity in dependencies
  );

  // return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}
