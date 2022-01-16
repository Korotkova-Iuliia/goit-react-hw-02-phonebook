import React, { Component } from "react";
import MyForm from "./MyForm/MyForm";
// import { nanoid } from 'nanoid';
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import "./App.css";
// import ContactsList from './ContatsList/ContatsList';

class App extends Component {
  state = { contacts: [] };
  // this.setState({ id: values.name });
  // model.id = nanoid();

  handleSubmit = (values, { resetForm }) => {
    const { name, number, contacts } = values;

    // const createId = () => nanoid();
    // const id = createId;
    console.log("submit", values);
    const contact = {
      name,
      number,
    };
    this.setState({ name, number });

    // let contacts = [...values.contacts];
    // contacts.push({
    //   contacts: contact,
    // });

    // this.setState(({ contacts }) => ({
    //   contacts: [...contacts, { contact }],
    // }));

    console.log(this.state);
    //   [...contacts, contact];
    // });
    // this.setState((contacts) => {
    //   [...contacts, contact];
    // });
    // /   (prevState) => ({
    //     contacts: [...prevState, name],
    //   }),
    // const nameId = () => nanoid();
    // const numberId = () => nanoid();

    // this.setState((contacts) => ({
    //   contacts: [...contacts, contacts],
    // }));

    // this.setState((prevState) => ({
    //   contacts: prevState.contacts.map((contact) => {
    //     if (contact.id === id) {
    //       return { ...contact };
    //     }
    //   }),
    //   id: createId(),
    //   name,
    //   number,
    // }));

    const nameState = values["name"];
    console.log(nameState);
    console.log(values);
    console.log(contacts);
    console.log(name);
    console.log(number);
    // console.log(createId);
    // console.log(id);
    console.log(contact);
    // this.setState({ [name]: values.name });

    resetForm();
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <div>ContactForm</div>
        <div>
          <MyForm
            onSubmit={(values) => this.handleSubmit(values)}
            onSubmit={this.handleSubmit}
          />
        </div>

        <h2>Contacts</h2>
        <div>Filter</div>
        <div></div>
        <div></div>

        {/* <ContactsList id={this.id} name={this.name} number={this.number} /> */}
      </div>
    );
  }
}

export default App;

//   <h2>Contacts</h2>
//   <Filter ... />
//   <ContactList ... />
// </div>; */
// }
// handleChange = (e) => {
//   // const { name, value } = e.currentTarget;

//   // console.log(e.props);
//   console.log(this.initialValues);
//   console.log(this.values.name);
//   console.log(e.currentTarget);
//   console.log(e.target.name);
//   console.log(e.currentTarget.value);
//   console.log(e.currentTarget.initialValues);

//   // this.setState({ contacts: values.name });
// };
