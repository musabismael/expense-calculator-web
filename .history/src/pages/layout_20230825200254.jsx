// components/MainLayout.js

import "../styles/globals.css";
import React from "react";
import Navbar from "../components/dashboard/Navbar";
import Sidebar from "../components/dashboard/Sidebar";
import { useAuth } from "../components/context/AuthContext";

const MainLayout = ({ children }) => {

  return (
    <div className="flex h-screen">
     <Sidebar /> : ""}
      <div className="flex-1 overflow-y-auto">
        {isLoggedIn ? <Navbar /> : ""}
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
