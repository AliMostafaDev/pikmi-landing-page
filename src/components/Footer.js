import { Container, Row, Col } from 'react-bootstrap';

/**
 * Footer Component
 * Footer with logo, copyright, GitHub link, and university name
 */
function Footer() {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={4} className="text-center text-md-start mb-3 mb-md-0">
            <h4 className="fw-bold mb-0">Pikmi</h4>
            <p className="text-muted small mb-0">Community Ride-Sharing Platform</p>
          </Col>
          
          <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Pikmi. All rights reserved.
            </p>
          </Col>
          
          <Col xs={12} md={4} className="text-center text-md-end">
            <div className="mb-2">
              <a 
                href="https://github.com/AliMostafaDev/pikmi-landing-page" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light text-decoration-none me-3"
                style={{ fontSize: '1.5rem' }}
              >
                <i className="bi bi-github"></i>
              </a>
            </div>
            <p className="text-muted small mb-0">University Name</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

