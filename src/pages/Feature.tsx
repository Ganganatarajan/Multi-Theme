import { useTheme } from '../context/ThemeContext';
import { Palette, Zap, Smartphone, Globe, Lock, Code, Paintbrush, LayoutGrid } from 'lucide-react';

export default function FeaturesPage() {
  const { currentTheme } = useTheme();

  const features = [
    {
      icon: Palette,
      title: "Multiple Themes",
      description: "Choose from 5 carefully crafted themes with unique personalities",
      color: currentTheme.colors.primary
    },
    {
      icon: Zap,
      title: "Instant Switching",
      description: "Seamless transitions between themes with smooth animations",
      color: currentTheme.colors.secondary
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Perfectly adapted for all screen sizes and devices",
      color: currentTheme.colors.accent
    },
    {
      icon: Globe,
      title: "Cross-Browser",
      description: "Consistent experience across all modern browsers",
      color: currentTheme.colors.info
    },
    {
      icon: Lock,
      title: "Secure Storage",
      description: "Your preferences are securely saved between sessions",
      color: currentTheme.colors.success
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description: "Clean, documented code with TypeScript support",
      color: currentTheme.colors.warning
    },
    {
      icon: Paintbrush,
      title: "Customization",
      description: "Easily extend or create your own themes",
      color: currentTheme.colors.error
    },
    {
      icon: LayoutGrid,
      title: "Layout Options",
      description: "Different layouts for different content types",
      color: currentTheme.colors.info
    }
  ];

  return (
    <div 
      className="min-h-screen py-16 transition-colors duration-300"
      style={{ backgroundColor: currentTheme.colors.background }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="p-8 rounded-2xl mb-12 transition-all duration-300"
          style={{
            backgroundColor: currentTheme.colors.surface,
            border: `${currentTheme.layout.borderWidth} solid ${currentTheme.colors.border}`,
            borderRadius: currentTheme.layout.borderRadius
          }}
        >
          <div className="text-center mb-16">
            <h1 
              className="text-3xl md:text-4xl font-bold mb-6 transition-colors duration-300"
              style={{ 
                color: currentTheme.colors.text,
                fontWeight: currentTheme.typography.headingWeight,
                fontFamily: currentTheme.typography.fontFamily
              }}
            >
              Powerful Features
            </h1>
            <p 
              className="text-lg max-w-2xl mx-auto transition-colors duration-300"
              style={{ 
                color: currentTheme.colors.textSecondary,
                fontSize: currentTheme.typography.fontSizeBase,
                lineHeight: currentTheme.typography.lineHeight
              }}
            >
              Discover all the capabilities that make our theme switcher stand out from the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="p-6 rounded-xl transition-all duration-300 hover:scale-105 transform-gpu"
                style={{
                  backgroundColor: index % 3 === 0 
                    ? currentTheme.colors.surfaceSecondary 
                    : currentTheme.colors.surface,
                  border: `${currentTheme.layout.borderWidth} solid ${currentTheme.colors.borderLight}`,
                  borderRadius: currentTheme.layout.borderRadius
                }}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: feature.color + '20' }}
                >
                  <feature.icon 
                    className="w-7 h-7" 
                    style={{ color: feature.color }} 
                  />
                </div>
                
                <h3 
                  className="text-lg font-semibold mb-2"
                  style={{ 
                    color: currentTheme.colors.text,
                    fontWeight: currentTheme.typography.headingWeight
                  }}
                >
                  {feature.title}
                </h3>
                
                <p 
                  style={{ 
                    color: currentTheme.colors.textSecondary,
                    fontSize: currentTheme.typography.fontSizeBase,
                    lineHeight: currentTheme.typography.lineHeight
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 pt-10 border-t" style={{ borderColor: currentTheme.colors.border }}>
            <h2 
              className="text-2xl font-bold mb-8 text-center"
              style={{ 
                color: currentTheme.colors.text,
                fontWeight: currentTheme.typography.headingWeight
              }}
            >
              Technical Specifications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Framework", value: "React 18", icon: "⚛️" },
                { title: "State Management", value: "Context API", icon: "🔄" },
                { title: "Styling", value: "CSS Variables + Tailwind", icon: "🎨" },
                { title: "Icons", value: "Lucide Icons", icon: "✨" },
                { title: "Animation", value: "Framer Motion", icon: "🎬" },
                { title: "Performance", value: "98/100 Lighthouse", icon: "🚀" },
              ].map((item) => (
                <div 
                  key={item.title}
                  className="flex items-center space-x-4 p-4 rounded-lg"
                  style={{ 
                    backgroundColor: currentTheme.colors.surfaceSecondary,
                    borderRadius: currentTheme.layout.borderRadius
                  }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div 
                      className="font-medium"
                      style={{ color: currentTheme.colors.textSecondary }}
                    >
                      {item.title}
                    </div>
                    <div 
                      className="font-semibold"
                      style={{ color: currentTheme.colors.text }}
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}