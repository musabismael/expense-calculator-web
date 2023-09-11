// pages/index.js
import React from 'react';
import Layout from '../components/dashboard/';
import DashboardContent from '../components/dashboard/DashboardContent';

const DashboardPage = () => {
  return (
    <Layout>
      <DashboardContent />
    </Layout>
  );
};

export default DashboardPage;
