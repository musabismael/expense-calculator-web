// pages/index.js
import React from 'react';
import Layout from './Layout';
import DashboardContent from '../components/dashboard/';

const DashboardPage = () => {
  return (
    <Layout>
      <DashboardContent />
    </Layout>
  );
};

export default DashboardPage;
