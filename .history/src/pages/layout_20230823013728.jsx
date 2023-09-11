// components/MainLayout.js

import '../styles/globals.css'
import React from 'react';
import Navbar from '../components/Dashboard/Navbar';
import Footer from '../components/Dashboard/Footer';

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
            <Navbar />

      <body className={inter.className}>{children}</body>
      <Footer />

    </html>
   
  );
};

export default MainLayout;
