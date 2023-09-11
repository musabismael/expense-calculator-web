// pages/index.js
"use client";

import { useEffect } from "react";
import { isTokenValid } from "../utils/tokenUtils.js";
import Dashboard from "./dashboard";
import Home from "./home";

export default function Main() {
  useEffect(() => {
    const token = localStorage.getItem("authToken"); // Fetch token from storage

    if (token) {
      const tokenIsValid = isTokenValid(token);

      if (tokenIsValid) {
        <Dashboard />;
      } else {
        <Home />;
      }
    } else {
      <Home />;
    }
  }, []);

  return <div><Home/></div>;
}
