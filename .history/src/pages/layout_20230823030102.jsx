// components/MainLayout.js

import "../styles/globals.css";
import React from "react";


const MainLayout = ({ children }) => {
  return (
    <div className="">
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
