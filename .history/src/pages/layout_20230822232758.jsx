// components/MainLayout.js

import '../styles/globals.css'
import React from 'react';
import Navbar from '../components/Dashboard/Navbar';
import Footer from '../components/Dashboard/Footer';

const MainLayout = ({ children }) => {
  return (
    <>
          <Navbar />
          <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{children}</main>
    </div>
          <Footer />

    </>
   >
  );
};

export default MainLayout;
