import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isAuthenticatedState } from 'common/stores/auth';

export default function PublicRoute() {
  const isAuthenticated = useRecoilValue(isAuthenticatedState);
  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
}
