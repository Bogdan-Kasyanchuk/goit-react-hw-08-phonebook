import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import * as operations from 'redux/contacts/contacts-operations';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Container from 'components/Container/Container';

const Section = styled.section`
  padding-top: 74px;
`;

const Div = styled.div`
  :not(:last-child) {
    margin-bottom: 40px;
  }
`;

const H2 = styled.h2`
  margin-bottom: 20px;
  font-size: 20px;
  color: #ff6600;
  text-align: center;
`;

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getContact());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <Div>
          <H2>ADD NEW CONTACT</H2>
          <ContactForm />
        </Div>
        <Div>
          <H2>FILTER CONTACTS</H2>
          <Filter />
        </Div>
        <Div>
          <H2>CONTACTS LIST</H2>
          <ContactList />
        </Div>
      </Container>
    </Section>
  );
};

export default Contacts;
