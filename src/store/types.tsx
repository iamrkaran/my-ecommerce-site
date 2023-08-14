// types.ts

import { ProductState } from './productTypes';
import { CartState } from './cartTypes';

export interface RootState {
  products: ProductState;
  cart: CartState;
}

