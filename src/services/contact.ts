import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { ContactFormData } from '../types/contact';

export const submitContactForm = async (formData: ContactFormData): Promise<void> => {
  try {
    await addDoc(collection(db, 'contacts'), {
      ...formData,
      createdAt: new Date()
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};