import { SxStyles } from "../../types/styles";
import { basicTheme } from "../../theme";

export const styles: SxStyles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    mb: "45px",
  },
  textBox: {
    mx: "35px",
    mt: "-150px",
    p: 6,
    border: "1px solid",
    borderColor: "#EAEAEA",
    zIndex: 2,
    backgroundColor: "#FFFFFF",
    maxWidth: "1290px",
    [basicTheme.breakpoints.up("tablet")]: {
      px: "75px",
      pt: "35px",
      pb: "50px",
      mx: "75px",
    },
  },
  title: {
    textAlign: "center",
    mb: "50px",
  },
  summary: {
    mb: 4,
  },
  buttonWrapper: {
    ml: "60px",
    mr: "auto",
    mt: "35px",
    [basicTheme.breakpoints.up("tablet")]: {
      ml: "150px",
    },
  },
};
