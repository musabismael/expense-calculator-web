import React from "react";
import ExpenseList from "../components/dashboard/ExpenseList";

const Dashboard = ({children}) => {
  return (
    <div className="flex">
      {children}
    </div>
  );
};

export default Dashboard;
