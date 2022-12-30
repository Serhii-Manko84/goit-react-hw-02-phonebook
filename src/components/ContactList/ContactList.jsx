function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        <li key={id}>
          <Contact name={name} number={number} />
        </li>;
      })}
    </ul>
  );
}
