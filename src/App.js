import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import ProblemSection from './sections/ProblemSection';
import SolutionSection from './sections/SolutionSection';
import HowItWorks from './sections/HowItWorks';
import FeaturesSection from './sections/FeaturesSection';
import ScreenshotsSection from './sections/ScreenshotsSection';
import TeamSection from './sections/TeamSection';
import ContactSection from './sections/ContactSection';

/**
 * Pikmi Landing Page
 * A community ride-sharing platform where people help each other
 * and exchange Pikmi Coins (not real money)
 */
function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <FeaturesSection />
        <ScreenshotsSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
