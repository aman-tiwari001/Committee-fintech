<<<<<<< HEAD
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
=======
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommitteeDashboard from "./pages/CommitteeDashboard";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import Details from "./pages/Details";
import Createroom from "./pages/Createroom";
import TestingRazorpay from "./pages/TestingRazorpay";
import Signup from "./components/Signup";
import Login from "./components/Login";
>>>>>>> c022625d1079bca4ebe9089a1fccf517b97f6506


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Toaster />
        <Routes>
<<<<<<< HEAD
          <Route path='/Dashboard' element={<CommitteeDashboard />} />
          <Route path='/' element={<LandingPage />} />
          <Route path='/razorpay' element={<TestingRazorpay />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
=======
          <Route path="/Dashboard" element={<CommitteeDashboard />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/registrationform" element={<Details />} />
          <Route path="/rooms" element={<Createroom />} />
          <Route path="/testing_razorpay" element={<TestingRazorpay />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
>>>>>>> c022625d1079bca4ebe9089a1fccf517b97f6506
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
