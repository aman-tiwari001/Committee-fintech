import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CommitteeDashboard from './pages/CommitteeDashboard';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import TestingRazorpay from './pages/TestingRazorpay';
import Signup from './components/Signup';
import Login from './components/Login';
import { Toaster } from 'react-hot-toast';
import Details from "./pages/Details";
import Createroom from "./pages/Createroom";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Toaster />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/Dashboard' element={<CommitteeDashboard />} />
          <Route path='/razorpay' element={<TestingRazorpay />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path="/registrationform" element={<Details />} />
          <Route path="/rooms" element={<Createroom />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
