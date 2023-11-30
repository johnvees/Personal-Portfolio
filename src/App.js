import './assets/scss/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import { Routes, Route, Navigate } from 'react-router-dom';
import TestPage from './pages/TestPage';
import LandingPageEN from './pages/en/LandingPage';
import LandingPageID from './pages/id/LandingPage';
import AboutPageEN from './pages/en/AboutPage';
import AboutPageID from './pages/id/AboutPage';
import ProjectWebDevEN from './pages/en/ProjectWebDevPage';
import ProjectWebDevID from './pages/id/ProjectWebDevPage';
import ProjectMobileEN from './pages/en/ProjectMobileDevPage';
import ProjectBackendEN from './pages/en/ProjectBackendDevPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/en" />}></Route>
        <Route path="/test-page" element={<TestPage />}></Route>
        <Route path="/en" element={<LandingPageEN />}></Route>
        <Route path="/id" element={<LandingPageID />}></Route>
        <Route path="/en/about" element={<AboutPageEN />}></Route>
        <Route path="/id/about" element={<AboutPageID />}></Route>
        <Route path="/en/web-dev" element={<ProjectWebDevEN />}></Route>
        <Route path="/id/web-dev" element={<ProjectWebDevID />}></Route>
        <Route path="/en/mobile-dev" element={<ProjectMobileEN />}></Route>
        <Route path="/en/backend-dev" element={<ProjectBackendEN />}></Route>
      </Routes>
    </div>
  );
}

export default App;
