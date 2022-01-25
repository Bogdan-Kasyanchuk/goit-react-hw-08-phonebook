import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  width: 900px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const Container = ({ children }) => {
  return <Div>{children}</Div>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
