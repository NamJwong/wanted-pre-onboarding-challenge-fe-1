import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isAuthenticatedState } from 'common/stores/auth';

export default function PrivateRoute() {
  const isAuthenticated = useRecoilValue(isAuthenticatedState);
  return isAuthenticated ? <Outlet /> : <Navigate to="/landing" />;
}
