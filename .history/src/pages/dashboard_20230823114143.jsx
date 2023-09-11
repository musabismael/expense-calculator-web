import React from "react";
import Navbar from "../components/dashboard/Navbar";
import ExpenseList from "../components/dashboard/ExpenseList";

const Dashboard = () => {
  return (
    <div className="flex">
      <ExpenseList />
    </div>
  );
};

export default Dashboard;
