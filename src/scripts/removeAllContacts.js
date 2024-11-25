import { getAllContacts } from './getAllContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const getContacts = await getAllContacts();

    getContacts.splice(0, getContacts.length);

    return await writeContacts(getContacts);
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

removeAllContacts();
