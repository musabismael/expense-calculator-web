// components/ExpenseList.js
import React, { useState } from 'react';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Groceries', amount: 50 },
    { id: 2, description: 'Dinner', amount: 30 },
    // ... Add more initial expenses as needed
  ]);

  // Add your CRUD operations here (Create, Read, Update, Delete)

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Expense List</h1>
      <table className="table-auto w-full">
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
              <td className="border px-4 py-2">{expense.description}</td>
              <td className="border px-4 py-2">${expense.amount}</td>
              <td className="border px-4 py-2">
                {/* Add edit and delete buttons */}
                <button className="text-blue-500 hover:underline mr-2">Edit</button>
                <button className="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Add your form for adding expenses */}
    </div>
  );
};

export default ExpenseList;
