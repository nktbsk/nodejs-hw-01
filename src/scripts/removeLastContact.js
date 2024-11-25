import { getAllContacts } from './getAllContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const getContacts = await getAllContacts();

    if (getContacts.length > 0) {
      return writeContacts(getContacts.slice(0, getContacts.length - 1));
    }
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

removeLastContact();
