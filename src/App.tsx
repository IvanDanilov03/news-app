import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Box } from "./components/ui/Box";
import { theme } from "./theme";
import HomePage from "./pages/HomePage/HomePage";
import ArticlePage from "./pages/ArticlePage/ArticlePage";

const App: React.FC = () => {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Navigate replace to={`/home`} />} />
          <Route path={`/home`} element={<HomePage />} />
          <Route path={`/home/:newsId`} element={<ArticlePage />} />
        </Routes>
      </ThemeProvider>
    </Box>
  );
};

export default App;
