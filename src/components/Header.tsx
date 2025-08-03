import { Moon, Sun, Droplets, TreePine, Sunset } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ThemeSelector from './ThemeSelector';
import { NavLink } from 'react-router-dom';

const themeIcons = {
  light: Sun,
  dark: Moon,
  ocean: Droplets,
  forest: TreePine,
  sunset: Sunset,
};

export default function Header() {
  const { currentTheme, themeName } = useTheme();
  const IconComponent = themeIcons[themeName];
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className="sticky top-0 z-50 backdrop-blur-md transition-all duration-300"
      style={{ 
        backgroundColor: `${currentTheme.colors.surface}CC`,
        borderBottom: `${currentTheme.layout.borderWidth} solid ${currentTheme.colors.border}`,
        fontFamily: currentTheme.typography.fontFamily
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div 
              className="p-2 rounded-lg transition-colors duration-300"
              style={{ 
                backgroundColor: currentTheme.colors.primary,
                borderRadius: currentTheme.layout.borderRadius
              }}
            >
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 
                className="text-xl font-bold transition-colors duration-300"
                style={{ 
                  color: currentTheme.colors.text,
                  fontWeight: currentTheme.typography.headingWeight
                }}
              >
                Theme Switcher
              </h1>
              <p 
                className="text-sm transition-colors duration-300"
                style={{ 
                  color: currentTheme.colors.textMuted,
                  fontSize: currentTheme.typography.fontSizeBase
                }}
              >
                Multi-theme React application
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  `transition-all duration-300 hover:scale-105 px-3 py-2 rounded-md text-sm font-medium ${
                    isActive ? 'font-bold' : ''
                  }`
                }
                style={({ isActive }) => ({ 
                  color: isActive 
                    ? currentTheme.colors.primary 
                    : currentTheme.colors.textSecondary,
                  fontFamily: currentTheme.typography.fontFamily,
                  fontSize: currentTheme.typography.fontSizeBase,
                  backgroundColor: isActive 
                    ? currentTheme.colors.surfaceSecondary
                    : 'transparent',
                  textDecoration: 'none'
                })}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <ThemeSelector />
        </div>
      </div>
    </header>
  );
}