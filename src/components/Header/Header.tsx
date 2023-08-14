import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const cartItems = useSelector((state: any) => state.cart.cartItems);
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="logo">
          {/* Add your logo here */}
          <h1>E-commerce</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="search-cart flex items-center space-x-4">
          {/* Add your search bar and cart icon here */}
          <form>
            <input
              type="text"
              placeholder="Search products..."
              className="border border-gray-300 px-4 py-2 rounded-lg"
            />
            <button
              type="submit"
              className="bg-gray-800 text-white px-4 py-2 rounded-lg"
            >
              Search
            </button>
          </form>
          <Link to="/cart" className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-800"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.5 16a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM14.5 16a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM18.5 4H5.707l.354-1.061a1 1 0 00-.204-.874A1.004 1.004 0 004.5 2H2v2h2.5l3.286 9.857a2 2 0 002.09 1.429h6.835a2 2 0 001.997-1.821L20 6v-.5a1.5 1.5 0 00-1.5-1.5zm-13 5h9.5a1 1 0 010 2h-9.5a1 1 0 010-2z"
                clipRule="evenodd"
              />
            </svg>
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 rounded-full text-white text-xs px-2 py-1">
                {cartItems.length}
              </span>
            )}
          </Link>
          {user ? (
            <Link to="/profile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-800"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 100-8 4 4 0 000 8z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M10 20a6 6 0 100-12 6 6 0 000 12zm0 2a8 8 0 100-16 8 8 0 000 16z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          ) : (
            <Link to="/login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-800"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 100-8 4 4 0 000 8z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M10 20a6 6 0 100-12 6 6 0 000 12zm0 2a8 8 0 100-16 8 8 0 000 16z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
