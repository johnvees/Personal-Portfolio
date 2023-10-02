import './assets/scss/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPageEN from './pages/en/LandingPage';
import LandingPageID from './pages/id/LandingPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/en" />}></Route>
        <Route path="/en" element={<LandingPageEN />}></Route>
        <Route path="/id" element={<LandingPageID />}></Route>
      </Routes>
    </div>
  );
}

export default App;
