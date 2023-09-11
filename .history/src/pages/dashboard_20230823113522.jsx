
import React from 'react';
import Navbar from '../components/dashboard/Navbar';
import Sidebar from '../components/dashboard/Sidebar';
import ExpenseList from '../components/dashboard/ExpenseList';

const Dashboard = () => {
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

export default Dashboard;
