import { FC } from "react";
import { Container } from "../../components/ui/Container";
import { NewsCard } from "../../components/unsorted/NewsCard";

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

export const HomePageView: FC<HomePageViewProps> = ({
  data,
}) => {
  const cleanDate = (createdAt: string) => {
    const propcreatedDate = createdAt;
    const [clearDate] = propcreatedDate.match(
      /(\d{4})-(\d{1,2})-(\d{1,2})/
    ) || [""];
    const date = new Date(clearDate);
    const monthName = date.toLocaleString("en", { month: "long" });
    const year = date.toLocaleString("en", { year: "numeric" });
    const dateNumber = date.toLocaleString("en", { day: "numeric" });

    const dataArray = dateNumber.split("");
    let dateName = "";
    if (dataArray[dataArray.length - 1] === "1") {
      dateName = `${dataArray.join("")}st`;
    } else if (dataArray[dataArray.length - 1] === "2") {
      dateName = `${dataArray.join("")}nd`;
    } else if (dataArray[dataArray.length - 1] === "3") {
      dateName = `${dataArray.join("")}rd`;
    } else {
      dateName = `${dataArray.join("")}th`;
    }
    const resultDate = `${monthName} ${dateName}, ${year}`;
    return resultDate;
  };

  return (
    <Container sx={styles.container}>
      {data.map((item) => (
        <NewsCard
          key={item.id}
          dateTitle={cleanDate(item.publishedAt)}
          newsTitle={item.title}
          newsSummary={`${item.summary.slice(0, 100)}...`}
          imageSrc={item.imageUrl}
          imageAlt={item.title}
          id={item.id}
        />
      ))}
    </Container>
  );
};
