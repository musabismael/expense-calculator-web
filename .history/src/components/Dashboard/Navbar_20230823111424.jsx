// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-xl font-bold">Expense Calculator</div>
        <div className="flex items-center">
          <div className="mr-4 text-white">John Doe</div>
          <img
            src="/profile.jpg" // Replace with the path to your profile image
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
