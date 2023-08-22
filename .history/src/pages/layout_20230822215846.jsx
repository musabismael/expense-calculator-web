import React from 'react';

const pageLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
     
      <main className="flex-1 p-4">{children}</main>
    
      
    </div>
  );
};

export default pageLayout;
