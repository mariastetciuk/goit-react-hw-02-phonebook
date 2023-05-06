// import { Component } from 'react';
// import { nanoid } from 'nanoid';

// export class ContactForm extends Component {
//   state = {
//     contacts: [],
//     name: '',
//   };

//   handleInputChange = event => {
//     this.setState({ name: event.target.value });
//     // this.setState({ contacts: [...this.state.contacts, event.target.value] });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();

//     this.setState(prevState => {
//       return {
//         contacts: [
//           ...prevState.contacts,
//           { name: prevState.name, id: nanoid() },
//         ],
//       };
//     });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleFormSubmit}>
//         <label htmlFor="">
//           Name
//           <input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             onChange={this.handleInputChange}
//           />
//         </label>
//         <input type="submit" value="Add contact" />
//       </form>
//     );
//   }
// }

export function ContactForm({ handleFormSubmit, handleInputChange }) {
  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="">
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputChange}
        />
      </label>
      <br />
      <br />
      <br />
      <label htmlFor="">
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInputChange}
        />
      </label>
      <br />
      <br />
      <input type="submit" value="Add contact" />
    </form>
  );
}
