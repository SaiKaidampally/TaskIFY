import React from 'react';
import { FaBars, FaSearch, FaShare, FaCog, FaBell } from 'react-icons/fa'; // Importing the necessary icons

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center space-x-4">
        <h1 className="text-lg font-bold">PRO-MAN</h1>
      </div>
      <div className="flex space-x-4">
        
        
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" aria-label="Search">
          <FaSearch />
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" aria-label="Share">
          <FaShare />
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" aria-label="Settings">
          <FaCog />
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" aria-label="Notifications">
          <FaBell />
        </button>
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" aria-label="Login">
          Login/Register
        </button>
        <button onClick={toggleSidebar} className="p-2">

          <FaBars aria-label="Toggle Sidebar" /> {/* Toggle button for sidebar */}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
