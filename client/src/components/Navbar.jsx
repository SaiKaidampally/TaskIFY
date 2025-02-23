import React, { useState, useEffect } from "react";
import { FaBars, FaSearch, FaShare, FaCog, FaBell, FaMoon, FaSun } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SettingsPage from "./SettingsPage"; // Import the settings component

const Navbar = ({ toggleSidebar }) => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const [showSettings, setShowSettings] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("bg-gray-900", "text-white");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("bg-gray-900", "text-white");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <div className="fixed top-0 right-0 left-0 flex items-center justify-between p-4 bg-white text-black shadow-md transition-transform transform -translate-x-full md:translate-x-0">
        <button onClick={toggleSidebar} className="p-2 text-black">
          <FaBars />
        </button>
        
        <h1 className="text-lg font-bold">TaskIFY</h1>

        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <FaSearch />
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            <FaShare />
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" 
            onClick={() => setShowSettings(true)}>
            <FaCog />
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            <FaBell />
          </button>

          {/* Navigate to Login/Register Page */}
          <button 
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate("/auth")}
          >
            Login/Register
          </button>

          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition duration-300"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-black" />}
          </button>
        </div>
      </div>

      {showSettings && <SettingsPage onClose={() => setShowSettings(false)} />}
    </>
  );
};

export default Navbar;
