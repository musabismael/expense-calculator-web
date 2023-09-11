import { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar"; // Import your Sidebar component
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import ExpenseSummary from "../components/Dashboard/ExpenseSummary";
import ExpenseList from "../components/Dashboard/ExpenseList";
import AddExpenseButton from "../components/Dashboard/AddExpenseButton";
import ExpenseFilter from "../components/Dashboard/ExpenseFilter";
import ExpenseSearch from "../components/Dashboard/ExpenseSearch";
import ExpenseDateRangePicker from "../components/Dashboard/ExpenseDateRangePicker";

function DashboardPage() {
  const userName = "John Doe"; // Replace with the user's actual name

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
    // ... (delete expense logic)
  };
  const handleEditExpense = (expenseId) => {
    // ... (edit expense logic)
  };
  const handleSaveEdit = (updatedExpense) => {
    // ... (save edit logic)
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
    // ... (generate PDF logic)
  };
  // ... (rest of the code)

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 p-8">
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
          onEditExpense={handleEditExpense}
          onDeleteExpense={handleDeleteExpense}
        />
      </div>

      {isEditModalOpen && editedExpense && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          {/* ... (edit modal code) */}
        </div>
      )}
    </div>
  );
}

export default DashboardPage;
import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/dasboard/';
import ExpenseList from '../components/ExpenseList';

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <ExpenseList />
      </div>
    </div>
  );
};

export default Home;
