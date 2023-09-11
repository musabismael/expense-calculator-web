// components/MainLayout.js

import "../styles/globals.css";
import React from "react";


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
