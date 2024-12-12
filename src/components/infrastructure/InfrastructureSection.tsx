import React from 'react';
import qualityControlImage from '../../assets/steptodown.com710098.jpg';


export default function InfrastructureSection() {
  return (
    <section id="infrastructure" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Infrastructure</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            State-of-the-art facilities equipped with modern machinery
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
              alt="Manufacturing Unit"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Manufacturing Unit</h3>
              <p className="mt-2 text-gray-600">
                Our manufacturing unit is equipped with advanced machinery and follows strict quality control measures.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={qualityControlImage}
              alt="Quality Control"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Quality Control</h3>
              <p className="mt-2 text-gray-600">
                Dedicated quality control lab ensures our products meet international standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}