// pages/expenses.js
import React from 'react';
import ExpenseList from '../components/dashboard/ExpenseList';

const ExpensesPage = () => {
  return (
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Manage Expenses</h1>
        <ExpenseList />
      </div>
    </Layout>
  );
};

export default ExpensesPage;
