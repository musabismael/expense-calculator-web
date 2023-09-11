// components/MainLayout.js

import "../styles/globals.css";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
    <Sidebar />
    <div className="flex-1 overflow-y-auto">
      <Navbar />
      <main className="p-4">{children}</main>
    </div>
  </div>
  );
};

export default MainLayout;
