import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  CircularProgress,
  useTheme
} from '@mui/material';
import { ArrowForward, PlayArrow } from '@mui/icons-material';
import { fetchLandingContent, fetchSectionImages, getContent } from '../utils/api';

function HeroSection() {
  const theme = useTheme();
  const [content, setContent] = useState({});
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      const contentData = await fetchLandingContent();
      const heroImages = await fetchSectionImages('hero_image');
      setContent(contentData);
      setImages(heroImages);
      setLoading(false);
    };
    loadContent();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
            : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
          pt: 10,
        }}
      >
        <CircularProgress sx={{ color: 'white' }} />
      </Box>
    );
  }

  const heroImage = images.length > 0 ? images[0] : null;

  return (
    <Box
      id="home"
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
          : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        pt: 10,
        pb: 8,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                color: 'white',
                mb: 3,
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                lineHeight: 1.2,
              }}
            >
              {getContent(content, 'hero_title', 'Ride Together. Help Together. Earn Pikmi Coins.')}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                mb: 4,
                lineHeight: 1.7,
                fontSize: { xs: '1rem', md: '1.25rem' },
              }}
            >
              {getContent(content, 'hero_description', 'Join a community-powered ride-sharing platform where neighbors help neighbors. Share rides, reduce costs, and earn Pikmi Coins as you contribute to a sustainable and connected community.')}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                href="#get-started"
                endIcon={<ArrowForward />}
                sx={{
                  px: 4,
                  py: 1.5,
                  backgroundColor: 'white',
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s',
                }}
              >
                {getContent(content, 'hero_cta_primary', 'Get Started')}
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="#demo"
                startIcon={<PlayArrow />}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderColor: 'white',
                  color: 'white',
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s',
                }}
              >
                {getContent(content, 'hero_cta_secondary', 'View Demo')}
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {heroImage ? (
                <Box
                  component="img"
                  src={`http://localhost:5000${heroImage.image_url}`}
                  alt={heroImage.alt_text || 'Hero image'}
                  sx={{
                    maxWidth: '100%',
                    height: 'auto',
                    maxHeight: '600px',
                    borderRadius: 4,
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                  }}
                />
              ) : (
                <Box
                  sx={{
                    width: { xs: '100%', sm: '300px' },
                    height: { xs: '400px', sm: '600px' },
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px dashed rgba(255, 255, 255, 0.3)',
                  }}
                >
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    Upload image from dashboard
                  </Typography>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeroSection;
