import React, { Component } from "react";
import { nanoid } from "nanoid";
import { GlobalStyle } from "./GlobalStyle";
// import styled from 'styled-components';
import "./App.css";
import MyForm from "./MyForm/MyForm";
import ContactsList from "./ContatsList/ContatsList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: "",
    number: "",
    filter: "",
  };
  addContact = (values) => {
    // const createId = () => nanoid();
    // const { name, number } = values;
    // this.setState(({ contacts }) => ({
    //   contacts: [...contacts, { id: createId(), name, number }],
    //   name,
    //   number,
    // }));
  };

  handleSubmit = (values) => {
    const { name, number } = values;
    console.log(this.state);
    console.log("submit", values);
    // // console.log(contacts);
    // // console.log(createId());
    // console.log(this.state.contacts);
    // console.log(this.state.contacts[0]);
    console.log(name);
    console.log(number);
    const createId = () => nanoid();
    this.setState(({ contacts }) => ({
      contacts: [...contacts, { id: createId(), name, number }],
      name,
      number,
    }));
  };
  render() {
    const { contacts } = this.state;
    console.log(this.state.contacts);
    console.log(contacts);
    console.log(this.state);
    console.log(contacts.length);
    return (
      <div>
        <GlobalStyle />
        <div>ContactForm</div>
        <h1>Phonebook</h1>
        {/* <MyForm onSubmit={() => this.handleSubmit(values)} /> */}
        <MyForm onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <ContactsList contacts={contacts}></ContactsList>
      </div>
    );
  }
}

export default App;
// createContact = (values) => {
//   const { name, number } = values;
//   const contact = {
//     name,
//     number,
//   };
// };
// console.log(this.state);
// console.log('submit', values);
// console.log(contacts);
// console.log(createId());
// console.log(this.state.contacts);
// console.log(this.state.contacts[0]);
// console.log(name);
// console.log(number);
// // resetForm();
