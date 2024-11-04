import { Product } from '../types/products';

export const products: Product[] = [
  {
    id: 1,
    title: "Custom Phone Back Cover",
    price: 19.99,
    description: "Personalized phone case with your favorite photo",
    category: "backCovers",
    image: "https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?auto=format&fit=crop&q=80",
    uploadLimits: {
      min: 1,
      max: 1
    }
  },
  {
    id: 2,
    title: "Mini Polaroid Set",
    price: 24.99,
    description: "Set of 16 cute mini polaroid prints",
    category: "polaroidPrints",
    image: "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?auto=format&fit=crop&q=80",
    uploadLimits: {
      min: 16,
      max: 48
    }
  },
  {
    id: 3,
    title: "Silicon Cover with Polaroid",
    price: 29.99,
    description: "Protective case with embedded polaroid print",
    category: "siliconCovers",
    image: "https://images.unsplash.com/photo-1592434134753-a70d6b58a82a?auto=format&fit=crop&q=80",
    uploadLimits: {
      min: 1,
      max: 1
    }
  }
];