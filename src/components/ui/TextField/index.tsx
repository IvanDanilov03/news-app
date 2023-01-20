import { FC } from "react";
import { TextField as MuiTextField, TextFieldProps } from "@mui/material";

export const TextField: FC<TextFieldProps> = (props) => (
  <MuiTextField {...props} />
);
