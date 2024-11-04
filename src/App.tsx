import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import AdminDashboard from './components/admin/AdminDashboard';
import { products } from './data/products';

const App: React.FC = () => {
  const isAdmin = window.location.pathname === '/admin';

  const getProductsByCategory = (category: string) => {
    return products.filter(product => product.category === category);
  };

  if (isAdmin) {
    return <AdminDashboard />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CategorySection
          title="Custom Back Covers"
          description="Protect your phone with personalized style"
          products={getProductsByCategory('backCovers')}
        />
        
        <CategorySection
          title="Polaroid Prints"
          description="Capture memories in vintage style"
          products={getProductsByCategory('polaroidPrints')}
        />
        
        <CategorySection
          title="Silicon Covers with Polaroids"
          description="The perfect blend of protection and memories"
          products={getProductsByCategory('siliconCovers')}
        />
        
        <CategorySection
          title="Premium Frames"
          description="Display your moments in elegance"
          products={getProductsByCategory('frames')}
        />
        
        <CategorySection
          title="Mobile Accessories"
          description="Enhance your device experience"
          products={getProductsByCategory('accessories')}
        />
        
        <CategorySection
          title="Custom Apparel"
          description="Wear your memories in style"
          products={getProductsByCategory('apparel')}
        />
      </main>
    </div>
  );
};

export default App;