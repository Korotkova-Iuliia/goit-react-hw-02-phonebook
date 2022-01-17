import React, { Component } from "react";
import { nanoid } from "nanoid";
import MyForm from "./MyForm/MyForm";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import "./App.css";
// import ContactsList from './ContatsList/ContatsList';

class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: "",
    number: "",
    filter: "",
  };

  createContact = (values) => {
    const { name, number } = values;
    const contact = {
      name,
      number,
    };
    console.log(contact);
  };
  handleSubmit = (values) => {
    const { name, number } = values;
    const { contacts } = this.state;
    const createId = () => nanoid();
    this.setState(({ contacts }) => ({
      contacts: [...contacts, { id: createId(), name, number }],
      name,
      number,
    }));
    console.log(this.state);
    console.log("submit", values);
    console.log(contacts);
    console.log(createId());
    console.log(this.state.contacts);
    console.log(this.state.contacts[0]);
    console.log(name);
    console.log(number);
    // resetForm();
  };
  render() {
    // const { name } = this.State;
    // console.log(name);
    // // const valuesdf = this.handleSubmit();
    // console.log(name);
    return (
      <div>
        <GlobalStyle />
        <div>ContactForm</div>
        <h1>Phonebook</h1>
        <MyForm onSubmit={this.handleSubmit} />
        {/* <MyForm onSubmit={this.handleSubmit} /> */}
        <h2>Contacts</h2>
      </div>
    );
  }
}

export default App;

//  <div>
//    <GlobalStyle />
//    <h1>Phonebook</h1>
//    <div>ContactForm</div>
//    <MyForm onSubmit={this.handleSubmit} />
//    <h2>Contacts</h2>
//    <div>{}</div>

//    <div id={this.id}>Filter</div>
//  </div>;
//  {
//    /* <ContactsList id={this.id} name={this.name} number={this.number} /> */
//  }
// ВАЛИДАЦИЯ.......................................
// const schema = yup.object().shape({
//   name: yup
//     .string()
//     .matches(
//       /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
//       `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz
//  de Castelmore d'Artagnan`
//     )
//     .min(2, 'Too Short!')
//     .max(30, 'Too Long!')
//     .required('Required'),
//   number: yup
//     .string()
//     .matches(
//       /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/,
//       `input phone number in format +380000000000`
//     )
//     // .min(13, 'Too Short!')
//     // .max(13, 'Too Long!')
//     .required(),
// });
// const ErrorText = styled.p`
//   color: red;
// `;
// const FormError = ({ name }) => {
//   return (
//     <ErrorMessage
//       name={name}
//       render={(message) => <ErrorText>{message}</ErrorText>}
//     />
//   );
// };
