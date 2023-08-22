import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-xl font-semibold">Expense Calculator</h1>
      </header>
      <main className="flex-1 p-4">{children}</main>
      <footer className="bg-gray-200 text-center p-2">
        &copy; {new Date().getFullYear()} Expense Calculator. All rights reserved.
      </footer>
    </div>
  );
};

export default MainLayout;
