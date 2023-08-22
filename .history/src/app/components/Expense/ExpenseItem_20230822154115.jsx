function ExpenseItem({ expense }) {
  return (
    <div className="bg-white p-4 mb-4 rounded shadow">
      <p className="text-gray-600">Date: {expense.date}</p>
      <p className="text-gray-600">Category: {expense.category}</p>
      <p className="text-gray-600">Amount: ${expense.amount}</p>
      <p className="text-gray-600">Description: {expense.description}</p>
    </div>
  );
}

export default ExpenseItem;
