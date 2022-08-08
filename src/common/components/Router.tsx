import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from 'todo';
import Landing from 'landing';
import Join from 'auth/join';
import Login from 'auth/login';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}
