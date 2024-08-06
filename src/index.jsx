import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App.jsx";
import { ContextProvider } from "./contexts/WholeContext.jsx";
import Router from "./Router.jsx";
import GlobalStyle from "./styles/global.js";
import theme from "./styles/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <GlobalStyle />
        <Router />
        <App />
      </ContextProvider>
    </ThemeProvider>
  </>
);
