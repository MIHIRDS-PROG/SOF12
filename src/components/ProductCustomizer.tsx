import React, { useState } from 'react';
import { PhotoQuantityOption, UploadConfig } from '../types/products';
import ImageUploader from './ImageUploader';

interface ProductCustomizerProps {
  config: UploadConfig;
  onComplete: (files: File[], option?: PhotoQuantityOption) => void;
}

export default function ProductCustomizer({ config, onComplete }: ProductCustomizerProps) {
  const [selectedOption, setSelectedOption] = useState<PhotoQuantityOption | undefined>(
    config.options?.[0]
  );
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleOptionChange = (option: PhotoQuantityOption) => {
    setSelectedOption(option);
    setSelectedFiles([]);
  };

  const handleImagesSelected = (files: File[]) => {
    setSelectedFiles(files);
    onComplete(files, selectedOption);
  };

  return (
    <div className="space-y-6">
      {config.options && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Select Package</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {config.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionChange(option)}
                className={`p-4 rounded-lg border-2 text-left transition-all
                  ${selectedOption?.id === option.id
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-200'
                  }`}
              >
                <div className="font-medium text-gray-900">{option.name}</div>
                {option.size && (
                  <div className="text-sm text-gray-500">Size: {option.size}</div>
                )}
                <div className="text-purple-600 font-medium mt-1">
                  ${option.price.toFixed(2)}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Upload Images</h3>
        <ImageUploader
          config={config}
          onImagesSelected={handleImagesSelected}
          selectedQuantity={selectedOption?.quantity || config.maxUploads}
        />
      </div>

      <button
        onClick={() => onComplete(selectedFiles, selectedOption)}
        disabled={selectedFiles.length === 0}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Continue to Checkout
      </button>
    </div>
  );
}