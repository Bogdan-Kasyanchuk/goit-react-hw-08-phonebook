import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 190px;
`;

const Li = styled.li`
  font-size: 20px;
`;

const CustomNavLink = styled(NavLink)`
  color: #ffffff;
  padding: 4px 0;
  &:hover,
  &.active {
    color: #ff6600;
  }
`;

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Ul>
      <Li>
        <CustomNavLink to="/">HOME</CustomNavLink>
      </Li>
      {isLoggedIn && (
        <Li>
          <CustomNavLink to="/contacts">CONTACTS</CustomNavLink>
        </Li>
      )}
    </Ul>
  );
};

export default Navigation;
