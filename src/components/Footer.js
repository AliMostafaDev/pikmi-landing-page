import { Container, Row, Col } from 'react-bootstrap';

/**
 * Footer Component
 * Footer with links, contact info, and social media
 */
function Footer() {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 76;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer 
      className="text-dark py-4 mt-5"
      style={{
        background: 'linear-gradient(135deg, #e9d5ff 0%, #ddd6fe 100%)',
        borderTop: '2px solid rgba(102, 126, 234, 0.2)'
      }}
    >
      <Container>
        <Row className="mb-3">
          {/* Brand Section */}
          <Col xs={12} md={4} className="mb-3 mb-md-0">
            <h5 className="fw-bold mb-2" style={{ color: '#667eea' }}>
              <i className="bi bi-car-front me-2"></i>Pikmi
            </h5>
            <p className="text-muted small mb-2">
              Community ride-sharing platform where neighbors help neighbors. 
              Share rides, earn Pikmi Coins, and build stronger communities.
            </p>
          </Col>
          
          {/* Quick Links */}
          <Col xs={6} md={2} className="mb-3 mb-md-0">
            <h6 className="fw-semibold mb-2">Quick Links</h6>
            <ul className="list-unstyled small">
              <li className="mb-1">
                <a 
                  href="#home" 
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="text-muted text-decoration-none"
                  style={{ transition: 'color 0.3s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#667eea'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#6c757d'}
                >
                  Home
                </a>
              </li>
              <li className="mb-1">
                <a 
                  href="#how-it-works" 
                  onClick={(e) => handleNavClick(e, '#how-it-works')}
                  className="text-muted text-decoration-none"
                  style={{ transition: 'color 0.3s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#667eea'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#6c757d'}
                >
                  How It Works
                </a>
              </li>
              <li className="mb-1">
                <a 
                  href="#features" 
                  onClick={(e) => handleNavClick(e, '#features')}
                  className="text-muted text-decoration-none"
                  style={{ transition: 'color 0.3s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#667eea'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#6c757d'}
                >
                  Features
                </a>
              </li>
              <li className="mb-1">
                <a 
                  href="#team" 
                  onClick={(e) => handleNavClick(e, '#team')}
                  className="text-muted text-decoration-none"
                  style={{ transition: 'color 0.3s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#667eea'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#6c757d'}
                >
                  Team
                </a>
              </li>
            </ul>
          </Col>
          
          {/* Resources */}
          <Col xs={6} md={3} className="mb-3 mb-md-0">
            <h6 className="fw-semibold mb-2">Resources</h6>
            <ul className="list-unstyled small">
              <li className="mb-1">
                <a 
                  href="#screenshots" 
                  onClick={(e) => handleNavClick(e, '#screenshots')}
                  className="text-muted text-decoration-none"
                  style={{ transition: 'color 0.3s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#667eea'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#6c757d'}
                >
                  Screenshots
                </a>
              </li>
              <li className="mb-1">
                <a 
                  href="#contact" 
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="text-muted text-decoration-none"
                  style={{ transition: 'color 0.3s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#667eea'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#6c757d'}
                >
                  Contact Us
                </a>
              </li>
              <li className="mb-1">
                <span className="text-muted">Privacy Policy</span>
              </li>
              <li className="mb-1">
                <span className="text-muted">Terms of Service</span>
              </li>
            </ul>
          </Col>
          
          {/* Social & Contact */}
          <Col xs={12} md={3}>
            <h6 className="fw-semibold mb-2">Connect</h6>
            <div className="mb-2">
              <a 
                href="https://github.com/AliMostafaDev/pikmi-landing-page" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-dark text-decoration-none me-3"
                style={{ 
                  fontSize: '1.3rem',
                  transition: 'transform 0.3s ease, color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.2)';
                  e.currentTarget.style.color = '#667eea';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.color = '#212529';
                }}
              >
                <i className="bi bi-github"></i>
              </a>
            </div>
            <p className="text-muted small mb-1">
              <i className="bi bi-envelope me-2"></i>
              support@pikmi.com
            </p>
            <p className="text-muted small mb-0">
              <i className="bi bi-people me-2"></i>
              Built with ❤️ by Pikmi Team
            </p>
          </Col>
        </Row>
        
        {/* Copyright */}
        <hr className="my-2" style={{ borderColor: 'rgba(102, 126, 234, 0.2)' }} />
        <Row>
          <Col xs={12} className="text-center">
            <p className="mb-0 text-muted small">
              &copy; {new Date().getFullYear()} Pikmi. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

