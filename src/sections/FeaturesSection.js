import { Container, Row, Col, Card } from 'react-bootstrap';

/**
 * Features Section Component
 * Displays 6 key features of the Pikmi platform
 */
function FeaturesSection() {
  return (
    <section 
      id="features" 
      className="py-5"
      style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)' }}
    >
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3 text-white">Key Features</h2>
          <p className="lead text-white" style={{ opacity: 0.95 }}>
            Everything you need for seamless community ride-sharing
          </p>
        </div>

        <Row className="g-4">
          {/* Feature 1: Smart Matching Algorithm */}
          <Col xs={12} md={6} lg={4}>
            <Card className="h-100 border-0 shadow-lg" style={{ background: 'rgba(255, 255, 255, 0.95)' }}>
              <Card.Body className="p-4">
                <div className="mb-3">
                  <i className="bi bi-diagram-3 text-primary" style={{ fontSize: '3rem' }}></i>
                </div>
                <Card.Title className="fw-bold mb-3">Smart Matching Algorithm</Card.Title>
                <Card.Text className="text-muted">
                  Our advanced algorithm matches you with the perfect ride partners based on 
                  location, destination, schedule, and preferences for optimal compatibility.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Feature 2: Pikmi Coin Wallet */}
          <Col xs={12} md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="p-4">
                <div className="mb-3">
                  <i className="bi bi-wallet2 text-warning" style={{ fontSize: '3rem' }}></i>
                </div>
                <Card.Title className="fw-bold mb-3">Pikmi Coin Wallet</Card.Title>
                <Card.Text className="text-muted">
                  Manage your Pikmi Coins in a secure digital wallet. Track earnings, 
                  spending, and transactions all in one convenient place.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Feature 3: Secure Profiles */}
          <Col xs={12} md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="p-4">
                <div className="mb-3">
                  <i className="bi bi-shield-check text-success" style={{ fontSize: '3rem' }}></i>
                </div>
                <Card.Title className="fw-bold mb-3">Secure Profiles</Card.Title>
                <Card.Text className="text-muted">
                  Verified user profiles with safety ratings and background checks ensure 
                  a secure and trustworthy community experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Feature 4: Live Map Tracking */}
          <Col xs={12} md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="p-4">
                <div className="mb-3">
                  <i className="bi bi-geo-alt-fill text-danger" style={{ fontSize: '3rem' }}></i>
                </div>
                <Card.Title className="fw-bold mb-3">Live Map Tracking</Card.Title>
                <Card.Text className="text-muted">
                  Real-time GPS tracking lets you see your ride partner's location and 
                  estimated arrival time for better coordination.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Feature 5: Ratings System */}
          <Col xs={12} md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="p-4">
                <div className="mb-3">
                  <i className="bi bi-star-fill text-info" style={{ fontSize: '3rem' }}></i>
                </div>
                <Card.Title className="fw-bold mb-3">Ratings System</Card.Title>
                <Card.Text className="text-muted">
                  Rate and review your ride experiences to help build a reliable community 
                  and maintain high-quality service standards.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Feature 6: Real-Time Notifications */}
          <Col xs={12} md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="p-4">
                <div className="mb-3">
                  <i className="bi bi-bell-fill text-secondary" style={{ fontSize: '3rem' }}></i>
                </div>
                <Card.Title className="fw-bold mb-3">Real-Time Notifications</Card.Title>
                <Card.Text className="text-muted">
                  Stay updated with instant notifications about ride matches, messages, 
                  coin transactions, and important platform updates.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FeaturesSection;

