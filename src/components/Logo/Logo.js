import PropTypes from 'prop-types';
import Icon from 'components/Icon/Icon';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  .icon-phonebook {
    margin-right: 10px;
    fill: #ff6600;
  }
  line-height: 1;
`;

const Span = styled.span`
  font-size: 26px;
`;

const Logo = ({ children }) => {
  return (
    <Div>
      <Icon iconName="phonebook" width="20" />
      <Span>{children}</Span>
    </Div>
  );
};

Logo.propTypes = {
  children: PropTypes.node,
};

export default Logo;
