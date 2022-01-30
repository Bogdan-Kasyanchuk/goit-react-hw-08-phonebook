import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as operations from 'redux/auth/auth-operations';
import Container from 'components/Container/Container';

const Section = styled.section`
  padding-top: 74px;
`;

const Form = styled.form`
  width: 350px;
  margin-left: auto;
  margin-right: auto;
`;

const Label = styled.label`
  font-size: 18px;
`;

const Span = styled.span`
  position: relative;
  display: block;
  margin-top: 5px;
  margin-bottom: 26px;
`;

const Input = styled.input`
  width: 100%;
  display: block;
  color: #202020;
  padding: 5px 10px;
  font-size: 18px;
  border-radius: 5px;
  border: 2px solid #ffffff;
  outline: none;
  :focus {
    border-color: #ff6600;
  }
`;

const P = styled.p`
  top: 40px;
  position: absolute;
  font-size: 12px;
  color: #ff6600;
`;

const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 5px 10px;
  font-size: 18px;
  border: 2px solid #ffffff;
  border-radius: 5px;
  outline: none;
  :hover,
  :focus {
    color: #ffffff;
    background-color: #ff6600;
    border-color: #ff6600;
  }
  :disabled {
    border: 2px solid #777777;
  }
  :disabled:hover {
    border: 2px solid #777777;
    background-color: #777777;
    color: #585858;
    cursor: not-allowed;
  }
`;

const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const emptyInput =
    watch('email') === '' ||
    watch('password') === '' ||
    watch('email') === undefined ||
    watch('password') === undefined;

  const handlerLogInUser = credentials => {
    dispatch(operations.logIn(credentials));
    reset();
  };

  return (
    <Section>
      <Container>
        <Form autoComplete="on" onSubmit={handleSubmit(handlerLogInUser)}>
          <Label>
            Email
            <Span>
              <Input
                type="email"
                {...register('email', { required: 'Required field!' })}
                placeholder="Enter email"
              />
              {errors?.email && <P>{errors?.email?.message || 'Error!'}</P>}
            </Span>
          </Label>
          <Label>
            Password
            <Span>
              <Input
                type="password"
                {...register('password', {
                  required: 'Required field!',
                  minLength: {
                    value: 6,
                    message: 'Min 6 characters!',
                  },
                })}
                placeholder="Enter password"
              />
              {errors?.password && (
                <P>{errors?.password?.message || 'Error'}</P>
              )}
            </Span>
          </Label>
          <Button disabled={emptyInput} type="submit">
            Log In
          </Button>
        </Form>
      </Container>
    </Section>
  );
};

export default Login;
