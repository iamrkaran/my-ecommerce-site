import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../store/productTypes';

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const { id } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }


    },
    removeFromCart(state, action: PayloadAction<Product>) {
      const { id } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
      } else {
        state.items = state.items.filter(item => item.id !== id);
      }
    },
    updateQuantity(state, action: PayloadAction<{ id: number; quantity: number }>) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },

    clearCart(state) {
      state.items = [];
    },
    checkout(state) {
      state.items = [];
    },


  },
});

export const { updateQuantity, checkout ,clearCart, addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
