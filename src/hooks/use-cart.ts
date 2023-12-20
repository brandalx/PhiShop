//add items
//remove items
//clear the cart

import { Product } from "@/payload-types";
import { create } from "zustand";
export type CartItem = {
  product: Product;
};
type CartState = {
  items: CartItem;
  addItem: (product: Product) => void;
  removeItem: (productId: Product) => void;
  clearCart: () => void;
};

//track of cart items
export const useCart = create<CartState>();
