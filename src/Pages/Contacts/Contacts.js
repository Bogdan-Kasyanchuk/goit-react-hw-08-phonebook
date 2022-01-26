import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import * as operations from 'redux/contacts/contacts-operations';
import { getLoading } from 'redux/selectors';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import Spinner from 'components/Spinner/Spinner';
import ContactList from 'components/ContactList/ContactList';

const Div = styled.div`
  :not(:last-child) {
    margin-bottom: 30px;
  }
`;

const H2 = styled.h2`
  margin-bottom: 20px;
  font-size: 30px;
  color: #318ce7;
  text-align: center;
`;

const Contacts = () => {
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getContact());
  }, [dispatch]);

  return (
    <>
      <Div>
        <H2>Add contact</H2>
        <ContactForm />
      </Div>
      <Div>
        <H2>Contacts list</H2>
        <Filter />
        {loading && <Spinner />}
        <ContactList />
      </Div>
    </>
  );
};

export default Contacts;
