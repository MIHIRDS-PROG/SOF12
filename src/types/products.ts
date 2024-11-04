export type ProductCategory = 
  | 'backCovers'
  | 'polaroidPrints'
  | 'siliconCovers'
  | 'frames'
  | 'accessories'
  | 'apparel';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ProductCategory;
  image: string;
  uploadLimits?: {
    min: number;
    max: number;
  };
}