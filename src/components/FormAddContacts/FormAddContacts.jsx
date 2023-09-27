import css from './FormAddContacts.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'components/redux/contactSlice';

export const FormAddContacts = () => {
  const dispatch = useDispatch();

  const submitAddContact = evt => {
    evt.preventDefault();
    const form = evt.currentTarget.elements;

    const name = form.name.value;
    const number = form.number.value;

    dispatch(addContact(name, number));

    evt.currentTarget.reset();
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
          />
        </label>
        <button className={css.form_button}>Add contact</button>
      </form>
    </>
  );
};
