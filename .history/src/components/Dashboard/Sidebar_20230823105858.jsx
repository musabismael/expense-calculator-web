// components/Dashboard/Sidebar.js
import React from "react";

function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-lg font-semibold mb-4">Menu</h2>
      {/* Add navigation links */}
      <ul>
        <li className="mb-2">
          <a href="#" className="hover:text-gray-300">Expenses</a>
        </li>
        {/* Add other navigation links */}
      </ul>
    </div>
  );
}

export default Sidebar;
