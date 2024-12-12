import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../../data/products';

export default function ProductsSection() {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Products</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover our range of high-quality plastic packaging solutions
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}