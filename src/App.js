import { Routes, Route } from 'react-router-dom';
import LandingPageEN from './pages/en/LandingPage';
import LandingPageID from './pages/id/LandingPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/en" element={<LandingPageEN />}></Route>
        <Route path="/id" element={<LandingPageID />}></Route>
      </Routes>
    </div>
  );
}

export default App;
