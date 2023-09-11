// components/Layout.js
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './globals.css'
const Layout = ({ children }) => {
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

export default Layout;
