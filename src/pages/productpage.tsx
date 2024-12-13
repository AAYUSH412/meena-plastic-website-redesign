import React from 'react';
import { motion } from 'framer-motion';
import ProductsSection from '../components/products/ProductsSection';
import Footer from '../components/Footer';

export default function ProductsPage() {
  return (
    <div className='pt-14'>
      <ProductsSection />
      <Footer />
    </div>
  );
}