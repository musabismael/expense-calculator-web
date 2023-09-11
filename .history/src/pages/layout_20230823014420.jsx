// components/MainLayout.js

import '../styles/globals.css'
import React from 'react';
import Navbar from '../components/Dashboard/Navbar';
import Footer from '../components/Dashboard/Footer';

const MainLayout = ({ children }) => {
  return (
    
    <div className='bg-red-500'>
      <main className='bg-red-500' >{children}</main>
    </div>
  );
};

export default MainLayout;
