import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

const PrivateRoute = ({ children }) => {
  console.log('PrivateRoute');
  const location = useLocation();
  const isLoggedIn = useSelector(getIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
