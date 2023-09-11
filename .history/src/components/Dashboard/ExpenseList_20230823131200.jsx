// components/ExpenseList.js
import React, { useState } from 'react';

const ITEMS_PER_PAGE = 5; // Number of expenses per page

const ExpenseList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Groceries', amount: 50, date: '2023-08-01', category: 'Food' },
    { id: 2, description: 'Dinner', amount: 30, date: '2023-08-02', category: 'Food' },
    // ... Add more initial expenses as needed
  ]);

  const [newExpense, setNewExpense] = useState({ description: '', amount: '', date: '', category: '' });
  const [editingExpenseId, setEditingExpenseId] = useState(null);
  const [filter, setFilter] = useState('');

  const handleDescriptionChange = (e) => {
    setNewExpense({ ...newExpense, description: e.target.value });
  };

  const handleAmountChange = (e) => {
    setNewExpense({ ...newExpense, amount: e.target.value });
  };

  const handleDateChange = (e) => {
    setNewExpense({ ...newExpense, date: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setNewExpense({ ...newExpense, category: e.target.value });
  };

  const handleAddExpense = () => {
    if (newExpense.description && newExpense.amount && newExpense.date && newExpense.category) {
      setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }]);
      setNewExpense({ description: '', amount: '', date: '', category: '' });
    }
  };

  const handleEditExpense = (expense) => {
    setEditingExpenseId(expense.id);
    setNewExpense({ description: expense.description, amount: expense.amount, date: expense.date, category: expense.category });
  };

  const handleUpdateExpense = () => {
    const updatedExpenses = expenses.map((expense) =>
      expense.id === editingExpenseId
        ? { ...expense, description: newExpense.description, amount: newExpense.amount, date: newExpense.date, category: newExpense.category }
        : expense
    );
    setExpenses(updatedExpenses);
    setEditingExpenseId(null);
    setNewExpense({ description: '', amount: '', date: '', category: '' });
  };

  const handleDeleteExpense = (expenseId) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== expenseId);
    setExpenses(updatedExpenses);
  };

  const calculateTotal = () => {
    const total = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);
    return total.toFixed(2);
  };
  

  const handleSortByAmount = () => {
    const sortedExpenses = [...expenses].sort((a, b) => a.amount - b.amount);
    setExpenses(sortedExpenses);
  };

  const totalPages = Math.ceil(expenses.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(filter.toLowerCase()) ||
    expense.category.toLowerCase().includes(filter.toLowerCase()) ||
    expense.date.includes(filter)
  );
  const currentExpenses = filteredExpenses.slice(startIndex, endIndex);

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
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by description, category, or date"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded-md w-full"
        />
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentExpenses.map((expense) => (
            <tr key={expense.id}>
              <td className="border px-4 py-2">{expense.id}</td>
              <td className="border px-4 py-2">
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
                {editingExpenseId === expense.id ? (
                  <input
                    type="date"
                    value={newExpense.date}
                    onChange={handleDateChange}
                    className="p-2 border rounded-md w-full"
                  />
                ) : (
                  expense.date
                )}
              </td>
              <td className="border px-4 py-2">
                {editingExpenseId === expense.id ? (
                  <input
                    type="text"
                    value={newExpense.category}
                    onChange={handleCategoryChange}
                    className="p-2 border rounded-md w-full"
                  />
                ) : (
                  expense.category
                )}
              </td>
              <td className="border px-4 py-2">
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

      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`py-1 px-2 mx-1 rounded-md ${
              currentPage === index + 1
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

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
        <input
          type="date"
          placeholder="Date"
          value={newExpense.date}
          onChange={handleDateChange}
          className="p-2 border rounded-md w-full mb-2"
        />
        <input
          type="text"
          placeholder="Category"
          value={newExpense.category}
          onChange={handleCategoryChange}
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
