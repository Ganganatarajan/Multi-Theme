import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext'; 
import Header from './components/Header';
import AboutPage from './pages/About';
import FeaturesPage from './pages/Feature';
import ContactPage from './pages/Contact';
import MainContent from './components/MainContent';

function App() {
  return (
    <ThemeProvider> 
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;