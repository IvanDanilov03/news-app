export {};

declare module '@mui/material/styles' {
  // Update types for breakpoints
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }

  // Update typography types
  interface TypographyVariants {
    body: React.CSSProperties;
    bodyLarge: React.CSSProperties;
    tiny: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    body?: React.CSSProperties;
    bodyLarge?: React.CSSProperties;
    tiny?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body: true;
    bodyLarge: true;
    tiny: true;
  }
}
