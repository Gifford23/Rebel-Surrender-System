import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
// Removed 'react-hot-toast' to fix the error

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Centers from "./pages/Centers";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

// This handles page scrolling to top when you change pages
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function AppContent() {
  const location = useLocation();
  // We want the Navbar/Footer on all pages EXCEPT the Landing page ("/")
  const isLandingPage = location.pathname === "/";

  return (
    <div className="app-container">
      {!isLandingPage && <Navbar />}

      <main className={isLandingPage ? "" : "main-content"}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/centers" element={<Centers />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>

      {!isLandingPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
