import { Container, Row, Col, Form, Button } from 'react-bootstrap';

/**
 * Contact Section Component
 * Contact form for users to reach out
 */
function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <section 
      id="contact" 
      className="py-5"
      style={{ background: '#f8f9fa' }}
    >
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Get In Touch</h2>
          <p className="lead text-muted">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </div>

        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Form onSubmit={handleSubmit} className="shadow-lg rounded-4 p-4 bg-white">
              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter your name" 
                  required
                  className="py-2"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">Email</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter your email" 
                  required
                  className="py-2"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">Message</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={5} 
                  placeholder="Enter your message" 
                  required
                  className="py-2"
                />
              </Form.Group>

              <div className="text-center">
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg"
                  className="px-5 py-2 rounded-pill"
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <i className="bi bi-envelope me-2"></i>
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactSection;

