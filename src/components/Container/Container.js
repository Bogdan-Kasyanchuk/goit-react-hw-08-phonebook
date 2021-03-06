import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  max-width: 1440px;
  padding-left: 20px;
  padding-right: 20px;
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
