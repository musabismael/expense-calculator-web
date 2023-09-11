// components/MainLayout.js
import { createContext, useContext, useState } from "react";

import "../styles/globals.css";
import React from "react";
import Navbar from "../components/dashboard/Navbar";
import Sidebar from "../components/dashboard/Sidebar";
const AuthContext = createContext();

const MainLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = async (email, password) => {
    try {
      // Simulate an API call for authentication
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setIsLoggedIn(true);
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const logout = async () => {
    try {
      // Simulate an API call to log the user out
      const response = await fetch('/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // You might need to include any authentication tokens or session information
        // in the headers or request body for proper logout handling.
      });

      if (response.ok) {
        // Clear any authentication tokens, cookies, or session data on the client side
        // For example, remove a token from local storage or clear a session cookie.
        // Then, set isLoggedIn to false.
        clearAuthData(); // Implement this function to clear client-side auth data
        setIsLoggedIn(false);
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
     
          <main className="p-4">{children}</main>
        </div>
      </div>
    </AuthContext.Provider>
  );
};

export default MainLayout;
