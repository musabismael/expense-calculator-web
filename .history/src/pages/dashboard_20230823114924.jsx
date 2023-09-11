import React from "react";
import ExpenseList from "../components/dashboard/ExpenseList";

const Dashboard = ({children}) => {
  return (
    <div className="flex">
        <div className="flex flex-col space-y-4">
        <section className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Welcome, {currentUser}!</h2>
          <p className="text-gray-600">
            Start managing your expenses and staying organized.
          </p>
        </section>

        {/* Other sections */}
      </div>
    </div>
  );
};

export default Dashboard;
