import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from 'todo';
import Auth from 'auth';
import Home from 'home';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}
