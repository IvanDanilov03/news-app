import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "../../icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../../icons/ArrowRightIcon";
import { Button } from "../../ui/Button";
import { Typography } from "../../ui/Typography";

import { styles } from "./styles";

export interface GoButtonProps {
  text: string;
  id: number;
  type: "forward" | "back";
}

export const GoButton: FC<GoButtonProps> = ({ text, type, id }) => {
  const navigate = useNavigate();

  const handleClick = (id: number, type: "forward" | "back") => {
    if (type === "forward") {
      return (event: React.MouseEvent) => {
        navigate(`/news/${id}`);
        event.preventDefault();
      };
    }
    return (event: React.MouseEvent) => {
      if (window.history.state === null) {
        navigate(`/news`);
      } else {
        navigate(-1);
      }
    };
  };

  return (
    <Button onClick={handleClick(id, type)} sx={styles.box}>
      {type === "back" && <ArrowLeftIcon sx={styles.iconBack} />}
      <Typography variant="tiny" sx={styles.title}>
        {text}
      </Typography>
      {type === "forward" && <ArrowRightIcon sx={styles.iconForward} />}
    </Button>
  );
};
