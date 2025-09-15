import React, { useState, useEffect } from 'react';
import CategoryList from '../components/CategoryList';
import productsData from '../data/products.json';

const Dashboard = () => {
  const [products] = useState(productsData.products);
  const [selectedCategory, setSelectedCategory] = useState('Men');

  const categories = ['Men', 'Women'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h1>
        <p className="text-gray-600">Discover our latest collection of fashion items</p>
      </div>

      <div className="mb-8">
        <div className="flex space-x-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg text-lg font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <CategoryList 
        category={selectedCategory} 
        products={products} 
      />
    </div>
  );
};

export default Dashboard;
