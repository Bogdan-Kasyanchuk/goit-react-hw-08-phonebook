import phonebook from 'img/phonebook.png';
import styled from 'styled-components';
import Container from 'components/Container/Container';

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
`;

const Div1 = styled.div`
  height: 700px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
`;

const H1 = styled.h1`
  margin-bottom: 100px;
  font-size: 120px;
  color: #ffffff;
`;

const H2 = styled.h2`
  font-size: 80px;
  color: #ffffff;
`;

const Home = () => {
  return (
    <section>
      <Container>
        <Div>
          <Div1>
            <H1>WELCOME!</H1>
            <H2>THIS IS YOUR PHONEBOOK.</H2>
          </Div1>
          <img src={phonebook} alt="Not found" width="600" />
        </Div>
      </Container>
    </section>
  );
};

export default Home;
