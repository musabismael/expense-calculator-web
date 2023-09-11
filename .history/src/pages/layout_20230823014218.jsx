// components/MainLayout.js

import '../styles/globals.css'
import React from 'react';
import Navbar from '../components/Dashboard/Navbar';
import Footer from '../components/Dashboard/Footer';

const MainLayout = ({ children }) => {
  return (
    
    <div className="flex flex-col min-h-screen">
      <di className="flex-grow">{children}</di>
    </div>
  );
};

export default MainLayout;
