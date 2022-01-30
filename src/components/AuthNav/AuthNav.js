import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 170px;
  margin-left: 20px;
`;

const Li = styled.li`
  font-size: 20px;
`;

const CustomNavLink = styled(NavLink)`
  color: #ffffff;
  padding: 4px 0;
  :hover,
  &.active {
    color: #ff6600;
  }
`;

const AuthNav = () => {
  return (
    <Ul>
      <Li>
        <CustomNavLink to="/register">SIGN UP</CustomNavLink>
      </Li>
      <Li>
        <CustomNavLink to="/login">LOG IN</CustomNavLink>
      </Li>
    </Ul>
  );
};

export default AuthNav;
