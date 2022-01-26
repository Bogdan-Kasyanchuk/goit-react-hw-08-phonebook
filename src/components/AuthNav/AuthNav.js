import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Li = styled.li`
  font-size: 24px;
  :not(:last-child) {
    margin-right: 30px;
  }
`;

const CustomNavLink = styled(NavLink)`
  color: #000000;

  &:hover,
  &.${props => props.active} {
    color: #318ce7;
  }
`;

const AuthNav = () => {
  return (
    <Ul>
      <Li>
        <CustomNavLink to="/register" active="active">
          Register
        </CustomNavLink>
      </Li>
      <Li>
        <CustomNavLink to="/login" active="active">
          Login
        </CustomNavLink>
      </Li>
    </Ul>
  );
};

export default AuthNav;
