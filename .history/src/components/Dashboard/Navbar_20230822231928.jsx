// components/Navbar.js

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Expense Tracker</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <Link href="/" className="text-white hover:text-gray-300">Home</Link>
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              <a className="text-white hover:text-gray-300">Dashboard</a>
            </Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
