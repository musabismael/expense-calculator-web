// components/Sidebar.js
import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="bg-blue-900 text-white h-screen w-1/4 p-6">
      <h2 className="text-2xl font-semibold mb-4">Expense Tracker</h2>
      <nav className="space-y-4">
          <Link href="/" className="block py-2 hover:underline">Dashboard</Link>
        <Link href="/expenses">
          <a className="block py-2 hover:underline">Expenses</a>
        </Link>
        {/* Add more navigation links as needed */}
      </nav>
    </div>
  );
};

export default Sidebar;
