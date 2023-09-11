import { useState, useEffect } from 'react';
import { fetchExpenses } from '../../api/expenses';
import ExpenseItem from './ExpenseItem'; // Import the ExpenseItem component

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const loadExpenses = async () => {
      try {
        const expensesData = await fetchExpenses(filter);
        setExpenses(expensesData);
      } catch (error) {
        // Handle error (show error message, etc.)
      }
    };

    loadExpenses();
  }, [filter]);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Expense List</h2>
      <input
        className="w-full p-2 border rounded mb-4"
        type="text"
        placeholder="Filter by category or description"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </div>
  );
}

export default ExpenseList;
