import { FC } from "react";
import { Box } from "../../components/ui/Box";
import { Container } from "../../components/ui/Container";
import { Divider } from "../../components/ui/Divider";
import { Typography } from "../../components/ui/Typography";
import { NewsList } from "../../components/unsorted/NewsList";

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
  return (
    <Container sx={styles.root}>
      <Box sx={styles.resultBox}>
        <Typography variant="bodyLarge">Result: {data.length}</Typography>
        <Divider sx={styles.divider} />
      </Box>
      <NewsList data={data} />
    </Container>
  );
};
