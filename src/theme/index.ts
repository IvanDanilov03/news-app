import { createTheme } from "@mui/material";

export const basicTheme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 744,
      laptop: 1290,
      desktop: 1440,
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
          color: "#363636",
          variantMapping: {
            h1: "h2",
            h2: "h2",
            h3: "h2",
            h4: "h2",
            h5: "h2",
            h6: "h2",
            subtitle1: "h2",
            subtitle2: "h2",
            body: "p",
            bodyLarge: "p",
            tiny: "p",
          },
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
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            color: "inherit",
          },
        },
      },
    },
  },
  basicTheme
);
