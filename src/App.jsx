import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import { About, Contact, Home, Projects } from "./pages";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Add/remove dark class
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <main className="bg-slate-300/20 dark:bg-[#0a0a0a] min-h-screen transition-all">
      <Router>
        {/* Navbar */}
        <Navbar />

        {/* Night Mode Toggle (NOW BELOW NAVBAR) */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-20 right-5 bg-gray-200 dark:bg-gray-700
          text-black dark:text-white px-4 py-2 rounded-full shadow-lg z-50"
        >
          {darkMode ? "☀️ Light" : "🌙 Night"}
        </button>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
