import { Theme } from '../types/theme';

interface ThemePreviewProps {
  theme: Theme;
  isActive: boolean;
  onClick: () => void;
}

export default function ThemePreview({ theme, isActive, onClick }: ThemePreviewProps) {
  return (
    <button
      onClick={onClick}
      className="relative w-full p-6 rounded-xl transition-all duration-300 text-left hover:scale-105 hover:shadow-lg transform-gpu"
      style={{
        backgroundColor: theme.colors.surface,
        border: `${theme.layout.borderWidth} solid ${theme.colors.border}`,
        borderRadius: theme.layout.borderRadius,
        fontFamily: theme.typography.fontFamily,
        boxShadow: isActive ? theme.layout.cardShadow : 'none',
        transform: isActive ? 'scale(1.02)' : 'none'
      }}
    >
      <div className="flex space-x-2 mb-4">
        <div 
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: theme.colors.primary }}
        />
        <div 
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: theme.colors.secondary }}
        />
        <div 
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: theme.colors.accent }}
        />
      </div>
      <h3 
        className="text-lg font-semibold mb-2 transition-colors duration-300"
        style={{ 
          color: theme.colors.text,
          fontWeight: theme.typography.headingWeight
        }}
      >
        {theme.label}
      </h3>
      <div 
        className="mb-3 transition-colors duration-300"
        style={{ 
          color: theme.colors.textSecondary,
          fontSize: theme.typography.fontSizeBase,
          lineHeight: theme.typography.lineHeight
        }}
      >
        Experience the {theme.label.toLowerCase()} theme with carefully crafted color combinations.
      </div>
      <div
        className="inline-flex px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
        style={{
          backgroundColor: theme.colors.primary,
          color: '#FFFFFF',
          borderRadius: theme.layout.borderRadius
        }}
      >
        Try {theme.label}
      </div>
      {isActive && (
        <div 
          className="absolute top-4 right-4 w-3 h-3 rounded-full animate-pulse"
          style={{ backgroundColor: theme.colors.primary }}
        />
      )}
    </button>
  );
}