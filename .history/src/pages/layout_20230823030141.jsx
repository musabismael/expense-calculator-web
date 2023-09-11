// components/MainLayout.js

import "../styles/globals.css";
import React from "react";


const MainLayout = ({ children }) => {
  return (
    <div className="bg-red-100 ">
      <div >{children}</div>
    </div>
  );
};

export default MainLayout;
