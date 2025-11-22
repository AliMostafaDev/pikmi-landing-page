import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import ProblemSection from './sections/ProblemSection';
import SolutionSection from './sections/SolutionSection';
import HowItWorks from './sections/HowItWorks';
import FeaturesSection from './sections/FeaturesSection';

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
      </main>
    </div>
  );
}

export default App;
