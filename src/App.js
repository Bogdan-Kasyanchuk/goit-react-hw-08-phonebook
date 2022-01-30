import { useEffect, Suspense, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import * as operations from 'redux/auth/auth-operations';
import { getIsFetchingCurrentUser } from 'redux/auth/auth-selectors';
import { getLoading } from 'redux/selectors';
import AppBar from 'components/AppBar/AppBar';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import Spinner from 'components/Spinner/Spinner';

const Home = lazy(() =>
  import('pages/Home/Home' /* webpackChunkName: "Home" */),
);
const Contacts = lazy(() =>
  import('pages/Contacts/Contacts' /* webpackChunkName: "Contacts" */),
);
const Register = lazy(() =>
  import('pages/Register/Register' /* webpackChunkName: "Register" */),
);
const Login = lazy(() =>
  import('pages/Login/Login' /* webpackChunkName: "Login" */),
);

function App() {
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Toaster position="top-right" />
      {!isFetchingCurrentUser && (
        <>
          <AppBar />
          {loading && <Spinner />}
          <Suspense fallback={<Spinner />}>
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
          </Suspense>
        </>
      )}
    </>
  );
}

export default App;
