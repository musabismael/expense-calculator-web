import EditExpenseButton from './EditExpenseButton';
import DeleteExpenseButton from './DeleteExpenseButton';

function ExpenseList({ expenses, selectedCategory, searchQuery }) {
  const filteredExpenses = expenses.filter((expense) => {
    const categoryMatch = selectedCategory === 'All' || expense.category === selectedCategory;
    const searchMatch = expense.description.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold mb-2">Expense List</h3>
      {filteredExpenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        <ul className="list-disc pl-6">
          {filteredExpenses.map((expense) => (
            <li key={expense.id} className="mb-2">
              {expense.description}: ${expense.amount}
              <div className="inline-block ml-2">
                <EditExpenseButton
                  onEdit={() => handleEditExpense(expense.id)} // Implement this function
                />
                <DeleteExpenseButton
                  onDelete={() => handleDeleteExpense(expense.id)} // Implement this function
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;
