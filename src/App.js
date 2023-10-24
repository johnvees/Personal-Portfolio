import './assets/scss/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import { Routes, Route, Navigate } from 'react-router-dom';
import TestPage from './pages/TestPage';
import LandingPageEN from './pages/en/LandingPage';
import LandingPageID from './pages/id/LandingPage';
import AboutPageEN from './pages/en/AboutPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/en" />}></Route>
        <Route path="/test-page" element={<TestPage />}></Route>
        <Route path="/en" element={<LandingPageEN />}></Route>
        <Route path="/id" element={<LandingPageID />}></Route>
        <Route path="/en/about" element={<AboutPageEN />}></Route>
      </Routes>
    </div>
  );
}

export default App;
