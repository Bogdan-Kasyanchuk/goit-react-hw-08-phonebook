import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

const PrivateRoute = ({ children }) => {
  console.log('PrivateRoute');
  const isLoggedIn = useSelector(getIsLoggedIn);
  console.log('PrivateRoute-isLoggedIn', isLoggedIn);

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
