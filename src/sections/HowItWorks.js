import { Container, Row, Col, Card } from 'react-bootstrap';

/**
 * How It Works Section Component
 * Displays 4 steps of using Pikmi platform
 */
function HowItWorks() {
  return (
    <section id="how-it-works" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">How It Works</h2>
          <p className="lead text-muted">
            Get started with Pikmi in four simple steps
          </p>
        </div>

        <Row className="g-4">
          {/* Step 1: Request Ride */}
          <Col xs={6} md={3}>
            <Card 
              className="h-100 text-center border-0 shadow-sm position-relative overflow-hidden"
              style={{
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0,0,0,0.075)';
              }}
            >
              <Card.Body className="p-4">
                <div className="mb-3">
                  <div 
                    className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{ width: '80px', height: '80px' }}
                  >
                    <i className="bi bi-search" style={{ fontSize: '2.5rem' }}></i>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="badge bg-primary rounded-pill">Step 1</span>
                </div>
                <Card.Title className="fw-bold mb-3">Request Ride</Card.Title>
                <Card.Text className="text-muted small">
                  Post your ride request or offer a ride. Specify your destination, 
                  time, and preferences.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Step 2: Get Matched */}
          <Col xs={6} md={3}>
            <Card 
              className="h-100 text-center border-0 shadow-sm position-relative overflow-hidden"
              style={{
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0,0,0,0.075)';
              }}
            >
              <Card.Body className="p-4">
                <div className="mb-3">
                  <div 
                    className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{ width: '80px', height: '80px' }}
                  >
                    <i className="bi bi-check-circle" style={{ fontSize: '2.5rem' }}></i>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="badge bg-success rounded-pill">Step 2</span>
                </div>
                <Card.Title className="fw-bold mb-3">Get Matched</Card.Title>
                <Card.Text className="text-muted small">
                  Our smart matching system connects you with compatible riders or drivers 
                  in your area.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Step 3: Ride Together */}
          <Col xs={6} md={3}>
            <Card 
              className="h-100 text-center border-0 shadow-sm position-relative overflow-hidden"
              style={{
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0,0,0,0.075)';
              }}
            >
              <Card.Body className="p-4">
                <div className="mb-3">
                  <div 
                    className="bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{ width: '80px', height: '80px' }}
                  >
                    <i className="bi bi-car-front" style={{ fontSize: '2.5rem' }}></i>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="badge bg-info rounded-pill">Step 3</span>
                </div>
                <Card.Title className="fw-bold mb-3">Ride Together</Card.Title>
                <Card.Text className="text-muted small">
                  Enjoy your journey with community members. Share stories, build connections, 
                  and travel sustainably.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Step 4: Earn/Spend Coins */}
          <Col xs={6} md={3}>
            <Card 
              className="h-100 text-center border-0 shadow-sm position-relative overflow-hidden"
              style={{
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0,0,0,0.075)';
              }}
            >
              <Card.Body className="p-4">
                <div className="mb-3">
                  <div 
                    className="bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{ width: '80px', height: '80px' }}
                  >
                    <i className="bi bi-coin" style={{ fontSize: '2.5rem' }}></i>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="badge bg-warning text-dark rounded-pill">Step 4</span>
                </div>
                <Card.Title className="fw-bold mb-3">Earn/Spend Coins</Card.Title>
                <Card.Text className="text-muted small">
                  Earn Pikmi Coins for every ride you share. Use them to pay for future rides 
                  or help others in the community.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HowItWorks;

