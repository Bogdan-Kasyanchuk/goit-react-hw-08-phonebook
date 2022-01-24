import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import * as operations from 'redux/contacts/contacts-operations';
import { getContacts } from 'redux/contacts/contacts-selectors';

const P = styled.p`
  margin-bottom: 5px;
  padding-left: 236px;
  font-size: 22px;
`;

const Input = styled.input`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  padding: 5px;
  font-size: 18px;
  border-radius: 5px;
  border: 2px solid white;
  outline: none;
  :focus {
    border-color: #318ce7;
  }
`;

const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 5px 10px;
  font-size: 18px;
  border: 2px solid black;
  border-radius: 5px;
  :hover {
    color: white;
    background-color: #318ce7;
    border-color: #318ce7;
  }
`;

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handlerChange = event => {
    const { name, value } = event.target;
    if (name === 'name') setName(value);
    if (name === 'phone') setPhone(value);
  };

  const createContact = event => {
    event.preventDefault();
    const contact = {
      name: name,
      phone: phone,
    };
    if (contacts.some(element => element.name === contact.name))
      return toast(`${contact.name} is already in contacts`, {
        icon: '⚠️',
      });
    if (contacts.some(element => element.phone === contact.phone))
      return toast(`${contact.phone} is already in contacts`, {
        icon: '⚠️',
      });
    dispatch(operations.addContact(contact));
    reset();
  };

  function reset() {
    setName('');
    setPhone('');
  }

  return (
    <form autoComplete="off" onSubmit={createContact}>
      <P>Name</P>
      <label>
        <Input
          type="text"
          name="name"
          value={name}
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handlerChange}
        />
      </label>
      <P>Number</P>
      <label>
        <Input
          type="tel"
          name="phone"
          value={phone}
          placeholder="Enter number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handlerChange}
        />
      </label>
      <Button disabled={!name || !phone} type="submit">
        Add contact
      </Button>
    </form>
  );
};

export default ContactForm;
