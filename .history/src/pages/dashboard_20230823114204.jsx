import React from "react";
import ExpenseList from "../components/dashboard/ExpenseList";

const Dashboard = ({c}) => {
  return (
    <div className="children">
      <ExpenseList />
    </div>
  );
};

export default Dashboard;
