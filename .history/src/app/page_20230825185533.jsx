import React from "react";
import Home from "../pages/home";
import { useAuth } from "../components/context/AuthContext";

const page = () => {
  return (
    <html>
      <body>
      {isLoggedIn ? <Home /> : ""}

        < Home />
      </body>
    </html>
  );
};

export default page;
