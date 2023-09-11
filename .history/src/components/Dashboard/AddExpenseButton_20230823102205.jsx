import React from 'react';

function AddExpenseButton({ onClick }) {
  return (
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
      onClick={onClick}
    >
      Add  Expense
    </button>
  );
}

export default AddExpenseButton;
