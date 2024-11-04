import React from 'react';
import { Product } from '../types/products';
import ProductCard from './ProductCard';

interface CategorySectionProps {
  title: string;
  description: string;
  products: Product[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, description, products }) => {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;