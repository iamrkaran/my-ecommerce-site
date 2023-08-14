
import React from 'react';

const SocialMediaIcons: React.FC = () => {
  return (
    <div className="flex justify-center space-x-4 mt-8">
      <a href="#" className="text-gray-400 hover:text-gray-500">
        <span className="sr-only">Facebook</span>
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M21 0H3C1.34 0 0 1.34 0 3v18c0 1.66 1.34 3 3 3h18c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm-1 7.25h-2.31c-.28 0-.5.22-.5.5v2.69h2.81l-.37 2.88h-2.44v7.38h-2.94v-7.38h-2.44l-.06-.5v-.5h2.5V9.25c0-.55.45-1 1-1h1.31v-2c0-.28.22-.5.5-.5h2.19v2z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <a href="#" className="text-gray-400 hover:text-gray-500">
        <span className="sr-only">Twitter</span>
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M21.98 4.018c-.75.331-1.55.555-2.39.655a4.2 4.2 0 001.84-2.335 8.4 8.4 0 01-2.665 1.015 4.193 4.193 0 00-7.135 3.82 11.888 11.888 0 01-8.65-4.395 4.15 4.15 0 00-.565 2.09 4.185 4.185 0 001.863 3.48 4.175 4.175 0 01-1.895-.525v.05a4.192 4.192 0 003.348 4.105 4.223 4.223 0 01-1.87.07 4.191 4.191 0 003.906 2.905 8.387 8.387 0 01-5.19 1.785 11.83 11.83 0 006.415 1.87c7.665 0 11.855-6.355 11.855-11.875 0-.18-.005-.355-.01-.535.81-.585 1.515-1.315 2.075-2.145z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <a href="#" className="text-gray-400 hover:text-gray-500">
        <span className="sr-only">Instagram</span>
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm4-11a4 4 0 11-8 0 4 4 0 018 0zm-4 6a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
            />
        </svg>
        </a>
    </div>
    );
};


export default SocialMediaIcons;