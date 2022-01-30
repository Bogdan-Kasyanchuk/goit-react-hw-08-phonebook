import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import * as operations from 'redux/contacts/contacts-operations';
import { getContacts, getFilter } from 'redux/contacts/contacts-selectors';
import { getLoading, getError } from 'redux/selectors';
import * as actions from 'redux/contacts/contacts-action';

const Li = styled.li`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 800px;
  font-size: 18px;
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Form = styled.form`
  display: inline-block;
  margin-right: 148px;
`;

const Input = styled.input`
  :first-child {
    margin-right: 20px;
  }
  width: 220px;
  display: inline-block;
  padding: 5px 10px;
  font-size: 18px;
  outline: none;
  ${({ inputTypeStyle }) =>
    inputTypeStyle === true
      ? { border: 'none', background: 'none', color: '#ffffff' }
      : {
          'border-radius': '5px',
          border: '2px solid #ffffff',
          color: '#202020',
        }};
  outline: none;
  :focus {
    border-color: #ff6600;
  }
`;

const Div = styled.div`
  display: inline-block;
`;

const Button = styled.button`
  :not(:last-child) {
    margin-right: 30px;
  }
  width: 80px;
  display: inline-block;
  padding: 5px 10px;
  font-size: 18px;
  border: 2px solid #ffffff;
  border-radius: 5px;
  outline: none;
  :hover,
  :focus {
    color: #ffffff;
    background-color: #ff6600;
    border-color: #ff6600;
  }
  :disabled {
    border: 2px solid #777777;
  }
  :disabled:hover {
    border: 2px solid #777777;
    background-color: #777777;
    color: #585858;
    cursor: not-allowed;
  }
`;

const OkButton = styled.button`
  left: 498px;
  position: absolute;
  width: 80px;
  display: inline-block;
  padding: 5px 10px;
  font-size: 18px;
  border: 2px solid #ffffff;
  border-radius: 5px;
  outline: none;
  :hover,
  :focus {
    color: #ffffff;
    background-color: #ff6600;
    border-color: #ff6600;
  }
  :disabled {
    border: 2px solid #777777;
  }
  :disabled:hover {
    border: 2px solid #777777;
    background-color: #777777;
    color: #585858;
    cursor: not-allowed;
  }
`;

const ContactListItem = ({ element }) => {
  const [name, setName] = useState(element.name);
  const [number, setNumber] = useState(element.number);
  const [inputType, setInputType] = useState(true);
  const refContact = useRef({ name, number });
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();
  const error = useSelector(getError);

  useEffect(() => {
    if (error) {
      setName(refContact.current.name);
      setNumber(refContact.current.number);
    }
  }, [error]);

  const handlerChangeInput = event => {
    const { name, value } = event.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handlerContact = event => {
    const { nodeName, textContent } = event.target;
    if (nodeName !== 'BUTTON') return;
    if (textContent === 'Edit') setInputType(!inputType);
    if (textContent === 'Cancel') {
      setInputType(!inputType);
      if (name !== refContact.current.name) setName(refContact.current.name);
      if (number !== refContact.current.number)
        setNumber(refContact.current.number);
    }
    if (textContent === 'Delete') {
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
      if (
        contacts.some(
          element => element.name.toLowerCase() === name.toLowerCase(),
        )
      )
        return toast(`${name} is already in contacts`, {
          icon: '⚠️',
        });
    }
    if (number !== refContact.current.number) {
      if (contacts.some(element => element.number === number))
        return toast(`${number} is already in contacts`, {
          icon: '⚠️',
        });
    }
    const editedContact = {
      id: event.target.parentElement.dataset.id,
      name: name,
      number: number,
    };
    dispatch(operations.editContact(editedContact));
    refContact.current = { name, number };
    setInputType(!inputType);
  };

  return (
    <Li data-id={element.id} onClick={handlerContact}>
      <Form autoComplete="off" onSubmit={handlerEditContact}>
        <Input
          inputTypeStyle={inputType}
          readOnly={inputType}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handlerChangeInput}
        />
        <Input
          inputTypeStyle={inputType}
          readOnly={inputType}
          type="tel"
          name="number"
          value={number}
          pattern="^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){7,14}(\s*)?$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handlerChangeInput}
        />
        {!inputType && (
          <OkButton
            disabled={
              name === refContact.current.name &&
              number === refContact.current.number
            }
            type="submit"
          >
            Ok
          </OkButton>
        )}
      </Form>
      <Div>
        {!inputType && <Button type="button">Cancel</Button>}
        {inputType && (
          <Button disabled={loading} type="button">
            Edit
          </Button>
        )}
        <Button disabled={loading || !inputType} type="button">
          Delete
        </Button>
      </Div>
    </Li>
  );
};

ContactListItem.propTypes = {
  element: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default ContactListItem;
