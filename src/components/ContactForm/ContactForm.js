import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import * as operations from 'redux/contacts/contacts-operations';
import { getContacts } from 'redux/contacts/contacts-selectors';

const Form = styled.form`
  width: 350px;
  margin-left: auto;
  margin-right: auto;
`;

const Label = styled.label`
  font-size: 18px;
`;

const Span = styled.span`
  position: relative;
  display: block;
  margin-top: 5px;
  margin-bottom: 26px;
`;

const Input = styled.input`
  width: 100%;
  display: block;
  color: #202020;
  padding: 5px 10px;
  font-size: 18px;
  border-radius: 5px;
  border: 2px solid #ffffff;
  outline: none;
  :focus {
    border-color: #ff6600;
  }
`;

const P = styled.p`
  top: 40px;
  position: absolute;
  font-size: 12px;
  color: #ff6600;
`;

const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
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

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const emptyInput =
    watch('name') === '' ||
    watch('number') === '' ||
    watch('name') === undefined ||
    watch('number') === undefined;

  const handlerCreateContact = contact => {
    if (
      contacts.some(
        element => element.name.toLowerCase() === contact.name.toLowerCase(),
      )
    )
      return toast(`${contact.name} is already in contacts`, {
        icon: '⚠️',
      });
    if (contacts.some(element => element.number === contact.number))
      return toast(`${contact.number} is already in contacts`, {
        icon: '⚠️',
      });
    dispatch(operations.addContact(contact));
    reset();
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit(handlerCreateContact)}>
      <Label>
        Name
        <Span>
          <Input
            type="text"
            {...register('name', {
              required: 'Required field!',
              pattern: {
                value:
                  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
                message: 'Enter the desired format!',
              },
            })}
            placeholder="Enter name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          {errors?.name && <P>{errors?.name?.message || 'Error!'}</P>}
        </Span>
      </Label>
      <Label>
        Number
        <Span>
          <Input
            type="tel"
            {...register('number', {
              required: 'Required field!',
              pattern: {
                value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){7,14}(\s*)?$/,
                message: 'Min 7 characters!',
              },
            })}
            placeholder="Enter number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          {errors?.number && <P>{errors?.number?.message || 'Error!'}</P>}
        </Span>
      </Label>
      <Button disabled={emptyInput} type="submit">
        Add contact
      </Button>
    </Form>
  );
};

export default ContactForm;
