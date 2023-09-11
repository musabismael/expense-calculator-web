import React from 'react';

function Sidebar({ onAddExpense, onGeneratePDF }) {
  return (
    <div className="bg-gray-800 text-white p-4 h-screen">
      <div className="mb-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
          onClick={onAddExpense}
        >
          Add Expense
        </button>
      </div>
      <div>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring"
          onClick={onGeneratePDF}
        >
          Generate PDF Report
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
