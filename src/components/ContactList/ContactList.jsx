import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';
import { Contact } from 'components/Contact/Contact';

export function ContactList({ contacts }) {
  console.log(contacts);
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        <li className={css.item} key={id}>
          <Contact name={name} number={number} contactID={id} />
        </li>;
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      contactID: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
