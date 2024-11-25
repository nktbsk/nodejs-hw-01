import { getAllContacts } from './getAllContacts.js';

export const countContacts = async () => {
  try {
    const count = await getAllContacts();

    return count.length;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

console.log(await countContacts());
