import { FC } from "react";
import { Container } from "../../components/ui/Container";

import { styles } from "./styles";

interface ArticlePageViewProps {
  data: {
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
  }[];
}

export const ArticlePageView: FC<ArticlePageViewProps> = ({ data }) => {
  return <Container sx={styles.container}></Container>;
};
