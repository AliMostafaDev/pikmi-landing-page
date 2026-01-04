import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import ProblemSection from './sections/ProblemSection';
import SolutionSection from './sections/SolutionSection';
import HowItWorks from './sections/HowItWorks';
import FeaturesSection from './sections/FeaturesSection';
import ScreenshotsSection from './sections/ScreenshotsSection';
import ContactSection from './sections/ContactSection';

import LoginPage from './pages/LoginPage';
import DashboardLayout from './pages/DashboardLayout';
import DashboardOverview from './pages/DashboardOverview';
import ContentManagement from './pages/ContentManagement';
import AdminManagement from './pages/AdminManagement';


function LandingPage() {
  return (
    <Box>
      <Navbar />
      <Box component="main">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <FeaturesSection />
        <ScreenshotsSection />
        <ContactSection />
      </Box>
      <Footer />
    </Box>
  );
}

function App() {
  return (
    <Routes>
      {/* Landing Page Route */}
      <Route path="/" element={<LandingPage />} />
      
      {/* Admin Dashboard Routes */}
      <Route path="/admin/login" element={<LoginPage />} />
      <Route path="/admin" element={<DashboardLayout />}>
        <Route index element={<DashboardOverview />} />
        <Route path="dashboard" element={<DashboardOverview />} />
        <Route path="content" element={<ContentManagement />} />
        <Route path="admins" element={<AdminManagement />} />
      </Route>
    </Routes>
  );
}

export default App;
