import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import * as operations from 'redux/auth/auth-operations';
import { getIsFetchingCurrentUser } from 'redux/auth/auth-selectors';
import Container from 'components/Container/Container';
import AppBar from 'components/AppBar/AppBar';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import Home from 'Pages/Home/Home';
import Contacts from 'Pages/Contacts/Contacts';
import Register from 'Pages/Register/Register';
import Login from 'Pages/Login/Login';

function App() {
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Toaster position="top-right" />
      {!isFetchingCurrentUser && (
        <Container>
          <AppBar />
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <Home />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute restricted>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute restricted>
                  <Login />
                </PublicRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Container>
      )}
    </>
  );
}

export default App;

// bogdan@mail.ua
// bogdan0303

// bog@mail.ua
// bog0303
