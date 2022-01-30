import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const Div = styled.div`
  position: fixed;
  top: 90px;
  left: 50%;
  z-index: 1000;
  transform: translate(-50%, 0px);
`;

const Spinner = () => {
  return (
    <Div>
      <Loader type="Oval" color="#ff6600" height={50} width={50} />
    </Div>
  );
};

export default Spinner;
