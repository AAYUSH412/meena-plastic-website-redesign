import React from 'react';
import { motion } from 'framer-motion';
import AboutSection from '../components/about/AboutSection';
import InfrastructureSection from '../components/infrastructure/InfrastructureSection';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className='pt-14'>
      <AboutSection />
      <InfrastructureSection />
      <Footer />
    </div>
  );
}