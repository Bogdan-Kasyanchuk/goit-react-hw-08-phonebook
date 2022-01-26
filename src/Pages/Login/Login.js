import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import * as operations from 'redux/auth/auth-operations';

const Label = styled.label`
  padding-left: 312px;
  font-size: 20px;
`;

const Input = styled.input`
  display: block;
  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  padding: 5px;
  font-size: 18px;
  border-radius: 5px;
  border: 2px solid white;
  outline: none;
  :focus {
    border-color: #318ce7;
  }
`;

const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 5px 10px;
  font-size: 18px;
  border: 2px solid black;
  border-radius: 5px;
  :hover {
    color: white;
    background-color: #318ce7;
    border-color: #318ce7;
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handlerChangeInput = event => {
    const { name, value } = event.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handlerLogInUser = event => {
    event.preventDefault();
    const credentials = {
      email: email,
      password: password,
    };
    dispatch(operations.logIn(credentials));
    resetForm();
  };

  function resetForm() {
    setEmail('');
    setPassword('');
  }

  return (
    <>
      <form autoComplete="on" onSubmit={handlerLogInUser}>
        <Label>
          Email
          <Input
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            required
            onChange={handlerChangeInput}
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            name="password"
            value={password}
            placeholder="Enter password"
            required
            onChange={handlerChangeInput}
          />
        </Label>
        <Button type="submit">Log In</Button>
      </form>
    </>
  );
};

export default Login;
