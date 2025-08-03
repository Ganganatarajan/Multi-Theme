import { Theme, ThemeName } from '../types/theme';

export const themes: Record<ThemeName, Theme> = {
  light: {
    name: 'light',
    label: 'Light',
    typography: {
      fontFamily: "'Inter', sans-serif",
      fontSizeBase: "1rem",
      lineHeight: "1.6",
      headingWeight: 700
    },
    spacing: {
      unit: 1,
      sectionPadding: "5rem 0",
      cardPadding: "1.5rem",
      elementSpacing: "1rem"
    },
    layout: {
      borderRadius: "0.75rem",
      borderWidth: "1px",
      maxWidth: "1200px",
      cardShadow: "0 4px 6px rgba(0,0,0,0.05)"
    },
    colors: {
      primary: '#3B82F6',
      secondary: '#8B5CF6',
      accent: '#F59E0B',
      background: '#FFFFFF',
      surface: '#F8FAFC',
      surfaceSecondary: '#F1F5F9',
      text: '#1E293B',
      textSecondary: '#475569',
      textMuted: '#64748B',
      border: '#E2E8F0',
      borderLight: '#F1F5F9',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      info: '#3B82F6',
    },
  },
  dark: {
    name: 'dark',
    label: 'Dark',
    typography: {
      fontFamily: "'Roboto', sans-serif",
      fontSizeBase: "1rem",
      lineHeight: "1.7",
      headingWeight: 500
    },
    spacing: {
      unit: 1.2,
      sectionPadding: "6rem 0",
      cardPadding: "2rem",
      elementSpacing: "1.2rem"
    },
    layout: {
      borderRadius: "0.5rem",
      borderWidth: "1px",
      maxWidth: "1200px",
      cardShadow: "0 4px 12px rgba(0,0,0,0.15)"
    },
    colors: {
      primary: '#60A5FA',
      secondary: '#A78BFA',
      accent: '#FBBF24',
      background: '#0F172A',
      surface: '#1E293B',
      surfaceSecondary: '#334155',
      text: '#F8FAFC',
      textSecondary: '#CBD5E1',
      textMuted: '#94A3B8',
      border: '#334155',
      borderLight: '#475569',
      success: '#34D399',
      warning: '#FBBF24',
      error: '#F87171',
      info: '#60A5FA',
    },
  },
  ocean: {
    name: 'ocean',
    label: 'Ocean',
    typography: {
      fontFamily: "'Open Sans', sans-serif",
      fontSizeBase: "1.1rem",
      lineHeight: "1.8",
      headingWeight: 600
    },
    spacing: {
      unit: 1.3,
      sectionPadding: "7rem 0",
      cardPadding: "2.5rem",
      elementSpacing: "1.5rem"
    },
    layout: {
      borderRadius: "1.5rem",
      borderWidth: "2px",
      maxWidth: "1400px",
      cardShadow: "0 8px 16px rgba(0,0,0,0.1)"
    },
    colors: {
      primary: '#0891B2',
      secondary: '#0284C7',
      accent: '#06B6D4',
      background: '#F0F9FF',
      surface: '#E0F7FA',
      surfaceSecondary: '#B2EBF2',
      text: '#164E63',
      textSecondary: '#0E7490',
      textMuted: '#0891B2',
      border: '#B2EBF2',
      borderLight: '#E0F7FA',
      success: '#14B8A6',
      warning: '#F59E0B',
      error: '#EF4444',
      info: '#0891B2',
    },
  },
  forest: {
    name: 'forest',
    label: 'Forest',
    typography: {
      fontFamily: "'Nunito', sans-serif",
      fontSizeBase: "1.05rem",
      lineHeight: "1.65",
      headingWeight: 800
    },
    spacing: {
      unit: 1.1,
      sectionPadding: "5.5rem 0",
      cardPadding: "1.8rem",
      elementSpacing: "1.3rem"
    },
    layout: {
      borderRadius: "1rem",
      borderWidth: "1px",
      maxWidth: "1300px",
      cardShadow: "0 6px 10px rgba(0,0,0,0.08)"
    },
    colors: {
      primary: '#059669',
      secondary: '#047857',
      accent: '#84CC16',
      background: '#F0FDF4',
      surface: '#DCFCE7',
      surfaceSecondary: '#BBF7D0',
      text: '#14532D',
      textSecondary: '#166534',
      textMuted: '#22C55E',
      border: '#BBF7D0',
      borderLight: '#DCFCE7',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      info: '#059669',
    },
  },
  sunset: {
    name: 'sunset',
    label: 'Sunset',
    typography: {
      fontFamily: "'Comfortaa', cursive",
      fontSizeBase: "1.15rem",
      lineHeight: "1.75",
      headingWeight: 700
    },
    spacing: {
      unit: 1.4,
      sectionPadding: "7.5rem 0",
      cardPadding: "2.2rem",
      elementSpacing: "1.6rem"
    },
    layout: {
      borderRadius: "2rem",
      borderWidth: "3px",
      maxWidth: "1500px",
      cardShadow: "0 10px 25px rgba(0,0,0,0.2)"
    },
    colors: {
      primary: '#DC2626',
      secondary: '#EA580C',
      accent: '#F59E0B',
      background: '#FFF7ED',
      surface: '#FED7AA',
      surfaceSecondary: '#FDBA74',
      text: '#9A3412',
      textSecondary: '#C2410C',
      textMuted: '#EA580C',
      border: '#FDBA74',
      borderLight: '#FED7AA',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      info: '#DC2626',
    },
  },
};