import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommitteeDashboard from "./pages/CommitteeDashboard";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import TestingRazorpay from "./pages/TestingRazorpay";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/Dashboard" element={<CommitteeDashboard />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/testing_razorpay" element={<TestingRazorpay />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
