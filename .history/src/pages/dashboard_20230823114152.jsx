import React from "react";
import ExpenseList from "../components/dashboard/ExpenseList";

const Dashboard = ({cl}) => {
  return (
    <div className="flex">
      <ExpenseList />
    </div>
  );
};

export default Dashboard;
