import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from 'todo';
import Auth from 'auth';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}
