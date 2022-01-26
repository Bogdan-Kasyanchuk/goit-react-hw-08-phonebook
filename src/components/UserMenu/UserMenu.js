import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getUserName, getUserEmail } from 'redux/auth/auth-selectors';
import * as operations from 'redux/auth/auth-operations';

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const P = styled.p`
  font-size: 20px;
  margin-right: 20px;
`;

const Button = styled.button`
  ${'' /* width: 70px; */}
  padding: 2px 4px;
  font-size: 18px;
  border: 2px solid black;
  border-radius: 5px;
  :hover {
    color: white;
    background-color: #318ce7;
    border-color: #318ce7;
  }
`;

const UserMenu = () => {
  const userName = useSelector(getUserName);
  const userEmail = useSelector(getUserEmail);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(operations.logOut());
  };

  return (
    <Div>
      <P>Hello, {userName} 🎅</P>
      <P>{userEmail}</P>
      <Button type="button" onClick={logOut}>
        Log Out
      </Button>
    </Div>
  );
};

export default UserMenu;
