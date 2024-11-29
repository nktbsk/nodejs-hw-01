import { readContacts } from '../utils/readContacts.js';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const data = await readContacts(PATH_DB);
    return data.length;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

console.log(await countContacts());
