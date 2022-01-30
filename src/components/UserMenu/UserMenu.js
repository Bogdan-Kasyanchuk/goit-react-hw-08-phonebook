import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getUserName } from 'redux/auth/auth-selectors';
import * as operations from 'redux/auth/auth-operations';

const DivWrapper = styled.div`
  position: relative;
  width: 190px;
  height: 32px;
`;

const Div = styled.div`
  width: 394px;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const P = styled.p`
  font-size: 20px;
  margin-right: 50px;
`;

const Button = styled.button`
  padding: 2px 4px;
  font-size: 20px;
  border: 2px solid white;
  border-radius: 5px;
  outline: none;
  :hover,
  :focus {
    color: #ffffff;
    background-color: #ff6600;
    border-color: #ff6600;
  }
`;

const UserMenu = () => {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(operations.logOut());
  };

  return (
    <DivWrapper>
      <Div>
        <P>Hello, {userName} 🎅</P>
        <Button type="button" onClick={logOut}>
          LOG OUT
        </Button>
      </Div>
    </DivWrapper>
  );
};

export default UserMenu;
