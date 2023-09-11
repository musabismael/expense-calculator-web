import '../styles/globals.css';
// components/MainLayout.js

import React from 'react';
import Navbar from '../components/n'; // Your Navbar component
import Footer from './Footer'; // Your Footer component

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
