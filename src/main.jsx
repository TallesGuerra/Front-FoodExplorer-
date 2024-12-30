import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";
import GlobalStyles from "./styles/global";

import { Home } from "./pages/Home";
import { EditDish } from "./pages/EditDish";
import { DishDetails } from "./pages/DishDetails";




createRoot(document.getElementById("root")).render(
  <StrictMode>
     <ThemeProvider theme={theme}>
      <GlobalStyles/>
       <EditDish />

     </ThemeProvider>
  
      
  </StrictMode>
);
