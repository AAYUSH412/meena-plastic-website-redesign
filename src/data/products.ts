import { Product } from '../types';
import ecoStrongKitchenBagsImage from '../assets/download.png';

export const products: Product[] = [
  {
    id: 1,
    name: 'Garbage Bag (Disposable)',
    category: 'Industrial',
    description: 'Superior quality Garbage Bag with high strength, durability & smooth finish. Widely use for kitchen dry waste and wet waste.',
    features: [
      'Available in all microns and material',
      'Box pkg & Piece pkg options',
      'Eco-friendly and tear-resistant',
      'Customizable dimensions',
      'Minimum order: 50 kg'
    ],
    image: ecoStrongKitchenBagsImage
  },
  {
    id: 2,
    name: 'Hotel & Healthcare Bags',
    category: 'Specialized',
    description: 'Specialized bags designed for hotel and healthcare industry needs with superior quality and safety standards.',
    features: [
      'Industry-specific designs',
      'High durability',
      'Leak-proof construction',
      'Multiple size options',
      'Bio-hazard compatible'
    ],
    image: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    name: 'Compostable Products',
    category: 'Eco-Friendly',
    description: 'Best alternative for plastics, ECO-NATURE-COST friendly products that provide financial benefits to society.',
    features: [
      'Non Toxic',
      '100% Natural',
      'Recyclable',
      'Bio Based',
      'Climate change friendly'
    ],
    image: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&q=80&w=800'
  }
];