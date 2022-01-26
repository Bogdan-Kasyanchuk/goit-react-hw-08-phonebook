import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

const PublicRoute = ({ children, restricted = false }) => {
  console.log('PublicRoute');
  const isLoggedIn = useSelector(getIsLoggedIn);
  console.log('PublicRoute-isLoggedIn', isLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to="/contacts" /> : children;
};

export default PublicRoute;
