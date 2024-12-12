import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
      
      <div className="space-y-4">
        <div className="flex items-start">
          <MapPin className="h-6 w-6 text-blue-600 mt-1" />
          <div className="ml-3">
            <p className="text-gray-600">
              Meena plastics<br />
              882/5 Makarpura GIDC Industrial estate<br />
              Vadodara-390010
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <Phone className="h-6 w-6 text-blue-600" />
          <p className="ml-3 text-gray-600">+91 94083 42280</p>
        </div>

        <div className="flex items-center">
          <Mail className="h-6 w-6 text-blue-600" />
          <div className="ml-3">
            <p className="text-gray-600">
              meenaplastics882@gmail.com<br />
              yashkukreja1309@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-gray-200">
        <h4 className="text-lg font-medium text-gray-900 mb-4">Follow Us</h4>
        <div className="flex space-x-4">
          <SocialLink href="#" label="Facebook" />
          <SocialLink href="#" label="Youtube" />
          <SocialLink href="#" label="WhatsApp" />
          <SocialLink href="#" label="Instagram" />
        </div>
      </div>
    </div>
  );
};

const SocialLink = ({ href, label }) => (
  <a
    href={href}
    className="text-gray-600 hover:text-blue-600 transition-colors"
  >
    {label}
  </a>
);

export default ContactInfo;