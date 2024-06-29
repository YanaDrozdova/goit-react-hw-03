import { useState } from 'react';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import initialContacts from './contacts.json';

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  const contactFound = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = newContact => {
    console.log('New contact was added', newContact);
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      {contactFound.length > 0 ? (
        <ContactList contacts={contactFound} />
      ) : (
        <p>No contact was found</p>
      )}
    </div>
  );
}
