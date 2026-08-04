import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

import { AuthProvider } from "./context/AuthContext";
import { CompanyProvider } from "./context/CompanyContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CompanyProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CompanyProvider>
    </AuthProvider>
  </StrictMode>
);