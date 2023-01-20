import { FC } from "react";
import { CircularProgress, CircularProgressProps } from "@mui/material";

export const Loader: FC<CircularProgressProps> = (props) => (
  <CircularProgress {...props} />
);
