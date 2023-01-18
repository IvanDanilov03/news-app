import { FC } from "react";
import { Container } from "../../components/ui/Container";

import { styles } from "./styles";

interface ErrorPageViewProps {}

export const ErrorPageView: FC<ErrorPageViewProps> = () => {
  return <Container sx={styles.container}></Container>;
};
