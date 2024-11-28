import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(data).length;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

console.log(await countContacts());
