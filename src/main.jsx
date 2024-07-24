import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from "styled-components";
import App from './App.jsx';
import Router from "./Router.tsx";
import GlobalStyle from "./styles/global.js";
import theme from "./styles/theme.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
      <Router/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)