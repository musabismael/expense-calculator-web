const handleEditExpense = (expenseId) => {
    // Find the expense to be edited based on the expenseId
    const expenseToEdit = expenses.find((expense) => expense.id === expenseId);
  
    // Now you can implement a modal or a form to allow the user to edit the expense details
    // For example, you can use a state to control the visibility of the edit modal and another state
    // to store the edited expense data.
  
    // Here's a simplified example of how you might do it:
    
    // Set up a state to manage the edit modal visibility and the edited expense data
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editedExpense, setEditedExpense] = useState(expenseToEdit);
  
    // Open the edit modal and populate it with the expense data
    const openEditModal = () => {
      setIsEditModalOpen(true);
      setEditedExpense(expenseToEdit);
    };
  
    // Update the edited expense data
    const handleEditExpenseDataChange = (e) => {
      const { name, value } = e.target;
      setEditedExpense((prevExpense) => ({
        ...prevExpense,
        [name]: value,
      }));
    };
  
    // Save the edited expense
    const saveEditedExpense = () => {
      // Implement logic to save the edited expense data
      // For example, you might send a request to your backend API to update the expense
  
      // After successfully updating the expense, close the edit modal
      setIsEditModalOpen(false);
    };
  
    // Render the component and the edit modal
    return (
      <div>
        {/* Other components */}
        <ExpenseList
          expenses={filteredExpenses}
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
          startDate={selectedStartDate}
          endDate={selectedEndDate}
          onEditExpense={handleEditExpense}
          onDeleteExpense={handleDeleteExpense}
        />
  
        {/* Edit Modal */}
        {isEditModalOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-md">
              <h2 className="text-xl font-semibold mb-2">Edit Expense</h2>
              <label className="block mb-2">
                Description:
                <input
                  type="text"
                  name="description"
                  value={editedExpense.description}
                  onChange={handleEditExpenseDataChange}
                  className="border border-gray-300 rounded-md py-2 px-4 w-full"
                />
              </label>
              <label className="block mb-2">
                Amount:
                <input
                  type="number"
                  name="amount"
                  value={editedExpense.amount}
                  onChange={handleEditExpenseDataChange}
                  className="border border-gray-300 rounded-md py-2 px-4 w-full"
                />
              </label>
              {/* Add other input fields as needed */}
              <div className="flex justify-end">
                <button
                  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring"
                  onClick={saveEditedExpense}
                >
                  Save
                </button>
                <button
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md ml-2 hover:bg-gray-400 focus:outline-none focus:ring"
                  onClick={() => setIsEditModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  