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
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedExpense, setEditedExpense] = useState(null);
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
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
  const handleEditExpense = (expenseId) => {
    // Find the expense to be edited based on the expenseId
    const expenseToEdit = expenses.find((expense) => expense.id === expenseId);

    // Open the edit modal and populate it with the expense data
    setEditedExpense(expenseToEdit);
    setIsEditModalOpen(true);
  };
  const handleSaveEdit = (updatedExpense) => {
    // Implement logic to save the updated expense data
    // For example, you might send a request to your backend API to update the expense

    // After successfully updating the expense, close the edit modal
    setEditedExpense(null);
    setIsEditModalOpen(false);

    // Update the list of expenses with the updated expense data
    const updatedExpenses = expenses.map((expense) =>
      expense.id === updatedExpense.id ? updatedExpense : expense
    );
    setExpenses(updatedExpenses);
  };
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

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

  // Placeholder function for generating PDF (replace with actual implementation)
  const generatePDF = (content) => {
    // Implement PDF generation logic here
  };

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
      {isEditModalOpen && editedExpense && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md">
            <h2 className="text-xl font-semibold mb-2">Edit Expense</h2>
            {/* Edit expense form */}
            <label className="block mb-2">
              Description:
              <input
                type="text"
                name="description"
                value={editedExpense.description}
                onChange={(e) =>
                  setEditedExpense((prevExpense) => ({
                    ...prevExpense,
                    description: e.target.value,
                  }))
                }
                className="border border-gray-300 rounded-md py-2 px-4 w-full"
              />
            </label>
            <label className="block mb-2">
              Amount:
              <input
                type="number"
                name="amount"
                value={editedExpense.amount}
                onChange={(e) =>
                  setEditedExpense((prevExpense) => ({
                    ...prevExpense,
                    amount: parseFloat(e.target.value),
                  }))
                }
                className="border border-gray-300 rounded-md py-2 px-4 w-full"
              />
            </label>
            {/* Add other input fields as needed */}
            <div className="flex justify-end">
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring"
                onClick={() => handleSaveEdit(editedExpense)}
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
}

export default DashboardPage;
