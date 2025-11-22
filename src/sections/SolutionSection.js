import { Container, Row, Col } from 'react-bootstrap';

/**
 * Solution Section Component
 * Explains how Pikmi solves transportation problems through community rides and Pikmi Coins
 */
function SolutionSection() {
  return (
    <section id="solution" className="py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Column - Explanation Text */}
          <Col md={6} className="mb-4 mb-md-0">
            <h2 className="display-5 fw-bold mb-4">
              How Pikmi Solves Transportation Problems
            </h2>
            <p className="lead mb-4">
              Pikmi transforms transportation by connecting neighbors and creating a sustainable 
              community-driven ride-sharing ecosystem.
            </p>
            
            <div className="mb-4">
              <h4 className="fw-semibold mb-3">
                <i className="bi bi-car-front-fill text-primary me-2"></i>
                Community Ride-Sharing
              </h4>
              <p className="text-muted">
                Share rides with neighbors going the same direction. Whether you're a driver 
                offering a seat or a passenger looking for a ride, Pikmi connects you with 
                people in your community. Reduce costs, share expenses, and build meaningful 
                connections along the way.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="fw-semibold mb-3">
                <i className="bi bi-coin text-warning me-2"></i>
                Earn Pikmi Coins
              </h4>
              <p className="text-muted">
                Every ride you share or take earns you Pikmi Coins—a community currency that 
                rewards participation. Use your coins to pay for future rides, or help others 
                by offering rides. It's not real money, but a token of appreciation that 
                keeps the community connected and motivated.
              </p>
            </div>

            <div>
              <h4 className="fw-semibold mb-3">
                <i className="bi bi-heart-fill text-danger me-2"></i>
                Build Community
              </h4>
              <p className="text-muted">
                Pikmi goes beyond transportation—it's about building stronger neighborhoods. 
                Meet your neighbors, help each other out, and create a more connected, 
                sustainable community where everyone benefits.
              </p>
            </div>
          </Col>

          {/* Right Column - Illustration/Placeholder */}
          <Col md={6} className="text-center">
            <div 
              className="bg-light rounded-4 shadow-lg p-5 d-inline-block"
              style={{
                width: '100%',
                maxWidth: '500px',
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
              }}
            >
              <div className="mb-4">
                <i className="bi bi-people-fill text-primary" style={{ fontSize: '5rem' }}></i>
              </div>
              <div className="mb-3">
                <i className="bi bi-arrow-left-right text-secondary" style={{ fontSize: '3rem' }}></i>
              </div>
              <div>
                <i className="bi bi-coin text-warning" style={{ fontSize: '5rem' }}></i>
              </div>
              <p className="text-muted mt-4 mb-0">
                <small>Illustration Placeholder</small>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SolutionSection;

