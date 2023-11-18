import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./context/ContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
