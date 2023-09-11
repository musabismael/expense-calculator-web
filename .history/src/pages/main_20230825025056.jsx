// pages/index.js
"use client";

import { useEffect } from "react";
import { isTokenValid } from "../utils/tokenUtils.js";
import Dashboard from './dashboard'
import Dashboard from './ide'

export default function Main() {

  useEffect(() => {
    const token = localStorage.getItem("authToken"); // Fetch token from storage

    if (token) {
      const tokenIsValid = isTokenValid(token);

      if (tokenIsValid) {
        <Dashboard/>
      } else {
        router.push("/index"); // Redirect to login if token is invalid
      }
    } else {
      router.push("/index"); // Redirect to login if no token is found
    }
  }, []);

  return <div>Checking token and redirecting...</div>;
}
