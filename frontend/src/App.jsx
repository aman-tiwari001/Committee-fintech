import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CommitteeDashboard from './pages/CommitteeDashboard';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CommitteeDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
