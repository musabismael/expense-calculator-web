// components/MainLayout.js

import '../styles/globals.css'
import React from 'react';
import Navbar from '../components/Dashboard/Navbar';
import Footer from '../components/Dashboard/Footer';

const MainLayout = ({ children }) => {
  return (
    
    <div className="flex flex-col min-h-screen">
      <main   className="p-4 m-2" >{children}</main>
    </div>
  );
};

export default MainLayout;
