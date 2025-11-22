import { Container, Row, Col, Card } from 'react-bootstrap';

/**
 * Problem Section Component
 * Displays three main problems that Pikmi solves
 */
function ProblemSection() {
  return (
    <section id="problems" className="py-5 bg-light">
      <Container>
        <Row className="g-4">
          {/* Problem Card 1: High Transportation Cost */}
          <Col md={4}>
            <Card className="h-100 text-center border-0 shadow-sm">
              <Card.Body className="p-4">
                <div className="mb-3">
                  <i className="bi bi-currency-dollar text-danger" style={{ fontSize: '3rem' }}></i>
                </div>
                <Card.Title className="fw-bold mb-3">High Transportation Cost</Card.Title>
                <Card.Text className="text-muted">
                  Rising fuel prices and expensive ride-sharing services make daily commutes 
                  a financial burden. Traditional transportation options drain your wallet 
                  without offering community benefits.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Problem Card 2: Limited Public Transport */}
          <Col md={4}>
            <Card className="h-100 text-center border-0 shadow-sm">
              <Card.Body className="p-4">
                <div className="mb-3">
                  <i className="bi bi-bus-front text-warning" style={{ fontSize: '3rem' }}></i>
                </div>
                <Card.Title className="fw-bold mb-3">Limited Public Transport</Card.Title>
                <Card.Text className="text-muted">
                  Public transportation routes don't always match your needs. Sparse schedules, 
                  inconvenient stops, and long wait times make it difficult to rely on 
                  public transit for daily commutes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Problem Card 3: No Community Connection */}
          <Col md={4}>
            <Card className="h-100 text-center border-0 shadow-sm">
              <Card.Body className="p-4">
                <div className="mb-3">
                  <i className="bi bi-people text-info" style={{ fontSize: '3rem' }}></i>
                </div>
                <Card.Title className="fw-bold mb-3">No Community Connection</Card.Title>
                <Card.Text className="text-muted">
                  Modern transportation is impersonal and transactional. There's no sense of 
                  community, no way to help neighbors, and no reward for contributing to 
                  a shared sustainable solution.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ProblemSection;

