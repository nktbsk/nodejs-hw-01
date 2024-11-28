import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();

    if (Array.isArray(contacts)) {
      return contacts;
    }
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

console.log(await getAllContacts());
