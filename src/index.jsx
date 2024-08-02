import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App.jsx";
import Router from "./Router.jsx";
import GlobalStyle from "./styles/global.js";
import theme from "./styles/theme.js";
import { ContextProvider } from "./contexts/WholeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <GlobalStyle />
        <Router />
        <App />
      </ContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
