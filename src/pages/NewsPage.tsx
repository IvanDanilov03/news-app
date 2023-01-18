import { Button } from "@mui/material";
import React, { FC, useCallback, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Box } from "../components/ui/Box";
import { Typography } from "../components/ui/Typography";

export interface News {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
  launches: string[];
  events: string[];
}

const NewsPage: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedNews, setLoadedNews] = useState<News[]>([]);
  const [httpError, setHttpError] = useState("");

  const fetchNews = useCallback(async () => {
    setIsLoading(true);
    setHttpError("");
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      setLoadedNews(responseData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setHttpError((error as Error).message);
    }
  }, [setIsLoading, setHttpError]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return (
    <Box>
      <Typography variant="tiny">NewsPage</Typography>
    </Box>
  );
};

export default NewsPage;
