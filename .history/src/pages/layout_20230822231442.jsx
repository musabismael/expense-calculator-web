// components/MainLayout.js

import React from 'react';
import Navbar from './Navbar'; // Your Navbar component
import Footer from './Footer'; // Your Footer component

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
