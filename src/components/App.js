import React, { Component } from "react";
import { nanoid } from "nanoid";
import { GlobalStyle } from "./GlobalStyle";
// import styled from 'styled-components';
import "./App.styled.jsx";
import MyForm from "./MyForm/MyForm";
import ContactsList from "./ContatsList/ContatsList";
import Filter from "./Filter/Filter";
import { Container, TitleMain } from "./App.styled";
import Section from "./section/Section";
class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  addContact = (values) => {
    const { name, number } = values;
    const createId = () => nanoid();
    this.setState(({ contacts }) => ({
      contacts: [...contacts, { id: createId(), name, number }],
      name,
      number,
    }));
  };
  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <GlobalStyle />
        <TitleMain>Phonebook</TitleMain>
        {/* <TitleMainStyle title="Phonebook" /> */}
        <Section>
          <MyForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactsList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          ></ContactsList>
        </Section>
      </Container>
    );
  }
}
export default App;

// <div>
//   <GlobalStyle />
//   <h1>Phonebook</h1>
//   <MyForm onSubmit={this.addContact} />
//   <h2>Contacts</h2>
//   <Filter value={filter} onChange={this.changeFilter} />
//   <ContactsList
//     contacts={visibleContacts}
//     onDeleteContact={this.deleteContact}
//   ></ContactsList>
// </div>;
