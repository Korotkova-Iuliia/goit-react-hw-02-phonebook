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
// import ContactsList from './ContatsList/ContatsList';
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
    name: "",
    number: "",
    filter: "",
  };
  // this.setState({ id: values.name });
  // model.id = nanoid();
  // handleInputChange = ({ name, number }) => {};
  handleChange = (e) => {
    console.log(e);
  };
  handleSubmit = (values) => {
    const { name, number } = values;
    // const { resetForm } = values;

    const { contacts } = this.state;
    const createId = () => nanoid();

    // const contact = {
    //   name,
    //   number,
    // };
    // this.setState({ id: createId(), name, number });
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
    console.log(name);
    console.log(number);

    // resetForm();
  };

  render() {
    // const { name } = this.State;
    // // console.log(contacts);
    // // const valuesdf = this.handleSubmit();
    // console.log(name);

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
          // onSubmit={this.handleSubmit}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values);
            this.handleSubmit(values);
            // this.props.onSubmit(values);
            setSubmitting(false);
            resetForm({ name: "", number: "" });
          }}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit} autoComplete="off">
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                name="name"
                placeholder="Input name"
                onChange={props.handleChange}
                as={CustomInputComponent}
              />

              <FormError name="name" />
              <div>
                <label htmlFor="number">Number</label>
                <Field type="tel" name="number" placeholder="+380503589900" />
                <FormError name="number" />
              </div>
              <button type="submit">
                {/* <button type="submit" disabled={isSubmitting}> */}
                Add
              </button>
            </Form>
          )}
        </Formik>
        <h2>Contacts</h2>
        <div>{}</div>

        <div id={this.id}>Filter</div>
      </div>
    );
  }
}
//  {
//    /* <ContactsList id={this.id} name={this.name} number={this.number} /> */
//  }
export default App;
// import React, { Component } from 'react';
// import {
//   Formik,
//   Form,
//   Field,
//   ErrorMessage,
//   useField,
//   useFormikContext,
// } from 'formik';
// import * as yup from 'yup';
// import { nanoid } from 'nanoid';
// // import MyForm from './MyForm/MyForm';
// import styled from 'styled-components';
// import { GlobalStyle } from './GlobalStyle';
// import './App.css';
// // import ContactsList from './ContatsList/ContatsList';
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
// class App extends Component {
//   state = {
//     contacts: [
//       // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     name: '',
//     number: '',
//     filter: '',
//   };
//   // this.setState({ id: values.name });
//   // model.id = nanoid();
//   // handleInputChange = ({ name, number }) => {};
//   handleSubmit = (values, { resetForm }) => {
//     const { name, number } = values;
//     const { contacts } = this.state;
//     const createId = () => nanoid();
//     console.log('submit', values);
//     // const contact = {
//     //   name,
//     //   number,
//     // };
//     // this.setState({ id: createId(), name, number });
//     this.setState(({ contacts }) => ({
//       contacts: [...contacts, { id: createId(), name, number }],
//       name,
//       number,
//     }));
//     console.log(this.state);
//     console.log(values);
//     console.log(contacts);
//     console.log(createId());
//     console.log(this.state.contacts);
//     console.log(name);
//     console.log(number);

//     resetForm();
//   };

//   render() {
//     // const { name } = this.State;
//     // // console.log(contacts);
//     // // const valuesdf = this.handleSubmit();
//     // console.log(name);

//     const CustomInputComponent = (props) => (
//       <input className="my-custom-input" type="text" {...props} />
//     );

//     return (
//       <div>
//         <GlobalStyle />
//         <h1>Phonebook</h1>
//         <div>ContactForm</div>
//         <Formik
//           initialValues={{ name: '', number: '' }}
//           validationSchema={schema}
//           onSubmit={this.handleSubmit}
//           // onSubmit={(values, { setSubmitting }) => {
//           //   console.log(values);
//           //   this.handleSubmit(values);
//           //   setSubmitting(false);
//           // }}
//         >
//           {({ isSubmitting, push, name, props, values }) => (
//             <Form autoComplete="off">
//               <label htmlFor="name">Name</label>
//               <Field
//                 id="name"
//                 type="text"
//                 name="name"
//                 placeholder="Input name"
//                 value={values.name}
//                 as={CustomInputComponent}
//               />

//               <FormError name="name" />
//               <div>
//                 <label htmlFor="number">Number</label>
//                 <Field
//                   id="number"
//                   type="tel"
//                   name="number"
//                   value={values.number}
//                   placeholder="+380503589900"
//                 />
//                 <FormError name="number" />
//               </div>
//               <button type="submit" disabled={isSubmitting}>
//                 Add
//               </button>
//             </Form>
//           )}
//         </Formik>
//         <h2>Contacts</h2>
//         <div>{}</div>

//         <div id={this.id}>Filter</div>
//       </div>
//     );
//   }
// }
// //  {
// //    /* <ContactsList id={this.id} name={this.name} number={this.number} /> */
// //  }
// export default App;
