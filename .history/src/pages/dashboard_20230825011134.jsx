// pages/index.js
import React from 'react';
import DashboardContent from '../components/dashboard/DashboardContent';

const DashboardPage = ({ username }) => {
  return (
      <DashboardContent username={username} />
  );
};

export default DashboardPage;
