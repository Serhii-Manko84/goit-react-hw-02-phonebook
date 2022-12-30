import PropTypes from 'prop-types';

export function Contact({ contactID, name, number }) {
  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button type="bitton"></button>
    </div>
  );
}

Contact.prototype = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
