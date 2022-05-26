import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import Insurance from "./pages/Insurance";
import NewQuote from "./pages/NewQuote";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <TopNavbar />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Insurance />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/login" element={<Login />} />
          <Route path="/insurance/newquote" element={<NewQuote />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
