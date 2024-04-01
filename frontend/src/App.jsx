import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CommitteeDashboard from './pages/CommitteeDashboard';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/Dashboard' element={<CommitteeDashboard />} />
          <Route path='/' element={<LandingPage />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
