// components/ExpenseList.js
import React, { useState } from 'react';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Groceries', amount: 50 },
    { id: 2, description: 'Dinner', amount: 30 },
    // ... Add more initial expenses as needed
  ]);

  const [newExpense, setNewExpense] = useState({ description: '', amount: '' });

  const handleDescriptionChange = (e) => {
    setNewExpense({ ...newExpense, description: e.target.value });
  };

  const handleAmountChange = (e) => {
    setNewExpense({ ...newExpense, amount: e.target.value });
  };

  const handleAddExpense = () => {
    if (newExpense.description && newExpense.amount) {
      setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }]);
      setNewExpense({ description: '', amount: '' });
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Expense List</h1>
      <table className="table-auto w-full">
        {/* Table content */}
      </table>
      
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Add Expense</h2>
        <input
          type="text"
          placeholder="Description"
          value={newExpense.description}
          onChange={handleDescriptionChange}
          className="p-2 border rounded-md w-full mb-2"
        />
        <input
          type="number"
          placeholder="Amount"
          value={newExpense.amount}
          onChange={handleAmountChange}
          className="p-2 border rounded-md w-full mb-2"
        />
        <button
          onClick={handleAddExpense}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default ExpenseList;
