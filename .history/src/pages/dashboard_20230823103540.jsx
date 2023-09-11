import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MainContent from './ ';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
