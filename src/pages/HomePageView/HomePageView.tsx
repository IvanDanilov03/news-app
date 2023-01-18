import { FC } from "react";
import { Container } from "../../components/ui/Container";

import { styles } from "./styles";

interface HomePageViewProps {
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

export const HomePageView: FC<HomePageViewProps> = ({ data }) => {
  return <Container sx={styles.container}>Home Page</Container>;
};
