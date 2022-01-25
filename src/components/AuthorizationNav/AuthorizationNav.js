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

const AuthorizationNav = () => {
  return (
    <Ul>
      <Li>
        <NavLink
          // className={({ isActive }) => (isActive ? style.active : style.link)}
          to="/register"
        >
          Register
        </NavLink>
      </Li>
      <Li>
        <NavLink
          // className={({ isActive }) => (isActive ? style.active : style.link)}
          to="/login"
        >
          Login
        </NavLink>
      </Li>
    </Ul>
  );
};

export default AuthorizationNav;
