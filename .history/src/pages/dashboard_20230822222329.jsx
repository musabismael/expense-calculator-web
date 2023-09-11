import { useState } from 'react';
import DashboardHeader from '../components/Dashboard/DashboardHeader';
import ExpenseSummary from '../components/Dashboard/ExpenseSummary';
import ExpenseList from '../components/Dashboard/ExpenseList';
import AddExpenseButton from '../components/Dashboard/AddExpenseButton';
import ExpenseFilter from '../components/Dashboard/ExpenseFilter';
import ExpenseSearch from '../components/Dashboard/ExpenseSearch';

function DashboardPage() {
  const userName = 'John Doe'; // Replace with the user's actual name
  const totalExpenses = 15; // Replace with the user's total expenses
  const totalCategories = 5; // Replace with the user's total categories

  const expenses = [
    { id: 1, description: 'Groceries', amount: 50, category: 'Food' },
    { id: 2, description: 'Transportation', amount: 30, category: 'Transport' },
    { id: 3, description: 'Entertainment', amount: 20, category: 'Entertainment' },
    // Add more expenses as needed
  ];

  const categories = ['All', 'Food', 'Transport', 'Entertainment']; // Replace with your actual categories

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 w-1/2">
        <DashboardHeader userName={userName} />
        <ExpenseSummary totalExpenses={totalExpenses} totalCategories={totalCategories} />
        <AddExpenseButton />
        <ExpenseFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <ExpenseSearch onSearch={handleSearch} />
        <ExpenseList expenses={expenses} selectedCategory={selectedCategory} searchQuery={searchQuery} />
      </div>
    </div>
  );
}

export default DashboardPage;
