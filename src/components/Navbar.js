import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';

/**
 * Navigation Bar Component
 * Responsive Bootstrap navbar for Pikmi landing page
 * Includes hamburger menu for mobile devices with smooth scroll
 */
function Navbar() {
  // Handle smooth scroll for navigation links
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 76; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    // Close mobile menu if open
    const navbarCollapse = document.getElementById('pikmi-navbar-nav');
    const navbarToggler = document.querySelector('[aria-controls="pikmi-navbar-nav"]');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarToggler?.click(); // Trigger click to close menu
    }
  };

  return (
    <BootstrapNavbar 
      expand="lg" 
      className="shadow-sm" 
      fixed="top"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <Container>
        <BootstrapNavbar.Brand 
          href="#home" 
          className="fw-bold text-white"
          onClick={(e) => handleNavClick(e, '#home')}
          style={{ cursor: 'pointer' }}
        >
          Pikmi
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle 
          aria-controls="pikmi-navbar-nav" 
          aria-label="Toggle navigation"
        />
        <BootstrapNavbar.Collapse id="pikmi-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="text-white"
              style={{ fontWeight: '500' }}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              href="#how-it-works"
              onClick={(e) => handleNavClick(e, '#how-it-works')}
              className="text-white"
              style={{ fontWeight: '500' }}
            >
              How It Works
            </Nav.Link>
            <Nav.Link 
              href="#features"
              onClick={(e) => handleNavClick(e, '#features')}
              className="text-white"
              style={{ fontWeight: '500' }}
            >
              Features
            </Nav.Link>
            <Nav.Link 
              href="#screenshots"
              onClick={(e) => handleNavClick(e, '#screenshots')}
              className="text-white"
              style={{ fontWeight: '500' }}
            >
              Screenshots
            </Nav.Link>
            <Nav.Link 
              href="#team"
              onClick={(e) => handleNavClick(e, '#team')}
              className="text-white"
              style={{ fontWeight: '500' }}
            >
              Team
            </Nav.Link>
            <Nav.Link 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-white"
              style={{ fontWeight: '500' }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;

