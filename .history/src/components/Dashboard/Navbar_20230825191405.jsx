// components/Navbar.js
import React from 'react';
import { useRouter } from 'next/router';
import { l } from "../components/context/AuthContext";

const Navbar = () => {
  const router = useRouter();
  const { logout } = useAuth();


  const handleLogout = async () => {
    await logout();
    // After successful logout, navigate back to the login page
    router.push('/login');
  };
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
          <button
            className="text-white hover:underline"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;