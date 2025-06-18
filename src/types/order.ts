import { CartItem } from './cart';

export interface Order {
  id: string;
  orderNumber: string;
  orderDate: Date;
  totalAmount: number;
  status: 'Pending' | 'Completed' | 'Cancelled';
  items: CartItem[];
}
