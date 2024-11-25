import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const writeContacts = async (updatedContacts) => {
  try {
    const stringifiedContacts = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, stringifiedContacts);
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
