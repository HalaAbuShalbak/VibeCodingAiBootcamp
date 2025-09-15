import React, { useState } from 'react';
import ProductCard from './ProductCard';

const CategoryList = ({ category, products }) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState('All');
  
  const subcategories = ['All', 'Jackets', 'Pants', 'Blouse', 'Caps'];
  
  const filteredProducts = selectedSubcategory === 'All' 
    ? products.filter(product => product.category === category)
    : products.filter(product => 
        product.category === category && 
        product.subcategory === selectedSubcategory
      );

  return (
    <div className="mb-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{category}</h2>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {subcategories.map(subcategory => (
            <button
              key={subcategory}
              onClick={() => setSelectedSubcategory(subcategory)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedSubcategory === subcategory
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {subcategory}
            </button>
          ))}
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default CategoryList;
