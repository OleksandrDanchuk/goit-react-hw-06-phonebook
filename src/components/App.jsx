import { useEffect, useState } from 'react';
import css from './App.module.css';
import { FormAddContacts } from './FormAddContacts/FormAddContacts';
import { Filter } from './Filter/Filter';
import { ListContacts } from './ListContacts/ListContacts';
import { getLocalStorage, saveLocalStorage } from 'checkLocalStorage';
const KEY_LOCAL_CONTACTS = 'cotacts';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setfilter] = useState('');

  useEffect(() => {
    const stateLocalStorage = getLocalStorage(KEY_LOCAL_CONTACTS);
    if (stateLocalStorage) {
      setContacts(stateLocalStorage);
    }
  }, []);

  useEffect(() => {
    if (contacts.length === 0) {
      localStorage.removeItem(KEY_LOCAL_CONTACTS);
      return;
    } else {
      saveLocalStorage(KEY_LOCAL_CONTACTS, contacts);
    }
  }, [contacts]);

  const handleChange = ({ target: { value } }) => {
    setfilter(value.trimLeft());
  };

  const deleteContact = ({ target: { id } }) => {
    setContacts(prevState => prevState.filter(obj => obj.id !== id));
  };

  const addContact = objContact => {
    if (checkName(objContact)) {
      setContacts(prevState => [...prevState, objContact]);
    }
  };

  const checkName = ({ name, number }) => {
    const resultCheck = contacts.find(
      obj =>
        obj.name.toLowerCase() === name.toLowerCase() || obj.number === number
    );
    if (resultCheck) {
      alert(`${name} or  number: ${number} is already in contacts.`);
    }
    return !resultCheck;
  };

  const filterContacts = () => {
    if (!filter) return contacts;
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  return (
    <div className={css.container}>
      <h2>Phonebook</h2>
      <FormAddContacts addContact={addContact} />
      <h2>Contacts</h2>
      <Filter handleChange={handleChange} value={filter} />
      <ListContacts
        filterRender={filterContacts()}
        deleteContact={deleteContact}
      />
    </div>
  );
};
