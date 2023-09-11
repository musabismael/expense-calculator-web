// components/ExpenseList.js
import React, { useState } from 'react';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Groceries', amount: 50 ,date: '2023-08-01' },
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

  const handleAddExpense = () => {
    if (newExpense.description && newExpense.amount) {
      setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }]);
      setNewExpense({ description: '', amount: '' });
    }
  };

  const handleEditExpense = (expense) => {
    setEditingExpenseId(expense.id);
    setNewExpense({ description: expense.description, amount: expense.amount });
  };

  const handleUpdateExpense = () => {
    const updatedExpenses = expenses.map((expense) =>
      expense.id === editingExpenseId
        ? { ...expense, description: newExpense.description, amount: newExpense.amount }
        : expense
    );
    setExpenses(updatedExpenses);
    setEditingExpenseId(null);
    setNewExpense({ description: '', amount: '' });
  };

  const handleDeleteExpense = (expenseId) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== expenseId);
    setExpenses(updatedExpenses);
  };

  const calculateTotal = () => {
    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    return total.toFixed(2);
  };

  const handleSortByAmount = () => {
    const sortedExpenses = [...expenses].sort((a, b) => a.amount - b.amount);
    setExpenses(sortedExpenses);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Expense List</h2>
      <div className="flex mb-4">
        <button
          onClick={handleSortByAmount}
          className="bg-gray-300 text-gray-700 py-1 px-2 rounded-md hover:bg-gray-400 mr-2"
        >
          Sort by Amount
        </button>
        <div className="flex-grow text-right">
          Total: <span className="font-semibold">${calculateTotal()}</span>
        </div>
      </div>
      <table className="table-auto w-full">
        {/* Table header */}
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Actions</th>
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
                {editingExpenseId === expense.id ? (
                  <button
                    onClick={handleUpdateExpense}
                    className="text-green-500 hover:underline mr-2"
                  >
                    Save
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => handleEditExpense(expense)}
                      className="text-blue-500 hover:underline mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteExpense(expense.id)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
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
          onClick={editingExpenseId !== null ? handleUpdateExpense : handleAddExpense}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          {editingExpenseId !== null ? 'Update Expense' : 'Add Expense'}
        </button>
      </div>
    </div>
  );
};

export default ExpenseList;
