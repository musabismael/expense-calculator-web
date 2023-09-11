// components/Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-gray-200 p-4 w-1/4">
      <ul className="space-y-2">
        <li>
          <a href="#" className="text-blue-500 hover:underline">Dashboard</a>
        </li>
        <li>
          <a href="#" className="text-blue-500 hover:underline">Expenses</a>
        </li>
        <li>
          <a href="#" className="text-blue-500 hover:underline">Reports</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
