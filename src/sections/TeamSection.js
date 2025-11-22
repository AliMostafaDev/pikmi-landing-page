import { Container, Row, Col, Card } from 'react-bootstrap';

/**
 * Team Section Component
 * Displays team members with their roles and LinkedIn links
 */
function TeamSection() {
  const teamMembers = [
    {
      name: 'Ali Al Mostafa',
      role: 'Backend Developer',
      linkedin: 'https://www.linkedin.com/in/ali-al-mostafa',
      icon: 'bi-code-slash',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      name: 'Hassan Abbas',
      role: 'Frontend Developer',
      linkedin: 'https://www.linkedin.com/in/hassan-abbas',
      icon: 'bi-laptop',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      name: 'Malek Zaknoun',
      role: 'Mobile Developer',
      linkedin: 'https://www.linkedin.com/in/malek-zaknoun',
      icon: 'bi-phone',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    }
  ];

  return (
    <section id="team" className="py-5" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)' }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Our Team</h2>
          <p className="lead text-muted">
            Meet the talented developers behind Pikmi
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {teamMembers.map((member, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <Card 
                className="h-100 border-0 shadow-sm text-center position-relative overflow-hidden"
                style={{
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0,0,0,0.075)';
                }}
              >
                <Card.Body className="p-5">
                  {/* Profile Picture Placeholder */}
                  <div className="mb-4 position-relative">
                    <div 
                      className="rounded-circle d-inline-flex align-items-center justify-content-center text-white position-relative"
                      style={{ 
                        width: '180px', 
                        height: '180px',
                        fontSize: '5rem',
                        background: member.gradient,
                        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <i className={`bi ${member.icon}`}></i>
                    </div>
                  </div>
                  
                  {/* Name */}
                  <Card.Title className="fw-bold mb-2" style={{ fontSize: '1.5rem' }}>
                    {member.name}
                  </Card.Title>
                  
                  {/* Role */}
                  <Card.Text 
                    className="mb-4" 
                    style={{ 
                      color: '#6c757d',
                      fontSize: '1.1rem',
                      fontWeight: '500'
                    }}
                  >
                    {member.role}
                  </Card.Text>
                  
                  {/* LinkedIn Link */}
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm px-4 py-2 rounded-pill"
                    style={{
                      background: member.gradient,
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
                    <i className="bi bi-linkedin me-2"></i>
                    LinkedIn
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default TeamSection;

