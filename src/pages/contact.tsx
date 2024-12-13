import React from 'react';
import { motion } from 'framer-motion';
import ContactSection from '../components/contact/ContactSection';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div className='pt-14'>
      <ContactSection />
      <Footer />
    </div>
  );
}