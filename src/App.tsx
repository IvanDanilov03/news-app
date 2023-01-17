import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NewsPage from "./pages/NewsPage";
import NewsDetailsPage from "./pages/NewsDetailsPage";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Box } from "./components/ui/Box";
import { theme } from "./theme";

const App: React.FC = () => {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Navigate replace to={`/news`} />} />
          <Route path={`/news`} element={<NewsPage />} />
          <Route path={`/news/:newsId`} element={<NewsDetailsPage />} />
        </Routes>
        ;
      </ThemeProvider>
    </Box>
  );
};

export default App;
