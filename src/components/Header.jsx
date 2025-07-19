import React from 'react';

const Header = ({ cartCount, setSearchQuery, toggleCart }) => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center p-4 bg-gray-800 text-white">
      <nav className="flex space-x-4 mb-2 sm:mb-0">
        <a href="#" className="hover:underline">Dashboard</a>
        <a href="#" className="hover:underline">Products</a>
      </nav>
      <div className="flex items-center space-x-4">
        <input
          type="search"
          placeholder="Search products..."
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button onClick={toggleCart} className="relative">
          <span className="bg-red-500 text-white rounded-full px-2 absolute -top-2 -right-2">{cartCount}</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button>
        <img src="https://picsum.photos/32/32" alt="User" className="w-8 h-8 rounded-full" />
      </div>
    </header>
  );
};

export default Header;