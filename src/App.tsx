import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-all duration-300">
        <Header />
        <MainContent />
      </div>
    </ThemeProvider>
  );
}

export default App;