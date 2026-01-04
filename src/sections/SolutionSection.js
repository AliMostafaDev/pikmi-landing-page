import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  CircularProgress,
  useTheme,
  Paper
} from '@mui/material';
import { DirectionsCar, AccountBalanceWallet, Favorite } from '@mui/icons-material';
import { fetchLandingContent, fetchSectionImages, getContent } from '../utils/api';

function SolutionSection() {
  const theme = useTheme();
  const [content, setContent] = useState({});
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      const contentData = await fetchLandingContent();
      const solutionImages = await fetchSectionImages('solution_image');
      setContent(contentData);
      setImages(solutionImages);
      setLoading(false);
    };
    loadContent();
  }, []);

  if (loading) {
    return (
      <Box sx={{ py: 8, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  const solutionImage = images.length > 0 ? images[0] : null;

  return (
    <Box
      id="solution"
      sx={{
        py: { xs: 6, md: 10 },
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
          : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              component="h2"
              sx={{ mb: 3, fontWeight: 700, color: 'white' }}
            >
              {getContent(content, 'solution_title', 'Pikmi: Your Community Ride-Sharing Solution')}
            </Typography>
            <Typography
              variant="h6"
              sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.7 }}
            >
              {getContent(content, 'solution_description', 'Pikmi transforms transportation by connecting neighbors, reducing costs, and building community through a coin-based reward system.')}
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <DirectionsCar sx={{ fontSize: 32, mr: 2 }} />
                  <Typography variant="h5" sx={{ fontWeight: 600, color: 'white' }}>
                    Community Ride-Sharing
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.7 }}>
                  Share rides with neighbors going the same direction. Whether you're a driver
                  offering a seat or a passenger looking for a ride, Pikmi connects you with
                  people in your community.
                </Typography>
              </Paper>

              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <AccountBalanceWallet sx={{ fontSize: 32, mr: 2, color: '#fbbf24' }} />
                  <Typography variant="h5" sx={{ fontWeight: 600, color: 'white' }}>
                    Earn Pikmi Coins
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.7 }}>
                  Every ride you share or take earns you Pikmi Coins—a community currency that
                  rewards participation. Use your coins to pay for future rides, or help others
                  by offering rides.
                </Typography>
              </Paper>

              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Favorite sx={{ fontSize: 32, mr: 2, color: '#ef4444' }} />
                  <Typography variant="h5" sx={{ fontWeight: 600, color: 'white' }}>
                    Build Community
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.7 }}>
                  Pikmi goes beyond transportation—it's about building stronger neighborhoods.
                  Meet your neighbors, help each other out, and create a more connected,
                  sustainable community where everyone benefits.
                </Typography>
              </Paper>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              {solutionImage ? (
                <Box
                  component="img"
                  src={`http://localhost:5000${solutionImage.image_url}`}
                  alt={solutionImage.alt_text || 'Solution illustration'}
                  sx={{
                    maxWidth: '100%',
                    height: 'auto',
                    maxHeight: '500px',
                    borderRadius: 4,
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                  }}
                />
              ) : (
                <Paper
                  elevation={0}
                  sx={{
                    width: '100%',
                    maxWidth: '500px',
                    minHeight: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    Upload image from dashboard
                  </Typography>
                </Paper>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default SolutionSection;
