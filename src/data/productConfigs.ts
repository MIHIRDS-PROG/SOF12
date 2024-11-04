import { PhotoQuantityOption, UploadConfig } from '../types/products';

export const polaroidOptions: PhotoQuantityOption[] = [
  { id: 'cute-16', name: 'Cute Mini - 16 Photos', quantity: 16, size: '3x4', price: 19.99 },
  { id: 'cute-32', name: 'Cute Mini - 32 Photos', quantity: 32, size: '3x4', price: 34.99 },
  { id: 'cute-48', name: 'Cute Mini - 48 Photos', quantity: 48, size: '3x4', price: 49.99 },
  { id: 'premium-18', name: 'Premium Medium - 18 Photos', quantity: 18, size: '8x12', price: 29.99 },
  { id: 'premium-27', name: 'Premium Medium - 27 Photos', quantity: 27, size: '8x12', price: 39.99 },
  { id: 'premium-36', name: 'Premium Medium - 36 Photos', quantity: 36, size: '8x12', price: 49.99 },
  { id: 'a5-6', name: 'A5 Poster - 6 Photos', quantity: 6, size: 'A5', price: 14.99 },
  { id: 'a5-12', name: 'A5 Poster - 12 Photos', quantity: 12, size: 'A5', price: 24.99 },
  { id: 'calendar', name: 'Custom Calendar', quantity: 12, size: 'A4', price: 34.99 }
];

export const uploadConfigs: Record<string, UploadConfig> = {
  polaroidPrints: {
    type: 'multiple',
    options: polaroidOptions,
    allowedTypes: ['image/jpeg', 'image/png', 'image/heic'],
    maxFileSize: 10
  },
  backCovers: {
    type: 'single',
    maxUploads: 1,
    allowedTypes: ['image/jpeg', 'image/png', 'image/heic'],
    maxFileSize: 5
  },
  siliconCovers: {
    type: 'single',
    maxUploads: 1,
    allowedTypes: ['image/jpeg', 'image/png', 'image/heic'],
    maxFileSize: 5
  },
  apparel: {
    type: 'single',
    maxUploads: 1,
    allowedTypes: ['image/jpeg', 'image/png', 'image/heic'],
    maxFileSize: 5
  }
};