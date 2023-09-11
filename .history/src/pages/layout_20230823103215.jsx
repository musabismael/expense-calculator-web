// components/MainLayout.js

import "../styles/globals.css";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
