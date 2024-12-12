import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import ContactForm from './ContactForm';
import { submitContactForm } from '../../services/contact';
import { ContactFormData } from '../../types/contact';

export default function ContactSection() {
  const handleSubmit = async (formData: ContactFormData) => {
    await submitContactForm(formData);
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Get in touch with us for any inquiries
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ContactForm onSubmit={handleSubmit} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 p-8 rounded-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                <p className="ml-3 text-gray-600">
                  Meena plastics<br />
                  882/5 Makarpura GIDC Industrial estate<br />
                  Vadodara-390010
                </p>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-600" />
                <p className="ml-3 text-gray-600">+91 94083 42280</p>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-blue-600" />
                <p className="ml-3 text-gray-600">
                  meenaplastics882@gmail.com<br />
                  yashkukreja1309@gmail.com
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-600">Facebook</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Youtube</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">WhatsApp</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Instagram</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}