import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import ContactForm from '../ContactForm/ContactForm.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import contactsData from '../../Contacts.json';


function App() {

  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem('contacts');
    
    if (!stringifiedContacts) return contactsData;

    const parsedContacts = JSON.parse(stringifiedContacts);
    return parsedContacts;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = (formData) => {
    const newContact = {
      ...formData,
      id: nanoid()
    };

    // setContacts([...contacts, newContact]);
    setContacts((prevState) => [...prevState, newContact]);
  };

  const onChangeFilter = (event) => {
    setFilter(event.target.value);
  }

  const handleSubmit = (values, actions) => {
    const formData = {
      name: values.name,
      number: values.number
    };

    onAddContact(formData);
    actions.resetForm();
  };

  const onDeleteContact = (contactId) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  }

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1 className='title'>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <SearchBox filter={filter} onChangeFilter={onChangeFilter} />
      <ContactList contacts={filteredContacts} onDeleteContact={onDeleteContact} />
    </div>
  )
}

export default App;
