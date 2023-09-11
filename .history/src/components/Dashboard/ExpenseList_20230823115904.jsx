// components/ExpenseList.js
import React, { useState } from 'react';

const ExpenseList = () => {
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

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Expense List</h1>
      {/* ... Table content ... */}

      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Add Expense</h2>
        {/* ... Input fields ... */}
        <button
          onClick={editingExpenseId !== null ? handleUpdateExpense : handleAddExpense}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          {editingExpenseId !== null ? 'Update Expense' : 'Add Expense'}
        </button>
      </div>

      {/* ... Expense list ... */}
    </div>
  );
};

export default ExpenseList;
