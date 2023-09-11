// pages/index.js
import React from 'react';
import DashboardContent from '../components/dashboard/DashboardContent';

const DashboardPage = ({ username }) => {
  return (
    <div className="flex h-screen">
    <Sidebar />
    <div className="flex-1 overflow-y-auto">
      <Navbar />
      <DashboardContent currentUser={username} />
      </div>
      </div>
  );
};

export default DashboardPage;
