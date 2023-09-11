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
          <Link href="/expenses" passHref>
            <a href="/expenses" className="text-blue-500 hover:underline">Expenses</a>
          </Link>
        </li>
        <li>
          <Link href="/reports" passHref>
            <a className="text-blue-500 hover:underline">Reports</a>
          </Link>
        </li>
        {/* Add more navigation links here */}
      </ul>
    </aside>
  );
};

export default Sidebar;
