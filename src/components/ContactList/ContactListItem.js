import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import * as operations from 'redux/contacts/contacts-operations';
import {
  getContacts,
  getLoading,
  getFilter,
  getError,
} from 'redux/contacts/contacts-selectors';
import * as actions from 'redux/contacts/contacts-actions';

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 15px;
  }
  font-size: 20px;
`;

const Span = styled.span`
  margin-right: 5px;
  font-size: 20px;
`;

const Form = styled.form`
  margin-right: auto;
`;

const Input = styled.input`
  width: 180px;
  margin-right: 30px;
  padding: 2px 0;
  font-size: 18px;
  ${({ inputTypeStyle }) =>
    inputTypeStyle === true
      ? { border: 'none', background: 'none' }
      : { 'border-radius': '5px', border: '2px solid white' }};
  outline: none;
  :focus {
    border-color: #318ce7;
  }
`;

const Button = styled.button`
  width: 70px;
  padding: 2px 4px;
  font-size: 18px;
  border: 2px solid black;
  border-radius: 5px;
  :hover {
    color: white;
    background-color: #318ce7;
    border-color: #318ce7;
  }
`;

const DivButton = styled.button`
  margin-left: 30px;
  width: 70px;
  padding: 2px 4px;
  font-size: 18px;
  border: 2px solid black;
  border-radius: 5px;
  :hover {
    color: white;
    background-color: #318ce7;
    border-color: #318ce7;
  }
`;

const ContactListItem = ({ element, index }) => {
  const [name, setName] = useState(element.name);
  const [phone, setPhone] = useState(element.phone);
  const [inputType, setInputType] = useState(true);
  const refContact = useRef({ name, phone });
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  useEffect(() => {
    if (error) {
      setName(refContact.current.name);
      setPhone(refContact.current.phone);
    }
  }, [error]);

  const handlerChange = event => {
    const { name, value } = event.target;
    if (name === 'name') setName(value);
    if (name === 'phone') setPhone(value);
  };

  const handlerContact = event => {
    if (event.target.nodeName !== 'BUTTON') return;
    if (event.target.textContent === 'Edit') {
      setInputType(!inputType);
    }
    if (event.target.textContent === 'Cancel') {
      setInputType(!inputType);
      if (name !== refContact.current.name) {
        setName(refContact.current.name);
      }
      if (phone !== refContact.current.phone) {
        setPhone(refContact.current.phone);
      }
    }
    if (event.target.textContent === 'Delete') {
      dispatch(
        operations.deleteContact(
          event.target.parentElement.parentElement.dataset.id,
        ),
      );
      if (filter) dispatch(actions.filterContact(''));
    }
  };

  const handlerEditContact = event => {
    event.preventDefault();
    if (name !== refContact.current.name) {
      if (contacts.some(element => element.name === name))
        return toast(`${name} is already in contacts`, {
          icon: '⚠️',
        });
    }
    if (phone !== refContact.current.phone) {
      if (contacts.some(element => element.phone === phone))
        return toast(`${phone} is already in contacts`, {
          icon: '⚠️',
        });
    }
    dispatch(
      operations.editContact({
        id: event.target.parentElement.dataset.id,
        name,
        phone,
      }),
    );
    refContact.current = { name, phone };
    setInputType(!inputType);
  };

  return (
    <Li data-id={element.id} onClick={handlerContact}>
      <Span>{index + 1}.</Span>
      <Form onSubmit={handlerEditContact}>
        <Input
          inputTypeStyle={inputType}
          readOnly={inputType}
          autoComplete="off"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handlerChange}
        />
        <Input
          inputTypeStyle={inputType}
          readOnly={inputType}
          autoComplete="off"
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handlerChange}
        />
        {!inputType && (
          <Button
            disabled={
              name === refContact.current.name &&
              phone === refContact.current.phone
            }
            type="submit"
          >
            Ok
          </Button>
        )}
      </Form>
      <div>
        {!inputType && <Button type="button">Cancel</Button>}
        {inputType && (
          <Button disabled={loading} type="button">
            Edit
          </Button>
        )}
        <DivButton disabled={loading || !inputType} type="button">
          Delete
        </DivButton>
      </div>
    </Li>
  );
};

ContactListItem.propTypes = {
  element: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  index: PropTypes.number.isRequired,
};

export default ContactListItem;
