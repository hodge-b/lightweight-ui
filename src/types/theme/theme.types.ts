export interface BrandColors {
  brandAccent: string;
  brandPrimary: string;
  brandSecondary: string;
  brandTertiary: string;
}

export interface BreakPoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface Colors {
  brand: BrandColors;
  commonBlack: string;
  commonWhite: string;
  gray100: string;
  gray300: string;
  gray500: string;
  gray700: string;
  gray900: string;
  severityInfo: string;
  severitySuccess: string;
  severityWarning: string;
  severityError: string;
  severityCritical: string;
}

export interface FontSize {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  bodyText: string;
  bodyTextLarge: string;
  caption: string;
  subtitles: string;
  overline: string;
}

export interface FontWeight {
  thin: number;
  extraLight: number;
  light: number;
  regular: number;
  medium: number;
  semiBold: number;
  bold: number;
  extraBold: number;
  black: number;
}

export interface FontLineHeight {
  bodyText: number;
  headingPrimary: number;
  headingSecondary: number;
  caption: number;
  subtitle: number;
}

export interface FontLineSpacing {
  bodyText: string;
  heading: string;
  caption: string;
  subtitle: string;
}

export interface Spacing {
  padding: ThemeSpacing;
  margins: ThemeSpacing;
}

export interface ThemeSpacing {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface Typography {
  fontFamily: string[];
  fontSize: FontSize;
  fontWeight: FontWeight;
  lineHeight: FontLineHeight;
  letterSpacing: FontLineSpacing;
}

export interface ThemeProps {
  breakpoints: BreakPoints;
  colors: Colors;
  spacing: Spacing;
  typography: Typography;
}
