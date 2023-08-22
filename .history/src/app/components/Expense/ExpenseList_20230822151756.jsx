import { useState, useEffect } from 'react';
import { fetchExpenses } from '../api/expenses'; // Import your API functions

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const loadExpenses = async () => {
      try {
        const expensesData = await fetchExpenses(); // Fetch expenses from the API
        setExpenses(expensesData);
      } catch (error) {
        // Handle error (show error message, etc.)
      }
    };

    loadExpenses();
  }, []);

  return (
    <div>
      <h2>Expense List</h2>
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
