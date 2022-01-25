import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
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

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Ul>
      <Li>
        <NavLink
          // className={({ isActive }) => (isActive ? style.active : style.link)}
          to="/"
        >
          Home
        </NavLink>
      </Li>
      {isLoggedIn && (
        <Li>
          <NavLink
            // className={({ isActive }) => (isActive ? style.active : style.link)}
            to="/contacts"
          >
            Contacts
          </NavLink>
        </Li>
      )}
    </Ul>
  );
};

export default Navigation;
