import { FC } from "react";
import {
  InputAdornment as MuiInputAdornment,
  InputAdornmentProps,
} from "@mui/material";

export const InputAdornment: FC<InputAdornmentProps> = (props) => (
  <MuiInputAdornment {...props} />
);
