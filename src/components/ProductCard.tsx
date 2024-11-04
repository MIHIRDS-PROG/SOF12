import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity opacity-0 hover:opacity-100 flex items-center justify-center">
          <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-medium transform -translate-y-2 hover:translate-y-0 transition-transform">
            View Details
          </button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-purple-600">${product.price.toFixed(2)}</span>
          <button className="bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;