import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import ContactListItem from 'components/ContactList/ContactListItem';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <ol>
      {filteredContacts.map((element, index) => (
        <ContactListItem key={element.id} element={element} index={index} />
      ))}
    </ol>
  );
};

export default ContactList;
