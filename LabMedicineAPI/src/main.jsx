import React from "react";
import ReactDOM from "react-dom/client";

import { AppRoutes } from './routes/AppRoutes';
import { HeaderProvider } from "./context/HeaderContext";
import { AuthProvider } from "./Context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HeaderProvider>
      <AuthProvider>
        <AppRoutes/>
      </AuthProvider>
    </HeaderProvider>
  </React.StrictMode>
);
