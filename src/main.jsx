import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import {SignIn} from "./pages/signIn"

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import theme from "./styles/theme";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SignIn/>
    </ThemeProvider>
  </StrictMode>
);