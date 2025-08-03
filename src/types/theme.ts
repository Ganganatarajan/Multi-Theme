export interface Theme {
  name: string;
  label: string;
  typography: {
    fontFamily: string;
    fontSizeBase: string;
    lineHeight: string;
    headingWeight: number;
  };
  spacing: {
    unit: number;
    sectionPadding: string;
    cardPadding: string;
    elementSpacing: string;
  };
  layout: {
    borderRadius: string;
    borderWidth: string;
    maxWidth: string;
    cardShadow: string;
  };
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    surfaceSecondary: string;
    text: string;
    textSecondary: string;
    textMuted: string;
    border: string;
    borderLight: string;
    success: string;
    warning: string;
    error: string;
    info: string;
  };
}

export type ThemeName = 'light' | 'dark' | 'ocean' | 'forest' | 'sunset';
