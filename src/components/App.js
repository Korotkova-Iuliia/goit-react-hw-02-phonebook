import React, { Component } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  useField,
  useFormikContext,
} from "formik";
import * as yup from "yup";
import { nanoid } from "nanoid";
// import MyForm from './MyForm/MyForm';
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import "./App.css";
import ContactsList from "./ContatsList/ContatsList";
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
class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: "",
  };
  // this.setState({ id: values.name });
  // model.id = nanoid();

  handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    // const createId = () => nanoid();
    console.log("submit", values);
    const contact = {
      name,
      number,
    };
    this.setState({ name, number });

    let contacts = [...values.contacts];
    // contacts.push({
    //   contacts: contact,
    // });

    this.setState(({ contacts }) => ({
      contacts: [...contacts, { contact }],
    }));
    console.log(this.state);
    console.log(values);
    console.log(contacts);
    console.log(name);
    console.log(number);
    // console.log(createId);
    // console.log(id);
    console.log(contact);
    resetForm();
  };

  render() {
    const CustomInputComponent = (props) => (
      <input className="my-custom-input" type="text" {...props} />
    );

    return (
      <div>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <div>ContactForm</div>

        <Formik
          initialValues={{ name: "", number: "" }}
          validationSchema={schema}
          onSubmit={this.handleSubmit}
          // onSubmit={(values) => {
          //   console.log(values);
          //   this.handleSubmit();
          //   // onSubmit(values);
          // }}
        >
          {({ isSubmitting, push, name, props, values }) => (
            <Form autoComplete="off">
              <label htmlFor="name">Name</label>
              <Field
                id="name"
                type="text"
                name="name"
                placeholder="Input name"
                value={values.name}
                as={CustomInputComponent}
                // onChange={(e) => {
                //   console.log(e);
                // }}
              />

              <FormError name="name" />
              <div>
                <label htmlFor="number">Number</label>
                <Field
                  id="number"
                  type="tel"
                  name="number"
                  placeholder="+380503589900"
                />
                <FormError name="number" />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Add
              </button>
              {/* <button type="submit">Add</button> */}
            </Form>
          )}
        </Formik>
        <h2>Contacts</h2>
        <div>Filter</div>
        <div></div>
        <div></div>
      </div>
    );
  }
}
//  {
//    /* <ContactsList id={this.id} name={this.name} number={this.number} /> */
//  }
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
