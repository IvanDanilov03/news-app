import React from "react";
import { useParams } from "react-router-dom";

import { Typography } from "../components/ui/Typography";

const NewsDetailsPage: React.FC = () => {
  const { newsId } = useParams();

  return <Typography>NewsDetailsPage: {newsId}</Typography>;
};

export default NewsDetailsPage;
