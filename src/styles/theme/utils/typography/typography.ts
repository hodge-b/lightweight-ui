import { type Typography } from "~/types/theme";

export const typography: Typography = {
  fontFamily: ["Arial", "sans-serif"],
  fontSize: {
    h1: "2rem",
    h2: "1.5rem",
    h3: "1.25rem",
    h4: "1.125rem",
    h5: "1rem",
    h6: "0.875rem",
    bodyText: "0.875rem",
    bodyTextLarge: "1.125rem",
    caption: "0.75rem",
    subtitles: "1rem",
    overline: "0.625rem"
  },
  fontWeight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900
  },
  lineHeight: {
    bodyText: 1.4,
    headingPrimary: 1.4,
    headingSecondary: 1.5,
    caption: 1.4,
    subtitle: 1.2
  },
  letterSpacing: {
    bodyText: "0.03125rem",
    heading: "0.0625rem",
    caption: "0.0125rem",
    subtitle: "0.0125rem"
  }
};
