import { SxStyles } from "../../types/styles";
import { basicTheme } from "../../theme";

export const styles: SxStyles = {
  root: {
    mb: "63px",
  },
  resultBox: {
    mt: "40px",
    mb: "45px",
    mx: "50px",
    [basicTheme.breakpoints.up("laptop")]: {
      mx: 0,
    },
  },
  divider: {
    width: "100%",
    backgroundColor: "#EAEAEA",
    mt: "5px",
  },
  red: {
    color: "red",
  },
  textBox: {
    mr: 1,
  },
  searchBox: {
    mt: "50px",
    mx: "50px",
    [basicTheme.breakpoints.up("laptop")]: {
      width: "600px",
      mx: 0,
    },
  },
  search: {
    mt: "5px",
    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
    width: "100%",
    borderRadius: "5px",
    height: "50px",
    [basicTheme.breakpoints.up("tablet")]: {
      width: "300px",
    },
    [basicTheme.breakpoints.up("laptop")]: {
      width: "600px",
    },
  },
  searchIcon: {
    my: "auto",
  },
};
