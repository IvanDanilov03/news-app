import { SxStyles } from "../../../types/styles";
import { basicTheme } from "../../../theme";

export const styles: SxStyles = {
  box: {
    display: "flex",
    alignContent: "center",
    flexDirection: "column",
    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
    border: "solid 1px",
    borderColor: "#EAEAEA",
    width: "80%",
    height: "auto",
    justifyContent: "space-between",
    [basicTheme.breakpoints.up("tablet")]: {
      width: "40%",
    },
    [basicTheme.breakpoints.up("laptop")]: {
      width: "400px",
    },
  },
  imageWrapper: {
    width: "100%",
    minHeight: "217px",
    height: "217px",
    maxHeight: "217px",
    objectFit: "cover",
  },
  description: {
    p: 6,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  dateBox: {
    display: "flex",
    alignContent: "center",
    opacity: "60%",
    mt: "25px",
  },
  dateIcon: {
    alignSelf: "center",
    mr: "9px",
  },
  descriptionText: {
    mt: "24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    height: "100%",
  },
  title: {
    mb: "20px",
    display: "flex",
    flexWrap: "wrap",
    columnGap: "3px",
  },
  summary: {
    height: "30%",
    display: "flex",
    flexWrap: "wrap",
  },
  button: {
    pl: 0,
    ml: "17px",
    mb: "25px",
    mt: "20px",
  },
  highlight: {
    backgroundColor: "#FFF619",
    width: "min-content",
  },
  text: {
    width: "min-content",
  },
  textBox: {
    mr: 1,
    width: "min-content",
  },
};
