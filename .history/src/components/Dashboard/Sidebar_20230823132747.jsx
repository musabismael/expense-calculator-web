// components/Sidebar.js
import React from "react";
import Link from "next/link";
import { FaHome, FaDollarSign, FaFire, FaSignOutAlt } from "react-icons/fa"; // Import icons from react-icons library

const Sidebar = () => {
  return (
    <div className="bg-blue-900 text-white h-screen w-1/6 p-6">
      <h2 className="text-2xl font-semibold mb-6">Expense Tracker</h2>
      <nav className="space-y-4">
        <Link href="/Dashboard" className="flex items-center py-2 hover:underline">
          <FaHome className="mr-2" /> Dashboard
        </Link>
        <Link
          href="/expenses"
          className="flex items-center py-2 hover:underline"
        >
          <FaDollarSign className="mr-2" /> Expenses
        </Link>
        <Link
          href="/settings"
          className="flex items-center py-2 hover:underline"
        >
          <FaFire className="mr-2" /> Settings
        </Link>
      </nav>
      <div className="mt-auto">
        <Link href="/logout" className="flex items-center py-2 hover:underline">
          <FaSignOutAlt className="mr-2" /> Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
