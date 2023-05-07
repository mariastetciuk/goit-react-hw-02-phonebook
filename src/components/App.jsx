import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addContact = (name, number, id) => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { name, number, id }],
      };
    });
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm
          handleInputChange={this.handleInputChange}
          addContact={this.addContact}
        />
        <h2>Contacts</h2>
        <Filter hendleFilterChange={this.handleInputChange} />
        <ContactList contacts={this.filterContacts()} />
      </>
    );
  }
}
