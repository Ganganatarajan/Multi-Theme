import { LucideIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: boolean;
}

export default function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  gradient 
}: FeatureCardProps) {
  const { currentTheme } = useTheme();

  return (
    <div
      className="p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg transform-gpu cursor-pointer"
      style={{
        background: gradient 
          ? `linear-gradient(135deg, ${currentTheme.colors.primary}20, ${currentTheme.colors.secondary}20)`
          : currentTheme.colors.surface,
        border: `${currentTheme.layout.borderWidth} solid ${currentTheme.colors.border}`,
      }}
    >
      <div 
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300"
        style={{ backgroundColor: currentTheme.colors.primary }}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
      
      <h3 
        className="text-lg font-semibold mb-2 transition-colors duration-300"
        style={{ 
          color: currentTheme.colors.text,
          fontWeight: currentTheme.typography.headingWeight
        }}
      >
        {title}
      </h3>
      
      <p 
        className="transition-colors duration-300"
        style={{ 
          color: currentTheme.colors.textSecondary,
          fontSize: currentTheme.typography.fontSizeBase,
          lineHeight: currentTheme.typography.lineHeight
        }}
      >
        {description}
      </p>
    </div>
  );
}