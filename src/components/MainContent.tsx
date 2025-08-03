import { Palette, Zap, Smartphone, Globe, Star, TrendingUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ThemePreview from './ThemePreview';
import FeatureCard from './FeatureCard';
import StatCard from './StatCard';

export default function MainContent() {
  const { currentTheme, themeName, setTheme, availableThemes } = useTheme();

  const features = [
    {
      icon: Palette,
      title: 'Multiple Themes',
      description: 'Choose from 5 carefully crafted themes, each with unique color palettes and personalities.',
    },
    {
      icon: Zap,
      title: 'Instant Switching',
      description: 'Switch between themes instantly with smooth animations and transitions.',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Fully responsive design that looks great on all devices and screen sizes.',
    },
    {
      icon: Globe,
      title: 'Persistent Storage',
      description: 'Your theme preference is saved and restored automatically across sessions.',
    },
  ];

  const stats = [
    { label: 'Available Themes', value: '5', change: '+2 this month', isPositive: true },
    { label: 'Color Variants', value: '75', change: '+15 this week', isPositive: true },
    { label: 'Performance Score', value: '98%', change: '+5% improvement', isPositive: true },
    { label: 'User Satisfaction', value: '4.9/5', change: '+0.2 this quarter', isPositive: true },
  ];

  return (
    <main 
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: currentTheme.colors.background }}
    >
      {/* Hero Section */}
      <section className="pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 
              className="text-4xl md:text-6xl font-bold mb-6 transition-colors duration-300"
              style={{ color: currentTheme.colors.text }}
            >
              Beautiful
              <span 
                className="block transition-colors duration-300"
                style={{ color: currentTheme.colors.primary }}
              >
                Theme Switching
              </span>
            </h1>
            <p 
              className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300"
              style={{ color: currentTheme.colors.textSecondary }}
            >
              Experience seamless theme transitions with our modern React application. 
              Choose from multiple themes and watch the magic happen.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Theme Previews */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300"
              style={{ color: currentTheme.colors.text }}
            >
              Choose Your Theme
            </h2>
            <p 
              className="text-lg max-w-2xl mx-auto transition-colors duration-300"
              style={{ color: currentTheme.colors.textSecondary }}
            >
              Each theme has been carefully designed with accessibility and aesthetics in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableThemes.map((theme) => (
              <ThemePreview
                key={theme.name}
                theme={theme}
                isActive={theme.name === themeName}
                onClick={() => setTheme(theme.name as any)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300"
              style={{ color: currentTheme.colors.text }}
            >
              Powerful Features
            </h2>
            <p 
              className="text-lg max-w-2xl mx-auto transition-colors duration-300"
              style={{ color: currentTheme.colors.textSecondary }}
            >
              Built with modern web technologies and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...feature}
                gradient={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="p-8 rounded-2xl transition-all duration-300"
            style={{
              backgroundColor: currentTheme.colors.surface,
              border: `1px solid ${currentTheme.colors.border}`,
            }}
          >
            <div className="text-center mb-8">
              <h3 
                className="text-2xl font-bold mb-4 transition-colors duration-300"
                style={{ color: currentTheme.colors.text }}
              >
                Interactive Demo
              </h3>
              <p 
                className="text-lg transition-colors duration-300"
                style={{ color: currentTheme.colors.textSecondary }}
              >
                Try switching themes to see live color updates throughout the interface.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div
                className="p-4 rounded-lg transition-all duration-300"
                style={{ backgroundColor: currentTheme.colors.primary }}
              >
                <Star className="w-8 h-8 text-white mb-2" />
                <h4 className="text-lg font-semibold text-white mb-1">Primary Color</h4>
                <p className="text-sm text-white/80">Main brand color</p>
              </div>

              <div
                className="p-4 rounded-lg transition-all duration-300"
                style={{ backgroundColor: currentTheme.colors.secondary }}
              >
                <TrendingUp className="w-8 h-8 text-white mb-2" />
                <h4 className="text-lg font-semibold text-white mb-1">Secondary Color</h4>
                <p className="text-sm text-white/80">Supporting accent</p>
              </div>

              <div
                className="p-4 rounded-lg transition-all duration-300"
                style={{ backgroundColor: currentTheme.colors.accent }}
              >
                <Zap className="w-8 h-8 text-white mb-2" />
                <h4 className="text-lg font-semibold text-white mb-1">Accent Color</h4>
                <p className="text-sm text-white/80">Highlight elements</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}