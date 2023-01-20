import { FC, ReactNode } from "react";
import { Card } from "../../ui/Card";
import { Typography } from "../../ui/Typography";
import { GoButton } from "../GoButton";
import { CardMedia } from "../../ui/CardMedia";

import { styles } from "./styles";
import { CardContent } from "../../ui/CardContent";
import { CardActions } from "../../ui/CardActions";
import { Box } from "../../ui/Box";
import { CalendarIcon } from "../../icons/CalendarIcon";

export interface NewsCardProps {
  dateTitle: string;
  newsTitle: string;
  newsSummary: string;
  imageSrc: string;
  imageAlt: string;
  id: number;
  inputText: string;
  enterInput: boolean;
}

export const NewsCard: FC<NewsCardProps> = ({
  dateTitle,
  newsTitle,
  newsSummary,
  imageSrc,
  imageAlt,
  id,
  inputText,
  enterInput,
}) => {
  const inputArray = inputText.split(" ").map((element) => {
    return element.toLowerCase();
  });

  const resultTitle: ReactNode[] = [];
  const resultSummary: ReactNode[] = [];

  const titleArray = newsTitle.split(" ");
  const summaryArray = newsSummary.split(" ");

  titleArray.map((item) => {
    if (inputArray.includes(item.toLowerCase())) {
      resultTitle.push(
        <Typography variant="h1" sx={styles.highlight}>
          {item}
        </Typography>
      );
    } else {
      resultTitle.push(
        <Typography sx={styles.text} variant="h1">
          {item}
        </Typography>
      );
    }
    return null;
  });

  summaryArray.map((item) => {
    if (inputArray.includes(item.toLowerCase())) {
      resultSummary.push(<Typography sx={styles.highlight}>{item}</Typography>);
    } else {
      resultSummary.push(<Typography sx={styles.text}>{item}</Typography>);
    }
    return null;
  });

  return (
    <Card sx={styles.box}>
      <CardMedia
        sx={styles.imageWrapper}
        component="img"
        image={imageSrc}
        title={imageAlt}
      />
      <CardContent sx={styles.description}>
        <Box sx={styles.dateBox}>
          <CalendarIcon sx={styles.dateIcon} />
          <Typography variant="tiny">{dateTitle}</Typography>
        </Box>

        <Box sx={styles.descriptionText}>
          <Typography gutterBottom variant="h1" sx={styles.title}>
            {enterInput
              ? resultTitle.map((item) => (
                  <Box sx={styles.textBox} key={Math.random()}>
                    {item}
                  </Box>
                ))
              : newsTitle}
          </Typography>
          <Typography sx={styles.summary}>
            {enterInput
              ? resultSummary.map((item) => (
                  <Box sx={styles.textBox} key={Math.random()}>
                    {item}
                  </Box>
                ))
              : newsSummary}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={styles.button}>
        <GoButton id={id} text="Read more" type="forward" />
      </CardActions>
    </Card>
  );
};
