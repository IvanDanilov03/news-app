import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Box } from "./components/ui/Box";
import { theme } from "./theme";

const App: React.FC = () => {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
    </Box>
  );
};

export default App;
