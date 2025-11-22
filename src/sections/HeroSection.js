import { Container, Row, Col, Button } from 'react-bootstrap';

/**
 * Hero Section Component
 * Main landing section with headline, description, and call-to-action buttons
 */
function HeroSection() {
  return (
    <section 
      id="home" 
      className="py-5 mt-5"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Column - Text Content */}
          <Col md={6} className="text-white mb-4 mb-md-0">
            <h1 className="display-4 fw-bold mb-4">
              Ride Together. Help Together. Earn Pikmi Coins.
            </h1>
            <p className="lead mb-4">
              Join a community-powered ride-sharing platform where neighbors help neighbors. 
              Share rides, reduce costs, and earn Pikmi Coins as you contribute to a sustainable 
              and connected community. No real money involved—just good deeds and community spirit.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3">
              <Button 
                variant="light" 
                size="lg" 
                className="fw-semibold"
                href="#get-started"
              >
                Get Started
              </Button>
              <Button 
                variant="outline-light" 
                size="lg" 
                className="fw-semibold"
                href="#demo"
              >
                View Demo
              </Button>
            </div>
          </Col>
          
          {/* Right Column - Mobile Mockup Placeholder */}
          <Col md={6} className="text-center">
            <div 
              className="bg-white rounded-4 shadow-lg p-4 d-inline-block"
              style={{
                width: '280px',
                height: '560px',
                maxWidth: '100%'
              }}
            >
              <div 
                className="bg-light rounded-3 w-100 h-100 d-flex align-items-center justify-content-center"
                style={{ minHeight: '100%' }}
              >
                <div className="text-muted">
                  <i className="bi bi-phone" style={{ fontSize: '4rem' }}></i>
                  <p className="mt-3 mb-0">Mobile Mockup</p>
                  <small>Placeholder Image</small>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;

