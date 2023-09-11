'use Client'
import { useState } from "react";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import ExpenseSummary from "../components/Dashboard/ExpenseSummary";
import ExpenseList from "../components/Dashboard/ExpenseList";
import AddExpenseButton from "../components/Dashboard/AddExpenseButton";
import ExpenseFilter from "../components/Dashboard/ExpenseFilter";
import ExpenseSearch from "../components/Dashboard/ExpenseSearch";
import ExpenseDateRangePicker from "../components/Dashboard/ExpenseDateRangePicker";
import ExpenseDateRangeReport from "../components/Dashboard/ExpenseDateRangeReport"; // Placeholder component

function DashboardPage() {
  const userName = "John Doe"; // Replace with the user's actual name
  const totalExpenses = 15; // Replace with the user's total expenses
  const totalCategories = 5; // Replace with the user's total categories

  const expenses = [
    {
      id: 1,
      description: "Groceries",
      amount: 50,
      category: "Food",
      date: "2023-08-10",
    },
    {
      id: 2,
      description: "Transportation",
      amount: 30,
      category: "Transport",
      date: "2023-08-15",
    },
    {
      id: 3,
      description: "Entertainment",
      amount: 20,
      category: "Entertainment",
      date: "2023-08-20",
    },
    // Add more expenses as needed
  ];

  const categories = ["All", "Food", "Transport", "Entertainment"]; // Replace with your actual categories

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
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
  const handleDeleteExpense = (expenseId) => {
    // Implement logic to delete the expense with the given expenseId
    // For example, you might send a request to your backend API to delete the expense

    // After successfully deleting the expense, update the list of expenses
    const updatedExpenses = expenses.filter(
      (expense) => expense.id !== expenseId
    );
    setExpenses(updatedExpenses);
  };

  // ...

  // <ExpenseList
  //   expenses={filteredExpenses}
  //   selectedCategory={selectedCategory}
  //   searchQuery={searchQuery}
  //   startDate={selectedStartDate}
  //   endDate={selectedEndDate}
  //   onEditExpense={handleEditExpense}
  //   onDeleteExpense={handleDeleteExpense}
  // />;

  const handleDateRangeChange = (type, date) => {
    if (type === "start") {
      setSelectedStartDate(date);
    } else {
      setSelectedEndDate(date);
    }
  };

  const handleGeneratePDF = () => {
    // Implement logic to generate PDF report based on the selected date range
    const pdfContent = (
      // Render PDF content here, similar to the previous examples
      <ExpenseDateRangeReport
        startDate={selectedStartDate}
        endDate={selectedEndDate}
        expenses={filteredExpenses}
      />
    );

    // Generate and display the PDF content
    // This example assumes you have a PDF generator utility or component
    generatePDF(pdfContent);
  };

  // Filter expenses based on selected date range
  const filteredExpenses = expenses.filter((expense) => {
    const dateWithinRange =
      (!selectedStartDate || expense.date >= selectedStartDate) &&
      (!selectedEndDate || expense.date <= selectedEndDate);
    return dateWithinRange;
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 w-1/2">
        <DashboardHeader userName={userName} />
        <ExpenseSummary
          totalExpenses={totalExpenses}
          totalCategories={totalCategories}
        />
        <AddExpenseButton />
        <ExpenseFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <ExpenseSearch onSearch={handleSearch} />
        <ExpenseDateRangePicker
          startDate={selectedStartDate}
          endDate={selectedEndDate}
          onDateRangeChange={handleDateRangeChange}
        />
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring"
          onClick={handleGeneratePDF}
        >
          Generate PDF Report
        </button>
        <ExpenseList
          expenses={filteredExpenses}
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
          startDate={selectedStartDate}
          endDate={selectedEndDate}
          onEditExpense={handleEditExpense} // Implement this function
          onDeleteExpense={handleDeleteExpense} // Implement this function
        />
      </div>
    </div>
  );
}

export default DashboardPage;
