import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const existingContacts = await readContacts();

    const newOneContact = createFakeContact();

    const updatedContacts = [...existingContacts, newOneContact];

    await writeContacts(updatedContacts);

    return newOneContact;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

addOneContact();
