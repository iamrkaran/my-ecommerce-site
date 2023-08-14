import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { Product } from '../../store/productTypes';

interface SearchBarProps {
  products: Product[];
  onSearch: (query: string, results: Product[]) => void;
}

interface SearchResultsProps {
  searchResults: Product[];
}

const SearchBar: React.FC<SearchBarProps> = ({ products, onSearch }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const results = products.filter(product => product.title.includes(query));
    setSearchResults(results);
    onSearch(query, results);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="relative text-gray-600">
        <input
          type="search"
          name="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-full"
          placeholder="Search for products"
        />
        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
          <svg
            className="h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M9.293 15.707a1 1 0 01-1.414-1.414l6-6a1 1 0 111.414 1.414l-6 6z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 1a9 9 0 100-18 9 9 0 000 18z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

const SearchResults: React.FC<SearchResultsProps> = ({ searchResults }) => {
  return (
    <div>
      <h2>Search Results ({searchResults.length})</h2>
      <ul>
        {searchResults.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

const Navigation: React.FC<{ products: Product[] }> = ({ products }) => {
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const handleSearch = (query: string, results: Product[]) => {
    setSearchResults(results);
  };

  return (
    <nav className="navigation">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/search">Search Results ({searchResults.length})</Link>
        </li>
      </ul>
      <SearchBar products={products} onSearch={handleSearch} />
    </nav>
  );
};

const ProductListing: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

const Home: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div className="home">
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, quibusdam, voluptas quas, quia voluptates officiis
        necessitatibus laborum cumque tempora quod. Quisquam, quod. Quibusdam
        voluptatibus voluptas, quidem voluptatum quos quod.
      </p>
    </div>
  );
};

const App: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div className="app">
      <Navigation products={products} />
      <Route path="/">
        <Home products={products} />
      </Route>
      <Route path="/products">
        <ProductListing products={products} />
      </Route>
      <Route path="/search">
        <SearchResults searchResults={products} />
      </Route>
    </div>
  );
};

export default App;

