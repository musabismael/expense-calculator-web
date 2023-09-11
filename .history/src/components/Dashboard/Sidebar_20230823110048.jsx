// components/Dashboard/Sidebar.js
import React from "react";
import Link from "next/link"; // Import Link from Next.js

function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-lg font-semibold mb-4">Menu</h2>
      <ul>
        <li className="mb-2">
          <Link href="/">
            <a className="hover:text-gray-300">Dashboard</a>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/expenses">
            <a className="hover:text-gray-300">Expenses</a>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/reports">
            <a className="hover:text-gray-300">Reports</a>
          </Link>
        </li>
        {/* Add more navigation links */}
      </ul>
    </div>
  );
}

export default Sidebar;
