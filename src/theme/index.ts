import { createTheme } from "@mui/material";

export const basicTheme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 744,
      laptop: 1280,
      desktop: 1680,
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    h1: {
      fontWeight: 400,
      fontSize: "24px",
      letterSpacing: 0,
      lineHeight: "29.26px",
    },
    body: {
      fontWeight: 400,
      fontSize: "16px",
      letterSpacing: 0,
      lineHeight: "24px",
    },
    bodyLarge: {
      fontWeight: 700,
      fontSize: "16px",
      letterSpacing: 0,
      lineHeight: "24px",
    },
    tiny: {
      fontWeight: 400,
      fontSize: "14px",
      letterSpacing: 0,
      lineHeight: "21px",
    },
  },
  spacing: 4,
});

export const theme = createTheme(
  {
    components: {
      MuiTypography: {
        defaultProps: {
          variant: "body",
        },
      },
      MuiContainer: {
        defaultProps: {
          maxWidth: "laptop",
        },
        styleOverrides: {
          root: {
            paddingLeft: 0,
            paddingRight: 0,
          },
        },
      },
    },
  },
  basicTheme
);
