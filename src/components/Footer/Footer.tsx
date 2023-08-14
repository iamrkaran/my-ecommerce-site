
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-8">
          {/* Add your columns here */}
          <div className="col-span-4 md:col-span-1">
            <h3 className="text-lg font-medium mb-4">About Us</h3>
            <p className="text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dapibus leo eget bibendum convallis. Nam sagittis tincidunt diam,
              vel viverra quam consectetur at.
            </p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Categories</h3>
            <ul className="text-sm mb-4">
              <li>
                <a href="#">Books</a>
              </li>
              <li>
                <a href="#">Electronics</a>
              </li>
              <li>
                <a href="#">Clothing</a>
              </li>
              <li>
                <a href="#">Home &amp; Garden</a>
              </li>
              <li>
                <a href="#">Sports &amp; Outdoors</a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Customer Service</h3>
            <ul className="text-sm mb-4">
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
            </ul>
          </div>
          <div className="col-span-4 md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Subscribe to Our Newsletter</h3>
            <form>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border border-gray-300 px-4 py-2 rounded-lg mr-4 w-full"
                />
                <button
                  type="submit"
                  className="bg-gray-700 text-white px-4 py-2 rounded-lg"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm">
              &copy; 2023 E-commerce. All rights reserved.
            </p>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
