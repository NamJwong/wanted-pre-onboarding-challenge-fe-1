import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from '../../auth';
import Todo from '../../todo';

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
