import { useState } from "react";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import ExpenseSummary from "../components/Dashboard/ExpenseSummary";
import ExpenseList from "../components/Dashboard/ExpenseList";
import AddExpenseButton from "../components/Dashboard/AddExpenseButton";
import ExpenseFilter from "../components/Dashboard/ExpenseFilter";
import ExpenseSearch from "../components/Dashboard/ExpenseSearch";
import ExpenseMonthlyReport from "../components/Dashboard/ExpenseMonthlyReport";

function DashboardPage() {
  const userName = "John Doe"; // Replace with the user's actual name
  const totalExpenses = 15; // Replace with the user's total expenses
  const totalCategories = 5; // Replace with the user's total categories

  const expenses = [
    { id: 1, description: "Groceries", amount: 50, category: "Food" },
    { id: 2, description: "Transportation", amount: 30, category: "Transport" },
    {
      id: 3,
      description: "Entertainment",
      amount: 20,
      category: "Entertainment",
    },
    // Add more expenses as needed
  ];
  const handleGenerateReport = () => {
    // Implement logic to generate monthly report data
    const monthlyReportData = [
      { month: "January 2023", total: 500 },
      { month: "February 2023", total: 600 },
      // ...add more months
    ];

    // Render PDF
    return <ExpenseMonthlyReport expenses={monthlyReportData} />;
  };
  const categories = ["All", "Food", "Transport", "Entertainment"]; // Replace with your actual categories

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleEditExpense = (expenseId) => {
    // Implement logic to edit the expense with the given ID
    console.log(`Edit expense with ID: ${expenseId}`);
  };

  const handleDeleteExpense = (expenseId) => {
    // Implement logic to delete the expense with the given ID
    console.log(`Delete expense with ID: ${expenseId}`);
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
        <br></br>

        <ExpenseFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <ExpenseSearch onSearch={handleSearch} />
        <br></br>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring"
          onClick={handleGenerateReport}
        >
          Generate Monthly Report (PDF)
        </button>
        <ExpenseList
          expenses={expenses}
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
          onEditExpense={handleEditExpense}
          onDeleteExpense={handleDeleteExpense}
        />
      </div>
    </div>
  );
}

export default DashboardPage;
