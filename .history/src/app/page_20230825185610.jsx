import React from "react";
import Home from "../pages/home";
import Dashboard from "../pages/dashboard";

import { useAuth } from "../components/context/AuthContext";

const page = () => {
  return (
    <html>
      <body>
      {isLoggedIn ? <Home /> : <dashboard/>}

      </body>
    </html>
  );
};

export default page;
