// pages/index.js
import React from "react";
import DashboardContent from "../components/dashboard/DashboardContent";
import { useAuth } from '../components/context/AuthContext';

const DashboardPage = ({ username }) => {
  const { user } = useAuth(); // Access the user data

  return <DashboardContent currentUser={user} />;
};

export default DashboardPage;
