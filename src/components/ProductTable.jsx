import React, { useState } from 'react';

const ProductTable = ({ products, addToCart, editProduct, viewProduct, deleteProduct }) => {
  const [currentColumns, setCurrentColumns] = useState([
    { id: 'id', label: 'ID' },
    { id: 'image', label: 'Image' },
    { id: 'name', label: 'Name' },
    { id: 'category', label: 'Category' },
    { id: 'price', label: 'Price' },
    { id: 'stock', label: 'Stock' },
    { id: 'status', label: 'Status' },
    { id: 'actions', label: 'Actions' },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const itemsPerPage = 10;

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain', index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetIndex) => {
    const dragIndex = e.dataTransfer.getData('text/plain');
    if (dragIndex !== targetIndex.toString()) {
      const newColumns = [...currentColumns];
      const [draggedColumn] = newColumns.splice(dragIndex, 1);
      newColumns.splice(targetIndex, 0, draggedColumn);
      setCurrentColumns(newColumns);
    }
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];
    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const paginatedProducts = sortedProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="p-4">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {currentColumns.map((column, index) => (
              <th
                key={column.id}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, index)}
                onClick={() => column.id !== 'image' && column.id !== 'actions' && handleSort(column.id)}
                className="border p-2 cursor-grab hover:bg-gray-100 transition-colors"
              >
                {column.label}
                {sortConfig.key === column.id && (
                  <span>{sortConfig.direction === 'asc' ? ' ▲' : ' ▼'}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedProducts.map((product) => (
            <tr key={product.id}>
              {currentColumns.map((column) => (
                <td key={column.id} className="border p-2">
                  {column.id === 'image' ? (
                    <img src={product.image} alt={product.name} className="w-10 h-10 mx-auto" />
                  ) : column.id === 'actions' ? (
                    <div className="flex space-x-2 justify-center">
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                      >
                        Add to Cart
                      </button>
                      <button
                        onClick={() => editProduct(product)}
                        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => viewProduct(product)}
                        className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600"
                      >
                        View
                      </button>
                    </div>
                  ) : (
                    product[column.id]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300"
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage * itemsPerPage >= products.length}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductTable;