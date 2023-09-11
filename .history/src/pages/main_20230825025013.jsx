// pages/index.js
"use client";

import { useEffect } from "react";
import { isTokenValid } from "../utils/tokenUtils.js";
import 
export default function Main() {

  useEffect(() => {
    const token = localStorage.getItem("authToken"); // Fetch token from storage

    if (token) {
      const tokenIsValid = isTokenValid(token);

      if (tokenIsValid) {
        <Dash
        router.push("/dashboard"); // Redirect to dashboard if token is valid
      } else {
        router.push("/index"); // Redirect to login if token is invalid
      }
    } else {
      router.push("/index"); // Redirect to login if no token is found
    }
  }, []);

  return <div>Checking token and redirecting...</div>;
}
