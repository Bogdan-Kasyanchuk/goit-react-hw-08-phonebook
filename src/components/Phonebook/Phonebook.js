import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import * as operations from 'redux/contacts/contacts-operations';
import { getLoading } from 'redux/contacts/contacts-selectors';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Spinner from 'components/Spinner/Spinner';

const Div = styled.div`
  :not(:last-child) {
    margin-bottom: 30px;
  }
`;

const H1 = styled.h1`
  margin-bottom: 20px;
  font-size: 36px;
  color: #318ce7;
  text-align: center;
`;

const H2 = styled.h2`
  margin-bottom: 20px;
  font-size: 30px;
  color: #318ce7;
  text-align: center;
`;

const Phonebook = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(operations.getContact());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Div>
        <H1>Phonebook</H1>
        <ContactForm />
      </Div>
      <Div>
        <H2>Contacts</H2>
        <Filter />
        {loading && <Spinner />}
        <ContactList />
      </Div>
    </>
  );
};

export default Phonebook;
