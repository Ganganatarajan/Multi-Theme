import { useTheme } from '../context/ThemeContext';
import { Mail, Phone, MapPin, Send, Github, Twitter, Linkedin } from 'lucide-react';

export default function ContactPage() {
  const { currentTheme } = useTheme();

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      value: "ganganatarajan@outlook.com",
      action: "ganganatarajan@outlook.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "1234567899",
      action: "tel:7854000000"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "123 Chennai",
      action: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, name: "GitHub", url: "#" },
    { icon: Twitter, name: "Twitter", url: "#" },
    { icon: Linkedin, name: "LinkedIn", url: "#" }
  ];

  return (
    <div 
      className="min-h-screen py-16 transition-colors duration-300"
      style={{ backgroundColor: currentTheme.colors.background }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="p-8 rounded-2xl mb-12 transition-all duration-300"
          style={{
            backgroundColor: currentTheme.colors.surface,
            border: `${currentTheme.layout.borderWidth} solid ${currentTheme.colors.border}`,
            borderRadius: currentTheme.layout.borderRadius
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h1 
                className="text-3xl md:text-4xl font-bold mb-6 transition-colors duration-300"
                style={{ 
                  color: currentTheme.colors.text,
                  fontWeight: currentTheme.typography.headingWeight,
                  fontFamily: currentTheme.typography.fontFamily
                }}
              >
                Get in Touch
              </h1>
              
              <p 
                className="mb-10 transition-colors duration-300"
                style={{ 
                  color: currentTheme.colors.textSecondary,
                  fontSize: currentTheme.typography.fontSizeBase,
                  lineHeight: currentTheme.typography.lineHeight
                }}
              >
                Have questions about our theme system? Want to provide feedback or request a custom theme? 
                Our team is here to help you create the perfect experience for your application.
              </p>
              
              <div className="space-y-6 mb-10">
                {contactMethods.map((method) => (
                  <a
                    key={method.title}
                    href={method.action}
                    className="flex items-start space-x-4 group transition-colors duration-300"
                  >
                    <div 
                      className="p-3 rounded-lg group-hover:scale-110 transition-transform duration-300"
                      style={{ 
                        backgroundColor: currentTheme.colors.primary + '20',
                        color: currentTheme.colors.primary
                      }}
                    >
                      <method.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 
                        className="font-semibold group-hover:text-primary transition-colors duration-300"
                        style={{ 
                          color: currentTheme.colors.text,
                          fontWeight: currentTheme.typography.headingWeight
                        }}
                      >
                        {method.title}
                      </h3>
                      <p 
                        className="group-hover:text-primary transition-colors duration-300"
                        style={{ color: currentTheme.colors.textSecondary }}
                      >
                        {method.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div>
                <h3 
                  className="text-lg font-semibold mb-4"
                  style={{ 
                    color: currentTheme.colors.text,
                    fontWeight: currentTheme.typography.headingWeight
                  }}
                >
                  Connect with us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="p-3 rounded-full transition-all duration-300 hover:scale-110"
                      style={{ 
                        backgroundColor: currentTheme.colors.surfaceSecondary,
                        color: currentTheme.colors.text
                      }}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div 
                className="p-8 rounded-2xl h-full"
                style={{ 
                  backgroundColor: currentTheme.colors.surfaceSecondary,
                  border: `${currentTheme.layout.borderWidth} solid ${currentTheme.colors.borderLight}`,
                  borderRadius: currentTheme.layout.borderRadius
                }}
              >
                <h2 
                  className="text-2xl font-bold mb-6"
                  style={{ 
                    color: currentTheme.colors.text,
                    fontWeight: currentTheme.typography.headingWeight
                  }}
                >
                  Send us a message
                </h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label 
                        className="block mb-2"
                        style={{ color: currentTheme.colors.text }}
                      >
                        First Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full p-3 rounded-lg transition-colors duration-300"
                        style={{ 
                          backgroundColor: currentTheme.colors.surface,
                          border: `${currentTheme.layout.borderWidth} solid ${currentTheme.colors.border}`,
                          color: currentTheme.colors.text
                        }}
                      />
                    </div>
                    <div>
                      <label 
                        className="block mb-2"
                        style={{ color: currentTheme.colors.text }}
                      >
                        Last Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full p-3 rounded-lg transition-colors duration-300"
                        style={{ 
                          backgroundColor: currentTheme.colors.surface,
                          border: `${currentTheme.layout.borderWidth} solid ${currentTheme.colors.border}`,
                          color: currentTheme.colors.text
                        }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label 
                      className="block mb-2"
                      style={{ color: currentTheme.colors.text }}
                    >
                      Email
                    </label>
                    <input 
                      type="email" 
                      className="w-full p-3 rounded-lg transition-colors duration-300"
                      style={{ 
                        backgroundColor: currentTheme.colors.surface,
                        border: `${currentTheme.layout.borderWidth} solid ${currentTheme.colors.border}`,
                        color: currentTheme.colors.text
                      }}
                    />
                  </div>
                  
                  <div>
                    <label 
                      className="block mb-2"
                      style={{ color: currentTheme.colors.text }}
                    >
                      Message
                    </label>
                    <textarea 
                      rows={5}
                      className="w-full p-3 rounded-lg transition-colors duration-300"
                      style={{ 
                        backgroundColor: currentTheme.colors.surface,
                        border: `${currentTheme.layout.borderWidth} solid ${currentTheme.colors.border}`,
                        color: currentTheme.colors.text
                      }}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                    style={{ 
                      backgroundColor: currentTheme.colors.primary,
                      color: '#FFFFFF'
                    }}
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}