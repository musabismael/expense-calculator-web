// components/Sidebar.js
import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="bg-gray-200 p-4 w-1/4">
      <ul className="space-y-2">
        <li>
            <Link href="/" className="text-blue-500 hover:underline">Dashboard</Link>
        </li>
        <li>
            <Link href="/expenses" className="text-blue-500 hover:underline">Expenses</Link>
        </li>
        <li>
            <Link href="/reports"  className="text-blue-500 hover:underline">Reports</Link>
        </li>
        <li>
          <Link href="/categories" passHref>
            <Link href="/categories" className="text-blue-500 hover:underline">Categories</Link>
          </Link>
        </li>
        <li>
          <Link href="/settings" passHref>
            <a className="text-blue-500 hover:underline">Settings</a>
          </Link>
        </li>
        {/* Add more navigation links here */}
      </ul>
    </aside>
  );
};

export default Sidebar;
