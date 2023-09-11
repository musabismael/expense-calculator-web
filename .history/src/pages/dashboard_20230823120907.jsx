// pages/index.js
import React from 'react';
import Layout from '../components/Layout';
import DashboardContent from '../components/DashboardContent'; // You can replace this with your actual dashboard content component

const DashboardPage = () => {
  return (
    <Layout>
      <DashboardContent />
    </Layout>
  );
};

export default DashboardPage;
