import css from './App.module.css';
import { FormAddContacts } from './FormAddContacts/FormAddContacts';
import { Filter } from './Filter/Filter';
import { ListContacts } from './ListContacts/ListContacts';

export const App = () => {
  return (
    <div className={css.container}>
      <h2>Phonebook</h2>
      <FormAddContacts />
      <h2>Contacts</h2>
      <Filter />
      <ListContacts />
    </div>
  );
};
