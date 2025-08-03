import React, { createContext, useContext, useEffect, useState } from 'react';
import { Theme, ThemeName } from '../types/theme';
import { themes } from '../config/themes';

interface ThemeContextType {
  currentTheme: Theme;
  themeName: ThemeName;
  setTheme: (themeName: ThemeName) => void;
  availableThemes: Theme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [themeName, setThemeName] = useState<ThemeName>(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeName;
    return savedTheme && themes[savedTheme] ? savedTheme : 'light';
  });

  const currentTheme = themes[themeName];
  const availableThemes = Object.values(themes);

  const setTheme = (newThemeName: ThemeName) => {
    setThemeName(newThemeName);
    localStorage.setItem('theme', newThemeName);
  };

  useEffect(() => {
    const root = document.documentElement;
    
    // Apply CSS custom properties
    Object.entries(currentTheme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
    
    // Apply typography
    root.style.setProperty('--font-family', currentTheme.typography.fontFamily);
    root.style.setProperty('--font-size-base', currentTheme.typography.fontSizeBase);
    root.style.setProperty('--line-height', currentTheme.typography.lineHeight);
    root.style.setProperty('--heading-weight', currentTheme.typography.headingWeight.toString());
    
    // Apply spacing
    root.style.setProperty('--spacing-unit', `${currentTheme.spacing.unit}rem`);
    root.style.setProperty('--section-padding', currentTheme.spacing.sectionPadding);
    root.style.setProperty('--card-padding', currentTheme.spacing.cardPadding);
    root.style.setProperty('--element-spacing', currentTheme.spacing.elementSpacing);
    
    // Apply layout
    root.style.setProperty('--border-radius', currentTheme.layout.borderRadius);
    root.style.setProperty('--border-width', currentTheme.layout.borderWidth);
    root.style.setProperty('--max-width', currentTheme.layout.maxWidth);
    root.style.setProperty('--card-shadow', currentTheme.layout.cardShadow);
    
    // Apply to body
    document.body.style.fontFamily = currentTheme.typography.fontFamily;
    document.body.style.fontSize = currentTheme.typography.fontSizeBase;
    document.body.style.lineHeight = currentTheme.typography.lineHeight;
    
  }, [themeName, currentTheme]);

  const value: ThemeContextType = {
    currentTheme,
    themeName,
    setTheme,
    availableThemes,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}