import React from "react";
import ReactDOM from "react-dom/client";

import { AppRoutes } from "./routes/AppRoutes";
import { GlobalStyle } from "../Global.Style";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <AppRoutes />
  </React.StrictMode>
);
