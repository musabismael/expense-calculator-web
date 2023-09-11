import { useState } from "react";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import ExpenseSummary from "../components/Dashboard/ExpenseSummary";
import ExpenseList from "../components/Dashboard/ExpenseList";
import AddExpenseButton from "../components/Dashboard/AddExpenseButton";
import ExpenseFilter from "../components/Dashboard/ExpenseFilter";
import ExpenseSearch from "../components/Dashboard/ExpenseSearch";
import ExpenseDateRangePicker from "../components/Dashboard/ExpenseDateRangePicker";
import ExpenseDateRangeReport from "../components/Dashboard/ExpenseDateRangeReport"; // Placeholder component
import Sidebar from '../components/Dashboard/Sidebar'; // Import the Sidebar component

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

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex">
    {isSidebarOpen && (
      <Sidebar onAddExpense={handleAddExpense} onGeneratePDF={handleGeneratePDF} />
    )}
    <div className="flex-1 p-8 bg-gray-100">
    <div className="flex flex-col items-center p-8 justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg  px-8 py-6 w-1/2">
        <DashboardHeader userName={userName} />
        <ExpenseSummary
          totalExpenses={totalExpenses}
          totalCategories={totalCategories}
        />
        <br></br>
        <AddExpenseButton onClick={() => handleAddExpense()} />
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
        <br></br>
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
      {isAddModalOpen && (
  <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
    <div className="bg-white p-4 rounded-md">
      {/* Add expense form */}
      {/* ... */}
      <div className="flex justify-end mt-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
          onClick={handleAddExpenseSubmit} // Implement this function to save the expense
        >
          Add Expense
        </button>
        <button
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md ml-2 hover:bg-gray-400 focus:outline-none focus:ring"
          onClick={() => setIsAddModalOpen(false)}
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
