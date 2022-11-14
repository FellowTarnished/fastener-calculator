import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App";
import { CapacityProvider } from "./CapacityContext";
import { AllResultsProvider } from "./CapacityContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CapacityProvider>
      <AllResultsProvider>
        <App />
      </AllResultsProvider>
    </CapacityProvider>
  </React.StrictMode>
);
