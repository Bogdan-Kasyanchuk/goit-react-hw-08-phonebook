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

const CustomNavLink = styled(NavLink)`
  color: #000000;

  &:hover,
  &.${props => props.active} {
    color: #318ce7;
  }
`;

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Ul>
      <Li>
        <CustomNavLink to="/" active="active">
          Home
        </CustomNavLink>
      </Li>
      {isLoggedIn && (
        <Li>
          <CustomNavLink to="/contacts" active="active">
            Contacts
          </CustomNavLink>
        </Li>
      )}
    </Ul>
  );
};

export default Navigation;
