// components/ExpenseList.js
import React, { useState } from 'react';

const Expenses = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Groceries', amount: 50 },
    { id: 2, description: 'Dinner', amount: 30 },
    // ... Add more initial expenses as needed
  ]);

  const [newExpense, setNewExpense] = useState({ description: '', amount: '' });
  const [editingExpenseId, setEditingExpenseId] = useState(null);

  const handleDescriptionChange = (e) => {
    setNewExpense({ ...newExpense, description: e.target.value });
  };

  const handleAmountChange = (e) => {
    setNewExpense({ ...newExpense, amount: e.target.value });
  };

  // ... (Other functions from previous examples)

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Expense List</h1>
      <table className="table-auto w-full">
        {/* Table header */}
        <thead>
          <tr>
            {/* Table header cells */}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td className="border px-4 py-2">{expense.id}</td>
              {/* Table cells */}
              <td className="border px-4 py-2">
                {/* Editable input for description */}
                {editingExpenseId === expense.id ? (
                  <input
                    type="text"
                    value={newExpense.description}
                    onChange={handleDescriptionChange}
                    className="p-2 border rounded-md w-full"
                  />
                ) : (
                  expense.description
                )}
              </td>
              <td className="border px-4 py-2">
                {/* Editable input for amount */}
                {editingExpenseId === expense.id ? (
                  <input
                    type="number"
                    value={newExpense.amount}
                    onChange={handleAmountChange}
                    className="p-2 border rounded-md w-full"
                  />
                ) : (
                  `$${expense.amount}`
                )}
              </td>
              <td className="border px-4 py-2">
                {/* Actions */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4">
        {/* Add the "Add Expense" form */}
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
          onClick={editingExpenseId !== null ? handleUpdateExpense : handleAddExpense}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          {editingExpenseId !== null ? 'Update Expense' : 'Add Expense'}
        </button>
      </div>
    </div>
  );
};

export default Expenses;
