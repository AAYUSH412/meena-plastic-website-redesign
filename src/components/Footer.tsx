import React from 'react';
import { Mail, Phone, MapPin,Factory } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <Factory className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-white">Meena Plastics</span>
            </div>
            <p className="mt-4 text-gray-400">
              We are Meena Plastics, a business with ISO 9001/2015 certification. We are well-known and reputable for providing the highest quality carry bags, roll garbage bags, bio-hazardous bags, and other products.
            </p>
            
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
            <li><Link to="/" className="text-gray-400 hover:text-green-500">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-green-500">About Us</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-green-500">Products</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-green-500">Contact</Link>
            </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <MapPin className="h-10 w-10 mr-2" />
                882/5 Makarpura GIDC Industrial Estate, Vadodara-390010
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                +91 94083 42280
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                meenaplastics882@gmail.com
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                yashkukreja1309@gmail.com
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest products and initiatives.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md w-full focus:outline-none"
              />
              <button className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            Copyright © {new Date().getFullYear()} Meena Plastics. All Rights Reserved. 
            <br />
            Site Developed by <a href="https://mamotechnolabs.com" className="text-green-500 hover:text-green-600">MaMo Technolabs LLP</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
