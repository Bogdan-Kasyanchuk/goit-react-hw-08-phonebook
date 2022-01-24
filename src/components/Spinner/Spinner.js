import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
`;

const Spinner = () => {
  return (
    <Div>
      <Loader type="Oval" color="#318ce7" height={50} width={50} />
    </Div>
  );
};

export default Spinner;
