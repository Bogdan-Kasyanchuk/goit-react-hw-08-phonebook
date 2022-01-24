import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import ContactListItem from 'components/ContactList/ContactListItem';

const Ul = styled.ul`
  margin-top: 15px;
`;

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <Ul>
      {filteredContacts.map((element, index) => (
        <ContactListItem key={element.id} element={element} index={index} />
      ))}
    </Ul>
  );
};

export default ContactList;
