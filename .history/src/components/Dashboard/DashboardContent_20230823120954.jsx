// pages/index.js
import React from 'react';

const Home = () => {
  const currentUser = 'John Doe'; // Replace with actual user data
  const recentActivity = [
    { id: 1, message: 'Expense "Groceries" added', timestamp: '2 hours ago' },
    { id: 2, message: 'Expense "Dinner" updated', timestamp: '1 day ago' },
    // ... Add more recent activity items
  ];

  return (
      <div className="flex flex-col space-y-4">
        <section className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Welcome, {currentUser}!</h2>
          <p className="text-gray-600">
            Start managing your expenses and staying organized.
          </p>
        </section>

        <section className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
          <ul className="space-y-2">
            {recentActivity.map((activity) => (
              <li key={activity.id} className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm-1-10a1 1 0 112 0v6a1 1 0 11-2 0V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{activity.message}</p>
                  <p className="text-xs text-gray-400">{activity.timestamp}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Other sections */}
      </div>
  );
};

export default DashboardContent;
