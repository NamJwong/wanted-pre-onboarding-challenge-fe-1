import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Todo from 'todo';
import Landing from 'landing';
import Join from 'auth/join';
import Login from 'auth/login';
import { useEffect } from 'react';
import useAuth from 'common/hooks/useAuth';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

export default function Router() {
  const { initAuth } = useAuth();

  useEffect(() => {
    initAuth();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Todo />} />
        </Route>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/landing" element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
