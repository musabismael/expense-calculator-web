// components/MainLayout.js
import { createContext, useContext, useState } from "react";

import "../styles/globals.css";
import React from "react";
import Navbar from "../components/dashboard/Navbar";
import Sidebar from "../components/dashboard/Sidebar";
const AuthContext = createContext();

const MainLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = () => {
    // Logic to perform login and set isLoggedIn to true
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Logic to perform logout and set isLoggedIn to false
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 overflow-y-auto">
          <Navbar />
          <main className="p-4">{children}</main>
        </div>
      </div>
    </AuthContext.Provider>
  );
};

export default MainLayout;
