import React, { useCallback, useState } from 'react';
import { Upload, X } from 'lucide-react';
import { UploadConfig } from '../types/products';

interface ImageUploaderProps {
  config: UploadConfig;
  onImagesSelected: (files: File[]) => void;
  selectedQuantity?: number;
}

export default function ImageUploader({ config, onImagesSelected, selectedQuantity }: ImageUploaderProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [error, setError] = useState<string>('');

  const validateFile = (file: File): boolean => {
    if (!config.allowedTypes.includes(file.type)) {
      setError('Invalid file type. Please upload only images.');
      return false;
    }

    if (file.size > config.maxFileSize * 1024 * 1024) {
      setError(`File size must be less than ${config.maxFileSize}MB`);
      return false;
    }

    return true;
  };

  const handleFileSelect = useCallback((files: FileList | null) => {
    if (!files) return;

    const newFiles = Array.from(files);
    const validFiles = newFiles.filter(validateFile);

    if (config.type === 'single') {
      setSelectedFiles(validFiles.slice(0, 1));
    } else if (selectedQuantity) {
      setSelectedFiles(validFiles.slice(0, selectedQuantity));
    }

    onImagesSelected(validFiles);
  }, [config, selectedQuantity, onImagesSelected]);

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
    setError('');
  };

  return (
    <div className="space-y-4">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <input
          type="file"
          multiple={config.type === 'multiple'}
          accept={config.allowedTypes.join(',')}
          onChange={(e) => handleFileSelect(e.target.files)}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="cursor-pointer inline-flex flex-col items-center"
        >
          <Upload className="h-12 w-12 text-gray-400 mb-3" />
          <span className="text-sm text-gray-600">
            {config.type === 'single' 
              ? 'Click to upload your image'
              : `Upload up to ${selectedQuantity} images`}
          </span>
          <span className="text-xs text-gray-500 mt-1">
            Max file size: {config.maxFileSize}MB
          </span>
        </label>
      </div>

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      {selectedFiles.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {selectedFiles.map((file, index) => (
            <div key={index} className="relative group">
              <img
                src={URL.createObjectURL(file)}
                alt={`Upload ${index + 1}`}
                className="w-full h-24 object-cover rounded-lg"
              />
              <button
                onClick={() => removeFile(index)}
                className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full 
                         opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}