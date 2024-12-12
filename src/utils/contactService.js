import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';

export const submitContactForm = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, 'contacts'), {
      ...formData,
      createdAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
};