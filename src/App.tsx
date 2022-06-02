import { Header, Intro, Navigation, Projects, About, Contact, Footer } from './components/Index';
import './css/main.css';
import { ThemeProvider } from './ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <div className="intro-nav__container">
        <Intro />
        <Navigation />
      </div>
      <Projects />
      <About />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
