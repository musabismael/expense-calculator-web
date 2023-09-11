// pages/expenses.js
import React from 'react';
import Layout from '../components/Layout';
#import ExpenseList from '../components/dashboard/ExpenseList';

const ExpensesPage = () => {
  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Manage Expenses</h1>
        <ExpenseList />
      </div>
    </Layout>
  );
};

export default ExpensesPage;
