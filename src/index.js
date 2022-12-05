import React from "react";
import ReactDOM from "react-dom/client";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import App from "./App";
import {
  AllInputProvider,
  CapacityProvider,
  AllResultsProvider,
} from "./CapacityContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CapacityProvider>
        <AllResultsProvider>
          <AllInputProvider>
            <App />
          </AllInputProvider>
        </AllResultsProvider>
      </CapacityProvider>
    </ThemeProvider>
  </React.StrictMode>
);
