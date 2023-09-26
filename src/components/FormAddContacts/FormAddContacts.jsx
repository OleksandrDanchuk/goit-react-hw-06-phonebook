import { useState } from 'react';
import css from './FormAddContacts.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'components/redux/contactSlice';

export const FormAddContacts = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: '',
    number: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const submitAddContact = evt => {
    evt.preventDefault();
    if (!state.name.trim() || !state.number.trim()) {
      alert('Please enter the correct values');
      return;
    }
    dispatch(addContact(state.name, state.number));
    setState({ name: '', number: '' });
  };

  return (
    <>
      <form className={css.form} onSubmit={submitAddContact}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Z\s]+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            value={state.name}
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="^[0-9]+$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            value={state.number}
          />
        </label>
        <button className={css.form_button}>Add contact</button>
      </form>
    </>
  );
};
