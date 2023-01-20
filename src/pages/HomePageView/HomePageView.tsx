import Fuse from "fuse.js";
import { FC, useEffect, useState } from "react";
import { SearchIcon } from "../../components/icons/SearchIcon";
import { Box } from "../../components/ui/Box";
import { Container } from "../../components/ui/Container";
import { Divider } from "../../components/ui/Divider";
import { FormControl } from "../../components/ui/FormControl";
import { Input } from "../../components/ui/Input";
import { InputAdornment } from "../../components/ui/InputAdornment";
import { Typography } from "../../components/ui/Typography";
import { NewsList } from "../../components/unsorted/NewsList";
import { News } from "../../types/api";
import { useSearchParams } from "react-router-dom";
import { IconButton } from "../../components/ui/IconButton";

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
  const [dataToRender, setDataToRender] = useState<News[]>([]);
  const [inputText, setInputText] = useState("");
  const [enterInput, setEnterInput] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const options = {
    includeScore: true,
    keys: [
      {
        name: "title",
        weight: 2,
      },
      {
        name: "summary",
        weight: 1,
      },
    ],
  };

  const fuseNews = new Fuse<News>(data, options);
  const resultFuseNews = fuseNews.search<News>(inputText);
  const filterResultFuseNews = resultFuseNews.map(({ item }) => item);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputText !== "") {
      setSearchParams({ search: inputText });
      setDataToRender(filterResultFuseNews);
      setEnterInput(true);
      if (inputText === "") {
        setDataToRender(data);
        setSearchParams();
      }
    }
  };

  const handleClick = () => {
    setSearchParams({ search: inputText });
    setDataToRender(filterResultFuseNews);
    setEnterInput(true);
  };

  const queryParam = searchParams.get("search");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  useEffect(() => {
    if (inputText === "" || queryParam === null) {
      setDataToRender(data);
      setSearchParams();
      setEnterInput(false);
    }
  }, [inputText, data, queryParam, setSearchParams]);

  return (
    <Container sx={styles.root}>
      <Box sx={styles.searchBox}>
        <Typography variant="bodyLarge">Filter by keywords</Typography>
        <FormControl sx={styles.search}>
          <Input
            sx={styles.searchIcon}
            disableUnderline
            startAdornment={
              <InputAdornment position="start">
                <IconButton onClick={handleClick}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </FormControl>
      </Box>

      <Box sx={styles.resultBox}>
        <Typography variant="bodyLarge">
          Results: {dataToRender.length}
        </Typography>
        <Divider sx={styles.divider} />
      </Box>

      <NewsList
        data={dataToRender}
        inputText={inputText}
        enterInput={enterInput}
      />
    </Container>
  );
};
