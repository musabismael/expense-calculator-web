// pages/index.js
import React from "react";
import DashboardContent from "../components/dashboard/DashboardContent";

const DashboardPage = ({ username }) => {
  const { user, logout } = useAuth(); // Access the user data

  return <DashboardContent currentUser={username} />;
};

export default DashboardPage;
