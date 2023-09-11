// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="/logo.png" // Replace with your logo's image path
            alt="Logo"
            className="w-8 h-8"
          />
          <div className="text-white text-xl font-bold">Expense Calculator</div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-white">John Doe</div>
          <img
            src="/profile.jpg" // Replace with the path to your profile image
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <button className="text-white hover:underline">Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
