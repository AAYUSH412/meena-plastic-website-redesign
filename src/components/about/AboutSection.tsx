import React from 'react';
import { Award, Users, Factory, Globe, CheckCircle, Recycle } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '../animations/FadeIn';

const highlights = [
  {
    icon: Award,
    title: 'ISO 9001/2015',
    description: 'Certified quality management system'
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'State-of-the-art production facility'
  },
  {
    icon: CheckCircle,
    title: 'Quality',
    description: 'Highest quality products and materials'
  },
  {
    icon: Globe,
    title: 'Location',
    description: 'Based in Vadodara, serving nationwide'
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">About Meena Plastics</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              We are Meena Plastics, a business with ISO 9001/2015 certification. We are well-known and reputable for providing the highest quality carry bags, roll garbage bags, bio-hazardous bags, and other products. Our ability to consistently outperform the competition in satisfying customer needs in a way that benefits both parties has earned us respect and trust in this business.
            </p>
          </div>
        </FadeIn>
        
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100"
                >
                  <item.icon className="h-8 w-8 text-blue-600" />
                </motion.div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">{item.title}</h3>
                <p className="mt-2 text-base text-gray-500">{item.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16">
          <FadeIn>
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Reasonable and Affordable Rates',
                  'Prompt Order Delivery',
                  'Client Satisfaction',
                  'Ethical Business',
                  'Versatile Payment Methods',
                  'Enormous Distribution Network'
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}