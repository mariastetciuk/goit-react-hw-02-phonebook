export function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: <span>{number}</span>
            <button type="button" onClick={() => deleteContact(name)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
