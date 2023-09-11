// components/Sidebar.js
import React from 'react';
import Link from 'next/link';
import { FiHome, FiDollarSign, FiSettings, FiLogOut } from 'react-icons/fi'; // Import icons from react-icons library

const Sidebar = () => {
  return (
    <div className="bg-blue-900 text-white h-screen w-1/4 p-6">
      <h2 className="text-2xl font-semibold mb-6">Expense Tracker</h2>
      <nav className="space-y-4">
        <Link href="/">
          <a className="flex items-center py-2 hover:underline">
            <FiHome className="mr-2" /> Dashboard
          </a>
        </Link>
        <Link href="/expenses">
          <a className="flex items-center py-2 hover:underline">
            <FiDollarSign className="mr-2" /> Expenses
          </a>
        </Link>
        <Link href="/settings">
          <Link className="flex items-center py-2 hover:underline">
            <FiSettings className="mr-2" /> Settings
          </Link>
        </Link>
      </nav>
      <div className="mt-auto">
        <a href="/logout" className="flex items-center py-2 hover:underline">
          <FiLogOut className="mr-2" /> Logout
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
