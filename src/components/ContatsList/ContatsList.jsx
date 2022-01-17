import PropTypes from "prop-types";
const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <div>
              {name}:{number}
              <button
                key={id}
                onClick={() => {
                  onDeleteContact(id);
                }}
              >
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
