import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Centers from "./pages/Centers";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar"; // Optional: if you want the navbar global
import Footer from "./components/Footer"; // Optional: if you want the footer global
import "./App.css"; // Ensures your variables and styles are loaded

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/centers" element={<Centers />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
