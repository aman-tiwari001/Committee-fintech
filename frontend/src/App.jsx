import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CommitteeDashboard from './pages/CommitteeDashboard';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/dashboard' element={<CommitteeDashboard />} />
          <Route path='/' element={<LandingPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
