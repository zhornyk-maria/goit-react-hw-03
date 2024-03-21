import { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import ContactForm from '../ContactForm/ContactForm.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import contactsData from '../../Contacts.json';


function App() {

  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : contactsData;
  });

  const onAddContact = (formData) => {
    const newContact = {
      ...formData,
      id: nanoid()
    };

    // setContacts([...contacts, newContact]);
    setContacts((prevState) => [...prevState, newContact]);
    localStorage.setItem('contacts', JSON.stringify([...contacts, newContact]));
  };

  const handleSubmit = (values, actions) => {
    const formData = {
      name: values.name,
      number: values.number
    };

    onAddContact(formData);
    actions.resetForm();
  };

  // const deleteContact = (contactId) => {
  //   const updatedContacts = contacts.filter(contact => contact.id !== contactId);
  //   setContacts(updatedContacts);
  //   localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  // };

  

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  )
}

export default App;
