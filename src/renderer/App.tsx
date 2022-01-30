import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import Login from './pages/login';
import '../../styles/global.scss';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
