import { useState } from 'react';
import { createExpense } from '../api/expenses'; // Import your API functions

function ExpenseForm() {
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createExpense({ date, category, description, amount });
      // Handle successful expense creation (e.g., clear form, refresh expense list)
    } catch (error) {
      // Handle error (show error message, etc.)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
