import { collection, addDoc} from 'firebase/firestore';
import { db } from '../utils/firebase';
import { QuoteRequest } from '../../types';

export const submitQuoteRequest = async (quoteData: QuoteRequest): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, 'quotes'), quoteData);
    return docRef.id;
  } catch (error) {
    console.error('Error submitting quote request:', error);
    throw error;
  }
};