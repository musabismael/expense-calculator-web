import React from "react";
import Home from "../pages/home";
import Dashboard from "../pages/dashboard";
import { useAuth } from "../components/context/AuthContext";

const page = () => {
  const { isLoggedIn } = useAuth();

  return (
    <html>
      <body>
      {isLoggedIn ? <Home /> : <Dashboard/>}

      </body>
    </html>
  );
};

export default page;
