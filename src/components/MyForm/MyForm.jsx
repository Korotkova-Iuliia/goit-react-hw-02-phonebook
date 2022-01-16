import styled from "styled-components";
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
const MyForm = (onSubmit) => {
  return (
    <Formik
      initialValues={{ contacts: [], name: "", number: "" }}
      validationSchema={schema}
      // onChange={this.handleChange}
      // onSubmit={this.handleSubmit}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        onSubmit(values);
        setSubmitting(false);
      }}
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
        </Form>
      )}
    </Formik>
  );
};
export default MyForm;
