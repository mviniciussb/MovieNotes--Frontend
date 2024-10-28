import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import {Profile} from "./pages/profile"

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import theme from "./styles/theme";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Profile/>
    </ThemeProvider>
  </StrictMode>
);
