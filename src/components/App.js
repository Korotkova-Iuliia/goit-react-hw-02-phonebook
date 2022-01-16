import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { nanoid } from "nanoid";

import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import "./App.css";

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz
 de Castelmore d'Artagnan`
    )
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  number: yup
    .string()
    .matches(
      /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/,
      `input phone number in format +380000000000`
    )
    // .min(13, 'Too Short!')
    // .max(13, 'Too Long!')
    .required(),
});
const ErrorText = styled.p`
  color: red;
`;
const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={(message) => <ErrorText>{message}</ErrorText>}
    />
  );
};

// this.setState({ id: values.name });
class App extends Component {
  // model.id = nanoid();
  handleSubmit = (values, { resetForm }) => {
    // e.preventDefault();
    const nameId = () => nanoid();
    const { name, number, contacts } = values;
    this.setState({
      contacts,
      id: nameId(),
      name,
      number,
    });
    console.log(values);
    console.log(contacts);
    console.log(name);
    console.log(number);
    console.log(nameId());
    console.log(name);

    // this.setState({ [name]: values.name });

    resetForm();
  };
  handleChange = (e) => {
    console.log(e);
    console.log(this.initialValues);
    console.log(this.values.name);
    console.log(e.currentTarget);
    console.log(e.currentTarget.name);
    console.log(e.currentTarget.value);
    console.log(e.currentTarget.initialValues);

    // this.setState({ contacts: values.name });
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <div>ContactForm</div>
        <Formik
          initialValues={{ contacts: [], name: "", number: "" }}
          validationSchema={schema}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form autoComplete="off">
              <label htmlFor="nameId">Name</label>
              <Field
                id="nameId"
                type="text"
                name="name"
                placeholder="Input name"
              />
              <FormError name="name" />
              <div>
                <label htmlFor="nameId">Number</label>
                <Field
                  id="nameId"
                  type="text"
                  name="number"
                  placeholder="+380503589900"
                />
                <FormError name="number" />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
        ;<h2>Contacts</h2>
        <div>Filter</div>
        <div>ContactList</div>
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
