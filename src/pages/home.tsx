import React from 'react';
import Hero from '../components/home/Hero';
import ProductsSection from '../components/products/ProductsSection';
import AboutSection from '../components/about/AboutSection';
import InfrastructureSection from '../components/infrastructure/InfrastructureSection';
import ContactSection from '../components/contact/ContactSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <ProductsSection />
      <AboutSection />
      <InfrastructureSection />
      <ContactSection />
      <Footer />
    </div>
  );
}