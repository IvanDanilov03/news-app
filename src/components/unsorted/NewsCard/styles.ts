import { SxStyles } from "../../../types/styles";
import { basicTheme } from "../../../theme";

export const styles: SxStyles = {
  box: {
    display: "flex",
    alignContent: "center",
    flexDirection: "column",
    m: 4,
    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
    border: "solid 1px",
    borderColor: "#EAEAEA",
    width: "100%",
    height: "auto",
    [basicTheme.breakpoints.up("tablet")]: {
      width: "40%",
    },
    [basicTheme.breakpoints.up("laptop")]: {
      width: "30%",
    },
  },
  imageWrapper: {
    width: "100%",
    height: "217px",
    "&>img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  description: {
    p: 6
  },
  dateBox: {
    display: "flex",
    alignContent: "center",
    opacity: "60%",
    my: 6,
  },
  dateIcon: {
    alignSelf: "center",
    mr: 2,
  },
  title: {
    width: "100%",
    height: '150px',
    mt: 5,
  },
  button: {
    pl: 0,
    ml: 5,
    mb: 5,
    mt: "auto",
  },
};
