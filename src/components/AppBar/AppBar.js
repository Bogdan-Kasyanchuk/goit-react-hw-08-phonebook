import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import styled from 'styled-components';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 2px;
  border-bottom: 2px solid #000000;
`;

const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Div>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Div>
  );
};

export default AppBar;
