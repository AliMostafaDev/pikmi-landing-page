import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  Chip
} from '@mui/material';
import { Search, CheckCircle, DirectionsCar, AccountBalanceWallet } from '@mui/icons-material';

function HowItWorks() {
  const theme = useTheme();

  const steps = [
    {
      icon: <Search sx={{ fontSize: 40 }} />,
      color: 'primary',
      step: 1,
      title: 'Request Ride',
      description: 'Post your ride request or offer a ride. Specify your destination, time, and preferences.',
    },
    {
      icon: <CheckCircle sx={{ fontSize: 40 }} />,
      color: 'success',
      step: 2,
      title: 'Get Matched',
      description: 'Our smart matching system connects you with compatible riders or drivers in your area.',
    },
    {
      icon: <DirectionsCar sx={{ fontSize: 40 }} />,
      color: 'info',
      step: 3,
      title: 'Ride Together',
      description: 'Enjoy your journey with community members. Share stories, build connections, and travel sustainably.',
    },
    {
      icon: <AccountBalanceWallet sx={{ fontSize: 40 }} />,
      color: 'warning',
      step: 4,
      title: 'Earn/Spend Coins',
      description: 'Earn Pikmi Coins for every ride you share. Use them to pay for future rides or help others in the community.',
    },
  ];

  return (
    <Box
      id="how-it-works"
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{ mb: 2, fontWeight: 700 }}
        >
          How It Works
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Get started with Pikmi in four simple steps
        </Typography>

        <Grid container spacing={4}>
          {steps.map((step) => (
            <Grid item xs={6} md={3} key={step.step}>
              <Card
                elevation={2}
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      backgroundColor: `${step.color}.main`,
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    {step.icon}
                  </Box>
                  <Chip
                    label={`Step ${step.step}`}
                    color={step.color}
                    size="small"
                    sx={{ mb: 2 }}
                  />
                  <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {step.description}
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

export default HowItWorks;
