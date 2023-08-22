import { useState, useEffect } from 'react';
import { fetchExpenses } from '../api/expenses'; // Import your API functions

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const loadExpenses = async () => {
      try {
        const expensesData = await fetchExpenses(filter); // Fetch expenses with optional filter
        setExpenses(expensesData);
      } catch (error) {
        // Handle error (show error message, etc.)
      }
    };

    loadExpenses();
  }, [filter]); // Refresh expenses when filter changes

  return (
    <div>
      <h2>Expense List</h2>
      <input
        type="text"
        placeholder="Filter by category or description"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            Date: {expense.date}, Category: {expense.category}, Amount: {expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
