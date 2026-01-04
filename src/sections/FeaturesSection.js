import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CircularProgress,
  useTheme
} from '@mui/material';
import {
  AccountTree,
  AccountBalanceWallet,
  Security,
  LocationOn,
  Star,
  Notifications
} from '@mui/icons-material';
import { fetchLandingContent, getContent } from '../utils/api';

function FeaturesSection() {
  const theme = useTheme();
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      const contentData = await fetchLandingContent();
      setContent(contentData);
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

  const features = [
    { icon: <AccountTree sx={{ fontSize: 40 }} />, color: 'primary', titleKey: 'feature_1_title', descKey: 'feature_1_description' },
    { icon: <AccountBalanceWallet sx={{ fontSize: 40 }} />, color: 'warning', titleKey: 'feature_2_title', descKey: 'feature_2_description' },
    { icon: <Security sx={{ fontSize: 40 }} />, color: 'success', titleKey: 'feature_3_title', descKey: 'feature_3_description' },
    { icon: <LocationOn sx={{ fontSize: 40 }} />, color: 'error', titleKey: 'feature_4_title', descKey: 'feature_4_description' },
    { icon: <Star sx={{ fontSize: 40 }} />, color: 'info', titleKey: 'feature_5_title', descKey: 'feature_5_description' },
    { icon: <Notifications sx={{ fontSize: 40 }} />, color: 'secondary', titleKey: 'feature_6_title', descKey: 'feature_6_description' },
  ];

  return (
    <Box
      id="features"
      sx={{
        py: { xs: 6, md: 10 },
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
          : 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{ mb: 2, fontWeight: 700, color: 'white' }}
        >
          {getContent(content, 'features_title', 'Key Features')}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{ mb: 6, color: 'rgba(255, 255, 255, 0.9)' }}
        >
          {getContent(content, 'features_subtitle', 'Everything you need for seamless community ride-sharing')}
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={4}
                sx={{
                  height: '100%',
                  backgroundColor: theme.palette.mode === 'dark'
                    ? 'rgba(30, 41, 59, 0.8)'
                    : 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 8,
                  },
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box
                    sx={{
                      color: `${feature.color}.main`,
                      mb: 2,
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
                    }}
                  >
                    {getContent(content, feature.titleKey, `Feature ${index + 1}`)}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'text.secondary',
                      lineHeight: 1.7,
                    }}
                  >
                    {getContent(content, feature.descKey, 'Feature description')}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default FeaturesSection;
