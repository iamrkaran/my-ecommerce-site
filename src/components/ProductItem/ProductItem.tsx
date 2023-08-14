
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../reducers/cartSlice';
import { Product } from '../../store/productTypes';

interface Props {
  product: Product;

}


const ProductItem: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <Link to={`/products/${product.id}`}>
        <img className="w-full" src={product.image} alt={product.title} />
      </Link>
      <div className="p-4">
      <h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-description">{product.description}</p>
        <ul className="product-attributes">
          <li><strong>Brand:</strong> {product.brand}</li>
          <li><strong>Color:</strong> {product.color}</li>
          {product.size && <li><strong>Size:</strong> {product.size}</li>}
          {product.storage && <li><strong>Storage:</strong> {product.storage}</li>}
          {product.display && <li><strong>Display:</strong> {product.display}</li>}
          {product.smart_features && <li><strong>Smart Features:</strong> {product.smart_features}</li>}
          {product.band_material && <li><strong>Band Material:</strong> {product.band_material}</li>}
          {product.water_resistance && <li><strong>Water Resistance:</strong> {product.water_resistance}</li>}
          {product.sensor && <li><strong>Sensor:</strong> {product.sensor}</li>}
          {product.video_resolution && <li><strong>Video Resolution:</strong> {product.video_resolution}</li>}
        </ul>
        <div className="mt-4">
          <button
            onClick={handleAddToCart}
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
