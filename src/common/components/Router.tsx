import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from 'todo';
import Home from 'home';
import Join from 'join';
import Login from 'login';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}
