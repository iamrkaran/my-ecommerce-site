// productTypes.ts

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  brand: string;
  color: string;
  size?: string; // Optional property
  storage?: string; // Optional property
  display?: string; // Optional property
  smart_features?: string; // Optional property
  band_material?: string; // Optional property
  water_resistance?: string; // Optional property
  sensor?: string; // Optional property
  video_resolution?: string; // Optional property
  quantity: number;
  pages?: number; // Optional property
  publisher?: string; // Optional property
  language?: string; // Optional property
}

export interface ProductFilter {
  minPrice?: number;
  maxPrice?: number;
  category?: string;
}

export interface ProductState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

export enum ProductActionTypes {
  FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE',
  FILTER_PRODUCTS = 'FILTER_PRODUCTS',
}

interface FetchProductsRequestAction {
  type: typeof ProductActionTypes.FETCH_PRODUCTS_REQUEST;
}

interface FetchProductsSuccessAction {
  type: typeof ProductActionTypes.FETCH_PRODUCTS_SUCCESS;
  payload: Product[];
}

interface FetchProductsFailureAction {
  type: typeof ProductActionTypes.FETCH_PRODUCTS_FAILURE;
  payload: string;
}

interface FilterProductsAction {
  type: typeof ProductActionTypes.FILTER_PRODUCTS;
  payload: ProductFilter;
}

export type ProductAction =
  | FetchProductsRequestAction
  | FetchProductsSuccessAction
  | FetchProductsFailureAction
  | FilterProductsAction;

  
  export interface Book extends Product{
    id: number;
    title: string;
    author: string;
    price: number;
    imageUrl: string;
  }
  
  export interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
  }