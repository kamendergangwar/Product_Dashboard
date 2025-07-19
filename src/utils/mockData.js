const generateMockProducts = (count) => {
  const products = [];
  const categories = ['Electronics', 'Clothing', 'Books', 'Home', 'Toys'];
  for (let i = 1; i <= count; i++) {
    products.push({
      id: i,
      image: `https://picsum.photos/200/300?random=${i}`,
      name: `Product ${i}`,
      category: categories[Math.floor(Math.random() * categories.length)],
      price: parseFloat((Math.random() * 100).toFixed(2)),
      stock: Math.floor(Math.random() * 100),
      status: Math.random() > 0.5 ? 'In Stock' : 'Out of Stock',
    });
  }
  return products;
};

export default generateMockProducts;