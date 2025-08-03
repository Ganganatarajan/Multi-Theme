import { useState } from 'react'; // Import useState properly
import { ChevronDown, Moon, Sun, Droplets, TreePine, Sunset } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ThemeName } from '../types/theme';

const themeIcons = {
  light: Sun,
  dark: Moon,
  ocean: Droplets,
  forest: TreePine,
  sunset: Sunset,
};

export default function ThemeSelector() {
  const { currentTheme, themeName, setTheme, availableThemes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (newTheme: ThemeName) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
        style={{
          backgroundColor: currentTheme.colors.surfaceSecondary,
          color: currentTheme.colors.text,
          border: `${currentTheme.layout.borderWidth} solid ${currentTheme.colors.border}`,
        }}
      >
        <span className="text-sm font-medium">{currentTheme.label}</span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg border backdrop-blur-md z-50 transition-all duration-300"
          style={{
            backgroundColor: `${currentTheme.colors.surface}F5`,
            borderColor: currentTheme.colors.border,
          }}
        >
          <div className="py-2">
            {availableThemes.map((theme) => {
              const IconComponent = themeIcons[theme.name as ThemeName];
              const isSelected = theme.name === themeName;
              
              return (
                <button
                  key={theme.name}
                  onClick={() => handleThemeChange(theme.name as ThemeName)}
                  className="w-full flex items-center space-x-3 px-4 py-3 text-left transition-all duration-200 hover:scale-[1.02]"
                  style={{
                    backgroundColor: isSelected ? currentTheme.colors.primary + '20' : 'transparent',
                    color: isSelected ? currentTheme.colors.primary : currentTheme.colors.text,
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = currentTheme.colors.surfaceSecondary;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  <div 
                    className="p-1.5 rounded-md"
                    style={{ backgroundColor: theme.colors.primary }}
                  >
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">{theme.label}</span>
                  {isSelected && (
                    <div className="ml-auto w-2 h-2 rounded-full" style={{ backgroundColor: currentTheme.colors.primary }} />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}