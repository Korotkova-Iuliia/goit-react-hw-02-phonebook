import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { nanoid } from "nanoid";

import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import "./App.css";
// model.id = nanoid();
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
    .min(13, "Too Short!")
    .max(13, "Too Long!")
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
    contacts: [],
    filter: "",
    name: "",
    number: "",
  };

  handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
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
          onSubmit={this.handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form autoComplete="off">
              <label htmlFor="name">Name</label>
              <Field
                key={nanoid()}
                type="text"
                name="name"
                placeholder="Input name"
              />
              <FormError name="name" />
              <div>
                <label htmlFor="number">Number</label>
                <Field type="text" name="number" placeholder="+380503589900" />
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
//  validate={(values) => {
//             const errors = {};
//             if (!values.name) {
//               errors.name = 'Required';
//             } else if (
//               !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(
//                 values.name
//               )
//             ) {
//               errors.name = `Name may contain only letters, apostrophe, dash and
//                       spaces. For example Adrian, Jacob Mercer, Charles de Batz
//                       de Castelmore d'Artagnan`;
//             }
//             return errors;
//           }}
// <Formik>
//           <Form>
//             <div>
//               <label htmlFor="name">Name</label>
//               <Field type="text" name="name" placeholder="Input name" />
//               <ErrorMessage name="name" component="div" />
//             </div>
//             <div>
//               <label htmlFor="number">Number</label>
//               <Field type="text" name="number" placeholder="358-00" />
//               <ErrorMessage name="number" component="div" />
//             </div>
//             <button type="submit" disabled>
//               Submit
//             </button>
//           </Form>
//         </Formik>
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

//  {
//    /* <input
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         /> */
// }
//  ????
//  <Formik
//    initialValues={{ contacts: [], name: '' }}
//    validate={(values) => {
//      const errors = {};
//      if (!values.name) {
//        errors.name = 'Required';
//      } else if (
//        !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(
//          values.name
//        )
//      ) {
//        errors.name = `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`;
//      }
//      return errors;
//    }}
//    onSubmit={(values, { setSubmitting }) => {
//      setTimeout(() => {
//        alert(JSON.stringify(values, null, 2));
//        setSubmitting(false);
//      }, 400);
//    }}
//  >
//    {({ isSubmitting }) => (
//      <Form>
//        <Field type="text" name="name" />
//        <ErrorMessage name="name" component="div" />
//        <button type="submit" disabled={isSubmitting}>
//          Submit
//        </button>
//      </Form>
//    )}
//  </Formik>;
// {
//   /* <div>
//   <h1>Phonebook</h1>
//   <ContactForm ... />

//   <h2>Contacts</h2>
//   <Filter ... />
//   <ContactList ... />
// </div>; */
// }
