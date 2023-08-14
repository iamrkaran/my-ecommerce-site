import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types';
import ProductItem from '../ProductItem/ProductItem';

import products from '../../data/products';

const ProductList: React.FC = () => {
  // const products = useSelector((state: RootState) => state.products?.items);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900">Shop</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products?.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
