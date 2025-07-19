import React from 'react';

const StatsCards = ({ totalProducts, totalRevenue, lowStockItems, categoriesCount }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
      <div className="bg-blue-500 p-4 rounded text-white text-center">
        <h3 className="text-lg font-semibold">Total Products</h3>
        <p className="text-2xl">{totalProducts}</p>
      </div>
      <div className="bg-green-500 p-4 rounded text-white text-center">
        <h3 className="text-lg font-semibold">Total Revenue</h3>
        <p className="text-2xl">${totalRevenue.toFixed(2)}</p>
      </div>
      <div className="bg-yellow-500 p-4 rounded text-white text-center">
        <h3 className="text-lg font-semibold">Low Stock</h3>
        <p className="text-2xl">{lowStockItems}</p>
      </div>
      <div className="bg-purple-500 p-4 rounded text-white text-center">
        <h3 className="text-lg font-semibold">Categories</h3>
        <p className="text-2xl">{categoriesCount}</p>
      </div>
    </div>
  );
};

export default StatsCards;