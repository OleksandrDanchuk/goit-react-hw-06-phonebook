import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './FormAddContacts.module.css';
import { nanoid } from 'nanoid';

export const FormAddContacts = ({ addContact }) => {
  const [state, setState] = useState({
    name: '',
    number: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const submitAddContact = evt => {
    evt.preventDefault();
    addContact({ ...state, id: nanoid() });
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
            pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
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
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
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

FormAddContacts.propTypes = {
  addContact: PropTypes.func.isRequired,
};
