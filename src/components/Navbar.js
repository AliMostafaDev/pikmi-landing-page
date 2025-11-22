import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';

/**
 * Navigation Bar Component
 * Responsive Bootstrap navbar for Pikmi landing page
 * Includes hamburger menu for mobile devices
 */
function Navbar() {
  return (
    <BootstrapNavbar bg="light" expand="lg" className="shadow-sm" fixed="top">
      <Container>
        <BootstrapNavbar.Brand href="#home" className="fw-bold">
          Pikmi
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle 
          aria-controls="pikmi-navbar-nav" 
          aria-label="Toggle navigation"
        />
        <BootstrapNavbar.Collapse id="pikmi-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#how-it-works">How It Works</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#screenshots">Screenshots</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;

