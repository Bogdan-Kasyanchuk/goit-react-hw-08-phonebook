import { Toaster } from 'react-hot-toast';
import Container from 'components/Container/Container';
import Phonebook from 'components/Phonebook/Phonebook';

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Container>
        <Phonebook />
      </Container>
    </>
  );
}

export default App;
