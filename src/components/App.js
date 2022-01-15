import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage, connect, getIn } from "formik";
import * as yup from "yup";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import "./App.css";

const validate = (props) => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Too Short!")
      .max(5, "Too Long!")
      .required("Required"),
    number: yup.number().required().positive().integer(),
    createdOn: yup.date().default(function () {
      return new Date();
    }),
  });
  const errors = {};
  if (!schema.name) {
    errors.name = "Required";
  } else if (
    !/^[a-zA-Zа-яА-Я]+((`[' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$`/i.test(
      schema.name
    )
  ) {
    errors.name = `Name may contain only letters, apostrophe, dash and
                      spaces. For example Adrian, Jacob Mercer, Charles de Batz
                      de Castelmore d'Artagnan`;
  }
  return errors;
};
// ErrorMessage = (props) => {
//   // All FormikProps available on props.formik!
// const error = getIn(props.formik.errors, props.name);
// const touch = getIn(props.formik.touched, props.name);
// return touch && error ? error : null;
// };

//  export default connect(ErrorMessage);
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
  message = `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz
 de Castelmore d'Artagnan`;
  render() {
    return (
      <div>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <div>ContactForm</div>
        <Formik
          initialValues={{ contacts: [], name: "", number: "" }}
          validationSchema={validate}
          onSubmit={this.handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form autoComplete="off">
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" placeholder="Input name" />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
              <ErrorMessage
                name="name"
                component="div"
                render={(message) => <div>{message}</div>}
              />
              <div>
                <label htmlFor="number">Number</label>
                <Field type="text" name="number" placeholder="358-00" />
                <ErrorMessage
                  name="number"
                  render={(message) => <p>{message}</p>}
                />
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
