import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import * as operations from 'redux/contacts/contacts-operations';
import { getContacts } from 'redux/contacts/contacts-selectors';

const Label = styled.label`
  padding-left: 312px;
  font-size: 20px;
`;

const Input = styled.input`
  display: block;
  margin-top: 5px;
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
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handlerChangeInput = event => {
    const { name, value } = event.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handlerCreateContact = event => {
    event.preventDefault();

    if (
      contacts.some(
        element => element.name.toLowerCase() === name.toLowerCase(),
      )
    )
      return toast(`${name} is already in contacts`, {
        icon: '⚠️',
      });
    if (contacts.some(element => element.number === number))
      return toast(`${number} is already in contacts`, {
        icon: '⚠️',
      });
    const contact = {
      name: name,
      number: number,
    };
    dispatch(operations.addContact(contact));
    resetForm();
  };

  function resetForm() {
    setName('');
    setNumber('');
  }

  return (
    <form autoComplete="off" onSubmit={handlerCreateContact}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handlerChangeInput}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          placeholder="Enter number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handlerChangeInput}
        />
      </Label>
      <Button disabled={!name || !number} type="submit">
        Add contact
      </Button>
    </form>
  );
};

export default ContactForm;
