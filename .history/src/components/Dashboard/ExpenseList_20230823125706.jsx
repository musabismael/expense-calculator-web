// components/ExpenseList.js
import React, { useState } from 'react';

const ITEMS_PER_PAGE = 5; // Number of expenses per page

const ExpenseList = () => {
  const [currentPage, setCurrentPage] = useState(1);
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

  const handleAddExpense = () => {
    if (newExpense.description && newExpense.amount) {
      setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }]);
      setNewExpense({ description: '', amount: '' });
    }
  };

  // ... Other functions from previous examples

  const totalPages = Math.ceil(expenses.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentExpenses = expenses.slice(startIndex, endIndex);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Expense List</h2>
      <div className="flex mb-4">
        {/* Sorting and total calculation */}
      </div>
      <table className="table-auto w-full">
        <thead>
          {/* Table header cells */}
        </thead>
        <tbody>
          {currentExpenses.map((expense) => (
            <tr key={expense.id}>
              {/* Table cells */}
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

      {/* Add Expense form */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Add Expense</h2>
        {/* Input fields and buttons */}
      </div>
    </div>
  );
};

export default ExpenseList;
