import css from './ListContacts.module.css';
import { ElemListContacts } from 'components/ElemListContacts/ElemListContacts';
import { useSelector } from 'react-redux';

export const ListContacts = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const contactsRender = filter.trim()
    ? contacts.filter(({ name }) => {
        return name.toLowerCase().includes(filter.toLowerCase().trim());
      })
    : contacts;

  return (
    <ul className={css.lists}>
      {contactsRender.map(el => {
        return (
          <ElemListContacts
            key={el.id}
            id={el.id}
            name={el.name}
            number={el.number}
          />
        );
      })}
    </ul>
  );
};
