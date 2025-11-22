import { Container, Carousel } from 'react-bootstrap';

/**
 * Screenshots Section Component
 * Displays mobile app screenshots in a carousel
 */
function ScreenshotsSection() {
  return (
    <section id="screenshots" className="py-5" style={{ background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)' }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">App Screenshots</h2>
          <p className="lead text-muted">
            Explore Pikmi's intuitive interface and powerful features
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8" style={{ position: 'relative' }}>
            <Carousel 
              fade 
              indicators 
              controls
              className="shadow-xl rounded-5 overflow-hidden border border-2"
              style={{ 
                width: '100%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '40px 20px'
              }}
            >
              {/* Screenshot 1: Home Screen */}
              <Carousel.Item>
                <div 
                  style={{ 
                    height: '650px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px'
                  }}
                >
                  <div 
                    className="position-relative"
                    style={{
                      width: '300px',
                      height: '600px',
                      maxWidth: '100%'
                    }}
                  >
                    {/* Phone Frame */}
                    <div 
                      className="position-absolute"
                      style={{
                        width: '100%',
                        height: '100%',
                        background: '#1a1a1a',
                        borderRadius: '40px',
                        padding: '8px',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
                      }}
                    >
                      {/* Notch */}
                      <div 
                        className="position-absolute"
                        style={{
                          top: '8px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '120px',
                          height: '25px',
                          background: '#1a1a1a',
                          borderRadius: '0 0 15px 15px',
                          zIndex: 10
                        }}
                      ></div>
                      {/* Screen */}
                      <div 
                        className="bg-white rounded-4"
                        style={{
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '30px 20px',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                        }}
                      >
                        <div className="text-center text-white">
                          <i className="bi bi-phone" style={{ fontSize: '5rem', opacity: 0.9 }}></i>
                          <h5 className="mt-4 mb-2 fw-bold">Home Screen</h5>
                          <p className="small mb-0" style={{ opacity: 0.9 }}>Find rides near you</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>

              {/* Screenshot 2: Ride Matching */}
              <Carousel.Item>
                <div 
                  style={{ 
                    height: '650px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px'
                  }}
                >
                  <div 
                    className="position-relative"
                    style={{
                      width: '300px',
                      height: '600px',
                      maxWidth: '100%'
                    }}
                  >
                    <div 
                      className="position-absolute"
                      style={{
                        width: '100%',
                        height: '100%',
                        background: '#1a1a1a',
                        borderRadius: '40px',
                        padding: '8px',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
                      }}
                    >
                      <div 
                        className="position-absolute"
                        style={{
                          top: '8px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '120px',
                          height: '25px',
                          background: '#1a1a1a',
                          borderRadius: '0 0 15px 15px',
                          zIndex: 10
                        }}
                      ></div>
                      <div 
                        className="bg-white rounded-4"
                        style={{
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '30px 20px',
                          background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
                        }}
                      >
                        <div className="text-center text-white">
                          <i className="bi bi-check-circle" style={{ fontSize: '5rem', opacity: 0.9 }}></i>
                          <h5 className="mt-4 mb-2 fw-bold">Ride Matching</h5>
                          <p className="small mb-0" style={{ opacity: 0.9 }}>Get matched with riders</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>

              {/* Screenshot 3: Map View */}
              <Carousel.Item>
                <div 
                  style={{ 
                    height: '650px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px'
                  }}
                >
                  <div 
                    className="position-relative"
                    style={{
                      width: '300px',
                      height: '600px',
                      maxWidth: '100%'
                    }}
                  >
                    <div 
                      className="position-absolute"
                      style={{
                        width: '100%',
                        height: '100%',
                        background: '#1a1a1a',
                        borderRadius: '40px',
                        padding: '8px',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
                      }}
                    >
                      <div 
                        className="position-absolute"
                        style={{
                          top: '8px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '120px',
                          height: '25px',
                          background: '#1a1a1a',
                          borderRadius: '0 0 15px 15px',
                          zIndex: 10
                        }}
                      ></div>
                      <div 
                        className="bg-white rounded-4"
                        style={{
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '30px 20px',
                          background: 'linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)'
                        }}
                      >
                        <div className="text-center text-white">
                          <i className="bi bi-geo-alt-fill" style={{ fontSize: '5rem', opacity: 0.9 }}></i>
                          <h5 className="mt-4 mb-2 fw-bold">Live Map</h5>
                          <p className="small mb-0" style={{ opacity: 0.9 }}>Track rides in real-time</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>

              {/* Screenshot 4: Coin Wallet */}
              <Carousel.Item>
                <div 
                  style={{ 
                    height: '650px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px'
                  }}
                >
                  <div 
                    className="position-relative"
                    style={{
                      width: '300px',
                      height: '600px',
                      maxWidth: '100%'
                    }}
                  >
                    <div 
                      className="position-absolute"
                      style={{
                        width: '100%',
                        height: '100%',
                        background: '#1a1a1a',
                        borderRadius: '40px',
                        padding: '8px',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
                      }}
                    >
                      <div 
                        className="position-absolute"
                        style={{
                          top: '8px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '120px',
                          height: '25px',
                          background: '#1a1a1a',
                          borderRadius: '0 0 15px 15px',
                          zIndex: 10
                        }}
                      ></div>
                      <div 
                        className="bg-white rounded-4"
                        style={{
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '30px 20px',
                          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                        }}
                      >
                        <div className="text-center text-white">
                          <i className="bi bi-wallet2" style={{ fontSize: '5rem', opacity: 0.9 }}></i>
                          <h5 className="mt-4 mb-2 fw-bold">Pikmi Wallet</h5>
                          <p className="small mb-0" style={{ opacity: 0.9 }}>Manage your coins</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>

              {/* Screenshot 5: Profile */}
              <Carousel.Item>
                <div 
                  style={{ 
                    height: '650px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px'
                  }}
                >
                  <div 
                    className="position-relative"
                    style={{
                      width: '300px',
                      height: '600px',
                      maxWidth: '100%'
                    }}
                  >
                    <div 
                      className="position-absolute"
                      style={{
                        width: '100%',
                        height: '100%',
                        background: '#1a1a1a',
                        borderRadius: '40px',
                        padding: '8px',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
                      }}
                    >
                      <div 
                        className="position-absolute"
                        style={{
                          top: '8px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '120px',
                          height: '25px',
                          background: '#1a1a1a',
                          borderRadius: '0 0 15px 15px',
                          zIndex: 10
                        }}
                      ></div>
                      <div 
                        className="bg-white rounded-4"
                        style={{
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '30px 20px',
                          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
                        }}
                      >
                        <div className="text-center text-white">
                          <i className="bi bi-person-circle" style={{ fontSize: '5rem', opacity: 0.9 }}></i>
                          <h5 className="mt-4 mb-2 fw-bold">Profile</h5>
                          <p className="small mb-0" style={{ opacity: 0.9 }}>View your ratings</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ScreenshotsSection;

