import React, { useState } from 'react';

interface FiltersProps {
  onFilterChange: (filter: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState('all');
  const [brand, setBrand] = useState('all');
  const [category, setCategory] = useState('all');

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Build the filter query string based on user selections
    let filter = '';
    if (priceRange !== 'all') filter += `priceRange=${priceRange}&`;
    if (brand !== 'all') filter += `brand=${brand}&`;
    if (category !== 'all') filter += `category=${category}`;
    // Call the parent component's onFilterChange function with the filter query string
    onFilterChange(filter);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700">
            Price Range
            </label>
            <select
                id="priceRange"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            >
                <option value="all">All</option>
                <option value="0-100">$0 - $100</option>
                <option value="100-200">$100 - $200</option>
                <option value="200-300">$200 - $300</option>
                <option value="300-400">$300 - $400</option>
                <option value="400-500">$400 - $500</option>
                <option value="500-600">$500 - $600</option>
                <option value="600-700">$600 - $700</option>
                <option value="700-800">$700 - $800</option>
                <option value="800-900">$800 - $900</option>
                <option value="900-1000">$900 - $1000</option>
            </select>
        </div>
        <div>
            <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
            Brand
            </label>
            <select
                id="brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            >
                <option value="all">All</option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Microsoft">Microsoft</option>
                <option value="Google">Google</option>
                <option value="Asus">Asus</option>
                <option value="Acer">Acer</option>
                <option value="Dell">Dell</option>
                <option value="HP">HP</option>
                <option value="Lenovo">Lenovo</option>
            </select>

        </div>
        <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
            </label>
            <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            >
                <option value="all">All</option>
                <option value="Laptops">Laptops</option>
                <option value="Desktops">Desktops</option>
                <option value="Tablets">Tablets</option>
                <option value="Phones">Phones</option>
                <option value="Monitors">Monitors</option>
                <option value="Printers">Printers</option>
                <option value="Accessories">Accessories</option>
            </select>
        </div>
        </div>
        <div className="flex justify-end mt-4">
            <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Filter
            </button>
        </div>
    </form>
    );
};

export default Filters;