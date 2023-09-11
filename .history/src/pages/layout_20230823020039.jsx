// components/MainLayout.js

import React from "react";
import Navbar from "../components/Dashboard/Navbar";
import Footer from "../components/Dashboard/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
