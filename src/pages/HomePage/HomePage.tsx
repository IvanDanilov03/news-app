import { FC, useCallback, useEffect, useState } from "react";
import { Box } from "../../components/ui/Box";
import { Loader } from "../../components/ui/Loader";
import { News } from "../../types/api";
import ErrorPage from "../ErrorPage/ErrorPage";
import { HomePageView } from "../HomePageView/HomePageView";

const HomePage: FC = () => {
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

  if (httpError) {
    return <ErrorPage httpError={httpError} />;
  }

  return (
    <Box>
      {isLoading ? <Loader /> : <HomePageView data={loadedNews.slice(0, -1)} />}
    </Box>
  );
};

export default HomePage;
