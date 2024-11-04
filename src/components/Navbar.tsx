import React, { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-purple-600">Shades of Frame</span>
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <a href="#" className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#products" className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Products</a>
            <a href="#about" className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="#contact" className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            <button className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-purple-50">Home</a>
            <a href="#products" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-purple-50">Products</a>
            <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-purple-50">About</a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-purple-50">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;