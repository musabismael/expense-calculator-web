import React from 'react';

const pageLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
     
      <main className="flex-1 p-4">{children}</main>
      <footer className="bg-gray-200 text-center p-2">
        &copy; {new Date().getFullYear()} Expense Calculator. All rights reserved.
      </footer>
      
    </div>
  );
};

export default pageLayout;
