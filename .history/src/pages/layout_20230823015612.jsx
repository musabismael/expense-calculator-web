// components/MainLayout.js

import '../styles/globals.css'
import React from 'react';
import Navbar from '../components/Dashboard/Navbar';
import Footer from '../components/Dashboard/Footer';

const MainLayout = ({ children }) => {
  return (
    <>
    <Navbar />
      <main>{children}</main>
      <Footer />
    </>  
    );
};

export default MainLayout;
