import ContactItem from "../ContactItem/ContactItem";
const ContactsList = ({ contacts }) => {
  // const createId = () => nanoid();

  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <div>
              {name}:{number}
              <button key={id}>Delet</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
// {
/* <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <div>
              {name}:{number}
              <button key={id}>Delet</button>
            </div>
          </li>
        );
      })}
    </ul> */
// }
// {
/* <li key={createId()}>{name}</li> */
// }

// {
/* {
  id, name, number;
}  */
// }
