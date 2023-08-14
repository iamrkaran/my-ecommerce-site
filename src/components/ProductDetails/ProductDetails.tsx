import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../reducers/cartSlice';
import { Product } from '../../store/productTypes';
import products from '../../data/products';

const ProductDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === parseInt(id)) as Product;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img className="w-full" src={product.image} alt={product.title} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{product.title}</h2>
          
          <p className="mt-2 text-lg font-medium text-gray-900">{product.price}</p>
          <div className="mt-4">
            <button
              onClick={handleAddToCart}
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Add to cart
            </button>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900">Description</h3>
            <p className="mt-2 text-gray-600">{product.description}</p>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900">Specifications</h3>
            <ul className="mt-2 text-gray-600 list-disc list-inside">
              <li>{product.pages} pages</li>
              <li>{product.publisher}</li>
              <li>{product.language} language</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
