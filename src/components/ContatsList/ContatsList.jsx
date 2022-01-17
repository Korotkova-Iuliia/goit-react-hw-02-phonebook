import { nanoid } from "nanoid";
import ContactItem from "../ContactItem/ContactItem";
const ContactsList = ({ contacts }) => {
  const createId = () => nanoid();

  return (
    <ul>
      {contacts.map(({ name }) => {
        return (
          <li key={createId()}>
            {name}
            {/* <li key={createId()}>{name}</li> */}
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
// {
//   id, name, number;
// }
