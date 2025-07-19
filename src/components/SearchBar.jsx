import React, { useState, useEffect } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(null, args), delay);
    };
  };

  const handleSearch = debounce((q) => onSearch(q), 300);

  useEffect(() => {
    handleSearch(query);
  }, [query, handleSearch]);

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="p-2 rounded w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default SearchBar;