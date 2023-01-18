import React from "react";
import { useParams } from "react-router-dom";
import { Box } from "../../components/ui/Box";
import { Typography } from "../../components/ui/Typography";
import { GoButton } from "../../components/unsorted/GoButton";


const ArticlePage: React.FC = () => {
  const { newsId } = useParams();

  return (
    <Box>
      <Typography>{newsId}</Typography>
      <GoButton id={45654} text="Back to homepage" type="back" />
    </Box>
  );
};

export default ArticlePage;
