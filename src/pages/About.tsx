import { useTheme } from '../context/ThemeContext';

export default function AboutPage() {
  const { currentTheme } = useTheme();

  return (
    <div 
      className="min-h-screen py-16 transition-colors duration-300"
      style={{ backgroundColor: currentTheme.colors.background }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="p-8 rounded-2xl mb-12 transition-all duration-300"
          style={{
            backgroundColor: currentTheme.colors.surface,
            border: `${currentTheme.layout.borderWidth} solid ${currentTheme.colors.border}`,
            borderRadius: currentTheme.layout.borderRadius
          }}
        >
          <h1 
            className="text-3xl md:text-4xl font-bold mb-6 transition-colors duration-300"
            style={{ 
              color: currentTheme.colors.text,
              fontWeight: currentTheme.typography.headingWeight,
              fontFamily: currentTheme.typography.fontFamily
            }}
          >
            About Theme Switcher
          </h1>
          
          <div 
            className="space-y-6 transition-colors duration-300"
            style={{ 
              color: currentTheme.colors.textSecondary,
              fontSize: currentTheme.typography.fontSizeBase,
              lineHeight: currentTheme.typography.lineHeight
            }}
          >
            <p>
              Theme Switcher is a modern React application designed to showcase the power of dynamic theming. 
              With multiple themes to choose from, each with unique color palettes, typography, and layout properties, 
              Theme Switcher provides a seamless user experience.
            </p>
            
            <p>
              Our mission is to demonstrate how a well-implemented theme system can enhance the user experience 
              and provide a personalized feel to any application.
            </p>
            
            <div className="mt-8">
              <h2 
                className="text-xl font-semibold mb-4"
                style={{ 
                  color: currentTheme.colors.text,
                  fontWeight: currentTheme.typography.headingWeight
                }}
              >
                Our Principles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Accessibility", content: "All themes meet WCAG AA contrast standards" },
                  { title: "Consistency", content: "Uniform design language across all themes" },
                  { title: "Performance", content: "Optimized for fast theme switching" }
                ].map((item, index) => (
                  <div 
                    key={item.title}
                    className="p-6 rounded-xl transition-all duration-300"
                    style={{
                      backgroundColor: index % 2 === 0 
                        ? currentTheme.colors.surfaceSecondary 
                        : currentTheme.colors.surface,
                      border: `${currentTheme.layout.borderWidth} solid ${currentTheme.colors.borderLight}`,
                      borderRadius: currentTheme.layout.borderRadius
                    }}
                  >
                    <h3 
                      className="text-lg font-semibold mb-2"
                      style={{ 
                        color: currentTheme.colors.primary,
                        fontWeight: currentTheme.typography.headingWeight
                      }}
                    >
                      {item.title}
                    </h3>
                    <p>{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-10">
              <h2 
                className="text-xl font-semibold mb-4"
                style={{ 
                  color: currentTheme.colors.text,
                  fontWeight: currentTheme.typography.headingWeight
                }}
              >
                The Team
              </h2>
              
              <div className="flex flex-wrap gap-6">
                {['Designer', 'Developer', 'UX Specialist'].map((role) => (
                  <div 
                    key={role}
                    className="flex items-center space-x-4"
                  >
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ 
                        backgroundColor: currentTheme.colors.primary + '20',
                        border: `2px dashed ${currentTheme.colors.primary}`
                      }}
                    >
                      <div 
                        className="w-12 h-12 rounded-full"
                        style={{ backgroundColor: currentTheme.colors.primary }}
                      ></div>
                    </div>
                    <div>
                      <h3 
                        className="font-medium"
                        style={{ color: currentTheme.colors.text }}
                      >
                        {role}
                      </h3>
                      <p 
                        style={{ 
                          color: currentTheme.colors.textMuted,
                          fontSize: '0.875rem'
                        }}
                      >
                        Theme Specialist
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}