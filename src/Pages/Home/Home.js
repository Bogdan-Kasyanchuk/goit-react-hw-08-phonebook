import styled from 'styled-components';

const H1 = styled.h1`
  margin-bottom: 50px;
  padding-top: 100px;
  font-size: 100px;
  color: #318ce7;
  text-align: center;
`;

const H2 = styled.h2`
  font-size: 100px;
  color: #318ce7;
  text-align: center;
`;

const Home = () => {
  return (
    <>
      <H1>Home</H1>
      <H2>Phonebook</H2>
    </>
  );
};

export default Home;
