import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import StatsCards from './components/StatsCards';
import ProductTable from './components/ProductTable';
import CartModal from './components/CartModal';
import SearchBar from './components/SearchBar';
import generateMockProducts from './utils/mockData';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const mockProducts = generateMockProducts(1000);
    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
  };

  const handleSearch = (query) => {
    if (query.trim() === '') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  const totalProducts = products.length;
  const totalRevenue = products.reduce((total, p) => total + parseFloat(p.price), 0);
  const lowStockItems = products.filter((p) => p.stock < 10).length;
  const categoriesCount = [...new Set(products.map((p) => p.category))].length;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
        setSearchQuery={handleSearch}
        toggleCart={() => setIsCartOpen(!isCartOpen)}
      />
      <StatsCards
        totalProducts={totalProducts}
        totalRevenue={totalRevenue}
        lowStockItems={lowStockItems}
        categoriesCount={categoriesCount}
      />
      <ProductTable products={filteredProducts} addToCart={addToCart} />
      <CartModal cart={cart} setCart={setCart} isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default App;