import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Container from 'components/Container/Container';
import * as operations from 'redux/auth/auth-operations';
import AppBar from 'components/AppBar/AppBar';
import Home from 'Pages/Home/Home';
import Contacts from 'Pages/Contacts/Contacts';
import Register from 'Pages/Register/Register';
import Login from 'Pages/Login/Login';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Toaster position="top-right" />
      <Container>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;

// bogdan@mail.ua
// bogdan0303

// bog@mail.ua
// bog0303
