import React, { useState, useEffect } from 'react';
import { FaTimes, FaMoon, FaSun } from 'react-icons/fa';

const SettingsPage = ({ onClose }) => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const [notifications, setNotifications] = useState(true);
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [password, setPassword] = useState("");

  // Apply dark mode changes
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

  const handleSave = () => {
    alert("Settings Saved!");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <img src="https://via.placeholder.com/100" alt="Company Logo" className="w-16 h-16 rounded-full" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h2>
          <button onClick={onClose} className="text-gray-600 dark:text-gray-300 hover:text-red-500">
            <FaTimes size={20} />
          </button>
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition duration-300"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-white" />}
          </button>
        </div>

        {/* Profile Settings */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1">Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1">Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Change Password */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1">New Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            placeholder="Enter new password"
          />
        </div>

        {/* Notifications Toggle */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-700 dark:text-gray-300">Enable Notifications</span>
          <input 
            type="checkbox" 
            checked={notifications} 
            onChange={() => setNotifications(!notifications)}
            className="cursor-pointer"
          />
        </div>

        {/* Save and Close Buttons */}
        <div className="flex justify-end space-x-4">
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            onClick={handleSave}
          >
            Save
          </button>
          <button 
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
