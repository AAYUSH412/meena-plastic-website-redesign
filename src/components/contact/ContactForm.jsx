import React, { useState } from 'react';
import ContactInput from './ContactInput';
import { submitContactForm } from '../../utils/contactService';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      await submitContactForm(formData);
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });
      
      // Show success message
      alert('Message sent successfully!');
    } catch (error) {
      setStatus({ submitting: false, submitted: false, error: error.message });
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <ContactInput
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      
      <ContactInput
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      
      <ContactInput
        label="Message"
        type="textarea"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />

      <button
        type="submit"
        disabled={status.submitting}
        className={`w-full py-2 px-4 rounded-md text-white font-medium 
          ${status.submitting 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-blue-600 hover:bg-blue-700'}`}
      >
        {status.submitting ? 'Sending...' : 'Send Message'}
      </button>

      {status.error && (
        <p className="mt-4 text-red-600 text-sm">
          Error: {status.error}
        </p>
      )}
    </form>
  );
};

export default ContactForm;