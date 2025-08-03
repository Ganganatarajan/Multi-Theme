import { useTheme } from '../context/ThemeContext';

interface StatCardProps {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export default function StatCard({ label, value, change, isPositive }: StatCardProps) {
  const { currentTheme } = useTheme();

  return (
    <div
      className="p-6 rounded-xl transition-all duration-300 hover:scale-105 transform-gpu"
      style={{
        backgroundColor: currentTheme.colors.surface,
        border: `1px solid ${currentTheme.colors.border}`,
      }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p 
            className="text-sm font-medium transition-colors duration-300"
            style={{ color: currentTheme.colors.textMuted }}
          >
            {label}
          </p>
          <p 
            className="text-2xl font-bold mt-1 transition-colors duration-300"
            style={{ color: currentTheme.colors.text }}
          >
            {value}
          </p>
        </div>
        <div 
          className="text-sm font-medium transition-colors duration-300"
          style={{ 
            color: isPositive ? currentTheme.colors.success : currentTheme.colors.error 
          }}
        >
          {change}
        </div>
      </div>
    </div>
  );
}