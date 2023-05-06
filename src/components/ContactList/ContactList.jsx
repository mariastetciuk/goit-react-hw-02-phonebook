export function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: <span>{number}</span>
          </li>
        );
      })}
    </ul>
  );
}
