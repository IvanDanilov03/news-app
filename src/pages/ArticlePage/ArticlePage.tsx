import React, { FC, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "../../components/ui/Box";
import { ArticlePageView } from "../ArticlePageView/ArticlePageView";
import { News } from "../../types/api";

const ArticlePage: FC = () => {
  const { newsId } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [loadedNewsDetails, setLoadedNewsDetails] = useState<News>();
  const [httpError, setHttpError] = useState("");
  const navigate = useNavigate();

  const fetchNewsDetails = useCallback(async () => {
    setIsLoading(true);
    setHttpError("");
    try {
      const response = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/${newsId}`
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      setLoadedNewsDetails(responseData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setHttpError((error as Error).message);
    }
  }, [setIsLoading, setHttpError, newsId]);

  useEffect(() => {
    fetchNewsDetails();
  }, [fetchNewsDetails]);

  if (typeof loadedNewsDetails === "undefined") {
    navigate("/home");
    return null;
  }

  return (
    <Box>
      <ArticlePageView
        title={loadedNewsDetails.title}
        imageUrl={loadedNewsDetails.imageUrl}
        newsSite={loadedNewsDetails.newsSite}
        summary={loadedNewsDetails.summary}
      />
    </Box>
  );
};

export default ArticlePage;
