// components/ExpenseList.js
import React, { useState } from 'react';

export default  ExpenseList = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Groceries', amount: 50 },
    { id: 2, description: 'Dinner', amount: 30 },
    // ... Add more initial expenses as needed
  ]);

  const [newExpense, setNewExpense] = useState({
    description: '',
    amount: 0,
  });

  const handleAddExpense = () => {
    // Implement your logic to add a new expense to the expenses state
    // Make sure to assign a unique ID to the new expense
  };

  const handleEditExpense = (expenseId) => {
    // Implement your logic to edit an existing expense
  };

  const handleDeleteExpense = (expenseId) => {
    // Implement your logic to delete an expense from the expenses state
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Expense List</h1>
      <table className="table-auto w-full">
        {/* ... Table header */}
        <tbody>
          {/* ... Table rows */}
        </tbody>
      </table>

      {/* Form for adding expenses */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Add Expense</h2>
        <div className="flex">
          <input
            type="text"
            placeholder="Description"
            className="px-3 py-2 border rounded-l w-1/2"
            value={newExpense.description}
            onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
          />
          <input
            type="number"
            placeholder="Amount"
            className="px-3 py-2 border rounded-r w-1/4"
            value={newExpense.amount}
            onChange={(e) => setNewExpense({ ...newExpense, amount: parseFloat(e.target.value) })}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleAddExpense}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

