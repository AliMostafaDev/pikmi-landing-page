import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  useTheme,
  CircularProgress,
  Paper
} from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { fetchSectionImages } from '../utils/api';

function ScreenshotsSection() {
  const theme = useTheme();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadImages = async () => {
      const screenshotImages = await fetchSectionImages('screenshot');
      setImages(screenshotImages);
      setLoading(false);
    };
    loadImages();
  }, []);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (loading) {
    return (
      <Box sx={{ py: 8, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (images.length === 0) {
    return (
      <Box
        id="screenshots"
        sx={{
          py: { xs: 6, md: 10 },
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" align="center" sx={{ mb: 2, fontWeight: 700 }}>
            App Screenshots
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 4 }}>
            Explore Pikmi's intuitive interface and powerful features
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary">
            No screenshots uploaded yet. Upload images from the admin dashboard.
          </Typography>
        </Container>
      </Box>
    );
  }

  return (
    <Box
      id="screenshots"
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" align="center" sx={{ mb: 2, fontWeight: 700 }}>
          App Screenshots
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Explore Pikmi's intuitive interface and powerful features
        </Typography>

        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '800px',
            mx: 'auto',
          }}
        >
          <Paper
            elevation={8}
            sx={{
              position: 'relative',
              width: { xs: '100%', sm: '350px' },
              height: { xs: '500px', sm: '700px' },
              borderRadius: 4,
              overflow: 'hidden',
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
                : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              p: 2,
            }}
          >
            {/* Phone Frame */}
            <Box
              sx={{
                width: '100%',
                height: '100%',
                backgroundColor: '#1a1a1a',
                borderRadius: 3,
                p: 1,
                position: 'relative',
              }}
            >
              {/* Notch */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 4,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '120px',
                  height: '25px',
                  backgroundColor: '#1a1a1a',
                  borderRadius: '0 0 15px 15px',
                  zIndex: 10,
                }}
              />
              {/* Screen */}
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 2,
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  component="img"
                  src={`http://localhost:5000${images[currentIndex]?.image_url}`}
                  alt={images[currentIndex]?.alt_text || `Screenshot ${currentIndex + 1}`}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Box>
          </Paper>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <IconButton
                onClick={prevImage}
                sx={{
                  position: 'absolute',
                  left: { xs: 0, sm: -60 },
                  backgroundColor: 'background.paper',
                  '&:hover': { backgroundColor: 'action.hover' },
                  boxShadow: 4,
                }}
              >
                <ArrowBackIos />
              </IconButton>
              <IconButton
                onClick={nextImage}
                sx={{
                  position: 'absolute',
                  right: { xs: 0, sm: -60 },
                  backgroundColor: 'background.paper',
                  '&:hover': { backgroundColor: 'action.hover' },
                  boxShadow: 4,
                }}
              >
                <ArrowForwardIos />
              </IconButton>
            </>
          )}

          {/* Indicators */}
          {images.length > 1 && (
            <Box
              sx={{
                position: 'absolute',
                bottom: -40,
                display: 'flex',
                gap: 1,
                justifyContent: 'center',
                width: '100%',
              }}
            >
              {images.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: index === currentIndex ? 'primary.main' : 'action.disabled',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      transform: 'scale(1.2)',
                    },
                  }}
                />
              ))}
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default ScreenshotsSection;
