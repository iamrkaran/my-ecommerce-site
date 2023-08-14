import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/types";
import { removeFromCart, updateQuantity , checkout } from "../../reducers/cartSlice";
import { Product } from "../../store/productTypes";
import { Link } from "react-router-dom";

interface CartItem extends Product {
  quantity: number;
}

const ShoppingCart: React.FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);

  const handleRemoveFromCart = (product: Product) => {
    dispatch(removeFromCart(product));
  };

  const handleQuantityChange = (product: CartItem, quantity: number) => {
    dispatch(updateQuantity({ ...product, quantity }));
  };

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
      <div className="mt-6">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left font-medium">Product</th>
                  <th className="text-left font-medium">Quantity</th>
                  <th className="text-right font-medium">Price</th>
                  <th className="text-right font-medium">Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td className="py-4">
                      <img
                        className="h-16 w-16 mr-4"
                        src={item.image}
                        alt={item.title}
                      />
                      <span className="text-lg font-medium text-gray-900">
                        {item.title}
                      </span>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center">
                        <button
                          onClick={() =>
                            handleQuantityChange(item, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-l"
                        >
                          -
                        </button>
                        <span className="bg-gray-100 px-4 py-1">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item, item.quantity + 1)
                          }
                          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-r"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="text-right py-4">{item.price}</td>
                    <td className="text-right py-4">
                      {item.price * item.quantity}
                    </td>
                    <td className="py-4">
                      <button
                        onClick={() => handleRemoveFromCart(item)}
                        className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td></td>
                  <td></td>
                  <td className="text-right font-medium">Total:</td>
                  <td className="text-right font-medium">{totalPrice}</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
            <div className="mt-8">
              <button
                onClick={() => {
                  dispatch(checkout());
                  alert("Thank you for your order!");
                }}
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                <Link to="/checkout">Checkout</Link>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
