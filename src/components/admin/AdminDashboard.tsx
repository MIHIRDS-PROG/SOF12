import React, { useState } from 'react';
import ProductManager from './ProductManager';
import UploadMonitor from './UploadMonitor';
import { Layout, Grid, Image } from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'products' | 'uploads'>('products');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab('products')}
                className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                  activeTab === 'products'
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Grid className="w-4 h-4" />
                <span>Products</span>
              </button>
              <button
                onClick={() => setActiveTab('uploads')}
                className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                  activeTab === 'uploads'
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Image className="w-4 h-4" />
                <span>User Uploads</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'products' ? <ProductManager /> : <UploadMonitor />}
      </main>
    </div>
  );
}