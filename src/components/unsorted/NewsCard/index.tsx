import { FC } from "react";
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
}

export const NewsCard: FC<NewsCardProps> = ({
  dateTitle,
  newsTitle,
  newsSummary,
  imageSrc,
  imageAlt,
  id,
}) => {
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
        <Typography gutterBottom variant="h1" sx={styles.title}>
          {newsTitle}
        </Typography>
        <Typography>{newsSummary}</Typography>
      </CardContent>
      <CardActions sx={styles.button}>
        <GoButton id={id} text="Read more" type="forward" />
      </CardActions>
    </Card>
  );
};
