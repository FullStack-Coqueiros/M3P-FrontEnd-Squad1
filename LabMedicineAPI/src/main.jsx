import React from "react";
import ReactDOM from "react-dom/client";

import { AppRoutes } from './routes/AppRoutes';
import { HeaderProvider } from "./context/HeaderContext";
import { AuthProvider } from "./context/AuthContext";
import { GlobalStyle } from "../Global.Style";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <GlobalStyle/>
      <AuthProvider>
        <HeaderProvider>
            <AppRoutes/>
        </HeaderProvider>
        </AuthProvider>
  </React.StrictMode>
);
