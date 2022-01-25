import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import Navigation from 'components/Navigation/Navigation';
import AuthorizationNav from 'components/AuthorizationNav/AuthorizationNav';
import UserMenu from 'components/UserMenu/UserMenu';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 2px;
  border-bottom: 4px solid #318ce7;
`;

const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Div>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthorizationNav />}
    </Div>
  );
};

export default AppBar;
