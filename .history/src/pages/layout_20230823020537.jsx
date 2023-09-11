// components/MainLayout.js

import "../styles/globals.css";
import React from "react";
import Navbar from "../components/Dashboard/Navbar";
import Footer from "../components/Dashboard/Footer";
import Head from 'next/head';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
    <Head>
      <title>{title}</title>
      {/* Add other meta tags, links, and stylesheets */}
    </Head>

    <header className="bg-white shadow">
      {/* Your header content */}
      <Navbar/>
    </header>

    <main className="flex-grow container mx-auto px-4 py-8">
      {children}
    </main>

    <footer className="bg-white shadow mt-8 py-4">
      {/* Your footer content */}
      <Footer
    </footer>
  </div>

  );
};

export default MainLayout;
