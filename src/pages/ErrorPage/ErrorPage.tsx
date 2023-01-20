import { FC } from "react";
import { Box } from "../../components/ui/Box";
import { Typography } from "../../components/ui/Typography";

export interface ErrorPageProps {
  httpError: string;
}

const ErrorPage: FC<ErrorPageProps> = ({ httpError }) => {
  return (
    <Box>
      <Typography variant="h1">Something went wrong!</Typography>
      <Typography>Error: {httpError} </Typography>
    </Box>
  );
};

export default ErrorPage;
