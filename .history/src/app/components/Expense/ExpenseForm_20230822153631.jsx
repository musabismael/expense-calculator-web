import { useState } from 'react';
import { createExpense } from '../../api/expenses'; // Import your API functions

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
    <form className="bg-white p-4 rounded shadow" onSubmit={handleSubmit}>
      <input
        className="block mb-2 w-full p-2 border rounded"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        className="block mb-2 w-full p-2 border rounded"
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        className="block mb-2 w-full p-2 border rounded"
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className="block mb-2 w-full p-2 border rounded"
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button className="w-full bg-blue-500 text-white p-2 rounded" type="submit">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
